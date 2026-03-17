#!/usr/bin/env python3
"""
TRIZEL Ingestion Pipeline Validator

Validates observation records produced by the Layer-1 ingestion pipeline.
Each record is classified into one of four epistemic states:

  ok           – retrieved_utc is non-empty and the raw file exists/is non-empty
  scheduled    – requested_day_utc is in the future (retrieval not yet attempted)
  not_released – past/present date, retrieved_utc empty (data not yet published)
  unavailable  – retrieved_utc present but raw file is missing or empty

A "valid" record is only one with status="ok". All other states are NOT counted
as valid records. The per-day state (day_status) summarises the dominant state
for a date and is propagated to summary.json and latest.json.

Usage:
  python3 scripts/validate_pipeline.py [--dry-run]

Exit Codes:
  0: Validation complete (files updated or --dry-run)
  1: Fatal error (missing public/ directory, JSON parse failure, etc.)
"""

import sys
import json
from pathlib import Path
from datetime import datetime, timezone

BASE_DIR = Path(__file__).parent.parent
PUBLIC_DIR = BASE_DIR / "public"
OBSERVATIONS_DIR = PUBLIC_DIR / "observations"
SUMMARY_JSON = PUBLIC_DIR / "summary.json"
LATEST_JSON = PUBLIC_DIR / "latest.json"

DRY_RUN = "--dry-run" in sys.argv

# Priority order used to determine the day_status when multiple states exist.
# Higher index = higher priority (i.e. "ok" overrides everything).
_STATE_PRIORITY = {"unavailable": 1, "not_released": 2, "scheduled": 3, "ok": 4}


def _parse_date(date_str: str):
    """Parse a YYYY-MM-DD string into a datetime.date, or return None on failure."""
    try:
        return datetime.strptime(date_str[:10], "%Y-%m-%d").date()
    except (ValueError, TypeError):
        return None


def _pipeline_run_date(data: dict):
    """
    Return the pipeline run date as a datetime.date from generated_utc,
    or today's UTC date as a fallback.
    """
    gen = data.get("generated_utc", "")
    parsed = _parse_date(gen) if gen else None
    return parsed if parsed is not None else datetime.now(timezone.utc).date()


def classify_record_status(obs: dict, raw_base_dir: Path, run_date) -> str:
    """
    Classify a single observation record into one of four epistemic states.

    Returns one of: 'scheduled', 'not_released', 'unavailable', 'ok'
    """
    requested_day = _parse_date(obs.get("requested_day_utc", ""))
    retrieved_utc = obs.get("retrieved_utc", "")
    raw_path = obs.get("raw_path", "")

    # Future date — retrieval not yet attempted
    if requested_day is None or requested_day > run_date:
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


def dominant_day_status(statuses: list) -> str:
    """
    Return the single most informative status for a collection of observation statuses.
    'ok' overrides all others; 'scheduled' is lowest priority when mixed.
    """
    if not statuses:
        return "unavailable"
    return max(statuses, key=lambda s: _STATE_PRIORITY.get(s, 0))


