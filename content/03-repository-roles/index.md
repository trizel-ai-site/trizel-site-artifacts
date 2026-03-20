# Repository Roles & Governance Mapping

**Layer:** Layer-2 — Epistemic Surface  
**Status:** Authoritative  
**Dependency:** [01 — Epistemic Positioning](/content/01-positioning/) → [02 — System Architecture](/content/02-architecture/)  
**Canonical Reference:** [REPOSITORY_DOI_ARTIFACT_MAPPING.md](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md)

---

**Context:** Positioning → Architecture → **Repository Roles** → Artifacts

---

## Mapping Model Summary

Repository roles within the TRIZEL system are governed by a canonical mapping chain:

```
Repository → Role → Epistemic Layer → Release / DOI Status → Artifact Responsibility → Site Surface Representation
```

Repositories are **not presented as flat or unordered lists**. Each repository is assigned a single role, mapped to an epistemic layer, and presented only within that structure.

The authoritative mapping is maintained in [docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md).

---

## Role Categories

### Constitutional / Epistemic Authority (Layer-0)
- Source of binding governance rules and epistemic identity
- Not an artifact surface; not a scientific output source
- Example: `trizel-epistemic-engine`

### Operational Governance (Layer-0 / Governance)
- Implements and enforces Layer-0 policies at an operational level
- Manages approval flows for artifacts
- Example: `trizel-core`

### Execution / Analysis (Layer-1)
- Performs scientific analysis under Layer-0 authorization
- Produces artifacts that flow to Layer-2 after governance approval
- Operates at Layer-1; not public-facing
- Examples: `AUTO-DZ-ACT-ANALYSIS-3I-ATLAS` (frozen canonical kernel), `AUTO-DZ-ACT-3I-ATLAS-DAILY` (snapshot source)

### Definition / Reference (Reference / Formal Definition Layer)
- Contains canonical definitions, schemas, and reference materials
- Governance-pinned; read-only reference
- Example: `Auto-dz-act`

### Site Surface / Publication (Layer-2)
- Presents approved artifacts to the public
- Read-only; no execution authority; no governance authority
- Example: `trizel-site-artifacts` (this repository)

---

## Authority Flow

```
Layer-0 (trizel-epistemic-engine / trizel-core)
→ Operational Governance
→ Layer-1 Execution
→ Layer-2 Presentation
```

No repository may self-authorize content for public presentation. Authority flows top-down from Layer-0.

---

## DOI / Release Context

Some repositories carry DOI-backed releases. DOI presence does not imply epistemic equivalence across repositories. A DOI must always be interpreted together with the repository's declared role and epistemic layer.

See [docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md](/docs/REPOSITORY_DOI_ARTIFACT_MAPPING.md) — Section E for the full DOI / release rules.

---

*Layer-2 Epistemic Surface — SITE_DEPENDENCY_ORDER.md compliance — See REPOSITORY_DOI_ARTIFACT_MAPPING.md for the canonical mapping*
