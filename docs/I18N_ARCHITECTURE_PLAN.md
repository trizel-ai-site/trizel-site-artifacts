# i18n ARCHITECTURE PLAN — Layer-2 Multilingual System

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display Only)  
**Document Type:** Governance-Directed Planning (Execution Blocked)  
**Date:** 2026-01-18  
**Status:** PLANNING PHASE — NO IMPLEMENTATION YET

---

## EXECUTIVE SUMMARY

This document defines the complete architectural plan for implementing multilingual support across the entire trizel-site Layer-2 presentation repository. This is a **planning-only deliverable** — no code changes, no UI modifications, no implementation yet.

**Scope:** Entire site, all pages, all sections, all future content  
**Languages:** EN (canonical), FR, AR (RTL), ZH, RU  
**Objective:** One-time, scientifically accurate, governance-compliant i18n infrastructure  
**Constraint:** Layer-2 absolute rules remain in force (no logic, no analysis, no execution)

---

## 1. GOVERNANCE COMPLIANCE

### 1.1 Layer-2 Absolute Rules (Non-Negotiable)

The i18n implementation MUST maintain all Layer-2 constraints:

- ❌ **No logic** — No JavaScript translation engines, no runtime processing
- ❌ **No analysis** — No language detection, no user preference tracking
- ❌ **No execution** — No dynamic content generation, no API calls
- ❌ **No interpretive UI** — No marketing tone, no simplification
- ✅ **Display only** — Static, pre-translated, frozen content per language

### 1.2 Governance Authority

- **Layer-0 (trizel-core):** Final authority on terminology, scientific accuracy, policy
- **Translation governance:** All translations must be validated against Layer-0 canonical definitions
- **Content approval:** Each language version requires explicit governance sign-off
- **Immutability:** Once approved, translations are frozen (version-controlled)

### 1.3 Scientific Integrity Requirements

- **Full semantic equivalence** across all languages
- **Institutional accuracy** (not UI-only translation)
- **No marketing tone** — Formal, scientific, institutional language only
- **No simplification** — Complete concept preservation
- **Terminology consistency** — Technical terms must match Layer-0 definitions exactly

---

## 2. CONTENT INVENTORY & STRUCTURE ANALYSIS

### 2.1 Current Content Baseline

**Primary Content File:**
- `index.html` (103 lines, 8 distinct content sections)

**Documentation Files (15 files, ~3,500 lines total):**
- `README.md` — Repository classification and layer architecture
- `BASELINE_SNAPSHOT.md` — Repository state snapshot
- `FINAL_FREEZE_DECLARATION.md` — Scientific freeze declaration
- `docs/ACCOUNT_REGISTRY.md` — Publishing account governance
- `docs/AI_ROLE.md` — AI reference constraints
- `docs/CHANGELOG.md` — Change history
- `docs/CONTENT_CLASSIFICATION.md` — Content classification rules
- `docs/DESIGN_AUDIT.md` — Design compliance audit
- `docs/DESIGN_RECOMMENDATIONS.md` — Design guidelines
- `docs/DOMAIN_BINDING_TRIZEL_AI.md` — Domain configuration
- `docs/EXCLUSIONS.md` — Prohibited content
- `docs/GO_NO_GO_LAYER2.md` — Launch readiness
- `docs/LAUNCH_READINESS.md` — Deployment readiness
- `docs/LAYER2_CHANGELOG.md` — Layer-2 specific changes
- `docs/LAYER2_COMPLIANCE_AUDIT.md` — Compliance verification
- `docs/LAYER_BOUNDARIES.md` — Three-layer separation model
- `docs/PRESENTATION_SCOPE.md` — Layer-2 scope definition
- `docs/SITE_MAP.md` — Complete site structure

**Assets:**
- `assets/css/style.css` — Active stylesheet (light institutional theme)
- `assets/css/main.css` — Alternative stylesheet (not currently used)

### 2.2 Content Categories

**Category A: User-Facing Content (HIGH PRIORITY)**
- Page title and meta descriptions
- Header brand and tagline
- Section headings (8 sections)
- Body text and descriptions
- Navigation labels (if/when added)
- Footer text
- Button/link text

**Category B: Documentation (MEDIUM PRIORITY)**
- README.md and governance documents
- Technical documentation
- Policy documents
- Audit and compliance documents

**Category C: Technical Content (LOW PRIORITY - ENGLISH ONLY)**
- Code examples (if any)
- Git commit messages
- Technical specifications
- CODEOWNERS file

### 2.3 Translatable Text Units

**From index.html (47 distinct text segments):**

1. Meta: `<title>`, `lang` attribute
2. Header: Brand name, memory marker, tagline
3. Section: Layer-2 Notice (heading + 2 paragraphs)
4. Section: Institutional Overview (heading + 1 paragraph)
5. Section: Governance Status (heading + 2 dl items)
6. Section: Scope & Constraints (heading + 4 list items)
7. Section: References (heading + 3 subsections + 7 links)
8. Section: Contact (heading + 2 paragraphs)
9. Footer: Status message

