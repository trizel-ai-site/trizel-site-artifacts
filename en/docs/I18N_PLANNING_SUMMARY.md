# i18n PLANNING SUMMARY — Executive Brief

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display Only)  
**Document Type:** Executive Summary for Governance Review  
**Date:** 2026-01-18  
**Status:** AWAITING GOVERNANCE APPROVAL

---

## EXECUTIVE OVERVIEW

This is a **planning-only deliverable** for implementing comprehensive multilingual support across the entire trizel-site Layer-2 presentation repository.

**Key Deliverable Documents:**
1. **I18N_ARCHITECTURE_PLAN.md** — Complete technical architecture (1,159 lines, 5,300 words)
2. **I18N_IMPLEMENTATION_CHECKLIST.md** — 212-task implementation guide (421 lines, 2,587 words)
3. **This document** — Executive summary for governance review (318 lines, 1,279 words)

---

## WHAT WE'RE PROPOSING

**Scope:** Full-site multilingual support  
**Languages:** English (EN), French (FR), Arabic (AR), Chinese (ZH), Russian (RU)  
**Approach:** One-time, scientifically accurate, governance-compliant architecture  
**Timeline:** 4-6 weeks from approval  
**Cost:** Translation services + validation (budget TBD)

---

## WHY THIS MATTERS

### Institutional Credibility
- International organizations require multilingual presence
- Scientific institutions operate in multiple languages
- TRIZEL's governance model must be accessible globally

### Strategic Alignment
- Aligns with Layer-0 governance requirements
- Enables future expansion (more languages, more content)
- Prevents technical debt from incremental i18n approaches

### Risk Mitigation
- One-time implementation (no repetition)
- RTL support from day one (not a future patch)
- Professional translation quality (not automated)

---

## GOVERNANCE COMPLIANCE

### Layer-2 Constraints (Maintained)

✅ **No Logic** — Pure HTML language switching (no JavaScript)  
✅ **No Analysis** — No language detection or user tracking  
✅ **No Execution** — Static content only, pre-translated  
✅ **Display Only** — Each language is frozen, version-controlled content

### Authority Flow

```
Layer-0 (trizel-core)
    ↓ Defines terminology & approves translations
Layer-2 EN Baseline
    ↓ Professional translation
Layer-2 FR/AR/ZH/RU Versions
    ↓ Layer-0 validation
Governance Approval & Freeze
```

---

## KEY ARCHITECTURAL DECISIONS

### 1. Subdirectory Structure
```
/en/index.html — English (canonical)
/fr/index.html — French
/ar/index.html — Arabic (RTL)
/zh/index.html — Chinese
/ru/index.html — Russian
```

**Why:** Clean URLs, scalable, maintains Layer-2 simplicity

### 2. RTL as First-Class Concern
- CSS logical properties (automatic directionality)
- Single stylesheet for all languages
- Arabic tested in all major browsers

**Why:** RTL patches fail; this is institutional quality

### 3. Self-Hosted Fonts
- Noto Sans Arabic (for AR)
- Noto Sans SC (for ZH)
- SIL OFL 1.1 license (redistribution allowed)

**Why:** No external dependencies (Layer-2 compliance), immutable, high quality

### 4. English as Canonical Source of Truth
- All translations derive from approved English
- Layer-0 validates terminology in each language
- Translation memory prevents drift

**Why:** Single source of truth aligns with governance model

### 5. No JavaScript
- HTML-only language switcher
- Static links between languages
- No dynamic detection or user tracking

**Why:** Layer-2 "no logic" constraint (non-negotiable)

---

## WHAT WILL CHANGE

### During Implementation:
1. Create language subdirectories (`/en/`, `/fr/`, `/ar/`, `/zh/`, `/ru/`)
2. Move existing content to `/en/` (English baseline)
3. Convert CSS to RTL-aware logical properties
4. Add self-hosted fonts for Arabic and Chinese
5. Create translated versions of all pages
6. Add HTML language switcher (no JavaScript)
7. Implement SEO tags (`hreflang` links)

### What Will NOT Change:
- ❌ No UI redesign (intentionally deferred)
- ❌ No visual polish (comes after i18n)
- ❌ No color changes or layout modifications
- ❌ No new features
- ❌ No JavaScript or dynamic behavior
- ❌ No build tools or frameworks

---

## CRITICAL SUCCESS FACTORS

### 1. Professional Translation Quality
**Requirement:** Scientific/institutional translation, not marketing  
**Need:** Translators with technical background  
**Validation:** Layer-0 terminology review per language

### 2. RTL Testing Rigor
**Challenge:** Arabic is highest technical risk  
**Solution:** Dedicated RTL testing phase, multiple browsers  
**Fallback:** Native Arabic speaker validation

### 3. Governance Engagement
**Required:** Layer-0 reviewers per language  
**Timeline:** 1-2 weeks for governance review cycle  
**Decision:** Translation vendor selection, budget approval

