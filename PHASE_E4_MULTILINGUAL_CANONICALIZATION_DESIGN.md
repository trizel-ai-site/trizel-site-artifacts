# Phase-E.4: Multilingual Scientific Canonicalization & Semantic Guardrails

**Repository:** trizel-ai-site/trizel-site-artifacts  
**Phase:** Phase-E.4 — Pre-Implementation Design Specification  
**Document Type:** Design-Only (No Code Implementation)  
**Date:** 2026-01-23  
**Status:** 📋 Design Proposal — Awaiting Governance Approval

---

## 🎯 Objective

Define a comprehensive framework for preventing semantic drift in non-English interfaces (especially Arabic) by enforcing scientific, governance-accurate language across all UI texts. This document provides design specifications and conceptual frameworks to be implemented in a future phase **after** governance approval.

---

## 🚨 Critical Context

### Problem Statement

Some translated headings and governance statements are linguistically correct but **scientifically imprecise**, causing semantic drift. Specifically:

1. **Governance dilution** — Critical constraints like "no execution / no live data / governance-controlled" may lose precision in translation
2. **Literary vs. Scientific Arabic** — Fluent Arabic translations may prioritize readability over technical accuracy
3. **Cross-language semantic variance** — Different languages may convey subtly different institutional meanings
4. **Governance risk** — Imprecise translations create compliance ambiguity and authority confusion

**This is a governance risk, not a UI or RTL issue.**

### Governance Classification

- **Risk Level:** HIGH — Affects institutional credibility and governance compliance
- **Impact Area:** Multilingual governance text, scientific terminology, compliance disclaimers
- **Phase-E Compliance:** ✅ Design-only, no code changes in this document

---

## 1. Canonical Language Authority

### 1.1 English as Sole Semantic Authority

**Principle:** English (EN) is the **single source of truth** for all semantic meaning in TRIZEL institutional documentation.

#### Definition

```
┌──────────────────────────────────────────────────┐
│  English (EN) — CANONICAL SEMANTIC AUTHORITY     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  • Authoritative source for all meanings        │
│  • Approved by Layer-0 governance               │
│  • Scientific terminology authority             │
│  • Governance language reference                │
└──────────────────────────────────────────────────┘
                      ↓
            Scientific Equivalents ONLY
          (NOT interpretive translations)
                      ↓
┌──────────────────────────────────────────────────┐
│  FR, AR, ZH, RU — DERIVATIVE EQUIVALENTS         │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  • Must preserve exact EN meaning               │
│  • Technical precision over fluency             │
│  • Glossary-based term mapping                  │
│  • No cultural adaptation permitted             │
└──────────────────────────────────────────────────┘
```

#### Implementation Rules (Future)

1. **All translations must derive from approved EN text**
   - No translation from one non-EN language to another
   - No "localization" or cultural adaptation
   - No interpretive translation (literal scientific equivalents only)

2. **EN text changes trigger translation review**
   - Any EN text modification requires re-validation of all languages
   - Translation memory must track EN source version
   - No unsynchronized language versions permitted

3. **Semantic disputes default to EN**
   - If translation accuracy is questioned, EN is authoritative
   - Non-EN speakers cannot override EN semantic intent
   - Governance review occurs in EN, then validated per language

### 1.2 Authority Hierarchy

```
Layer-0 Governance (trizel-core)
    ↓
Approves EN Canonical Text
    ↓
Scientific Translation (Glossary-Based)
    ↓
Per-Language Governance Validation
    ↓
Freeze & Version Control
```

**Key Constraint:** No language has autonomous authority. All derive from Layer-0-approved EN text.

---

## 2. Canonical Scientific Glossary

### 2.1 Glossary Structure (Proposed)

**Proposed Path:** `/i18n/glossary.json`

**Purpose:** Single source of truth for governance-critical and scientific terms across all languages.

#### Schema Design

