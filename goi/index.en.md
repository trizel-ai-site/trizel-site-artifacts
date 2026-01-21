# Global Observation & Production Index

**Public Org:** trizel-ai-site  
**Public Repo:** trizel-site-artifacts  
**Base branch:** main  
**Working branch:** feature/goi-v1

---

## Purpose

The Global Observation & Production Index (GOI) is a scientific registry providing static, verifiable metadata for the TRIZEL ecosystem.

This index catalogs:
- **Observations:** Data sources, archives, and monitoring outputs
- **Production:** Scientific outputs and analysis results
- **Repositories:** Ecosystem structure and component inventory
- **Snapshots:** Frozen reference bundles with integrity verification

## Index Sections

- **[Observations](pages/observations/index.en.md)** — Registry of observation data sources and metadata
- **[Production](pages/production/index.en.md)** — Ledger of scientific production outputs
- **[Repositories](pages/repositories/index.en.md)** — Ecosystem inventory and structure
- **[Snapshots](pages/snapshots/index.en.md)** — Published snapshot registry

## Language Selection

- **English (EN)** — Current
- [Français (FR)](index.fr.md)
- [Deutsch (DE)](index.de.md)
- [Русский (RU)](index.ru.md)
- [中文 (ZH)](index.zh.md)
- [العربية (AR)](index.ar.md)

## How to Verify

All GOI data is static and verifiable:

1. **Static Data Source:** `/goi/data/global-index.json`
2. **Commit History:** All updates are tracked via Git commits in this repository
3. **Schema Validation:** All data conforms to published JSON schemas in `/goi/schemas/`
4. **No Runtime Execution:** No JavaScript, no APIs, no dynamic data fetching

## Data Truth Source

The GOI treats `/goi/data/global-index.json` as the single source of truth. This file contains:
- Schema version
- Generation timestamp
- Multilingual titles
- Sources registry
- Observation ledger
- Production ledger
- Snapshots registry

**Current Status:** Static placeholder structure — data population via committed JSON updates only.

## Technical Classification

- **Layer:** Layer-2 (Public Presentation / Artifacts)
- **Type:** Static reference index
- **Authority:** None — display and reference only
- **Execution:** Zero — all content is pre-committed static files
- **Integration:** None — no external calls, no runtime data

---

**GOI v1.0.0** — Reference-Grade Scientific Registry — Static — Verifiable — Provenance-Tracked