### 4. Single PR Approach
**Rationale:** i18n is atomic (can't be "partially multilingual")  
**Benefit:** Prevents broken intermediate states  
**Risk:** Large PR, requires careful review

---

## RISKS & MITIGATION

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| RTL layout breakage | High | Medium | CSS logical properties, extensive testing |
| Translation inaccuracy | High | Medium | Professional translators, Layer-0 validation |
| Font rendering issues | Medium | Low | Self-hosted fonts, robust fallbacks |
| Governance approval delays | Medium | Medium | Clear process, dedicated reviewers |
| Link rot / broken navigation | Low | Low | Systematic validation, automated checks |

---

## TIMELINE & PHASES

**Phase 1: Planning (COMPLETE)** ✅
- Status: Complete (this document)
- Duration: 2 days

**Phase 2: Infrastructure (3 days)**
- Directory structure, CSS conversion, font integration

**Phase 3: EN Baseline (2 days)**
- Validate English content, Layer-0 approval

**Phase 4: Translations (2 weeks, parallel)**
- FR + RU (1-2 weeks)
- AR + RTL testing (2 weeks, critical path)
- ZH (1-2 weeks)

**Phase 5: Integration & Testing (5 days)**
- Assemble all languages, validate, test

**Phase 6: Governance Review (1-2 weeks)**
- Per-language sign-off, final approval

**Total Estimated Timeline: 4-6 weeks from approval**

---

## RESOURCE REQUIREMENTS

### External Resources
- **Translation Services:** Professional translators for FR, AR, ZH, RU
- **Language Validators:** Native speakers with scientific background (4 people)
- **Fonts:** Noto Sans Arabic + SC (free, SIL OFL 1.1 license)

### Internal Resources
- **Layer-0 Governance:** Terminology validation, approval authority
- **Implementation:** Technical work (directory setup, CSS, HTML)
- **Testing:** Manual validation, browser testing, accessibility audit

### Budget (if applicable)
- Translation services: TBD (vendor quotes needed)
- Validation: In-house or contracted (TBD)
- Fonts: Free (open source)
- Infrastructure: None (GitHub Pages)

---

## DECISION POINTS FOR GOVERNANCE

### Immediate Decisions Required:
1. **Approve or reject this architecture plan**
2. **Select translation vendor** (or internal team)
3. **Assign language validators** (FR, AR, ZH, RU experts)
4. **Approve budget** (if external translation services)
5. **Set timeline expectations** (is 4-6 weeks acceptable?)

### Implementation Decisions (can defer):
6. **Root `index.html` behavior** — redirect to /en/ or language selector?
7. **Documentation priority** — which docs translate first?
8. **Future content update SLA** — how fast to update translations?

---

## NEXT STEPS

### If Approved:
1. Governance team reviews this plan
2. Translation vendor selected
3. Language validators assigned
4. Implementation branch created
5. Phase 2 begins (infrastructure setup)
6. Regular progress reports to governance

### If Modifications Needed:
1. Governance provides specific feedback
2. Plan updated and resubmitted
3. Re-review and approval

### If Rejected:
1. Governance provides rationale
2. Alternative approaches discussed
3. UI polish may proceed (if that was the blocker)

---

## SUCCESS METRICS

### Technical
- ✅ All 5 languages deployed and functional
- ✅ RTL works perfectly for Arabic
- ✅ No JavaScript present
- ✅ Fonts render correctly
- ✅ HTML validates (W3C)
- ✅ WCAG 2.1 AA compliant

### Content
- ✅ Full semantic equivalence across languages
- ✅ Terminology matches Layer-0 definitions
- ✅ Institutional tone maintained
- ✅ No marketing language or simplification

### Governance
- ✅ Layer-2 constraints maintained
- ✅ Layer-0 approval obtained for all languages
- ✅ Future maintenance workflow defined
- ✅ Documentation complete

---

## CONCLUSION

This i18n architecture plan is:
- **Governance-compliant** — Respects all Layer-2 constraints
- **Technically sound** — RTL-aware, scalable, maintainable
- **Institutionally appropriate** — Scientific quality, not marketing
- **One-time investment** — No future repetition needed
- **Ready for execution** — Detailed plan and checklist complete

**Recommendation:** Approve and proceed with implementation.

---

## APPROVAL SIGNATURES

**Prepared By:** GitHub Copilot (Governance-Directed)  
**Date:** 2026-01-18

**Reviewed By (Layer-0):** _____________________________ Date: __________

**Approved By (Layer-0):** _____________________________ Date: __________

**Implementation Start Date:** __________ (pending approval)

---

## DOCUMENT REFERENCES

- **Full Technical Plan:** [I18N_ARCHITECTURE_PLAN.md](./I18N_ARCHITECTURE_PLAN.md) (19 sections, 1,159 lines, 5,300 words)
- **Implementation Checklist:** [I18N_IMPLEMENTATION_CHECKLIST.md](./I18N_IMPLEMENTATION_CHECKLIST.md) (212 tasks, 421 lines, 2,587 words)
- **Existing Governance:** [LAYER_BOUNDARIES.md](./LAYER_BOUNDARIES.md), [PRESENTATION_SCOPE.md](./PRESENTATION_SCOPE.md)

---

**STATUS: AWAITING GOVERNANCE REVIEW**  
**Next Action:** Layer-0 governance review and approval decision
