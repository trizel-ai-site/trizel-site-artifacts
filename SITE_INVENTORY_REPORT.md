# TRIZEL Site Inventory & Architecture Map
**Repository:** trizel-ai-site/trizel-site-artifacts  
**Branch:** main  
**Generated:** 2026-02-19  
**Classification:** Read-Only Analysis — No files modified

---

## Section A: Build / Deploy Pipeline Summary

### A.1 Build System

| Attribute | Value |
|---|---|
| Build engine | **Custom static HTML/CSS** — no SSG framework active |
| Jekyll status | `jekyll-docker.yml` CI workflow runs Jekyll in a Docker container for build validation only; no deploy step |
| No-Jekyll marker | No `.nojekyll` file present (Jekyll CI runs, but GitHub Pages deployment is **not automated**) |
| Custom domain | `CNAME` → `trizel-ai.com` |
| Output folder | Repository root (`/`) — GitHub Pages served from `main` branch root |
| Baseurl | `/` (no Jekyll `baseurl` configured; all internal links use absolute root paths) |
| Node/npm | `package.json` present — used only for WCAG contrast-check tooling (`axe-core`, `playwright`) |
| Build artifacts | None committed; `_site/` not present in repo |

**Pipeline architecture:** GitHub Pages serves the repository root directly from the `main` branch. There is no automated deployment workflow; the freeze policy (`pages-surface-freeze.yml`) actively prevents one from being added.

---

### A.2 Workflows

| Workflow File | Name | Triggers | Purpose | Deploys? |
|---|---|---|---|---|
| `jekyll-docker.yml` | Jekyll site CI | push/PR → `main` | Build validation using `jekyll/builder:latest` with `--future` flag | ❌ No |
| `pages-surface-freeze.yml` | pages-surface-freeze | push, PR, `workflow_dispatch` | Read-only validation; enforces no Pages deployment logic exists | ❌ No |
| `phase-e-auto-publish.yml` | phase-e-auto-publish | push to `main` (`data/publish/3i-atlas/**`), `schedule` (daily 01:00 UTC), `repository_dispatch` (trizel-lab), `workflow_dispatch` | Runs publication compiler + page generator; creates a Pull Request (never pushes direct to main) | ❌ PR only |
| `baseline-snapshot-guard.yml` | baseline-snapshot-guard | push/PR on `BASELINE_SNAPSHOT.md` or its own workflow file, `workflow_dispatch` | Asserts `BASELINE_SNAPSHOT.md` exists; bans speculative language | ❌ No |
| `phase-e-publication-validation.yml` | phase-e-publication-validation | push/PR on `lab/**`, `phase-e/**`, `data/publish/3i-atlas/**`, `workflow_dispatch` | Full validation of publication engine: determinism, checksums, multilingual page generation | ❌ No |
| `sbdb-verification.yml` | Claim-001 — Verification Runner | `workflow_dispatch` only (network: on/off) | Runs SBDB/Horizons/MPC live verification; uploads JSON + MD artifacts | ❌ No |
| `wcag-contrast-check.yml` | WCAG Contrast Checking | push/PR → `main`, `develop`, `copilot/**`, `workflow_dispatch` | Spins up local HTTP server, runs axe-core Playwright checks; comments on PRs if failures | ❌ No |

**Summary:** No workflow deploys to GitHub Pages. Pages is served passively from `main` root. All automation is validation-only or creates PRs.

---

### A.3 Artifact Outputs (CI)

| Workflow | Artifact Name | Retention |
|---|---|---|
| `sbdb-verification.yml` | `{claim-id}-verification-logs` (JSON) | 7 days |
| `sbdb-verification.yml` | `{claim-id}-verification-docs` (MD) | 7 days |
| `wcag-contrast-check.yml` | `contrast-report` (JSON) | 30 days |

---

## Section B: Site Map (Tree) + Page Table

### B.1 Site Tree

