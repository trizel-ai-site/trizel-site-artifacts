# Observations — Registry

[← Back to GOI Home](../../index.en.md)

## Purpose

The Observations Registry catalogs data sources, archives, and monitoring outputs from the TRIZEL ecosystem. This section provides static metadata about observation repositories including their role, domains, temporal coverage, and official sources.

## Registry Table

| Source Repo | Role | Domains | Coverage | Inventory | Official Sources |
|-------------|------|---------|----------|-----------|------------------|
| TESS Sector 1751 — 3I/ATLAS Observation | archive | exoplanets, cometary-science, interstellar-objects, time-domain-astronomy | 2026-01-15 to 2026-01-19 (special) | FFIs (SPOC, TICA), mTPFs, LCFs, notebooks | [TESS Mission](https://tess.mit.edu/), [MAST Archive](https://archive.stsci.edu/tess/) |

## Data Source

This page displays data from: `/goi/data/global-index.json`

**Current Status:** One observation entry has been published for TESS Sector 1751 (3I/ATLAS special observation). This registry will continue to be populated as Layer-1 repositories produce and commit their metadata files to `/goi/data/sources/`.

## Schema

All observation metadata must conform to:
- **Schema:** `/goi/schemas/observation.meta.schema.json`

## Verification

All observation entries are verifiable through:
1. Git commit history in this repository
2. JSON schema validation
3. Integrity hashes (when available in metadata)
4. Official source citations included in each entry

## Repository Role Classifications

- **raw** — Raw data collection and ingestion
- **archive** — Long-term data preservation
- **analysis** — Scientific analysis and processing
- **monitor** — Continuous monitoring and alerting
- **lab** — Experimental and research workspace
- **governance** — Policy and standards definition

## Language Selection

- **English (EN)** — Current
- [Français (FR)](index.fr.md)
- [Deutsch (DE)](index.de.md)
- [Русский (RU)](index.ru.md)
- [中文 (ZH)](index.zh.md)
- [العربية (AR)](index.ar.md)

---

**Static Registry** — No JavaScript — No API Calls — Reference Only
