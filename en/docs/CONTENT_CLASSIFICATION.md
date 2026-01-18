# CONTENT CLASSIFICATION

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display)  
**Purpose:** Explicit classification of allowed vs prohibited content for Layer-2

---

## Classification Authority

All content classification rules derive from **Layer-0 (trizel-core)**, the canonical governance repository.

**Authoritative Source:** [trizel-core](https://github.com/trizel-ai-site/trizel-core)

---

## ALLOWED Content (Layer-2)

### Descriptive Materials
✅ System structure descriptions  
✅ Layer architecture explanations  
✅ Navigation and orientation aids  
✅ References to authoritative sources (Layer-0, Layer-1)  

### Navigation Elements
✅ Links to governance repositories (Layer-0)  
✅ Links to research repositories (Layer-1)  
✅ Structural documentation  
✅ Public-facing orientation materials  

### Structural Information
✅ Repository organization descriptions  
✅ Scope and constraint documentation  
✅ Institutional notices  
✅ Governance status summaries  

### Presentation Assets
✅ HTML markup (structure only)  
✅ CSS styling (presentation only)  
✅ Static images and graphics  
✅ Typography and layout  

---

## PROHIBITED Content (Layer-2)

### Scientific Content
❌ Research findings or results  
❌ Experimental data or datasets  
❌ Scientific theories or hypotheses  
❌ Scientific methodologies  
❌ Analytical procedures  
❌ Validation processes  
❌ Research interpretations  

### Technical Execution
❌ JavaScript or dynamic code  
❌ Models (mathematical, computational, or AI)  
❌ Algorithms or implementations  
❌ Data processing logic  
❌ Analysis tools or scripts  
❌ Execution environments  
❌ Computational resources  
❌ Backend services or APIs  

### Authority and Claims
❌ Scientific claims or assertions  
❌ Research conclusions  
❌ Technical decisions  
❌ Validation statements  
❌ Quality assessments  
❌ Performance metrics  
❌ Benchmarks or comparisons  

### Publication Materials
❌ DOI assignments  
❌ Zenodo deposits  
❌ Citable research artifacts  
❌ Publication metadata  
❌ Version-controlled results  
❌ Archival research materials  

### Speculative Language
❌ "Maybe," "might," "probably," "likely"  
❌ "We believe," "it seems," "appears to"  
❌ Assumptions or guesses  
❌ Unverified statements  

### Deprecated Terms
❌ STOE (deprecated terminology)  
❌ Any terms marked as banned in Layer-0 governance  

---

## Content Type Decision Matrix

| Content Type | Layer-2 Status | Rationale |
|--------------|----------------|-----------|
| HTML structure | ✅ ALLOWED | Presentation markup only |
| CSS styling | ✅ ALLOWED | Visual presentation only |
| JavaScript | ❌ PROHIBITED | Dynamic execution not allowed |
| System descriptions | ✅ ALLOWED | Structural/descriptive content |
| Research results | ❌ PROHIBITED | Scientific content (Layer-1 only) |
| Governance links | ✅ ALLOWED | Navigation to authority |
| Scientific claims | ❌ PROHIBITED | Layer-2 has no authority |
| Navigation aids | ✅ ALLOWED | Orientation function |
| Analysis tools | ❌ PROHIBITED | Execution not allowed |
| Institutional notices | ✅ ALLOWED | Presentation/disclosure |

---

## Enforcement

### Automated Checks
- **baseline-snapshot-guard:** Detects speculative language
- **pages-surface-freeze:** Validates no deployment logic
- **Manual review:** CODEOWNERS for governance files

### Review Questions

When adding content, ask:

1. **Is this descriptive only?** (✅ proceed) or **Does it claim/analyze?** (❌ reject)
2. **Is this static presentation?** (✅ proceed) or **Does it execute?** (❌ reject)
3. **Is this navigation/reference?** (✅ proceed) or **Is it authoritative?** (❌ reject)
4. **Is this HTML/CSS only?** (✅ proceed) or **Does it involve JS/logic?** (❌ reject)

---

## Examples

### ✅ ALLOWED Examples

**Structural description:**
> "TRIZEL operates under a three-layer architecture with Layer-0 (governance), Layer-1 (research), and Layer-2 (presentation)."

**Navigation aid:**
> "For governance policies, see [trizel-core](https://github.com/trizel-ai-site/trizel-core)."

**Institutional notice:**
> "This repository is Layer-2 (Presentation/Display only). It contains no scientific content and performs no analysis."

**Scope statement:**
> "Layer-2 has no decision-making authority and produces no citable research."

### ❌ PROHIBITED Examples

**Scientific claim:**
> ❌ "Our research shows that..."  
> ❌ "Results indicate..."  
> ❌ "Analysis reveals..."

**Speculative language:**
> ❌ "This might suggest..."  
> ❌ "We believe that..."  
> ❌ "It appears to..."

**Execution content:**
> ❌ JavaScript functions  
> ❌ API calls  
> ❌ Data processing scripts

**Authority claims:**
> ❌ "Layer-2 validates..."  
> ❌ "This repository certifies..."  
> ❌ "We conclude that..."

---

## Boundary Cases

### Case 1: Describing vs. Claiming
- ✅ **ALLOWED:** "Layer-0 defines governance standards"
- ❌ **PROHIBITED:** "The governance standards are correct"

### Case 2: Navigation vs. Authority
- ✅ **ALLOWED:** "See trizel-core for governance authority"
- ❌ **PROHIBITED:** "This repository governs the system"

### Case 3: Structure vs. Analysis
- ✅ **ALLOWED:** "The system has three layers"
- ❌ **PROHIBITED:** "Three layers is the optimal design"

---

## Governance Authority

**All classification decisions are subject to Layer-0 governance.**

For questions about content classification:
1. Consult [trizel-core governance documentation](https://github.com/trizel-ai-site/trizel-core)
2. Refer to docs/LAYER_BOUNDARIES.md
3. Review docs/PRESENTATION_SCOPE.md

**When in doubt:** If content type is ambiguous, err on the side of exclusion. Layer-2 should contain only unambiguously allowed presentation content.

---

## Revision History

This classification document is subject to updates based on Layer-0 governance decisions.

**Current version:** 2026-01-18  
**Authority:** Layer-0 (trizel-core)  
**Status:** Active

---

**Content Classification** — Layer-2 Presentation-only — No authority — No interpretation — Governed by Layer-0