```
trizel-ai.com/
├── index.html                          ← Homepage (canonical, lang=en)
├── 404.html                            ← Custom error page
├── accessibility.html                  ← Accessibility statement
├── statistics.html                     ← Institutional statistics (static)
├── system-map.html                     ← System architecture map
├── robots.txt
├── sitemap.xml
├── site.webmanifest
│
├── artifacts/                          ← Artifacts catalog
│   ├── index.html
│   ├── 3i-atlas/
│   │   └── phase-f1/2026-01-24/       ← Phase-F1 frozen lab artifact
│   └── phase-f3/2026-01-23/           ← Phase-F3 artifact snapshot
│
├── goi/                                ← Global Observation Index (language selector)
│   ├── index.html                      ← Language selector
│   ├── index.en.html / index.fr.html / index.de.html
│   ├── index.ar.html / index.ru.html / index.zh.html
│   ├── doi/                            ← DOI snippet pages (6 languages)
│   ├── data/
│   │   ├── global-index.json
│   │   ├── institutional-stats.json
│   │   └── sources/
│   ├── schemas/
│   └── pages/
│       ├── observations/               ← 6 × index.{lang}.html
│       ├── production/                 ← 6 × index.{lang}.html
│       ├── repositories/               ← 6 × index.{lang}.html
│       └── snapshots/                  ← 6 × index.{lang}.html
│
├── phase-e/                            ← Phase-E publications (root/EN mirror)
│   ├── index.html
│   ├── claim-001.html
│   └── publications.yml
│
├── phase-f-governance/                 ← Phase-F governance doc (root)
│   └── index.html
│
├── atlas/                              ← 3I/ATLAS multi-language view
│   ├── index.html                      ← Language selector
│   ├── map.json / sources.json
│   ├── en/ fr/ ar/ ru/ zh/            ← 5 × index.html (DE missing)
│   └── data/ doi/ pages/ schemas/
│
├── topology/                           ← System topology
│   ├── index.html
│   └── topology.json
│
├── system-map/                         ← SVG system map source
│   └── trizel-system-map.svg
│
├── governance-status/                  ← Gate/governance status records
│   ├── COMPLETED_GATES.md
│   ├── GATE-5-STATUS.md
│   └── REPOSITORY_VISIBILITY_RULES.md
│
├── evidence/                           ← Evidence page
│   └── index.html
├── how-to-cite/                        ← Citation guidance
│   └── index.html
├── methodology/                        ← Methodology page
│   └── index.html
├── scientific-narrative/               ← Scientific narrative page
│   └── index.html
├── scientific-publication/             ← Scientific publication page
│   └── index.html
│
├── en/                                 ← English language tree (11 HTML pages)
│   ├── index.html
│   ├── governance/index.html
│   ├── goi/index.html
│   ├── lab/index.html
│   ├── map/index.html
│   ├── phase-e/index.html + claim-001.html
│   ├── phase-f-governance/index.html
│   ├── projects/index.html
│   └── status/index.html + gate-5.html
│
├── fr/  (same structure as en/, 11 HTML pages)
├── de/  (same structure as en/, 11 HTML pages)
├── ar/  (same structure as en/, 11 HTML pages)
├── ru/  (same structure as en/, 11 HTML pages)
├── zh/  (same structure as en/, 11 HTML pages)
│
├── data/publish/3i-atlas/              ← Verified input data from Layer-1
│   ├── manifest.json
│   ├── daily-status.json
│   ├── source-snapshot.json
│   └── ro-crate-metadata.json
│
├── lab/                                ← Publication engine & outputs
│   ├── publication_engine.py
│   ├── generate_phase_e_pages.py
│   ├── update_publications_yml.py
│   └── publication/claim-001/
│       ├── 2026-02-06/ 2026-02-07/ 2026-02-08/ 2026-02-11/ 2026-02-19/
│       ├── DOI.txt
│       └── verification/
│
├── i18n/
│   ├── translations.json               ← en/fr/ar/zh/ru (DE absent)
│   ├── terms.json
│   └── narrative.{lang}.json (6 files: en/fr/ar/zh/ru/de)
│
├── assets/
│   ├── base.css / components.css
│   ├── css/ (tokens, main, print, phase-e, scientific-ui, layout, …)
│   ├── branding/trizel-ai/ (trizel-ai-logo-dark.png — 144 KB)
│   ├── brand/ (SVGs)
│   ├── diagrams/ (SVGs)
│   ├── goi/ (goi.css)
│   ├── icons/ (SVGs)
│   └── js/ (daily-indicator.js, lang-switcher.js, trizel-ai-assistant.js)
│
├── js/
│   ├── app.js
│   └── components/ (archive-banner.js)
│
├── scripts/
│   ├── contrast-check.js
│   ├── sbdb_validation_runner.py
│   └── archive-publication.sh
│
├── docs/                               ← Governance documentation (30+ MD files)
│   ├── SITE_MAP.md, LAYER_BOUNDARIES.md, I18N_ARCHITECTURE.md, …
│
├── index_layer2_selector.html          ← Orphaned draft (not in nav)
├── index_layer4_1_home.html            ← Orphaned draft (not in nav)
├── index_phase_f.html                  ← Orphaned draft (not in nav)
└── index_phase_f_backup.html          ← Orphaned backup (not in nav)
```

