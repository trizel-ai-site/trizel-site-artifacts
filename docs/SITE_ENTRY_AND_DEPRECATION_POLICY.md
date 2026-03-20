# SITE ENTRY AND DEPRECATION POLICY

## Classification

**Document Type:** Layer-2 Governance — Canonical Entry Points and Deprecation Policy  
**Status:** Authoritative and Binding  
**Scope:** All present and future TRIZEL site implementations  
**Authority:** Derives from Layer-0 governance framework (trizel-epistemic-engine / trizel-core)  
**Compliance:** [SITE_DEPENDENCY_ORDER.md](SITE_DEPENDENCY_ORDER.md) · [REPOSITORY_DOI_ARTIFACT_MAPPING.md](REPOSITORY_DOI_ARTIFACT_MAPPING.md)

---

## A. Purpose

The TRIZEL site (Layer-2) is now governed by an explicit epistemic dependency order as defined in `docs/SITE_DEPENDENCY_ORDER.md`.

This document formalises the consequences of that governance for public site visibility:

- Not all pages are equal in authority or visibility.
- Canonical entry points are explicitly defined and constitute the only authoritative public access surface.
- Legacy content is retained temporarily in the repository but is not authoritative, is not part of the canonical entry flow, and must not be treated as equivalent to canonical pages.
- Every future change to navigation, visibility, or content removal MUST comply with this policy.

This document is **policy-only**. It does not remove content. It defines classification, lifecycle, and governance rules under which future removal may occur.

---

## B. Canonical Entry Points

The only official public entry flow for the TRIZEL site is:

```
/ (Homepage — Epistemic Positioning entry)
  → /content/01-positioning/
  → /content/02-architecture/
  → /content/03-repository-roles/
  → /content/04-artifacts/
```

### Binding constraints

- These four content surfaces, accessed through the homepage, are the **only authoritative entry surfaces**.
- All other pages must be interpreted relative to these surfaces and subordinate to them.
- No other page may be presented as a primary or equivalent entry point.
- The dependency order (Positioning → Architecture → Repository Roles → Artifacts) is mandatory and may not be inverted or bypassed in any navigation path.

---

## C. Canonical vs Non-Canonical Surfaces

### Canonical surfaces

The following surfaces are canonical. They are authoritative, indexed, and appear in primary navigation:

| Surface | Path | Status |
|---|---|---|
| Homepage | `/` | Canonical — primary entry |
| Epistemic Positioning | `/content/01-positioning/` | Canonical |
| System Architecture | `/content/02-architecture/` | Canonical |
| Repository Roles | `/content/03-repository-roles/` | Canonical |
| Artifacts / Outputs | `/content/04-artifacts/` | Canonical |

### Non-canonical (supporting) surfaces

The following surfaces are non-canonical. They provide supporting or reference information but are not part of the canonical entry chain. They are not listed in primary navigation:

| Surface | Example paths | Status |
|---|---|---|
| Internal governance documentation | `/docs/` | Non-canonical — supporting |
| DOI / mapping references | `docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md` | Non-canonical — supporting |
| Accessibility information | `/accessibility.html` | Non-canonical — supporting |
| Citation guidance | `/how-to-cite/` | Non-canonical — supporting |
| Global Observatory Index | `/goi/` | Non-canonical — supporting |

### Legacy surfaces

The following surface categories are legacy. They are retained for historical continuity only. They are not authoritative and do not form part of the canonical entry flow:

| Category | Example paths | Status |
|---|---|---|
| Phase-based pages | `/phase-e/`, `/phase-f-governance/` | Legacy |
| Pre-reset navigation pages | `index_phase_f.html`, `index_phase_f_backup.html`, `index_layer2_selector.html`, `index_layer4_1_home.html` | Legacy |
| Experimental or transitional content | Pages produced during incremental development phases | Legacy |

---

## D. Legacy Classification

All legacy content is assigned one of the following classification labels. No other labels are permitted:

### `legacy-visible`