**Special Considerations:**
- "TRIZEL" — Brand name (DO NOT TRANSLATE)
- "AUTO DZ ACT" — Memory marker (DO NOT TRANSLATE)
- "Layer-0", "Layer-1", "Layer-2" — System terminology (DO NOT TRANSLATE)
- Repository names (trizel-core, trizel-lab) — (DO NOT TRANSLATE)
- URLs and paths — (DO NOT TRANSLATE)

---

## 3. LANGUAGE SOURCE-OF-TRUTH MODEL

### 3.1 Canonical Language: English (EN)

**Status:** Single source of truth  
**Authority:** All EN content derives from Layer-0 governance definitions  
**Workflow:** EN content frozen first, then translated  

**EN Content Baseline:**
- `index.html` (current version)
- All documentation files (current versions)
- Governance-approved terminology

### 3.2 Translation Workflow Model

```
Layer-0 (trizel-core) → EN canonical definitions
         ↓
Layer-2 EN content creation (this repository)
         ↓
Governance approval of EN baseline
         ↓
Professional translation to FR, AR, ZH, RU
         ↓
Layer-0 terminology validation
         ↓
Governance approval per language
         ↓
Freeze and version control
```

### 3.3 Translation Governance Matrix

| Language | ISO Code | Direction | Script | Font Requirements | Governance Validator |
|----------|----------|-----------|--------|-------------------|---------------------|
| English  | en       | LTR       | Latin  | System UI fonts   | Layer-0 (canonical) |
| French   | fr       | LTR       | Latin  | System UI fonts   | Layer-0 + FR expert |
| Arabic   | ar       | **RTL**   | Arabic | Noto Sans Arabic  | Layer-0 + AR expert |
| Chinese  | zh       | LTR       | Han    | Noto Sans SC      | Layer-0 + ZH expert |
| Russian  | ru       | LTR       | Cyrillic | System UI fonts | Layer-0 + RU expert |

### 3.4 Terminology Dictionary (To Be Created)

**Required:** Central terminology glossary mapping Layer-0 definitions to each language:

- "Layer-0" → FR: "Couche-0", AR: "الطبقة-0", ZH: "第0层", RU: "Уровень-0"
- "Governance" → FR: "Gouvernance", AR: "الحوكمة", ZH: "治理", RU: "Управление"
- "Presentation" → FR: "Présentation", AR: "العرض", ZH: "展示", RU: "Представление"
- (Complete list TBD with Layer-0 approval)

---

## 4. RTL HANDLING APPROACH

### 4.1 RTL Requirements for Arabic

**Critical:** RTL is a first-class concern, not an afterthought.

**Technical Requirements:**
- `dir="rtl"` attribute on `<html>` element for Arabic pages
- `lang="ar"` attribute for proper rendering
- Mirror layout elements (flex, grid) automatically via CSS logical properties
- Font stack with Arabic support (Noto Sans Arabic)
- Text alignment: natural (right for RTL, left for LTR)
- No hardcoded directional values

### 4.2 CSS Strategy for RTL

**Current approach:** `assets/css/style.css` uses physical properties (left, right, margin-left, etc.)

**Required changes:**
1. Convert to CSS Logical Properties:
   - `margin-left` → `margin-inline-start`
   - `margin-right` → `margin-inline-end`
   - `padding-left` → `padding-inline-start`
   - `padding-right` → `padding-inline-end`
   - `text-align: left` → `text-align: start`
   - `border-left` → `border-inline-start`
   - `border-right` → `border-inline-end`

2. Keep single stylesheet (no separate RTL CSS)
3. Browser handles directionality automatically

### 4.3 RTL Testing Checklist

- [ ] Header layout mirrors correctly
- [ ] Navigation (when added) mirrors correctly
- [ ] Card layouts maintain visual hierarchy
- [ ] Lists and bullets render on correct side
- [ ] Icon placement (if any) mirrors
- [ ] Borders and separators appear correctly
- [ ] Footer layout mirrors
- [ ] No horizontal scroll issues
- [ ] Text truncation works correctly
- [ ] Links and buttons accessible

### 4.4 Mixed-Direction Content

**Challenge:** English technical terms in Arabic text (e.g., "Layer-0" in Arabic sentence)

**Solution:** Use Unicode bidirectional marks:
- LRM (U+200E) for LTR text in RTL context
- RLM (U+200F) for RTL text in LTR context
- Wrap technical terms: `<span dir="ltr">Layer-0</span>`

---

## 5. FILE & FOLDER ORGANIZATION

### 5.1 Proposed Directory Structure