---

### B.2 Key Pages Table

| URL Path | Source File | Layout/CSS | Lang | Layer | Notes |
|---|---|---|---|---|---|
| `/` | `index.html` | `tokens.css` + `base.css` + `components.css` | en (canonical) | L2 | Homepage; links to /en/lab, /en/projects, /en/status |
| `/404.html` | `404.html` | main.css | en | L2 | Custom error page |
| `/accessibility.html` | `accessibility.html` | main.css | en | L2 | WCAG statement |
| `/statistics.html` | `statistics.html` | main.css | en | L2 | Static institutional stats, no fetch |
| `/system-map.html` | `system-map.html` | main.css + system-map.css | en | L2 | SVG-based system architecture display |
| `/artifacts/` | `artifacts/index.html` | Inline CSS | en | L2 | Artifact catalog |
| `/goi/` | `goi/index.html` | tokens+base+components+main | en | L2 | GOI language selector |
| `/goi/index.{lang}.html` | 6 files | goi.css + main.css | en/fr/de/ar/ru/zh | L2 | Per-language GOI entry pages |
| `/phase-e/` | `phase-e/index.html` | main.css + phase-e.css | en | L2/L1-output | Phase-E index |
| `/phase-e/claim-001.html` | `phase-e/claim-001.html` | main.css + phase-e.css | en | L2/L1-output | Loads daily-indicator.js |
| `/phase-f-governance/` | `phase-f-governance/index.html` | tokens+base+components | en | L0-ref/L2 | Phase-F governance doc |
| `/atlas/` | `atlas/index.html` | — | en | L2 | 3I/ATLAS selector |
| `/topology/` | `topology/index.html` | — | en | L2 | Topology viewer |
| `/evidence/` | `evidence/index.html` | — | en | L2 | Evidence index |
| `/how-to-cite/` | `how-to-cite/index.html` | — | en | L2 | Citation guidance |
| `/methodology/` | `methodology/index.html` | — | en | L2 | Methodology page |
| `/scientific-narrative/` | `scientific-narrative/index.html` | — | en | L2 | Scientific narrative |
| `/scientific-publication/` | `scientific-publication/index.html` | — | en | L2 | Scientific pub page |
| `/{lang}/` | `{lang}/index.html` | tokens+base+components+main | lang | L2 | 6 language homepages |
| `/{lang}/governance/` | `{lang}/governance/index.html` | main.css | lang | L0-ref/L2 | Governance per language |
| `/{lang}/goi/` | `{lang}/goi/index.html` | main.css | lang | L2 | GOI per language |
| `/{lang}/lab/` | `{lang}/lab/index.html` | main.css | lang | L1-ref/L2 | Lab overview per language |
| `/{lang}/map/` | `{lang}/map/index.html` | main.css | lang | L2 | Map per language |
| `/{lang}/phase-e/` | `{lang}/phase-e/index.html` | main.css + phase-e.css | lang | L2/L1-output | Phase-E per language |
| `/{lang}/phase-e/claim-001.html` | `{lang}/phase-e/claim-001.html` | main.css + phase-e.css | lang | L2/L1-output | Claim page; loads daily-indicator.js |
| `/{lang}/phase-f-governance/` | `{lang}/phase-f-governance/index.html` | — | lang | L0-ref/L2 | Phase-F governance per language |
| `/{lang}/projects/` | `{lang}/projects/index.html` | main.css | lang | L2 | Projects per language |
| `/{lang}/status/` | `{lang}/status/index.html` | main.css | lang | L2 | Status per language (en only loads JS) |
| `/{lang}/status/gate-5.html` | `{lang}/status/gate-5.html` | main.css | lang | L2 | Gate-5 status record |

**Orphaned pages (not reachable from main navigation):**

