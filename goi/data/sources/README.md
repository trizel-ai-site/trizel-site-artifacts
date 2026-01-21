# GOI Data Sources Directory

## Purpose

This directory is reserved for static metadata files produced by Layer-1 tools (e.g., Auto-DZ-ACT) and copied here as static artifacts.

## Structure

Per-repository metadata files will be placed here following the naming convention:

```
{repo-name}.observation.meta.json
```

## Schema

Each metadata file must conform to:
- **Schema:** `/goi/schemas/observation.meta.schema.json`

## Security and Access

- **No private links:** Only official, publicly accessible sources are allowed
- **Static only:** These files are committed snapshots, not generated at runtime
- **Manual updates:** Metadata files are updated by committing new versions to this repository
- **No external calls:** This repository does not fetch or pull data from external sources

## Status

This directory is currently empty. Metadata files will be added as Layer-1 repositories produce and publish their observation metadata.

**Current status:** No published entries yet

## Verification

All metadata can be verified through:
1. Git commit history in this repository
2. JSON schema validation against `/goi/schemas/observation.meta.schema.json`
3. Integrity hashes included in the metadata files (when available)