- **Navigation:** Does not appear in primary navigation. May be reachable via direct URL.
- **Indexing:** May remain indexed by crawlers unless explicitly suppressed.
- **Canonical links:** Must not be linked from canonical pages as authority. May be referenced with explicit legacy labelling only.
- **Definition:** Retained legacy content accessible by URL but not promoted.

### `legacy-hidden`

- **Navigation:** Does not appear in any navigation structure.
- **Indexing:** Should be suppressed from indexing (via `robots.txt` or `noindex` meta tag).
- **Canonical links:** Must not be linked from any page.
- **Definition:** Retained legacy content that is effectively invisible to normal visitors but physically present in the repository.

### `legacy-deprecated`

- **Navigation:** Does not appear in any navigation structure.
- **Indexing:** Must be suppressed.
- **Canonical links:** Must not be linked from any page.
- **User-facing labelling:** If the page is accessible, it MUST display the following notice: *"This page is part of a legacy surface and is not part of the canonical entry flow. It is formally deprecated and will be removed in a future governed PR."*
- **Definition:** Legacy content formally scheduled for removal, pending compliance with the removal policy in Section H.

### `legacy-archival`

- **Navigation:** Does not appear in any navigation structure.
- **Indexing:** Suppressed.
- **Canonical links:** None permitted.
- **Definition:** Retained exclusively for archival or institutional record purposes. No user-facing role.

---

## E. Deprecation Lifecycle

All site content follows a four-stage lifecycle. Transition between stages requires explicit governance action:

```
Active
  → Legacy
    → Deprecated
      → Removed
```

### Stage: Active

- **Visibility:** Fully visible. Appears in navigation if canonical.
- **Allowed links:** May be linked from any page.
- **User-facing labelling:** None required.
- **Removal conditions:** Not applicable. Content must transition to Legacy before any removal consideration.

### Stage: Legacy

- **Visibility:** Retained and accessible by URL. Does not appear in primary navigation.
- **Allowed links:** May only be referenced with explicit legacy labelling. Must not be cited as authoritative.
- **User-facing labelling:** Pages classified as `legacy-deprecated` or `legacy-hidden` MUST carry a legacy notice as defined in Section D.
- **Removal conditions:** Content may not be removed while in Legacy stage. It must first transition to Deprecated.

### Stage: Deprecated

- **Visibility:** Suppressed from navigation and indexing.
- **Allowed links:** No links permitted from any active or canonical page.
- **User-facing labelling:** Deprecated pages that remain accessible MUST display the deprecation notice defined in Section D.
- **Removal conditions:** Removal is permitted only after all conditions in Section H are satisfied.

### Stage: Removed

- **Visibility:** Page is absent from the repository.
- **Allowed links:** No links permitted. Any existing links must be resolved before removal.
- **User-facing labelling:** Not applicable (page is absent).
- **Removal conditions:** Governed removal PR required. See Section H.

---

## F. Visibility Rules

The following rules govern visibility across all site surfaces:

1. Only canonical pages (Section B and Section C) appear in primary navigation.
2. Legacy pages in any sub-category MUST NOT appear in main navigation.
3. No legacy page may be framed, titled, or linked in a manner that implies canonical authority.
4. Canonical pages MUST NOT link back to legacy pages as authoritative sources.
5. A legacy page linked from a canonical page (if at all) MUST carry an explicit label indicating its legacy status and non-authoritative nature.
6. The homepage entry flow MUST link exclusively to canonical surfaces in dependency order.
7. Supporting non-canonical surfaces may appear in secondary navigation (e.g., footer links) but must not appear in the primary header navigation.

---

## G. Navigation Constraints

The following constraints govern all navigation structures on the TRIZEL site:

1. **Dependency order is mandatory.** All navigation paths must follow: Positioning → Architecture → Repository Roles → Artifacts.
2. **No shortcuts to Artifacts.** A visitor must not be able to reach the Artifacts surface without first having access to Positioning, Architecture, and Repository Roles surfaces in the navigation chain.
3. **No alternative entry trees.** No navigation structure may present an alternative ordering or grouping that bypasses the canonical dependency chain.
4. **No UI-driven reordering.** Navigation ordering MUST NOT be modified based on aesthetics, user interaction frequency, or presentation preferences.
5. **Footer navigation** may include secondary links (governance, accessibility, GOI, DOI) but must not create an alternative canonical entry path.

