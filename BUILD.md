# TRIZEL Phase-E Build Process

This document describes the build process for generating Phase-E publication pages.

## Related Documentation

- **[WCAG Contrast Checking Guide](WCAG_CONTRAST_GUIDE.md)** - Comprehensive guide for automated accessibility testing

## Overview

The Phase-E system consists of two main components:

1. **Publication Compiler** (`lab/publication_engine.py`) - Generates deterministic publication data from verified inputs
2. **Page Generator** (`lab/generate_phase_e_pages.py`) - Auto-discovers publications and generates static HTML pages

Both components operate in a **deterministic, network-free, static-only** manner.

## Build Steps

### 1. Run the Publication Compiler

The publication compiler reads verified input data and generates publication outputs:

```bash
# Run with default claim-001
python3 lab/publication_engine.py

# Run with custom claim ID
python3 lab/publication_engine.py --claim-id claim-002
```

**Input Requirements:**
- Verified inputs MUST exist in `data/publish/3i-atlas/`
- This is the ONLY allowed input directory (governance enforced)
- Required files: `manifest.json`, `daily-status.json`, `source-snapshot.json`

**Output Structure:**
```
lab/publication/{claim-id}/{YYYY-MM-DD}/
├── manifest.json           # Publication manifest with checksums
├── sha256sum.txt          # Complete checksum list
├── provenance.json        # Full execution provenance
├── tables/                # Extracted tabular data (JSON + CSV)
│   ├── platforms_registry.json
│   ├── platforms_registry.csv
│   ├── sbdb_attempts.json
│   └── sbdb_attempts.csv
└── derived/               # Derived statistics (NO INTERPRETATION)
    └── statistics.json
```

### 2. Generate Phase-E Pages

The page generator auto-discovers all publications and generates static HTML pages:

```bash
python3 lab/generate_phase_e_pages.py
```

**Discovery Process:**
- Scans `lab/publication/` for all `claim-*` directories
- Finds all date subdirectories (YYYY-MM-DD format)
- Reads `manifest.json` and `provenance.json` from each
- Fails gracefully if data is missing

**Generated Pages:**
- `phase-e/index.html` - Main index with all discovered publications
- `phase-e/{claim-id}.html` - Individual pages for each claim/date

### 3. Verify Build Output

Check that generated pages are correct:

```bash
# Verify files exist
ls -la phase-e/*.html

# Verify no JavaScript in generated pages
grep -E "<script" phase-e/*.html && echo "ERROR: JavaScript found!" || echo "✓ No JavaScript"

# Verify checksums
cd lab/publication/claim-001/2026-02-06
sha256sum -c sha256sum.txt
```

## Build Constraints

The Phase-E build system enforces strict constraints:

### 1. Network-Free Execution
- ❌ No external API calls
- ❌ No network requests
- ❌ No external data fetching
- ✅ Only local file access

### 2. Static HTML Only
- ❌ No JavaScript
- ❌ No runtime behavior
- ❌ No dynamic content loading
- ✅ Pure HTML + CSS only

### 3. Deterministic Output
- Same inputs → same outputs (excluding timestamps)
- Sorted JSON keys
- Consistent file ordering
- SHA256 checksums for all outputs

### 4. Verified-Inputs-Only
- Reads ONLY from `data/publish/`
- Validates checksums
- Fails on unverified data
- NO partial processing

### 5. Gate-6 CLOSED
- NO interpretation of data
- NO scientific claims
- NO governance authority
- ONLY deterministic transformation

## CI Validation

The CI workflow automatically validates the build:

```yaml
.github/workflows/phase-e-publication-validation.yml
```

**Validation Steps:**
1. Network-free enforcement check
2. Input source enforcement verification
3. Publication engine execution (twice for determinism)
4. Output structure verification
5. Manifest consistency validation
6. Provenance metadata validation
7. SHA256 checksum verification
8. Determinism verification
9. Page generation
10. Static HTML validation (no JavaScript)

## Adding New Claims

To add a new claim:

1. **Prepare verified input data:**
   ```bash
   # Input data MUST be added to the governance-enforced directory
   # data/publish/3i-atlas/
   # (This is the only allowed input directory)
   ```

