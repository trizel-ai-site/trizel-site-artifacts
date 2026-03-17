#!/usr/bin/env python3
"""
TRIZEL Observation Builder — Generation Script (Layer-1 → Layer-2 bridge)

This is the canonical data generation script for the TRIZEL observation pipeline.
It reads raw ingestion manifests from data/ingestion/ and produces the complete,
scientifically-classified observation artifacts in public/.

Epistemic state classification rules (applied at generation time):
  ok           – retrieved_utc is non-empty AND raw file exists AND is non-empty
  scheduled    – requested_day_utc is in the future (retrieval not yet attempted)
  not_released – requested_day_utc is not in the future AND retrieved_utc is empty
  unavailable  – retrieved_utc is present BUT raw file is missing or empty

Day-level aggregation:
  valid_record_count – number of observations with status == "ok"
  day_status:
    "ok"           if valid_record_count > 0
    "scheduled"    if all observations are scheduled (no valid, no unavailable)
    "not_released" if no valid records and no unavailable records (date not future)
    "unavailable"  if at least one unavailable observation and no valid records

Summary aggregation:
  total_valid_records – sum of valid_record_count across all days

Role:
  This script is the SOURCE OF TRUTH for observation state.
  Generated artifacts contain correct state fields before validation runs.
  The separate validate_pipeline.py is an ENFORCEMENT layer only — it verifies
  what this script has generated, and never compensates for missing generation logic.

Input:
  data/ingestion/*.json — per-date raw ingestion manifests (no state fields)

Output:
  public/observations/{date}.json — complete per-day observation files
  public/summary.json             — multi-day summary with total_valid_records
  public/latest.json              — latest day artifact

Usage:
  python3 scripts/build_observations.py [--date YYYY-MM-DD] [--dry-run]

Options:
  --date YYYY-MM-DD  Build a single date only (default: build all)
  --dry-run          Print what would be written without writing any files

Exit Codes:
  0: Build complete
  1: Fatal error (missing input, JSON parse failure, etc.)
"""

import sys
import json
from pathlib import Path
from datetime import datetime, timezone

BASE_DIR = Path(__file__).parent.parent
INGESTION_DIR = BASE_DIR / "data" / "ingestion"
PUBLIC_DIR = BASE_DIR / "public"
OBSERVATIONS_DIR = PUBLIC_DIR / "observations"
SUMMARY_JSON = PUBLIC_DIR / "summary.json"
LATEST_JSON = PUBLIC_DIR / "latest.json"

PIPELINE_VERSION = "1.0.0"

DRY_RUN = "--dry-run" in sys.argv

# ── State Classification ───────────────────────────────────────

# Priority used to determine dominant day_status from a set of observation statuses.
# Higher index = higher priority (ok overrides all others).
_STATE_PRIORITY = {"unavailable": 1, "not_released": 2, "scheduled": 3, "ok": 4}

VALID_STATUSES = frozenset({"ok", "scheduled", "not_released", "unavailable"})


def _parse_date(date_str: str):
    """Parse a YYYY-MM-DD string to datetime.date; return None on failure."""
    try:
        return datetime.strptime(str(date_str)[:10], "%Y-%m-%d").date()
    except (ValueError, TypeError):
        return None


def classify_observation_status(obs: dict, raw_base_dir: Path, run_date) -> str:
    """
    Classify a single observation record into one of four epistemic states.

    Args:
        obs: Raw observation record dict (no status field expected)
        raw_base_dir: Base directory for resolving raw_path
        run_date: datetime.date representing the current run date

    Returns:
        One of: 'ok', 'scheduled', 'not_released', 'unavailable'
    """
    requested_day = _parse_date(obs.get("requested_day_utc", ""))
    retrieved_utc = obs.get("retrieved_utc", "")
    raw_path = obs.get("raw_path", "")

    # Unparseable date indicates a data quality issue, not a schedule
    if requested_day is None:
        return "unavailable"

    # Future date — retrieval not yet attempted
    if requested_day > run_date:
        return "scheduled"

    # Past/present date, no retrieval was recorded
    if not retrieved_utc:
        return "not_released"

    # Retrieval was recorded — verify raw file exists and is non-empty
    if not raw_path:
        return "unavailable"
    full_path = raw_base_dir / raw_path
    if not full_path.exists() or full_path.stat().st_size == 0:
        return "unavailable"

    return "ok"


