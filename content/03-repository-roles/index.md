# Repository Roles & Governance Mapping

**Layer:** Layer-2 — Epistemic Surface  
**Status:** Canonical Scaffold  
**Dependency:** [01 — Epistemic Positioning](/content/01-positioning/) → [02 — System Architecture](/content/02-architecture/)

---

**Context:** Positioning → Architecture → **Repository Roles** → Artifacts

---

## Repository Role Mapping

Repositories within the TRIZEL system are not interchangeable. Each is assigned a specific role within the epistemic layer structure. Repositories are **not presented as flat or unordered lists**.

### Governance / Constitutional Authority
- Establishes binding rules and policy
- Source of Layer-0 authority
- Example: `trizel-core`

### Operational Governance
- Implements and enforces Layer-0 policies at an operational level
- Manages approval flows for artifacts

### Execution / Analysis
- Performs scientific analysis under Layer-0 authorization
- Produces artifacts that flow to Layer-2 after approval
- Operates at Layer-1; not public-facing

### Publication / Site Surface
- Presents approved artifacts to the public
- Read-only; no execution authority
- Example: `trizel-site-artifacts` (this repository)

### Definition / Reference
- Contains canonical definitions, schemas, and reference materials
- Governance-pinned; not subject to modification without Layer-0 approval

### Archive / Snapshot
- Immutable records of prior system states and approved releases
- Provenance-anchored; cryptographically verifiable where applicable

---

## Authority Flow

```
Layer-0 (trizel-core) → Operational Governance → Layer-1 Execution → Layer-2 Presentation
```

No repository may self-authorize content for public presentation. Authority flows top-down from Layer-0.

---

## Why Repositories Are Not Displayed Flat

A flat repository list conveys no epistemic structure. It implies all repositories are equivalent. They are not.

Repository presentation on this site must express:
- Role category
- Epistemic layer
- Governance relationship

---

*Canonical stub — Layer-2 Epistemic Surface — SITE_DEPENDENCY_ORDER.md compliance*
