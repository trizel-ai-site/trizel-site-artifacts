# i18n Infrastructure Documentation

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display Only)  
**Date:** 2026-01-18  
**Status:** IMPLEMENTED

---

## Overview

This repository implements multilingual support for 5 languages:
- **English (EN)** — Canonical source of truth
- **French (FR)** — Français
- **Arabic (AR)** — العربية (RTL support)
- **Chinese (ZH)** — 简体中文 (Simplified Chinese)
- **Russian (RU)** — Русский

---

## Directory Structure

```
trizel-site/
├── index.html              # Redirects to /en/
├── en/                     # English (canonical)
│   ├── index.html
│   └── docs/
├── fr/                     # French
│   └── index.html
├── ar/                     # Arabic (RTL)
│   └── index.html
├── zh/                     # Chinese
│   └── index.html
├── ru/                     # Russian
│   └── index.html
├── assets/
│   ├── css/
│   │   ├── style.css      # RTL-aware CSS with logical properties
│   │   └── fonts.css      # Web font declarations
│   └── fonts/
│       ├── noto-sans-arabic/  # Arabic font files
│       ├── noto-sans-sc/      # Chinese font files
│       └── README.md          # Font installation instructions
└── i18n/
    └── README.md          # This file
```

---

## Language Switcher

Each page includes an HTML-only language switcher in the header:

```html
<nav class="language-switcher" aria-label="Language Selection">
  <ul>
    <li><a href="/trizel-site/en/" hreflang="en" lang="en">English</a></li>
    <li><a href="/trizel-site/fr/" hreflang="fr" lang="fr">Français</a></li>
    <li><a href="/trizel-site/ar/" hreflang="ar" lang="ar" dir="rtl">العربية</a></li>
    <li><a href="/trizel-site/zh/" hreflang="zh" lang="zh">简体中文</a></li>
    <li><a href="/trizel-site/ru/" hreflang="ru" lang="ru">Русский</a></li>
  </ul>
</nav>
```

The current page is indicated with `aria-current="page"`.

---

## RTL Support

### Arabic Layout

Arabic pages use `dir="rtl"` on the `<html>` element. The CSS uses logical properties to automatically mirror the layout:

- `border-inline-start` instead of `border-left`
- `padding-inline-start` instead of `padding-left`
- `text-align: start` instead of `text-align: left`

### Mixed Direction Content

English technical terms in Arabic text use `dir="ltr"`:

```html
<span dir="ltr">Layer-0</span>
```

---

## SEO Implementation

Each page includes `<link rel="alternate" hreflang="...">` tags for all languages:

```html
<link rel="alternate" hreflang="en" href="https://trizel-ai-site.github.io/trizel-site/en/" />
<link rel="alternate" hreflang="fr" href="https://trizel-ai-site.github.io/trizel-site/fr/" />
<link rel="alternate" hreflang="ar" href="https://trizel-ai-site.github.io/trizel-site/ar/" />
<link rel="alternate" hreflang="zh" href="https://trizel-ai-site.github.io/trizel-site/zh/" />
<link rel="alternate" hreflang="ru" href="https://trizel-ai-site.github.io/trizel-site/ru/" />
<link rel="alternate" hreflang="x-default" href="https://trizel-ai-site.github.io/trizel-site/en/" />
```

---

## Font Strategy

### Language-Specific Fonts

- **Arabic:** Noto Sans Arabic (self-hosted)
- **Chinese:** Noto Sans SC (self-hosted)
- **Latin scripts (EN, FR, RU):** System UI fonts

### Font Loading

Fonts are loaded via `assets/css/fonts.css` using `@font-face` declarations. Language-specific font stacks are applied using CSS:

```css
:root[lang="ar"] {
  font-family: 'Noto Sans Arabic', 'Traditional Arabic', 'Arabic Typesetting', Arial, sans-serif;
}

:root[lang="zh"] {
  font-family: 'Noto Sans SC', 'Microsoft YaHei', 'PingFang SC', SimHei, sans-serif;
}
```

---

## Layer-2 Compliance

This i18n implementation maintains all Layer-2 constraints:

- ✅ **No JavaScript** — Pure HTML language switching
- ✅ **No dynamic behavior** — Static pre-translated content
- ✅ **No user tracking** — No language detection or preference storage
- ✅ **No analysis** — Each language is frozen, version-controlled content
- ✅ **Display only** — Presentation-only infrastructure

---

## Translation Governance

### Translation Quality

All translations must:
- Maintain semantic equivalence to English canonical version
- Match Layer-0 terminology definitions
- Preserve institutional tone (no marketing language)
- Maintain scientific accuracy

### Content Updates

When English content changes:
1. Update EN version first
2. Update all other language versions
3. Obtain Layer-0 validation per language
4. Commit all languages together (maintain sync)

---

## Technical Notes

### Browser Support

- CSS Logical Properties: Chrome 89+, Firefox 89+, Safari 15+, Edge 89+
- RTL support: All modern browsers
- Web fonts: All modern browsers

### Accessibility

- WCAG 2.1 AA compliant
- Proper `lang` and `dir` attributes
- Keyboard-accessible language switcher
- Screen reader compatible

### Performance

- Self-hosted fonts for reliability
- Font files should be optimized (woff2 format)
- Minimal CSS overhead for RTL support

---

## Maintenance Workflow

### Adding a New Language

1. Create new directory: `/[lang-code]/`
2. Copy and translate `index.html` from `/en/`
3. Update `lang` and `dir` attributes
4. Add language to switcher on all pages
5. Add `hreflang` tags to all pages
6. Add font declarations if needed
7. Test thoroughly
8. Obtain governance approval

### Updating Content

1. Update English version first (`/en/index.html`)
2. Update translations in all language directories
3. Verify consistency across all versions
4. Test links and layout
5. Commit all changes together

---

## Known Limitations

1. **Font files are placeholders** — Actual Noto Sans Arabic and Noto Sans SC font files need to be added to `/assets/fonts/` directories. See `/assets/fonts/README.md` for instructions.

2. **Translations are machine-generated** — Professional human translations are required for production use. Current translations are placeholders for structural demonstration.

3. **Documentation not translated** — Documentation files in `/en/docs/` are English-only. Translation of governance documents requires Layer-0 approval.

---

## Future Enhancements (Out of Scope)

- Additional languages (Spanish, German, Japanese, etc.)
- Translation of documentation files
- Language-specific documentation versions
- Automated translation validation

---

## Governance Compliance

This implementation was completed under strict Layer-2 governance rules:
- No UI redesign
- No CSS aesthetic changes (only RTL correctness)
- No JavaScript or dynamic behavior
- No new visual components
- i18n infrastructure only

---

**Status:** Initial implementation complete  
**Next Steps:** 
1. Replace placeholder fonts with actual Noto Sans font files
2. Obtain professional translations for all languages
3. Layer-0 governance review and approval
4. Testing and validation across all languages

---

**Layer-2 Repository** — i18n Infrastructure — Version 1.0
