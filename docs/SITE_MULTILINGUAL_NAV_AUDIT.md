# SITE_MULTILINGUAL_NAV_AUDIT

## Scope
- Layer-2 presentation routes only
- No DAILY or ANALYSIS execution logic changed
- Audit date: 2026-04-18

## 1) Repository inspection evidence
- HTML routes inspected (excluding node_modules): **138**
- Locale routes inspected: **69**
- Non-locale routes inspected: **0**
- Baseline validation executed: `npm run contrast:check` (pass: 52/52)

## 2) Full page and route inventory
### Main/root pages
- `404.html`
- `accessibility.html`
- `index.html`
- `index_layer2_selector.html`
- `index_layer4_1_home.html`
- `index_phase_f.html`
- `observations.html`
- `statistics.html`
- `status.html`
- `system-map.html`

### Locale routes by locale
#### `en`
- `en/goi/index.html`
- `en/governance/index.html`
- `en/index.html`
- `en/lab/index.html`
- `en/layer-map/index.html`
- `en/map/index.html`
- `en/overview/index.html`
- `en/phase-e/claim-001.html`
- `en/phase-e/index.html`
- `en/phase-e/observations/index.html`
- `en/phase-f-governance/index.html`
- `en/projects/index.html`
- `en/status/gate-5.html`
- `en/status/index.html`

#### `fr`
- `fr/goi/index.html`
- `fr/governance/index.html`
- `fr/index.html`
- `fr/lab/index.html`
- `fr/map/index.html`
- `fr/phase-e/claim-001.html`
- `fr/phase-e/index.html`
- `fr/phase-f-governance/index.html`
- `fr/projects/index.html`
- `fr/status/gate-5.html`
- `fr/status/index.html`

#### `de`
- `de/goi/index.html`
- `de/governance/index.html`
- `de/index.html`
- `de/lab/index.html`
- `de/map/index.html`
- `de/phase-e/claim-001.html`
- `de/phase-e/index.html`
- `de/phase-f-governance/index.html`
- `de/projects/index.html`
- `de/status/gate-5.html`
- `de/status/index.html`

#### `ru`
- `ru/goi/index.html`
- `ru/governance/index.html`
- `ru/index.html`
- `ru/lab/index.html`
- `ru/map/index.html`
- `ru/phase-e/claim-001.html`
- `ru/phase-e/index.html`
- `ru/phase-f-governance/index.html`
- `ru/projects/index.html`
- `ru/status/gate-5.html`
- `ru/status/index.html`

#### `zh`
- `zh/goi/index.html`
- `zh/governance/index.html`
- `zh/index.html`
- `zh/lab/index.html`
- `zh/map/index.html`
- `zh/phase-e/claim-001.html`
- `zh/phase-e/index.html`
- `zh/phase-f-governance/index.html`
- `zh/projects/index.html`
- `zh/status/gate-5.html`
- `zh/status/index.html`

#### `ar`
- `ar/goi/index.html`
- `ar/governance/index.html`
- `ar/index.html`
- `ar/lab/index.html`
- `ar/map/index.html`
- `ar/phase-e/claim-001.html`
- `ar/phase-e/index.html`
- `ar/phase-f-governance/index.html`
- `ar/projects/index.html`
- `ar/status/gate-5.html`
- `ar/status/index.html`

### Other Layer-2 routes (non-locale-prefixed)
- `artifacts/index.html`
- `artifacts/phase-f3/2026-01-23/index.html`
- `atlas/ar/index.html`
- `atlas/de/index.html`
- `atlas/en/index.html`
- `atlas/fr/index.html`
- `atlas/index.html`
- `atlas/ru/index.html`
- `atlas/zh/index.html`
- `content/01-positioning/index.html`
- `content/02-architecture/index.html`
- `content/03-repository-roles/index.html`
- `content/04-artifacts/index.html`
- `evidence/index.html`
- `goi/doi/DOI_SNIPPET.ar.html`
- `goi/doi/DOI_SNIPPET.de.html`
- `goi/doi/DOI_SNIPPET.en.html`
- `goi/doi/DOI_SNIPPET.fr.html`
- `goi/doi/DOI_SNIPPET.ru.html`
- `goi/doi/DOI_SNIPPET.zh.html`
- `goi/index.ar.html`
- `goi/index.de.html`
- `goi/index.en.html`
- `goi/index.fr.html`
- `goi/index.html`
- `goi/index.ru.html`
- `goi/index.zh.html`
- `goi/pages/observations/index.ar.html`
- `goi/pages/observations/index.de.html`
- `goi/pages/observations/index.en.html`
- `goi/pages/observations/index.fr.html`
- `goi/pages/observations/index.ru.html`
- `goi/pages/observations/index.zh.html`
- `goi/pages/production/index.ar.html`
- `goi/pages/production/index.de.html`
- `goi/pages/production/index.en.html`
- `goi/pages/production/index.fr.html`
- `goi/pages/production/index.ru.html`
- `goi/pages/production/index.zh.html`
- `goi/pages/repositories/index.ar.html`
- `goi/pages/repositories/index.de.html`
- `goi/pages/repositories/index.en.html`
- `goi/pages/repositories/index.fr.html`
- `goi/pages/repositories/index.ru.html`
- `goi/pages/repositories/index.zh.html`
- `goi/pages/snapshots/index.ar.html`
- `goi/pages/snapshots/index.de.html`
- `goi/pages/snapshots/index.en.html`
- `goi/pages/snapshots/index.fr.html`
- `goi/pages/snapshots/index.ru.html`
- `goi/pages/snapshots/index.zh.html`
- `how-to-cite/index.html`
- `methodology/index.html`
- `phase-e/claim-001.html`
- `phase-e/index.html`
- `phase-f-governance/index.html`
- `scientific-narrative/index.html`
- `scientific-publication/index.html`
- `topology/index.html`

