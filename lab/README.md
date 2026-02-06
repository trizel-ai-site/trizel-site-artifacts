# TRIZEL Layer-2 Publication Engine

## Overview

The Layer-2 Publication Engine is a **deterministic, network-free analysis engine** that reads verified ledger entries and produces structured, reproducible publication artifacts.

**Version:** 1.0.0  
**Schema Version:** 1.0

## Principles

1. **Network-Free**: No HTTP requests, API calls, or external data sources
2. **Deterministic**: Same inputs always produce identical outputs (byte-for-byte)
3. **Verified Input Only**: Reads ONLY from `/data/publish/3i-atlas` verified ledgers
4. **No Interpretation**: Extracts structure and metadata without scientific analysis
5. **Provenance**: Every output includes complete provenance tracking
6. **Fail-Closed**: Generates explicit `NO_DATA_YET` artifacts if no verified data exists

## Architecture

### Input Source (Verified Ledger)
- **Path**: `/data/publish/3i-atlas/`
- **Files Read**:
  - `daily-status.json` - Data flow proof
  - `source-snapshot.json` - Observational snapshot
  - `manifest.json` - File integrity manifest
  - `ro-crate-metadata.json` - RO-Crate metadata

### Output Structure

```
lab/publication/claim-001/YYYY-MM-DD/
├── manifest.json          # Publication manifest with file hashes
├── sha256sum.txt          # Standard SHA256 checksum file
├── provenance.json        # Complete provenance block
├── tables/
│   ├── platforms_registry.csv
│   ├── platforms_registry.json
│   ├── sbdb_attempts.csv
│   ├── sbdb_attempts.json
│   ├── file_integrity.csv
│   └── file_integrity.json
└── derived/
    ├── summary.json
    ├── data_flow.json
    └── observation_metadata.json
```

## Usage

### Basic Usage

Generate publication artifacts for today:

```bash
python3 lab/publication_engine.py
```

### Specify Date

Generate publication artifacts for a specific date:

```bash
python3 lab/publication_engine.py 2026-02-06
```

### Reproducible Generation

To regenerate artifacts for a specific date (deterministic):

```bash
# Generate once
python3 lab/publication_engine.py 2026-02-06

# Verify determinism - should produce identical hashes
python3 lab/publication_engine.py 2026-02-06
cd lab/publication/claim-001/2026-02-06
sha256sum -c sha256sum.txt
```

## Output Files

### manifest.json

Structured manifest with:
- Schema version
- Engine version
- Claim ID
- Generation timestamp
- SHA256 hashes of all output files

### provenance.json

Complete provenance block containing:
- Claim ID
- Input ledger path
- Input record IDs
- Input SHA256 hashes
- Output file list
- Determinism statement
- Verification flags (network_free, deterministic, verified_inputs_only)

### sha256sum.txt

Standard SHA256 checksum file in GNU format:
```
<hash>  <filename>
```

Can be verified using:
```bash
sha256sum -c sha256sum.txt
```

### tables/

Tabular extractions from verified data:
- **platforms_registry**: Flattened platform registry from source snapshot
- **sbdb_attempts**: SBDB API query attempts and errors
- **file_integrity**: Ledger file integrity checksums

Each table is available in both CSV and JSON formats.

### derived/

Derived metadata artifacts (no interpretation):
- **summary**: Ledger entry count and file list
- **data_flow**: Data flow metadata (gate, event, classification)
- **observation_metadata**: Observation metadata (project, pipeline, timestamps)

## Determinism Guarantees

The engine guarantees byte-for-byte reproducibility:

1. **Deterministic JSON Output**: All JSON files use sorted keys and consistent indentation
2. **Deterministic CSV Output**: CSV fields are sorted alphabetically
3. **Deterministic Timestamps**: Timestamps are generated at runtime but inputs remain unchanged
4. **Deterministic Hashing**: SHA256 hashes are computed from file contents

### Verifying Determinism

```bash
# Generate twice
python3 lab/publication_engine.py 2026-02-06
cp -r lab/publication/claim-001/2026-02-06 /tmp/output1

python3 lab/publication_engine.py 2026-02-06
cp -r lab/publication/claim-001/2026-02-06 /tmp/output2

# Compare all files (excluding timestamp fields)
diff -r /tmp/output1 /tmp/output2
```

Note: `timestamp_utc` fields will differ, but all data content and file hashes remain identical when inputs are unchanged.

## Release Packaging

### Creating a Release Package

1. **Generate Artifacts**:
   ```bash
   python3 lab/publication_engine.py 2026-02-06
   ```

2. **Verify Integrity**:
   ```bash
   cd lab/publication/claim-001/2026-02-06
   sha256sum -c sha256sum.txt
   ```

3. **Create Archive**:
   ```bash
   cd lab/publication/claim-001
   tar -czf trizel-publication-claim-001-2026-02-06.tar.gz 2026-02-06/
   sha256sum trizel-publication-claim-001-2026-02-06.tar.gz > trizel-publication-claim-001-2026-02-06.tar.gz.sha256
   ```

4. **Tag Release** (in git):
   ```bash
   git tag -a publication-claim-001-v1.0.0 -m "Publication export for Claim-001"
   git push origin publication-claim-001-v1.0.0
   ```

### DOI Minting (Future)

This package is **DOI-ready**. When authorized:

1. Upload archive to Zenodo
2. Generate DOI through Zenodo interface
3. Record DOI in `/phase-e/publications.yml` (human approval required)

**Note**: DOI minting is NOT performed by this engine. It requires human approval through Layer-0 governance.

## Fail-Closed Behavior

If no verified ledger data exists, the engine generates an explicit `NO_DATA_YET.json` artifact:

```json
{
  "status": "NO_DATA_YET",
  "message": "No verified ledger found at expected path",
  "expected_path": "/data/publish/3i-atlas",
  "timestamp_utc": "2026-02-06T12:00:00+00:00"
}
```

This ensures failures are explicit and auditable, not silent.

## Network-Free Validation

The engine imports ONLY standard library modules:
- `json` - JSON parsing
- `hashlib` - SHA256 hashing
- `csv` - CSV writing
- `datetime` - Timestamp generation
- `pathlib` - Path manipulation
- `typing` - Type hints

**No network libraries** (`urllib`, `requests`, `http.client`, etc.) are imported or used.

## License & Attribution

This engine is part of the TRIZEL project.

All outputs include complete provenance and are suitable for:
- Scientific publication
- DOI-backed archival
- Reproducible research
- Data citation

---

**TRIZEL Layer-2 Publication Engine**  
Network-Free · Deterministic · Provenance-Tracked · DOI-Ready
