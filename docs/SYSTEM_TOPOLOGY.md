# SYSTEM TOPOLOGY

## Classification

**Document Type:** System Architecture Reference  
**Layer:** Layer-3 (System Linking & Repository Topology)  
**Status:** Static, read-only, non-operational  
**Date:** 2026-01-19

---

## Purpose

This document provides a **static, hand-authored description** of the TRIZEL system topology, including:

- GitHub accounts and organizations
- Repository structure across layers
- Cross-layer relationships
- System-level architecture

**This is a descriptive reference, not an operational schema.**

---

## GitHub Organizations

### trizel-ai-site

**Primary Organization:** `trizel-ai-site`  
**URL:** https://github.com/trizel-ai-site  
**Purpose:** TRIZEL system repositories

**Repositories:**

- **trizel-core** — Layer-0: Governance & Authority
- **trizel-lab** — Layer-1: Research Documentation
- **trizel-site** — Layer-2/2.5/3: Presentation & Topology

---

## Repository Topology

### Layer-0: Governance / Authority

**Repository:** `trizel-core`  
**URL:** https://github.com/trizel-ai-site/trizel-core  
**Owner:** trizel-ai-site organization  
**Role:** Governance framework and policy authority

**Functions:**
- Establishes policies and standards
- Defines governance framework
- Provides authoritative decisions
- Maintains layer separation rules

**Authority:** Final decision-making power

---

### Layer-1: Internal Research & Analysis

**Repository:** `trizel-lab`  
**URL:** https://github.com/trizel-ai-site/trizel-lab  
**Owner:** trizel-ai-site organization  
**Role:** Research documentation

**Functions:**
- Documents internal research
- Archives analysis artifacts
- Maintains research provenance
- Provides scientific content

**Authority:** Scientific and technical execution

**Additional Layer-1 Systems** (referenced, not in this topology):
- `trizel-AI` — Internal research systems
- `trizel-monitor` — Analysis tools

---

### Layer-2: Presentation / Display

**Repository:** `trizel-site`  
**URL:** https://github.com/trizel-ai-site/trizel-site  
**Owner:** trizel-ai-site organization  
**Role:** Public-facing presentation

**Functions:**
- Provides institutional presentation
- Maintains multilingual interface
- Offers navigation to Layer-0 and Layer-1
- Describes system structure

**Authority:** **NONE** (presentation-only)

**Content Structure:**
- `/en/`, `/fr/`, `/ar/`, `/zh/`, `/ru/` — Language-specific pages
- `/docs/` — Documentation
- `/assets/` — Stylesheets and minimal JavaScript
- `/i18n/` — Translation data

---

### Layer-2.5: System Interface / Epistemic Atlas

**Location:** `trizel-site/atlas/`  
**URL:** https://trizel.ai/atlas/  
**Role:** Static epistemic mapping interface

**Functions:**
- Displays epistemic relationships
- Maps repository → artifact → evidence
- Provides structural overview
- References authoritative sources

**Authority:** **NONE** (display-only)

**Content Structure:**
- `/atlas/index.html` — Language selector
- `/atlas/map.json` — Static relationships
- `/atlas/sources.json` — Repository references
- `/atlas/en/`, `/atlas/fr/`, etc. — Language-specific interfaces

---

### Layer-3: System Linking & Repository Topology

**Location:** `trizel-site/topology/`  
**URL:** https://trizel.ai/topology/  
**Role:** System topology visibility

**Functions:**
- Displays repository relationships
- Maps organizational structure
- Shows account associations
- Provides system-level overview

**Authority:** **NONE** (display-only)

**Content Structure:**
- `/topology/index.html` — Static topology page
- `/topology/topology.json` — Hand-authored relationships

---

## Cross-Layer Relationships

### Authority Flow

```
Layer-0 (trizel-core)
   ↓ [governs]
Layer-1 (trizel-lab, trizel-AI, trizel-monitor)
   ↓ [informs]
Layer-2 (trizel-site — presentation pages)
   ↓ [extends with]
Layer-2.5 (atlas/ — epistemic mapping)
   ↓ [extends with]
Layer-3 (topology/ — system linking)
```

**Authority flows unidirectionally from Layer-0.**

---

### Repository Relationships

**trizel-core governs:**
- trizel-lab (research policy)
- trizel-site (presentation constraints)

**trizel-lab informs:**
- trizel-site (research references)
- atlas/ (epistemic artifacts)

**trizel-site references:**
- trizel-core (governance documents)
- trizel-lab (research repositories)

**atlas/ displays:**
- Epistemic relationships
- Artifact provenance
- Evidence structure

**topology/ displays:**
- Repository links
- Organizational structure
- System architecture

---

## Account Associations

### Organizational Accounts

**trizel-ai-site**
- Type: GitHub Organization
- Repositories: trizel-core, trizel-lab, trizel-site
- Role: Primary TRIZEL organization

---

## Layer Boundaries

### Layer-0: Governance
- **Authority:** Final decision-making power
- **Function:** Policy establishment
- **Scope:** System-wide governance

### Layer-1: Research
- **Authority:** Scientific and technical execution
- **Function:** Research production
- **Scope:** Internal research operations

### Layer-2: Presentation
- **Authority:** **NONE**
- **Function:** Public presentation
- **Scope:** Display-only interface

### Layer-2.5: System Interface
- **Authority:** **NONE**
- **Function:** Epistemic mapping
- **Scope:** Static relationship display

### Layer-3: System Linking
- **Authority:** **NONE**
- **Function:** Topology visibility
- **Scope:** Repository relationship display

---

## Topology Constraints

### What Layer-3 Shows

- Static repository structure
- Organizational hierarchy
- Cross-layer references
- Hand-authored relationships

### What Layer-3 Does NOT Show

- Live repository data
- Commit history or activity
- Contributor information
- Analytics or metrics
- Dynamic updates
- API-fetched metadata
- Repository introspection
- Search or filter results

**All data is static and hand-authored.**

---

## Data Sources

All topology data is:
- **Hand-authored** — Manually created
- **Static** — No live updates
- **Pre-validated** — Validated at creation
- **Read-only** — No modification capabilities

**No data is fetched from GitHub APIs or repositories.**

---

## Immutability

This topology is:
- **Frozen at declaration** — No dynamic updates
- **Non-operational** — No execution logic
- **Display-only** — Presentation purposes only

**Changes require explicit governance approval and manual updates.**

---

## Multilingual Support

Topology documentation is available in:
- **English (EN)** — Canonical reference
- **Other languages** — Optional in future phases

**English is the authoritative language for this phase.**

---

## Authoritative Reference

For complete governance authority, institutional notices, and Layer-3 constraints, see:

**[LAYER_3_PHASE_DECLARATION.md](LAYER_3_PHASE_DECLARATION.md)** — Authoritative phase declaration

---

**System Topology** — Static — Read-only — Non-operational — Display-only — No authority
