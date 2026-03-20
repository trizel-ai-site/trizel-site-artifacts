# SITE PUBLICATION AND CITATION LAYER

## Classification

**Document Type:** Layer-2 Governance — Publication and Citation Visibility Layer  
**Status:** Authoritative  
**Scope:** All present and future TRIZEL site implementations  
**Authority:** Derives from Layer-0 governance framework (trizel-epistemic-engine / trizel-core)  
**Compliance:** [SITE_DEPENDENCY_ORDER.md](SITE_DEPENDENCY_ORDER.md) · [REPOSITORY_DOI_ARTIFACT_MAPPING.md](REPOSITORY_DOI_ARTIFACT_MAPPING.md) · [SITE_ENTRY_AND_DEPRECATION_POLICY.md](SITE_ENTRY_AND_DEPRECATION_POLICY.md)

---

## A. Purpose

This document defines how publication status, DOI, release, and citation context are exposed on the TRIZEL site (Layer-2).

The site exposes publication and citation context without altering the epistemic hierarchy established by Layer-0 governance. No change is made to structure, navigation, or artifact logic. This is a **visibility layer**, not a logic layer.

Its purpose is to enable any scientific or institutional visitor to immediately determine:

- what is citable and under what constraints
- what is canonical versus snapshot or operational
- what is a governance artifact versus an execution output versus a presentation surface
- how DOI and releases relate to epistemic authority within the TRIZEL system

This document does not confer authority. It exposes the authority structures defined elsewhere.

---

## B. Publication Categories (Controlled Vocabulary)

The following controlled values are the only permitted publication category labels for repositories and artifacts on the TRIZEL site:

| Category | Meaning |
|---|---|
| `canonical-publication` | DOI-backed, stable reference release; primary citable form of the governed output |
| `snapshot-release` | Time-bound, periodic operational state; DOI-backed snapshot pattern; not a canonical authority release |
| `governance-artifact` | Policy, rulebook, or epistemic definition output; authority derives from governance structure, not from a published release |
| `reference-context` | Supporting, non-authoritative context; formal definitions or reference anchors; read-only |
| `site-surface` | Presentation-only; Layer-2 surface; not independently citable as a scientific or governance output |

No label outside this vocabulary may be assigned.

This vocabulary is additive to the status vocabulary defined in `REPOSITORY_DOI_ARTIFACT_MAPPING.md §D`. Neither vocabulary supersedes the other; they express orthogonal properties.

---

## C. DOI Interpretation Rules

### C1. DOI presence does not imply epistemic equivalence

A DOI on a repository or artifact does not imply equal authority with other DOI-bearing repositories or artifacts.

Every DOI must be interpreted together with:

1. **Repository role** — as declared in `REPOSITORY_DOI_ARTIFACT_MAPPING.md §C`
2. **Epistemic layer** — Layer-0, Layer-1 execution, Layer-1 snapshot, reference layer, or Layer-2 surface
3. **Governance path** — the Layer-0 authorization chain under which the DOI-backed release was produced

### C2. DOI does not carry the same role across layers

A DOI on a canonical analysis kernel release (e.g., `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS`) does not carry the same epistemic role as a DOI on a snapshot publication (e.g., `AUTO-DZ-ACT-3I-ATLAS-DAILY`) or a site repository (`trizel-site-artifacts`).

### C3. Prohibited inferences

The following inferences are explicitly prohibited:

- Equating all DOI-bearing repositories as equally authoritative.
- Treating absence of a DOI as evidence that a repository or artifact lacks governance authority.
- Treating presence of a DOI as evidence that a repository produces scientific outputs.
- Using DOI as a shorthand for any specific publication category without reading the declared repository role and epistemic layer.

---

## D. Citation Visibility Rules

### D1. Formally citable

The following publication categories are eligible for formal citation:

| Category | Citation Form |
|---|---|
| `canonical-publication` | May be cited formally using the associated DOI and release reference |

Formal citation requires the citation to specify the origin repository, epistemic layer, and DOI reference.

### D2. Contextual reference only

The following categories may be referenced contextually but must not be cited as canonical publications:

| Category | Note |
|---|---|
| `snapshot-release` | Contextual reference only; snapshot DOIs exist but do not constitute canonical publication |
| `reference-context` | Reference anchor only; formal definitions, not citable as scientific or governance output |

Contextual references must carry an explicit note that they are not canonical publications.

### D3. Not independently citable

The following categories must not be independently cited:

| Category | Note |
|---|---|
| `governance-artifact` | Not citable as scientific output; governance reference only; authority derives from Layer-0 governance, not from publication status |
| `site-surface` | Not independently citable; site repository DOI exists for archival purposes only; not a scientific or governance output |

---

## E. Release vs Snapshot Distinction

The following distinction is formally defined for the TRIZEL site:

### E1. Canonical release

A **canonical release** is a governance-authorized, DOI-backed release produced by a frozen or canonical-status repository under full Layer-0 governance authorization.

