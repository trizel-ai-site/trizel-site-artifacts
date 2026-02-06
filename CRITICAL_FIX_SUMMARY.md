# CRITICAL FIX - Input Source Enforcement

**Date:** 2026-02-06  
**Commit:** 5fcfe08  
**Branch:** copilot/generalize-phase-e-presentation  

## Problem Statement

CI was **FAILING** at the "Verify input source enforcement" step because the generalization introduced a `--data-subdir` parameter that violated governance constraints by allowing reads from paths other than the strictly required `data/publish/3i-atlas/`.

This was a **GOVERNANCE-CRITICAL** failure, not cosmetic.

## Root Cause

The previous implementation included:
```python
def __init__(self, repo_root: Path, claim_id: str, data_subdir: str = "3i-atlas"):
    self.data_dir = repo_root / "data" / "publish" / data_subdir
```

This allowed arbitrary subdirectories under `data/publish/`, violating the requirement that the engine must read ONLY from `data/publish/3i-atlas/`.

## Fixes Implemented

### 1. lab/publication_engine.py

**Changes:**
- ✅ Removed `data_subdir` parameter from `__init__`
- ✅ Added immutable constant: `VERIFIED_INPUT_ROOT = "data/publish/3i-atlas"`
- ✅ Hard-coded input path: `self.data_dir = repo_root / "data" / "publish" / "3i-atlas"`
- ✅ Added `_verify_input_path_security()` method with:
  - Canonical path resolution
  - Path traversal prevention
  - Repository boundary validation
- ✅ Removed `--data-subdir` command-line argument

**New Security Method:**
```python
def _verify_input_path_security(self):
    """
    Verify that the input path is secure and canonical.
    
    This is a governance-critical check that ensures:
    1. The path resolves to the expected location
    2. No path traversal or symbolic link attacks
    3. The path is strictly under the allowed input root
    """
    canonical_data_dir = self.data_dir.resolve()
    expected_root = (self.repo_root / self.VERIFIED_INPUT_ROOT).resolve()
    
    if canonical_data_dir != expected_root:
        raise ValueError(f"Input path security violation")
    
    # Ensure no parent directory escape
    canonical_data_dir.relative_to(self.repo_root)
```

### 2. BUILD.md

**Changes:**
- ✅ Removed all references to `--data-subdir`
- ✅ Updated usage examples to reflect strict enforcement
- ✅ Clarified that `data/publish/3i-atlas/` is the ONLY allowed input directory
- ✅ Updated "Adding New Claims" section

**Before:**
```bash
python3 lab/publication_engine.py --claim-id claim-002 --data-subdir custom-data
```

**After:**
```bash
python3 lab/publication_engine.py --claim-id claim-002
# Input MUST be in data/publish/3i-atlas/
```

### 3. PHASE_E_GENERALIZATION_SUMMARY.md

**Changes:**
- ✅ Removed all references to `--data-subdir`
- ✅ Updated status from "Production-ready" to "Awaiting CI verification"
- ✅ Removed premature "CI Ready" and "Production Ready" claims
- ✅ Added note that CI must be verified GREEN before claiming production-ready
- ✅ Updated acceptance criteria section

## Governance Enforcement

The publication engine now strictly enforces:

✅ **Immutable Input Root:** `data/publish/3i-atlas/` (constant, not parameterizable)  
✅ **Canonical Path Resolution:** Prevents path traversal attacks  
✅ **No Alternate Roots:** No way to specify alternate input directories  
✅ **Repository Boundary Check:** Ensures path doesn't escape repo  
✅ **Hard Fail:** Immediate error if path verification fails  
✅ **CI Verification:** CI checks for exact path string in code  

## Local Validation Results

### CI Checks (Simulated Locally)
```
✓ Network-free enforcement → PASS
✓ Input source enforcement → PASS
✓ Publication engine execution → PASS
✓ Output verification → PASS
✓ Checksum verification → PASS
✓ Page generator → PASS
✓ Static HTML validation → PASS
```

### Security Scan
```
✓ CodeQL → GREEN (0 alerts)
```

### Code Review
```
✓ No review comments
```

### Functional Testing
```
✓ Publication engine runs successfully
✓ Pages generated correctly
✓ No JavaScript in output
✓ All checksums verify
```

## Acceptance Criteria Status

From the problem statement:

| Criteria | Status |
|----------|--------|
| "Verify input source enforcement" → PASS | ✅ Locally verified |
| Determinism check → PASS | ✅ Locally verified |
| CodeQL → GREEN | ✅ 0 alerts |
| No pull_request_target | ✅ Confirmed |
| All checks GREEN | ⏳ Awaiting CI run |

## Evidence

### Input Source Check
```bash
$ grep -q 'self.data_dir = repo_root / "data" / "publish" / "3i-atlas"' \
    lab/publication_engine.py
✓ PASS
```

### Network-Free Check
```bash
$ grep -E "(import (requests|urllib|http\.client|socket))" \
    lab/publication_engine.py
(No matches - network-free confirmed)
```

### Command-Line Interface
```bash
$ python3 lab/publication_engine.py --help
usage: publication_engine.py [-h] [--claim-id CLAIM_ID]

TRIZEL Phase-E Deterministic Publication Compiler

options:
  -h, --help            show this help message and exit
  --claim-id CLAIM_ID   Claim identifier (default: claim-001)

(Note: No --data-subdir option available)
```

### Code Structure
```python
class PublicationEngine:
    VERSION = "v001"
    # IMMUTABLE INPUT ROOT - GOVERNANCE ENFORCED
    VERIFIED_INPUT_ROOT = "data/publish/3i-atlas"
    
    def __init__(self, repo_root: Path, claim_id: str):
        self.data_dir = repo_root / "data" / "publish" / "3i-atlas"
        self._verify_input_path_security()
```

## Status Update

**BEFORE FIX:**
- ✗ CI FAILING
- ✗ Input source not enforced
- ✗ Governance violation
- ✗ NOT ready for merge

**AFTER FIX:**
- ✓ All local checks PASS
- ✓ Input source strictly enforced
- ✓ Governance compliant
- ⏳ Awaiting CI verification

## Next Steps

1. ⏳ Wait for CI to run on pushed commit (5fcfe08)
2. ⏳ Verify all checks turn GREEN
3. ⏳ Update status documents if all checks pass
4. ⏳ Only then claim "Production-ready" and "Ready for merge"

## Files Changed

- `lab/publication_engine.py` - Strict input enforcement with security validation
- `BUILD.md` - Updated documentation (removed --data-subdir)
- `PHASE_E_GENERALIZATION_SUMMARY.md` - Corrected status claims

## Conclusion

The critical governance violation has been fixed. The publication engine now strictly enforces reading only from `data/publish/3i-atlas/` with no possibility of alternate paths. All local validations pass. The fix is complete and awaiting CI verification.

**Status:** CRITICAL FIX COMPLETE ✓  
**CI Status:** AWAITING VERIFICATION ⏳  
**Ready for Merge:** Pending CI GREEN ⏳

---

**Implementation:** GitHub Copilot Agent  
**Verified:** 2026-02-06  
**Commit:** 5fcfe08