| File | Likely Purpose |
|---|---|
| `index_layer2_selector.html` | Draft language selector (superseded by root `index.html`) |
| `index_layer4_1_home.html` | Draft Layer-4.1 home (Phase-F concept) |
| `index_phase_f.html` | Draft Phase-F landing (with `scientific-ui.css`, `layout.css`) |
| `index_phase_f_backup.html` | Backup of Phase-F landing |

---

## Section C: Language Matrix (Pages × Languages)

### C.1 Supported Languages

| Code | Name | Dir | In `translations.json` | In `sitemap.xml` | In `hreflang` | In GOI |
|---|---|---|---|---|---|---|
| `en` | English | ltr | ✅ | ✅ | ✅ | ✅ |
| `fr` | French | ltr | ✅ | ✅ | ✅ | ✅ |
| `ar` | Arabic | rtl | ✅ | ✅ | ✅ | ✅ |
| `zh` | Chinese (Simplified) | ltr | ✅ | ✅ | ✅ | ✅ |
| `ru` | Russian | ltr | ✅ | ✅ | ✅ | ✅ |
| `de` | German | ltr | ❌ **MISSING** | ✅ | ✅ | ✅ |

**Critical gap:** German (`de`) has a full directory tree (`/de/**`) and sitemap entries, but **is not present in `i18n/translations.json`**. The `phase-e-publication-validation.yml` workflow explicitly includes `de` in its language array. The `i18n/narrative.de.json` file exists, confirming German content was planned. The omission from `translations.json` means any code reading that file for language enumeration will silently skip German.

### C.2 Page Coverage Matrix

| Page / Section | `en` | `fr` | `de` | `ar` | `ru` | `zh` | Notes |
|---|---|---|---|---|---|---|---|
| `/` (homepage) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Root canonical = EN |
| `/{lang}/index.html` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/governance/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/goi/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/lab/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/map/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/phase-e/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/phase-e/claim-001.html` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present; all load daily-indicator.js |
| `/{lang}/phase-f-governance/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/projects/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/{lang}/status/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Only `en/status` loads JS indicator |
| `/{lang}/status/gate-5.html` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/goi/index.{lang}.html` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | Flat-file pattern in `/goi/` root |
| `/atlas/{lang}/` | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | **DE missing from `/atlas/`** |
| `/goi/pages/observations/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/goi/pages/production/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/goi/pages/repositories/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/goi/pages/snapshots/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6 × present |
| `/goi/doi/DOI_SNIPPET.{lang}.html` | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ | **AR missing DOI snippet** |
| `/system-map.html` | EN only | — | — | — | — | — | No multilingual variant |
| `/statistics.html` | EN only | — | — | — | — | — | No multilingual variant |
| `/accessibility.html` | EN only | — | — | — | — | — | No multilingual variant |
| `/phase-e/` (root) | EN mirror | — | — | — | — | — | Mirrored at root for EN canonical |
| `i18n/translations.json` | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | DE absent from translations registry |
| `i18n/narrative.{lang}.json` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | All 6 present including DE |

### C.3 Routing / Fallback

- **No server-side routing**: All routing is path-based static HTML.
- **Language selection**: Root `index.html` has a JS-driven lang-switcher that reads `.lang-link` elements and switches via URL navigation.
- **Fallback**: No automatic language detection or redirect. Users who navigate to `/` get the English canonical. No 301/302 redirect to user's browser language.
- **Arabic RTL**: `dir="rtl"` set at document level in `/ar/**` pages; CSS uses logical properties.
- **hreflang**: All 6 language variants declared in root `index.html` `<head>` and in `sitemap.xml`.

### C.4 Known Translation / Slug Gaps

| Gap | Severity | Location |
|---|---|---|
| `de` absent from `i18n/translations.json` | High | `i18n/translations.json` |
| `/atlas/de/` directory missing | Medium | `atlas/` |
| AR DOI snippet missing (`goi/doi/DOI_SNIPPET.ar.html`) | Low | `goi/doi/` |
| `phase-e-publication-validation.yml` validates DE pages but `translations.json` skips DE | Medium | Workflow vs data mismatch |
| Root `index.html` nav hard-links to `/en/lab/`, `/en/projects/`, `/en/status/` (not language-neutral) | Low | `index.html` nav bar |

---

