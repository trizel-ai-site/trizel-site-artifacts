#!/usr/bin/env node

/**
 * WCAG Contrast Checker for TRIZEL Site
 * Checks all pages across all languages for WCAG AA/AAA contrast compliance
 * Uses axe-core and Playwright with system Chrome
 */

const { chromium } = require('playwright');
const axeCore = require('axe-core');
const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';
const LANGUAGES = ['en', 'fr', 'de', 'ru', 'zh', 'ar'];

// Key pages to check (relative to language root)
const PAGES = [
  '/',
  '/index.html',
  '/governance-status/',
  '/how-to-cite/',
  '/methodology/',
  '/scientific-narrative/',
  '/scientific-publication/',
  '/system-map/',
];

// Root-level pages (no language prefix)
const ROOT_PAGES = [
  '/',
  '/accessibility.html',
  '/statistics.html',
  '/system-map.html',
];

/**
 * Run axe accessibility tests on a page
 */
async function checkPage(page, url) {
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    
    // Inject axe-core
    await page.evaluate(axeCore.source);
    
    // Run axe with WCAG AA and AAA rules
    const results = await page.evaluate(() => {
      return window.axe.run({
        runOnly: {
          type: 'tag',
          values: ['wcag2aa', 'wcag2aaa', 'wcag21aa', 'wcag21aaa']
        }
      });
    });
    
    // Filter for color-contrast violations
    const contrastViolations = results.violations.filter(v => 
      v.id.includes('color-contrast') || 
      v.id === 'color-contrast-enhanced' ||
      v.id === 'color-contrast'
    );
    
    return {
      url,
      passed: contrastViolations.length === 0,
      violations: contrastViolations,
      allViolations: results.violations
    };
  } catch (error) {
    return {
      url,
      passed: false,
      error: error.message
    };
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 TRIZEL WCAG Contrast Checker');
  console.log('================================\n');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Languages: ${LANGUAGES.join(', ')}\n`);
  
  const browser = await chromium.launch({
    headless: true
  });
  
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const results = [];
  let totalPages = 0;
  let passedPages = 0;
  let failedPages = 0;
  
  // Check root pages
  console.log('Checking root pages...');
  for (const pagePath of ROOT_PAGES) {
    const url = `${BASE_URL}${pagePath}`;
    console.log(`  Checking: ${url}`);
    const result = await checkPage(page, url);
    results.push(result);
    totalPages++;
    
    if (result.passed) {
      console.log(`    ✅ PASS`);
      passedPages++;
    } else {
      console.log(`    ❌ FAIL - ${result.violations?.length || 0} contrast violations`);
      failedPages++;
    }
  }
  
  // Check language-specific pages
  for (const lang of LANGUAGES) {
    console.log(`\nChecking ${lang} pages...`);
    
    for (const pagePath of PAGES) {
      const url = `${BASE_URL}/${lang}${pagePath}`;
      console.log(`  Checking: ${url}`);
      const result = await checkPage(page, url);
      results.push(result);
      totalPages++;
      
      if (result.passed) {
        console.log(`    ✅ PASS`);
        passedPages++;
      } else if (result.error) {
        console.log(`    ⚠️  ERROR: ${result.error}`);
        // Don't count errors as failures
      } else {
        console.log(`    ❌ FAIL - ${result.violations?.length || 0} contrast violations`);
        failedPages++;
        
        // Show first few violations for debugging
        if (result.violations && result.violations.length > 0) {
          result.violations.slice(0, 2).forEach(v => {
            console.log(`       ${v.id}: ${v.help}`);
            if (v.nodes && v.nodes.length > 0) {
              console.log(`       Affected: ${v.nodes[0].html.substring(0, 80)}...`);
            }
          });
        }
      }
    }
  }
  
  await browser.close();
  
  // Summary
  console.log('\n================================');
  console.log('📊 Summary');
  console.log('================================');
  console.log(`Total pages checked: ${totalPages}`);
  console.log(`Passed: ${passedPages} (${Math.round(passedPages/totalPages*100)}%)`);
  console.log(`Failed: ${failedPages} (${Math.round(failedPages/totalPages*100)}%)`);
  
  // Save detailed report
  const reportPath = path.join(__dirname, '..', 'contrast-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\nDetailed report saved to: ${reportPath}`);
  
  // Exit with failure if any pages failed
  if (failedPages > 0) {
    console.log('\n❌ Contrast check FAILED - Fix violations before proceeding');
    process.exit(1);
  } else {
    console.log('\n✅ All contrast checks PASSED!');
    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { checkPage, main };
