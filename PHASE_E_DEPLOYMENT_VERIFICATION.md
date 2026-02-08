# Phase-E Deployment Verification Checklist

**Purpose:** Verify that Phase-E data is visible on the deployed site  
**Domain:** https://trizel-ai.com  
**Date:** 2026-02-08

---

## Verification URLs

Test these URLs to confirm Phase-E visibility on the deployed site:

### 1. Phase-E Index Page
- **URL:** https://trizel-ai.com/phase-e/
- **Expected:** Phase-E Publications index with two claim-001 entries (2026-02-06 and 2026-02-07)
- **Fallback:** https://trizel-ai.com/phase-e/index.html

### 2. Claim-001 Detail Page
- **URL:** https://trizel-ai.com/phase-e/claim-001.html
- **Expected:** Publication data page with tables, statistics, and provenance

### 3. Raw Publication Data (2026-02-07)
- **Directory:** https://trizel-ai.com/lab/publication/claim-001/2026-02-07/
- **Files to check:**
  - provenance.json
  - manifest.json
  - sha256sum.txt
  - tables/platforms_registry.json
  - tables/sbdb_attempts.json
  - derived/statistics.json

### 4. Raw Publication Data (2026-02-06)
- **Directory:** https://trizel-ai.com/lab/publication/claim-001/2026-02-06/
- **Files to check:** (same as 2026-02-07)

### 5. Root Page Link
- **URL:** https://trizel-ai.com/
- **Check:** Header navigation contains "Phase-E" link
- **Check:** Main content has "Phase-E Publications" card
- **Check:** Footer contains "Phase-E" link

---

## Verification Checklist

Use this checklist to verify deployment:

- [ ] Phase-E index page loads successfully
- [ ] Index page shows claim-001 for 2026-02-06
- [ ] Index page shows claim-001 for 2026-02-07
- [ ] Both entries link to claim-001.html
- [ ] Both entries link to raw data directories
- [ ] Claim-001 detail page loads successfully
- [ ] Detail page shows platforms registry table (12 platforms)
- [ ] Detail page shows SBDB attempts table (4 attempts)
- [ ] Detail page shows provenance metadata
- [ ] Raw data files are accessible
- [ ] Root page has Phase-E links in header
- [ ] Root page has Phase-E card in main content
- [ ] Root page has Phase-E link in footer

---

## If Verification Fails

If any of the above URLs return 404 or show old content:

### 1. Check Deployment Status
- GitHub Pages may still be building/deploying
- Check: Repository → Settings → Pages → Build & deployment status
- Wait 5-10 minutes for deployment to complete

### 2. Clear Browser Cache
```bash
# Chrome/Edge
Ctrl+Shift+Delete → Clear cached images and files

# Firefox
Ctrl+Shift+Delete → Cached Web Content

# Safari
Cmd+Option+E

# Or use Incognito/Private browsing mode
```

### 3. Check CDN Cache
If site uses a CDN (Cloudflare, etc.):
- Log into CDN provider
- Purge cache for /phase-e/* paths
- Or wait for cache TTL to expire (typically 1-24 hours)

### 4. Verify GitHub Pages Source
- Repository → Settings → Pages
- Confirm "Source" is set correctly (e.g., "Deploy from a branch: main / root")
- Confirm "Custom domain" is trizel-ai.com if applicable

### 5. Check CNAME Configuration
- Verify CNAME file contains: `trizel-ai.com`
- Verify DNS CNAME record points to GitHub Pages

---

## Expected Content Snippets

When viewing the Phase-E index page, you should see:

### Compiler Outputs Table
```
Claim ID    Date        Version    Status                     Links
claim-001   2026-02-06  v001      Verified, Deterministic   View Data | Raw Files | Provenance
claim-001   2026-02-07  v001      Verified, Deterministic   View Data | Raw Files | Provenance
```

### Publications Index Table
```
ID                      Artifact Type    Immutable Link         Source                               Verification Status
claim-001-2026-02-07   Dataset          Lab Data (DOI: pending) lab/publication/claim-001/2026-02-07 Published
```

### Status Banner
```
Status: Enabled (Static)
Publishing: Manual review only
Automation: None
Runtime: None
Metrics: None
JS: Disabled
```

---

## Expected HTTP Status Codes

All URLs should return:
- **200 OK** for HTML pages
- **200 OK** for JSON/CSV data files
- **200 OK** or directory listing for directories

**NOT expected:**
- ❌ 404 Not Found
- ❌ 500 Internal Server Error
- ❌ 403 Forbidden

---

## Troubleshooting Common Issues

### Issue: All files return 404
**Cause:** Deployment hasn't completed or failed  
**Solution:** Check GitHub Pages deployment status, review workflow logs

### Issue: Old content showing
**Cause:** Browser or CDN cache  
**Solution:** Clear cache and force refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Index page loads but links broken
**Cause:** Relative path issues or missing files  
**Solution:** Check that lab/publication/ directory exists with correct structure

### Issue: Some data files missing
**Cause:** Incomplete commit or partial deployment  
**Solution:** Verify all files committed to main branch, check git log

---

## Automation Testing

Once branch protection is adjusted, test the automation:

### Manual Workflow Trigger
1. Navigate to: https://github.com/trizel-ai-site/trizel-site-artifacts/actions/workflows/phase-e-auto-publish.yml
2. Click "Run workflow"
3. Select branch: `copilot/audit-phase-e-visibility` (or `main` after merge)
4. Leave claim_id as default (claim-001)
5. Click "Run workflow"
6. Monitor execution in Actions tab
7. Verify commit created if changes detected

### Expected Workflow Output
```
✓ Input data found
✓ Publication compiler completed
✓ Page generator completed
✓ Publications registry updated
✓ Changes detected
✓ Changes committed and pushed
✅ Phase-E content published successfully
```

---

## Contact & Support

If verification fails and deployment appears broken:

1. **Check this repository's Issues** for known deployment problems
2. **Review GitHub Pages documentation** for configuration requirements
3. **Check DNS propagation** if custom domain is used (use dig/nslookup)
4. **Verify branch protection** allows GitHub Pages workflow to run

---

## Verification Complete

Once all checklist items pass:
- ✅ Phase-E data is visible on https://trizel-ai.com
- ✅ All publication files are accessible
- ✅ Navigation links work correctly
- ✅ Content matches repository files

**Status:** Deployment verification complete  
**Gate-6:** CLOSED (no interpretation, no claims)  
**Content:** Static HTML only, network-free  

---

**Next:** Enable automation workflow for future updates
