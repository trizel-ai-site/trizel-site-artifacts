# WCAG Contrast Checking Guide

## Overview

This repository implements automated WCAG 2.1 AA/AAA contrast checking to ensure all text and UI components meet accessibility standards across all pages and languages.

## WCAG Contrast Requirements

### WCAG AA (Minimum)
- **Normal text** (< 18pt regular / < 14pt bold): **≥ 4.5:1** contrast ratio
- **Large text** (≥ 18pt regular or ≥ 14pt bold): **≥ 3.0:1** contrast ratio  
- **UI components & graphical objects**: **≥ 3.0:1** contrast ratio

### WCAG AAA (Enhanced - Recommended for Scientific Content)
- **Normal text**: **≥ 7.0:1** contrast ratio
- **Large text**: **≥ 4.5:1** contrast ratio

### Dark Theme Guidelines
For dark themes, follow these color recommendations:
- **Body text**: Off-white (#EDEDED–#FFFFFF)
- **Secondary text**: Light gray (#C9CCD1–#D6D8DC)
- **Links**: Blue only if contrast ≥ threshold; otherwise lighten text or darken background

## Token-Based Color System

All colors MUST use CSS custom properties (tokens) defined in `/assets/css/tokens.css`:

```css
:root {
  --color-text: #0f172a;           /* Primary text - WCAG AAA compliant */
  --color-text-medium: #334155;    /* Medium text */
  --color-text-muted: #64748b;     /* Muted text - WCAG AA compliant */
  --color-accent: #0b5fb8;         /* Accent links - WCAG AAA compliant */
  /* ... */
}
```

**Never use hardcoded color values** (e.g., `color: #0000FF`) in your CSS. Always reference tokens.

## Local Testing

### Prerequisites
1. Node.js 18+ and npm
2. Python 3 (for local server)

### Setup
```bash
# Install dependencies
npm install

# This installs:
# - axe-core: WCAG testing engine
# - playwright: Browser automation
```

### Running Contrast Checks Locally

1. **Start the local server** (in one terminal):
```bash
npm run serve
# Serves site at http://localhost:8000
```

2. **Run contrast checks** (in another terminal):
```bash
npm run contrast:check
```

This will:
- Check all root pages (/, /accessibility.html, etc.)
- Check all language-specific pages (en, fr, de, ru, zh, ar)
- Test against WCAG 2.1 AA and AAA standards
- Generate a detailed report (`contrast-report.json`)
- Exit with failure code if violations are found

### Understanding Results

**Passing output:**
```
✅ PASS
```

**Failing output:**
```
❌ FAIL - 2 contrast violations
   color-contrast: Elements must have sufficient color contrast
   Affected: <a href="/en/" class="nav-link">Home</a>...
```

### What to Do If Tests Fail

1. **Identify the element** from the report
2. **Check the color values** being used
3. **Update to use approved tokens** or adjust the color
4. **Verify contrast** using a tool like:
   - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - Browser DevTools (e.g., Chrome Lighthouse)
5. **Re-run tests** to confirm fix

## CI/CD Integration

### GitHub Actions Workflow

The `.github/workflows/wcag-contrast-check.yml` workflow runs automatically on:
- Push to `main`, `develop`, or any `copilot/**` branch
- Pull requests to `main` or `develop`
- Manual trigger via workflow_dispatch

### Workflow Steps

1. ✅ Check out code
2. ✅ Set up Node.js and install dependencies
3. ✅ Install Playwright browsers
4. ✅ Start Python HTTP server
5. ✅ Run contrast checks on all pages
6. ✅ Upload detailed report as artifact
7. ✅ Comment on PR if violations found (automatic)

### Blocking Behavior

**Any contrast violation will cause the CI check to FAIL**, preventing the PR from being merged.

### Viewing CI Results

1. **In GitHub Actions tab**: View the full log and download the `contrast-report.json` artifact
2. **On PR**: If checks fail, a comment is automatically posted with violation details
3. **Artifacts**: Download the full JSON report from the Actions run

## Best Practices

### 1. Design with Contrast in Mind
- Use the token system from the start
- Test color combinations before implementing
- Prefer high-contrast pairings for body text

### 2. Validate Early and Often
- Run `npm run contrast:check` after any color changes
- Don't wait for CI - test locally first

### 3. Document Color Decisions
- When adding new colors to `tokens.css`, include WCAG compliance notes:
```css
/* New accent color - WCAG AA compliant on white (#FFFFFF) */
--color-new-accent: #0369a1;
```

### 4. Multi-Language Testing
- All languages share the same tokens
- Violations in one language may appear in all
- Test root pages AND language-specific pages

## Tools and Resources

- **axe-core**: Industry-standard accessibility testing engine
- **Playwright**: Reliable browser automation
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Color Contrast Analyzer**: https://www.tpgi.com/color-contrast-checker/

## Maintenance

### Updating the Test Suite

To add new pages to the contrast checker, edit `scripts/contrast-check.js`:

```javascript
// Add to ROOT_PAGES for root-level pages
const ROOT_PAGES = [
  '/',
  '/accessibility.html',
  '/new-page.html',  // <-- Add here
];

// Or add to PAGES for language-specific pages
const PAGES = [
  '/',
  '/index.html',
  '/new-section/',  // <-- Add here
];
```

### Updating Color Tokens

When modifying `/assets/css/tokens.css`:

1. Verify contrast ratios before committing
2. Update this documentation if adding new token categories
3. Run full contrast check suite
4. Consider impact on all languages

## Troubleshooting

### "Server not responding" errors
- Ensure port 8000 is not in use
- Check firewall settings
- Try a different port by setting `BASE_URL=http://localhost:PORT`

### "Browser not found" errors
- Run `npx playwright install chromium`
- Check system dependencies with `npx playwright install-deps`

### False positives
- Review the specific element in the report
- Verify if it's truly a contrast issue
- Consider if the element needs exemption (decorative only, etc.)

## Contributing

When submitting PRs:
1. ✅ Run contrast checks locally first
2. ✅ Fix all violations before requesting review
3. ✅ Update tokens if adding new colors
4. ✅ Wait for CI checks to pass

---

**Last Updated**: 2026-02-08
**Maintained by**: TRIZEL Development Team