```
trizel-site/
├── index.html                 # Redirect or language selector (TBD)
├── en/
│   ├── index.html            # English version (canonical)
│   └── docs/                 # English documentation (existing)
│       ├── README.md
│       ├── LAYER_BOUNDARIES.md
│       └── [all existing docs]
├── fr/
│   ├── index.html            # French version
│   └── docs/                 # French documentation
│       ├── README.md
│       └── [translated docs]
├── ar/
│   ├── index.html            # Arabic version (RTL)
│   └── docs/                 # Arabic documentation (RTL)
│       ├── README.md
│       └── [translated docs]
├── zh/
│   ├── index.html            # Chinese version
│   └── docs/                 # Chinese documentation
│       ├── README.md
│       └── [translated docs]
├── ru/
│   ├── index.html            # Russian version
│   └── docs/                 # Russian documentation
│       ├── README.md
│       └── [translated docs]
├── assets/
│   ├── css/
│   │   ├── style.css         # Shared stylesheet (RTL-aware)
│   │   └── fonts.css         # Font declarations (NEW)
│   └── fonts/                # Web fonts (NEW)
│       ├── noto-sans-arabic/ # For Arabic
│       └── noto-sans-sc/     # For Simplified Chinese
├── i18n/
│   ├── terminology.json      # Central terminology dictionary (NEW)
│   ├── validation.schema.json # Translation validation schema (NEW)
│   └── README.md             # i18n governance documentation (NEW)
└── [existing files]
```

### 5.2 Alternative Structure (Flat)

```
trizel-site/
├── index.html                # English (default)
├── index.fr.html             # French
├── index.ar.html             # Arabic (RTL)
├── index.zh.html             # Chinese
├── index.ru.html             # Russian
├── docs/
│   ├── [existing English docs]
│   ├── fr/                   # French docs
│   ├── ar/                   # Arabic docs (RTL)
│   ├── zh/                   # Chinese docs
│   └── ru/                   # Russian docs
├── assets/
│   └── [shared assets]
└── i18n/
    └── [governance files]
```

### 5.3 Recommendation: Subdirectory Structure (Option 1)

**Rationale:**
- Clear separation by language
- Mirrors content structure within each language
- Easier to manage complete translations
- Better for future expansion (more pages)
- Cleaner URLs: `/en/`, `/fr/`, `/ar/`, `/zh/`, `/ru/`
- Maintains existing docs/ structure within each language

**Trade-offs:**
- Requires moving existing files
- More directories
- Slightly more complex initial setup

### 5.4 Root-Level Files Strategy

**Option A: Language Selector**
- Root `index.html` becomes language selection page
- User explicitly chooses language
- No automatic detection (complies with "no logic" rule)

**Option B: English Default + Language Switcher**
- Root `index.html` remains English version
- Language switcher in header/footer
- Other languages in subdirectories

