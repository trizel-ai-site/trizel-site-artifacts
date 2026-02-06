# TRIZEL Phase-E Laboratory

**Status:** Phase-E Deterministic Publication Compiler v001  
**Gate-6:** CLOSED  
**Authority:** NO interpretation, NO claims, NO governance authority

---

## Overview

This laboratory directory contains the **Phase-E Deterministic Publication Compiler**, the first executable scientific production layer of TRIZEL. It operates as a network-free, deterministic transformation engine that:

- Reads **ONLY** verified ledgers from `/data/publish/3i-atlas`
- Produces reproducible, versioned scientific artifacts
- Enforces strict constraints: NO interpretation, NO claims, NO governance authority
- Implements fail-closed handling (NO_DATA_YET) for missing inputs

## Architecture

### Input Requirements

The publication engine requires verified inputs from:
```
/data/publish/3i-atlas/
├── manifest.json           # Verified file checksums
├── daily-status.json       # Verified status data
└── source-snapshot.json    # Verified source data
```

All inputs must pass integrity verification before processing.

### Output Structure

Publications are written to versioned directories:
```
lab/publication/claim-001/YYYY-MM-DD/
├── manifest.json           # Publication manifest with all file checksums
├── sha256sum.txt          # Complete checksum list for verification
├── provenance.json        # Full execution provenance metadata
├── tables/                # Extracted tabular data
│   ├── platforms_registry.json
│   ├── platforms_registry.csv
│   ├── sbdb_attempts.json
│   └── sbdb_attempts.csv
└── derived/               # Derived statistics (NO INTERPRETATION)
    └── statistics.json
```

## Publication Engine

### Core Features

1. **Deterministic Execution**
   - Same inputs always produce identical outputs
   - Timestamps use consistent UTC format
   - File ordering is deterministic
   - JSON output is sorted by keys

2. **Verified-Inputs-Only Enforcement**
   - Reads exclusively from `/data/publish/3i-atlas`
   - Validates input file existence
   - Verifies checksums against manifest
   - Fails closed on missing or invalid inputs

3. **Provenance Generation**
   - Records complete execution metadata
   - Documents input sources and checksums
   - Captures verification status
   - Enforces constraint declarations (Gate-6 CLOSED, NO interpretation, etc.)

4. **NO_DATA_YET Fail-Closed Handling**
   - Exits with error code 1 if required inputs missing
   - Provides clear error messages
   - Does NOT proceed with partial data
   - Does NOT generate incomplete publications

### Usage

Run the publication engine:
```bash
python3 lab/publication_engine.py
```

Expected output on success:
```
TRIZEL Phase-E Publication Compiler v001
Claim ID: claim-001
Date: 2026-02-06

Step 1: Verifying inputs...
  ✓ Verified 3 input files

Step 2: Generating provenance...
  ✓ Provenance generated (deterministic: True)

Step 3: Extracting tables...
  ✓ Extracted 2 tables
    - platforms_registry: 12 rows
    - sbdb_attempts: 4 rows

Step 4: Computing derived data...
  ✓ Computed 7 derived metrics

Step 5: Writing outputs...
  ✓ Outputs written to: lab/publication/claim-001/2026-02-06

============================================================
PUBLICATION COMPLETE
============================================================
Output directory: lab/publication/claim-001/2026-02-06
Deterministic: YES
Network access: NO
Gate-6 status: CLOSED
Interpretation: NO
Claims: NO
Governance authority: NO
============================================================
```

Expected output on missing inputs:
```
ERROR: NO_DATA_YET: Missing required input files: ['manifest.json']

This is expected if verified input data is not yet available.
The publication engine enforces fail-closed handling.
```

### Exit Codes

- `0` - Success, publication generated
- `1` - Missing or invalid inputs (NO_DATA_YET)
- `2` - Fatal error (unexpected)

## Constraints (Enforced)

The publication engine enforces these hard constraints:

### 1. Gate-6 Remains CLOSED
- NO interpretation of data
- NO scientific claims
- NO governance authority
- ONLY deterministic transformation

### 2. Network-Free Execution
- NO external API calls
- NO network requests
- NO external data fetching
- ONLY local file access

### 3. Verified-Inputs-Only
- Reads ONLY from `/data/publish/3i-atlas`
- Validates checksums
- Fails on unverified data
- NO partial processing