```json
{
  "version": "1.0.0",
  "authority": "Layer-0 Governance (trizel-core)",
  "last_updated": "YYYY-MM-DD",
  "terms": {
    "term_key": {
      "canonical_en": {
        "term": "English term or phrase",
        "definition": "Scientific/governance definition",
        "context": "Usage context (governance/scientific/technical)",
        "approved_by": "Layer-0",
        "approved_date": "YYYY-MM-DD"
      },
      "translations": {
        "ar": {
          "term": "Arabic scientific equivalent",
          "script": "formal_scientific|modern_standard",
          "notes": "Translation rationale or constraints",
          "validated_by": "Native scientific validator name/role",
          "validated_date": "YYYY-MM-DD"
        },
        "fr": { /* ... */ },
        "zh": { /* ... */ },
        "ru": { /* ... */ }
      },
      "prohibitions": [
        "List of explicitly forbidden translation approaches",
        "Common mistranslations to avoid"
      ]
    }
  }
}
```

### 2.2 Mandatory Glossary Terms (Governance-Critical)

The following terms **must** be included in the glossary and used consistently:

#### Tier 1: Governance Constraints (Highest Priority)

| English Term | Governance Meaning | Translation Constraint |
|--------------|-------------------|------------------------|
| **No execution** | Zero computational capability | Must convey absolute prohibition |
| **No live data** | All content is static snapshots | Must prevent "real-time" interpretation |
| **Snapshot-based** | Frozen point-in-time reference | Must convey immutability |
| **Read-only** | No write/modification capability | Must convey zero mutation authority |
| **Governance-controlled** | Layer-0 approval required | Must convey hierarchical authority |
| **Display only** | Presentation surface, no logic | Must prevent "processing" interpretation |
| **Static** | Frozen, non-dynamic | Must convey immutability |
| **Prohibited** | Permanently forbidden | Must convey absolute constraint |
| **Forbidden** | Not permitted under any circumstance | Must convey governance boundary |
| **Canonical** | Authoritative source of truth | Must convey primacy |

#### Tier 2: Layer Architecture Terms

| English Term | Technical Meaning | Translation Constraint |
|--------------|------------------|------------------------|
| **Layer-0** | Governance authority | Must preserve numeric identifier |
| **Layer-1** | Internal execution | Must preserve numeric identifier |
| **Layer-2** | Presentation display | Must preserve numeric identifier |
| **Phase E** | Scientific observatory mode | Must preserve phase identifier |
| **Authority** | Decision-making power | Must convey hierarchy |
| **Compliance** | Governance adherence | Must convey obligation |
| **Repository** | Code/documentation storage | Technical term, not metaphoric |
| **Artifact** | Frozen governance document | Scientific usage, not "product" |

#### Tier 3: Scientific & Epistemic Terms

| English Term | Scientific Meaning | Translation Constraint |
|--------------|-------------------|------------------------|
| **Epistemic** | Knowledge-theoretical | Must use scientific terminology |
| **Memory marker** | Validation checkpoint | Must preserve technical precision |
| **State transition** | Change in epistemic state | Must use formal scientific language |
| **Provenance** | Origin/lineage tracking | Must preserve archival meaning |
| **Validation** | Scientific verification | Must distinguish from "approval" |
| **Observatory** | Read-only monitoring system | Must convey passive observation |
| **Institutional** | Formal organizational | Must convey formality |

### 2.3 Glossary Governance Rules

1. **Additions require Layer-0 approval**
   - No ad-hoc term additions during translation
   - New terms must go through governance review
   - Scientific validation required before inclusion

2. **Updates are versioned and immutable**
   - Each glossary version is frozen upon approval
   - Historical versions maintained for provenance
   - No retroactive modifications without re-approval

3. **Translations must reference glossary keys**
   - UI text cannot use free-form translations for glossary terms
   - Each usage must map to canonical glossary entry
   - Consistency enforcement via validation tooling (future)

---

## 3. Guardrails for Governance Text

### 3.1 Principle: No Free-Text Governance Warnings

**Problem:** Governance warnings/disclaimers written as free text per language create semantic drift and compliance risk.

**Solution:** Governance warnings must be:
1. **Defined once in the glossary** (canonical EN + validated translations)
2. **Referenced by key** in all language files
3. **Immutable** without Layer-0 approval

### 3.2 Governance Warning Categories

#### Category A: Phase-E Constraints (Absolute)

**Example warnings that must use glossary references:**

- "This repository is Phase E — no execution, no live data"
- "Read-only observatory — all content is static snapshots"
- "Governance-controlled — updates require Layer-0 approval"
- "Display only — no authority, no integration, no execution"

