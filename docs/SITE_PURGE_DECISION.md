# TRIZEL Site Purge Draft (Audit-Derived, Pending Governance Review)

## 0. Governance Status

This document is:

- audit-derived
- non-authoritative
- pending governance review

This document MUST NOT be used for:
- file deletion
- repository cleanup
- structural modification

No purge action is authorized based on this document.

---

## 1. Decision Layer

This document is an audit-derived draft generated from the SITE_AUDIT_REPORT.
It does NOT represent a governance-approved decision.

It converts audit-derived classification into a pending decision draft.

---

## 2. Decision Categories

Each file must belong to one of the following:

- DELETE (approved for removal)
- REWRITE (content must be replaced)
- KEEP (governance-compliant)

No file may remain unclassified.

---

## 3. Governance Rules

- No deletion without explicit listing in DELETE
- No rewrite without justification
- KEEP implies full compliance with TRIZEL governance
- UNKNOWN is not allowed at this stage

---

## 4. DELETE (Audit-Derived Classification)

These classifications are automatically derived from the audit report and require manual governance validation before any action.

The following 31 files are classified as NON-GOVERNED or UNKNOWN in the audit report:

- `CRITICAL_FIX_SUMMARY.md` — NON-GOVERNED
- `FINAL_FREEZE_DECLARATION.md` — NON-GOVERNED
- `PATCH2_COMPLETION_SUMMARY.md` — NON-GOVERNED
- `PATCH2_VALIDATION.md` — NON-GOVERNED
- `PHASE_E2_RESPONSIVE_SUMMARY.md` — NON-GOVERNED
- `PHASE_E3_MICRO_INTERACTIONS_SUMMARY.md` — NON-GOVERNED
- `PHASE_E_FIX_COMPLETION_SUMMARY.md` — NON-GOVERNED
- `PHASE_E_GENERALIZATION_SUMMARY.md` — NON-GOVERNED
- `PHASE_E_LANGUAGE_AVAILABILITY_SUMMARY.md` — NON-GOVERNED
- `PHASE_E_SUMMARY.md` — NON-GOVERNED
- `PHASE_E_UI_UX_IMPROVEMENT_PLAN.md` — NON-GOVERNED
- `PHASE_E_VISIBILITY_SUMMARY.md` — NON-GOVERNED
- `PHASE_F4_COMPLETION.md` — NON-GOVERNED
- `PHASE_H1C_COMPLETION_SUMMARY.md` — NON-GOVERNED
- `PHASE_H1C_PR1_COMPLETION.md` — NON-GOVERNED
- `PHASE_H1C_VISUAL_VERIFICATION.md` — NON-GOVERNED
- `VALIDATION_SUMMARY.txt` — NON-GOVERNED
- `assets/css/trizel-ai-assistant.css` — NON-GOVERNED
- `assets/js/trizel-ai-assistant.js` — NON-GOVERNED
- `docs/DESIGN_RECOMMENDATIONS.md` — NON-GOVERNED
- `docs/I18N_PLANNING_SUMMARY.md` — NON-GOVERNED
- `i18n/narrative.ar.json` — NON-GOVERNED
- `i18n/narrative.de.json` — NON-GOVERNED
- `i18n/narrative.en.json` — NON-GOVERNED
- `i18n/narrative.fr.json` — NON-GOVERNED
- `i18n/narrative.ru.json` — NON-GOVERNED
- `i18n/narrative.zh.json` — NON-GOVERNED
- `index_phase_f_backup.html` — UNKNOWN
- `scientific-narrative/README.md` — NON-GOVERNED
- `scientific-narrative/SCOPE.md` — NON-GOVERNED
- `scientific-narrative/index.html` — NON-GOVERNED

---

## 5. REWRITE (Audit-Derived Classification)

These classifications are automatically derived from the audit report and require manual governance validation before any action.

The following 127 files are classified as OUTDATED but structurally relevant and require rewrite for governance alignment:

- `GOVERNANCE_404_VALIDATION.md` — OUTDATED
- `PHASE_E4_MULTILINGUAL_CANONICALIZATION_DESIGN.md` — OUTDATED
- `PHASE_E_DEPLOYMENT_VERIFICATION.md` — OUTDATED
- `PHASE_E_VISIBILITY_AUDIT_REPORT.md` — OUTDATED
- `PHASE_F1_POST_MERGE_VALIDATION.md` — OUTDATED
- `PHASE_H1C_L10N_PRO_VERIFICATION.md` — OUTDATED
- `PHASE_H1C_SECURITY_SUMMARY.md` — OUTDATED
- `WCAG_IMPLEMENTATION_SUMMARY.md` — OUTDATED
- `ar/goi/index.html` — OUTDATED
- `ar/governance/index.html` — OUTDATED
- `ar/index.html` — OUTDATED
- `ar/lab/index.html` — OUTDATED
- `ar/map/index.html` — OUTDATED
- `ar/phase-e/claim-001.html` — OUTDATED
- `ar/phase-e/index.html` — OUTDATED
- `ar/phase-f-governance/index.html` — OUTDATED
- `ar/projects/index.html` — OUTDATED
- `ar/status/gate-5.html` — OUTDATED
- `ar/status/index.html` — OUTDATED
- `assets/app.js` — OUTDATED
- `assets/archive/system-map/trizel-system-map-legacy-20260130.svg` — OUTDATED
- `assets/archive/system-map/trizel-system-map-v1-legacy-20260130.svg` — OUTDATED
- `assets/brand/hero-banner.svg` — OUTDATED
- `assets/css/layer4.css` — OUTDATED
- `assets/css/phase-e.css` — OUTDATED
- `assets/css/statistics.css` — OUTDATED
- `assets/js/daily-indicator.js` — OUTDATED
- `atlas/ar/index.html` — OUTDATED
- `atlas/de/index.html` — OUTDATED
- `atlas/en/index.html` — OUTDATED
- `atlas/fr/index.html` — OUTDATED
- `atlas/index.html` — OUTDATED
- `atlas/ru/index.html` — OUTDATED
- `atlas/zh/index.html` — OUTDATED
- `de/goi/index.html` — OUTDATED
- `de/governance/index.html` — OUTDATED
- `de/index.html` — OUTDATED
- `de/lab/index.html` — OUTDATED
- `de/map/index.html` — OUTDATED
- `de/phase-e/claim-001.html` — OUTDATED
- `de/phase-e/index.html` — OUTDATED
- `de/phase-f-governance/index.html` — OUTDATED
- `de/projects/index.html` — OUTDATED
- `de/status/gate-5.html` — OUTDATED
- `de/status/index.html` — OUTDATED
- `docs/DESIGN_AUDIT.md` — OUTDATED
- `docs/GO_NO_GO_LAYER2.md` — OUTDATED
- `docs/I18N_ARCHITECTURE_PLAN.md` — OUTDATED
- `docs/I18N_IMPLEMENTATION_CHECKLIST.md` — OUTDATED
- `docs/LAUNCH_READINESS.md` — OUTDATED
- `docs/UI_DESIGN_SYSTEM.md` — OUTDATED
- `en/goi/index.html` — OUTDATED
- `en/governance/index.html` — OUTDATED
- `en/index.html` — OUTDATED
- `en/lab/index.html` — OUTDATED
- `en/layer-map/index.html` — OUTDATED
- `en/map/index.html` — OUTDATED
- `en/overview/index.html` — OUTDATED
- `en/phase-e/claim-001.html` — OUTDATED
- `en/phase-e/index.html` — OUTDATED
- `en/phase-e/observations/index.html` — OUTDATED
- `en/phase-f-governance/index.html` — OUTDATED
- `en/projects/index.html` — OUTDATED
- `en/status/gate-5.html` — OUTDATED
- `en/status/index.html` — OUTDATED
- `evidence/index.html` — OUTDATED
- `fr/goi/index.html` — OUTDATED
- `fr/governance/index.html` — OUTDATED
- `fr/index.html` — OUTDATED
- `fr/lab/index.html` — OUTDATED
- `fr/map/index.html` — OUTDATED
- `fr/phase-e/claim-001.html` — OUTDATED
- `fr/phase-e/index.html` — OUTDATED
- `fr/phase-f-governance/index.html` — OUTDATED
- `fr/projects/index.html` — OUTDATED
- `fr/status/gate-5.html` — OUTDATED
- `fr/status/index.html` — OUTDATED
- `.github/workflows/phase-e-auto-publish.yml` — OUTDATED
- `.github/workflows/phase-e-publication-validation.yml` — OUTDATED
- `goi/index.ar.html` — OUTDATED
- `goi/index.ar.md` — OUTDATED
- `goi/index.de.html` — OUTDATED
- `goi/index.de.md` — OUTDATED
- `goi/index.en.html` — OUTDATED
- `goi/index.en.md` — OUTDATED
- `goi/index.fr.html` — OUTDATED
- `goi/index.fr.md` — OUTDATED
- `goi/index.html` — OUTDATED
- `goi/index.ru.html` — OUTDATED
- `goi/index.ru.md` — OUTDATED
- `goi/index.zh.html` — OUTDATED
- `goi/index.zh.md` — OUTDATED
- `index.html` — OUTDATED
- `index_layer2_selector.html` — OUTDATED
- `index_layer4_1_home.html` — OUTDATED
- `index_phase_f.html` — OUTDATED
- `js/app.js` — OUTDATED
- `lab/generate_phase_e_pages.py` — OUTDATED
- `observations.html` — OUTDATED
- `phase-e/README.md` — OUTDATED
- `phase-e/TEMPLATE_PUBLICATION_ENTRY.txt` — OUTDATED
- `phase-e/claim-001.html` — OUTDATED
- `phase-e/index.html` — OUTDATED
- `ru/goi/index.html` — OUTDATED
- `ru/governance/index.html` — OUTDATED
- `ru/index.html` — OUTDATED
- `ru/lab/index.html` — OUTDATED
- `ru/map/index.html` — OUTDATED
- `ru/phase-e/claim-001.html` — OUTDATED
- `ru/phase-e/index.html` — OUTDATED
- `ru/phase-f-governance/index.html` — OUTDATED
- `ru/projects/index.html` — OUTDATED
- `ru/status/gate-5.html` — OUTDATED
- `ru/status/index.html` — OUTDATED
- `statistics.html` — OUTDATED
- `status.html` — OUTDATED
- `zh/goi/index.html` — OUTDATED
- `zh/governance/index.html` — OUTDATED
- `zh/index.html` — OUTDATED
- `zh/lab/index.html` — OUTDATED
- `zh/map/index.html` — OUTDATED
- `zh/phase-e/claim-001.html` — OUTDATED
- `zh/phase-e/index.html` — OUTDATED
- `zh/phase-f-governance/index.html` — OUTDATED
- `zh/projects/index.html` — OUTDATED
- `zh/status/gate-5.html` — OUTDATED
- `zh/status/index.html` — OUTDATED

