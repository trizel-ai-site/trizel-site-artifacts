# REPOSITORY / DOI / ARTIFACT MAPPING

## Classification

**Document Type:** Layer-2 Governance — Canonical Mapping Reference  
**Status:** Authoritative  
**Scope:** All present and future TRIZEL site implementations  
**Authority:** Derives from Layer-0 governance framework (trizel-epistemic-engine / trizel-core)  
**Compliance:** [SITE_DEPENDENCY_ORDER.md](SITE_DEPENDENCY_ORDER.md)

---

## A. Purpose

This document binds repositories, releases, DOIs, and artifacts into a single canonical mapping model for the TRIZEL site.

It is the authoritative reference for:

- Repository role mapping
- DOI / release mapping
- Artifact origin mapping
- Site-layer presentation consistency

### Explicit constraints

- The site does **not** present repositories as flat entries.
- The site does **not** present artifacts in isolation.
- Every public artifact must be linked back to:
  - Repository
  - Epistemic layer
  - Governance path
  - DOI / release status where applicable

---

## B. Mapping Model

The canonical mapping chain is:

```
Repository
→ Role
→ Epistemic Layer
→ Release / DOI Status
→ Artifact Responsibility
→ Site Surface Representation
```

No element in this chain may be omitted or collapsed. Each repository on the site must be describable through every step of this chain.

---

## C. Repository Classification Table

| Repository | Organization / Owner | Role | Epistemic Layer | Status | DOI / Release | Artifact Relation | Site Representation |
|---|---|---|---|---|---|---|---|
| `trizel-epistemic-engine` | trizel-ai | Constitutional / epistemic authority | Layer-0 | canonical | DOI status: not asserted in this document | Governance anchor — defines epistemic rules | Governance anchor; not an artifact surface |
| `trizel-core` | trizel-ai | Operational governance | Layer-0 / Governance | canonical | DOI status: not asserted in this document | Enforces Layer-0 policies; manages artifact approval | Governance mapping; not scientific output |
| `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS` | abdelkader-omran | Canonical analysis kernel | Layer-1 — execution / analysis | frozen | DOI-backed release present (exact identifier not asserted in this document) | Kernel and governed artifact source; primary origin of governed analysis artifacts | Kernel + governed artifact source |
| `AUTO-DZ-ACT-3I-ATLAS-DAILY` | abdelkader-omran | Daily official snapshot / observational publication | Layer-1 — operational snapshot / publication support | active | DOI-backed snapshot pattern present (exact identifiers not asserted in this document) | Snapshot source for observational outputs | Snapshot source |
| `Auto-dz-act` | trizel-ai | Definition-only canonical reference | Reference / formal definition layer | reference-only | DOI status: not asserted in this document | Reference anchor; formal definitions only | Reference anchor |
| `trizel-site-artifacts` | trizel-ai-site | Layer-2 epistemic surface | Site surface | site-surface | DOI: 10.5281/zenodo.18636150 (site repository) | Presentation layer only; no execution authority | Presentation layer |

### Notes on the table

- If a DOI is not confirmed in repository-visible materials, the field reads: **DOI status: not asserted in this document**.
- Status values are drawn exclusively from the controlled vocabulary defined in Section D.
- A repository listed here without a confirmed DOI must not have one inferred or fabricated.

---

## D. Status Vocabulary

The following controlled values are the only permitted status labels for repositories and artifacts in this mapping:

| Value | Meaning |
|---|---|
| `canonical` | Authoritative, governance-anchored; primary source of truth |
| `governance` | Dedicated to rule and policy definition; not a scientific output source |
| `operational` | Active execution or publication role |
| `archival` | Immutable historical record; no active publication role |
| `reference-only` | Formal definitions and schemas; read-only reference |
| `site-surface` | Layer-2 presentation; no execution or governance authority |
| `snapshot` | Periodic observational or release record |
| `frozen` | Sealed at a specific version; no further changes |
| `active` | Ongoing operational state |

No marketing labels, informal descriptors, or invented status values are permitted.

---

## E. DOI / Release Rules

### Types of DOI / release relationships

