# Phase-E Visibility Audit & Automation Plan
**Date:** 2026-02-08  
**Repository:** trizel-ai-site/trizel-site-artifacts  
**Target:** https://trizel-ai.com

---

## Executive Summary

**VERDICT: V3 - Pages + allowlist correct → deployment/caching/path mismatch**

All required Phase-E content exists correctly in the repository on the main branch. If the data is not visible on the deployed site (https://trizel-ai.com), this indicates a **deployment, caching, or CDN issue**, NOT a repository content issue.

---

## TASK A: SITE REPO VISIBILITY AUDIT

### 1. Phase-E Pages Verification ✅

**Status:** PASS - All required pages exist and are correctly formatted.

#### Index Page
- **File:** `phase-e/index.html`
- **Status:** EXISTS
- **Content Verification:**
  - ✅ Lists claim-001 for date 2026-02-06 (line 99-113)
  - ✅ Lists claim-001 for date 2026-02-07 (line 114-128)
  - ✅ Links to `claim-001.html` (per-claim page)
  - ✅ Links to raw files: `../lab/publication/claim-001/2026-02-06/` and `2026-02-07/`
  - ✅ Links to provenance: `../lab/publication/claim-001/2026-02-06/provenance.json` and `2026-02-07/provenance.json`
  - ✅ Contains Publications Index table (Section S5, lines 144-186)
  - ✅ Publications Index displays claim-001-2026-02-07 entry (line 166)

#### Per-Claim Page
- **File:** `phase-e/claim-001.html`
- **Status:** EXISTS
- **Content Verification:**
  - ✅ Properly formatted Phase-E publication page
  - ✅ Displays data for 2026-02-07 publication
  - ✅ Shows platforms registry (12 platforms)
  - ✅ Shows SBDB attempts (4 attempts, all failed)
  - ✅ Contains complete provenance metadata
  - ✅ Links to all data files with checksums

### 2. Lab Publication Data Verification ✅

**Status:** PASS - All publication data exists with complete structure.

#### 2026-02-07 Publication
- **Directory:** `lab/publication/claim-001/2026-02-07/`
- **Files:**
  - ✅ `manifest.json` (878 bytes)
  - ✅ `provenance.json` (1,006 bytes) 
  - ✅ `sha256sum.txt` (628 bytes)
  - ✅ `tables/platforms_registry.json` (1,852 bytes)
  - ✅ `tables/platforms_registry.csv` (1,023 bytes)
  - ✅ `tables/sbdb_attempts.json` (980 bytes)
  - ✅ `tables/sbdb_attempts.csv` (577 bytes)
  - ✅ `derived/statistics.json`

#### 2026-02-06 Publication
- **Directory:** `lab/publication/claim-001/2026-02-06/`
- **Files:** ✅ All files present (same structure as 2026-02-07)

### 3. Publications Allowlist Verification ✅

**Status:** PASS - Allowlist is correctly configured.

#### publications.yml
- **File:** `phase-e/publications.yml`
- **Status:** EXISTS
- **Entry Verification:**
  ```yaml
  publications:
    - id: claim-001-2026-02-07
      claim: claim-001
      date: 2026-02-07
      type: dataset
      status: published
      source: lab/publication/claim-001/2026-02-07
      doi: pending
      notes: "نشر Phase-E حتمي. دون تفسير."
  ```
  - ✅ Entry EXACTLY matches specification from PR #116
  - ✅ All required fields present: id, claim, date, type, status, source, doi, notes
  - ✅ Entry is correctly formatted

#### Manual Mirroring Status
The `phase-e/index.html` Publications Index table (Section S5) correctly mirrors the allowlist entry:
- ✅ Row displays claim-001-2026-02-07 (line 166)
- ✅ Links to `../lab/publication/claim-001/2026-02-07/`
- ✅ Shows DOI status as "pending"
- ✅ Status shows "Published"

### 4. Discoverability Verification ✅

**Status:** PASS - Root page correctly links to Phase-E.

#### Root Landing Page Links
- **File:** `index.html`
- **Phase-E Links Found:**
  1. **Header Navigation** (line 143): `/phase-e/` - Primary navigation link
  2. **Main Content Card** (line 303-308): "Phase-E Publications" card with "View Phase-E Publications" link
  3. **Footer Navigation** (line 424): `/phase-e/` - Footer link

All links correctly point to `/phase-e/` which should resolve to `phase-e/index.html` on deployment.

---

## VERDICT ANALYSIS

### V3: Pages + allowlist correct → deployment/caching/path mismatch

**Evidence:**
1. ✅ All Phase-E HTML pages exist and contain correct data
2. ✅ Publications allowlist (publications.yml) is correctly populated
3. ✅ Lab publication data exists with all required files
4. ✅ Root page links to Phase-E correctly
5. ✅ All internal links use correct paths

**Conclusion:**
The repository content is **100% correct**. If Phase-E data is not visible on https://trizel-ai.com, the issue must be one of:

1. **Deployment Timing:** Changes may not have been deployed yet
2. **Cache/CDN:** Browser or CDN caching serving old content
3. **GitHub Pages Configuration:** Deployment settings or branch configuration
4. **Path Resolution:** Server configuration for handling trailing slashes or index.html

**Verification URLs to Test:**
- https://trizel-ai.com/phase-e/ (should show phase-e/index.html)
- https://trizel-ai.com/phase-e/index.html (explicit path)
- https://trizel-ai.com/phase-e/claim-001.html
- https://trizel-ai.com/lab/publication/claim-001/2026-02-07/ (data directory)

**No PR Required** - All content is already correct in the repository.

---

## TASK B: AUTOMATION PLAN

### Current State Analysis

#### Existing Infrastructure ✅
- **Publication Compiler:** `lab/publication_engine.py`
  - Version: v001
  - Network-free, deterministic
  - Reads ONLY from `data/publish/3i-atlas/` (governance-enforced)
  - Generates dated publication outputs
  
- **Page Generator:** `lab/generate_phase_e_pages.py`
  - Auto-discovers publications from `lab/publication/`
  - Generates `phase-e/index.html` and `phase-e/{claim-id}.html`
  - Static HTML only (no JavaScript)

- **CI Validation:** `.github/workflows/phase-e-publication-validation.yml`
  - Validates on PR/push to lab/, phase-e/, or data/publish/ paths
  - Enforces network-free constraint
  - Verifies input source enforcement
  - Runs publication engine twice for determinism check
  - Validates output structure and checksums
  - **Does NOT auto-generate or auto-commit**

#### Input Data Source
- **Location:** `data/publish/3i-atlas/`
- **Files:**
  - `manifest.json` - Verified file checksums
  - `daily-status.json` - Verified status data
  - `source-snapshot.json` - Verified source data
  - `ro-crate-metadata.json` - RO-Crate metadata

### Automation Architecture Options

#### Current Process (Manual) 🔴
1. **Step 1:** trizel-lab produces verified ledgers daily (Step-1 ingestion)
2. **Step 2:** Human manually copies data to `data/publish/3i-atlas/` in trizel-site-artifacts
3. **Step 3:** Human manually runs `python3 lab/publication_engine.py`
4. **Step 4:** Human manually runs `python3 lab/generate_phase_e_pages.py`
5. **Step 5:** Human manually updates `phase-e/publications.yml`
6. **Step 6:** Human manually mirrors entry to `phase-e/index.html` table
7. **Step 7:** Human opens PR
8. **Step 8:** Human reviews and merges PR

**Pain Points:**
- 8 manual steps required
- Human intervention for every daily update
- Prone to human error
- Slow turnaround time
- Does not scale

---

#### Option 1: Repository Dispatch Automation (Recommended) 🟢

**Architecture:**
```
trizel-lab (private repo)
    ↓ (Step-1 ingestion completes)
    ↓ (workflow_dispatch or repository_dispatch)
    ↓
trizel-site-artifacts (public repo)
    → Workflow triggered by dispatch
    → Receives verified ledger data as input
    → Runs publication compiler
    → Runs page generator
    → Updates publications.yml deterministically
    → Commits to new branch OR directly to main
    → Opens PR (if branch protection requires) OR auto-merges
```

**Implementation:**

1. **In trizel-lab:** Add workflow step to trigger trizel-site-artifacts after ingestion
   ```yaml
   - name: Trigger Phase-E publication
     run: |
       gh workflow run phase-e-auto-publish.yml \
         --repo trizel-ai-site/trizel-site-artifacts \
         --ref main
   ```

2. **In trizel-site-artifacts:** Create new workflow `.github/workflows/phase-e-auto-publish.yml`
   ```yaml
   name: phase-e-auto-publish
   
   on:
     workflow_dispatch:  # Manual trigger
     repository_dispatch:  # External trigger from trizel-lab
       types: [phase-e-publish]
     schedule:
       - cron: '0 1 * * *'  # Daily at 1 AM UTC
   
   permissions:
     contents: write  # Required for committing
     pull-requests: write  # Required if opening PRs
   
   jobs:
     auto-publish:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Set up Python
           uses: actions/setup-python@v4
           with:
             python-version: '3.11'
         
         - name: Run publication compiler
           run: python3 lab/publication_engine.py
         
         - name: Run page generator
           run: python3 lab/generate_phase_e_pages.py
         
         - name: Update publications.yml
           run: python3 lab/update_publications_yml.py  # New script
         
         - name: Commit and push
           run: |
             git config user.name "github-actions[bot]"
             git config user.email "github-actions[bot]@users.noreply.github.com"
             git add lab/publication/ phase-e/ 
             git commit -m "Auto-publish: Phase-E daily update $(date -u +%Y-%m-%d)" || exit 0
             git push
   ```

3. **New Script Required:** `lab/update_publications_yml.py`
   - Scans `lab/publication/` for new publications
   - Reads manifest.json and provenance.json
   - Deterministically generates publications.yml entry
   - Appends to publications.yml if not already present

**Advantages:**
- ✅ Fully automated (zero human intervention)
- ✅ Triggered by trizel-lab ingestion completion
- ✅ Deterministic and reproducible
- ✅ Can be tested manually with workflow_dispatch
- ✅ Falls back to scheduled daily run if trigger fails

**Requirements:**
- GitHub Actions bot needs write permission to main branch
- Branch protection MAY need to exclude `github-actions[bot]` from PR requirements
- OR: Bot pushes to feature branch and opens auto-merge PR

---

#### Option 2: Scheduled Workflow Automation 🟡

**Architecture:**
```
trizel-site-artifacts (public repo)
    → Scheduled workflow runs daily
    → Checks data/publish/3i-atlas/ for updates
    → If changed: runs compiler + generator + update
    → Commits and pushes OR opens PR
```

**Implementation:**
Similar to Option 1, but uses `schedule` trigger only:
```yaml
on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
  workflow_dispatch:  # Manual trigger for testing
```

**Advantages:**
- ✅ Simpler (no cross-repo triggers)
- ✅ No dependency on trizel-lab workflow
- ✅ Self-contained in trizel-site-artifacts

**Disadvantages:**
- ❌ No immediate updates (waits for schedule)
- ❌ Runs even if no data changes
- ❌ Still requires manual data copying from trizel-lab to data/publish/

---

#### Option 3: PR-Based Semi-Automation 🟡

**Architecture:**
```
Human or bot copies data to data/publish/3i-atlas/
    ↓
Opens PR with data changes
    ↓
CI workflow auto-generates pages
    ↓
Bot commits generated pages to same PR
    ↓
Human reviews and merges
```

**Implementation:**
Extend existing `phase-e-publication-validation.yml`:
```yaml
- name: Auto-generate pages (on PR)
  if: github.event_name == 'pull_request'
  run: |
    python3 lab/publication_engine.py
    python3 lab/generate_phase_e_pages.py
    python3 lab/update_publications_yml.py

- name: Commit generated pages
  if: github.event_name == 'pull_request'
  run: |
    git config user.name "github-actions[bot]"
    git config user.email "github-actions[bot]@users.noreply.github.com"
    git add lab/publication/ phase-e/
    git commit -m "Auto-generate Phase-E pages" || exit 0
    git push
```

**Advantages:**
- ✅ Human review still in the loop
- ✅ Auto-generates pages (reduces manual work)
- ✅ Works with branch protection

**Disadvantages:**
- ❌ Still requires human to open initial PR
- ❌ Not fully automated

---

### Recommended Implementation: **Option 1 (Repository Dispatch)**

**Minimal changes required:**

1. **New file:** `.github/workflows/phase-e-auto-publish.yml` (see above)
2. **New file:** `lab/update_publications_yml.py` (deterministic publications.yml updater)
3. **Branch protection change:** Allow `github-actions[bot]` to bypass PR requirements OR enable auto-merge for bot PRs

**Branch Protection Settings Required:**

If branch protection blocks direct commits to main:

**Option A: Bypass for bot**
- Navigate to: Repository → Settings → Branches → main → Branch protection rules
- Enable: "Allow specified actors to bypass required pull requests"
- Add: `github-actions[bot]`

**Option B: Auto-merge PRs**
- Workflow opens PR instead of direct push
- Enable "auto-merge" for PR
- Requires: PR approvals = 0 OR bot can approve own PRs
- Setting: "Allow auto-merge" in Repository Settings

**Option C: Separate deployment branch**
- Bot commits to `auto-deploy` branch (no protection)
- Scheduled workflow merges `auto-deploy` → `main` after validation
- Main branch stays protected

---

### Phase-E Publications Update Script

**New file needed:** `lab/update_publications_yml.py`

**Purpose:** Deterministically generate publications.yml entries from discovered publications.

**Algorithm:**
1. Scan `lab/publication/` for all `{claim-id}/{date}/` directories
2. For each directory with valid `manifest.json` and `provenance.json`:
   - Extract: claim ID, date, status
   - Generate entry ID: `{claim-id}-{date}`
   - Create YAML entry with: id, claim, date, type, status, source, doi, notes
3. Load existing `phase-e/publications.yml`
4. Merge new entries (avoid duplicates)
5. Sort by date (newest first)
6. Write updated publications.yml

**Constraints:**
- Deterministic (same inputs → same output)
- Network-free (no external calls)
- Preserves existing entries
- Fails gracefully if data missing

**Implementation:** (skeleton)
```python
#!/usr/bin/env python3
"""Update phase-e/publications.yml from discovered publications."""

import json
import yaml
from pathlib import Path
from datetime import datetime

def discover_publications(repo_root: Path):
    """Scan lab/publication/ for valid publications."""
    publications = []
    pub_dir = repo_root / "lab" / "publication"
    
    for claim_dir in pub_dir.glob("claim-*"):
        for date_dir in claim_dir.glob("????-??-??"):
            manifest = date_dir / "manifest.json"
            provenance = date_dir / "provenance.json"
            
            if manifest.exists() and provenance.exists():
                with open(provenance) as f:
                    prov = json.load(f)
                
                publications.append({
                    "id": f"{claim_dir.name}-{date_dir.name}",
                    "claim": claim_dir.name,
                    "date": date_dir.name,
                    "type": "dataset",
                    "status": "published",
                    "source": f"lab/publication/{claim_dir.name}/{date_dir.name}",
                    "doi": "pending",
                    "notes": "نشر Phase-E حتمي. دون تفسير."
                })
    
    return sorted(publications, key=lambda x: x["date"], reverse=True)

def main():
    repo_root = Path(__file__).parent.parent
    publications = discover_publications(repo_root)
    
    yml_path = repo_root / "phase-e" / "publications.yml"
    
    # Load existing
    if yml_path.exists():
        with open(yml_path) as f:
            data = yaml.safe_load(f) or {}
    else:
        data = {}
    
    # Merge (avoid duplicates)
    existing_ids = {p["id"] for p in data.get("publications", [])}
    new_pubs = [p for p in publications if p["id"] not in existing_ids]
    
    data["publications"] = sorted(
        data.get("publications", []) + new_pubs,
        key=lambda x: x["date"],
        reverse=True
    )
    
    # Write updated
    with open(yml_path, "w") as f:
        yaml.dump(data, f, sort_keys=False, allow_unicode=True)
    
    print(f"✓ Updated publications.yml: {len(new_pubs)} new entries")

if __name__ == "__main__":
    main()
```

---

## Cross-Repository Automation (trizel-lab → trizel-site-artifacts)

**Note:** The trizel-lab repository is PRIVATE and not accessible in this task. The following is a proposed architecture based on the problem statement.

### Proposed Flow

1. **In trizel-lab (private repo):**
   - Daily ingestion workflow runs (Step-1)
   - Produces verified ledgers in internal format
   - Workflow copies/exports data to format expected by trizel-site-artifacts
   - Triggers trizel-site-artifacts workflow via `repository_dispatch`

2. **In trizel-site-artifacts (public repo):**
   - Receives trigger from trizel-lab
   - Runs publication compiler and page generator
   - Commits and pushes changes
   - Phase-E data becomes visible automatically

### Implementation Sketch

**In trizel-lab:** `.github/workflows/daily-ingestion.yml`
```yaml
jobs:
  ingest-and-publish:
    steps:
      # ... existing ingestion steps ...
      
      - name: Prepare Phase-E publication data
        run: |
          # Export verified ledgers to Phase-E format
          python3 scripts/export_phase_e_data.py \
            --output /tmp/phase-e-data/
      
      - name: Trigger Phase-E publication
        env:
          GH_TOKEN: ${{ secrets.PHASE_E_PUBLISH_TOKEN }}
        run: |
          # Trigger repository dispatch in public repo
          gh api repos/trizel-ai-site/trizel-site-artifacts/dispatches \
            -F event_type=phase-e-publish \
            -F client_payload[data_date]="$(date -u +%Y-%m-%d)"
```

**Requirements:**
- Personal Access Token (PAT) with `repo` scope stored as `PHASE_E_PUBLISH_TOKEN` in trizel-lab
- PAT must have write access to trizel-site-artifacts (or use GitHub App)

---

## Deliverables Summary

### 1. Audit Report ✅
- **This document** provides complete visibility audit
- **Verdict:** V3 - All content correct, deployment/caching issue if not visible

### 2. Automation Plan ✅
- **Recommended:** Repository Dispatch Automation (Option 1)
- **Implementation files:**
  - `.github/workflows/phase-e-auto-publish.yml` (new)
  - `lab/update_publications_yml.py` (new)
- **Branch protection change:** Allow bot bypass OR enable auto-merge

### 3. No PR Required for Content ✅
- All Phase-E content already exists and is correct
- No content changes needed in repository

### 4. Optional: Automation PR
- If automation is desired, open ONE PR with:
  - New workflow file
  - New update script
  - Updated documentation

---

## Recommendations

### Immediate Actions
1. **Verify Deployment:** Check if https://trizel-ai.com/phase-e/ shows current content
2. **Clear Caches:** If not visible, clear browser cache and CDN cache
3. **Check GitHub Pages:** Verify Pages deployment settings in repository

### Short-term (Automation)
1. **Implement Option 1:** Repository Dispatch Automation
2. **Update Branch Protection:** Allow bot to commit OR enable auto-merge
3. **Test End-to-End:** Manual workflow trigger to verify automation

### Long-term (Process)
1. **Monitor Automation:** Set up alerts for failed workflows
2. **Document Process:** Update BUILD.md with automation details
3. **Governance:** Establish policy for emergency manual overrides

---

## Security & Governance Notes

### Constraints Maintained ✅
- ✅ Gate-6 CLOSED: No interpretation, no claims in automation
- ✅ Static HTML only: No JavaScript, no runtime fetch
- ✅ Inputs locked: Reads ONLY from data/publish/3i-atlas
- ✅ Deterministic: Same inputs → same outputs
- ✅ Network-free: No external API calls

### Automation Safety
- Bot commits are deterministic and auditable
- All changes are versioned in Git
- CI validation runs on all commits (including bot commits)
- Human can revert any automated commit
- Workflow logs provide complete audit trail

### Branch Protection Considerations
- If bot bypasses PR requirements, monitor automated commits closely
- Alternative: Require bot to open PRs, but enable auto-merge
- Consider separate `auto-publish` branch with different protection rules

---

## Conclusion

**Phase-E data IS visible in the repository.** All required files exist on the main branch:
- ✅ HTML pages (phase-e/index.html, phase-e/claim-001.html)
- ✅ Publications allowlist (phase-e/publications.yml)
- ✅ Lab publication data (lab/publication/claim-001/2026-02-{06,07}/*)
- ✅ Root page links (index.html → /phase-e/)

**If not visible on deployed site:** This is a deployment/caching issue, not a repository content issue.

**Automation can be implemented** using the Repository Dispatch architecture (Option 1) with minimal changes:
- 1 new workflow file
- 1 new update script
- 1 branch protection setting change

**No trial-and-error PRs required.** This report constitutes the single comprehensive analysis as requested.

---

**Report End**