**Implementation Design (Conceptual):**

Instead of:
```json
{
  "ar": {
    "phase_e_warning": "هذا المستودع هو المرحلة E — لا تنفيذ، لا بيانات حية"
  }
}
```

Use:
```json
{
  "ar": {
    "phase_e_warning": "{{glossary.phase_e_constraint}} — {{glossary.no_execution}}, {{glossary.no_live_data}}"
  }
}
```

Where `{{glossary.*}}` references are resolved from `/i18n/glossary.json` canonical translations.

#### Category B: Layer Separation Boundaries

**Example boundaries requiring glossary enforcement:**

- "Layer-0 authority — all decisions originate from trizel-core"
- "Layer-2 has zero autonomous authority"
- "No cross-layer integration permitted"

#### Category C: Semantic Equivalence Guarantees

**Example guarantees requiring glossary enforcement:**

- "Semantic equivalence across all languages"
- "English (EN) is canonical source of truth"
- "Scientific terminology preserved"

### 3.3 Free-Text Prohibition Scope

**Prohibited (must use glossary):**
- ❌ Governance constraint statements
- ❌ Authority hierarchy descriptions
- ❌ Compliance requirements
- ❌ Layer boundary definitions
- ❌ Phase-E status declarations

**Permitted (free-text translation allowed):**
- ✅ Descriptive content (overview paragraphs)
- ✅ Navigation labels (Home, About, Contact)
- ✅ Instructional text (Click here, Read more)
- ✅ UI micro-copy (Search, Filter, Sort)

**Rationale:** Governance language carries legal/institutional weight. Fluency errors in navigation labels are low-risk; fluency errors in "no execution" disclaimers are governance violations.

---

## 4. Arabic as a Scientific Language

### 4.1 Principle: Precision Over Fluency

**Challenge:** Modern Standard Arabic (MSA) has strong literary traditions that prioritize eloquence over technical precision. TRIZEL requires the opposite.

**Solution:** Arabic translations must use **formal scientific Arabic** (لغة علمية رسمية), even if less "smooth" for casual readers.

#### Scientific Arabic Guidelines

1. **Use Modern Standard Arabic (MSA)**, not dialectal variants
2. **Prioritize technical vocabulary** from scientific/academic contexts
3. **Preserve loan words** when Arabic equivalents introduce ambiguity
4. **Accept grammatical formality** over conversational style
5. **Favor precision** over stylistic elegance

### 4.2 Specific Arabic Translation Constraints

#### Constraint 1: Technical Terms as Loan Words (When Necessary)

**Permitted:** Retain English technical terms in Arabic text if translation introduces semantic drift.

**Examples:**

| English Term | ❌ Avoid (Ambiguous) | ✅ Prefer (Precise) |
|--------------|---------------------|---------------------|
| Repository | مستودع (warehouse/storage) | مستودع الكود (code repository) OR ريبوزيتوري (loan word) |
| Layer-0 | الطبقة صفر | Layer-0 (preserve English, explain in context) |
| Snapshot | لقطة (photo) | نسخة ثابتة (frozen copy) OR سنابشوت |
| Phase E | المرحلة إي | Phase E (preserve English phase identifier) |

**Rationale:** Governance documents require unambiguous interpretation. If Arabic technical terms are ambiguous, scientific convention permits loan words with Arabic morphology.

#### Constraint 2: Formal Register (Not Conversational)

**❌ Avoid:**
- Conversational or journalistic Arabic
- Marketing-style persuasive language
- Simplified paraphrasing for accessibility

**✅ Require:**
- Formal scientific/academic register
- Institutional tone matching EN formality level
- Grammatical completeness (no shortcuts)

**Example:**

