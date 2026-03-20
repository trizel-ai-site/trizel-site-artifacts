# SITE CLEANUP CHANGELOG

## Classification

**Document Type:** Layer-2 Governance — Controlled Cleanup Record  
**Status:** Authoritative Record  
**Scope:** First controlled legacy deprecation cleanup of the TRIZEL site  
**Policy Reference:** [SITE_ENTRY_AND_DEPRECATION_POLICY.md](SITE_ENTRY_AND_DEPRECATION_POLICY.md)  
**Compliance:** [SITE_DEPENDENCY_ORDER.md](SITE_DEPENDENCY_ORDER.md) · [REPOSITORY_DOI_ARTIFACT_MAPPING.md](REPOSITORY_DOI_ARTIFACT_MAPPING.md)

---

## Cleanup PR: feat(site): apply legacy deprecation and controlled cleanup

**Date:** 2026-03-20  
**Phase:** First controlled cleanup — legacy deprecation enforcement

This cleanup was executed conservatively in compliance with `docs/SITE_ENTRY_AND_DEPRECATION_POLICY.md`. No canonical pages were removed. No scientific outputs were modified. All deletions and de-prioritisations were limited to files explicitly classified as legacy under the policy.

---

## Files Deleted

| File | Reason for Deletion |
|---|---|
| `index_phase_f_backup.html` | Backup duplicate of `index_phase_f.html`. Explicitly classified as legacy in `docs/SITE_ENTRY_AND_DEPRECATION_POLICY.md`. Not linked from any canonical page. Not required for publication, provenance, or build integrity. Audit record (`docs/SITE_AUDIT_REPORT.md`) recommendation: DELETE. All deletion pre-conditions satisfied. |

---

## Files De-prioritised (Retained with Deprecation Notice)

These files cannot yet be deleted because the Removal Policy in Section H of `docs/SITE_ENTRY_AND_DEPRECATION_POLICY.md` requires a prior formal deprecation stage. They have been formally advanced to `legacy-deprecated` status in this PR. Each file now carries a visible deprecation notice per the requirements in Section D of the policy.

| File | Classification | Action Taken | Reason Not Yet Deleted |
|---|---|---|---|
| `index_phase_f.html` | `legacy-deprecated` | Deprecation notice added; suppressed in `robots.txt` | Prior formal deprecation stage required per Section H. Active links in legacy files still reference this file (will be resolved in next cleanup cycle). |
| `index_layer2_selector.html` | `legacy-deprecated` | Deprecation notice added; suppressed in `robots.txt` | Prior formal deprecation stage required per Section H. Referenced from legacy peers only; all active surface links removed in this PR. |
| `index_layer4_1_home.html` | `legacy-deprecated` | Deprecation notice added; suppressed in `robots.txt` | Prior formal deprecation stage required per Section H. Referenced from legacy peers only; all active surface links removed in this PR. |

---

## Active Surface Changes

| File | Change | Reason |
|---|---|---|
| `statistics.html` | Removed nav links to `index_layer4_1_home.html` and `index_layer2_selector.html` | Legacy shortcuts removed from active navigation per Section F, Rule 2 of the deprecation policy. Legacy pages must not appear in any navigation structure. |
| `system-map.html` | Removed nav links to `index_layer4_1_home.html` and `index_layer2_selector.html` | Same as above. |
| `robots.txt` | Added `Disallow` directives for all four legacy index files | Suppression of legacy-deprecated pages from crawler indexing per Section D (`legacy-deprecated` requirements). |

---

## Canonical Pages Preserved (Unchanged)

The following canonical surfaces were not modified and remain fully intact:

- `/` — Homepage (canonical primary entry)
- `/content/01-positioning/` — Epistemic Positioning
- `/content/02-architecture/` — System Architecture
- `/content/03-repository-roles/` — Repository Roles
- `/content/04-artifacts/` — Artifacts / Outputs

---

## Explicit Compliance Statement

This cleanup followed `docs/SITE_ENTRY_AND_DEPRECATION_POLICY.md` conservatively.

- No canonical page was removed or modified.
- No scientific outputs were touched.
- No files were deleted where dependency status was uncertain.
- No files were deleted solely because they are old.
- Deletion was applied only to `index_phase_f_backup.html`, which satisfied all pre-conditions in Section H of the policy.
- All other legacy files were advanced to `legacy-deprecated` with visible notices and crawler suppression.
- Legacy shortcuts were removed from active navigation surfaces (`statistics.html`, `system-map.html`).
- The canonical entry flow (`/ → Positioning → Architecture → Repository Roles → Artifacts`) remains intact and unmodified.

---

## Next Steps (Future Governed PRs)

The following files are now formally `legacy-deprecated` and eligible for full removal in a subsequent governed PR, once all pre-conditions in Section H are independently confirmed:

- `index_phase_f.html`
- `index_layer2_selector.html`
- `index_layer4_1_home.html`

The next cleanup PR must reference this changelog and confirm that no remaining links to these files exist from any active or canonical page.

---

**Site Cleanup Changelog** — Layer-2 Governance — Controlled Cleanup Record — Policy-Compliant
