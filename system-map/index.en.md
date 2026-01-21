# TRIZEL — Public System Map (Static)

**This site is presentation-only; no execution, no runtime metrics.**

---

## Overview

This page provides a static, read-only map of the TRIZEL system structure. It shows how repositories, layers, and control mechanisms interact under strict governance separation.

**Purpose:** Orientation and reference for visitors  
**Authority:** None — This is a descriptive map only  
**Status:** Static documentation (no live data)

---

## System Diagram

![TRIZEL System Map](trizel-system-map.svg)

*Figure: TRIZEL three-layer architecture with control plane and publication gateway*

---

## Layer Definitions

The TRIZEL system operates under **strict layer separation** with clear boundaries and authorities:

### Layer-0: Governance / Authority

**Repository:** [`trizel-ai/trizel-core`](https://github.com/trizel-ai/trizel-core)

**Role:** Establishes policies, standards, and governance framework for the entire TRIZEL system.

**Functions:**
- Define system-wide policies and constraints
- Establish layer separation rules
- Maintain governance documentation
- Provide final decision-making authority

**Authority:** **FINAL AND BINDING**

---

### Layer-1: Internal Research & Execution

**Repositories:**
- [`trizel-ai/trizel-lab`](https://github.com/trizel-ai/trizel-lab) (private) — Research documentation and provenance
- `trizel-ai/*` engines — Internal research systems
- `abdelkader-omran/AUTO-DZ-ACT-*` — Research pipelines and automation

**Role:** Conducts internal research, analysis, and technical execution under Layer-0 governance.

**Functions:**
- Execute research projects and experiments
- Produce scientific findings and analysis
- Maintain research provenance
- Perform validation and verification
- Archive research artifacts

**Authority:** **SCIENTIFIC AND TECHNICAL EXECUTION**

**Access:** Internal operations (not public-facing)

---

### Layer-2: Public Presentation / Artifacts

**Repository:** [`trizel-ai-site/trizel-site-artifacts`](https://github.com/trizel-ai-site/trizel-site-artifacts) (this repo)

**Role:** Public-facing presentation and orientation without any research or governance authority.

**Functions:**
- Display structural information about TRIZEL
- Provide static documentation and maps
- Reference authoritative Layer-0 and Layer-1 sources
- Maintain institutional visual identity

**Authority:** **NONE — PRESENTATION ONLY**

**Key Constraints:**
- No scientific authority or research claims
- No governance power or policy-making
- No interpretation of Layer-1 research
- No code execution or dynamic content
- No analytics or runtime metrics
- Static, read-only artifacts only

---

## Control & Publication Mechanisms

### Gate: Phase-E Gateway

**Repository:** [`trizel-ai-site/phase-e-gateway`](https://github.com/trizel-ai-site/phase-e-gateway)

**Role:** Human-approval gateway for artifact publication (fail-closed).

**Functions:**
- Review artifacts before public exposure
- Enforce validation requirements
- Maintain fail-closed publication policy
- Require explicit human approval

**Status:** Fail-closed — No automatic publication

---

### Control Plane: TRIZEL Admin

**System:** `trizel-admin`

**Role:** Permissions, approvals, and access control management.

**Functions:**
- Manage repository permissions
- Approve exposure changes
- Enforce access policies
- Maintain security boundaries

**Authority:** Administrative control (under Layer-0 governance)

---

## Non-Negotiable Principles

The TRIZEL system operates under these **immutable principles**:

1. **Strict Separation of Concerns**
   - Governance, execution, and presentation are separate layers
   - No repository performs two roles
   - Boundaries are enforced and non-negotiable

2. **Authority Flows Downward Only**
   - Layer-0 governs Layer-1 and Layer-2
   - Layer-1 informs Layer-2 through validated artifacts
   - Layer-2 displays but does not interpret

3. **No Runtime in Public Repositories**
   - Layer-2 (this repository) contains static artifacts only
   - No JavaScript execution, no API calls, no metrics collection
   - No build processes or dynamic content generation

4. **Fail-Closed Publication**
   - All public artifacts must pass through Phase-E Gateway
   - Human approval required before exposure
   - Default state is non-published

5. **Human Approval Required**
   - No automatic publication of research artifacts
   - Manual review and validation before public exposure
   - Explicit approval from authorized personnel

---

## What Can Be Published Here

This repository (`trizel-site-artifacts`) contains **approved static artifacts only**:

### Allowed Content

- ✅ **Static documentation** (Markdown files)
- ✅ **System maps and diagrams** (SVG, PNG)
- ✅ **Structural descriptions** (no interpretation)
- ✅ **References to authoritative sources** (links to Layer-0 and Layer-1)
- ✅ **Visual identity assets** (logos, design system)

### Explicitly Prohibited

- ❌ **No code execution** (no JavaScript, no runtime logic)
- ❌ **No analytics or metrics** (no tracking, no counters)
- ❌ **No dynamic content** (no API calls, no live data)
- ❌ **No build processes** (no bundlers, no automation)
- ❌ **No scientific claims** (no research findings)
- ❌ **No interpretation** (no analysis of Layer-1 research)

---

## Validation Flow

```
Layer-1 Research
      ↓
[Validation & Review]
      ↓
Phase-E Gateway
(Human Approval Required)
      ↓
[Approval Decision]
      ↓
Layer-2 Publication
(Static Artifacts Only)
```

**Key Point:** No artifact reaches Layer-2 without explicit validation and human approval.

---

## System Architecture Summary

**Authority Structure:**
```
Layer-0 (trizel-core)
   ↓ [governs]
Layer-1 (trizel-lab, engines, pipelines)
   ↓ [produces validated artifacts]
[Phase-E Gateway — Human Approval]
   ↓ [approved artifacts only]
Layer-2 (trizel-site-artifacts)
   ↓ [presents to]
Public Visitors
```

**Control Structure:**
```
trizel-admin (Control Plane)
   ↓ [manages permissions]
All Repositories
   ↓ [enforces]
Access Policies & Security Boundaries
```

---

## Institutional Compliance

This system map represents the **actual operational structure** of TRIZEL as of 2026.

**Layer Classification:** This document is Layer-2 (presentation-only)  
**Authority:** None — Descriptive reference only  
**Governance Source:** Layer-0 (trizel-core)  
**Status:** Static documentation (no operational role)

For questions regarding:
- **Governance matters** → Refer to Layer-0 ([trizel-core](https://github.com/trizel-ai/trizel-core))
- **Research inquiries** → Contact through appropriate channels (not public)
- **Presentation issues** → This repository

---

## Language Notes

**Primary Language:** English (EN)  
**Status:** Canonical reference

*Note: Arabic and other language versions may be added in future phases if required by institutional policy.*

---

**Layer-2 Repository** — Presentation-Only — No Execution — No Metrics — No Authority

**System Map** — Static Documentation — Read-Only — Non-Operational
