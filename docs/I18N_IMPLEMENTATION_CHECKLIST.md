# i18n IMPLEMENTATION CHECKLIST

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display Only)  
**Document Type:** Implementation Task List  
**Date:** 2026-01-18  
**Status:** PLANNING PHASE — NOT YET STARTED

**Parent Document:** [I18N_ARCHITECTURE_PLAN.md](./I18N_ARCHITECTURE_PLAN.md)

---

## PURPOSE

This checklist provides a detailed, actionable task list for implementing the i18n architecture defined in the I18N_ARCHITECTURE_PLAN.md. Each task is specific, measurable, and can be marked complete when finished.

**Use this document during implementation to:**
- Track progress systematically
- Ensure no steps are missed
- Coordinate team efforts
- Report status to governance

---

## PRE-IMPLEMENTATION PHASE

### Governance & Planning

- [ ] **P1:** Architecture plan reviewed by Layer-0 governance team
- [ ] **P2:** Architecture plan approved by Layer-0 governance team
- [ ] **P3:** Translation vendor selected and contracted
- [ ] **P4:** Language validators identified and assigned:
  - [ ] French (FR) validator: __________
  - [ ] Arabic (AR) validator: __________
  - [ ] Chinese (ZH) validator: __________
  - [ ] Russian (RU) validator: __________
- [ ] **P5:** Implementation timeline agreed upon
- [ ] **P6:** Budget approved (if applicable)
- [ ] **P7:** Root `index.html` behavior decided (redirect vs. selector)
- [ ] **P8:** Implementation branch created: `feature/i18n-multilingual-architecture`

---

## PHASE 1: INFRASTRUCTURE SETUP

### Directory Structure

- [ ] **I1:** Create `/en/` directory
- [ ] **I2:** Create `/fr/` directory
- [ ] **I3:** Create `/ar/` directory
- [ ] **I4:** Create `/zh/` directory
- [ ] **I5:** Create `/ru/` directory
- [ ] **I6:** Create `/i18n/` directory (for governance files)
- [ ] **I7:** Move existing `index.html` to `/en/index.html`
- [ ] **I8:** Move existing `docs/` to `/en/docs/`
- [ ] **I9:** Update all internal links in `/en/index.html` to reflect new paths
- [ ] **I10:** Create stub directories: `/fr/docs/`, `/ar/docs/`, `/zh/docs/`, `/ru/docs/`

### Root-Level Files

- [ ] **I11:** Create new root `index.html` (redirect to `/en/` or language selector)
- [ ] **I12:** Test redirect functionality (if applicable)
- [ ] **I13:** Update root `README.md` to reference new structure (if needed)

### CSS Conversion to Logical Properties

- [ ] **I14:** Audit `assets/css/style.css` for physical properties
- [ ] **I15:** Convert `margin-left` → `margin-inline-start`
- [ ] **I16:** Convert `margin-right` → `margin-inline-end`
- [ ] **I17:** Convert `padding-left` → `padding-inline-start`
- [ ] **I18:** Convert `padding-right` → `padding-inline-end`
- [ ] **I19:** Convert `border-left` → `border-inline-start`
- [ ] **I20:** Convert `border-right` → `border-inline-end`
- [ ] **I21:** Convert `text-align: left` → `text-align: start`
- [ ] **I22:** Convert `text-align: right` → `text-align: end`
- [ ] **I23:** Add language-specific font stacks (`:root[lang="..."]`)
- [ ] **I24:** Test CSS changes in LTR context (EN, FR, RU, ZH)
- [ ] **I25:** Test CSS changes in RTL context (AR) — visual inspection

### Font Integration

- [ ] **I26:** Download Noto Sans Arabic (Regular 400, Bold 700) from Google Fonts
- [ ] **I27:** Download Noto Sans SC (Regular 400, Bold 700) from Google Fonts
- [ ] **I28:** Create `/assets/fonts/noto-sans-arabic/` directory
- [ ] **I29:** Create `/assets/fonts/noto-sans-sc/` directory
- [ ] **I30:** Place Noto Sans Arabic font files in directory
- [ ] **I31:** Place Noto Sans SC font files in directory
- [ ] **I32:** Copy SIL OFL 1.1 license to `/assets/fonts/OFL.txt`
- [ ] **I33:** Create `assets/css/fonts.css` with `@font-face` declarations
- [ ] **I34:** Link `fonts.css` in all HTML pages
- [ ] **I35:** Test font loading in Arabic context
- [ ] **I36:** Test font loading in Chinese context
- [ ] **I37:** Verify font fallbacks work correctly

### Language Switcher Component