---

## H. Removal Policy (Future PRs)

Removal of any content is permitted only after all of the following conditions are satisfied:

### Required pre-conditions for removal

1. **Canonical replacement exists.** A canonical surface covering the same informational role as the content to be removed is active and accessible.
2. **No dependency remains.** No other file, page, or document in the repository references the content to be removed as authoritative.
3. **No active link remains.** No accessible page links to the content to be removed, whether from canonical, supporting, or legacy surfaces.
4. **Deprecation stage is complete.** The content to be removed must have been classified as Deprecated (Section E) in a prior PR, with sufficient elapsed time for any external references to be updated.

### Removal procedure

- Removal MUST be executed in a dedicated PR.
- The removal PR MUST explicitly reference this policy document (`docs/SITE_ENTRY_AND_DEPRECATION_POLICY.md`).
- The removal PR MUST list each removed file and confirm that all four pre-conditions above are satisfied for each file.
- Batch removal of multiple files in a single PR is permitted only when all pre-conditions are individually met for each file.

---

## I. Validation Rules

The following checks must pass for any site-related PR to be considered compliant with this policy:

1. Every canonical page (Section C) is reachable from the homepage via the canonical entry flow.
2. No legacy page appears in the primary navigation (`<nav>` element in the site header).
3. No deprecated page is linked from any canonical page without an explicit legacy label.
4. The dependency order (Positioning → Architecture → Repository Roles → Artifacts) is preserved in all entry paths.
5. No content is assigned a status value outside the controlled vocabularies in Sections C and D.
6. Any PR that removes files MUST reference this policy and confirm compliance with Section H.
7. Any PR that modifies navigation MUST confirm compliance with Sections F and G.
8. No legacy page presents itself as an alternative or equivalent entry point to the canonical surfaces.

---

## J. Authority Statement

This document defines the **only valid interpretation** of site entry and visibility for the TRIZEL site (Layer-2).

All future PRs affecting navigation, visibility, or content removal MUST comply with this policy.

Deviations from this policy are governance violations unless:

- A superseding governance document explicitly replaces or amends this policy.
- The deviation is explicitly documented and justified with reference to a higher-authority Layer-0 governance decision.

This document derives its authority from:

- `docs/SITE_DEPENDENCY_ORDER.md` — canonical dependency order constraint
- `docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md` — canonical mapping reference
- Layer-0 governance framework (trizel-epistemic-engine / trizel-core)

---

## References

- [SITE_DEPENDENCY_ORDER.md](SITE_DEPENDENCY_ORDER.md)
- [REPOSITORY_DOI_ARTIFACT_MAPPING.md](REPOSITORY_DOI_ARTIFACT_MAPPING.md)
- [LAYER_BOUNDARIES.md](LAYER_BOUNDARIES.md)
- [PRESENTATION_SCOPE.md](PRESENTATION_SCOPE.md)
- [NARRATIVE_BOUNDARIES.md](NARRATIVE_BOUNDARIES.md)
- [CONTENT_CLASSIFICATION.md](CONTENT_CLASSIFICATION.md)
- [SYSTEM_INTERFACE_PRINCIPLES.md](SYSTEM_INTERFACE_PRINCIPLES.md)

---

## Institutional Notice

**Non-scientific** — Contains no research or analysis.  
**Non-authoritative over science** — Makes no scientific claims.  
**Governance-binding** — Establishes mandatory constraints for site entry and content lifecycle.  
**Declarative** — Defines classification rules and lifecycle stages, not implementation details.

---

**Site Entry and Deprecation Policy** — Layer-2 Governance — Canonical Entry Points and Deprecation Policy — Authoritative and Binding — All site implementations must comply
