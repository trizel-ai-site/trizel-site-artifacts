# Formal Verification Sequence for Claim-001

**Version:** v002  
**Date:** 2026-02-13  
**Scope:** Verification of NASA SBDB Query Behavior for Designation "3I/ATLAS"

---

## Executive Summary

This document defines a formal, deterministic 3-step verification sequence to validate the behavior of the NASA JPL Small-Body Database (SBDB) API with respect to the designation "3I/ATLAS" (or "3I") and to assess its official status with the International Astronomical Union (IAU) Minor Planet Center (MPC).

Each step produces **machine-readable logs** in JSON format with SHA-256 hash anchoring to ensure immutability and reproducibility.

---

## Verification Architecture

```
┌─────────────────────────────────────────────┐
│        VERIFICATION SEQUENCE v002           │
├─────────────────────────────────────────────┤
│                                             │
│  STEP 1: MPC Designation Verification      │
│          ↓                                  │
│  STEP 2: SBDB Structured Query Validation  │
│          ↓                                  │
│  STEP 3: Horizons Orbital Cross-Check      │
│                                             │
└─────────────────────────────────────────────┘
         ↓
    JSON Logs (Hash-Anchored)
```

---

## Step 1: MPC Designation Verification

### Objective
Determine whether "3I" or "3I/ATLAS" is an **official IAU/MPC designation** for an interstellar object by locating the authoritative MPC publication record.

### Data Sources
1. **IAU MPC Interstellar Object List**  
   URL: https://www.minorplanetcenter.net/iau/lists/Interstellar.html
   
2. **MPC Publication Archive (MPECs - Minor Planet Electronic Circulars)**  
   URL: https://www.minorplanetcenter.net/iau/MPEph/MPEph.html  
   Search for: **MPC MPEC entry "Comet 3I/ATLAS"**

3. **MPC Database Search**  
   URL: https://www.minorplanetcenter.net/db_search

### Verification Actions
1. Search MPC MPEC archive for official publication referencing "Comet 3I/ATLAS"
2. If found: Record MPEC number, publication date, and full designation
3. Cross-reference with IAU naming conventions:
   - Format: `<number>I/<name>`
   - Number assigned sequentially upon confirmation
   - Confirmation requires hyperbolic orbit (e > 1.0) and non-Solar origin
4. Verify MPEC publication explicitly announces "3I" interstellar designation

### Expected Outcomes
- **Confirmed:** MPC MPEC publication exists for "Comet 3I/ATLAS" → Official designation
- **Provisional:** Preliminary reports exist but no MPEC → Not yet official
- **Not Found:** No MPC record → Designation does not exist

### Output Log
**File:** `mpc_crosscheck_log.json`

**Schema:**
```json
{
  "step": "1-mpc-verification",
  "timestamp_utc": "2026-02-13T21:42:00.000000Z",
  "query": {
    "designation": "3I",
    "alternative_forms": ["3I/ATLAS", "Comet 3I/ATLAS"]
  },
  "sources": [
    {
      "name": "MPC MPEC Archive",
      "url": "https://www.minorplanetcenter.net/iau/MPEph/MPEph.html",
      "search_term": "Comet 3I/ATLAS",
      "mpec_number": "<MPEC-YYYY-XNN>",
      "publication_date": "YYYY-MM-DD",
      "access_date": "2026-02-13",
      "network_enabled": false
    }
  ],
  "findings": {
    "official_designation_exists": true,
    "mpec_reference": "MPEC <number> - Comet 3I/ATLAS",
    "designation_format_valid": true,
    "interstellar_confirmation": "confirmed",
    "status": "official"
  },
  "conclusion": "MPC MPEC publication for 'Comet 3I/ATLAS' confirms official IAU/MPC designation.",
  "hash": {
    "algorithm": "SHA-256",
    "value": "<computed-hash-of-log-content>"
  }
}
```

---

## Step 2: SBDB Structured Query Validation

### Objective
Test SBDB API response for designation queries `des=3I` and `des=3I/ATLAS`.

### Query Specifications

#### Query 2A: Exact Designation "3I"
```
URL: https://ssd-api.jpl.nasa.gov/sbdb.api?des=3I
Method: GET
Expected Status: 404 Not Found (if designation does not exist)
                 200 OK (if designation exists)
```

