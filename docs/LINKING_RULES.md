# LINKING RULES

## Classification

**Document Type:** Semantic Definition  
**Layer:** Layer-3 (System Linking & Repository Topology)  
**Status:** Static, read-only, non-operational  
**Date:** 2026-01-19

---

## Purpose

This document defines **what linking means and does NOT mean** in the context of Layer-3.

**Linking is structural reference, not operational connection.**

---

## What is a Link?

In Layer-3, a **link** is:

- A **static, hand-authored reference** between system components
- A **structural relationship** for navigation and understanding
- A **non-operational connection** with no execution semantics
- A **read-only association** for display purposes only

**A link is NOT an API call, data flow, or system integration.**

---

## Link Types

### Repository Links

**Definition:** References between TRIZEL repositories

**Examples:**
- `trizel-core` → `trizel-lab` (governance relationship)
- `trizel-lab` → `trizel-site` (informational relationship)
- `trizel-site` → `trizel-core` (reference relationship)

**Semantics:**
- **Descriptive only** — No data flow
- **Navigational** — Helps users find related repositories
- **Structural** — Shows organizational relationships

**NOT:**
- API connections
- Data synchronization
- Operational dependencies
- Execution pathways

---

### Organizational Links

**Definition:** References between GitHub accounts and repositories

**Examples:**
- `trizel-ai-site` → `trizel-core` (ownership)
- `trizel-ai-site` → `trizel-lab` (ownership)
- `trizel-ai-site` → `trizel-site` (ownership)

**Semantics:**
- **Ownership structure** — Shows repository ownership
- **Organizational hierarchy** — Displays account relationships
- **Non-operational** — No system behavior

**NOT:**
- Access control
- Permission management
- Authentication logic
- Authorization flows

---

### Layer Links

**Definition:** References between different layers of the TRIZEL system

**Examples:**
- Layer-0 → Layer-1 (governance flow)
- Layer-1 → Layer-2 (informational flow)
- Layer-2 → Layer-2.5 (extension relationship)
- Layer-2.5 → Layer-3 (extension relationship)

**Semantics:**
- **Authority flow** — Shows governance hierarchy
- **Informational flow** — Shows reference relationships
- **Structural extension** — Shows subsystem relationships
- **Non-operational** — No execution semantics

**NOT:**
- Data pipelines
- System integration
- Operational dependencies
- Execution order

---

### Cross-Reference Links

**Definition:** References from one component to another for context

**Examples:**
- `trizel-site` → `docs/LAYER_BOUNDARIES.md` (internal reference)
- `trizel-site` → `https://github.com/trizel-ai-site/trizel-core` (external reference)
- `atlas/` → `trizel-lab` (epistemic reference)

**Semantics:**
- **Documentation links** — For human navigation
- **Contextual references** — Provides additional information
- **Non-executable** — Display purposes only

**NOT:**
- Hypertext transfer protocol execution
- Dynamic content loading
- API requests
- Data fetching

---

## What Links DO

Links in Layer-3 provide:

### 1. Structural Visibility
- Show how repositories relate to each other
- Display organizational hierarchy
- Map layer relationships

### 2. Navigation Assistance
- Help users find related resources
- Provide context for system components
- Enable discovery of documentation

### 3. Relationship Documentation
- Document ownership structures
- Record governance flows
- Map informational relationships

### 4. System Overview
- Present high-level architecture
- Show component relationships
- Provide topology visualization

---

## What Links DO NOT DO

Links in Layer-3 **absolutely DO NOT**:

### 1. Execute Operations
- No function calls
- No method invocations
- No script execution
- No automation triggers

### 2. Transfer Data
- No data flows
- No information exchange
- No synchronization
- No replication

### 3. Integrate Systems
- No API calls
- No service connections
- No inter-process communication
- No network requests

### 4. Perform Validation
- No data validation
- No schema checking
- No integrity verification
- No consistency enforcement

### 5. Enable Interaction
- No click handlers with logic
- No dynamic behavior
- No state changes
- No user input processing (beyond simple navigation)

### 6. Fetch Metadata
- No repository introspection
- No commit history retrieval
- No contributor information
- No statistics or metrics

### 7. Provide Analytics
- No usage tracking
- No metrics collection
- No performance monitoring
- No activity analysis

### 8. Infer Relationships
- No automatic discovery
- No pattern detection
- No relationship inference
- No dynamic updates

