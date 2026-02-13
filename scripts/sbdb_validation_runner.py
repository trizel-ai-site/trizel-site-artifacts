#!/usr/bin/env python3
"""
SBDB Validation Runner for Claim-001 Verification Sequence

This script validates the SBDB API query tests and verification logs.
By default, it runs in DETERMINISTIC mode (network OFF) and validates
existing committed logs. Network mode must be explicitly enabled.

Usage:
  python3 scripts/sbdb_validation_runner.py              # Network OFF (default)
  python3 scripts/sbdb_validation_runner.py --network    # Network ON
  TRIZEL_NETWORK=1 python3 scripts/sbdb_validation_runner.py  # Network ON (env var)

Exit Codes:
  0: Success (all validations passed)
  1: Validation failure (logs missing, corrupt, or network errors)
  2: Configuration error (invalid arguments)
"""

import sys
import os
import json
import hashlib
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime, timezone

# Configuration
BASE_DIR = Path(__file__).parent.parent
VERIFICATION_DIR = BASE_DIR / "lab" / "publication" / "claim-001" / "verification"
REQUIRED_LOG_FILES = [
    "sbdb_api_specification.md",
    "verification_sequence.md",
    "iau_designation_assessment.md",
    "sbdb_query_tests.json",
    "mpc_crosscheck_log.json",
    "horizons_validation_log.json",
]

# SBDB API Configuration
SBDB_API_BASE = "https://ssd-api.jpl.nasa.gov/sbdb.api"


def compute_sha256(content: bytes) -> str:
    """Compute SHA-256 hash of content."""
    return hashlib.sha256(content).hexdigest()


def check_network_enabled() -> bool:
    """Check if network mode is enabled via flag or environment variable."""
    if "--network" in sys.argv:
        return True
    if os.environ.get("TRIZEL_NETWORK") == "1":
        return True
    return False


def validate_log_files_exist() -> bool:
    """Validate that all required log files exist."""
    print("=" * 80)
    print("SBDB Validation Runner - Claim-001 Verification Sequence")
    print("=" * 80)
    print(f"Base Directory: {BASE_DIR}")
    print(f"Verification Directory: {VERIFICATION_DIR}")
    print()
    
    all_exist = True
    for log_file in REQUIRED_LOG_FILES:
        file_path = VERIFICATION_DIR / log_file
        exists = file_path.exists()
        status = "✓" if exists else "✗"
        print(f"{status} {log_file}: {'EXISTS' if exists else 'MISSING'}")
        if not exists:
            all_exist = False
    
    print()
    return all_exist


def validate_json_log_integrity() -> bool:
    """Validate JSON log files can be parsed and have required structure."""
    print("Validating JSON log integrity...")
    print("-" * 80)
    
    json_logs = [
        "sbdb_query_tests.json",
        "mpc_crosscheck_log.json",
        "horizons_validation_log.json",
    ]
    
    all_valid = True
    for log_file in json_logs:
        file_path = VERIFICATION_DIR / log_file
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # Check required fields
            if "step" not in data:
                print(f"✗ {log_file}: Missing 'step' field")
                all_valid = False
            elif "hash" not in data:
                print(f"✗ {log_file}: Missing 'hash' field")
                all_valid = False
            else:
                print(f"✓ {log_file}: Valid JSON structure")
        
        except json.JSONDecodeError as e:
            print(f"✗ {log_file}: JSON parse error: {e}")
            all_valid = False
        except Exception as e:
            print(f"✗ {log_file}: Error reading file: {e}")
            all_valid = False
    
    print()
    return all_valid


def validate_logs_deterministic() -> bool:
    """Validate existing logs in deterministic mode (no network)."""
    print("Mode: DETERMINISTIC (Network OFF)")
    print("Validating committed logs...")
    print("-" * 80)
    
    # Validate file existence
    if not validate_log_files_exist():
        print("❌ FAILURE: Required log files missing")
        return False
    
    # Validate JSON integrity
    if not validate_json_log_integrity():
        print("❌ FAILURE: JSON log validation failed")
        return False
    
    print("✓ All log files present and valid")
    print()
    return True


