# DOI Reference Snippets — Phase-G

## Purpose

This directory contains centralized, reusable HTML snippets for displaying DOI references on GOI pages when a DOI has been officially approved under Layer-0 governance.

## Governance Rules

**CRITICAL:** DOI sections must ONLY be added when:
1. A DOI has been officially approved under Layer-0 governance
2. The DOI corresponds to a frozen, verified scientific snapshot
3. Manual insertion and review is performed

**NO placeholders, NO empty blocks, NO pre-embedded templates.**

## Usage

### When to Use

A DOI snippet should be manually inserted into a GOI page ONLY after:
- Layer-0 governance has officially approved the DOI
- The DOI has been issued by an authorized service (e.g., Zenodo)
- The snapshot has been frozen and verified

### How to Use

1. **Select the appropriate language snippet:**
   - English: `DOI_SNIPPET.en.html`
   - French: `DOI_SNIPPET.fr.html`
   - German: `DOI_SNIPPET.de.html`
   - Russian: `DOI_SNIPPET.ru.html`
   - Chinese: `DOI_SNIPPET.zh.html`
   - Arabic: `DOI_SNIPPET.ar.html`

2. **Copy the snippet content**

3. **Replace placeholder with real DOI:**
   - Find `[INSERT_DOI_HERE]` or equivalent in your language
   - Replace with the actual DOI (e.g., `10.5281/zenodo.8675309`)
   - Replace in BOTH the link href and the display text

4. **Insert into target GOI page:**
   - Open the target GOI HTML file (e.g., `goi/pages/production/index.en.html`)
   - Insert the modified snippet before the closing `</main>` tag
   - Typically after the last `<section>` but before `</div></main>`

5. **Commit and review:**
   - Commit the change with a clear message referencing Layer-0 approval
   - Submit for review
   - Changes go live on GitHub Pages after merge

## Example

### Before (no DOI)
```html
      <section class="goi-section">
        <h3>Verification</h3>
        <p>All entries are verifiable...</p>
      </section>
    </div>
  </main>
```

### After (with approved DOI)
```html
      <section class="goi-section">
        <h3>Verification</h3>
        <p>All entries are verifiable...</p>
      </section>

      <!-- DOI Reference Section (Phase-G) -->
      <section class="goi-section">
        <div class="goi-doi-section">
          <h3 class="goi-doi-title">DOI Reference (Governance-Approved)</h3>
          
          <div class="goi-doi-content">
            <div class="goi-doi-label">DOI Identifier:</div>
            <div class="goi-doi-value">
              <a href="https://doi.org/10.5281/zenodo.8675309" class="goi-doi-link" target="_blank" rel="noopener">
                10.5281/zenodo.8675309
              </a>
            </div>
          </div>

          <div class="goi-doi-metadata">
            <div class="goi-doi-meta-item">
              <strong>Source:</strong> Issued under TRIZEL Layer-0 Governance
            </div>
            <div class="goi-doi-meta-item">
              <strong>Status:</strong> <span class="goi-doi-badge">Verified Snapshot</span>
            </div>
          </div>

          <div class="goi-doi-notice">
            This DOI corresponds to a frozen scientific snapshot approved under TRIZEL governance. 
            No live data, execution, or post-issuance modification is permitted.
          </div>
        </div>
      </section>
    </div>
  </main>
```

## Styling

DOI sections use CSS classes defined in `/assets/goi/goi.css`:
- `.goi-doi-section` — Main container
- `.goi-doi-title` — Section heading
- `.goi-doi-value` — Monospace DOI display
- `.goi-doi-link` — Clickable DOI link
- `.goi-doi-badge` — Status badge
- `.goi-doi-notice` — Governance warning

These styles are minimal, reusable, and inactive unless a DOI section exists in the HTML.

## Language Support

| Language | Code | Snippet File |
|----------|------|--------------|
| English  | en   | DOI_SNIPPET.en.html |
| French   | fr   | DOI_SNIPPET.fr.html |
| German   | de   | DOI_SNIPPET.de.html |
| Russian  | ru   | DOI_SNIPPET.ru.html |
| Chinese  | zh   | DOI_SNIPPET.zh.html |
| Arabic   | ar   | DOI_SNIPPET.ar.html |

## Fail-Closed Design

**By design:**
- GOI pages contain NO DOI markup unless explicitly inserted
- Absence of DOI = Absence of DOI block
- No placeholders, no commented sections, no hidden elements
- DOI display is intentional, explicit, and reviewable

## Compliance

✅ **Static HTML only** — No JavaScript, no API calls  
✅ **Manual activation** — Requires explicit insertion and commit  
✅ **Layer-0 governance** — Only for approved DOIs  
✅ **Read-only display** — No DOI minting or automation  
✅ **Minimal diff** — Surgical changes only when needed  
✅ **Auditable** — Every DOI addition is a traceable commit  

## Questions?

For governance-related questions about DOI approval, contact Layer-0 administration.

For technical questions about snippet usage, refer to this README or examine the snippet files directly.