| Context | ❌ Conversational | ✅ Formal Scientific |
|---------|------------------|---------------------|
| "No execution" | لا يعمل (doesn't work) | لا قدرة تنفيذية (no execution capability) |
| "Read-only" | للقراءة فقط (for reading only) | قراءة فقط، غير قابل للتعديل (read-only, not modifiable) |

#### Constraint 3: Governance Language Consistency

**Rule:** All governance disclaimers must use identical phrasing within a language.

**Anti-pattern:**
- Page 1: "هذا المستودع للعرض فقط" (This repository is for display only)
- Page 2: "هذا النظام لا ينفذ أي عمليات" (This system does not execute operations)
- Page 3: "لا توجد قدرات تنفيذية" (No execution capabilities exist)

**Correct pattern:**
- All pages: Identical phrasing from glossary for "no execution" → "لا قدرة تنفيذية"

### 4.3 UX Smoothness Trade-Off (Acceptable)

**Governance Decision:** Reduced UX fluency in Arabic is **acceptable** if required to preserve semantic precision.

**Rationale:**
- TRIZEL is institutional/scientific, not consumer-facing
- Target audience is technical stakeholders, not general public
- Compliance risk outweighs UX polish risk
- Scientific institutions prioritize accuracy over accessibility

**Implication:** Arabic translations may feel "formal" or "technical" to native speakers — this is intentional and governance-approved.

### 4.4 Arabic Validator Requirements

**Mandatory qualifications for Arabic scientific validators:**

1. **Native or near-native Arabic fluency** (MSA)
2. **Scientific/technical background** (CS, engineering, or scientific translation)
3. **Familiarity with institutional/academic Arabic** (not marketing or journalism)
4. **Understanding of TRIZEL governance model** (trained on Layer-0 concepts)

**Validation process (future implementation):**

1. Scientific translator produces initial Arabic text
2. Native Arabic validator reviews for:
   - Semantic equivalence with EN
   - Formal scientific register
   - Glossary term consistency
   - Governance constraint precision
3. Layer-0 approves after validation sign-off

---

## 5. Verification Checklist (Design)

### 5.1 Purpose

A **pre-merge checklist** to validate semantic equivalence across languages before any translation PR is approved.

**Status:** Design-only — not implemented as CI automation yet.

### 5.2 Checklist Template

#### ✅ Phase-E.4 Semantic Equivalence Checklist

**PR Metadata:**
- [ ] PR includes changes to i18n files (`/i18n/translations.json` or `/i18n/glossary.json`)
- [ ] All modified languages are listed below
- [ ] Layer-0 governance reviewer assigned

**Per-Language Validation (repeat for each language):**

**Language: __________ (FR/AR/ZH/RU)**

**1. Glossary Compliance**
- [ ] All governance-critical terms use glossary references (no free-text)
- [ ] No new technical terms introduced without glossary entry
- [ ] Term usage consistent across all pages in this language

**2. Semantic Equivalence**
- [ ] Governance constraints convey identical meaning to EN
- [ ] No dilution of "no execution / no live data / governance-controlled"
- [ ] Layer separation boundaries are precise (not ambiguous)
- [ ] Authority hierarchy is unambiguous

**3. Scientific Precision**
- [ ] Technical terminology is formally correct (not conversational)
- [ ] No marketing or persuasive language
- [ ] Institutional tone matches EN formality level
- [ ] Scientific loan words used appropriately (if applicable)

**4. Governance Warning Validation**
- [ ] Phase-E constraint warnings are identical across pages (within language)
- [ ] "Read-only" / "Display only" disclaimers are unambiguous
- [ ] No interpretive paraphrasing of governance text

**5. Native Validator Sign-Off (If Applicable)**
- [ ] Native scientific validator reviewed and approved (name: __________)
- [ ] Validator confirms semantic equivalence with EN
- [ ] Validator confirms formal scientific register

**6. Layer-0 Approval**
- [ ] Layer-0 governance reviewer approves semantic accuracy
- [ ] No governance drift introduced
- [ ] Terminology aligns with trizel-core standards

**Final Approval:**
- [ ] All languages validated
- [ ] No semantic drift detected
- [ ] Ready for merge

**Signed:**
- Translator: _____________________________ Date: __________
- Validator: _____________________________ Date: __________
- Layer-0 Reviewer: _____________________________ Date: __________

### 5.3 Automated Validation (Future Tooling)

**Note:** This section describes potential future automation — not implemented in this design phase.

**Potential CI checks (governance-approved automation only):**

1. **Glossary Reference Validator**
   - Scans i18n files for governance-critical terms
   - Flags free-text usage of terms that should reference glossary
   - Fails PR if glossary violations detected

2. **Completeness Checker**
   - Ensures all EN keys have translations in all languages
   - Flags missing translations
   - Prevents partial language coverage

3. **Consistency Checker**
   - Validates that glossary term usage is identical within a language
   - Flags inconsistent phrasing for same EN source
   - Prevents semantic drift from ad-hoc translations

**Implementation Constraint:** Any automation must be governance-approved and Phase-E compliant (validation only, no content generation).

---

## 6. Implementation Roadmap (Future Phase)

### 6.1 Implementation Phases (Post-Approval)

**This design document does NOT include implementation.** The following roadmap is for reference only.

#### Phase 1: Glossary Creation (Week 1-2)
1. Extract all governance-critical terms from current EN text
2. Draft canonical definitions and usage contexts
3. Obtain Layer-0 approval for glossary v1.0.0
4. Create `/i18n/glossary.json` structure

#### Phase 2: Scientific Translation (Week 3-5)
1. Contract professional scientific translators per language
2. Provide glossary and translation guidelines
3. Translate all glossary terms with scientific precision
4. Native validator review per language

#### Phase 3: Glossary Integration (Week 6-7)
1. Replace free-text governance warnings with glossary references
2. Update i18n architecture to support glossary lookups
3. Validate all languages for glossary compliance
4. Layer-0 approval for integrated glossary

#### Phase 4: Validation Process (Week 8)
1. Implement semantic equivalence checklist as PR template
2. Train reviewers on checklist usage
3. Document governance approval workflow
4. Freeze and release Phase-E.4 v1.0.0

### 6.2 Success Metrics (Post-Implementation)

**Governance Compliance:**
- [ ] Zero free-text governance warnings (100% glossary-based)
- [ ] All languages validated by native scientific validators
- [ ] Layer-0 approval obtained for all translations

**Semantic Precision:**
- [ ] No ambiguity in "no execution / no live data" constraints
- [ ] Layer boundaries unambiguous in all languages
- [ ] Authority hierarchy clear in all languages

**Scientific Quality:**
- [ ] Arabic uses formal scientific register (validated)
- [ ] FR/ZH/RU maintain institutional tone
- [ ] Technical terms preserved across languages

---

## 7. Governance Constraints & Compliance

### 7.1 Phase-E Compliance

**This design document is Phase-E compliant:**

- ✅ **No code changes** — Design specification only
- ✅ **No HTML/CSS modifications** — Conceptual framework
- ✅ **No JavaScript** — No implementation in this document
- ✅ **No schema changes** — Proposed schema, not implemented
- ✅ **Governance-approved content** — Awaiting Layer-0 review

### 7.2 Authority & Approval

**Authority Chain:**
```
Layer-0 Governance (trizel-core)
    ↓
Approves Phase-E.4 Design
    ↓
Schedules Future Implementation Phase
    ↓
Scientific Translation & Validation
    ↓
Glossary Integration & Freeze
```

**Current Status:** Design proposal awaiting governance review.

### 7.3 Dependencies & Prerequisites

**Before implementation can begin:**

1. **Layer-0 approval of this design document**
2. **Budget allocation** for professional scientific translation
3. **Native validator recruitment** (AR, FR, ZH, RU scientific backgrounds)
4. **Glossary term finalization** (Tier 1, 2, 3 terms approved)
5. **Translation guidelines ratification** (Arabic scientific language constraints)

---

## 8. Risks & Mitigations

### 8.1 Identified Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Arabic formal register too technical** | Medium | Medium | Accept UX trade-off for compliance |
| **Glossary incompleteness** | High | Low | Comprehensive term extraction + validation |
| **Translation consistency drift** | High | Medium | Automated glossary reference checks |
| **Native validator unavailability** | Medium | Low | Recruit validators during design phase |
| **Layer-0 approval delays** | Low | Medium | Clear decision points + structured review |
| **Glossary maintenance overhead** | Medium | Medium | Versioned, immutable glossary approach |

### 8.2 Mitigation Strategies

**For Arabic Formality:**
- Document acceptable UX trade-off in governance records
- Provide glossary notes explaining formal terminology choices
- Train Arabic-speaking stakeholders on scientific register rationale

**For Glossary Completeness:**
- Systematic extraction of all governance/scientific terms
- Layer-0 review of glossary scope before translation
- Iterative refinement during translation phase

**For Consistency:**
- Glossary reference enforcement (future tooling)
- Manual checklist validation until automation approved
- Regular audit of translated content against glossary

---

## 9. Open Questions for Governance Review

### 9.1 Decision Required

**Q1: Approve this design framework?**
- [ ] Approved — proceed to implementation planning
- [ ] Modifications required — feedback: __________
- [ ] Rejected — rationale: __________

**Q2: Arabic formality trade-off acceptable?**
- [ ] Yes — scientific precision over UX fluency
- [ ] No — modify Arabic guidelines
- [ ] Requires further evaluation

**Q3: Glossary structure appropriate?**
- [ ] Approved as designed
- [ ] Modifications required (specify): __________
- [ ] Alternative approach preferred

**Q4: Verification checklist sufficient?**
- [ ] Manual checklist acceptable initially
- [ ] Require automated validation before implementation
- [ ] Modifications needed

**Q5: Timeline for implementation (if approved)?**
- [ ] Immediate (next sprint)
- [ ] Scheduled for: __________
- [ ] Deferred pending: __________

---

## 10. Conclusion & Next Steps

### 10.1 Summary

This design document establishes a comprehensive framework for **preventing semantic drift** in TRIZEL multilingual institutional documentation through:

1. **Canonical Language Authority** — English as sole source of truth
2. **Scientific Glossary** — Governance-critical terms with validated translations
3. **Governance Guardrails** — Prohibition on free-text governance warnings
4. **Arabic Scientific Guidelines** — Precision over fluency for compliance
5. **Verification Checklist** — Pre-merge semantic equivalence validation

**Status:** Design-only specification, ready for Layer-0 governance review.

### 10.2 Deliverables

**This document provides:**
- ✅ Conceptual framework for semantic canonicalization
- ✅ Glossary structure specification
- ✅ Arabic translation constraints
- ✅ Verification process design
- ✅ Implementation roadmap (future)

**This document does NOT include:**
- ❌ Code changes or implementation
- ❌ Actual glossary content (requires translation)
- ❌ Automated validation tooling
- ❌ Updated i18n files

### 10.3 Immediate Next Steps

1. **Submit for Layer-0 governance review**
2. **Address governance feedback** (if modifications required)
3. **Obtain formal approval decision**
4. **Schedule implementation phase** (if approved)
5. **Recruit native scientific validators** (during approval period)

---

## 11. Document Metadata

**Prepared By:** GitHub Copilot (Governance-Directed AI)  
**Date:** 2026-01-23  
**Version:** 1.0.0 (Draft for Review)  
**Classification:** Phase-E.4 Design Specification  
**Status:** 📋 Awaiting Governance Approval

**Reviewed By (Layer-0):** _____________________________ Date: __________

**Approved By (Layer-0):** _____________________________ Date: __________

**Implementation Authorization:** __________ (pending approval)

---

## 12. References

### 12.1 Related Documents

- [PHASE_E_DECLARATION.md](./PHASE_E_DECLARATION.md) — Phase E governance framework
- [I18N_ARCHITECTURE_PLAN.md](./docs/I18N_ARCHITECTURE_PLAN.md) — Multilingual technical architecture
- [I18N_PLANNING_SUMMARY.md](./docs/I18N_PLANNING_SUMMARY.md) — i18n implementation overview
- [SCIENTIFIC_CONCEPTS.md](./docs/SCIENTIFIC_CONCEPTS.md) — Scientific terminology reference
- [GOVERNANCE_PHASE_E_LOCK.md](./GOVERNANCE_PHASE_E_LOCK.md) — Phase E governance constraints

### 12.2 External References

- **Modern Standard Arabic Scientific Writing** — Academic Arabic style guides
- **ISO 639 Language Codes** — Language identification standards
- **WCAG 2.1 AAA** — Accessibility standards (multilingual support)
- **Layer-0 Governance Repository** — trizel-core (canonical authority)

---

**STATUS: DESIGN SPECIFICATION COMPLETE — AWAITING GOVERNANCE REVIEW**

**Next Action:** Layer-0 governance review and approval decision

---

**END OF DOCUMENT**