def compute_day_status(statuses: list, valid_count: int) -> str:
    """
    Compute the aggregate day_status from a list of observation statuses.

    Rules (per problem statement):
      "ok"           if valid_record_count > 0
      "scheduled"    if all observations are scheduled
      "not_released" if no valid records, no unavailable records, date not future
      "unavailable"  if at least one unavailable and no valid records
    """
    if valid_count > 0:
        return "ok"
    if not statuses:
        return "unavailable"
    status_set = set(statuses)
    if status_set == {"scheduled"}:
        return "scheduled"
    if "unavailable" in status_set:
        return "unavailable"
    return "not_released"


# ── I/O Helpers ────────────────────────────────────────────────

def write_json(path: Path, data: dict) -> None:
    """Write JSON to path (unless --dry-run)."""
    if DRY_RUN:
        print(f"  [dry-run] Would write: {path}")
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")


# ── Per-Day Builder ────────────────────────────────────────────

def build_day(raw_manifest: dict, raw_base_dir: Path, generated_utc: str, run_date) -> dict:
    """
    Build a complete per-day observation artifact from a raw ingestion manifest.

    State fields (status, valid_record_count, day_status) are computed here,
    at generation time. The raw manifest must NOT contain any state fields.

    Args:
        raw_manifest: Raw ingestion data for a single day
        raw_base_dir: Directory for resolving raw file paths
        generated_utc: ISO-8601 UTC timestamp for this build run
        run_date: datetime.date for state classification

    Returns:
        Complete observation dict with all state fields populated
    """
    observations = raw_manifest.get("observations", [])
    classified = []
    statuses = []
    valid_count = 0

    for obs in observations:
        # Work on a copy so we never mutate the input
        classified_obs = dict(obs)
        status = classify_observation_status(obs, raw_base_dir, run_date)
        classified_obs["status"] = status
        classified.append(classified_obs)
        statuses.append(status)
        if status == "ok":
            valid_count += 1

    day_status = compute_day_status(statuses, valid_count)

    return {
        "pipeline_version": raw_manifest.get("pipeline_version", PIPELINE_VERSION),
        "generated_utc": generated_utc,
        "requested_day_utc": raw_manifest.get("requested_day_utc", ""),
        "record_count": len(classified),
        "valid_record_count": valid_count,
        "day_status": day_status,
        "observations": classified,
    }


# ── Summary & Latest Builders ──────────────────────────────────

def build_summary(day_results: list, generated_utc: str) -> dict:
    """
    Build summary.json from a list of (date, day_artifact) tuples.

    Args:
        day_results: List of dicts with keys: date, path, sources, record_count,
                     valid_record_count, day_status
        generated_utc: Build run timestamp

    Returns:
        Complete summary dict
    """
    total_valid = sum(d["valid_record_count"] for d in day_results)
    return {
        "pipeline_version": PIPELINE_VERSION,
        "generated_utc": generated_utc,
        "total_days": len(day_results),
        "total_records": sum(d["record_count"] for d in day_results),
        "total_valid_records": total_valid,
        "days": day_results,
    }


def build_latest(latest_day_artifact: dict, latest_date: str, generated_utc: str) -> dict:
    """
    Build latest.json from the most recent day's artifact.

    Args:
        latest_day_artifact: Complete day artifact for the latest date
        latest_date: YYYY-MM-DD string for the latest date
        generated_utc: Build run timestamp

    Returns:
        Complete latest.json dict
    """
    return {
        "pipeline_version": latest_day_artifact.get("pipeline_version", PIPELINE_VERSION),
        "generated_utc": generated_utc,
        "latest_day": latest_date,
        "redirect": f"observations/{latest_date}.json",
        "record_count": latest_day_artifact["record_count"],
        "valid_record_count": latest_day_artifact["valid_record_count"],
        "day_status": latest_day_artifact["day_status"],
        "observations": latest_day_artifact["observations"],
    }


# ── Main Build ─────────────────────────────────────────────────

