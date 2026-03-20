# Repository Roles & Governance Mapping

**Layer:** Layer-2 — Epistemic Surface  
**Status:** Canonical  
**Compliance:** [SITE_DEPENDENCY_ORDER.md](/docs/SITE_DEPENDENCY_ORDER.md) · [REPOSITORY_DOI_ARTIFACT_MAPPING.md](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md)

---

**Context:** [Epistemic Positioning](/content/01-positioning/) → [System Architecture](/content/02-architecture/) → **Repository Roles** → [Artifacts](/content/04-artifacts/)

---

## Preface

Repositories in the TRIZEL system are presented grouped by governance role and epistemic layer.

This surface is not an organization inventory. It is a governed reading interface. Repositories are shown only within governance and artifact context. Repository visibility does not imply equal authority. Role, layer, and governance context must be read together.

---

## Canonical Mapping Chain

```
Repository → Role → Epistemic Layer → Release / DOI Status → Artifact Responsibility → Site Surface Representation
```

No element in this chain may be omitted or collapsed. Each repository is describable through every step of this chain.

---

## A. Constitutional / Epistemic Authority

### `trizel-epistemic-engine`

| Field | Value |
|---|---|
| **Organization / Owner** | trizel-ai |
| **Role** | Constitutional / epistemic authority |
| **Epistemic Layer** | Layer-0 |
| **Status** | canonical |
| **DOI / Release** | DOI status not asserted in this document |
| **Artifact Relation** | Governance anchor only |
| **Site Representation** | Governance anchor; not an artifact surface |

---

## B. Operational Governance

### `trizel-core`

| Field | Value |
|---|---|
| **Organization / Owner** | trizel-ai |
| **Role** | Operational governance |
| **Epistemic Layer** | Layer-0 / Governance |
| **Status** | canonical |
| **DOI / Release** | DOI status not asserted in this document |
| **Artifact Relation** | Enforces Layer-0 policies; manages artifact approval |
| **Site Representation** | Governance mapping; not scientific output |

---

## C. Canonical Analysis / Execution

### `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS`

| Field | Value |
|---|---|
| **Organization / Owner** | abdelkader-omran |
| **Role** | Canonical analysis kernel |
| **Epistemic Layer** | Layer-1 — execution / analysis |
| **Status** | frozen |
| **DOI / Release** | DOI-backed release present (exact identifier not asserted in this document) |
| **Artifact Relation** | Analysis kernel producing governed artifacts |
| **Site Representation** | Kernel + governed artifact source |

---

## D. Operational Snapshot / Publication Support

### `AUTO-DZ-ACT-3I-ATLAS-DAILY`

| Field | Value |
|---|---|
| **Organization / Owner** | abdelkader-omran |
| **Role** | Daily official snapshot / observational publication |
| **Epistemic Layer** | Layer-1 — operational snapshot / publication support |
| **Status** | active |
| **DOI / Release** | Snapshot release pattern present (exact identifiers not asserted in this document) |
| **Artifact Relation** | Daily snapshot source |
| **Site Representation** | Snapshot source |

---

## E. Definition / Reference Layer

### `Auto-dz-act`

| Field | Value |
|---|---|
| **Organization / Owner** | trizel-ai |
| **Role** | Definition-only canonical reference |
| **Epistemic Layer** | Reference / formal definition layer |
| **Status** | reference-only |
| **DOI / Release** | DOI status not asserted in this document |
| **Artifact Relation** | Reference-only definition source |
| **Site Representation** | Reference anchor |

---

## F. Site Surface / Public Projection

### `trizel-site-artifacts`

| Field | Value |
|---|---|
| **Organization / Owner** | trizel-ai-site |
| **Role** | Layer-2 epistemic surface |
| **Epistemic Layer** | Site surface |
| **Status** | site-surface |
| **DOI / Release** | DOI: 10.5281/zenodo.18636150 (site repository) |
| **Artifact Relation** | Site surface only, not artifact origin |
| **Site Representation** | Presentation layer |

---

## Authority Flow

```
Layer-0 (trizel-epistemic-engine / trizel-core)
→ Operational Governance (trizel-core)
→ Layer-1 Execution (AUTO-DZ-ACT-ANALYSIS-3I-ATLAS / AUTO-DZ-ACT-3I-ATLAS-DAILY)
→ Layer-2 Presentation (trizel-site-artifacts)
```

No repository may self-authorize content for public presentation. Authority flows top-down from Layer-0.

---

## DOI / Release Interpretation

DOI presence does not imply epistemic equivalence across repositories. A DOI must always be interpreted together with the repository's declared role and epistemic layer.

Release existence does not imply canonical authority. Repository role must always be read together with layer and governance context.

See [docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md §E](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md) for the full DOI / release rules.

---

*Layer-2 Epistemic Surface — SITE_DEPENDENCY_ORDER.md compliance — REPOSITORY_DOI_ARTIFACT_MAPPING.md canonical reference*
