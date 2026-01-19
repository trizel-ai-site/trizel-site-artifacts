# ATLAS SCHEMA DOCUMENTATION

## Purpose

This document describes the **read-only schema** used by the Layer-2.5 Epistemic Atlas. The schema defines how system components, artifacts, and evidence are statically mapped for display purposes only.

**Display-only** — This schema is for presentation. It performs no validation, analysis, or processing.

---

## Schema Files

### 1. map.json

**Purpose:** Static mapping of relationships between system components.

**Structure:**
```json
{
  "version": "1.0.0",
  "generated": "2026-01-19T09:43:00Z",
  "description": "Static epistemic relationships in TRIZEL system",
  "nodes": [
    {
      "id": "string",
      "type": "repository|artifact|evidence|publication",
      "name": "string",
      "description": "string",
      "url": "string (optional)"
    }
  ],
  "edges": [
    {
      "source": "string (node id)",
      "target": "string (node id)",
      "relationship": "produces|references|validates|documents"
    }
  ]
}
```

**Field Definitions:**

- **version**: Schema version (semantic versioning)
- **generated**: Timestamp of last manual update (ISO 8601)
- **description**: Human-readable description of the map
- **nodes**: Array of system components
  - **id**: Unique identifier (kebab-case)
  - **type**: Component type (repository, artifact, evidence, publication)
  - **name**: Display name
  - **description**: Brief description (presentation-only)
  - **url**: Optional reference URL (typically to Layer-0 or Layer-1)
- **edges**: Array of relationships between nodes
  - **source**: ID of source node
  - **target**: ID of target node
  - **relationship**: Type of relationship (descriptive only)

**Constraints:**
- All IDs must be unique within nodes array
- All edge source/target references must exist in nodes array
- No circular references that imply causal loops
- Relationships are descriptive, not executable

---

### 2. sources.json

**Purpose:** Static reference mapping from repositories to artifacts to evidence.

**Structure:**
```json
{
  "version": "1.0.0",
  "generated": "2026-01-19T09:43:00Z",
  "description": "Repository to artifact to evidence mapping",
  "repositories": [
    {
      "id": "string",
      "name": "string",
      "layer": "Layer-0|Layer-1",
      "url": "string",
      "description": "string",
      "artifacts": [
        {
          "id": "string",
          "type": "document|code|data|publication",
          "name": "string",
          "description": "string",
          "path": "string (optional)",
          "evidence": [
            {
              "id": "string",
              "type": "commit|file|document|publication",
              "description": "string",
              "reference": "string (URL or path)"
            }
          ]
        }
      ]
    }
  ]
}
```

**Field Definitions:**

- **version**: Schema version
- **generated**: Timestamp of last manual update (ISO 8601)
- **description**: Human-readable description
- **repositories**: Array of TRIZEL repositories
  - **id**: Repository identifier
  - **name**: Repository display name
  - **layer**: Governance layer (Layer-0 or Layer-1)
  - **url**: Repository URL
  - **description**: Brief description
  - **artifacts**: Array of artifacts produced by repository
    - **id**: Artifact identifier
    - **type**: Artifact type
    - **name**: Artifact display name
    - **description**: Brief description
    - **path**: Optional path within repository
    - **evidence**: Array of evidence supporting artifact
      - **id**: Evidence identifier
      - **type**: Evidence type
      - **description**: Brief description
      - **reference**: URL or path to evidence

**Constraints:**
- All IDs must be unique within their scope
- Repository URLs must be valid GitHub URLs
- All references must point to authoritative sources (Layer-0 or Layer-1)
- No speculative or unverified information

---

## Data Validation Rules

### Pre-Validation Requirements

All data in map.json and sources.json must be:

1. **Pre-validated** — Validated at Layer-0 or Layer-1 before inclusion
2. **Authoritative** — Sourced from canonical repositories only
3. **Static** — No dynamic updates or live data
4. **Verifiable** — All references must be checkable by humans

### Prohibited Content

The following are **explicitly prohibited** in schema data:

- Unverified claims
- Speculative relationships
- Dynamic data sources
- API endpoints
- Live data integrations
- Interpretative statements
- Scientific conclusions
- Performance metrics
- Quality assessments
- Predictive information

---

## Relationship Types

The following relationship types are permitted in map.json edges:

### produces
- **Meaning:** Source repository produces target artifact
- **Example:** trizel-lab → research-document-001

### references
- **Meaning:** Source component references target component
- **Example:** artifact-001 → publication-002

### validates
- **Meaning:** Source evidence validates target artifact
- **Example:** commit-abc123 → governance-policy-v1

### documents
- **Meaning:** Source artifact documents target component
- **Example:** readme → repository-structure

**Note:** These relationships are descriptive only. They do not imply execution, causation, or logical inference.

---

## Artifact Types

Permitted artifact types in sources.json:

- **document** — Textual documentation
- **code** — Source code or scripts
- **data** — Data files or datasets (reference only, no data included)
- **publication** — Published materials (DOI or URL reference)

---

## Evidence Types

Permitted evidence types in sources.json:

- **commit** — Git commit reference
- **file** — File in repository
- **document** — Documentation artifact
- **publication** — Published material

---

## Schema Versioning

Schema follows semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR:** Breaking changes to structure
- **MINOR:** Backward-compatible additions
- **PATCH:** Clarifications or corrections

**Current Version:** 1.0.0

---

## Manual Update Process

**Important:** All schema files are manually maintained. There is no automated generation or validation.

When updating schema files:

1. Verify all data at source (Layer-0 or Layer-1)
2. Update relevant fields in map.json or sources.json
3. Update `generated` timestamp
4. Verify JSON syntax validity
5. Commit with descriptive message
6. Do NOT add unverified or speculative data

---

## Display-Only Constraints

**Layer-2.5 does NOT:**
- Validate data integrity
- Check reference validity
- Perform consistency checks
- Execute transformations
- Generate derived data
- Interpret relationships
- Make inferences

**Layer-2.5 ONLY:**
- Displays pre-validated static data
- Renders relationships visually
- Provides human-readable interface
- Links to authoritative sources

---

## Governance Compliance

This schema is governed by the same policies as Layer-2:
- Subordinate to Layer-0 (trizel-core)
- Non-authoritative
- Non-scientific
- Presentation-only
- No publication value
- No citation authority

All data must be traceable to Layer-0 or Layer-1 sources.

---

## Institutional Notice

**Non-scientific** — Schema describes presentation structure only.

**No authority** — Schema has no validation or enforcement power.

**No interpretation** — Relationships are descriptive, not analytical.

**Display-only** — Schema serves presentation purposes exclusively.

---

**Atlas Schema** — Read-only — Display-only — Non-authoritative — No validation — No execution