---

## 6. KEEP (Audit-Derived Classification)

These classifications are automatically derived from the audit report and require manual governance validation before any action.

The following 333 files are classified as ALLOWED in the audit report:

- `.gitignore`
- `404.html`
- `BASELINE_SNAPSHOT.md`
- `BUILD.md`
- `CITATION.cff`
- `CNAME`
- `GOVERNANCE_PHASE_E_LOCK.md`
- `PHASE_E_DECLARATION.md`
- `PHASE_F1_MULTILINGUAL_SEMANTIC_LOCK.md`
- `PHASE_F_CLOSED.md`
- `PHASE_F_GOVERNANCE.md`
- `README.md`
- `SITE_INVENTORY_REPORT.md`
- `SYSTEM_MAP_SCIENTIFIC_AUDIT_2026-02.md`
- `WCAG_CONTRAST_GUIDE.md`
- `accessibility.html`
- `artifacts/3i-atlas/phase-f1/2026-01-24/HASH_VERIFICATION.md`
- `artifacts/3i-atlas/phase-f1/2026-01-24/README.md`
- `artifacts/3i-atlas/phase-f1/2026-01-24/provenance.json`
- `artifacts/index.html`
- `artifacts/phase-f3/2026-01-23/HASH_VERIFICATION.md`
- `artifacts/phase-f3/2026-01-23/HASH_VERIFICATION.txt`
- `artifacts/phase-f3/2026-01-23/README.md`
- `artifacts/phase-f3/2026-01-23/chart.svg`
- `artifacts/phase-f3/2026-01-23/index.html`
- `artifacts/phase-f3/2026-01-23/provenance.json`
- `artifacts/phase-f3/2026-01-23/statistics.csv`
- `artifacts/phase-f3/2026-01-23/statistics.json`
- `assets/base.css`
- `assets/brand/auto-dz-act-logo.svg`
- `assets/brand/governance-architecture.svg`
- `assets/brand/icon-algorithm.svg`
- `assets/brand/icon-archive.svg`
- `assets/brand/icon-data.svg`
- `assets/brand/icon-documentation.svg`
- `assets/brand/icon-engine.svg`
- `assets/brand/icon-framework.svg`
- `assets/brand/icon-gateway.svg`
- `assets/brand/icon-governance.svg`
- `assets/brand/icon-laboratory.svg`
- `assets/brand/icon-layers.svg`
- `assets/brand/icon-monitor.svg`
- `assets/brand/icon-research.svg`
- `assets/brand/scientific-observatory.svg`
- `assets/branding/trizel-ai/trizel-ai-logo-dark.png`
- `assets/branding/trizel-ai/trizel-ai-logo-mono.svg`
- `assets/components.css`
- `assets/css/institutional-media.css`
- `assets/css/layout.css`
- `assets/css/main.css`
- `assets/css/print.css`
- `assets/css/scientific-ui.css`
- `assets/css/style.css`
- `assets/css/system-map.css`
- `assets/css/tokens.css`
- `assets/diagrams/trizel-layer-structure.svg`
- `assets/diagrams/trizel-pipeline-map-v1.svg`
- `assets/diagrams/trizel-system-map-v1.svg`
- `assets/goi/goi.css`
- `assets/icons/archive.svg`
- `assets/icons/arrow-left.svg`
- `assets/icons/chevron-right.svg`
- `assets/icons/governance.svg`
- `assets/icons/home.svg`
- `assets/icons/index.svg`
- `assets/icons/lab.svg`
- `assets/icons/map.svg`
- `assets/icons/projects.svg`
- `assets/icons/status.svg`
- `assets/js/lang-switcher.js`
- `assets/style.css`
- `atlas/map.json`
- `atlas/sources.json`
- `data/ingestion/2026-03-15.json`
- `data/ingestion/2026-03-16.json`
- `data/ingestion/2026-03-17.json`
- `data/ingestion/2026-03-18.json`
- `data/ingestion/2026-03-19.json`
- `data/ingestion/2026-03-20.json`
- `data/ingestion/2026-03-21.json`
- `data/publish/3i-atlas/daily-status.json`
- `data/publish/3i-atlas/manifest.json`
- `data/publish/3i-atlas/ro-crate-metadata.json`
- `data/publish/3i-atlas/source-snapshot.json`
- `docs/ACCOUNT_REGISTRY.md`
- `docs/AI_ROLE.md`
- `docs/AI_TERMS_AUDIT_REPORT.md`
- `docs/ATLAS_SCHEMA.md`
- `docs/CHANGELOG.md`
- `docs/CONTENT_CLASSIFICATION.md`
- `docs/DOMAIN_BINDING_TRIZEL_AI.md`
- `docs/EXCLUSIONS.md`
- `docs/GOVERNANCE_CLARIFICATION.md`
- `docs/I18N_ARCHITECTURE.md`
- `docs/LAYER2_CHANGELOG.md`
- `docs/LAYER2_COMPLIANCE_AUDIT.md`
- `docs/LAYER2_STABILIZATION_NOTICE.md`
- `docs/LAYER_2_5_NOTICE.md`
- `docs/LAYER_3_PHASE_DECLARATION.md`
- `docs/LAYER_4_1_EXECUTION_NOTE.md`
- `docs/LAYER_4_PHASE_DECLARATION.md`
- `docs/LAYER_BOUNDARIES.md`
- `docs/LINKING_RULES.md`
- `docs/NARRATIVE_BOUNDARIES.md`
- `docs/PRESENTATION_SCOPE.md`
- `docs/SCIENTIFIC_CONCEPTS.md`
- `docs/SCIENTIFIC_PRESENTATION_CONTRACT.md`
- `docs/SITE_AUDIT_REPORT.md`
- `docs/SITE_MAP.md`
- `docs/SYSTEM_INTERFACE_PRINCIPLES.md`
- `docs/SYSTEM_TOPOLOGY.md`
- `docs/TRIZEL_Institutional_White_Paper_v1.md`
- `docs/TRIZEL_SYSTEM_STRUCTURE.md`
- `docs/WHITEPAPER_DOI_REFERENCE.md`
- `.github/CODEOWNERS`
- `.github/ISSUE_TEMPLATE/layer2-change-request.md`
- `.github/workflows/baseline-snapshot-guard.yml`
- `.github/workflows/jekyll-docker.yml`
- `.github/workflows/pages-surface-freeze.yml`
- `.github/workflows/pipeline-validation.yml`
- `.github/workflows/sbdb-verification.yml`
- `.github/workflows/wcag-contrast-check.yml`
- `goi/data/global-index.json`
- `goi/data/institutional-stats.json`
- `goi/data/sources/.gitkeep`
- `goi/data/sources/README.md`
- `goi/doi/DOI_SNIPPET.ar.html`
- `goi/doi/DOI_SNIPPET.de.html`
- `goi/doi/DOI_SNIPPET.en.html`
- `goi/doi/DOI_SNIPPET.fr.html`
- `goi/doi/DOI_SNIPPET.ru.html`
- `goi/doi/DOI_SNIPPET.zh.html`
- `goi/doi/README.md`
- `goi/pages/institutional-statistics/index.en.md`
- `goi/pages/observations/index.ar.html`
- `goi/pages/observations/index.ar.md`
- `goi/pages/observations/index.de.html`
- `goi/pages/observations/index.de.md`
- `goi/pages/observations/index.en.html`
- `goi/pages/observations/index.en.md`
- `goi/pages/observations/index.fr.html`
- `goi/pages/observations/index.fr.md`
- `goi/pages/observations/index.ru.html`
- `goi/pages/observations/index.ru.md`
- `goi/pages/observations/index.zh.html`
- `goi/pages/observations/index.zh.md`
- `goi/pages/production/index.ar.html`
- `goi/pages/production/index.ar.md`
- `goi/pages/production/index.de.html`
- `goi/pages/production/index.de.md`
- `goi/pages/production/index.en.html`
- `goi/pages/production/index.en.md`
- `goi/pages/production/index.fr.html`
- `goi/pages/production/index.fr.md`
- `goi/pages/production/index.ru.html`
- `goi/pages/production/index.ru.md`
- `goi/pages/production/index.zh.html`
- `goi/pages/production/index.zh.md`
- `goi/pages/repositories/index.ar.html`
- `goi/pages/repositories/index.ar.md`
- `goi/pages/repositories/index.de.html`
- `goi/pages/repositories/index.de.md`
- `goi/pages/repositories/index.en.html`
- `goi/pages/repositories/index.en.md`
- `goi/pages/repositories/index.fr.html`
- `goi/pages/repositories/index.fr.md`
- `goi/pages/repositories/index.ru.html`
- `goi/pages/repositories/index.ru.md`
- `goi/pages/repositories/index.zh.html`
- `goi/pages/repositories/index.zh.md`
- `goi/pages/snapshots/index.ar.html`
- `goi/pages/snapshots/index.ar.md`
- `goi/pages/snapshots/index.de.html`
- `goi/pages/snapshots/index.de.md`
- `goi/pages/snapshots/index.en.html`
- `goi/pages/snapshots/index.en.md`
- `goi/pages/snapshots/index.fr.html`
- `goi/pages/snapshots/index.fr.md`
- `goi/pages/snapshots/index.ru.html`
- `goi/pages/snapshots/index.ru.md`
- `goi/pages/snapshots/index.zh.html`
- `goi/pages/snapshots/index.zh.md`
- `goi/schemas/global-index.schema.json`
- `goi/schemas/observation.meta.schema.json`
- `governance-status/COMPLETED_GATES.md`
- `governance-status/GATE-5-STATUS.md`
- `governance-status/REPOSITORY_VISIBILITY_RULES.md`
- `how-to-cite/index.html`
- `i18n/terms.json`
- `i18n/translations.json`
- `js/components/README.md`
- `js/components/archive-banner.js`
- `lab/README.md`
- `lab/publication/claim-001/2026-02-06/derived/statistics.json`
- `lab/publication/claim-001/2026-02-06/manifest.json`
- `lab/publication/claim-001/2026-02-06/provenance.json`
- `lab/publication/claim-001/2026-02-06/sha256sum.txt`
- `lab/publication/claim-001/2026-02-06/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-06/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-06/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-06/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-07/derived/statistics.json`
- `lab/publication/claim-001/2026-02-07/manifest.json`
- `lab/publication/claim-001/2026-02-07/provenance.json`
- `lab/publication/claim-001/2026-02-07/sha256sum.txt`
- `lab/publication/claim-001/2026-02-07/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-07/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-07/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-07/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-08/derived/statistics.json`
- `lab/publication/claim-001/2026-02-08/manifest.json`
- `lab/publication/claim-001/2026-02-08/provenance.json`
- `lab/publication/claim-001/2026-02-08/sha256sum.txt`
- `lab/publication/claim-001/2026-02-08/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-08/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-08/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-08/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-11/derived/statistics.json`
- `lab/publication/claim-001/2026-02-11/derived/visual_evidence.json`
- `lab/publication/claim-001/2026-02-11/manifest.json`
- `lab/publication/claim-001/2026-02-11/provenance.json`
- `lab/publication/claim-001/2026-02-11/sha256sum.txt`
- `lab/publication/claim-001/2026-02-11/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-11/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-11/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-11/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-19/derived/statistics.json`
- `lab/publication/claim-001/2026-02-19/derived/visual_evidence.json`
- `lab/publication/claim-001/2026-02-19/manifest.json`
- `lab/publication/claim-001/2026-02-19/provenance.json`
- `lab/publication/claim-001/2026-02-19/sha256sum.txt`
- `lab/publication/claim-001/2026-02-19/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-19/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-19/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-19/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-20/derived/statistics.json`
- `lab/publication/claim-001/2026-02-20/derived/visual_evidence.json`
- `lab/publication/claim-001/2026-02-20/manifest.json`
- `lab/publication/claim-001/2026-02-20/provenance.json`
- `lab/publication/claim-001/2026-02-20/sha256sum.txt`
- `lab/publication/claim-001/2026-02-20/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-20/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-20/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-20/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-21/derived/statistics.json`
- `lab/publication/claim-001/2026-02-21/derived/visual_evidence.json`
- `lab/publication/claim-001/2026-02-21/manifest.json`
- `lab/publication/claim-001/2026-02-21/provenance.json`
- `lab/publication/claim-001/2026-02-21/sha256sum.txt`
- `lab/publication/claim-001/2026-02-21/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-21/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-21/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-21/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-22/derived/statistics.json`
- `lab/publication/claim-001/2026-02-22/derived/visual_evidence.json`
- `lab/publication/claim-001/2026-02-22/manifest.json`
- `lab/publication/claim-001/2026-02-22/provenance.json`
- `lab/publication/claim-001/2026-02-22/sha256sum.txt`
- `lab/publication/claim-001/2026-02-22/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-22/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-22/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-22/tables/sbdb_attempts.json`
- `lab/publication/claim-001/2026-02-23/derived/statistics.json`
- `lab/publication/claim-001/2026-02-23/derived/visual_evidence.json`
- `lab/publication/claim-001/2026-02-23/manifest.json`
- `lab/publication/claim-001/2026-02-23/provenance.json`
- `lab/publication/claim-001/2026-02-23/sha256sum.txt`
- `lab/publication/claim-001/2026-02-23/tables/platforms_registry.csv`
- `lab/publication/claim-001/2026-02-23/tables/platforms_registry.json`
- `lab/publication/claim-001/2026-02-23/tables/sbdb_attempts.csv`
- `lab/publication/claim-001/2026-02-23/tables/sbdb_attempts.json`
- `lab/publication/claim-001/DOI.txt`
- `lab/publication/claim-001/verification/README.md`
- `lab/publication/claim-001/verification/horizons_validation_log.json`
- `lab/publication/claim-001/verification/iau_designation_assessment.md`
- `lab/publication/claim-001/verification/manifest.json`
- `lab/publication/claim-001/verification/mpc_crosscheck_log.json`
- `lab/publication/claim-001/verification/sbdb_api_specification.md`
- `lab/publication/claim-001/verification/sbdb_query_tests.json`
- `lab/publication/claim-001/verification/tess_mission_status_and_data.md`
- `lab/publication/claim-001/verification/verification_sequence.md`
- `lab/publication_engine.py`
- `lab/update_publications_yml.py`
- `methodology/index.html`
- `package-lock.json`
- `package.json`
- `phase-e/publications.yml`
- `phase-f-governance/index.html`
- `public/.gitkeep`
- `public/latest.json`
- `public/observations/.gitkeep`
- `public/observations/2026-03-15.json`
- `public/observations/2026-03-15/epistemic_state.json`
- `public/observations/2026-03-15/normalized_observation.json`
- `public/observations/2026-03-16.json`
- `public/observations/2026-03-16/epistemic_state.json`
- `public/observations/2026-03-16/normalized_observation.json`
- `public/observations/2026-03-17.json`
- `public/observations/2026-03-17/epistemic_state.json`
- `public/observations/2026-03-17/normalized_observation.json`
- `public/observations/2026-03-18.json`
- `public/observations/2026-03-18/epistemic_state.json`
- `public/observations/2026-03-18/normalized_observation.json`
- `public/observations/2026-03-19.json`
- `public/observations/2026-03-19/epistemic_state.json`
- `public/observations/2026-03-19/normalized_observation.json`
- `public/observations/2026-03-20.json`
- `public/observations/2026-03-20/epistemic_state.json`
- `public/observations/2026-03-20/normalized_observation.json`
- `public/observations/2026-03-21.json`
- `public/observations/2026-03-21/epistemic_state.json`
- `public/observations/2026-03-21/normalized_observation.json`
- `public/summary.json`
- `robots.txt`
- `scientific-publication/CITATION_POLICY.md`
- `scientific-publication/CLAIM_BOUNDARIES.md`
- `scientific-publication/PUBLICATION_POLICY.md`
- `scientific-publication/index.html`
- `scripts/archive-publication.sh`
- `scripts/build_observations.py`
- `scripts/contrast-check.js`
- `scripts/sbdb_validation_runner.py`
- `scripts/validate_pipeline.py`
- `site.webmanifest`
- `sitemap.xml`
- `system-map.html`
- `system-map/index.ar.md`
- `system-map/index.en.md`
- `system-map/index.fr.md`
- `system-map/index.zh.md`
- `system-map/trizel-system-map.svg`
- `topology/index.html`
- `topology/topology.json`

---

## 7. Validation

- Total files in SITE_AUDIT_REPORT: 491
- DELETE: 31
- REWRITE: 127
- KEEP: 333
- No duplicates
- No missing files
- No UNKNOWN classification remains (1 UNKNOWN file resolved to DELETE)
- This document is not sufficient for execution
- A separate governance-reviewed decision PR is required

---

## 8. Nature of this Document

This document is:

- audit-derived classification
- pending governance review
- non-executive
- decision-only

No deletion is performed here.