def validate_observation_file(obs_file: Path, raw_base_dir: Path) -> dict:
    """
    Read an observation JSON file, annotate each record with a status field,
    and add valid_record_count + day_status. Returns the updated data dict.
    """
    with open(obs_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    run_date = _pipeline_run_date(data)
    observations = data.get("observations", [])
    valid_count = 0
    statuses = []

    for obs in observations:
        status = classify_record_status(obs, raw_base_dir, run_date)
        obs["status"] = status
        statuses.append(status)
        if status == "ok":
            valid_count += 1

    data["valid_record_count"] = valid_count
    data["day_status"] = dominant_day_status(statuses)
    return data


def write_json(path: Path, data: dict) -> None:
    """Write JSON to path (unless --dry-run)."""
    if DRY_RUN:
        print(f"  [dry-run] Would write: {path}")
        return
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")


def validate_all() -> int:
    """
    Walk all observation files, validate them, then update summary.json and
    latest.json. Returns 0 on success, 1 on fatal error.
    """
    if not PUBLIC_DIR.exists():
        print(f"ERROR: public/ directory not found at {PUBLIC_DIR}", file=sys.stderr)
        return 1
    if not OBSERVATIONS_DIR.exists():
        print(f"ERROR: observations/ directory not found at {OBSERVATIONS_DIR}", file=sys.stderr)
        return 1

    # Raw files are stored relative to the observations directory
    raw_base_dir = OBSERVATIONS_DIR

    print("=" * 72)
    print("TRIZEL Ingestion Pipeline Validator")
    print("=" * 72)
    if DRY_RUN:
        print("Mode: DRY-RUN (no files will be modified)")
    print()

    obs_files = sorted(OBSERVATIONS_DIR.glob("*.json"))
    if not obs_files:
        print("WARNING: No observation JSON files found in", OBSERVATIONS_DIR)
        return 0

    day_valid_counts = {}
    day_statuses = {}

    for obs_file in obs_files:
        print(f"Validating: {obs_file.name}")
        try:
            updated = validate_observation_file(obs_file, raw_base_dir)
        except json.JSONDecodeError as exc:
            print(f"  ERROR: JSON parse failure: {exc}", file=sys.stderr)
            return 1

        valid = updated["valid_record_count"]
        total = len(updated.get("observations", []))
        non_valid = total - valid
        day_st = updated["day_status"]

        print(f"  day_status={day_st}  valid={valid}  non_valid={non_valid}  total={total}")
        write_json(obs_file, updated)

        date_key = updated.get("requested_day_utc", obs_file.stem)
        day_valid_counts[date_key] = valid
        day_statuses[date_key] = day_st

    print()

    # Update summary.json
    if SUMMARY_JSON.exists():
        print(f"Updating: {SUMMARY_JSON.name}")
        try:
            with open(SUMMARY_JSON, "r", encoding="utf-8") as f:
                summary = json.load(f)
        except json.JSONDecodeError as exc:
            print(f"  ERROR: JSON parse failure in summary.json: {exc}", file=sys.stderr)
            return 1

        total_valid = 0
        for day in summary.get("days", []):
            date = day.get("date", "")
            day_valid = day_valid_counts.get(date, 0)
            day["valid_record_count"] = day_valid
            day["day_status"] = day_statuses.get(date, "unavailable")
            total_valid += day_valid

        summary["total_valid_records"] = total_valid
        write_json(SUMMARY_JSON, summary)
        print(f"  total_valid_records={total_valid}")
        print()

    # Update latest.json
    if LATEST_JSON.exists():
        print(f"Updating: {LATEST_JSON.name}")
        try:
            with open(LATEST_JSON, "r", encoding="utf-8") as f:
                latest = json.load(f)
        except json.JSONDecodeError as exc:
            print(f"  ERROR: JSON parse failure in latest.json: {exc}", file=sys.stderr)
            return 1

        latest_day = latest.get("latest_day", "")
        latest_valid = day_valid_counts.get(latest_day, 0)
        latest["valid_record_count"] = latest_valid
        latest["day_status"] = day_statuses.get(latest_day, "unavailable")
        write_json(LATEST_JSON, latest)
        print(f"  valid_record_count={latest_valid}  day_status={latest.get('day_status', '?')}")
        print()

    print("=" * 72)
    print("✅ VALIDATION COMPLETE")
    print("=" * 72)
    return 0


def main() -> int:
    valid_args = {"--dry-run"}
    invalid = [a for a in sys.argv[1:] if a not in valid_args]
    if invalid:
        print(f"ERROR: Invalid arguments: {invalid}", file=sys.stderr)
        print(__doc__)
        return 1

    try:
        return validate_all()
    except KeyboardInterrupt:
        print("\nValidation interrupted.", file=sys.stderr)
        return 1
    except Exception as exc:
        print(f"\nFATAL ERROR: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())

