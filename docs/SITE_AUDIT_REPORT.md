# TRIZEL Site Audit Report (Epistemic Classification)

## 1. Purpose

This document provides a full epistemic audit of the TRIZEL Site Layer repository.

The objective is to:
- identify all existing content
- classify content according to TRIZEL governance rules
- prepare a decision-ready classification for purge or retention

This document is strictly non-executive and non-interpretive.

---

## 2. Audit Scope

Repository:

trizel-ai-site/trizel-site-artifacts

All files and directories must be included.

---

## 3. Classification Model

Each file must be classified into one of the following:

- ALLOWED  
  Content strictly compliant with TRIZEL governance:
  - methodology
  - DOI / citation
  - provenance
  - governed artifact references
  - structural system description

- OUTDATED  
  Content that is:
  - based on pre-V1 definitions
  - inconsistent with current README / ROADMAP
  - requiring rewrite for governance alignment

- NON-GOVERNED  
  Content that violates epistemic constraints:
  - interpretation
  - explanation of meaning
  - conclusions or claims
  - narrative or storytelling
  - AI-style descriptive language
  - speculative or non-verifiable content

- UNKNOWN  
  Content that cannot be clearly classified and must be removed or reviewed.

---

## 4. Inventory

List of all files in the repository:

- .gitignore
- 404.html
- BASELINE_SNAPSHOT.md
- BUILD.md
- CITATION.cff
- CNAME
- CRITICAL_FIX_SUMMARY.md
- FINAL_FREEZE_DECLARATION.md
- GOVERNANCE_404_VALIDATION.md
- GOVERNANCE_PHASE_E_LOCK.md
- PATCH2_COMPLETION_SUMMARY.md
- PATCH2_VALIDATION.md
- PHASE_E2_RESPONSIVE_SUMMARY.md
- PHASE_E3_MICRO_INTERACTIONS_SUMMARY.md
- PHASE_E4_MULTILINGUAL_CANONICALIZATION_DESIGN.md
- PHASE_E_DECLARATION.md
- PHASE_E_DEPLOYMENT_VERIFICATION.md
- PHASE_E_FIX_COMPLETION_SUMMARY.md
- PHASE_E_GENERALIZATION_SUMMARY.md
- PHASE_E_LANGUAGE_AVAILABILITY_SUMMARY.md
- PHASE_E_SUMMARY.md
- PHASE_E_UI_UX_IMPROVEMENT_PLAN.md
- PHASE_E_VISIBILITY_AUDIT_REPORT.md
- PHASE_E_VISIBILITY_SUMMARY.md
- PHASE_F1_MULTILINGUAL_SEMANTIC_LOCK.md
- PHASE_F1_POST_MERGE_VALIDATION.md
- PHASE_F4_COMPLETION.md
- PHASE_F_CLOSED.md
- PHASE_F_GOVERNANCE.md
- PHASE_H1C_COMPLETION_SUMMARY.md
- PHASE_H1C_L10N_PRO_VERIFICATION.md
- PHASE_H1C_PR1_COMPLETION.md
- PHASE_H1C_SECURITY_SUMMARY.md
- PHASE_H1C_VISUAL_VERIFICATION.md
- README.md
- SITE_INVENTORY_REPORT.md
- SYSTEM_MAP_SCIENTIFIC_AUDIT_2026-02.md
- VALIDATION_SUMMARY.txt
- WCAG_CONTRAST_GUIDE.md
- WCAG_IMPLEMENTATION_SUMMARY.md
- accessibility.html
- ar/goi/index.html
- ar/governance/index.html
- ar/index.html
- ar/lab/index.html
- ar/map/index.html
- ar/phase-e/claim-001.html
- ar/phase-e/index.html
- ar/phase-f-governance/index.html
- ar/projects/index.html
- ar/status/gate-5.html
- ar/status/index.html
- artifacts/3i-atlas/phase-f1/2026-01-24/HASH_VERIFICATION.md
- artifacts/3i-atlas/phase-f1/2026-01-24/README.md
- artifacts/3i-atlas/phase-f1/2026-01-24/provenance.json
- artifacts/index.html
- artifacts/phase-f3/2026-01-23/HASH_VERIFICATION.md
- artifacts/phase-f3/2026-01-23/HASH_VERIFICATION.txt
- artifacts/phase-f3/2026-01-23/README.md
- artifacts/phase-f3/2026-01-23/chart.svg
- artifacts/phase-f3/2026-01-23/index.html
- artifacts/phase-f3/2026-01-23/provenance.json
- artifacts/phase-f3/2026-01-23/statistics.csv
- artifacts/phase-f3/2026-01-23/statistics.json
- assets/app.js
- assets/archive/system-map/trizel-system-map-legacy-20260130.svg
- assets/archive/system-map/trizel-system-map-v1-legacy-20260130.svg
- assets/base.css
- assets/brand/auto-dz-act-logo.svg
- assets/brand/governance-architecture.svg
- assets/brand/hero-banner.svg
- assets/brand/icon-algorithm.svg
- assets/brand/icon-archive.svg
- assets/brand/icon-data.svg
- assets/brand/icon-documentation.svg
- assets/brand/icon-engine.svg
- assets/brand/icon-framework.svg
- assets/brand/icon-gateway.svg
- assets/brand/icon-governance.svg
- assets/brand/icon-laboratory.svg
- assets/brand/icon-layers.svg
- assets/brand/icon-monitor.svg
- assets/brand/icon-research.svg
- assets/brand/scientific-observatory.svg
- assets/branding/trizel-ai/trizel-ai-logo-dark.png
- assets/branding/trizel-ai/trizel-ai-logo-mono.svg
- assets/components.css
- assets/css/institutional-media.css
- assets/css/layer4.css
- assets/css/layout.css
- assets/css/main.css
- assets/css/phase-e.css
- assets/css/print.css
- assets/css/scientific-ui.css
- assets/css/statistics.css
- assets/css/style.css
- assets/css/system-map.css
- assets/css/tokens.css
- assets/css/trizel-ai-assistant.css
- assets/diagrams/trizel-layer-structure.svg
- assets/diagrams/trizel-pipeline-map-v1.svg
- assets/diagrams/trizel-system-map-v1.svg
- assets/goi/goi.css
- assets/icons/archive.svg
- assets/icons/arrow-left.svg
- assets/icons/chevron-right.svg
- assets/icons/governance.svg
- assets/icons/home.svg
- assets/icons/index.svg
- assets/icons/lab.svg
- assets/icons/map.svg
- assets/icons/projects.svg
- assets/icons/status.svg
- assets/js/daily-indicator.js
- assets/js/lang-switcher.js
- assets/js/trizel-ai-assistant.js
- assets/style.css
- atlas/ar/index.html
- atlas/de/index.html
- atlas/en/index.html
- atlas/fr/index.html
- atlas/index.html
- atlas/map.json
- atlas/ru/index.html
- atlas/sources.json
- atlas/zh/index.html
- data/ingestion/2026-03-15.json
- data/ingestion/2026-03-16.json
- data/ingestion/2026-03-17.json
- data/ingestion/2026-03-18.json
- data/ingestion/2026-03-19.json
- data/ingestion/2026-03-20.json
- data/ingestion/2026-03-21.json
- data/publish/3i-atlas/daily-status.json
- data/publish/3i-atlas/manifest.json
- data/publish/3i-atlas/ro-crate-metadata.json
- data/publish/3i-atlas/source-snapshot.json
- de/goi/index.html
- de/governance/index.html
- de/index.html
- de/lab/index.html
- de/map/index.html
- de/phase-e/claim-001.html
- de/phase-e/index.html
- de/phase-f-governance/index.html
- de/projects/index.html
- de/status/gate-5.html
- de/status/index.html
- docs/ACCOUNT_REGISTRY.md
- docs/AI_ROLE.md
- docs/AI_TERMS_AUDIT_REPORT.md
- docs/ATLAS_SCHEMA.md
- docs/CHANGELOG.md
- docs/CONTENT_CLASSIFICATION.md
- docs/DESIGN_AUDIT.md
- docs/DESIGN_RECOMMENDATIONS.md
- docs/DOMAIN_BINDING_TRIZEL_AI.md
- docs/EXCLUSIONS.md
- docs/GOVERNANCE_CLARIFICATION.md
- docs/GO_NO_GO_LAYER2.md
- docs/I18N_ARCHITECTURE.md
- docs/I18N_ARCHITECTURE_PLAN.md
- docs/I18N_IMPLEMENTATION_CHECKLIST.md
- docs/I18N_PLANNING_SUMMARY.md
- docs/LAUNCH_READINESS.md
- docs/LAYER2_CHANGELOG.md
- docs/LAYER2_COMPLIANCE_AUDIT.md
- docs/LAYER2_STABILIZATION_NOTICE.md
- docs/LAYER_2_5_NOTICE.md
- docs/LAYER_3_PHASE_DECLARATION.md
- docs/LAYER_4_1_EXECUTION_NOTE.md
- docs/LAYER_4_PHASE_DECLARATION.md
- docs/LAYER_BOUNDARIES.md
- docs/LINKING_RULES.md
- docs/NARRATIVE_BOUNDARIES.md
- docs/PRESENTATION_SCOPE.md
- docs/SCIENTIFIC_CONCEPTS.md
- docs/SCIENTIFIC_PRESENTATION_CONTRACT.md
- docs/SITE_AUDIT_REPORT.md
- docs/SITE_MAP.md
- docs/SYSTEM_INTERFACE_PRINCIPLES.md
- docs/SYSTEM_TOPOLOGY.md
- docs/TRIZEL_Institutional_White_Paper_v1.md
- docs/TRIZEL_SYSTEM_STRUCTURE.md
- docs/UI_DESIGN_SYSTEM.md
- docs/WHITEPAPER_DOI_REFERENCE.md
- en/goi/index.html
- en/governance/index.html
- en/index.html
- en/lab/index.html
- en/layer-map/index.html
- en/map/index.html
- en/overview/index.html
- en/phase-e/claim-001.html
- en/phase-e/index.html
- en/phase-e/observations/index.html
- en/phase-f-governance/index.html
- en/projects/index.html
- en/status/gate-5.html
- en/status/index.html
- evidence/index.html
- fr/goi/index.html
- fr/governance/index.html
- fr/index.html
- fr/lab/index.html
- fr/map/index.html
- fr/phase-e/claim-001.html
- fr/phase-e/index.html
- fr/phase-f-governance/index.html
- fr/projects/index.html
- fr/status/gate-5.html
- fr/status/index.html
- .github/CODEOWNERS
- .github/ISSUE_TEMPLATE/layer2-change-request.md
- .github/workflows/baseline-snapshot-guard.yml
- .github/workflows/jekyll-docker.yml
- .github/workflows/pages-surface-freeze.yml
- .github/workflows/phase-e-auto-publish.yml
- .github/workflows/phase-e-publication-validation.yml
- .github/workflows/pipeline-validation.yml
- .github/workflows/sbdb-verification.yml
- .github/workflows/wcag-contrast-check.yml
- goi/data/global-index.json
- goi/data/institutional-stats.json
- goi/data/sources/.gitkeep
- goi/data/sources/README.md
- goi/doi/DOI_SNIPPET.ar.html
- goi/doi/DOI_SNIPPET.de.html
- goi/doi/DOI_SNIPPET.en.html
- goi/doi/DOI_SNIPPET.fr.html
- goi/doi/DOI_SNIPPET.ru.html
- goi/doi/DOI_SNIPPET.zh.html
- goi/doi/README.md
- goi/index.ar.html
- goi/index.ar.md
- goi/index.de.html
- goi/index.de.md
- goi/index.en.html
- goi/index.en.md
- goi/index.fr.html
- goi/index.fr.md
- goi/index.html
- goi/index.ru.html
- goi/index.ru.md
- goi/index.zh.html
- goi/index.zh.md
- goi/pages/institutional-statistics/index.en.md
- goi/pages/observations/index.ar.html
- goi/pages/observations/index.ar.md
- goi/pages/observations/index.de.html
- goi/pages/observations/index.de.md
- goi/pages/observations/index.en.html
- goi/pages/observations/index.en.md
- goi/pages/observations/index.fr.html
- goi/pages/observations/index.fr.md
- goi/pages/observations/index.ru.html
- goi/pages/observations/index.ru.md
- goi/pages/observations/index.zh.html
- goi/pages/observations/index.zh.md
- goi/pages/production/index.ar.html
- goi/pages/production/index.ar.md
- goi/pages/production/index.de.html
- goi/pages/production/index.de.md
- goi/pages/production/index.en.html
- goi/pages/production/index.en.md
- goi/pages/production/index.fr.html
- goi/pages/production/index.fr.md
- goi/pages/production/index.ru.html
- goi/pages/production/index.ru.md
- goi/pages/production/index.zh.html
- goi/pages/production/index.zh.md
- goi/pages/repositories/index.ar.html
- goi/pages/repositories/index.ar.md
- goi/pages/repositories/index.de.html
- goi/pages/repositories/index.de.md
- goi/pages/repositories/index.en.html
- goi/pages/repositories/index.en.md
- goi/pages/repositories/index.fr.html
- goi/pages/repositories/index.fr.md
- goi/pages/repositories/index.ru.html
- goi/pages/repositories/index.ru.md
- goi/pages/repositories/index.zh.html
- goi/pages/repositories/index.zh.md
- goi/pages/snapshots/index.ar.html
- goi/pages/snapshots/index.ar.md
- goi/pages/snapshots/index.de.html
- goi/pages/snapshots/index.de.md
- goi/pages/snapshots/index.en.html
- goi/pages/snapshots/index.en.md
- goi/pages/snapshots/index.fr.html
- goi/pages/snapshots/index.fr.md
- goi/pages/snapshots/index.ru.html
- goi/pages/snapshots/index.ru.md
- goi/pages/snapshots/index.zh.html
- goi/pages/snapshots/index.zh.md
- goi/schemas/global-index.schema.json
- goi/schemas/observation.meta.schema.json
- governance-status/COMPLETED_GATES.md
- governance-status/GATE-5-STATUS.md
- governance-status/REPOSITORY_VISIBILITY_RULES.md
- how-to-cite/index.html
- i18n/narrative.ar.json
- i18n/narrative.de.json
- i18n/narrative.en.json
- i18n/narrative.fr.json
- i18n/narrative.ru.json
- i18n/narrative.zh.json
- i18n/terms.json
- i18n/translations.json
- index.html
- index_layer2_selector.html
- index_layer4_1_home.html
- index_phase_f.html
- index_phase_f_backup.html
- js/app.js
- js/components/README.md
- js/components/archive-banner.js
- lab/README.md
- lab/generate_phase_e_pages.py
- lab/publication/claim-001/2026-02-06/derived/statistics.json
- lab/publication/claim-001/2026-02-06/manifest.json
- lab/publication/claim-001/2026-02-06/provenance.json
- lab/publication/claim-001/2026-02-06/sha256sum.txt
- lab/publication/claim-001/2026-02-06/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-06/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-06/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-06/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-07/derived/statistics.json
- lab/publication/claim-001/2026-02-07/manifest.json
- lab/publication/claim-001/2026-02-07/provenance.json
- lab/publication/claim-001/2026-02-07/sha256sum.txt
- lab/publication/claim-001/2026-02-07/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-07/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-07/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-07/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-08/derived/statistics.json
- lab/publication/claim-001/2026-02-08/manifest.json
- lab/publication/claim-001/2026-02-08/provenance.json
- lab/publication/claim-001/2026-02-08/sha256sum.txt
- lab/publication/claim-001/2026-02-08/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-08/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-08/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-08/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-11/derived/statistics.json
- lab/publication/claim-001/2026-02-11/derived/visual_evidence.json
- lab/publication/claim-001/2026-02-11/manifest.json
- lab/publication/claim-001/2026-02-11/provenance.json
- lab/publication/claim-001/2026-02-11/sha256sum.txt
- lab/publication/claim-001/2026-02-11/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-11/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-11/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-11/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-19/derived/statistics.json
- lab/publication/claim-001/2026-02-19/derived/visual_evidence.json
- lab/publication/claim-001/2026-02-19/manifest.json
- lab/publication/claim-001/2026-02-19/provenance.json
- lab/publication/claim-001/2026-02-19/sha256sum.txt
- lab/publication/claim-001/2026-02-19/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-19/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-19/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-19/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-20/derived/statistics.json
- lab/publication/claim-001/2026-02-20/derived/visual_evidence.json
- lab/publication/claim-001/2026-02-20/manifest.json
- lab/publication/claim-001/2026-02-20/provenance.json
- lab/publication/claim-001/2026-02-20/sha256sum.txt
- lab/publication/claim-001/2026-02-20/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-20/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-20/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-20/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-21/derived/statistics.json
- lab/publication/claim-001/2026-02-21/derived/visual_evidence.json
- lab/publication/claim-001/2026-02-21/manifest.json
- lab/publication/claim-001/2026-02-21/provenance.json
- lab/publication/claim-001/2026-02-21/sha256sum.txt
- lab/publication/claim-001/2026-02-21/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-21/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-21/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-21/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-22/derived/statistics.json
- lab/publication/claim-001/2026-02-22/derived/visual_evidence.json
- lab/publication/claim-001/2026-02-22/manifest.json
- lab/publication/claim-001/2026-02-22/provenance.json
- lab/publication/claim-001/2026-02-22/sha256sum.txt
- lab/publication/claim-001/2026-02-22/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-22/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-22/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-22/tables/sbdb_attempts.json
- lab/publication/claim-001/2026-02-23/derived/statistics.json
- lab/publication/claim-001/2026-02-23/derived/visual_evidence.json
- lab/publication/claim-001/2026-02-23/manifest.json
- lab/publication/claim-001/2026-02-23/provenance.json
- lab/publication/claim-001/2026-02-23/sha256sum.txt
- lab/publication/claim-001/2026-02-23/tables/platforms_registry.csv
- lab/publication/claim-001/2026-02-23/tables/platforms_registry.json
- lab/publication/claim-001/2026-02-23/tables/sbdb_attempts.csv
- lab/publication/claim-001/2026-02-23/tables/sbdb_attempts.json
- lab/publication/claim-001/DOI.txt
- lab/publication/claim-001/verification/README.md
- lab/publication/claim-001/verification/horizons_validation_log.json
- lab/publication/claim-001/verification/iau_designation_assessment.md
- lab/publication/claim-001/verification/manifest.json
- lab/publication/claim-001/verification/mpc_crosscheck_log.json
- lab/publication/claim-001/verification/sbdb_api_specification.md
- lab/publication/claim-001/verification/sbdb_query_tests.json
- lab/publication/claim-001/verification/tess_mission_status_and_data.md
- lab/publication/claim-001/verification/verification_sequence.md
- lab/publication_engine.py
- lab/update_publications_yml.py
- methodology/index.html
- observations.html
- package-lock.json
- package.json
- phase-e/README.md
- phase-e/TEMPLATE_PUBLICATION_ENTRY.txt
- phase-e/claim-001.html
- phase-e/index.html
- phase-e/publications.yml
- phase-f-governance/index.html
- public/.gitkeep
- public/latest.json
- public/observations/.gitkeep
- public/observations/2026-03-15.json
- public/observations/2026-03-15/epistemic_state.json
- public/observations/2026-03-15/normalized_observation.json
- public/observations/2026-03-16.json
- public/observations/2026-03-16/epistemic_state.json
- public/observations/2026-03-16/normalized_observation.json
- public/observations/2026-03-17.json
- public/observations/2026-03-17/epistemic_state.json
- public/observations/2026-03-17/normalized_observation.json
- public/observations/2026-03-18.json
- public/observations/2026-03-18/epistemic_state.json
- public/observations/2026-03-18/normalized_observation.json
- public/observations/2026-03-19.json
- public/observations/2026-03-19/epistemic_state.json
- public/observations/2026-03-19/normalized_observation.json
- public/observations/2026-03-20.json
- public/observations/2026-03-20/epistemic_state.json
- public/observations/2026-03-20/normalized_observation.json
- public/observations/2026-03-21.json
- public/observations/2026-03-21/epistemic_state.json
- public/observations/2026-03-21/normalized_observation.json
- public/summary.json
- robots.txt
- ru/goi/index.html
- ru/governance/index.html
- ru/index.html
- ru/lab/index.html
- ru/map/index.html
- ru/phase-e/claim-001.html
- ru/phase-e/index.html
- ru/phase-f-governance/index.html
- ru/projects/index.html
- ru/status/gate-5.html
- ru/status/index.html
- scientific-narrative/README.md
- scientific-narrative/SCOPE.md
- scientific-narrative/index.html
- scientific-publication/CITATION_POLICY.md
- scientific-publication/CLAIM_BOUNDARIES.md
- scientific-publication/PUBLICATION_POLICY.md
- scientific-publication/index.html
- scripts/archive-publication.sh
- scripts/build_observations.py
- scripts/contrast-check.js
- scripts/sbdb_validation_runner.py
- scripts/validate_pipeline.py
- site.webmanifest
- sitemap.xml
- statistics.html
- status.html
- system-map.html
- system-map/index.ar.md
- system-map/index.en.md
- system-map/index.fr.md
- system-map/index.zh.md
- system-map/trizel-system-map.svg
- topology/index.html
- topology/topology.json
- zh/goi/index.html
- zh/governance/index.html
- zh/index.html
- zh/lab/index.html
- zh/map/index.html
- zh/phase-e/claim-001.html
- zh/phase-e/index.html
- zh/phase-f-governance/index.html
- zh/projects/index.html
- zh/status/gate-5.html
- zh/status/index.html