## Section D: Repo / Artifact Dependency Graph

### D.1 Repository Map

```
┌─────────────────────────────────────────────────────────────────────┐
│  LAYER-0 — Governance (External)                                     │
│                                                                      │
│  trizel-ai/trizel-core          (canonical governance authority)     │
│  trizel-ai-site/trizel-core     (mirror / org reference)            │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │ governs
┌──────────────────────────────────▼──────────────────────────────────┐
│  LAYER-1 — Lab / Execution (External/Private)                        │
│                                                                      │
│  trizel-ai-site/trizel-lab      (private lab docs)                  │
│  abdelkader-omran/AUTO-DZ-ACT-3I-ATLAS-DAILY   (raw snapshots)     │
│  abdelkader-omran/AUTO-DZ-ACT-ANALYSIS-3I-ATLAS (analysis)         │
│  abdelkader-omran/trizel-AI     (analysis engine)                   │
│  abdelkader-omran/trizel-monitor (monitoring)                       │
│  trizel-ai/Auto-dz-act          (raw data, org mirror)              │
│  trizel-ai/trizel-monitor       (monitor, org mirror)               │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │ produces verified ledgers
┌──────────────────────────────────▼──────────────────────────────────┐
│  LAYER-2 — Presentation (This Repo)                                  │
│  trizel-ai-site/trizel-site-artifacts                                │
│                                                                      │
│  Inputs: data/publish/3i-atlas/  (Gate 2I-B verified package)       │
│  Engine: lab/publication_engine.py  (deterministic, network-free)   │
│  Outputs: lab/publication/claim-001/{date}/  + phase-e/*.html       │
└─────────────────────────────────────────────────────────────────────┘
                                   │ served as
                    trizel-ai.com (GitHub Pages)
```

### D.2 Artifact / Data Dependency Table

| Artifact | Source (Generated By) | Stored At | Rendered At | Transport |
|---|---|---|---|---|
| `daily-status.json` | `abdelkader-omran/AUTO-DZ-ACT-3I-ATLAS-DAILY` | `data/publish/3i-atlas/daily-status.json` | `/en/status/`, all `phase-e/claim-001.html` (JS fetch) | Manual ledger commit to `data/publish/3i-atlas/` |
| `source-snapshot.json` | `AUTO-DZ-ACT-3I-ATLAS-DAILY` (commit `cc4d8f9`) | `data/publish/3i-atlas/source-snapshot.json` | Referenced by `publication_engine.py` | Verbatim copy from Layer-1 |
| `ro-crate-metadata.json` | Composed by trizel governance process | `data/publish/3i-atlas/ro-crate-metadata.json` | — | Committed with data package |
| `manifest.json` (3i-atlas) | Governance process | `data/publish/3i-atlas/manifest.json` | — | Committed with data package |
| Phase-E tables (CSV/JSON) | `lab/publication_engine.py` | `lab/publication/claim-001/{date}/tables/` | `phase-e/claim-001.html` (static display) | Auto-commit via `phase-e-auto-publish.yml` PR |
| Phase-E derived data | `lab/publication_engine.py` | `lab/publication/claim-001/{date}/derived/` | `phase-e/claim-001.html` | Auto-commit via PR |
| Phase-E HTML pages | `lab/generate_phase_e_pages.py` | `phase-e/`, `{lang}/phase-e/` | Direct URL access | Auto-commit via PR |
| `publications.yml` | `lab/update_publications_yml.py` | `phase-e/publications.yml` | — (registry only) | Auto-commit via PR |
| Phase-F1 artifact | 3I/ATLAS laboratory (Layer-1) | `artifacts/3i-atlas/phase-f1/2026-01-24/` | `artifacts/index.html` | Manual frozen commit |
| Phase-F3 artifact | TRIZEL F3 process (Layer-1) | `artifacts/phase-f3/2026-01-23/` | `artifacts/index.html` | Manual frozen commit |
| Zenodo DOIs | Zenodo (external) | Referenced in HTML + README | `index.html`, `how-to-cite/`, `goi/doi/` | Hardcoded URLs |
| `topology.json` | Governance documentation process | `topology/topology.json` | `topology/index.html` | Manual commit |
| `atlas/map.json` | Governance documentation process | `atlas/map.json` | `atlas/index.html` | Manual commit |
| `goi/data/global-index.json` | Governance process | `goi/data/global-index.json` | `goi/index.html`, lang variants | Manual commit |
| SBDB verification logs | `scripts/sbdb_validation_runner.py` | CI artifact (7-day retention) | Not rendered on site | `sbdb-verification.yml` workflow |
| trizel-ai-logo-dark.png | Design assets | `assets/branding/trizel-ai/` | All pages (nav, OG image) | Manual commit |

