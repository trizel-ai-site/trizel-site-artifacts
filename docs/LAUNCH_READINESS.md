# LAUNCH READINESS — Layer-2

**Repository:** trizel-ai-site/trizel-site  
**Layer:** Layer-2 (Presentation/Display)  
**Purpose:** Canonical launch checklist and go/no-go criteria for Layer-2 deployment

---

## Overview

This document provides the exact launch checklist for deploying Layer-2 (trizel-site) to production. It defines technical requirements, governance criteria, and go/no-go decision points.

**Layer-2 Scope:** Presentation-only repository with no logic, no analysis, and no claims.

---

## Pre-Launch Checklist

### 1. DNS & Domain Configuration

- [ ] **DNS Records:** Verify DNS configuration is managed outside this repository
- [ ] **Custom Domain:** Confirm CNAME file presence/absence aligns with deployment strategy
- [ ] **HTTPS/TLS:** Ensure certificate configuration is valid
- [ ] **Domain Authority:** Verify domain ownership and registrar settings

**Note:** DNS and domain configuration are **NOT** managed in this repository per Layer-2 constraints. These are configured through GitHub Pages settings in the repository or through an external DNS provider.

### 2. GitHub Pages Configuration

- [ ] **Pages Enabled:** Verify GitHub Pages is enabled in repository settings
- [ ] **Source Branch:** Confirm correct branch is selected as Pages source
- [ ] **Build Status:** Check that Pages build is successful
- [ ] **Live URL:** Verify site is accessible at published URL
- [ ] **Jekyll Config:** Confirm `.nojekyll` or `_config.yml` presence matches requirements

**Expected State:** Pages surface is "frozen" (read-only validation only, no deployment logic in workflows).

### 3. Repository Settings & Protection

- [ ] **Branch Protection:** Main branch has protection rules enabled
- [ ] **CODEOWNERS:** `.github/CODEOWNERS` file exists and is enforced
- [ ] **Required Reviews:** Pull requests require approval
- [ ] **Status Checks:** Required workflows must pass before merge
- [ ] **Merge Restrictions:** Only authorized accounts can merge

### 4. Content Boundaries & Governance

- [ ] **Layer-2 Classification:** Repository is properly classified as Layer-2 (Presentation)
- [ ] **Content Classification:** `docs/CONTENT_CLASSIFICATION.md` exists and is accurate
- [ ] **Layer Boundaries:** `docs/LAYER_BOUNDARIES.md` is present and complete
- [ ] **Presentation Scope:** `docs/PRESENTATION_SCOPE.md` defines allowed/prohibited content
- [ ] **Governance Authority:** All references to Layer-0 (trizel-core) are accurate and linked

### 5. Required Documentation

- [ ] **README.md:** Contains layer classification and scope
- [ ] **BASELINE_SNAPSHOT.md:** Exists and passes guard workflow
- [ ] **FINAL_FREEZE_DECLARATION.md:** Exists (if applicable)
- [ ] **Account Registry:** `docs/ACCOUNT_REGISTRY.md` is up to date
- [ ] **Site Map:** `docs/SITE_MAP.md` accurately reflects structure
- [ ] **Changelog:** `docs/CHANGELOG.md` or `docs/LAYER2_CHANGELOG.md` exists

### 6. UI & Marker Verification

- [ ] **AUTO DZ ACT Marker:** Present under logo on all entry points
  - Check: `index.html` header section
  - Visual: "AUTO DZ ACT" text visible
  - Label: "Foundational Epistemic Memory Marker" present
- [ ] **Layer-2 Badge:** Visible in header or prominent location
- [ ] **Layer-2 Disclaimer:** Present and prominent on main page
  - Must state: "Presentation/Display only"
  - Must state: "No scientific content, no analysis"
  - Must link to Layer-0 governance authority
- [ ] **Governance Links:** Links to trizel-core are visible and functional

### 7. Required Workflow Checks

- [ ] **baseline-snapshot-guard:** Workflow exists and passes
  - File: `.github/workflows/baseline-snapshot-guard.yml`
  - Check: `BASELINE_SNAPSHOT.md` exists
  - Check: No speculative language detected
