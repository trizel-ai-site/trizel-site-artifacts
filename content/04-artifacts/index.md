# Artifacts / Outputs

**Layer:** Layer-2 — Epistemic Surface  
**Status:** Authoritative  
**Compliance:** [SITE_DEPENDENCY_ORDER.md](/docs/SITE_DEPENDENCY_ORDER.md) · [REPOSITORY_DOI_ARTIFACT_MAPPING.md](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md)

---

**Context:** [Epistemic Positioning](/content/01-positioning/) → [System Architecture](/content/02-architecture/) → [Repository Roles](/content/03-repository-roles/) → **Artifacts**

---

## Preface

Artifacts are presented only within repository, layer, and governance context. This is not a result gallery.

Visibility does not imply interpretation. Recency does not determine epistemic priority. Artifact access is provenance-bound.

Every artifact on this site is grouped by governed origin and function. No artifact appears as a standalone output. No artifact is ranked by recency, popularity, or visual prominence.

Canonical reference: [docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md)

---

## Artifact Access Chain

```
Origin Repository → Epistemic Layer → Governance Path → Release / DOI Context → Artifact
```

No element in this chain may be omitted. An artifact without its full binding declaration is a governance violation.

---

## A. Governed Analysis Artifacts

Artifacts originating from the canonical analysis kernel and related governed outputs.

**Origin repository:** `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS` (abdelkader-omran)

### Governed Epistemic Output

| Field | Value |
|---|---|
| **Artifact name / label** | Governed Epistemic Output |
| **Origin repository** | AUTO-DZ-ACT-ANALYSIS-3I-ATLAS (abdelkader-omran) |
| **Artifact function / relation** | Primary governed output of the canonical analysis kernel |
| **Epistemic layer** | Layer-1 — execution / analysis |
| **Governance path** | Layer-0 authorization → Layer-1 execution → Layer-2 surface |
| **DOI / Release relation** | DOI-backed release context present (exact identifier not asserted in this document) |
| **Provenance requirement** | Full chain from data input through Layer-1 kernel to Layer-2 required |
| **Site representation note** | Presented within kernel origin context; not standalone |

### `epistemic_state` Artifact

| Field | Value |
|---|---|
| **Artifact name / label** | epistemic_state |
| **Origin repository** | AUTO-DZ-ACT-ANALYSIS-3I-ATLAS (abdelkader-omran) |
| **Artifact function / relation** | Documents the declared epistemic state at a governed analysis execution point |
| **Epistemic layer** | Layer-1 — execution / analysis |
| **Governance path** | Layer-0 authorization → Layer-1 execution → Layer-2 surface |
| **DOI / Release relation** | DOI-backed release context present (exact identifier not asserted in this document) |
| **Provenance requirement** | Origin repository, Layer-0 governance context, and release reference required |
| **Site representation note** | Interpretable only through origin repository and governance context |

---

## B. Operational Snapshot Artifacts

Artifacts tied to daily or periodic snapshot publication flows.

**Origin repository:** `AUTO-DZ-ACT-3I-ATLAS-DAILY` (abdelkader-omran)

### Daily Official Snapshot

| Field | Value |
|---|---|
| **Artifact name / label** | Daily Official Snapshot |
| **Origin repository** | AUTO-DZ-ACT-3I-ATLAS-DAILY (abdelkader-omran) |
| **Artifact function / relation** | Periodic observational snapshot published under the official snapshot flow |
| **Epistemic layer** | Layer-1 — operational snapshot / publication support |
| **Governance path** | Layer-0 authorization → Layer-1 snapshot publication → Layer-2 surface |
| **DOI / Release relation** | Snapshot release context present (exact identifiers not asserted in this document) |
| **Provenance requirement** | Snapshot release reference and origin repository required |
| **Site representation note** | Presented under snapshot origin context; recency does not imply epistemic priority |

### Normalized Observation Record