### D.3 External URL Dependencies

| External URL | Used In | Purpose |
|---|---|---|
| `https://github.com/trizel-ai/trizel-core` | `index.html`, many pages | Layer-0 governance reference |
| `https://github.com/trizel-ai-site/trizel-core` | `i18n/translations.json`, docs | Layer-0 governance reference (alt org) |
| `https://github.com/trizel-ai-site/trizel-lab` | Various pages | Layer-1 lab reference |
| `https://doi.org/10.5281/zenodo.18354752` | `index.html` (67×), sitemap | Primary Zenodo DOI |
| `https://doi.org/10.5281/zenodo.18413908` | Phase-E pages | Gate-4C archive DOI |
| `https://doi.org/10.5281/zenodo.18416881` | Phase-E pages | 3I-ATLAS snapshots DOI |
| `https://doi.org/10.5281/zenodo.18283981` | README, governance | Gate-1 governance DOI |
| `https://doi.org/10.5281/zenodo.18012859` | README | Scientific Ingest Layer DOI |
| `https://doi.org/10.5281/zenodo.18134257` | README | AUTO-DZ-ACT DOI |
| `https://doi.org/10.5281/zenodo.18215708` | README | AUTO-DZ-ACT definition DOI |
| `https://orcid.org/0009-0003-9884-3697` | `index.html` (60×), citation meta | Author ORCID |
| `https://github.com/abdelkader-omran/AUTO-DZ-ACT-ANALYSIS-3I-ATLAS` | `governance-status/GATE-5-STATUS.md` | Gate-5 execution record |

---

## Section E: Update Plan — Recommendations (Backward-Compatible, No Breaking URLs)

All recommendations preserve existing URL structure. No framework migration proposed.

### Priority P0 — Data Integrity / Pipeline Correctness

| ID | Issue | Location | Recommended Action |
|---|---|---|---|
| P0-1 | **German (`de`) absent from `i18n/translations.json`** | `i18n/translations.json` | Add `"de"` translation block to `translations.json`; the narrative file (`i18n/narrative.de.json`) already exists and can serve as a template. This is a functional gap: any tooling reading `translations.json` to enumerate languages silently skips DE. |
| P0-2 | **Placeholder DOI links in non-EN phase-e pages** | `{lang}/phase-e/claim-001.html` (all 6 langs) | Several pages contain placeholder DOI patterns like `[DOI_HIER_EINFÜGEN]`, `[INSERT_DOI_HERE]`. These should be replaced with the actual DOI once assigned, or removed if no DOI exists yet. |
| P0-3 | **`GATE-5-STATUS.md` contains unfilled placeholder** | `governance-status/GATE-5-STATUS.md` | `<PASTE_GATE5_RUN_URL_HERE>` placeholder is still present. Fill with the actual workflow run URL or mark as pending. |

### Priority P1 — Consistency / Reliability

