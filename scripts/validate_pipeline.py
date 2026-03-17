#!/usr/bin/env python3
"""
TRIZEL Ingestion Pipeline Validator

Validates observation records produced by the Layer-1 ingestion pipeline.
A record is valid only when:
  - retrieved_utc is non-empty
  - The raw file exists on disk and is non-empty

Invalid (failed) records are marked with status="failed" and excluded from
valid_record_count. summary.json and latest.json are updated accordingly.

Usage:
  python3 scripts/validate_pipeline.py [--dry-run]

Exit Codes:
  0: Validation complete (files updated or --dry-run)
  1: Fatal error (missing public/ directory, JSON parse failure, etc.)
"""

import sys
import os
import json
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent
PUBLIC_DIR = BASE_DIR / "public"
OBSERVATIONS_DIR = PUBLIC_DIR / "observations"
SUMMARY_JSON = PUBLIC_DIR / "summary.json"
LATEST_JSON = PUBLIC_DIR / "latest.json"

DRY_RUN = "--dry-run" in sys.argv


def is_valid_record(obs: dict, raw_base_dir: Path) -> bool:
    """Return True only if retrieved_utc is non-empty and the raw file exists/is non-empty."""
    retrieved_utc = obs.get("retrieved_utc", "")
    if not retrieved_utc:
        return False
    raw_path = obs.get("raw_path", "")
    if not raw_path:
        return False
    full_path = raw_base_dir / raw_path
    if not full_path.exists():
        return False
    if full_path.stat().st_size == 0:
        return False
    return True


def validate_observation_file(obs_file: Path, raw_base_dir: Path) -> dict:
    """
    Read an observation JSON file, annotate each record with a status field,
    and add valid_record_count. Returns the updated data dict.
    """
    with open(obs_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    observations = data.get("observations", [])
    valid_count = 0

    for obs in observations:
        if is_valid_record(obs, raw_base_dir):
            obs["status"] = "ok"
            valid_count += 1
        else:
            obs["status"] = "failed"

    data["valid_record_count"] = valid_count
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

    for obs_file in obs_files:
        print(f"Validating: {obs_file.name}")
        try:
            updated = validate_observation_file(obs_file, raw_base_dir)
        except json.JSONDecodeError as exc:
            print(f"  ERROR: JSON parse failure: {exc}", file=sys.stderr)
            return 1

        valid = updated["valid_record_count"]
        total = len(updated.get("observations", []))
        failed = total - valid

        print(f"  valid={valid}  failed={failed}  total={total}")
        write_json(obs_file, updated)

        date_key = updated.get("requested_day_utc", obs_file.stem)
        day_valid_counts[date_key] = valid

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
        write_json(LATEST_JSON, latest)
        print(f"  valid_record_count={latest_valid}")
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