- [ ] **I38:** Design language switcher HTML structure
- [ ] **I39:** Add language switcher to `/en/index.html` header
- [ ] **I40:** Style language switcher in `style.css`
- [ ] **I41:** Add `aria-label="Language Selection"` for accessibility
- [ ] **I42:** Test keyboard navigation through language switcher
- [ ] **I43:** Test visual appearance (matches institutional design)

### SEO & HTML Head Setup

- [ ] **I44:** Add `<link rel="alternate" hreflang="...">` tags template
- [ ] **I45:** Ensure all pages have correct `lang` attribute
- [ ] **I46:** Ensure Arabic page has `dir="rtl"` attribute
- [ ] **I47:** Add proper meta descriptions per language (template)
- [ ] **I48:** Test `hreflang` tags with Google Search Console validator (post-deployment)

---

## PHASE 2: ENGLISH BASELINE VALIDATION

### Content Audit

- [ ] **E1:** Review `/en/index.html` content against Layer-0 definitions
- [ ] **E2:** Verify terminology consistency with Layer-0
- [ ] **E3:** Update any outdated or incorrect English content
- [ ] **E4:** Add language switcher to `/en/index.html`
- [ ] **E5:** Add `lang="en"` and `dir="ltr"` to `/en/index.html`
- [ ] **E6:** Add `<link rel="alternate">` tags to `/en/index.html`
- [ ] **E7:** Update internal documentation links (if broken)
- [ ] **E8:** Add "AUTO DZ ACT" memory marker if missing

### Documentation Baseline

- [ ] **E9:** Identify priority documentation for translation:
  - [ ] README.md
  - [ ] LAYER_BOUNDARIES.md
  - [ ] PRESENTATION_SCOPE.md
  - [ ] SITE_MAP.md (update with i18n structure)
- [ ] **E10:** Update `SITE_MAP.md` to reflect new i18n structure
- [ ] **E11:** Validate all English documentation accuracy

### Governance Review (EN)

- [ ] **E12:** Submit English baseline for Layer-0 review
- [ ] **E13:** Address Layer-0 feedback (if any)
- [ ] **E14:** Obtain Layer-0 approval for English baseline
- [ ] **E15:** Freeze English version (tag: `i18n-en-baseline-v1.0`)

---

## PHASE 3: TRANSLATIONS

### Translation Preparation

- [ ] **T1:** Create terminology glossary (`/i18n/terminology.json`)
- [ ] **T2:** Extract all translatable text from `/en/index.html`
- [ ] **T3:** Create translation brief for vendors (context, constraints, tone)
- [ ] **T4:** Provide Layer-0 terminology definitions to translators
- [ ] **T5:** Set up translation memory structure

### French (FR) Translation

- [ ] **T6:** Send French translation request to vendor
- [ ] **T7:** Receive French translation draft
- [ ] **T8:** Create `/fr/index.html` from `/en/index.html` template
- [ ] **T9:** Replace English text with French translation
- [ ] **T10:** Update `lang="fr"` and `dir="ltr"` attributes
- [ ] **T11:** Update language switcher `aria-current="page"` for FR
- [ ] **T12:** Update internal links to point to `/fr/docs/` (if exists)
- [ ] **T13:** Translate priority documentation (README, LAYER_BOUNDARIES)
- [ ] **T14:** Native French speaker review
- [ ] **T15:** Layer-0 terminology validation (FR)
- [ ] **T16:** Address feedback and finalize
- [ ] **T17:** Governance approval for French version

### Arabic (AR) Translation — RTL CRITICAL

- [ ] **T18:** Send Arabic translation request to vendor
- [ ] **T19:** Receive Arabic translation draft
- [ ] **T20:** Create `/ar/index.html` from `/en/index.html` template
- [ ] **T21:** Replace English text with Arabic translation
- [ ] **T22:** Update `lang="ar"` and `dir="rtl"` attributes
- [ ] **T23:** Update language switcher `aria-current="page"` for AR
- [ ] **T24:** Add `dir="ltr"` spans around English technical terms (Layer-0, etc.)
- [ ] **T25:** Test mixed-direction text rendering
- [ ] **T26:** Verify RTL layout mirrors correctly
- [ ] **T27:** Test Arabic font rendering (Noto Sans Arabic)
- [ ] **T28:** Check header layout in RTL
- [ ] **T29:** Check navigation in RTL (if exists)
- [ ] **T30:** Check card layouts in RTL
- [ ] **T31:** Check footer in RTL
- [ ] **T32:** Test on Chrome, Firefox, Safari
- [ ] **T33:** Test on mobile (iOS and Android)
- [ ] **T34:** Translate priority documentation (README, LAYER_BOUNDARIES)
- [ ] **T35:** Native Arabic speaker review
- [ ] **T36:** Layer-0 terminology validation (AR)
- [ ] **T37:** Address feedback and finalize
- [ ] **T38:** Governance approval for Arabic version