## 3) Locale inventory
- Supported locales audited: `en`, `fr`, `de`, `ru`, `zh`, `ar`
- `en`: 14 routes
- `fr`: 11 routes
- `de`: 11 routes
- `ru`: 11 routes
- `zh`: 11 routes
- `ar`: 11 routes

## 4) Defect classification and applied corrections
### A. Untranslated English remnants on non-English routes
- **Defect origin:** Hardcoded labels in localized HTML templates (`.skip-link`, links to `/artifacts/`, links to `/accessibility.html`).
- **Affected locales:** `fr`, `de`, `ru`, `zh`, `ar`.
- **Corrected rendering paths:** `.skip-link`, `.site-nav a[href="/artifacts/"]`, `.footer-nav a[href="/artifacts/"]`, `.site-nav a[href="/accessibility.html"]`.
- **Corrected strings by locale:**
  - `fr`: “Aller au contenu principal”, “Artefacts”, “Accessibilité”
  - `de`: “Zum Hauptinhalt springen”, “Artefakte”, “Barrierefreiheit”
  - `ru`: “Перейти к основному содержанию”, “Артефакты”, “Доступность”
  - `zh`: “跳转到主要内容”, “成果”, “无障碍”
  - `ar`: “انتقل إلى المحتوى الرئيسي”, “النتائج”, “إمكانية الوصول”

### B. Locale-switch propagation defects
- **Defect origin 1:** `assets/js/lang-switcher.js` previously rewrote paths by assuming locale at first path segment, breaking atlas locale routes (e.g., `/atlas/fr/...`).
- **Defect origin 2:** Localized page links (`.brand-link`, `/goi/`, breadcrumb home links) could leak back to non-localized root paths.
- **Corrected components:**
  - `assets/js/lang-switcher.js` (base-path aware locale routing for select and anchor switchers).
  - `assets/js/l2-locale-nav.js` (localized link normalization for `.brand-link`, `/goi/`, breadcrumb home, and language links).

### C. Return-navigation UX weaknesses
- **Defect origin:** Sub-pages lacked a consistent first-focus return path to parent/home across localized routes.
- **Affected paths:** Localized sub-pages under `/en`, `/fr`, `/de`, `/ru`, `/zh`, `/ar` and localized atlas routes under `/atlas/{locale}/`.
- **Correction:** Added injected contextual return navigation component `.l2-return-nav` + `.l2-return-link` at main-content entry.
- **Style/ergonomics update:** Added responsive/mobile-friendly return-link styling in `assets/css/main.css`.

### D. Mixed-language breadcrumb/navigation labels
- **Defect origin:** Shared breadcrumb/nav labels remained English on non-English routes.
- **Corrected rendering paths:** `.breadcrumb` aria-label + first breadcrumb home label, `.lang-switcher a.lang-link` active/current state.

## 5) Files changed
- `assets/js/l2-locale-nav.js` (new)
- `assets/js/lang-switcher.js`
- `assets/css/main.css`
- `docs/SITE_MULTILINGUAL_NAV_AUDIT.md`
- 75 localized HTML routes updated to load `/assets/js/l2-locale-nav.js`

## 6) Navigation return-path inventory audited
- Header brand return path: `.brand-link`
- Breadcrumb return path: first breadcrumb anchor (home)
- Parent return path: contextual `.l2-return-link` inserted at main content start
- Locale switch return path: `.lang-switcher` route-preserving links
- GOI route normalization from localized pages: links targeting `/goi/` normalized to `/{locale}/goi/` when applicable

## 7) PR scope boundary confirmation
- Only Layer-2 presentation assets and HTML were changed.
- No changes were made to DAILY or ANALYSIS execution logic.
- No execution contracts were modified.