#### Query 2B: Full Designation "3I/ATLAS"
```
URL: https://ssd-api.jpl.nasa.gov/sbdb.api?des=3I%2FATLAS
Method: GET
Expected Status: 404 Not Found (if designation does not exist)
                 200 OK (if designation exists)
```

### Verification Actions
1. Execute HTTP GET request to SBDB API
2. Record HTTP status code
3. If 200: Parse JSON and extract `fullname`, `des`, `orbit_class`
4. If 404: Confirm "object not found" message
5. Compute SHA-256 hash of raw response body

### Expected Outcomes
Based on MPC verification:
- **If MPC confirms:** Expect HTTP 200 with valid orbital data (or 404 if SBDB lags)
- **If MPC does not confirm:** Expect HTTP 404

**Note:** NASA SBDB may lag behind MPC announcements by days to months. MPC MPEC publication is authoritative; SBDB lag does not invalidate MPC designation.

### Output Log
**File:** `sbdb_query_tests.json`

**Schema:**
```json
{
  "step": "2-sbdb-validation",
  "timestamp_utc": "2026-02-13T21:42:00.000000Z",
  "tests": [
    {
      "test_id": "2A",
      "query": {
        "url": "https://ssd-api.jpl.nasa.gov/sbdb.api?des=3I%2FATLAS&orb=1&phys-par=1&full-prec=1",
        "method": "GET",
        "designation": "3I/ATLAS"
      },
      "response": {
        "http_status": 200,
        "http_message": "OK",
        "body": "{...}",
        "size_bytes": 4521,
        "hash_sha256": "<computed-hash>"
      },
      "interpretation": "SBDB has incorporated MPC designation '3I/ATLAS'."
    },
    {
      "test_id": "2B",
      "query": {
        "url": "https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=3I%2FATLAS&orb=1&phys-par=1&full-prec=1",
        "method": "GET",
        "designation": "3I/ATLAS"
      },
      "response": {
        "http_status": 200,
        "http_message": "OK",
        "body": "{...}",
        "size_bytes": 4521,
        "hash_sha256": "<computed-hash>"
      },
      "interpretation": "String search successfully finds '3I/ATLAS'."
    }
  ],
  "control_tests": [
    {
      "test_id": "CONTROL-1I",
      "query": {
        "url": "https://ssd-api.jpl.nasa.gov/sbdb.api?des=1I&orb=1&phys-par=1&full-prec=1",
        "method": "GET",
        "designation": "1I"
      },
      "response": {
        "http_status": 200,
        "fullname": "1I/'Oumuamua",
        "hash_sha256": "<computed-hash>"
      },
      "interpretation": "Control test: Known interstellar object 1I/'Oumuamua returns HTTP 200."
    },
    {
      "test_id": "CONTROL-2I",
      "query": {
        "url": "https://ssd-api.jpl.nasa.gov/sbdb.api?des=2I&orb=1&phys-par=1&full-prec=1",
        "method": "GET",
        "designation": "2I"
      },
      "response": {
        "http_status": 200,
        "fullname": "2I/Borisov",
        "hash_sha256": "<computed-hash>"
      },
      "interpretation": "Control test: Known interstellar object 2I/Borisov returns HTTP 200."
    }
  ],
  "conclusion": "SBDB API response for '3I/ATLAS' validated. MPC designation authority takes precedence.",
  "hash": {
    "algorithm": "SHA-256",
    "value": "<computed-hash-of-log-content>"
  }
}
```

---

## Step 3: Horizons Orbital Cross-Check

### Objective
Cross-validate orbital elements (if object exists) against JPL Horizons ephemeris system.

### Data Source
**NASA JPL Horizons System**  
- Web Interface: https://ssd.jpl.nasa.gov/horizons.cgi
- Email/Telnet API: horizons@ssd.jpl.nasa.gov

### Verification Actions
1. If SBDB returns HTTP 200 for "3I/ATLAS":
   - Extract SPK-ID from SBDB response
   - Query Horizons for object "3I" or "3I/ATLAS" using SPK-ID
   - Compare orbital elements: semi-major axis (a), eccentricity (e), inclination (i), longitude of ascending node (Ω), argument of perihelion (ω)
   - Verify orbit classification (hyperbolic vs. elliptical): e > 1.0 for interstellar
   - Compare epoch timestamps
   