def parse_args():
    """Parse CLI arguments; return (date_filter, dry_run)."""
    date_filter = None
    args = sys.argv[1:]
    i = 0
    while i < len(args):
        if args[i] == "--dry-run":
            i += 1
            continue
        if args[i] == "--date" and i + 1 < len(args):
            date_filter = args[i + 1]
            i += 2
            continue
        print(f"ERROR: Unknown argument: {args[i]}", file=sys.stderr)
        print(__doc__)
        sys.exit(1)
    return date_filter, DRY_RUN


def build_all(date_filter=None) -> int:
    """
    Build all (or one) observation day artifacts from data/ingestion/ manifests.
    Writes complete state-classified artifacts to public/.

    Returns 0 on success, 1 on fatal error.
    """
    if not INGESTION_DIR.exists():
        print(f"ERROR: Ingestion directory not found: {INGESTION_DIR}", file=sys.stderr)
        print("       Create per-date raw manifests in data/ingestion/*.json", file=sys.stderr)
        return 1

    raw_files = sorted(INGESTION_DIR.glob("*.json"))
    if date_filter:
        raw_files = [f for f in raw_files if f.stem == date_filter]
        if not raw_files:
            print(f"ERROR: No ingestion manifest for date: {date_filter}", file=sys.stderr)
            return 1

    if not raw_files:
        print("WARNING: No ingestion manifests found in", INGESTION_DIR)
        return 0

    # Raw files for observations live in the same directory tree as the output
    raw_base_dir = OBSERVATIONS_DIR

    generated_utc = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    run_date = datetime.now(timezone.utc).date()

    print("=" * 72)
    print("TRIZEL Observation Builder")
    print("=" * 72)
    if DRY_RUN:
        print("Mode: DRY-RUN (no files will be written)")
    print(f"Run date (UTC): {run_date}")
    print(f"Input:  {INGESTION_DIR}")
    print(f"Output: {PUBLIC_DIR}")
    print()

    day_results = []
    built_artifacts = {}

    for raw_file in raw_files:
        print(f"Building: {raw_file.name}")
        try:
            with open(raw_file, "r", encoding="utf-8") as f:
                raw_manifest = json.load(f)
        except json.JSONDecodeError as exc:
            print(f"  ERROR: JSON parse failure: {exc}", file=sys.stderr)
            return 1

        artifact = build_day(raw_manifest, raw_base_dir, generated_utc, run_date)
        date = artifact["requested_day_utc"]
        obs_path = OBSERVATIONS_DIR / f"{date}.json"

        print(f"  day_status={artifact['day_status']}  "
              f"valid={artifact['valid_record_count']}  "
              f"total={artifact['record_count']}")

        write_json(obs_path, artifact)
        built_artifacts[date] = artifact

        # Collect summary row
        sources = sorted({obs["source_id"] for obs in artifact["observations"]})
        day_results.append({
            "date": date,
            "record_count": artifact["record_count"],
            "sources": sources,
            "path": f"observations/{date}.json",
            "valid_record_count": artifact["valid_record_count"],
            "day_status": artifact["day_status"],
        })

    print()

    # Only update summary/latest when building all dates
    if date_filter is None:
        # Summary
        day_results.sort(key=lambda d: d["date"])
        summary = build_summary(day_results, generated_utc)
        print(f"Writing: {SUMMARY_JSON.name}")
        print(f"  total_valid_records={summary['total_valid_records']}")
        write_json(SUMMARY_JSON, summary)
        print()

        # Latest (newest date)
        latest_date = day_results[-1]["date"]
        latest_artifact = built_artifacts[latest_date]
        latest = build_latest(latest_artifact, latest_date, generated_utc)
        print(f"Writing: {LATEST_JSON.name}")
        print(f"  latest_day={latest['latest_day']}  "
              f"valid_record_count={latest['valid_record_count']}  "
              f"day_status={latest['day_status']}")
        write_json(LATEST_JSON, latest)
        print()
    else:
        print("(Skipped summary.json / latest.json — single-date build)")
        print()

    print("=" * 72)
    print("✅ BUILD COMPLETE")
    print("=" * 72)
    return 0


def main() -> int:
    date_filter, _ = parse_args()
    try:
        return build_all(date_filter)
    except KeyboardInterrupt:
        print("\nBuild interrupted.", file=sys.stderr)
        return 1
    except Exception as exc:
        print(f"\nFATAL ERROR: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