| ID | Issue | Location | Recommended Action |
|---|---|---|---|
| P1-1 | **`/atlas/de/` directory missing** | `atlas/` | Create `atlas/de/index.html` consistent with `atlas/en/`, `atlas/fr/`, etc. The `/de/map/index.html` links to the map section; the Atlas view for DE is absent. |
| P1-2 | **`goi/doi/DOI_SNIPPET.ar.html` absent** | `goi/doi/` | Arabic DOI snippet is missing while all other 5 languages have one. Add `DOI_SNIPPET.ar.html` matching the pattern of existing snippets. |
| P1-3 | **CSS loading inconsistency** | All HTML files | 98 pages load only `/assets/css/main.css`; 56 pages load the newer H1-C stack (`tokens.css` + `base.css` + `components.css`). The orphaned draft pages load yet another variant (`scientific-ui.css`, `layout.css`). A broken `tokens.css` or `base.css` would break 56 pages; a broken `main.css` would break 98 pages. Standardize on one CSS stack for all non-draft pages. |
| P1-4 | **Root `index.html` nav hard-links to `/en/` sections** | `index.html` nav bar | The global homepage navigation links to `/en/lab/`, `/en/projects/`, `/en/status/` rather than language-neutral routes. Consider routing these to the respective root-level pages (`/goi/`, `/phase-e/`, `/artifacts/`) or using a language-neutral landing. |
| P1-5 | **Duplicated navigation structure** | All `/{lang}/` pages | Each language page duplicates the full SVG icon-embedded nav HTML. A single shared nav include is not used (no templating). Any change to nav structure requires editing 66+ HTML files. Consider a common nav fragment or note the scope of nav changes. |
| P1-6 | **`/en/status/` loads `daily-indicator.js`; other language status pages do not** | `{lang}/status/index.html` | Only `en/status/index.html` includes the live daily indicator JavaScript. All `{lang}/phase-e/claim-001.html` pages load it. Decide whether the indicator should appear on all language status pages (if so, add the script) or be removed from claim pages for consistency. |
| P1-7 | **Old GitHub Pages URL in `docs/SITE_MAP.md`** | `docs/SITE_MAP.md` | References `https://trizel-ai-site.github.io/trizel-site/` (old URL). The live site is `https://trizel-ai.com/`. Update the doc or add a note marking it as historical. |

### Priority P2 — Performance / Hygiene

| ID | Issue | Location | Recommended Action |
|---|---|---|---|
| P2-1 | **Logo PNG is 144 KB** | `assets/branding/trizel-ai/trizel-ai-logo-dark.png` | The logo is used as OG image and favicon across all pages. 144 KB is heavy for a logo. Convert to WebP or optimize the PNG. An SVG version would be optimal (lossless, ~1–5 KB). Existing SVG assets exist in `assets/brand/` but the PNG is used as the canonical logo. |
| P2-2 | **Orphaned root-level draft HTML files** | `index_layer2_selector.html`, `index_layer4_1_home.html`, `index_phase_f.html`, `index_phase_f_backup.html` | These 4 files are not linked from the navigation and appear to be superseded drafts. They load different CSS stacks. Add them to `.gitignore` or move to a `/drafts/` folder to prevent accidental indexing. If they must stay, add `<meta name="robots" content="noindex">`. |
| P2-3 | **CSS version query strings inconsistency** | `index.html` (root) | Root `index.html` loads CSS with `?v=20260124` query strings; all other pages load without version strings. This can cause cache inconsistencies. Standardize — either all with version strings, or all without. |
| P2-4 | **`phase-e/publications.yml` notes in Arabic only** | `phase-e/publications.yml` | The `notes` field for all entries is written in Arabic ("نشر Phase-E حتمي. دون تفسير."). Since this is a machine-readable registry, a neutral language-independent note or empty value would be preferable. |
| P2-5 | **`sitemap.xml` not updated with post-January pages** | `sitemap.xml` | `sitemap.xml` has `lastmod: 2026-01-29` for all entries. Phase-E publications up to `2026-02-19` exist. Sitemap should be updated when new content is published. |
| P2-6 | **`trizel-ai-assistant.js` loaded but assistant functionality scope is unclear** | `assets/js/trizel-ai-assistant.js` | The AI assistant JS is loaded on some pages. Confirm it performs no external calls (consistent with the Layer-2 "no execution" constraint). Document its scope. |

---

## Risk & Fragility Summary

| Risk | Fragility Level | Pages Affected |
|---|---|---|
| Breaking change to `tokens.css` or `base.css` | **High** | 56 pages (H1-C stack) |
| Breaking change to `/assets/css/main.css` | **High** | 98 pages |
| Breaking change to `base.css` or `components.css` | **High** | 56 pages |
| Removal/rename of `data/publish/3i-atlas/daily-status.json` | **High** | 7 pages (JS fetch) |
| Adding `de` to `translations.json` without testing | Medium | Any tooling reading that file |
| Navigation duplication (66+ copies) | Medium | All language pages |
| Root logo PNG broken/missing | Medium | All pages (OG image, favicon) |
| Orphaned CSS stacks (`scientific-ui.css`, `layout.css`) | Low | 4 draft pages only |

---

*Report generated by read-only analysis of repository `trizel-ai-site/trizel-site-artifacts` at branch `main`. No files were modified.*