### Chinese (ZH) Translation

- [ ] **T39:** Send Chinese (Simplified) translation request to vendor
- [ ] **T40:** Receive Chinese translation draft
- [ ] **T41:** Create `/zh/index.html` from `/en/index.html` template
- [ ] **T42:** Replace English text with Chinese translation
- [ ] **T43:** Update `lang="zh"` and `dir="ltr"` attributes
- [ ] **T44:** Update language switcher `aria-current="page"` for ZH
- [ ] **T45:** Test Chinese font rendering (Noto Sans SC)
- [ ] **T46:** Verify character display at correct weight
- [ ] **T47:** Check line height and spacing
- [ ] **T48:** Translate priority documentation (README, LAYER_BOUNDARIES)
- [ ] **T49:** Native Chinese speaker review
- [ ] **T50:** Layer-0 terminology validation (ZH)
- [ ] **T51:** Address feedback and finalize
- [ ] **T52:** Governance approval for Chinese version

### Russian (RU) Translation

- [ ] **T53:** Send Russian translation request to vendor
- [ ] **T54:** Receive Russian translation draft
- [ ] **T55:** Create `/ru/index.html` from `/en/index.html` template
- [ ] **T56:** Replace English text with Russian translation
- [ ] **T57:** Update `lang="ru"` and `dir="ltr"` attributes
- [ ] **T58:** Update language switcher `aria-current="page"` for RU
- [ ] **T59:** Verify Cyrillic rendering (system fonts should suffice)
- [ ] **T60:** Translate priority documentation (README, LAYER_BOUNDARIES)
- [ ] **T61:** Native Russian speaker review
- [ ] **T62:** Layer-0 terminology validation (RU)
- [ ] **T63:** Address feedback and finalize
- [ ] **T64:** Governance approval for Russian version

---

## PHASE 4: INTEGRATION & TESTING

### Cross-Language Integration

- [ ] **IN1:** Ensure all 5 language versions exist and are accessible
- [ ] **IN2:** Verify language switcher works from each language page
- [ ] **IN3:** Verify `<link rel="alternate" hreflang="...">` tags on all pages
- [ ] **IN4:** Test navigation between languages
- [ ] **IN5:** Verify root `index.html` redirects/selects correctly

### HTML Validation

- [ ] **V1:** Validate `/en/index.html` with W3C validator
- [ ] **V2:** Validate `/fr/index.html` with W3C validator
- [ ] **V3:** Validate `/ar/index.html` with W3C validator
- [ ] **V4:** Validate `/zh/index.html` with W3C validator
- [ ] **V5:** Validate `/ru/index.html` with W3C validator
- [ ] **V6:** Fix any validation errors

### Link Integrity

- [ ] **L1:** Test all internal links in EN version
- [ ] **L2:** Test all internal links in FR version
- [ ] **L3:** Test all internal links in AR version
- [ ] **L4:** Test all internal links in ZH version
- [ ] **L5:** Test all internal links in RU version
- [ ] **L6:** Test all external links (governance repositories, etc.)
- [ ] **L7:** Fix any broken links

### Visual Testing (All Languages)

- [ ] **VT1:** Screenshot EN version (desktop)
- [ ] **VT2:** Screenshot FR version (desktop)
- [ ] **VT3:** Screenshot AR version (desktop) — verify RTL
- [ ] **VT4:** Screenshot ZH version (desktop)
- [ ] **VT5:** Screenshot RU version (desktop)
- [ ] **VT6:** Screenshot EN version (mobile)
- [ ] **VT7:** Screenshot FR version (mobile)
- [ ] **VT8:** Screenshot AR version (mobile) — verify RTL
- [ ] **VT9:** Screenshot ZH version (mobile)
- [ ] **VT10:** Screenshot RU version (mobile)
- [ ] **VT11:** Compare screenshots for visual consistency
- [ ] **VT12:** Verify brand consistency across languages

### Browser Testing

- [ ] **B1:** Test all versions in Chrome (latest)
- [ ] **B2:** Test all versions in Firefox (latest)
- [ ] **B3:** Test all versions in Safari (latest)
- [ ] **B4:** Test all versions in Edge (latest)
- [ ] **B5:** Test AR version specifically in all browsers (RTL critical)

### Accessibility Audit (WCAG 2.1 AA)

