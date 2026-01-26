# REPOSITORY VISIBILITY RULES

**Repository:** trizel-ai-site/trizel-site-artifacts  
**Classification:** Publication-Support Repository  
**Authority:** Layer-0 Governance (trizel-core)  
**Date:** 2026-01-26  

---

## Purpose

This document clarifies the relationship between repository activity, internal workflows, and published results in the TRIZEL system.

---

## Core Principle: Repository Activity ≠ Published Results

**Repository activity does not constitute published results.**

The presence of files, commits, branches, or development activity in this repository does not imply:
- Scientific conclusions have been reached
- Results are ready for publication
- Analysis has been completed
- Findings are endorsed or validated
- Content is citable or authoritative

Repository activity reflects **workflow states**, **governance processes**, and **institutional documentation**, not scientific outputs.

---

## Publication Eligibility Criteria

### Closed and Declared Artifacts Only

Only artifacts that meet **all** of the following criteria are eligible for publication consideration:

1. **Closed Status**
   - Development completed and frozen
   - No ongoing modifications
   - Governance review finalized

2. **Explicit Declaration**
   - Formally declared as publication-ready
   - Layer-0 authorization documented
   - Publication scope explicitly defined

3. **Institutional Review**
   - Quality assurance completed
   - Compliance verification passed
   - Governance approval obtained

4. **Provenance Documentation**
   - Full audit trail available
   - Source attribution complete
   - Methodology documented

**Artifacts not meeting ALL criteria are not eligible for publication, regardless of repository presence.**

---

## Website Display vs Internal Workflows

### What the Website Shows

The TRIZEL public website (trizel-site-artifacts) displays:

- **Status Information:** Current governance phase and repository classification
- **Provenance Records:** Origin, authority, and institutional context of materials
- **Structural Documentation:** System architecture and component relationships
- **Reference Materials:** External links to authoritative sources (Layer-0, Layer-1)
- **Navigation Aids:** Tools for understanding the system structure

### What the Website Does NOT Show

The website explicitly does **NOT** display:

- ❌ **Internal Development Workflows:** Work-in-progress, experimental branches, or draft content
- ❌ **Raw GitHub Actions Runs:** CI/CD logs, automated test outputs, or deployment histories
- ❌ **Execution Traces:** Runtime behavior, performance metrics, or debugging information
- ❌ **Analytical Results:** Scientific findings, statistical outputs, or interpretative conclusions
- ❌ **Unpublished Data:** Intermediate datasets, temporary files, or unapproved content

### Separation Rationale

This separation ensures:
- **Scientific Integrity:** Only validated, approved content reaches public view
- **Governance Compliance:** Layer-0 controls what becomes publication-eligible
- **Quality Assurance:** Internal iteration does not compromise external presentation
- **Institutional Standards:** Professional presentation maintained at all times

---

## Repository Classification

This repository is classified as **Layer-2 Presentation / Display Only** with the following constraints:

### Layer-2 Scope
- Static presentation of approved materials
- Navigation and orientation support
- Institutional documentation display
- External reference provision

### Layer-2 Prohibitions
- No scientific authority
- No analytical execution
- No live data integration
- No real-time processing

### Authority Hierarchy
- **Layer-0 (trizel-core):** Governance authority and final decisions
- **Layer-1 (research repos):** Execution, analysis, and validation
- **Layer-2 (this repo):** Presentation surface only, zero authority

---

## Visibility Control Mechanism

### Repository-Level Controls
- `.gitignore` excludes build artifacts and temporary files
- Private branches restrict access to work-in-progress
- Public branches contain only frozen, approved content

### Publication-Level Controls
- Website builds from specific declared artifacts
- Internal workflow files not exposed to public view
- Layer-0 approval required for content publication

### Governance-Level Controls
- All publication decisions subject to Layer-0 authority
- No self-authorization for content elevation
- Explicit declaration required for publication eligibility

---

## Transparency Without Premature Disclosure

The TRIZEL system balances transparency with scientific rigor:

### Transparent Elements
- Governance framework documentation
- Repository structure and classification
- Phase status and completion records
- Provenance and authority chains

### Protected Elements
- Incomplete analysis workflows
- Unapproved scientific results
- Internal technical discussions
- Preliminary findings or drafts

This approach ensures:
- **Accountability:** Process and structure are visible
- **Integrity:** Only validated content reaches publication status
- **Professionalism:** Public presentation maintains institutional standards

---

## Summary

1. **Repository activity ≠ published results** — Presence in the repository does not imply publication readiness
2. **Closed + declared = eligible** — Only explicitly approved artifacts are publication-eligible
3. **Website = status + provenance** — Public interface shows governance state, not internal workflows
4. **Layer-0 controls publication** — All publication decisions subject to governance authority
5. **Separation maintains integrity** — Internal work does not compromise external presentation

---

**REPOSITORY VISIBILITY RULES**  
**Publication-Support Repository**  
**Institutional Standards**  
**Layer-0 Authority**  
**Audit-Ready**