---

## 5. Classification Table

FILE | TYPE | STATUS | ACTION
--- | --- | --- | ---
.gitignore | other | ALLOWED | KEEP
404.html | landing | ALLOWED | KEEP
BASELINE_SNAPSHOT.md | documentation | ALLOWED | KEEP
BUILD.md | documentation | ALLOWED | KEEP
CITATION.cff | documentation | ALLOWED | KEEP
CNAME | other | ALLOWED | KEEP
CRITICAL_FIX_SUMMARY.md | documentation | NON-GOVERNED | DELETE
FINAL_FREEZE_DECLARATION.md | documentation | NON-GOVERNED | DELETE
GOVERNANCE_404_VALIDATION.md | documentation | OUTDATED | REWRITE
GOVERNANCE_PHASE_E_LOCK.md | documentation | ALLOWED | KEEP
PATCH2_COMPLETION_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PATCH2_VALIDATION.md | documentation | NON-GOVERNED | DELETE
PHASE_E2_RESPONSIVE_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_E3_MICRO_INTERACTIONS_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_E4_MULTILINGUAL_CANONICALIZATION_DESIGN.md | documentation | OUTDATED | REWRITE
PHASE_E_DECLARATION.md | documentation | ALLOWED | KEEP
PHASE_E_DEPLOYMENT_VERIFICATION.md | documentation | OUTDATED | REWRITE
PHASE_E_FIX_COMPLETION_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_E_GENERALIZATION_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_E_LANGUAGE_AVAILABILITY_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_E_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_E_UI_UX_IMPROVEMENT_PLAN.md | documentation | NON-GOVERNED | DELETE
PHASE_E_VISIBILITY_AUDIT_REPORT.md | documentation | OUTDATED | REWRITE
PHASE_E_VISIBILITY_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_F1_MULTILINGUAL_SEMANTIC_LOCK.md | documentation | ALLOWED | KEEP
PHASE_F1_POST_MERGE_VALIDATION.md | documentation | OUTDATED | REWRITE
PHASE_F4_COMPLETION.md | documentation | NON-GOVERNED | DELETE
PHASE_F_CLOSED.md | documentation | ALLOWED | KEEP
PHASE_F_GOVERNANCE.md | documentation | ALLOWED | KEEP
PHASE_H1C_COMPLETION_SUMMARY.md | documentation | NON-GOVERNED | DELETE
PHASE_H1C_L10N_PRO_VERIFICATION.md | documentation | OUTDATED | REWRITE
PHASE_H1C_PR1_COMPLETION.md | documentation | NON-GOVERNED | DELETE
PHASE_H1C_SECURITY_SUMMARY.md | documentation | OUTDATED | REWRITE
PHASE_H1C_VISUAL_VERIFICATION.md | documentation | NON-GOVERNED | DELETE
README.md | documentation | ALLOWED | KEEP
SITE_INVENTORY_REPORT.md | documentation | ALLOWED | KEEP
SYSTEM_MAP_SCIENTIFIC_AUDIT_2026-02.md | documentation | ALLOWED | KEEP
VALIDATION_SUMMARY.txt | documentation | NON-GOVERNED | DELETE
WCAG_CONTRAST_GUIDE.md | documentation | ALLOWED | KEEP
WCAG_IMPLEMENTATION_SUMMARY.md | documentation | OUTDATED | REWRITE
accessibility.html | landing | ALLOWED | KEEP
ar/goi/index.html | landing | OUTDATED | REWRITE
ar/governance/index.html | landing | OUTDATED | REWRITE
ar/index.html | landing | OUTDATED | REWRITE
ar/lab/index.html | landing | OUTDATED | REWRITE
ar/map/index.html | landing | OUTDATED | REWRITE
ar/phase-e/claim-001.html | artifact | OUTDATED | REWRITE
ar/phase-e/index.html | landing | OUTDATED | REWRITE
ar/phase-f-governance/index.html | landing | OUTDATED | REWRITE
ar/projects/index.html | landing | OUTDATED | REWRITE
ar/status/gate-5.html | landing | OUTDATED | REWRITE
ar/status/index.html | landing | OUTDATED | REWRITE
artifacts/3i-atlas/phase-f1/2026-01-24/HASH_VERIFICATION.md | artifact | ALLOWED | KEEP
artifacts/3i-atlas/phase-f1/2026-01-24/README.md | artifact | ALLOWED | KEEP
artifacts/3i-atlas/phase-f1/2026-01-24/provenance.json | artifact | ALLOWED | KEEP
artifacts/index.html | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/HASH_VERIFICATION.md | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/HASH_VERIFICATION.txt | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/README.md | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/chart.svg | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/index.html | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/provenance.json | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/statistics.csv | artifact | ALLOWED | KEEP
artifacts/phase-f3/2026-01-23/statistics.json | artifact | ALLOWED | KEEP
assets/app.js | asset | OUTDATED | REWRITE
assets/archive/system-map/trizel-system-map-legacy-20260130.svg | asset | OUTDATED | REWRITE
assets/archive/system-map/trizel-system-map-v1-legacy-20260130.svg | asset | OUTDATED | REWRITE
assets/base.css | asset | ALLOWED | KEEP
assets/brand/auto-dz-act-logo.svg | asset | ALLOWED | KEEP
assets/brand/governance-architecture.svg | asset | ALLOWED | KEEP
assets/brand/hero-banner.svg | asset | OUTDATED | REWRITE
assets/brand/icon-algorithm.svg | asset | ALLOWED | KEEP
assets/brand/icon-archive.svg | asset | ALLOWED | KEEP
assets/brand/icon-data.svg | asset | ALLOWED | KEEP
assets/brand/icon-documentation.svg | asset | ALLOWED | KEEP
assets/brand/icon-engine.svg | asset | ALLOWED | KEEP
assets/brand/icon-framework.svg | asset | ALLOWED | KEEP
assets/brand/icon-gateway.svg | asset | ALLOWED | KEEP
assets/brand/icon-governance.svg | asset | ALLOWED | KEEP
assets/brand/icon-laboratory.svg | asset | ALLOWED | KEEP
assets/brand/icon-layers.svg | asset | ALLOWED | KEEP
assets/brand/icon-monitor.svg | asset | ALLOWED | KEEP
assets/brand/icon-research.svg | asset | ALLOWED | KEEP
assets/brand/scientific-observatory.svg | asset | ALLOWED | KEEP
assets/branding/trizel-ai/trizel-ai-logo-dark.png | asset | ALLOWED | KEEP
assets/branding/trizel-ai/trizel-ai-logo-mono.svg | asset | ALLOWED | KEEP
assets/components.css | asset | ALLOWED | KEEP
assets/css/institutional-media.css | asset | ALLOWED | KEEP
assets/css/layer4.css | asset | OUTDATED | REWRITE
assets/css/layout.css | asset | ALLOWED | KEEP
assets/css/main.css | asset | ALLOWED | KEEP
assets/css/phase-e.css | asset | OUTDATED | REWRITE
assets/css/print.css | asset | ALLOWED | KEEP
assets/css/scientific-ui.css | asset | ALLOWED | KEEP
assets/css/statistics.css | asset | OUTDATED | REWRITE
assets/css/style.css | asset | ALLOWED | KEEP
assets/css/system-map.css | asset | ALLOWED | KEEP
assets/css/tokens.css | asset | ALLOWED | KEEP
assets/css/trizel-ai-assistant.css | asset | NON-GOVERNED | DELETE
assets/diagrams/trizel-layer-structure.svg | asset | ALLOWED | KEEP
assets/diagrams/trizel-pipeline-map-v1.svg | asset | ALLOWED | KEEP
assets/diagrams/trizel-system-map-v1.svg | asset | ALLOWED | KEEP
assets/goi/goi.css | asset | ALLOWED | KEEP
assets/icons/archive.svg | asset | ALLOWED | KEEP
assets/icons/arrow-left.svg | asset | ALLOWED | KEEP
assets/icons/chevron-right.svg | asset | ALLOWED | KEEP
assets/icons/governance.svg | asset | ALLOWED | KEEP
assets/icons/home.svg | asset | ALLOWED | KEEP
assets/icons/index.svg | asset | ALLOWED | KEEP
assets/icons/lab.svg | asset | ALLOWED | KEEP
assets/icons/map.svg | asset | ALLOWED | KEEP
assets/icons/projects.svg | asset | ALLOWED | KEEP
assets/icons/status.svg | asset | ALLOWED | KEEP
assets/js/daily-indicator.js | asset | OUTDATED | REWRITE
assets/js/lang-switcher.js | asset | ALLOWED | KEEP
assets/js/trizel-ai-assistant.js | asset | NON-GOVERNED | DELETE
assets/style.css | asset | ALLOWED | KEEP
atlas/ar/index.html | landing | OUTDATED | REWRITE
atlas/de/index.html | landing | OUTDATED | REWRITE
atlas/en/index.html | landing | OUTDATED | REWRITE
atlas/fr/index.html | landing | OUTDATED | REWRITE
atlas/index.html | landing | OUTDATED | REWRITE
atlas/map.json | artifact | ALLOWED | KEEP
atlas/ru/index.html | landing | OUTDATED | REWRITE
atlas/sources.json | artifact | ALLOWED | KEEP
atlas/zh/index.html | landing | OUTDATED | REWRITE
data/ingestion/2026-03-15.json | artifact | ALLOWED | KEEP
data/ingestion/2026-03-16.json | artifact | ALLOWED | KEEP
data/ingestion/2026-03-17.json | artifact | ALLOWED | KEEP
data/ingestion/2026-03-18.json | artifact | ALLOWED | KEEP
data/ingestion/2026-03-19.json | artifact | ALLOWED | KEEP
data/ingestion/2026-03-20.json | artifact | ALLOWED | KEEP
data/ingestion/2026-03-21.json | artifact | ALLOWED | KEEP
data/publish/3i-atlas/daily-status.json | artifact | ALLOWED | KEEP
data/publish/3i-atlas/manifest.json | artifact | ALLOWED | KEEP
data/publish/3i-atlas/ro-crate-metadata.json | artifact | ALLOWED | KEEP
data/publish/3i-atlas/source-snapshot.json | artifact | ALLOWED | KEEP
de/goi/index.html | landing | OUTDATED | REWRITE
de/governance/index.html | landing | OUTDATED | REWRITE
de/index.html | landing | OUTDATED | REWRITE
de/lab/index.html | landing | OUTDATED | REWRITE
de/map/index.html | landing | OUTDATED | REWRITE
de/phase-e/claim-001.html | artifact | OUTDATED | REWRITE
de/phase-e/index.html | landing | OUTDATED | REWRITE
de/phase-f-governance/index.html | landing | OUTDATED | REWRITE
de/projects/index.html | landing | OUTDATED | REWRITE
de/status/gate-5.html | landing | OUTDATED | REWRITE
de/status/index.html | landing | OUTDATED | REWRITE
docs/ACCOUNT_REGISTRY.md | documentation | ALLOWED | KEEP
docs/AI_ROLE.md | documentation | ALLOWED | KEEP
docs/AI_TERMS_AUDIT_REPORT.md | documentation | ALLOWED | KEEP
docs/ATLAS_SCHEMA.md | documentation | ALLOWED | KEEP
docs/CHANGELOG.md | documentation | ALLOWED | KEEP
docs/CONTENT_CLASSIFICATION.md | documentation | ALLOWED | KEEP
docs/DESIGN_AUDIT.md | documentation | OUTDATED | REWRITE
docs/DESIGN_RECOMMENDATIONS.md | documentation | NON-GOVERNED | DELETE
docs/DOMAIN_BINDING_TRIZEL_AI.md | documentation | ALLOWED | KEEP
docs/EXCLUSIONS.md | documentation | ALLOWED | KEEP
docs/GOVERNANCE_CLARIFICATION.md | documentation | ALLOWED | KEEP
docs/GO_NO_GO_LAYER2.md | documentation | OUTDATED | REWRITE
docs/I18N_ARCHITECTURE.md | documentation | ALLOWED | KEEP
docs/I18N_ARCHITECTURE_PLAN.md | documentation | OUTDATED | REWRITE
docs/I18N_IMPLEMENTATION_CHECKLIST.md | documentation | OUTDATED | REWRITE
docs/I18N_PLANNING_SUMMARY.md | documentation | NON-GOVERNED | DELETE
docs/LAUNCH_READINESS.md | documentation | OUTDATED | REWRITE
docs/LAYER2_CHANGELOG.md | documentation | ALLOWED | KEEP
docs/LAYER2_COMPLIANCE_AUDIT.md | documentation | ALLOWED | KEEP
docs/LAYER2_STABILIZATION_NOTICE.md | documentation | ALLOWED | KEEP
docs/LAYER_2_5_NOTICE.md | documentation | ALLOWED | KEEP
docs/LAYER_3_PHASE_DECLARATION.md | documentation | ALLOWED | KEEP
docs/LAYER_4_1_EXECUTION_NOTE.md | documentation | ALLOWED | KEEP
docs/LAYER_4_PHASE_DECLARATION.md | documentation | ALLOWED | KEEP
docs/LAYER_BOUNDARIES.md | documentation | ALLOWED | KEEP
docs/LINKING_RULES.md | documentation | ALLOWED | KEEP
docs/NARRATIVE_BOUNDARIES.md | documentation | ALLOWED | KEEP
docs/PRESENTATION_SCOPE.md | documentation | ALLOWED | KEEP
docs/SCIENTIFIC_CONCEPTS.md | documentation | ALLOWED | KEEP
docs/SCIENTIFIC_PRESENTATION_CONTRACT.md | documentation | ALLOWED | KEEP
docs/SITE_AUDIT_REPORT.md | documentation | ALLOWED | KEEP
docs/SITE_MAP.md | documentation | ALLOWED | KEEP
docs/SYSTEM_INTERFACE_PRINCIPLES.md | documentation | ALLOWED | KEEP
docs/SYSTEM_TOPOLOGY.md | documentation | ALLOWED | KEEP
docs/TRIZEL_Institutional_White_Paper_v1.md | documentation | ALLOWED | KEEP
docs/TRIZEL_SYSTEM_STRUCTURE.md | documentation | ALLOWED | KEEP
docs/UI_DESIGN_SYSTEM.md | documentation | OUTDATED | REWRITE
docs/WHITEPAPER_DOI_REFERENCE.md | documentation | ALLOWED | KEEP
en/goi/index.html | landing | OUTDATED | REWRITE
en/governance/index.html | landing | OUTDATED | REWRITE
en/index.html | landing | OUTDATED | REWRITE
en/lab/index.html | landing | OUTDATED | REWRITE
en/layer-map/index.html | landing | OUTDATED | REWRITE
en/map/index.html | landing | OUTDATED | REWRITE
en/overview/index.html | landing | OUTDATED | REWRITE
en/phase-e/claim-001.html | artifact | OUTDATED | REWRITE
en/phase-e/index.html | landing | OUTDATED | REWRITE
en/phase-e/observations/index.html | landing | OUTDATED | REWRITE
en/phase-f-governance/index.html | landing | OUTDATED | REWRITE
en/projects/index.html | landing | OUTDATED | REWRITE
en/status/gate-5.html | landing | OUTDATED | REWRITE
en/status/index.html | landing | OUTDATED | REWRITE
evidence/index.html | landing | OUTDATED | REWRITE
fr/goi/index.html | landing | OUTDATED | REWRITE
fr/governance/index.html | landing | OUTDATED | REWRITE
fr/index.html | landing | OUTDATED | REWRITE
fr/lab/index.html | landing | OUTDATED | REWRITE
fr/map/index.html | landing | OUTDATED | REWRITE
fr/phase-e/claim-001.html | artifact | OUTDATED | REWRITE
fr/phase-e/index.html | landing | OUTDATED | REWRITE
fr/phase-f-governance/index.html | landing | OUTDATED | REWRITE
fr/projects/index.html | landing | OUTDATED | REWRITE
fr/status/gate-5.html | landing | OUTDATED | REWRITE
fr/status/index.html | landing | OUTDATED | REWRITE
.github/CODEOWNERS | other | ALLOWED | KEEP
.github/ISSUE_TEMPLATE/layer2-change-request.md | other | ALLOWED | KEEP
.github/workflows/baseline-snapshot-guard.yml | other | ALLOWED | KEEP
.github/workflows/jekyll-docker.yml | other | ALLOWED | KEEP
.github/workflows/pages-surface-freeze.yml | other | ALLOWED | KEEP
.github/workflows/phase-e-auto-publish.yml | other | OUTDATED | REWRITE
.github/workflows/phase-e-publication-validation.yml | other | OUTDATED | REWRITE
.github/workflows/pipeline-validation.yml | other | ALLOWED | KEEP
.github/workflows/sbdb-verification.yml | other | ALLOWED | KEEP
.github/workflows/wcag-contrast-check.yml | other | ALLOWED | KEEP
goi/data/global-index.json | artifact | ALLOWED | KEEP
goi/data/institutional-stats.json | artifact | ALLOWED | KEEP
goi/data/sources/.gitkeep | other | ALLOWED | KEEP
goi/data/sources/README.md | documentation | ALLOWED | KEEP
goi/doi/DOI_SNIPPET.ar.html | artifact | ALLOWED | KEEP
goi/doi/DOI_SNIPPET.de.html | artifact | ALLOWED | KEEP
goi/doi/DOI_SNIPPET.en.html | artifact | ALLOWED | KEEP
goi/doi/DOI_SNIPPET.fr.html | artifact | ALLOWED | KEEP
goi/doi/DOI_SNIPPET.ru.html | artifact | ALLOWED | KEEP
goi/doi/DOI_SNIPPET.zh.html | artifact | ALLOWED | KEEP
goi/doi/README.md | documentation | ALLOWED | KEEP
goi/index.ar.html | landing | OUTDATED | REWRITE
goi/index.ar.md | documentation | OUTDATED | REWRITE
goi/index.de.html | landing | OUTDATED | REWRITE
goi/index.de.md | documentation | OUTDATED | REWRITE
goi/index.en.html | landing | OUTDATED | REWRITE
goi/index.en.md | documentation | OUTDATED | REWRITE
goi/index.fr.html | landing | OUTDATED | REWRITE
goi/index.fr.md | documentation | OUTDATED | REWRITE
goi/index.html | landing | OUTDATED | REWRITE
goi/index.ru.html | landing | OUTDATED | REWRITE
goi/index.ru.md | documentation | OUTDATED | REWRITE
goi/index.zh.html | landing | OUTDATED | REWRITE
goi/index.zh.md | documentation | OUTDATED | REWRITE
goi/pages/institutional-statistics/index.en.md | documentation | ALLOWED | KEEP
goi/pages/observations/index.ar.html | artifact | ALLOWED | KEEP
goi/pages/observations/index.ar.md | artifact | ALLOWED | KEEP
goi/pages/observations/index.de.html | artifact | ALLOWED | KEEP
goi/pages/observations/index.de.md | artifact | ALLOWED | KEEP
goi/pages/observations/index.en.html | artifact | ALLOWED | KEEP
goi/pages/observations/index.en.md | artifact | ALLOWED | KEEP
goi/pages/observations/index.fr.html | artifact | ALLOWED | KEEP
goi/pages/observations/index.fr.md | artifact | ALLOWED | KEEP
goi/pages/observations/index.ru.html | artifact | ALLOWED | KEEP
goi/pages/observations/index.ru.md | artifact | ALLOWED | KEEP
goi/pages/observations/index.zh.html | artifact | ALLOWED | KEEP
goi/pages/observations/index.zh.md | artifact | ALLOWED | KEEP
goi/pages/production/index.ar.html | artifact | ALLOWED | KEEP
goi/pages/production/index.ar.md | artifact | ALLOWED | KEEP
goi/pages/production/index.de.html | artifact | ALLOWED | KEEP
goi/pages/production/index.de.md | artifact | ALLOWED | KEEP
goi/pages/production/index.en.html | artifact | ALLOWED | KEEP
goi/pages/production/index.en.md | artifact | ALLOWED | KEEP
goi/pages/production/index.fr.html | artifact | ALLOWED | KEEP
goi/pages/production/index.fr.md | artifact | ALLOWED | KEEP
goi/pages/production/index.ru.html | artifact | ALLOWED | KEEP
goi/pages/production/index.ru.md | artifact | ALLOWED | KEEP
goi/pages/production/index.zh.html | artifact | ALLOWED | KEEP
goi/pages/production/index.zh.md | artifact | ALLOWED | KEEP
goi/pages/repositories/index.ar.html | artifact | ALLOWED | KEEP
goi/pages/repositories/index.ar.md | artifact | ALLOWED | KEEP
goi/pages/repositories/index.de.html | artifact | ALLOWED | KEEP
goi/pages/repositories/index.de.md | artifact | ALLOWED | KEEP
goi/pages/repositories/index.en.html | artifact | ALLOWED | KEEP
goi/pages/repositories/index.en.md | artifact | ALLOWED | KEEP
goi/pages/repositories/index.fr.html | artifact | ALLOWED | KEEP
goi/pages/repositories/index.fr.md | artifact | ALLOWED | KEEP
goi/pages/repositories/index.ru.html | artifact | ALLOWED | KEEP
goi/pages/repositories/index.ru.md | artifact | ALLOWED | KEEP
goi/pages/repositories/index.zh.html | artifact | ALLOWED | KEEP
goi/pages/repositories/index.zh.md | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.ar.html | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.ar.md | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.de.html | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.de.md | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.en.html | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.en.md | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.fr.html | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.fr.md | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.ru.html | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.ru.md | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.zh.html | artifact | ALLOWED | KEEP
goi/pages/snapshots/index.zh.md | artifact | ALLOWED | KEEP
goi/schemas/global-index.schema.json | artifact | ALLOWED | KEEP
goi/schemas/observation.meta.schema.json | artifact | ALLOWED | KEEP
governance-status/COMPLETED_GATES.md | documentation | ALLOWED | KEEP
governance-status/GATE-5-STATUS.md | documentation | ALLOWED | KEEP
governance-status/REPOSITORY_VISIBILITY_RULES.md | documentation | ALLOWED | KEEP
how-to-cite/index.html | landing | ALLOWED | KEEP
i18n/narrative.ar.json | other | NON-GOVERNED | DELETE
i18n/narrative.de.json | other | NON-GOVERNED | DELETE
i18n/narrative.en.json | other | NON-GOVERNED | DELETE
i18n/narrative.fr.json | other | NON-GOVERNED | DELETE
i18n/narrative.ru.json | other | NON-GOVERNED | DELETE
i18n/narrative.zh.json | other | NON-GOVERNED | DELETE
i18n/terms.json | other | ALLOWED | KEEP
i18n/translations.json | other | ALLOWED | KEEP
index.html | landing | OUTDATED | REWRITE
index_layer2_selector.html | landing | OUTDATED | REWRITE
index_layer4_1_home.html | landing | OUTDATED | REWRITE
index_phase_f.html | landing | OUTDATED | REWRITE
index_phase_f_backup.html | landing | UNKNOWN | DELETE
js/app.js | asset | OUTDATED | REWRITE
js/components/README.md | documentation | ALLOWED | KEEP
js/components/archive-banner.js | asset | ALLOWED | KEEP
lab/README.md | documentation | ALLOWED | KEEP
lab/generate_phase_e_pages.py | other | OUTDATED | REWRITE
lab/publication/claim-001/2026-02-06/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-06/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-06/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-06/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-06/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-06/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-06/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-06/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-07/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-08/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/derived/visual_evidence.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-11/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/derived/visual_evidence.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-19/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/derived/visual_evidence.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-20/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/derived/visual_evidence.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-21/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/derived/visual_evidence.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-22/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/derived/statistics.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/derived/visual_evidence.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/provenance.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/sha256sum.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/tables/platforms_registry.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/tables/platforms_registry.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/tables/sbdb_attempts.csv | artifact | ALLOWED | KEEP
lab/publication/claim-001/2026-02-23/tables/sbdb_attempts.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/DOI.txt | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/README.md | documentation | ALLOWED | KEEP
lab/publication/claim-001/verification/horizons_validation_log.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/iau_designation_assessment.md | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/manifest.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/mpc_crosscheck_log.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/sbdb_api_specification.md | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/sbdb_query_tests.json | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/tess_mission_status_and_data.md | artifact | ALLOWED | KEEP
lab/publication/claim-001/verification/verification_sequence.md | artifact | ALLOWED | KEEP
lab/publication_engine.py | other | ALLOWED | KEEP
lab/update_publications_yml.py | other | ALLOWED | KEEP
methodology/index.html | landing | ALLOWED | KEEP
observations.html | landing | OUTDATED | REWRITE
package-lock.json | other | ALLOWED | KEEP
package.json | other | ALLOWED | KEEP
phase-e/README.md | documentation | OUTDATED | REWRITE
phase-e/TEMPLATE_PUBLICATION_ENTRY.txt | other | OUTDATED | REWRITE
phase-e/claim-001.html | artifact | OUTDATED | REWRITE
phase-e/index.html | landing | OUTDATED | REWRITE
phase-e/publications.yml | artifact | ALLOWED | KEEP
phase-f-governance/index.html | landing | ALLOWED | KEEP
public/.gitkeep | other | ALLOWED | KEEP
public/latest.json | artifact | ALLOWED | KEEP
public/observations/.gitkeep | other | ALLOWED | KEEP
public/observations/2026-03-15.json | artifact | ALLOWED | KEEP
public/observations/2026-03-15/epistemic_state.json | artifact | ALLOWED | KEEP
public/observations/2026-03-15/normalized_observation.json | artifact | ALLOWED | KEEP
public/observations/2026-03-16.json | artifact | ALLOWED | KEEP
public/observations/2026-03-16/epistemic_state.json | artifact | ALLOWED | KEEP
public/observations/2026-03-16/normalized_observation.json | artifact | ALLOWED | KEEP
public/observations/2026-03-17.json | artifact | ALLOWED | KEEP
public/observations/2026-03-17/epistemic_state.json | artifact | ALLOWED | KEEP
public/observations/2026-03-17/normalized_observation.json | artifact | ALLOWED | KEEP
public/observations/2026-03-18.json | artifact | ALLOWED | KEEP
public/observations/2026-03-18/epistemic_state.json | artifact | ALLOWED | KEEP
public/observations/2026-03-18/normalized_observation.json | artifact | ALLOWED | KEEP
public/observations/2026-03-19.json | artifact | ALLOWED | KEEP
public/observations/2026-03-19/epistemic_state.json | artifact | ALLOWED | KEEP
public/observations/2026-03-19/normalized_observation.json | artifact | ALLOWED | KEEP
public/observations/2026-03-20.json | artifact | ALLOWED | KEEP
public/observations/2026-03-20/epistemic_state.json | artifact | ALLOWED | KEEP
public/observations/2026-03-20/normalized_observation.json | artifact | ALLOWED | KEEP
public/observations/2026-03-21.json | artifact | ALLOWED | KEEP
public/observations/2026-03-21/epistemic_state.json | artifact | ALLOWED | KEEP
public/observations/2026-03-21/normalized_observation.json | artifact | ALLOWED | KEEP
public/summary.json | artifact | ALLOWED | KEEP
robots.txt | other | ALLOWED | KEEP
ru/goi/index.html | landing | OUTDATED | REWRITE
ru/governance/index.html | landing | OUTDATED | REWRITE
ru/index.html | landing | OUTDATED | REWRITE
ru/lab/index.html | landing | OUTDATED | REWRITE
ru/map/index.html | landing | OUTDATED | REWRITE
ru/phase-e/claim-001.html | artifact | OUTDATED | REWRITE
ru/phase-e/index.html | landing | OUTDATED | REWRITE
ru/phase-f-governance/index.html | landing | OUTDATED | REWRITE
ru/projects/index.html | landing | OUTDATED | REWRITE
ru/status/gate-5.html | landing | OUTDATED | REWRITE
ru/status/index.html | landing | OUTDATED | REWRITE
scientific-narrative/README.md | documentation | NON-GOVERNED | DELETE
scientific-narrative/SCOPE.md | documentation | NON-GOVERNED | DELETE
scientific-narrative/index.html | landing | NON-GOVERNED | DELETE
scientific-publication/CITATION_POLICY.md | documentation | ALLOWED | KEEP
scientific-publication/CLAIM_BOUNDARIES.md | documentation | ALLOWED | KEEP
scientific-publication/PUBLICATION_POLICY.md | documentation | ALLOWED | KEEP
scientific-publication/index.html | landing | ALLOWED | KEEP
scripts/archive-publication.sh | other | ALLOWED | KEEP
scripts/build_observations.py | other | ALLOWED | KEEP
scripts/contrast-check.js | other | ALLOWED | KEEP
scripts/sbdb_validation_runner.py | other | ALLOWED | KEEP
scripts/validate_pipeline.py | other | ALLOWED | KEEP
site.webmanifest | other | ALLOWED | KEEP
sitemap.xml | other | ALLOWED | KEEP
statistics.html | landing | OUTDATED | REWRITE
status.html | landing | OUTDATED | REWRITE
system-map.html | landing | ALLOWED | KEEP
system-map/index.ar.md | documentation | ALLOWED | KEEP
system-map/index.en.md | documentation | ALLOWED | KEEP
system-map/index.fr.md | documentation | ALLOWED | KEEP
system-map/index.zh.md | documentation | ALLOWED | KEEP
system-map/trizel-system-map.svg | asset | ALLOWED | KEEP
topology/index.html | landing | ALLOWED | KEEP
topology/topology.json | artifact | ALLOWED | KEEP
zh/goi/index.html | landing | OUTDATED | REWRITE
zh/governance/index.html | landing | OUTDATED | REWRITE
zh/index.html | landing | OUTDATED | REWRITE
zh/lab/index.html | landing | OUTDATED | REWRITE
zh/map/index.html | landing | OUTDATED | REWRITE
zh/phase-e/claim-001.html | artifact | OUTDATED | REWRITE
zh/phase-e/index.html | landing | OUTDATED | REWRITE
zh/phase-f-governance/index.html | landing | OUTDATED | REWRITE
zh/projects/index.html | landing | OUTDATED | REWRITE
zh/status/gate-5.html | landing | OUTDATED | REWRITE
zh/status/index.html | landing | OUTDATED | REWRITE

---

## 6. Epistemic Constraints

The Site Layer must comply with:

- no interpretation
- no inference
- no probabilistic statements
- no narrative explanations
- no mixing of epistemic layers

The site must only expose:

- governed artifacts
- provenance (DOI)
- epistemic state outputs

---

## 7. Validation Rules

Ensure:

- no file is omitted from the inventory
- each file has exactly one classification
- no ambiguous classification remains
- no interpretive language is introduced

---

## 8. Output Nature

This document is:

- descriptive
- non-executive
- decision-ready

It does not perform deletion or modification.
