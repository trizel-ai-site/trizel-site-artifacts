# i18n Implementation Testing Guide

## Manual Testing Checklist

### 1. File Structure Verification ✅
- [x] Root index.html redirects to /en/
- [x] All 5 language directories exist: en, fr, ar, zh, ru
- [x] Each language has index.html
- [x] English docs copied to en/docs/
- [x] Assets structure maintained

### 2. HTML Validation

Test each language version:

```bash
# English
curl https://validator.w3.org/nu/?doc=https://trizel-ai-site.github.io/trizel-site/en/

# French
curl https://validator.w3.org/nu/?doc=https://trizel-ai-site.github.io/trizel-site/fr/

# Arabic
curl https://validator.w3.org/nu/?doc=https://trizel-ai-site.github.io/trizel-site/ar/

# Chinese
curl https://validator.w3.org/nu/?doc=https://trizel-ai-site.github.io/trizel-site/zh/

# Russian
curl https://validator.w3.org/nu/?doc=https://trizel-ai-site.github.io/trizel-site/ru/
```

### 3. Browser Testing

#### English Version (LTR)
- [ ] Open https://trizel-ai-site.github.io/trizel-site/en/
- [ ] Verify layout is correct
- [ ] Check language switcher appears in header
- [ ] Verify "English" is highlighted in switcher
- [ ] Test all language links work

#### French Version (LTR)
- [ ] Open https://trizel-ai-site.github.io/trizel-site/fr/
- [ ] Verify French text displays correctly
- [ ] Check layout matches English
- [ ] Verify "Français" is highlighted in switcher
- [ ] Test navigation between languages

#### Arabic Version (RTL) — CRITICAL
- [ ] Open https://trizel-ai-site.github.io/trizel-site/ar/
- [ ] Verify `dir="rtl"` is applied (page flows right-to-left)
- [ ] Check header layout mirrors correctly
- [ ] Verify Arabic text renders properly
- [ ] Check mixed LTR content (Layer-0, TRIZEL) renders correctly
- [ ] Verify borders appear on correct side (inline-start)
- [ ] Check language switcher mirrors
- [ ] Test in Chrome, Firefox, Safari

#### Chinese Version (LTR)
- [ ] Open https://trizel-ai-site.github.io/trizel-site/zh/
- [ ] Verify Chinese characters display correctly
- [ ] Check font weight looks appropriate
- [ ] Verify "简体中文" is highlighted in switcher

#### Russian Version (LTR)
- [ ] Open https://trizel-ai-site.github.io/trizel-site/ru/
- [ ] Verify Cyrillic text displays correctly
- [ ] Check layout matches other LTR versions
- [ ] Verify "Русский" is highlighted in switcher

### 4. Font Testing

#### Arabic Font (Noto Sans Arabic)
- [ ] Check if font file exists: assets/fonts/noto-sans-arabic/NotoSansArabic-Regular.woff2
- [ ] Verify Arabic text uses Noto Sans Arabic (inspect with DevTools)
- [ ] Check fallback fonts work if Noto Sans not loaded

#### Chinese Font (Noto Sans SC)
- [ ] Check if font file exists: assets/fonts/noto-sans-sc/NotoSansSC-Regular.woff2
- [ ] Verify Chinese text uses Noto Sans SC (inspect with DevTools)
- [ ] Check fallback fonts work if Noto Sans not loaded

### 5. CSS RTL Testing

Verify CSS logical properties work correctly:

```css
/* These should mirror automatically in RTL */
border-inline-start  → becomes border-right in RTL
padding-inline-start → becomes padding-right in RTL
text-align: start    → becomes text-align: right in RTL
```

Test in Arabic version:
- [ ] Disclaimer box has border on right side (RTL)
- [ ] List bullets appear on right side
- [ ] Text aligns to right
- [ ] Language switcher items align correctly

### 6. Accessibility Testing

#### ARIA and Semantic HTML
- [ ] Each language switcher has proper `aria-label`
- [ ] Current language has `aria-current="page"`
- [ ] All links have proper `hreflang` attributes
- [ ] Heading hierarchy is correct (h1 → h2)

#### Keyboard Navigation
- [ ] Tab through language switcher
- [ ] Verify focus indicators visible
- [ ] Enter/Space activates links

#### Screen Reader
- [ ] Test with NVDA/JAWS on English version
- [ ] Verify language announcements work
- [ ] Test with Arabic (RTL) version

### 7. SEO Verification

Check each page has:
- [ ] Proper `lang` attribute on `<html>` tag
- [ ] Proper `dir` attribute (ltr or rtl)
- [ ] All 6 `<link rel="alternate" hreflang="...">` tags
- [ ] Unique `<title>` per language
- [ ] Correct canonical URL in root redirect

### 8. Cross-Language Navigation

From each language page:
- [ ] Click "English" → goes to /en/
- [ ] Click "Français" → goes to /fr/
- [ ] Click "العربية" → goes to /ar/
- [ ] Click "简体中文" → goes to /zh/
- [ ] Click "Русский" → goes to /ru/
- [ ] Verify URL path is correct
- [ ] Verify correct language is highlighted

### 9. Mobile Responsiveness

Test on mobile viewport (375px width):
- [ ] English version responsive
- [ ] French version responsive
- [ ] Arabic version responsive (RTL)
- [ ] Chinese version responsive
- [ ] Russian version responsive
- [ ] Language switcher wraps properly
- [ ] No horizontal scroll

### 10. Performance Testing

- [ ] Measure page load time (should be < 2s)
- [ ] Check font files load correctly
- [ ] Verify no 404 errors in console
- [ ] Check CSS files load

---

## Known Issues

### Font Files Are Placeholders
**Status:** The font files in `/assets/fonts/` are empty placeholders.

**Action Required:**
1. Download Noto Sans Arabic from Google Fonts
2. Download Noto Sans SC from Google Fonts
3. Replace placeholder .woff2 files with actual fonts
4. Test font rendering

See `/assets/fonts/README.md` for detailed instructions.

### Translations Are Machine-Generated
**Status:** Current translations are machine-generated placeholders.

**Action Required:**
1. Obtain professional human translations
2. Validate terminology against Layer-0 definitions
3. Native speaker review for each language
4. Governance approval per language

---

## Browser Compatibility

### Tested Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Known Compatibility
- CSS Logical Properties: Chrome 89+, Firefox 89+, Safari 15+, Edge 89+
- RTL support: All modern browsers
- Web fonts: All modern browsers

---

## Automation Possibilities (Future)

While Layer-2 constraints prevent JavaScript, these validations could be automated:
- HTML validation (W3C Nu Validator API)
- Link checking (crawl all language versions)
- Screenshot comparison (visual regression)
- Lighthouse accessibility audits

---

## Test Results Summary

**Date Tested:** [To be filled]  
**Tester:** [To be filled]  
**Overall Status:** [PASS / FAIL / NEEDS WORK]

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]

---

**Testing Status:** PENDING  
**Last Updated:** 2026-01-18