2. **Run publication compiler:**
   ```bash
   python3 lab/publication_engine.py --claim-id claim-002
   ```

3. **Regenerate pages:**
   ```bash
   python3 lab/generate_phase_e_pages.py
   ```

4. **Verify output:**
   ```bash
   # Check that new claim appears in index
   grep "claim-002" phase-e/index.html
   
   # Check that individual page was created
   ls phase-e/claim-002.html
   ```

## Fail-Closed Behavior

The system implements fail-closed handling:

### Missing Input Data
```bash
$ python3 lab/publication_engine.py --claim-id claim-999
ERROR: NO_DATA_YET: Missing required input files: ['manifest.json']

This is expected if verified input data is not yet available.
The publication engine enforces fail-closed handling.
```

### No Publications Found
If no publications exist, the page generator produces an index with an empty state message:

```html
<tr class="empty-state">
  <td colspan="5">
    <p class="no-publications">No compiler outputs are currently available.</p>
  </td>
</tr>
```

## Provenance Tracking

Every publication includes complete provenance:

```json
{
  "engine": {
    "name": "TRIZEL Phase-E Publication Compiler",
    "version": "v001",
    "claim_id": "claim-001"
  },
  "execution": {
    "timestamp_utc": "2026-02-06T12:00:00Z",
    "date": "2026-02-06",
    "deterministic": true,
    "network_access": false
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

Verify publication integrity:

```bash
# Using sha256sum.txt
cd lab/publication/claim-001/2026-02-06
sha256sum -c sha256sum.txt

# Using manifest.json
python3 << 'EOF'
import json
import hashlib
from pathlib import Path

with open('manifest.json') as f:
    manifest = json.load(f)

for filepath, file_info in manifest['files'].items():
    with open(filepath, 'rb') as f:
        computed = hashlib.sha256(f.read()).hexdigest()
    expected = file_info['sha256']
    status = '✓' if computed == expected else '✗'
    print(f'{status} {filepath}')
EOF
```

## Development

### Modifying the Publication Engine

When modifying `lab/publication_engine.py`:

1. Maintain all constraints (network-free, deterministic, etc.)
2. Update provenance version if changing output format
3. Run full CI validation
4. Document any new command-line options

### Modifying the Page Generator

When modifying `lab/generate_phase_e_pages.py`:

1. Ensure static HTML only (no JavaScript)
2. Preserve existing template structure
3. Test with multiple claims if possible
4. Verify generated pages match originals

### Adding New Tables

To extract new tables from source data:

1. Edit `PublicationEngine.extract_tables()` in `lab/publication_engine.py`
2. Ensure deterministic ordering
3. Output both JSON and CSV formats
4. Update page generator to display new tables
5. Run full validation

## Troubleshooting

### Build Fails with "NO_DATA_YET"

**Cause:** Missing or invalid input data

**Solution:**
```bash
# Check if input directory exists
ls -la data/publish/3i-atlas/

# Verify required files
ls data/publish/3i-atlas/manifest.json
ls data/publish/3i-atlas/daily-status.json
ls data/publish/3i-atlas/source-snapshot.json
```

### Pages Not Generated

**Cause:** No publications found or error in discovery

**Solution:**
```bash
# Check publication directory structure
find lab/publication -type d

# Run with verbose output
python3 lab/generate_phase_e_pages.py

# Check for error messages
```

### Checksum Verification Fails

**Cause:** File modified after publication or corrupted

**Solution:**
```bash
# Re-run publication compiler to regenerate
rm -rf lab/publication/claim-001/2026-02-06
python3 lab/publication_engine.py

# Verify checksums again
cd lab/publication/claim-001/2026-02-06
sha256sum -c sha256sum.txt
```

## References

- **Phase-E README:** `phase-e/README.md`
- **Lab README:** `lab/README.md`
- **Scientific Presentation Contract:** `docs/SCIENTIFIC_PRESENTATION_CONTRACT.md`
- **CI Workflow:** `.github/workflows/phase-e-publication-validation.yml`

---

**Status:** Production-ready  
**Version:** v001  
**Date:** 2026-02-06  
**Gate-6:** CLOSED  
**Authority:** NONE (transformation only)