def execute_sbdb_query(designation: str, selector_type: str = "des", 
                       include_params: bool = True) -> dict:
    """Execute SBDB API query and return results."""
    # Build query parameters
    params = [f"{selector_type}={designation}"]
    if include_params:
        params.extend(["orb=1", "phys-par=1", "full-prec=1"])
    
    url = f"{SBDB_API_BASE}?{'&'.join(params)}"
    
    print(f"  Query: {url}")
    
    try:
        req = urllib.request.Request(url)
        req.add_header('User-Agent', 'TRIZEL-Verification-v002')
        
        with urllib.request.urlopen(req, timeout=30) as response:
            http_status = response.getcode()
            body_bytes = response.read()
            body_str = body_bytes.decode('utf-8')
            
            result = {
                "url": url,
                "http_status": http_status,
                "http_message": "OK",
                "body": body_str,
                "size_bytes": len(body_bytes),
                "hash_sha256": compute_sha256(body_bytes),
                "timestamp_utc": datetime.now(timezone.utc).isoformat()
            }
            
            print(f"  Status: HTTP {http_status} OK")
            print(f"  Size: {len(body_bytes)} bytes")
            print(f"  SHA-256: {result['hash_sha256'][:16]}...")
            
            return result
    
    except urllib.error.HTTPError as e:
        body_bytes = e.read()
        body_str = body_bytes.decode('utf-8')
        
        result = {
            "url": url,
            "http_status": e.code,
            "http_message": e.reason,
            "body": body_str,
            "size_bytes": len(body_bytes),
            "hash_sha256": compute_sha256(body_bytes),
            "timestamp_utc": datetime.now(timezone.utc).isoformat()
        }
        
        print(f"  Status: HTTP {e.code} {e.reason}")
        print(f"  Size: {len(body_bytes)} bytes")
        print(f"  SHA-256: {result['hash_sha256'][:16]}...")
        
        return result
    
    except Exception as e:
        print(f"  ERROR: {type(e).__name__}: {e}")
        return {
            "url": url,
            "error": str(e),
            "timestamp_utc": datetime.now(timezone.utc).isoformat()
        }


def execute_network_validation() -> bool:
    """Execute live network validation queries."""
    print("Mode: NETWORK ENABLED")
    print("Executing live SBDB API queries...")
    print("-" * 80)
    print()
    
    # Test queries
    test_queries = [
        {"designation": "3I%2FATLAS", "selector": "des", "name": "3I/ATLAS (des)"},
        {"designation": "3I%2FATLAS", "selector": "sstr", "name": "3I/ATLAS (sstr)"},
        {"designation": "1I", "selector": "des", "name": "1I/'Oumuamua (control)"},
        {"designation": "2I", "selector": "des", "name": "2I/Borisov (control)"},
        {"designation": "433", "selector": "des", "name": "433 Eros (control)"},
    ]
    
    results = []
    for query in test_queries:
        print(f"Testing: {query['name']}")
        result = execute_sbdb_query(query["designation"], query["selector"])
        results.append(result)
        print()
    
    # Summary
    print("=" * 80)
    print("Network Validation Summary")
    print("=" * 80)
    
    success_count = sum(1 for r in results if r.get("http_status") in [200, 404])
    error_count = len(results) - success_count
    
    print(f"Total queries: {len(results)}")
    print(f"Successful: {success_count}")
    print(f"Errors: {error_count}")
    print()
    
    # Write results to log file
    log_output = {
        "execution_mode": "network",
        "timestamp_utc": datetime.now(timezone.utc).isoformat(),
        "queries": results,
        "summary": {
            "total": len(results),
            "successful": success_count,
            "errors": error_count
        }
    }
    
    network_log_path = VERIFICATION_DIR / "network_execution_log.json"
    with open(network_log_path, 'w', encoding='utf-8') as f:
        json.dump(log_output, f, indent=2)
    
    print(f"Network execution log written to: {network_log_path}")
    print()
    
    # Check for 3I/ATLAS results
    atlas_des_result = next((r for r in results if "3I%2FATLAS" in r.get("url", "") and "des=" in r.get("url", "")), None)
    
    if atlas_des_result:
        if atlas_des_result.get("http_status") == 200:
            print("✓ SBDB returned HTTP 200 for '3I/ATLAS' (designation found)")
        elif atlas_des_result.get("http_status") == 404:
            print("⚠ SBDB returned HTTP 404 for '3I/ATLAS' (SBDB lag documented)")
            print("  Note: MPC MPEC publication remains authoritative source")
    
    return error_count == 0


def main():
    """Main execution function."""
    # Check network mode
    network_enabled = check_network_enabled()
    
    # Validate arguments
    valid_args = {"--network"}
    invalid_args = [arg for arg in sys.argv[1:] if arg not in valid_args]
    if invalid_args:
        print(f"ERROR: Invalid arguments: {invalid_args}", file=sys.stderr)
        print(__doc__)
        return 2
    
    # Execute appropriate validation mode
    try:
        if network_enabled:
            success = execute_network_validation()
        else:
            success = validate_logs_deterministic()
        
        # Final status
        print("=" * 80)
        if success:
            print("✅ VALIDATION PASSED")
            print("=" * 80)
            return 0
        else:
            print("❌ VALIDATION FAILED")
            print("=" * 80)
            return 1
    
    except KeyboardInterrupt:
        print("\n\nValidation interrupted by user", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"\n\nFATAL ERROR: {type(e).__name__}: {e}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