- Publication category: `canonical-publication`
- Origin repository status: `frozen` or `canonical`
- Epistemic authority: derives from Layer-0 authorization and execution under Layer-1 governance rules

### E2. Snapshot state

A **snapshot release** is a periodic, time-bound observational or operational output published under the snapshot publication flow.

- Publication category: `snapshot-release`
- Origin repository status: `active`
- Epistemic authority: operational only; does not constitute a canonical analysis release
- DOI exists per snapshot instance; no single DOI covers the full repository output

### E3. Evolving operational outputs

Operational outputs not yet assigned to a specific release or snapshot instance are governed outputs in an evolving state. These must not be presented as canonical publications. Presentation must explicitly reference the operational status.

---

## F. Site Display Rules

### F1. Repository panels

Publication status is displayed on repository panels as follows:

- **Publication Category** — one value from the controlled vocabulary in Section B
- **Citation Eligibility** — a brief note drawn from Section D, specific to the declared category

These fields appear as standard rows in the repository panel field table. They do not override or duplicate the existing DOI / Release and Status fields. They add citation-specific context.

### F2. Artifact panels

Publication status is displayed on artifact panels as follows:

- **Publication Category** — one value from the controlled vocabulary in Section B
- **Citation Note** — a brief, non-repetitive statement indicating citation eligibility drawn from Section D

These fields appear as standard rows in the artifact panel field table.

### F3. Homepage

A short citation awareness block is present on the homepage stating:

- TRIZEL distinguishes between publication types
- DOI presence must be interpreted in context
- Artifacts are not uniformly citable

This block is non-dominant, non-hero, institutional in tone, and does not surface specific artifacts.

### F4. Prohibited display patterns

The following display patterns are explicitly prohibited:

- Badges implying ranking, quality, or prominence based on publication category
- Publication-first UI logic that elevates `canonical-publication` content to a visually dominant position over other content
- Filters, dashboards, or counters based on publication category
- Any UI element that inverts or bypasses the epistemic dependency order

---

## G. Validation Rules

The following checks must pass for any site-related PR to be considered compliant with this visibility layer:

1. Every repository panel includes a **Publication Category** field with a value from the controlled vocabulary in Section B.
2. Every artifact panel includes a **Publication Category** field and a **Citation Note** field.
3. No DOI value is presented without its associated repository role and epistemic layer context.
4. No publication category label is used that does not appear in Section B.
5. No `canonical-publication` label is assigned to a repository or artifact that does not have a confirmed DOI-backed release.
6. No repository or artifact is described as formally citable unless its publication category is `canonical-publication`.
7. No publication display pattern is used that implies ranking, popularity, or visual prominence.
8. The homepage citation awareness block does not surface specific artifacts or introduce publication-first UI logic.
9. All terminology is consistent with `REPOSITORY_DOI_ARTIFACT_MAPPING.md`.

---

## Publication Category Assignments (Canonical Reference)

The following table gives the canonical publication category assignment for each repository in `REPOSITORY_DOI_ARTIFACT_MAPPING.md §C`:

| Repository | Publication Category | Citation Eligibility |
|---|---|---|
| `trizel-epistemic-engine` | `governance-artifact` | Not citable as scientific output; governance reference only |
| `trizel-core` | `governance-artifact` | Not citable as scientific output; governance reference only |
| `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS` | `canonical-publication` | Formally citable via DOI-backed release (see mapping rules) |
| `AUTO-DZ-ACT-3I-ATLAS-DAILY` | `snapshot-release` | Contextual reference only; not a canonical publication |
| `Auto-dz-act` | `reference-context` | Reference anchor only; not independently citable |
| `trizel-site-artifacts` | `site-surface` | Not independently citable; site repository DOI for archival purposes only |

---

## References

- [SITE_DEPENDENCY_ORDER.md](SITE_DEPENDENCY_ORDER.md)
- [REPOSITORY_DOI_ARTIFACT_MAPPING.md](REPOSITORY_DOI_ARTIFACT_MAPPING.md)
- [SITE_ENTRY_AND_DEPRECATION_POLICY.md](SITE_ENTRY_AND_DEPRECATION_POLICY.md)
- [LAYER_BOUNDARIES.md](LAYER_BOUNDARIES.md)
- [PRESENTATION_SCOPE.md](PRESENTATION_SCOPE.md)
- [SCIENTIFIC_PRESENTATION_CONTRACT.md](SCIENTIFIC_PRESENTATION_CONTRACT.md)
- [WHITEPAPER_DOI_REFERENCE.md](WHITEPAPER_DOI_REFERENCE.md)

---

## Institutional Notice

**Non-scientific** — Contains no research or analysis.  
**Non-authoritative over science** — Makes no scientific claims.  
**Governance-binding** — Establishes mandatory constraints for publication and citation visibility on the TRIZEL site.  
**Declarative** — Defines visibility rules, not implementation details.

---

**Site Publication and Citation Layer** — Layer-2 Governance — Publication and Citation Visibility Layer — Authoritative — All site implementations must comply