### 4. Fully Reproducible Outputs
- Deterministic execution
- Sorted JSON keys
- Consistent file ordering
- SHA256 checksums for all outputs

## Data Processing

### Tables Extraction

The engine extracts structured tabular data from verified inputs:

1. **platforms_registry** - Flattened platform registry with categories
2. **sbdb_attempts** - Query attempts with status and errors

Tables are output in both JSON and CSV formats for maximum compatibility.

### Derived Statistics

The engine computes basic statistics with **NO INTERPRETATION**:

- Platform counts by category
- Total platform count
- SBDB attempt counts (total, successful, failed)
- Metadata extraction (project, designation, timestamps)

All derived data is purely aggregation and counting - no analysis or interpretation.

## Provenance

Every publication includes complete provenance metadata:

```json
{
  "engine": {
    "name": "TRIZEL Phase-E Publication Compiler",
    "version": "v001",
    "claim_id": "claim-001"
  },
  "execution": {
    "timestamp_utc": "2026-02-06T12:00:00.000000Z",
    "date": "2026-02-06",
    "deterministic": true,
    "network_access": false
  },
  "inputs": {
    "source": "data/publish/3i-atlas",
    "files": ["manifest.json", "daily-status.json", "source-snapshot.json"],
    "checksums": { ... }
  },
  "verification": {
    "inputs_verified": true,
    "manifest_checked": true,
    "integrity_confirmed": true
  },
  "constraints": {
    "gate_6_status": "CLOSED",
    "interpretation": false,
    "claims": false,
    "governance_authority": false
  }
}
```

## Integrity Verification

### Verifying a Publication

1. Check manifest.json exists
2. Verify all files listed in manifest exist
3. Compute SHA256 for each file
4. Compare against manifest checksums
5. Verify provenance.json shows inputs_verified: true

### Using sha256sum.txt

The sha256sum.txt file can be verified using standard tools:
```bash
cd lab/publication/claim-001/2026-02-06
sha256sum -c sha256sum.txt
```

All files should report "OK".

## CI Validation

The publication engine is validated by CI workflows that enforce:

1. **Network-Free Enforcement**
   - CI runs in isolated environment
   - Network access blocked during execution
   - Verifies no external calls made

2. **Determinism Verification**
   - Engine run twice with same inputs
   - Outputs compared byte-for-byte
   - Must be identical except timestamps

3. **Manifest Consistency**
   - All files in manifest must exist
   - All checksums must match
   - No extra files in output directory

4. **Provenance Validation**
   - Provenance.json must exist
   - All required fields must be present
   - Constraints must show Gate-6 CLOSED

## Development Notes

### Adding New Tables

To extract additional tables from verified inputs:

1. Add extraction logic to `extract_tables()` method
2. Ensure deterministic ordering
3. Provide both JSON and CSV output
4. Update this documentation

### Adding New Derived Data

To compute additional derived statistics:

1. Add computation to `compute_derived()` method
2. NO interpretation - only counting/aggregation
3. NO analysis or modeling
4. Update this documentation

### Modifying Output Format

All format changes must maintain:
- Deterministic output (same input → same output)
- Complete provenance tracking
- Integrity checksums
- Backward compatibility where possible

## Governance

### Authority

This laboratory operates under:
- **Layer-0 Governance** (trizel-core)
- **Gate-6:** CLOSED
- **Authority:** NONE (transformation only)

### Constraints

The laboratory has:
- NO authority to interpret data
- NO authority to make claims
- NO authority to perform governance
- ONLY authority to transform verified inputs

### Compliance

All laboratory operations must:
- Operate network-free
- Use verified-inputs-only
- Produce deterministic outputs
- Declare constraints in all outputs
- Fail-closed on missing inputs

---

## Summary

The Phase-E Deterministic Publication Compiler is the first executable scientific production layer of TRIZEL. It operates as a pure transformation engine with strict constraints:

- ✅ Deterministic execution
- ✅ Network-free operation
- ✅ Verified-inputs-only
- ✅ Complete provenance
- ✅ Fail-closed handling
- ✅ Gate-6 CLOSED
- ❌ NO interpretation
- ❌ NO claims
- ❌ NO governance authority

**Status:** Production-ready  
**Version:** v001  
**Date:** 2026-02-06