| Field | Value |
|---|---|
| **Artifact name / label** | Normalized Observation Record |
| **Origin repository** | AUTO-DZ-ACT-3I-ATLAS-DAILY (abdelkader-omran) |
| **Artifact function / relation** | Normalized observational output produced under the snapshot publication flow |
| **Epistemic layer** | Layer-1 — operational snapshot / publication support |
| **Governance path** | Layer-0 authorization → Layer-1 snapshot publication → Layer-2 surface |
| **DOI / Release relation** | Snapshot release context present (exact identifiers not asserted in this document) |
| **Provenance requirement** | Snapshot publication state and governance context required |
| **Site representation note** | Contextualized under snapshot source; not an analysis conclusion |

---

## C. Provenance / Verification Artifacts

Artifacts whose primary role is traceability, validation, hash verification, manifesting, or provenance.

**Origin repositories:** `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS`, `AUTO-DZ-ACT-3I-ATLAS-DAILY` (abdelkader-omran)

### Manifest / Provenance Artifact

| Field | Value |
|---|---|
| **Artifact name / label** | Manifest / Provenance Artifact |
| **Origin repository** | AUTO-DZ-ACT-ANALYSIS-3I-ATLAS or AUTO-DZ-ACT-3I-ATLAS-DAILY (abdelkader-omran) |
| **Artifact function / relation** | Provides hash verification, manifest, or traceability record for a governed release |
| **Epistemic layer** | Layer-1 — execution / analysis or snapshot |
| **Governance path** | Layer-0 authorization → Layer-1 execution → provenance chain → Layer-2 surface |
| **DOI / Release relation** | Release relation documented; DOI status not asserted here for individual provenance artifacts |
| **Provenance requirement** | Source repository, release reference, and governance context required |
| **Site representation note** | Presented as traceability record; not an independent output |

---

## D. Reference / Publication Context

Artifacts or references that explain citation, DOI, release relation, or publication status.

**Origin repositories:** `Auto-dz-act` (trizel-ai), `trizel-site-artifacts` (trizel-ai-site)

### Formal Definition Reference

| Field | Value |
|---|---|
| **Artifact name / label** | Formal Definition Reference |
| **Origin repository** | Auto-dz-act (trizel-ai) |
| **Artifact function / relation** | Canonical formal definition reference; read-only reference anchor |
| **Epistemic layer** | Reference / formal definition layer |
| **Governance path** | Layer-0 governance → reference layer → Layer-2 surface |
| **DOI / Release relation** | DOI status not asserted in this document |
| **Provenance requirement** | Reference status and governance anchor context required |
| **Site representation note** | Reference anchor only; not a scientific output or analysis source |

### Citation / DOI Context

| Field | Value |
|---|---|
| **Artifact name / label** | Citation / DOI Context |
| **Origin repository** | trizel-site-artifacts (trizel-ai-site) |
| **Artifact function / relation** | Site repository DOI for archival citation; does not confer governance or scientific authority |
| **Epistemic layer** | Site surface |
| **Governance path** | Layer-2 presentation only |
| **DOI / Release relation** | DOI: 10.5281/zenodo.18636150 (site repository, archival context) |
| **Provenance requirement** | Site repository role must be read together with declared layer |
| **Site representation note** | Site-surface citation context only; not an analysis or governance artifact |

---

## Provenance Rule Block

No artifact may be interpreted without:

1. **Origin repository** — the specific repository that produced the artifact, identified by name and organization
2. **Provenance path** — the full chain from data input through Layer-1 execution to Layer-2 presentation
3. **Layer attribution** — the explicit epistemic layer under which the artifact was produced
4. **Governance context** — the Layer-0 authorization under which the artifact was approved
5. **Release / DOI relation** — the release, tag, or snapshot state and persistent identifier where applicable

An artifact presented without all five binding fields is a governance violation.

---

## DOI / Release Interpretation

- DOI presence does not imply equal artifact authority. Each DOI must be read together with the origin repository's declared role and epistemic layer.
- Release relation must be read together with repository role. A snapshot release does not carry the same authority as a canonical kernel release.
- Artifact visibility does not imply scientific conclusion. Presence on this surface does not constitute scientific endorsement or validation.
- Publication state does not replace provenance. A published artifact requires full provenance context regardless of publication state.

See [docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md §E](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md) for the full DOI / release rules.

---

*Layer-2 Epistemic Surface — SITE_DEPENDENCY_ORDER.md compliance — See REPOSITORY_DOI_ARTIFACT_MAPPING.md for the canonical artifact binding rules*