1. **DOI-backed canonical release** — A repository has a Zenodo or equivalent DOI pointing to a specific, governance-authorized release. The DOI is the persistent public identifier for that release.

2. **DOI-backed snapshot pattern** — A repository produces periodic DOI-backed snapshots. Each snapshot has an individual DOI; no single DOI covers the full repository.

3. **Governance / reference repository** — The repository's role does not require a DOI. Its authority derives from the governance structure, not from a published release.

4. **Site surface repository** — The repository may carry a DOI for archival or citation purposes, but the DOI does not confer scientific or governance authority.

### Interpretation rule

**DOI presence does not imply epistemic equivalence.**

A DOI must always be interpreted together with the repository's declared role and epistemic layer. A snapshot DOI (e.g., `AUTO-DZ-ACT-3I-ATLAS-DAILY`) does not carry the same authority as a DOI on a canonical analysis kernel (e.g., `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS`).

The following errors are explicitly prohibited:

- Equating all DOI-bearing repositories as equally authoritative.
- Treating absence of DOI as evidence that a repository lacks governance authority.
- Treating presence of DOI as evidence that a repository produces scientific outputs.

---

## F. Artifact Binding Rules

Every artifact shown on the TRIZEL site must be bound to:

1. **Origin repository** — the specific repository that produced the artifact, identified by name and organization.
2. **Release or publication state** — the specific release, tag, or snapshot state under which the artifact was published.
3. **Provenance path** — the full chain from data input through Layer-1 execution to Layer-2 presentation, including governance approvals.
4. **Governance context** — the Layer-0 authorization under which the artifact was approved for public presentation.

### Prohibition

No artifact may appear on the site without all four binding fields declared. An artifact presented without its full mapping is a governance violation.

---

## G. Site Representation Rules

### Repositories

Repositories must appear on the site:

- **Grouped by role / layer** — epistemic layer and governance role determine grouping.
- **Not alphabetically** — alphabetical ordering erases epistemic structure.
- **Not as popularity-based cards** — star counts, activity metrics, or visual prominence must not drive presentation.
- **Not as a flat organization inventory** — listing all repositories in a single undifferentiated list is forbidden.

### Artifacts

Artifacts must appear on the site:

- **Contextualized by repository and provenance** — every artifact is presented with its full binding (Section F).
- **Grouped under the dependency order** — the sequence Positioning → Architecture → Repository Roles → Artifacts must be respected in all navigation and content structures.
- **Never shown as isolated "latest outputs"** — recency is not a valid basis for presentation.

---

## H. Validation Rules

The following checks must pass for any site-related PR to be considered compliant:

1. Every site-visible artifact maps to exactly one repository in this document.
2. Every mapped repository has exactly one declared role.
3. Every DOI reference has an associated repository role declaration.
4. No repository may appear on the site without a declared epistemic layer attribution.
5. No artifact may appear on the site without a declared governance path.
6. No repository status value may be used unless it appears in Section D.
7. No DOI value may be asserted unless it is confirmed in repository-visible materials.

---

## References

- [SITE_DEPENDENCY_ORDER.md](SITE_DEPENDENCY_ORDER.md)
- [LAYER_BOUNDARIES.md](LAYER_BOUNDARIES.md)
- [PRESENTATION_SCOPE.md](PRESENTATION_SCOPE.md)
- [NARRATIVE_BOUNDARIES.md](NARRATIVE_BOUNDARIES.md)
- [SCIENTIFIC_PRESENTATION_CONTRACT.md](SCIENTIFIC_PRESENTATION_CONTRACT.md)
- [WHITEPAPER_DOI_REFERENCE.md](WHITEPAPER_DOI_REFERENCE.md)

---

## Institutional Notice

**Non-scientific** — Contains no research or analysis.  
**Non-authoritative over science** — Makes no scientific claims.  
**Governance-binding** — Establishes mandatory constraints for site structure.  
**Declarative** — Defines mapping rules, not implementation details.

---

**Repository / DOI / Artifact Mapping** — Layer-2 Governance — Canonical Mapping Reference — Authoritative — All site implementations must comply
