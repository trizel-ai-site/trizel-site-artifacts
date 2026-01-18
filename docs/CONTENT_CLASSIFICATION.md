# CONTENT CLASSIFICATION — Layer-2

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display)  
**Authority:** Layer-0 (trizel-core) — [Canonical Governance](https://github.com/trizel-ai-site/trizel-core)

---

## Purpose

This document defines what content is **allowed** versus **prohibited** on Layer-2 (trizel-site). All authority derives from Layer-0 governance documentation.

**Layer-2 Role:** Presentation-only, read-only, explanatory.

---

## Allowed Content (Layer-2)

Layer-2 **MAY** contain the following content types:

### 1. Structural Descriptions
- ✅ System architecture explanations
- ✅ Layer boundary descriptions
- ✅ Repository organization documentation
- ✅ Navigation and orientation materials

### 2. Navigation & References
- ✅ Links to Layer-0 governance repositories
- ✅ Links to Layer-1 research repositories
- ✅ References to authoritative documentation
- ✅ Site maps and structural guides

### 3. Institutional Information
- ✅ Contact information
- ✅ Attribution and copyright notices
- ✅ Formal institutional notices
- ✅ Public-facing orientation materials

### 4. Presentation Assets
- ✅ HTML structure (static only)
- ✅ CSS styling (no dynamic behavior)
- ✅ Static images and graphics
- ✅ Typography and layout definitions

### 5. Governance Documentation
- ✅ Layer boundary definitions
- ✅ Scope and constraint documentation
- ✅ Compliance audit records
- ✅ Changelog and versioning records
- ✅ Launch readiness documentation

### 6. Required Markers & Disclaimers
- ✅ AUTO DZ ACT memory marker
- ✅ Layer-2 classification badges
- ✅ Explicit disclaimers ("Presentation only, no analysis")
- ✅ References to governance authority

---

## Prohibited Content (Layer-2)

Layer-2 **MUST NOT** contain the following content types:

### 1. Scientific & Research Content
- ❌ Research findings or results
- ❌ Experimental data or datasets
- ❌ Scientific theories or hypotheses
- ❌ Scientific methodologies
- ❌ Research interpretations
- ❌ Analytical conclusions

### 2. Technical Execution
- ❌ JavaScript or dynamic code
- ❌ Backend logic or APIs
- ❌ Server-side processing
- ❌ Database connections
- ❌ AI models or algorithms
- ❌ Computational execution

### 3. Claims & Authority
- ❌ Scientific claims or assertions
- ❌ Technical validation statements
- ❌ Quality assessments or metrics
- ❌ Performance benchmarks
- ❌ Research conclusions
- ❌ Authoritative interpretations

### 4. Publication Materials
- ❌ DOI assignments
- ❌ Zenodo deposits
- ❌ Citable research artifacts
- ❌ Publication metadata
- ❌ Archival research materials
- ❌ Version-controlled results

### 5. Analysis & Processing
- ❌ Data analysis logic
- ❌ Statistical processing
- ❌ Visualization generators (dynamic)
- ❌ Calculation engines
- ❌ Validation procedures
- ❌ Automated reasoning systems

### 6. Deprecated Terminology
- ❌ STOE (deprecated term)
- ❌ Any other forbidden terminology per Layer-0 governance

---

## Content Decision Matrix

When evaluating if content belongs on Layer-2, use this decision tree:

```
Is the content descriptive/structural only?
├─ YES: Does it contain scientific claims or analysis?
│  ├─ NO: Does it involve dynamic execution or logic?
│  │  ├─ NO: ✅ ALLOWED on Layer-2
│  │  └─ YES: ❌ PROHIBITED (execution)
│  └─ YES: ❌ PROHIBITED (claims/analysis)
└─ NO: ❌ PROHIBITED (not presentation)
```

### Quick Tests

**Test 1:** Does this content make a scientific claim?
- If YES → ❌ Prohibited

**Test 2:** Does this content execute code or perform analysis?
- If YES → ❌ Prohibited

**Test 3:** Is this content purely descriptive and static?
- If NO → ❌ Prohibited
- If YES → ✅ Potentially allowed (verify no claims)

---

## Layer Boundaries (Quick Reference)

### Layer-0: Governance / Authority
- **Repository:** [trizel-core](https://github.com/trizel-ai-site/trizel-core)
- **Role:** Establishes policies and governance
- **Authority:** Final decision-making power

### Layer-1: Research & Analysis
- **Repositories:** trizel-lab, trizel-AI, trizel-monitor
- **Role:** Conducts research and analysis
- **Authority:** Scientific and technical execution

### Layer-2: Presentation / Display
- **Repository:** trizel-site (this repository)
- **Role:** Public-facing presentation only
- **Authority:** **NONE** (presentation only)

**Authority Flow:** Layer-0 → Layer-1 → Layer-2

---

## Enforcement & Compliance

### Required Checks
All content must pass:
1. **baseline-snapshot-guard:** No speculative language
2. **pages-surface-freeze:** No deployment logic
3. **Manual review:** Layer-2 boundaries respected

### Violation Response
If prohibited content is detected:
1. **Immediate:** Do not merge PR
2. **Required:** Remove prohibited content
3. **Escalate:** Refer to Layer-0 governance if unclear
4. **Document:** Record in compliance audit

---

## Examples

### ✅ ALLOWED Examples

**Example 1: Structural Description**
```
"TRIZEL operates under a three-layer architecture with 
Layer-0 (governance), Layer-1 (research), and Layer-2 (presentation)."
```
✅ Descriptive, no claims, structural only.

**Example 2: Navigation Reference**
```
"For governance policies, refer to trizel-core at 
https://github.com/trizel-ai-site/trizel-core"
```
✅ Navigation aid, no authority claims.

**Example 3: Required Marker**
```html
<p class="memory-marker">AUTO DZ ACT</p>
<p class="memory-label">Foundational Epistemic Memory Marker</p>
```
✅ Required governance marker.

### ❌ PROHIBITED Examples

**Example 1: Scientific Claim**
```
"Our analysis shows that the model achieves 95% accuracy."
```
❌ Makes scientific claim, includes analysis results.

**Example 2: Dynamic Execution**
```javascript
function calculateResults() { /* ... */ }
```
❌ Contains executable code (JavaScript).

**Example 3: Research Interpretation**
```
"The data suggests a correlation between X and Y."
```
❌ Interprets research, makes analytical statement.

**Example 4: Deprecated Term**
```
"STOE framework defines the boundaries..."
```
❌ Uses deprecated terminology.

---

## Clarifications

### Q: Can Layer-2 describe what Layer-1 does?
**A:** Yes, but only structurally. Cannot interpret or validate Layer-1 results.

**Allowed:** "Layer-1 conducts research and analysis."  
**Prohibited:** "Layer-1 has validated the hypothesis."

### Q: Can Layer-2 link to research papers?
**A:** Only as references, with clear disclaimer that Layer-2 makes no claims about content.

**Allowed:** "See Layer-1 repository for research documentation."  
**Prohibited:** "Our paper demonstrates [scientific claim]."

### Q: Can Layer-2 include CSS animations?
**A:** Yes, pure CSS animations are allowed. JavaScript-driven animations are prohibited.

**Allowed:** CSS transitions, keyframe animations  
**Prohibited:** JavaScript animation libraries

### Q: Can Layer-2 include static images of data?
**A:** Only if purely illustrative for structure. No graphs presenting research results.

**Allowed:** Diagram of layer architecture  
**Prohibited:** Graph of experimental results

---

## Authority & References

All content classification authority derives from:

1. **Layer-0 Governance:** [trizel-core](https://github.com/trizel-ai-site/trizel-core)
2. **Layer Boundaries:** `docs/LAYER_BOUNDARIES.md`
3. **Presentation Scope:** `docs/PRESENTATION_SCOPE.md`
4. **Exclusions:** `docs/EXCLUSIONS.md`

For questions or unclear cases, escalate to Layer-0 governance.

---

## Revision History

- **2026-01-18:** Initial creation for Layer-2 launch readiness bundle
- **Version:** 1.0.0
- **Status:** Active

---

**Content Classification** — Layer-2 — Authoritative from Layer-0 — Presentation-only — No claims — No analysis
