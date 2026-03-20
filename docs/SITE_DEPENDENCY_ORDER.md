# SITE DEPENDENCY ORDER

## Classification

**Document Type:** Layer-2 Governance — Epistemic Surface Constraints  
**Status:** Authoritative and Binding  
**Scope:** All present and future TRIZEL site implementations  
**Authority:** Derives from Layer-0 (trizel-core) governance framework

---

## Authoritative Statement

This document defines the **mandatory canonical dependency order** for the TRIZEL site (Layer-2 / epistemic surface).

All present and future site implementations MUST adhere to this ordering without exception.

**This document becomes the authoritative constraint layer for all TRIZEL site development.**

All future site-related PRs MUST:

- Reference this document  
- Demonstrate compliance with its rules  
- Explicitly justify any deviation (if allowed at all)

---

## Architectural Intent

The TRIZEL site is not a dashboard, application, or analysis interface.

It is an **epistemic surface** — a structured, read-only projection of the TRIZEL system:

```
Layer-0 (epistemic authority) → Layer-1 (execution) → Layer-2 (site surface)
```

All navigation, hierarchy, and content ordering MUST derive from:

- Epistemic positioning  
- System architecture  
- Repository roles and governance  

NOT from:

- UI preferences  
- Visual aesthetics  
- Convenience-based ordering  

---

## Canonical Dependency Order (Mandatory)

The site MUST be structured and navigated according to this exact sequence:

### 1. Epistemic Positioning

Defines:

- What TRIZEL is  
- What TRIZEL is NOT  
- Its role between data providers and interpretation  
- Core identity statements derived from the TRIZEL governance and positioning stack  

---

### 2. System Architecture

Defines:

- Epistemic layers (Layer-0 / Layer-1 / Layer-2)  
- Separation of concerns  
- System structure across repositories and responsibilities  

---

### 3. Repository Roles & Governance Mapping

Defines:

- Functional role of each repository  
- Mapping to epistemic layers  
- Governance anchoring and authority flow  

---

### 4. Artifacts / Outputs

Defines:

- What the system produces  
- Structured output representation  
- Full origin traceability (repository → layer → governance path)  

Artifacts MUST NEVER be displayed standalone.

---

## Dependency Rules (Enforced Chain)

```
Positioning → constrains → Architecture
Architecture → constrains → Repository Roles
Repository Roles → constrain → Artifact Surface
```

No element in the chain may be presented without all preceding elements being established first.

---

## Golden Rules

- No artifact without repository + layer + governance context  
- No repository without explicit architectural role mapping  
- No architecture without epistemic positioning preceding it  
- No navigation structure that breaks dependency order  
- Site must remain read-only and non-inferential  

---

## Forbidden Patterns (Explicitly Prohibited)

The site MUST NOT:

- Display artifacts in isolation (e.g., galleries, "latest outputs")  
- Present repositories as flat or unordered lists  
- Use UI-first or aesthetics-driven navigation  
- Behave as an interactive tool, dashboard, or inference system  
- Include interpretation, analysis, or derived conclusions  

---

## Epistemic Requirement (Visitor Understanding)

Any visitor must be able, within a short interaction, to determine:

- Why an artifact exists  
- Which repository produced it  
- Under which epistemic layer  
- Under which governance authority  
- Within which global TRIZEL positioning  

---

## Validation Criteria (For Reviewers and Future PRs)

- Strict alignment with TRIZEL positioning  
- Explicit dependency chain in navigation and structure  
- No violation of golden rules or forbidden patterns  
- No UI-driven ordering or abstraction leakage  
- Clarity, precision, and non-ambiguity in documentation  

---

## Purpose

This document exists to:

- Prevent frontend drift and UI-driven decision-making  
- Enforce epistemic-first rendering over presentation-first design  
- Establish a formal audit and validation reference for site-related PRs  
- Preserve the integrity of the TRIZEL epistemic chain in its public interface  

---

## References

- TRIZEL constitutional / epistemic authority materials  
- trizel-core governance documentation  
- Published TRIZEL positioning and roadmap documents  
- Canonical releases and DOI-backed artifacts where applicable  
- [LAYER_BOUNDARIES.md](LAYER_BOUNDARIES.md)  
- [PRESENTATION_SCOPE.md](PRESENTATION_SCOPE.md)  
- [NARRATIVE_BOUNDARIES.md](NARRATIVE_BOUNDARIES.md)  
- [SYSTEM_INTERFACE_PRINCIPLES.md](SYSTEM_INTERFACE_PRINCIPLES.md)  

---

## Institutional Notice

**Non-scientific** — Contains no research or analysis.

**Non-authoritative over science** — Makes no scientific claims.

**Governance-binding** — Establishes mandatory constraints for site structure.

**Declarative** — Defines ordering rules, not implementation details.

---

**Site Dependency Order** — Layer-2 Governance — Epistemic Surface Constraints — Authoritative and Binding — All site implementations must comply