2. If SBDB returns HTTP 404:
   - Attempt Horizons query as control test
   - Document that no Horizons ephemeris exists for "3I/ATLAS"
   - Note: SBDB and Horizons may both lag behind MPC announcements

### Expected Outcomes
- **If object exists:** Orbital elements from SBDB and Horizons match within tolerance (< 0.1%)
- **If SBDB updated but Horizons lags:** Document lag; MPC remains authoritative
- **If neither system updated:** MPC MPEC publication remains authoritative source

### Output Log
**File:** `horizons_validation_log.json`

**Schema:**
```json
{
  "step": "3-horizons-crosscheck",
  "timestamp_utc": "2026-02-13T21:42:00.000000Z",
  "query": {
    "object": "3I/ATLAS",
    "spk_id": "<from-sbdb-response>",
    "system": "JPL Horizons"
  },
  "horizons_response": {
    "status": "found",
    "orbital_elements": {
      "epoch": "JD 2460000.5",
      "eccentricity": 1.5,
      "perihelion_distance_au": 2.1,
      "inclination_deg": 45.0,
      "longitude_ascending_node_deg": 120.0,
      "argument_perihelion_deg": 210.0
    }
  },
  "sbdb_comparison": {
    "sbdb_status": "HTTP 200",
    "horizons_status": "found",
    "eccentricity_match": true,
    "perihelion_match": true,
    "tolerance": "< 0.1%",
    "consistency": "consistent"
  },
  "orbital_classification": {
    "eccentricity": 1.5,
    "classification": "hyperbolic",
    "interstellar_criterion": "e > 1.0",
    "interstellar_confirmed": true
  },
  "control_tests": [
    {
      "object": "1I",
      "sbdb_status": "HTTP 200",
      "horizons_status": "found",
      "eccentricity_sbdb": 1.20116,
      "eccentricity_horizons": 1.20116,
      "match": true
    }
  ],
  "conclusion": "Horizons ephemeris for '3I/ATLAS' consistent with SBDB and MPC designation.",
  "hash": {
    "algorithm": "SHA-256",
    "value": "<computed-hash-of-log-content>"
  }
}
```

---

## Integration with Manifest

All verification logs must be referenced additively in `lab/publication/claim-001/verification/manifest.json`:

```json
{
  "verification": {
    "version": "v002",
    "date": "2026-02-13",
    "files": {
      "sbdb_api_specification.md": {
        "sha256": "<hash>",
        "size_bytes": <size>
      },
      "verification_sequence.md": {
        "sha256": "<hash>",
        "size_bytes": <size>
      },
      "iau_designation_assessment.md": {
        "sha256": "<hash>",
        "size_bytes": <size>
      },
      "sbdb_query_tests.json": {
        "sha256": "<hash>",
        "size_bytes": <size>
      },
      "mpc_crosscheck_log.json": {
        "sha256": "<hash>",
        "size_bytes": <size>
      },
      "horizons_validation_log.json": {
        "sha256": "<hash>",
        "size_bytes": <size>
      }
    }
  }
}
```

---

## Deterministic Execution

All verification steps are designed for **deterministic execution**:

1. **Network Access OFF by default**
   - Validation runner reads pre-committed logs
   - Verifies log integrity via SHA-256 hashes
   
2. **Network Access ON (explicit flag)**
   - `--network` or `TRIZEL_NETWORK=1`
   - Executes live API queries
   - Generates new logs with timestamps and hashes

---

## Governance Constraints

- **Gate-6 Status:** CLOSED (no interpretation layer enabled)
- **Immutability:** No modification to existing Zenodo DOI object (10.5281/zenodo.18636150)
- **Additivity:** All verification outputs are additive only
- **Determinism:** Execution is reproducible from committed logs

---

## Execution Command

```bash
python3 scripts/sbdb_validation_runner.py [--network]
```

**Default (network OFF):**
```bash
python3 scripts/sbdb_validation_runner.py
# Validates existing logs without network access
```

**Network mode (explicit):**
```bash
python3 scripts/sbdb_validation_runner.py --network
# OR
TRIZEL_NETWORK=1 python3 scripts/sbdb_validation_runner.py
# Executes live queries and generates new logs
```

---

**Document Authority:** TRIZEL Scientific Verification Team  
**Immutability Constraint:** This sequence is frozen as of v002 and constitutes the formal verification protocol for Claim-001.
