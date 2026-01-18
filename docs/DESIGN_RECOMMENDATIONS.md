# DESIGN RECOMMENDATIONS

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display)  
**Date:** 2026-01-18  
**Purpose:** Actionable design improvements to achieve scientific-grade aesthetics

---

## Implementation Principles

All recommendations must:
1. ✓ Maintain Layer-2 compliance (no logic, no scripts)
2. ✓ Preserve existing content structure
3. ✓ Use only HTML/CSS (no JavaScript)
4. ✓ Be minimal, reversible changes
5. ✓ Enhance credibility and professionalism

---

## Color System Specification

### Recommended Primary Palette (Dark Theme)

**Base Colors:**
```css
:root {
  /* Backgrounds */
  --bg-primary: #0a0c0e;
  --bg-secondary: #0f1215;
  --bg-tertiary: #14181c;
  
  /* Text */
  --text-primary: #e8f0f4;
  --text-secondary: #a0aab0;
  --text-tertiary: #6b7580;
  
  /* Accents */
  --accent-primary: #5fa86b;    /* Calm green - scientific */
  --accent-secondary: #4a8de8;  /* Blue - institutional */
  --accent-tertiary: #8b7ec8;   /* Purple - technical */
  
  /* Semantic */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.12);
  --overlay: rgba(0, 0, 0, 0.3);
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.6);
}
```

**Rationale:**
- Dark theme projects authority and technical sophistication
- Green accent is distinctive, calm, and scientific
- Blue secondary accent maintains institutional feel
- Purple tertiary adds technical/research character
- Subtle borders and shadows add depth without distraction

### Alternative Light Theme (Refined)