- [ ] **pages-surface-freeze:** Workflow exists and passes
  - File: `.github/workflows/pages-surface-freeze.yml`
  - Check: Pages surface validation passes
  - Check: No implicit Pages activation detected
- [ ] **All Checks Passing:** Green checkmarks on latest commit

### 8. Content Compliance

- [ ] **No Deprecated Terms:** No use of forbidden terminology (e.g., STOE)
- [ ] **No JavaScript:** Zero `.js` files in repository
- [ ] **No Backend Logic:** No API calls, no server-side code
- [ ] **No Scientific Claims:** All content is descriptive/structural only
- [ ] **No Analysis Content:** No research findings, no interpretations
- [ ] **Static Only:** HTML/CSS presentation files only

### 9. Hygiene & Quality

- [ ] **No Broken Links:** All internal and external links functional
- [ ] **Clean Git History:** No sensitive data in commit history
- [ ] **No Secrets:** No API keys, tokens, or credentials in code
- [ ] **Consistent Styling:** CSS follows existing patterns
- [ ] **Accessibility:** Basic HTML accessibility standards met
- [ ] **Mobile Responsive:** Site renders correctly on mobile devices

---

## Go/No-Go Criteria

### GO Criteria (All Must Be TRUE)

1. ✅ **All Required Checks Pass**
   - baseline-snapshot-guard: PASS
   - pages-surface-freeze: PASS
   - Any other required workflows: PASS

2. ✅ **Governance References Present**
   - AUTO DZ ACT marker visible
   - Layer-2 disclaimer visible
   - trizel-core governance link present

3. ✅ **Layer-2 Compliance Verified**
   - No JavaScript files
   - No backend logic
   - No scientific claims or analysis
   - Presentation-only content confirmed

4. ✅ **Documentation Complete**
   - All required docs exist
   - Content classification defined
   - Launch readiness documented

5. ✅ **No Deprecated Terms**
   - Zero instances of forbidden terminology
   - All approved wording used

### NO-GO Criteria (Any One Triggers HALT)

1. ❌ **Required Check Failure**
   - Any required workflow fails
   - Critical validation error
   - Build or deployment failure

2. ❌ **Governance Violation**
   - AUTO DZ ACT marker missing
   - Layer-2 disclaimer missing
   - No link to Layer-0 authority

3. ❌ **Layer-2 Boundary Breach**
   - JavaScript code present
   - Backend logic detected
   - Scientific claims or analysis found
   - Research content included

4. ❌ **Missing Required Documentation**
   - Critical docs absent
   - Content classification undefined
   - Launch readiness not documented

5. ❌ **Deprecated Terms Present**
   - Forbidden terminology detected
   - Non-compliant wording used

---

## Launch Execution

### Pre-Launch (Final Verification)

1. Run all checks locally or via CI
2. Verify all go/no-go criteria
3. Review documentation completeness
4. Confirm governance references visible
5. Test live URL accessibility

### Launch (Deployment)

1. Merge approved PR to main branch
2. Verify automatic Pages deployment triggers
3. Wait for Pages build to complete
4. Verify live site is accessible
5. Visual confirmation of all markers and disclaimers

### Post-Launch (Validation)

1. Access live URL and verify rendering
2. Check AUTO DZ ACT marker visible
3. Check Layer-2 disclaimer present
4. Test all governance links functional
5. Confirm no JavaScript execution
6. Mobile/responsive check

### Rollback Criteria

If any post-launch validation fails:
1. Immediately document the issue
2. Determine if rollback is necessary
3. If critical: revert merge commit
4. Fix issue in new PR
5. Re-run launch readiness process

---

## Contact & Escalation

**For launch questions or issues:**
- Refer to repository CODEOWNERS
- Escalate to Layer-0 governance (trizel-core)
- Do not make unauthorized changes

**Authority:**
- Final approval: Per repository governance
- Technical decision: Per Layer-0 (trizel-core) guidance
- Layer-2 authority: NONE (presentation only)

---

## Revision History

- **2026-01-18:** Initial creation for Layer-2 launch readiness bundle
- **Version:** 1.0.0
- **Status:** Active

---

**Launch Readiness Document** — Layer-2 — Presentation-only — No authority — No execution
