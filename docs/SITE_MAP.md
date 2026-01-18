# SITE MAP

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display)  
**Date:** 2026-01-18  
**Purpose:** Exact mapping of all pages, sections, assets, and navigation structure

---

## Entry Points

### Primary Entry Point
- **File:** `/index.html`
- **URL:** `https://trizel-ai-site.github.io/trizel-site/` (when Pages enabled)
- **Purpose:** Main institutional presentation page
- **Type:** Static HTML, no JavaScript, presentation-only

---

## Page Structure

### index.html
**Location:** `/index.html`  
**Status:** Active  
**Theme:** Institutional (light theme via `assets/css/style.css`)

**Sections:**
1. **Header** (`<header class="site-header">`)
   - Brand: "TRIZEL"
   - Tagline: "Institutional Presentation"
   - **Missing:** AUTO DZ ACT memory marker

2. **Main Content** (`<main class="container">`)
   - **Section: Institutional Overview** (`#overview`)
     - Description of governance structure
     - Presentation-only notice
   
   - **Section: Governance Status** (`#governance-status`)
     - Layer-2 status: COMPLETE, frozen
     - Layer-3 status: Static content only
   
   - **Section: Scope & Constraints** (`#scope-constraints`)
     - Publishing identity: trizel-admin
     - Allowed/forbidden changes
     - No JavaScript notice
   
   - **Section: References** (`#references`)
     - Links to internal documentation
     - Link to live site
     - **Note:** Links use relative paths (/docs/, /.github/)
   
   - **Section: Contact & Attribution** (`#contact`)
     - Contact information
     - Copyright notice

3. **Footer** (`<footer class="site-footer">`)
   - Static presentation notice
   - Branch reference

---

## Assets Map

### CSS Files
1. **`/assets/css/main.css`**
   - **Theme:** Dark/scientific aesthetic
   - **Status:** Present but not currently used by index.html
   - **Style:** Gradient backgrounds, dark panels
   - **Variables:** `--bg`, `--panel`, `--muted`, `--text`, `--accent`
   - **Max Width:** 880px
   
2. **`/assets/css/style.css`**
   - **Theme:** Light institutional
   - **Status:** Currently active (linked in index.html)
   - **Style:** Clean, minimal, professional
   - **Variables:** `--bg`, `--muted`, `--accent`, `--card`
   - **Max Width:** 1000px

### JavaScript Files
- **Status:** NONE (compliant with Layer-2 constraints)

### Image Files
- **Status:** NONE currently in repository
- **Directory:** `/assets/` exists but contains only `css/` subdirectory

### Other Assets
- No fonts, icons, or media files currently present

---

## Navigation Structure

### Internal Navigation
**Current State:** Single-page site with no navigation menu

**Internal Links (within index.html):**
- `/docs/ACCOUNT_REGISTRY.md` - Account registry documentation
- `/.github/CODEOWNERS` - Code ownership file
- `https://trizel-ai-site.github.io/trizel-site/` - Live site reference

### External References
**Canonical Governance Authority:**
- `https://github.com/trizel-ai-site/trizel-core` (referenced in docs but not in UI)

**Research Documentation:**
- `https://github.com/trizel-ai-site/trizel-lab` (referenced in docs but not in UI)

**Existing Documentation Links:**
All in README.md and docs/ files but not exposed in main UI

---

## Documentation Structure

### Root-Level Documentation
1. `README.md` - Repository overview and layer architecture
2. `BASELINE_SNAPSHOT.md` - Baseline state snapshot
3. `FINAL_FREEZE_DECLARATION.md` - Scientific freeze declaration

### docs/ Directory
1. `ACCOUNT_REGISTRY.md` - Publishing account governance
2. `AI_ROLE.md` - AI reference constraints
3. `EXCLUSIONS.md` - Prohibited content definition
4. `LAYER_BOUNDARIES.md` - Three-layer separation model
5. `PRESENTATION_SCOPE.md` - Layer-2 scope definition

**New Documentation (to be added):**
- `docs/SITE_MAP.md` (this file)
- `docs/LAYER2_COMPLIANCE_AUDIT.md`
- `docs/LAYER2_CHANGELOG.md`
- `docs/DESIGN_AUDIT.md`
- `docs/DESIGN_RECOMMENDATIONS.md`

---

## Build & Deployment

### Build Process
- **Status:** NONE
- **Type:** Pure static HTML/CSS
- **No build tools:** No npm, webpack, jekyll, or build system

### Deployment
- **Method:** GitHub Pages (manual configuration)
- **Source:** main branch, root directory
- **Workflows:** Validation only, no deployment automation
- **Custom Domain:** NONE (CNAME forbidden per CODEOWNERS)

---

## CI/CD Workflows

### Active Workflows
1. **`baseline-snapshot-guard.yml`**
   - **Purpose:** Validate BASELINE_SNAPSHOT.md integrity
   - **Triggers:** PR, push to BASELINE_SNAPSHOT.md
   - **Checks:** File existence, speculative language ban
   - **Status:** Read-only validation

2. **`pages-surface-freeze.yml`**
   - **Purpose:** Validate Pages surface freeze
   - **Triggers:** All pushes, PRs, manual
   - **Checks:** Detect Pages artifacts, validate no deployment logic
   - **Status:** Freeze enforcement

---

## Routing & URLs

### Current Routing
- **Type:** Single-page application (no routing)
- **Pages:** 1 (index.html)
- **Dynamic Routes:** NONE

### URL Structure (when deployed)
- Base: `https://trizel-ai-site.github.io/trizel-site/`
- Index: `https://trizel-ai-site.github.io/trizel-site/index.html` or `/`
- Assets: `https://trizel-ai-site.github.io/trizel-site/assets/css/*`

---

## Access Control

### CODEOWNERS Protection
Protected paths:
- `/docs/ACCOUNT_REGISTRY.md` - Requires @trizel-ai-site/governance-approvers
- `/.github/workflows/` - Requires @trizel-ai-site/governance-approvers
- `/.github/CODEOWNERS` - Requires @trizel-ai-site/governance-approvers
- `CNAME` (any location) - Requires @trizel-ai-site/governance-approvers

### Branch Protection
- Default branch: `main`
- Protection rules: Enforced via CODEOWNERS

---

## Layer-2 Compliance Notes

### ✓ Compliant Aspects
- No JavaScript or dynamic code
- No backend/API calls
- No data processing logic
- No scientific claims or analysis
- Pure presentation/display only
- Static HTML/CSS only

### ⚠ Missing Requirements
- AUTO DZ ACT memory marker not under logo
- No explicit Layer-2 disclaimer on page
- trizel-core governance links not prominent in UI
- No visual connection to canonical authority (Layer-0)

---

## Summary Statistics

- **Total HTML Pages:** 1
- **Total CSS Files:** 2
- **Total JS Files:** 0 (compliant)
- **Total Sections:** 5 (in index.html)
- **Total Documentation Files:** 8 (will be 13 after this audit)
- **Total Workflows:** 2 (validation only)
- **Navigation Links:** 3 internal, 1 external visible

---

**Document Type:** Site Map — Presentation Layer  
**Purpose:** Complete structural reference  
**Layer-2 Compliant:** Yes (documentation only)