- [ ] **A1:** Verify heading hierarchy (h1 → h2 → h3) in all languages
- [ ] **A2:** Test keyboard navigation (language switcher) in all languages
- [ ] **A3:** Verify `aria-current="page"` on current language link
- [ ] **A4:** Test with screen reader (NVDA or JAWS) — EN version
- [ ] **A5:** Test with screen reader (NVDA or JAWS) — AR version (RTL)
- [ ] **A6:** Verify focus indicators visible in all languages
- [ ] **A7:** Check color contrast (unchanged from baseline, should pass)
- [ ] **A8:** Run WAVE accessibility checker on all versions
- [ ] **A9:** Fix any accessibility issues

### Performance Testing

- [ ] **P1:** Measure page load time (EN)
- [ ] **P2:** Measure page load time (AR) — includes Arabic font
- [ ] **P3:** Measure page load time (ZH) — includes Chinese font
- [ ] **P4:** Verify font subsetting reduces file size
- [ ] **P5:** Test on slow connection (3G simulation)
- [ ] **P6:** Optimize if load time >2 seconds

---

## PHASE 5: GOVERNANCE REVIEW & APPROVAL

### Documentation Finalization

- [ ] **D1:** Update `SITE_MAP.md` with final i18n structure
- [ ] **D2:** Create `/i18n/README.md` explaining governance process
- [ ] **D3:** Document translation memory location and usage
- [ ] **D4:** Document future content update workflow
- [ ] **D5:** Create maintenance guide for future updates

### Pre-Approval Checklist

- [ ] **PA1:** All technical tasks complete
- [ ] **PA2:** All translations validated
- [ ] **PA3:** All tests passing
- [ ] **PA4:** Documentation complete
- [ ] **PA5:** Screenshots captured
- [ ] **PA6:** No Layer-2 constraint violations

### Governance Approval

- [ ] **GA1:** Submit complete i18n implementation for Layer-0 review
- [ ] **GA2:** Provide testing evidence (screenshots, validation reports)
- [ ] **GA3:** Provide translation validation evidence
- [ ] **GA4:** Address any Layer-0 feedback
- [ ] **GA5:** Obtain final Layer-0 approval
- [ ] **GA6:** Tag release: `i18n-multilingual-v1.0`

---

## PHASE 6: DEPLOYMENT

### Pre-Deployment

- [ ] **DE1:** Merge `feature/i18n-multilingual-architecture` to `main`
- [ ] **DE2:** Verify merge successful (no conflicts)
- [ ] **DE3:** Test on staging (if available)
- [ ] **DE4:** Backup current production state

### Deployment

- [ ] **DE5:** Deploy to GitHub Pages
- [ ] **DE6:** Verify all language versions accessible
- [ ] **DE7:** Test live site thoroughly (all languages)
- [ ] **DE8:** Verify fonts load correctly from live domain
- [ ] **DE9:** Test on external network (not localhost)

### Post-Deployment Validation

- [ ] **PD1:** Test all language URLs live
- [ ] **PD2:** Verify language switcher works live
- [ ] **PD3:** Check Google Search Console for `hreflang` recognition
- [ ] **PD4:** Monitor for any issues (24-48 hours)
- [ ] **PD5:** Gather user feedback (if applicable)

---

## PHASE 7: POST-IMPLEMENTATION

### Documentation Updates

- [ ] **PI1:** Update main `README.md` with i18n information
- [ ] **PI2:** Document known issues or limitations (if any)
- [ ] **PI3:** Create troubleshooting guide
- [ ] **PI4:** Archive planning documents

### Team Handoff

- [ ] **PI5:** Train team on new structure (if needed)
- [ ] **PI6:** Document content update workflow
- [ ] **PI7:** Set up translation update process
- [ ] **PI8:** Establish SLA for translation updates

### Celebration & Retrospective

- [ ] **PI9:** Announce successful launch
- [ ] **PI10:** Conduct retrospective (what went well, what to improve)
- [ ] **PI11:** Document lessons learned
- [ ] **PI12:** Close implementation project

---

## SUMMARY STATISTICS

**Total Tasks:** 212  
**Completed:** 0 (✅ Planning complete)  
**In Progress:** 0  
**Blocked:** 0  
**Remaining:** 212

**Estimated Timeline:** 4-6 weeks  
**Critical Path:** Planning → Infrastructure (3d) → EN Baseline (2d) → AR Translation (14d) → RTL Testing (3d) → Governance Approval (7d) → Deploy

---

## TRACKING

**Current Phase:** PRE-IMPLEMENTATION  
**Current Task:** P1 (Architecture plan review)  
**Next Milestone:** Governance approval  
**Blocker:** Awaiting Layer-0 governance review

**Last Updated:** 2026-01-18  
**Status:** READY FOR REVIEW

---

## NOTES

- Use this checklist to track daily progress
- Mark tasks complete with `[x]` as they finish
- Update "Current Task" regularly
- Flag blockers immediately
- Review weekly with governance team

---

**END OF IMPLEMENTATION CHECKLIST**