**For consideration if dark theme not preferred:**
```css
:root {
  /* Backgrounds */
  --bg-primary: #ffffff;
  --bg-secondary: #f7f9fb;
  --bg-tertiary: #eef2f6;
  
  /* Text */
  --text-primary: #0e1419;
  --text-secondary: #3d4854;
  --text-tertiary: #6b7580;
  
  /* Accents */
  --accent-primary: #2d6a3a;    /* Deep green - authoritative */
  --accent-secondary: #1e5ba8;  /* Deep blue - institutional */
  --accent-tertiary: #5b4e8b;   /* Deep purple - technical */
  
  /* Borders & Shadows */
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.12);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

**Recommendation:** Use dark theme as primary for scientific gravitas.

---

## Typography Stack

### Font Families

**Recommended System:**
```css
:root {
  /* Primary: Sans-serif for UI and body */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", 
               Roboto, "Helvetica Neue", Arial, sans-serif;
  
  /* Secondary: Serif for headers (authoritative) */
  --font-serif: "Georgia", "Times New Roman", Times, serif;
  
  /* Monospace: Technical content */
  --font-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono",
               Consolas, "Courier New", monospace;
}
```

**Application:**
- Body text: `var(--font-sans)` - clean, readable
- H1 headers: `var(--font-serif)` - authoritative, institutional
- H2-H3: `var(--font-sans)` - consistent with body
- Code blocks: `var(--font-mono)` - technical precision

**Rationale:**
- System fonts = fast loading (Layer-2 appropriate)
- Serif headers = institutional authority (NASA, journals use this)
- Sans body = modern readability
- Monospace = technical credibility

### Font Scale

**Recommended Scale (1.250 ratio - Major Third):**
```css
:root {
  /* Base */
  --font-size-base: 16px;
  --line-height-base: 1.6;
  
  /* Scale */
  --font-size-xs: 0.8rem;      /* 12.8px */
  --font-size-sm: 0.875rem;    /* 14px */
  --font-size-base: 1rem;      /* 16px */
  --font-size-lg: 1.125rem;    /* 18px */
  --font-size-xl: 1.25rem;     /* 20px */
  --font-size-2xl: 1.563rem;   /* 25px */
  --font-size-3xl: 1.953rem;   /* 31.2px */
  --font-size-4xl: 2.441rem;   /* 39px */
  
  /* Line heights */
  --line-height-tight: 1.2;
  --line-height-snug: 1.4;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.8;
}
```

**Application:**
```css
h1 { font-size: var(--font-size-4xl); line-height: var(--line-height-tight); }
h2 { font-size: var(--font-size-2xl); line-height: var(--line-height-snug); }
h3 { font-size: var(--font-size-xl); line-height: var(--line-height-snug); }
body { font-size: var(--font-size-base); line-height: var(--line-height-normal); }
small { font-size: var(--font-size-sm); }
```

**Rationale:**
- Clear hierarchy through scale
- 1.250 ratio is subtle but distinct
- Matches scientific publication standards

### Font Weights

**Recommended Weights:**
```css
:root {
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
}
```

**Application:**
- Body: 400 (normal)
- Headers: 600-700 (semibold-bold)
- Emphasis: 600 (medium-semibold)
- Subtle text: 400 (normal) with color variation

---

## Spacing System

### Base Grid (8pt System)

**Recommended Scale:**
```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-8: 3rem;     /* 48px */
  --space-10: 4rem;    /* 64px */
  --space-12: 6rem;    /* 96px */
  --space-16: 8rem;    /* 128px */
}
```

**Application Guidelines:**
- Tight spacing: `var(--space-2)` to `var(--space-3)`
- Component padding: `var(--space-4)` to `var(--space-6)`
- Section margins: `var(--space-8)` to `var(--space-10)`
- Major separation: `var(--space-12)` to `var(--space-16)`

**Rationale:**
- 8pt grid is industry standard
- Consistent rhythm improves perceived quality
- Easy to maintain and scale

### Layout Dimensions

**Recommended Widths:**
```css
:root {
  --width-prose: 65ch;        /* Optimal reading line length */
  --width-content: 900px;     /* Main content area */
  --width-wide: 1200px;       /* Wide sections */
  --width-full: 1400px;       /* Maximum width */
  
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

**Rationale:**
- 65ch is optimal for reading (scientific standard)
- 900-1200px balances content and whitespace
- Consistent border radius creates cohesion

---

## Layout & Component Specifications

### Header Design

**Recommended Structure:**
```html
<header class="site-header">
  <div class="container">
    <div class="brand">
      <h1>TRIZEL</h1>
      <p class="memory-marker">AUTO DZ ACT</p>
      <p class="memory-label">Foundational Epistemic Memory Marker</p>
    </div>
    <div class="meta">
      <span class="layer-badge">Layer-2</span>
      <span class="status">Presentation Only</span>
    </div>
  </div>
</header>
```

**Styling:**
```css
.site-header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-subtle);
  padding: var(--space-8) var(--space-6);
  margin-bottom: var(--space-10);
}

.brand h1 {
  font-family: var(--font-serif);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.02em;
  margin: 0;
}

.memory-marker {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--accent-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: var(--space-2) 0 0;
}

.memory-label {
  font-size: var(--font-size-xs);
  color: var(--text-tertiary);
  font-style: italic;
  margin: var(--space-1) 0 0;
}

.layer-badge {
  background: var(--accent-primary);
  color: var(--bg-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
}
```

**Rationale:**
- Serif header = institutional authority
- AUTO DZ ACT in monospace = technical precision
- Clear layer badge = transparency
- Adequate spacing = premium feel

### Content Section Design

**Recommended Card Style:**
```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  margin-bottom: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--border-strong);
}

.card h2 {
  margin-top: 0;
  margin-bottom: var(--space-4);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  border-bottom: 2px solid var(--accent-primary);
  padding-bottom: var(--space-3);
}
```

**Rationale:**
- Subtle shadows add depth (scientific sites use this)
- Hover states show interactivity
- H2 underline creates clear section markers
- Generous padding feels premium

### Footer Design

**Recommended Structure:**
```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Layer-2 Notice</h3>
        <p>Presentation-only repository. No analysis, no execution, no scientific authority.</p>
      </div>
      <div class="footer-section">
        <h3>Governance Authority</h3>
        <p><a href="https://github.com/trizel-ai-site/trizel-core">trizel-core (Layer-0)</a></p>
      </div>
      <div class="footer-section">
        <p class="copyright">© TRIZEL — Institutional Presentation</p>
      </div>
    </div>
  </div>
</footer>
```

**Styling:**
```css
.site-footer {
  background: var(--bg-tertiary);
  border-top: 1px solid var(--border-subtle);
  padding: var(--space-10) var(--space-6);
  margin-top: var(--space-16);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-8);
}

.footer-section h3 {
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  margin-bottom: var(--space-3);
}
```

---

## Image Treatment Guidelines

### Logo Specification

**When creating TRIZEL logo:**
- Format: SVG (scalable, small file size)
- Style: Minimal, geometric, technical
- Colors: Use accent colors from palette
- Usage: Header, favicon
- Variants: Full logo, icon mark
- Size: Optimize for 48-200px display

**Inspiration:**
- ESA logo: Clean, geometric, memorable
- CERN logo: Technical, precise
- NASA worm logo: Modern, authoritative

### Background Imagery (Optional)

**If adding subtle backgrounds:**
- Subtle grid patterns (scientific/technical)
- Abstract geometric shapes (low opacity)
- Gradient noise textures
- Never: Stock photos, decorative images

**Example CSS:**
```css
body {
  background-image: 
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

**Rationale:** Subtle grid = technical/scientific aesthetic without distraction.

---

## Implementation Priority Matrix

### Phase 1: Critical (Governance + Foundation)
**Effort:** 2-3 hours  
**Impact:** High

1. **Add AUTO DZ ACT memory marker** (governance requirement)
   - Under logo in header
   - Exact text: "AUTO DZ ACT"
   - Label: "Foundational Epistemic Memory Marker"

2. **Add Layer-2 disclaimer** (governance requirement)
   - Prominent location (header or first section)
   - Clear text about presentation-only status

3. **Add governance authority link** (governance requirement)
   - Link to trizel-core prominently
   - Label as "Canonical Governance (Layer-0)"

4. **Switch to dark theme** (design improvement)
   - Use main.css as primary stylesheet
   - OR significantly enhance style.css

### Phase 2: High Impact (Visual Authority)
**Effort:** 3-4 hours  
**Impact:** High

5. **Implement color system**
   - Replace current colors with recommended palette
   - Test contrast ratios

6. **Strengthen header design**
   - Larger, serif H1
   - Better spacing
   - Clear layer badge

7. **Improve typography scale**
   - Implement recommended font sizes
   - Apply to all headings
   - Test hierarchy

8. **Add subtle shadows**
   - Cards and panels
   - Depth without distraction

### Phase 3: Polish (Professional Finish)
**Effort:** 2-3 hours  
**Impact:** Medium

9. **Implement spacing system**
   - Replace arbitrary values with scale
   - Consistent rhythm throughout

10. **Refine footer**
    - Grid layout
    - Clear sections
    - Governance links

11. **Add subtle background pattern**
    - Technical grid or gradient
    - Very low opacity

### Phase 4: Future Enhancement (Optional)
**Effort:** Variable  
**Impact:** Medium

12. **Create TRIZEL logo** (requires design work)
13. **Add icon system** (if needed for navigation)
14. **Expand responsive design** (mobile optimization)
15. **Create theme toggle** (light/dark switch)

---

## CSS Implementation Template

**Complete starter template implementing recommendations:**

```css
/* trizel-site - Scientific Grade CSS */

:root {
  /* Colors - Dark Theme */
  --bg-primary: #0a0c0e;
  --bg-secondary: #0f1215;
  --bg-tertiary: #14181c;
  --text-primary: #e8f0f4;
  --text-secondary: #a0aab0;
  --text-tertiary: #6b7580;
  --accent-primary: #5fa86b;
  --accent-secondary: #4a8de8;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.12);
  
  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-serif: Georgia, "Times New Roman", Times, serif;
  --font-mono: "SF Mono", Monaco, Consolas, "Courier New", monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.8rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.563rem;
  --font-size-3xl: 1.953rem;
  --font-size-4xl: 2.441rem;
  
  /* Spacing */
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  --space-12: 6rem;
  
  /* Layout */
  --width-content: 900px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
}

* { box-sizing: border-box; }

html, body {
  height: 100%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-primary);
  background: linear-gradient(180deg, var(--bg-primary) 0%, #050607 100%);
}

/* Add remaining styles... */
```

---

## Validation Checklist

Before finalizing design changes:

- [ ] Contrast ratios meet WCAG AAA (7:1 for body, 4.5:1 for large text)
- [ ] Text remains readable at 200% zoom
- [ ] Semantic HTML structure preserved
- [ ] No JavaScript added (Layer-2 compliance)
- [ ] Page loads fast (< 1s, no heavy assets)
- [ ] Works without images (graceful degradation)
- [ ] Print stylesheet considered (optional but professional)
- [ ] All governance requirements addressed
- [ ] Design feels authoritative and scientific
- [ ] Mobile responsive (test at 375px, 768px, 1024px)

---

## Summary

**Philosophy:** Scientific credibility through visual restraint, technical precision, and institutional authority.

**Key Changes:**
1. Dark theme with sophisticated palette
2. Serif headers for authority
3. Clear typographic hierarchy
4. Systematic spacing
5. Subtle depth through shadows
6. AUTO DZ ACT memory marker
7. Prominent governance links

**Expected Outcome:** Transform from generic corporate site to authoritative scientific research portal, while maintaining strict Layer-2 compliance (HTML/CSS only, no logic, presentation-only).

**Estimated Total Effort:** 8-12 hours for Phases 1-3 (critical through polish).

---

**Document Type:** Design Specifications  
**Framework:** Scientific Research Portal Standards  
**Status:** Actionable recommendations — Implementation-ready