---

## Link Semantics

### Governance Relationship

**Notation:** `A [governs] B`

**Meaning:** A establishes policies that B must follow

**Examples:**
- trizel-core [governs] trizel-lab
- trizel-core [governs] trizel-site

**Semantics:**
- **Authority flow** — A has decision-making power over B
- **Policy enforcement** — B operates under A's constraints
- **Non-operational** — No runtime enforcement

---

### Informational Relationship

**Notation:** `A [informs] B`

**Meaning:** A provides content that B references

**Examples:**
- trizel-lab [informs] trizel-site
- research-documentation [informs] presentation-interface

**Semantics:**
- **Content flow** — B references materials from A
- **Descriptive only** — No data transfer
- **Non-operational** — No system integration

---

### Reference Relationship

**Notation:** `A [references] B`

**Meaning:** A links to B for context or navigation

**Examples:**
- trizel-site [references] trizel-core
- presentation-interface [references] governance-framework

**Semantics:**
- **Navigational** — Helps users find B from A
- **Contextual** — Provides additional information
- **Non-operational** — Display purposes only

---

### Extension Relationship

**Notation:** `A [extends] B`

**Meaning:** B is a subsystem or component of A

**Examples:**
- trizel-site [extends] atlas/
- Layer-2 [extends] Layer-2.5
- Layer-2.5 [extends] Layer-3

**Semantics:**
- **Structural hierarchy** — B is part of A's scope
- **Shared constraints** — B inherits A's limitations
- **Non-operational** — No execution dependencies

---

### Ownership Relationship

**Notation:** `A [owns] B`

**Meaning:** A is the organizational owner of B

**Examples:**
- trizel-ai-site [owns] trizel-core
- trizel-ai-site [owns] trizel-lab
- trizel-ai-site [owns] trizel-site

**Semantics:**
- **Organizational structure** — Shows GitHub ownership
- **Administrative** — Organizational hierarchy only
- **Non-operational** — No access control logic

---

## Link Representation

### In Documentation

Links in documentation are represented as:

- **Markdown hyperlinks** — `[text](url)`
- **Structural descriptions** — "Repository A governs Repository B"
- **Relationship diagrams** — ASCII or text-based flow charts

### In JSON Data

Links in topology.json are represented as:

```json
{
  "source": "repository-id",
  "target": "repository-id",
  "relationship": "governs"
}
```

**Properties:**
- `source` — Origin component ID
- `target` — Destination component ID
- `relationship` — Semantic relationship type

**No additional metadata.**

### In HTML

Links in HTML are represented as:

- **Hyperlinks** — `<a href="url">text</a>`
- **Visual elements** — Text descriptions or simple graphics
- **Non-interactive** — Minimal JavaScript for navigation only

**No dynamic rendering or API calls.**

---

## Link Constraints

### Static Only

All links are:
- **Hand-authored** — Manually created
- **Pre-validated** — Validated at creation time
- **Immutable** — No dynamic updates
- **Non-discoverable** — No automatic generation

### Read-Only

All links are:
- **Display purposes only** — No modification capabilities
- **Non-operational** — No execution semantics
- **Informational** — For human understanding only

### No Live Data

All links:
- **Do NOT fetch data** — No API calls
- **Do NOT update dynamically** — No live changes
- **Do NOT introspect repositories** — No metadata queries
- **Do NOT perform analysis** — No computation

---

## Prohibited Link Behaviors

Layer-3 links **MUST NOT**:

1. **Execute code** — No function calls or script execution
2. **Transfer data** — No information exchange between systems
3. **Integrate APIs** — No external service connections
4. **Fetch metadata** — No repository introspection
5. **Perform analytics** — No metrics or statistics
6. **Enable search** — No query or filter capabilities
7. **Infer relationships** — No automatic discovery
8. **Update dynamically** — No live data changes
9. **Validate data** — No schema or integrity checks
10. **Control access** — No authentication or authorization

**Links are for reference and navigation only.**

---

## Authoritative Reference

For complete governance authority, institutional notices, and Layer-3 constraints, see:

**[LAYER_3_PHASE_DECLARATION.md](LAYER_3_PHASE_DECLARATION.md)** — Authoritative phase declaration

---

**Linking Rules** — Static — Read-only — Non-operational — Display-only — No authority — No execution