**Option C: Redirect to /en/**
- Root `index.html` uses `<meta http-equiv="refresh" content="0; url=/en/">` (no JavaScript)
- Canonical English version at `/en/index.html`
- Pure HTML redirect (Layer-2 compliant)

**Recommendation: Option C** (aligns with "no logic" constraint)

---

## 6. FONT STRATEGY

### 6.1 Font Requirements by Language

**Latin Scripts (EN, FR, RU):**
- Current: System UI fonts (acceptable)
- Stack: `system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial`
- No changes needed (system fonts support Cyrillic)

**Arabic Script (AR):**
- Current: System fonts (insufficient for institutional quality)
- Required: Professional Arabic font with full diacritic support
- Recommendation: **Noto Sans Arabic** (Google Fonts, SIL OFL 1.1 license)
- Fallback: `'Traditional Arabic', 'Arabic Typesetting', Arial`

**Chinese Script (ZH):**
- Current: System fonts (inconsistent across platforms)
- Required: Simplified Chinese font (institutional quality)
- Recommendation: **Noto Sans SC** (Simplified Chinese, Google Fonts, SIL OFL 1.1 license)
- Fallback: `'Microsoft YaHei', 'PingFang SC', SimHei, sans-serif`

### 6.2 Font Loading Strategy

**Option A: Google Fonts CDN**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&family=Noto+Sans+SC&display=swap" rel="stylesheet">
```

**Option B: Self-Hosted**
- Download Noto Sans Arabic & SC from Google Fonts
- Host in `/assets/fonts/`
- Use `@font-face` declarations
- Better for privacy, performance, offline access

**Recommendation: Option B (Self-Hosted)**
- Layer-2 compliance (no external dependencies after initial load)
- Better performance (no external requests)
- Immutable (fonts frozen with content)
- License compliant (SIL OFL 1.1 allows redistribution)

### 6.3 Font Stack Definition

```css
/* English, French */
:root[lang="en"], :root[lang="fr"] {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Russian */
:root[lang="ru"] {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Arabic */
:root[lang="ar"] {
  font-family: 'Noto Sans Arabic', 'Traditional Arabic', 'Arabic Typesetting', Arial, sans-serif;
}

/* Simplified Chinese */
:root[lang="zh"] {
  font-family: 'Noto Sans SC', 'Microsoft YaHei', 'PingFang SC', SimHei, sans-serif;
}
```

---

## 7. LANGUAGE SWITCHING MECHANISM

### 7.1 No JavaScript Requirement

**Layer-2 Constraint:** No dynamic language switching  
**Solution:** Static HTML links only

### 7.2 Language Switcher Component (HTML Only)

**Location:** Header (consistent across all pages)

**Design:**
```html
<nav class="language-switcher" aria-label="Language Selection">
  <ul>
    <li><a href="/en/" hreflang="en" lang="en">English</a></li>
    <li><a href="/fr/" hreflang="fr" lang="fr">Français</a></li>
    <li><a href="/ar/" hreflang="ar" lang="ar" dir="rtl">العربية</a></li>
    <li><a href="/zh/" hreflang="zh" lang="zh">简体中文</a></li>
    <li><a href="/ru/" hreflang="ru" lang="ru">Русский</a></li>
  </ul>
</nav>
```

**Current Page Indicator:**
- Add `aria-current="page"` to current language link
- Style current language differently (bold, different color)

### 7.3 SEO & Accessibility

**HTML `<head>` additions for each page:**

```html
<!-- Language alternates for SEO -->
<link rel="alternate" hreflang="en" href="https://trizel-ai.com/en/" />
<link rel="alternate" hreflang="fr" href="https://trizel-ai.com/fr/" />
<link rel="alternate" hreflang="ar" href="https://trizel-ai.com/ar/" />
<link rel="alternate" hreflang="zh" href="https://trizel-ai.com/zh/" />
<link rel="alternate" hreflang="ru" href="https://trizel-ai.com/ru/" />
<link rel="alternate" hreflang="x-default" href="https://trizel-ai.com/en/" />

<!-- Current page language -->
<html lang="en" dir="ltr">
<!-- or for Arabic: -->
<html lang="ar" dir="rtl">
```

---

## 8. IMPLEMENTATION BOUNDARIES & PR SCOPE

### 8.1 What WILL Change (i18n Implementation PR)

**Phase 1: Infrastructure Setup**
1. Create directory structure (`/en/`, `/fr/`, `/ar/`, `/zh/`, `/ru/`)
2. Move existing content to `/en/` (canonical English)
3. Create root `index.html` redirect to `/en/`
4. Update CSS to use logical properties (RTL-ready)
5. Add font declarations and self-hosted fonts
6. Create language switcher component
7. Add `<link rel="alternate">` tags for SEO

**Phase 2: English Baseline (EN)**
8. Validate existing English content against Layer-0
9. Update EN content with language switcher
10. Add proper `lang` and `dir` attributes
11. Freeze English version

**Phase 3: Translations (FR, AR, ZH, RU)**
12. Create translated versions of `index.html` for each language
13. Translate essential documentation (README.md, LAYER_BOUNDARIES.md, etc.)
14. Apply language-specific fonts
15. Validate RTL layout for Arabic
16. Governance approval per language

**Phase 4: Validation & Testing**
17. Visual regression testing (manual screenshots)
18. RTL layout verification
19. Font rendering verification
20. Link integrity check
21. Accessibility audit (WCAG 2.1 AA)

### 8.2 What WILL NOT Change

**Preserved (No Changes):**
- ❌ No UI redesign (intentionally deferred)
- ❌ No visual polish (comes after i18n)
- ❌ No color changes
- ❌ No layout redesign
- ❌ No new features
- ❌ No JavaScript
- ❌ No build tools
- ❌ No dynamic content
- ❌ No user tracking
- ❌ No analytics
- ❌ No cookies

**Governance Files (Protected by CODEOWNERS):**
- No changes to `.github/workflows/`
- No changes to `.github/CODEOWNERS`
- No changes to `CNAME` (if exists)
- No changes to governance-protected docs (without approval)

### 8.3 PR Boundary Definition

**Single PR Scope:**
- Complete i18n infrastructure
- All 5 language versions
- RTL support
- Font integration
- Language switcher
- SEO optimization

**Rationale for Single PR:**
- i18n is atomic (can't be "partially multilingual")
- Incremental i18n creates broken states
- Single review/approval cycle per governance
- Prevents drift between languages

**Alternative (Multiple PRs):**
If governance requires staged rollout:
1. **PR 1:** Infrastructure + EN baseline
2. **PR 2:** FR + RU (Latin/Cyrillic scripts)
3. **PR 3:** AR (RTL) + ZH (Han script)

---

## 9. VALIDATION & QUALITY ASSURANCE

### 9.1 Translation Quality Checklist

Per language, verify:
- [ ] Full semantic equivalence to English
- [ ] Terminology matches Layer-0 definitions
- [ ] No marketing tone or simplification
- [ ] Institutional formality maintained
- [ ] Grammar and syntax correct
- [ ] Technical terms handled appropriately
- [ ] Cultural adaptation (where necessary, minimal)
- [ ] No transliteration of translatable terms

### 9.2 Technical Quality Checklist

Per language page:
- [ ] HTML validation (W3C validator)
- [ ] `lang` attribute correct
- [ ] `dir` attribute correct (RTL for Arabic)
- [ ] Font rendering correct
- [ ] CSS applies correctly
- [ ] Language switcher works
- [ ] Internal links valid
- [ ] External links valid
- [ ] No broken references
- [ ] Meta tags correct

### 9.3 Accessibility Checklist (WCAG 2.1 AA)

Per language:
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Language switcher accessible (keyboard navigation)
- [ ] `hreflang` attributes correct
- [ ] `aria-current="page"` on current language
- [ ] Sufficient color contrast (unchanged from baseline)
- [ ] Focus indicators visible
- [ ] No reliance on color alone
- [ ] Alt text for images (if added)
- [ ] Semantic HTML structure

### 9.4 RTL-Specific Validation (Arabic)

- [ ] Visual inspection in Chrome, Firefox, Safari
- [ ] Layout mirrors correctly
- [ ] No horizontal overflow
- [ ] Text alignment natural (right)
- [ ] Mixed-direction text renders correctly
- [ ] English technical terms readable in Arabic context
- [ ] Navigation mirrors correctly
- [ ] Footer mirrors correctly
- [ ] No CSS assumptions about directionality

### 9.5 Font Rendering Validation

Per language:
- [ ] Arabic diacritics render correctly
- [ ] Chinese characters display at correct weight
- [ ] No font fallback issues
- [ ] Line height appropriate for script
- [ ] Letter spacing (if any) appropriate
- [ ] Bold/italic work correctly
- [ ] Font files load correctly (self-hosted)

---

## 10. RISK ASSESSMENT & MITIGATION

### 10.1 High-Risk Areas

**Risk 1: RTL Layout Breakage**
- **Impact:** Arabic version unusable
- **Probability:** Medium (first RTL implementation)
- **Mitigation:** 
  - Comprehensive CSS logical properties conversion
  - Manual testing in multiple browsers
  - Early RTL prototype review
  - Dedicated RTL testing phase

**Risk 2: Translation Inaccuracy**
- **Impact:** Semantic drift, loss of scientific precision
- **Probability:** Medium (complex institutional language)
- **Mitigation:**
  - Professional translators with scientific background
  - Layer-0 terminology validation
  - Native speaker review
  - Back-translation verification

**Risk 3: Font Rendering Issues**
- **Impact:** Unreadable text, poor user experience
- **Probability:** Low-Medium (Arabic & Chinese fonts)
- **Mitigation:**
  - Self-host fonts (control over quality)
  - Test on multiple platforms (Windows, Mac, Linux, mobile)
  - Robust fallback stacks
  - Font subsetting for performance

**Risk 4: Governance Approval Delays**
- **Impact:** Implementation blocked
- **Probability:** Medium (5 languages × governance review)
- **Mitigation:**
  - Clear approval process defined upfront
  - Staged approvals (EN first, then others)
  - Dedicated reviewers per language
  - Timeline buffer built in

**Risk 5: Link Rot / Navigation Complexity**
- **Impact:** Broken cross-language links, poor UX
- **Probability:** Low (static site, simple structure)
- **Mitigation:**
  - Systematic link validation
  - Consistent URL structure
  - Automated link checker (if available)
  - Manual verification

### 10.2 Medium-Risk Areas

**Risk 6: File/Folder Structure Conflicts**
- **Impact:** Git merge conflicts, confusion
- **Mitigation:** Clean restructure in single PR, clear documentation

**Risk 7: CSS Specificity Issues**
- **Impact:** Styling conflicts between languages
- **Mitigation:** Use language-specific selectors, test all languages

**Risk 8: SEO Confusion**
- **Impact:** Search engines index wrong language
- **Mitigation:** Proper `hreflang` tags, sitemaps, robots.txt

**Risk 9: Future Content Multiplication**
- **Impact:** Every content change requires 5× effort
- **Mitigation:** This is expected and acceptable per governance (one-time architecture setup)

### 10.3 Low-Risk Areas

**Risk 10: Performance Impact**
- **Impact:** Slower page load (font files)
- **Mitigation:** Font subsetting, browser caching, preload hints

**Risk 11: Mobile Responsiveness**
- **Impact:** Language switcher breaks on mobile
- **Mitigation:** Existing CSS already responsive, minimal changes

---

## 11. DEPENDENCIES & EXTERNAL RESOURCES

### 11.1 Required External Resources

**Fonts (Self-Hosted, License: SIL OFL 1.1):**
- Noto Sans Arabic (for AR)
  - Source: Google Fonts
  - URL: https://fonts.google.com/noto/specimen/Noto+Sans+Arabic
  - License: SIL Open Font License 1.1 (redistribution allowed)
  - Subset: Regular (400), Bold (700)

- Noto Sans SC (for ZH)
  - Source: Google Fonts
  - URL: https://fonts.google.com/noto/specimen/Noto+Sans+SC
  - License: SIL Open Font License 1.1 (redistribution allowed)
  - Subset: Regular (400), Bold (700)

**Translation Services (TBD):**
- Professional human translators (FR, AR, ZH, RU)
- Scientific/technical translation specialization required
- Layer-0 terminology validation process

**Validation Tools:**
- W3C HTML Validator: https://validator.w3.org/
- WAVE Accessibility Tool: https://wave.webaim.org/
- Browser DevTools (Chrome, Firefox, Safari)

### 11.2 No Build Tools Required

**Layer-2 Compliance:** Pure static HTML/CSS
- No npm/yarn
- No webpack/vite/parcel
- No preprocessors (Sass/Less)
- No templating engines
- No JavaScript frameworks

**Manual Workflow:**
- Create HTML files manually
- Copy and translate content
- Manual testing
- Git-based version control

---

## 12. IMPLEMENTATION TIMELINE & PHASES

### 12.1 Estimated Effort

**Phase 1: Planning & Preparation (CURRENT)**
- Status: ✅ Complete (this document)
- Duration: 1-2 days

**Phase 2: Infrastructure Setup**
- Tasks: Directory structure, CSS conversion, font integration
- Duration: 2-3 days
- Dependencies: None

**Phase 3: English Baseline Validation**
- Tasks: Content audit, Layer-0 validation, freeze
- Duration: 1-2 days
- Dependencies: Layer-0 reviewer availability

**Phase 4: Translations (Parallel)**
- Tasks: FR + RU translation (1-2 weeks)
- Tasks: AR translation + RTL testing (1-2 weeks, critical path)
- Tasks: ZH translation (1-2 weeks)
- Dependencies: Professional translators, Layer-0 validation

**Phase 5: Integration & Testing**
- Tasks: Assemble all languages, test, validate
- Duration: 3-5 days
- Dependencies: All translations complete

**Phase 6: Governance Review & Approval**
- Tasks: Per-language governance sign-off
- Duration: 1-2 weeks (buffer for review cycles)
- Dependencies: Governance team availability

**Total Estimated Timeline: 4-6 weeks**
(Assuming parallel translation work and no major blockers)

### 12.2 Critical Path

```
Planning (✅) → Infrastructure (3d) → EN Baseline (2d) → AR Translation (14d) → RTL Testing (3d) → Governance Approval (7d) → Merge
```

**Critical Path Items:**
1. Arabic translation (longest language task)
2. RTL testing and validation (highest technical risk)
3. Layer-0 governance approval (external dependency)

### 12.3 Parallelization Opportunities

- FR, ZH, RU translations can proceed simultaneously with AR
- Documentation translation can proceed after main page translation
- Font integration can proceed during translation phase
- CSS logical properties conversion can proceed independently

---

## 13. POST-IMPLEMENTATION MAINTENANCE

### 13.1 Content Update Workflow

**When English content changes:**
1. Update EN version first
2. Flag other languages as "out of sync"
3. Trigger translation update process
4. Layer-0 validation per language
5. Governance approval per language
6. Update all languages before merging

**Challenge:** 5× multiplication factor for all future changes  
**Acceptance:** This is expected and intentional per governance requirements

### 13.2 Translation Memory

**Recommendation:** Maintain translation memory database
- File: `/i18n/translation-memory.json`
- Structure: Key-value pairs, EN → {FR, AR, ZH, RU}
- Purpose: Consistency across future content updates
- Tool: Manual maintenance (no automated tooling per Layer-2)

**Example:**
```json
{
  "governance": {
    "en": "Governance",
    "fr": "Gouvernance",
    "ar": "الحوكمة",
    "zh": "治理",
    "ru": "Управление"
  },
  "layer-2-notice": {
    "en": "This repository is Layer-2 (Presentation/Display only)...",
    "fr": "Ce dépôt est de Couche-2 (Présentation/Affichage uniquement)...",
    "ar": "هذا المستودع من الطبقة-2 (العرض/العرض فقط)...",
    "zh": "此存储库为第2层（仅演示/显示）...",
    "ru": "Этот репозиторий находится на Уровне-2 (только презентация/отображение)..."
  }
}
```

### 13.3 Version Control Strategy

**Git Strategy:**
- Each language lives in its directory (independent file paths)
- Changes to one language don't affect others (no merge conflicts)
- Clear commit messages: "Update FR translation: governance section"
- Tag releases per language: `v1.0-en`, `v1.0-fr`, `v1.0-ar`, etc.

### 13.4 Governance Checkpoints

**Future content updates require:**
- Layer-0 approval for EN content changes
- Translation updates within 30 days of EN change
- Per-language governance sign-off
- Version increment

---

## 14. FUTURE EXPANSION CONSIDERATIONS

### 14.1 Additional Languages (Not in Scope)

**If future expansion needed:**
- Same infrastructure supports additional languages
- Add new directory: `/es/`, `/de/`, `/ja/`, etc.
- Update language switcher
- Follow same workflow

**Candidate Languages (Potential Future):**
- Spanish (ES) — Large global reach
- German (DE) — Strong in EU scientific community
- Japanese (JA) — Strong in Asian scientific community
- Portuguese (PT) — Growing scientific presence

### 14.2 Additional Pages (Future)

**If site expands beyond single page:**
- Same structure: `/en/about.html`, `/fr/about.html`, etc.
- Language switcher on each page
- Consistent navigation structure across languages
- 5× multiplication factor for each new page (accepted)

### 14.3 Dynamic Content (Forbidden)

**Layer-2 absolute constraint:** No dynamic content  
**Not allowed, now or future:**
- JavaScript translation libraries
- Dynamic language detection
- User preference storage
- Content Management Systems (CMS)
- Automated translation APIs

---

## 15. APPENDICES

### 15.1 Terminology Glossary (Sample)

| English | Français | العربية | 简体中文 | Русский |
|---------|----------|---------|---------|---------|
| Layer-0 | Couche-0 | الطبقة-0 | 第0层 | Уровень-0 |
| Layer-1 | Couche-1 | الطبقة-1 | 第1层 | Уровень-1 |
| Layer-2 | Couche-2 | الطبقة-2 | 第2层 | Уровень-2 |
| Governance | Gouvernance | الحوكمة | 治理 | Управление |
| Presentation | Présentation | العرض | 展示 | Представление |
| Repository | Dépôt | المستودع | 存储库 | Репозиторий |
| Authority | Autorité | السلطة | 权威 | Власть |
| Scientific | Scientifique | علمي | 科学的 | Научный |
| Institutional | Institutionnel | مؤسسي | 机构的 | Институциональный |
| Compliance | Conformité | الامتثال | 合规 | Соблюдение |

*(Full glossary to be developed with Layer-0 approval)*

### 15.2 CSS Logical Properties Conversion Map

| Physical Property | Logical Property | Notes |
|-------------------|------------------|-------|
| `margin-left` | `margin-inline-start` | Respects writing direction |
| `margin-right` | `margin-inline-end` | Respects writing direction |
| `margin-top` | `margin-block-start` | Usually safe (vertical) |
| `margin-bottom` | `margin-block-end` | Usually safe (vertical) |
| `padding-left` | `padding-inline-start` | Respects writing direction |
| `padding-right` | `padding-inline-end` | Respects writing direction |
| `border-left` | `border-inline-start` | Respects writing direction |
| `border-right` | `border-inline-end` | Respects writing direction |
| `text-align: left` | `text-align: start` | Natural alignment |
| `text-align: right` | `text-align: end` | Natural alignment |
| `left: 0` | `inset-inline-start: 0` | For positioned elements |
| `right: 0` | `inset-inline-end: 0` | For positioned elements |

### 15.3 Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| CSS Logical Properties | 89+ | 89+ | 15+ | 89+ |
| `dir="rtl"` | ✅ All | ✅ All | ✅ All | ✅ All |
| `hreflang` | ✅ All | ✅ All | ✅ All | ✅ All |
| Web Fonts (@font-face) | ✅ All | ✅ All | ✅ All | ✅ All |
| Arabic Rendering | ✅ All | ✅ All | ✅ All | ✅ All |
| Chinese Rendering | ✅ All | ✅ All | ✅ All | ✅ All |

**Minimum Browser Support:** Last 2 versions of major browsers

### 15.4 License Compliance

**Noto Fonts (SIL OFL 1.1):**
- ✅ Redistribution allowed
- ✅ Modification allowed
- ✅ Commercial use allowed
- ✅ Private use allowed
- ❌ No warranty
- Required: Include license file in `/assets/fonts/OFL.txt`

**Attribution:**
- Fonts: Google Fonts / Noto Project
- License: SIL Open Font License 1.1
- No additional attribution required for use

---

## 16. DECISION LOG

### 16.1 Key Architectural Decisions

**Decision 1: Subdirectory Structure**
- **Chosen:** `/en/`, `/fr/`, `/ar/`, `/zh/`, `/ru/` subdirectories
- **Rationale:** Cleaner URLs, mirrors content structure, easier expansion
- **Alternatives Considered:** Flat structure (`index.fr.html`), rejected for scalability

**Decision 2: Self-Hosted Fonts**
- **Chosen:** Download and host Noto fonts locally
- **Rationale:** Layer-2 compliance (no external dependencies), performance, immutability
- **Alternatives Considered:** Google Fonts CDN, rejected for external dependency

**Decision 3: CSS Logical Properties**
- **Chosen:** Convert all directional CSS to logical properties
- **Rationale:** Single stylesheet for all languages, automatic RTL support
- **Alternatives Considered:** Separate RTL CSS, rejected for maintenance burden

**Decision 4: English as Canonical**
- **Chosen:** English is single source of truth, all translations derive from EN
- **Rationale:** Aligns with Layer-0 governance language, simplifies workflow
- **Alternatives Considered:** Multi-source, rejected for complexity

**Decision 5: No JavaScript**
- **Chosen:** Pure HTML language switching
- **Rationale:** Layer-2 "no logic" constraint (non-negotiable)
- **Alternatives Considered:** JavaScript detection/switching, forbidden by governance

**Decision 6: Single PR Implementation**
- **Chosen:** Complete i18n in one PR (all 5 languages)
- **Rationale:** i18n is atomic, prevents broken intermediate states
- **Alternatives Considered:** Staged per language, rejected for governance complexity

### 16.2 Open Questions (Require Governance Input)

1. **Translation Vendor Selection**
   - Who will perform professional translations?
   - Budget allocation?
   - Timeline expectations?

2. **Governance Review Process**
   - Who reviews/approves each language?
   - Sequential or parallel review?
   - Approval criteria?

3. **Documentation Priority**
   - Which docs translate first?
   - Acceptable to have EN-only docs initially?

4. **Root index.html Behavior**
   - Redirect to `/en/`?
   - Language selector page?
   - Browser language detection (forbidden)?

5. **Future Content Update SLA**
   - How long to update translations after EN change?
   - Acceptable to have temporarily out-of-sync translations?

---

## 17. SUCCESS CRITERIA

### 17.1 Technical Success Criteria

- [ ] All 5 languages deployed and accessible
- [ ] RTL layout works correctly for Arabic
- [ ] Fonts render correctly for all languages
- [ ] Language switcher functional on all pages
- [ ] No JavaScript present
- [ ] No broken links
- [ ] HTML validates (W3C)
- [ ] CSS applies correctly across all languages
- [ ] Mobile responsive (all languages)
- [ ] Fast load times (<2s)

### 17.2 Content Success Criteria

- [ ] Full semantic equivalence across languages
- [ ] Terminology matches Layer-0 definitions
- [ ] Institutional tone maintained
- [ ] No marketing language
- [ ] No simplification of technical content
- [ ] Grammar and syntax correct (native validation)
- [ ] Cultural adaptation minimal and appropriate

### 17.3 Governance Success Criteria

- [ ] Layer-2 constraints maintained (no logic, no analysis, no execution)
- [ ] Layer-0 approval obtained for all languages
- [ ] Translation governance validated
- [ ] Documentation complete
- [ ] Future maintenance workflow defined
- [ ] Version control clean

### 17.4 Accessibility Success Criteria

- [ ] WCAG 2.1 AA compliance (all languages)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Proper heading hierarchy
- [ ] Sufficient color contrast
- [ ] Language attributes correct
- [ ] Semantic HTML throughout

---

## 18. FINAL RECOMMENDATIONS

### 18.1 Proceed with Implementation

**Recommendation:** This architecture plan is sound and ready for execution.

**Rationale:**
- Complies with all Layer-2 governance constraints
- Addresses RTL as first-class concern
- Provides scalable, maintainable structure
- Minimizes technical risk
- Aligns with institutional quality standards

### 18.2 Critical Success Factors

1. **Layer-0 governance engagement** — Early and continuous
2. **Professional translation quality** — Non-negotiable
3. **RTL testing rigor** — Arabic is highest technical risk
4. **Single PR approach** — Prevents broken states
5. **Font quality** — Institutional presentation requires high-quality typography

### 18.3 Pre-Implementation Checklist

Before starting implementation:
- [ ] Governance approval of this plan
- [ ] Translation vendor selected
- [ ] Layer-0 reviewers identified per language
- [ ] Timeline agreed
- [ ] Budget approved (if applicable)
- [ ] Font licenses verified
- [ ] Root `index.html` behavior decided

### 18.4 Next Steps

**Immediate (After Plan Approval):**
1. Obtain governance sign-off on this plan
2. Select translation vendor(s)
3. Assign language validators
4. Download and prepare fonts
5. Create implementation branch

**Implementation Phase:**
1. Execute Phase 1: Infrastructure (3 days)
2. Execute Phase 2: EN Baseline (2 days)
3. Execute Phase 3: Translations (2 weeks parallel)
4. Execute Phase 4: Integration & Testing (5 days)
5. Execute Phase 5: Governance Review (1-2 weeks)
6. Merge to main

---

## 19. DOCUMENT GOVERNANCE

**Status:** PLANNING COMPLETE — AWAITING GOVERNANCE APPROVAL  
**Version:** 1.0  
**Date:** 2026-01-18  
**Author:** GitHub Copilot (Governance-Directed)  
**Approved By:** [Pending]  
**Next Review:** After governance approval

**Change Log:**
- 2026-01-18 v1.0: Initial plan created

**Distribution:**
- Layer-0 governance team (trizel-core)
- Layer-2 implementation team (trizel-site)
- Translation vendor (TBD)
- Language validators (TBD)

---

**END OF PLANNING DOCUMENT**

---

## APPENDIX: QUICK REFERENCE

### One-Sentence Summary
This plan defines a static, governance-compliant, RTL-aware, five-language i18n architecture for trizel-site using subdirectory structure, self-hosted fonts, CSS logical properties, and HTML-only language switching.

### Core Principles
1. English is canonical source of truth
2. RTL is first-class, not a patch
3. No JavaScript (Layer-2 constraint)
4. Professional translation quality
5. One-time implementation (no repetition)
6. Scientific accuracy over simplification

### Key Deliverables
1. Five language versions: EN, FR, AR, ZH, RU
2. Subdirectory structure: `/en/`, `/fr/`, `/ar/`, `/zh/`, `/ru/`
3. Self-hosted Noto fonts for Arabic and Chinese
4. CSS logical properties for automatic RTL support
5. HTML language switcher (no JavaScript)
6. Complete documentation and maintenance workflow

### Critical Risks
1. RTL layout breakage (Arabic)
2. Translation inaccuracy
3. Font rendering issues
4. Governance approval delays

### Timeline
4-6 weeks total (planning complete, implementation pending approval)

---

**Layer-2 i18n Architecture Plan — COMPLETE**  
**Status:** Ready for Governance Review  
**Next Action:** Obtain approval to proceed with implementation
