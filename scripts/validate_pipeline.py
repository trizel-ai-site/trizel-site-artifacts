#!/usr/bin/env python3
"""
TRIZEL Ingestion Pipeline Validator — Enforcement Layer

Role: ENFORCEMENT / VERIFICATION (read-only)

This script verifies that the observation artifacts produced by the canonical
generation script (scripts/build_observations.py) are complete and contain
correct epistemic state fields.

It is NOT the source of truth and does NOT write or mutate any files.
If it detects missing or incorrect state fields, it exits non-zero and
instructs the operator to re-run the generation script.

Architecture:
  generator  = scripts/build_observations.py   (source of truth, writes artifacts)
  validator  = scripts/validate_pipeline.py    (enforcement, read-only)

Expected state fields per observation:
  status in { ok, scheduled, not_released, unavailable }

Expected per-day artifact fields:
  valid_record_count  - number of observations with status == "ok"
  day_status          - dominant state for the day

Expected per-summary fields:
  total_valid_records - sum of valid_record_count across all days

State classification rules (must match build_observations.py):
  ok           - retrieved_utc non-empty AND raw file exists AND non-empty
  scheduled    - requested_day_utc is in the future
  not_released - requested_day_utc not in future AND retrieved_utc empty
  unavailable  - retrieved_utc present BUT raw file missing or empty

Usage:
  python3 scripts/validate_pipeline.py

Exit Codes:
  0: All artifacts pass verification
  1: Fatal error or verification failure
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

VALID_STATUSES = frozenset({"ok", "scheduled", "not_released", "unavailable"})


def _parse_date(date_str: str):
    """Parse a YYYY-MM-DD string to datetime.date; return None on failure."""
    try:
        return datetime.strptime(str(date_str)[:10], "%Y-%m-%d").date()
    except (ValueError, TypeError):
        return None


def _expected_status(obs: dict, raw_base_dir: Path, run_date) -> str:
    """Compute what the status SHOULD be for an observation."""
    requested_day = _parse_date(obs.get("requested_day_utc", ""))
    retrieved_utc = obs.get("retrieved_utc", "")
    raw_path = obs.get("raw_path", "")

    # Unparseable date indicates a data quality issue, not a schedule
    if requested_day is None:
        return "unavailable"

    if requested_day > run_date:
        return "scheduled"
    if not retrieved_utc:
        return "not_released"
    if not raw_path:
        return "unavailable"
    full_path = raw_base_dir / raw_path
    if not full_path.exists() or full_path.stat().st_size == 0:
        return "unavailable"
    return "ok"


def _expected_day_status(statuses: list, valid_count: int) -> str:
    """Compute what day_status SHOULD be."""
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


def verify_observation_file(obs_file: Path, raw_base_dir: Path, run_date) -> list:
    """
    Verify a single observation artifact.
    Returns a list of error strings (empty list = pass).
    """
    errors = []

    try:
        with open(obs_file, "r", encoding="utf-8") as f:
            data = json.load(f)
    except json.JSONDecodeError as exc:
        return [f"JSON parse failure: {exc}"]

    for field in ("valid_record_count", "day_status"):
        if field not in data:
            errors.append(f"Missing required field: '{field}'")

    if errors:
        return errors

    observations = data.get("observations", [])
    computed_statuses = []
    computed_valid = 0

    for i, obs in enumerate(observations):
        source = obs.get("source_id", f"obs[{i}]")

        if "status" not in obs:
            errors.append(f"{source}: Missing 'status' field")
            continue

        stored_status = obs["status"]
        if stored_status not in VALID_STATUSES:
            errors.append(f"{source}: Invalid status value: '{stored_status}'")
            continue

        expected = _expected_status(obs, raw_base_dir, run_date)
        if stored_status != expected:
            errors.append(
                f"{source}: Status mismatch -- stored='{stored_status}' expected='{expected}'. "
                f"Re-run: python3 scripts/build_observations.py --date {data.get('requested_day_utc', '?')}"
            )

        computed_statuses.append(stored_status)
        if stored_status == "ok":
            computed_valid += 1

    stored_valid = data.get("valid_record_count", -1)
    if stored_valid != computed_valid:
        errors.append(
            f"valid_record_count mismatch -- stored={stored_valid} computed={computed_valid}. "
            "Re-run: python3 scripts/build_observations.py"
        )

    expected_day_st = _expected_day_status(computed_statuses, computed_valid)
    stored_day_st = data.get("day_status", "")
    if stored_day_st != expected_day_st:
        errors.append(
            f"day_status mismatch -- stored='{stored_day_st}' expected='{expected_day_st}'. "
            "Re-run: python3 scripts/build_observations.py"
        )

    return errors


def verify_all() -> int:
    """
    Verify all observation artifacts, summary.json, and latest.json.
    Returns 0 on success, 1 on any failure.
    """
    if not PUBLIC_DIR.exists():
        print(f"ERROR: public/ directory not found at {PUBLIC_DIR}", file=sys.stderr)
        return 1
    if not OBSERVATIONS_DIR.exists():
        print(f"ERROR: observations/ directory not found at {OBSERVATIONS_DIR}", file=sys.stderr)
        return 1

    raw_base_dir = OBSERVATIONS_DIR
    run_date = datetime.now(timezone.utc).date()

    print("=" * 72)
    print("TRIZEL Ingestion Pipeline Validator (Enforcement Layer)")
    print("=" * 72)
    print(f"Run date (UTC): {run_date}")
    print(f"Role: READ-ONLY verification -- never writes files")
    print()

    obs_files = sorted(OBSERVATIONS_DIR.glob("*.json"))
    if not obs_files:
        print("WARNING: No observation JSON files found in", OBSERVATIONS_DIR)
        return 0

    total_errors = 0

    for obs_file in obs_files:
        errors = verify_observation_file(obs_file, raw_base_dir, run_date)
        if errors:
            print(f"FAIL: {obs_file.name}")
            for err in errors:
                print(f"  x {err}")
            total_errors += len(errors)
        else:
            with open(obs_file) as f:
                d = json.load(f)
            valid = d.get("valid_record_count", 0)
            total = d.get("record_count", 0)
            day_st = d.get("day_status", "?")
            print(f"  OK: {obs_file.name}  day_status={day_st}  valid={valid}/{total}")

    print()

    if SUMMARY_JSON.exists():
        print(f"Verifying: {SUMMARY_JSON.name}")
        try:
            with open(SUMMARY_JSON, "r", encoding="utf-8") as f:
                summary = json.load(f)
        except json.JSONDecodeError as exc:
            print(f"  FAIL: JSON parse failure: {exc}", file=sys.stderr)
            return 1

        for field in ("total_valid_records", "days"):
            if field not in summary:
                print(f"  FAIL: Missing '{field}' in summary.json")
                total_errors += 1

        for day in summary.get("days", []):
            for field in ("valid_record_count", "day_status"):
                if field not in day:
                    print(f"  FAIL: Missing '{field}' for day {day.get('date')}")
                    total_errors += 1

        if total_errors == 0:
            print(f"  OK: total_valid_records={summary.get('total_valid_records', '?')}")
        print()

    if LATEST_JSON.exists():
        print(f"Verifying: {LATEST_JSON.name}")
        try:
            with open(LATEST_JSON, "r", encoding="utf-8") as f:
                latest = json.load(f)
        except json.JSONDecodeError as exc:
            print(f"  FAIL: JSON parse failure: {exc}", file=sys.stderr)
            return 1

        for field in ("valid_record_count", "day_status"):
            if field not in latest:
                print(f"  FAIL: Missing '{field}' in latest.json")
                total_errors += 1

        if total_errors == 0:
            print(f"  OK: day_status={latest.get('day_status', '?')}  "
                  f"valid_record_count={latest.get('valid_record_count', '?')}")
        print()

    print("=" * 72)
    if total_errors > 0:
        print(f"VERIFICATION FAILED -- {total_errors} error(s) found")
        print("   -> Re-run the generation script: python3 scripts/build_observations.py")
        print("=" * 72)
        return 1

    print("VERIFICATION PASSED -- all artifacts are generation-correct")
    print("=" * 72)
    return 0


def main() -> int:
    if len(sys.argv) > 1:
        print(f"ERROR: Unexpected arguments: {sys.argv[1:]}", file=sys.stderr)
        print("       validate_pipeline.py takes no arguments (always read-only)")
        print(__doc__)
        return 1

    try:
        return verify_all()
    except KeyboardInterrupt:
        print("\nVerification interrupted.", file=sys.stderr)
        return 1
    except Exception as exc:
        print(f"\nFATAL ERROR: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
