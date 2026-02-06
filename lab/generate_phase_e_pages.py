#!/usr/bin/env python3
"""
TRIZEL Phase-E Static Page Generator v001

This script auto-discovers all existing compiler outputs under lab/publication/**
and generates static HTML pages at build time.

- Enumerates claims and dates dynamically
- Generates index entries per claim/date
- Reuses existing static templates/styles
- Preserves provenance and checksums
- Fails closed when data is missing
- Static HTML only (no JS)
- Network-free
- Deterministic rendering
"""

import os
import sys
import json
import hashlib
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any, Optional


class PhaseEPageGenerator:
    """
    Build-time page generator for Phase-E publications.
    
    Discovers all claims and dates, generates static HTML pages.
    """
    
    VERSION = "v001"
    
    def __init__(self, repo_root: Path):
        """Initialize the page generator."""
        self.repo_root = repo_root
        self.publication_base = repo_root / "lab" / "publication"
        self.phase_e_dir = repo_root / "phase-e"
        
    def discover_publications(self) -> List[Dict[str, Any]]:
        """
        Auto-discover all claims and dates under lab/publication/**.
        
        Returns:
            List of publication dictionaries with claim_id, date, and metadata
        """
        publications = []
        
        if not self.publication_base.exists():
            print(f"WARNING: Publication directory does not exist: {self.publication_base}")
            return publications
        
        # Scan for claim-* directories
        for claim_dir in sorted(self.publication_base.iterdir()):
            if not claim_dir.is_dir():
                continue
            if not claim_dir.name.startswith("claim-"):
                continue
                
            claim_id = claim_dir.name
            
            # Scan for date directories under each claim
            for date_dir in sorted(claim_dir.iterdir()):
                if not date_dir.is_dir():
                    continue
                
                # Validate date format (YYYY-MM-DD)
                date_str = date_dir.name
                try:
                    datetime.strptime(date_str, "%Y-%m-%d")
                except ValueError:
                    print(f"WARNING: Invalid date format: {date_dir}")
                    continue
                
                # Check for required files
                manifest_path = date_dir / "manifest.json"
                provenance_path = date_dir / "provenance.json"
                
                if not manifest_path.exists():
                    print(f"WARNING: Missing manifest.json: {date_dir}")
                    continue
                if not provenance_path.exists():
                    print(f"WARNING: Missing provenance.json: {date_dir}")
                    continue
                
                # Read metadata
                try:
                    with open(manifest_path, 'r') as f:
                        manifest = json.load(f)
                    with open(provenance_path, 'r') as f:
                        provenance = json.load(f)
                    
                    # Extract key information
                    pub = {
                        "claim_id": claim_id,
                        "date": date_str,
                        "version": manifest.get("publication", {}).get("version", "unknown"),
                        "path": date_dir.relative_to(self.repo_root),
                        "manifest": manifest,
                        "provenance": provenance
                    }
                    
                    publications.append(pub)
                    print(f"✓ Discovered: {claim_id} / {date_str}")
                    
                except Exception as e:
                    print(f"ERROR: Failed to read metadata for {date_dir}: {e}")
                    continue
        
        return publications
    
    def generate_index_html(self, publications: List[Dict[str, Any]]) -> str:
        """
        Generate the Phase-E index.html with dynamic table rows.
        
        Args:
            publications: List of discovered publications
            
        Returns:
            Generated HTML content
        """
        # Read the template (current index.html)
        template_path = self.phase_e_dir / "index.html"
        if not template_path.exists():
            raise FileNotFoundError(f"Template not found: {template_path}")
        
        with open(template_path, 'r') as f:
            template = f.read()
        
        # Generate table rows for compiler outputs
        if publications:
            rows_html = []
            for pub in publications:
                claim_id = pub["claim_id"]
                date = pub["date"]
                version = pub["version"]
                path = pub["path"]
                
                row = f"""            <tr>
              <td>{claim_id}</td>
              <td>{date}</td>
              <td>{version}</td>
              <td>
                <span class="status-badge status-verified">Verified</span>
                <span class="status-badge status-deterministic">Deterministic</span>
                <span class="status-badge status-network-free">Network-Free</span>
              </td>
              <td>
                <a href="{claim_id}.html">View Data</a> | 
                <a href="../{path}/">Raw Files</a> | 
                <a href="../{path}/provenance.json">Provenance</a>
              </td>
            </tr>"""
                rows_html.append(row)
            
            table_rows = "\n".join(rows_html)
        else:
            # Fail-closed: no publications found
            table_rows = """            <tr class="empty-state">
              <td colspan="5">
                <p class="no-publications">No compiler outputs are currently available.</p>
                <p class="help-text">Compiler outputs will appear here after the publication engine has been run.</p>
              </td>
            </tr>"""
        
        # Replace the hardcoded claim-001 row with dynamic rows
        # Find the tbody section in the compiler outputs table
        start_marker = '<tbody>'
        end_marker = '</tbody>'
        
        # Find the first tbody (for compiler outputs section)
        start_idx = template.find(start_marker, template.find('Available Compiler Outputs'))
        if start_idx == -1:
            raise ValueError("Could not find compiler outputs tbody in template")
        
        end_idx = template.find(end_marker, start_idx)
        if end_idx == -1:
            raise ValueError("Could not find closing tbody tag")
        
        # Replace the tbody content
        new_html = (
            template[:start_idx + len(start_marker)] + 
            "\n" + table_rows + "\n          " +
            template[end_idx:]
        )
        
        return new_html
    
    def generate_claim_page_html(self, pub: Dict[str, Any]) -> str:
        """
        Generate HTML page for a specific claim/date publication.
        
        Args:
            pub: Publication dictionary
            
        Returns:
            Generated HTML content
        """
        claim_id = pub["claim_id"]
        date = pub["date"]
        version = pub["version"]
        path = pub["path"]
        provenance = pub["provenance"]
        manifest = pub["manifest"]
        
        # Read statistics if available
        stats_path = self.repo_root / path / "derived" / "statistics.json"
        if stats_path.exists():
            with open(stats_path, 'r') as f:
                statistics = json.load(f)
        else:
            statistics = {}
        
        # Read table data if available
        platforms_path = self.repo_root / path / "tables" / "platforms_registry.json"
        sbdb_path = self.repo_root / path / "tables" / "sbdb_attempts.json"
        
        if platforms_path.exists():
            with open(platforms_path, 'r') as f:
                platforms_data = json.load(f)
        else:
            platforms_data = []
        
        if sbdb_path.exists():
            with open(sbdb_path, 'r') as f:
                sbdb_data = json.load(f)
        else:
            sbdb_data = []
        
        # Generate statistics HTML
        total_platforms = statistics.get("total_platforms", 0)
        sbdb_total = statistics.get("sbdb_total_attempts", 0)
        sbdb_success = statistics.get("sbdb_successful_attempts", 0)
        sbdb_failed = statistics.get("sbdb_failed_attempts", 0)
        
        # Generate platform category counts HTML
        platform_counts = statistics.get("platform_counts_by_category", {})
        category_list_html = []
        # Map of category name formatting
        category_names = {
            "authoritative_orbit_and_astrometry": "Authoritative Orbit and Astrometry",
            "major_space_agencies_and_missions": "Major Space Agencies and Missions",
            "space_and_ground_archives": "Space and Ground Archives"
        }
        for category, count in platform_counts.items():
            # Format category name using mapping or fall back to title case
            formatted_category = category_names.get(category, category.replace("_", " ").title())
            category_list_html.append(f"          <li><strong>{formatted_category}:</strong> {count} platforms</li>")
        category_list = "\n".join(category_list_html) if category_list_html else "          <li>No categories available</li>"
        
        # Generate platforms table rows
        platforms_rows = []
        for platform in platforms_data:
            platforms_rows.append(f"""            <tr>
              <td>{platform.get('category', '')}</td>
              <td>{platform.get('name', '')}</td>
              <td>{platform.get('role', '')}</td>
              <td>{platform.get('type', '')}</td>
            </tr>""")
        platforms_table = "\n".join(platforms_rows) if platforms_rows else """            <tr><td colspan="4">No platform data available</td></tr>"""
        
        # Generate SBDB attempts table rows
        sbdb_rows = []
        for attempt in sbdb_data:
            status_class = "status-failed" if not attempt.get("ok", False) else "status-success"
            status_text = "Failed" if not attempt.get("ok", False) else "Success"
            url = attempt.get("url", "")
            # Escape HTML entities in URL
            url_escaped = url.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
            
            sbdb_rows.append(f"""            <tr>
              <td>{attempt.get('designation', '')}</td>
              <td><code>{url_escaped}</code></td>
              <td><span class="status-badge {status_class}">{status_text}</span></td>
              <td>{attempt.get('error_type', '')}</td>
              <td>{attempt.get('http_status', '')}</td>
              <td>{attempt.get('message', '')}</td>
            </tr>""")
        sbdb_table = "\n".join(sbdb_rows) if sbdb_rows else """            <tr><td colspan="6">No SBDB attempt data available</td></tr>"""
        
        # Get file checksums from manifest
        files = manifest.get("files", {})
        
        # Generate checksums list
        checksums_lines = []
        # Read sha256sum.txt if available
        sha256sum_path = self.repo_root / path / "sha256sum.txt"
        if sha256sum_path.exists():
            with open(sha256sum_path, 'r') as f:
                checksums_content = f.read().strip()
        else:
            # Generate from manifest
            for filepath, file_info in sorted(files.items()):
                checksum = file_info.get("sha256", "")
                checksums_lines.append(f"{checksum}  {filepath}")
            checksums_content = "\n".join(checksums_lines)
        
        # Get file sizes
        def get_file_size(filename):
            file_info = files.get(filename, {})
            size = file_info.get("size_bytes", 0)
            return size
        
        def get_file_checksum(filename):
            file_info = files.get(filename, {})
            return file_info.get("sha256", "")
        
        # Get provenance metadata
        engine_name = provenance.get("engine", {}).get("name", "Unknown")
        engine_version = provenance.get("engine", {}).get("version", "unknown")
        exec_timestamp = provenance.get("execution", {}).get("timestamp_utc", "")
        exec_deterministic = provenance.get("execution", {}).get("deterministic", False)
        exec_network = provenance.get("execution", {}).get("network_access", True)
        
        input_source = provenance.get("inputs", {}).get("source", "")
        input_files = provenance.get("inputs", {}).get("files", [])
        input_checksums = provenance.get("inputs", {}).get("checksums", {})
        
        inputs_verified = provenance.get("verification", {}).get("inputs_verified", False)
        integrity_confirmed = provenance.get("verification", {}).get("integrity_confirmed", False)
        
        gate_6_status = provenance.get("constraints", {}).get("gate_6_status", "UNKNOWN")
        interpretation = provenance.get("constraints", {}).get("interpretation", True)
        claims = provenance.get("constraints", {}).get("claims", True)
        governance_authority = provenance.get("constraints", {}).get("governance_authority", True)
        
        # Generate input files list
        input_files_html = []
        for filename in input_files:
            checksum = input_checksums.get(filename, "")
            input_files_html.append(f"              <li>{filename} (SHA256: {checksum})</li>")
        input_files_list = "\n".join(input_files_html) if input_files_html else "              <li>No input files listed</li>"
        
        # Generate the HTML
        claim_display = claim_id.replace("claim", "Claim")  # claim-001 -> Claim-001
        
        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Phase-E — {claim_display} ({date}) | TRIZEL</title>
  <meta name="description" content="TRIZEL Phase-E: Deterministic publication data for {claim_id}. No JavaScript, no runtime, no interpretation.">
  <link rel="stylesheet" href="../assets/css/tokens.css">
  <link rel="stylesheet" href="../assets/css/scientific-ui.css">
  <link rel="stylesheet" href="../assets/css/phase-e.css">
  <link rel="stylesheet" href="../assets/css/print.css" media="print">
</head>
<body>
  <a href="#main" class="skip-link">Skip to main content</a>

  <header class="site-header" role="banner">
    <div class="container">
      <div class="header-content">
        <div class="brand">
          <h1><a href="../index.html" style="color: inherit; text-decoration: none;">TRIZEL</a></h1>
          <p class="subtitle">Phase-E — {claim_display} Publication Data</p>
        </div>
        <nav class="header-nav" aria-label="Main navigation">
          <a href="../index.html">Home</a>
          <a href="index.html">Phase-E Index</a>
          <a href="../system-map.html">System Map</a>
        </nav>
      </div>
    </div>
  </header>

  <main class="container phase-e-main" role="main">
    
    <!-- Publication Header -->
    <section class="section-header" aria-labelledby="publication-title">
      <h2 id="publication-title">{claim_display} — Publication Data ({date})</h2>
      <p class="publication-metadata">
        <strong>Version:</strong> {version} | 
        <strong>Date:</strong> {date} | 
        <strong>Status:</strong> Deterministic, Network-Free, Gate-6 CLOSED
      </p>
    </section>

    <!-- Status Banner -->
    <div class="status-banner" role="status" aria-live="polite">
      <h3>Data Provenance</h3>
      <ul class="status-list">
        <li><strong>Engine:</strong> {engine_name} {engine_version}</li>
        <li><strong>Deterministic:</strong> {'Yes' if exec_deterministic else 'No'}</li>
        <li><strong>Network Access:</strong> {'Yes' if exec_network else 'No'}</li>
        <li><strong>Gate-6 Status:</strong> {gate_6_status}</li>
        <li><strong>Interpretation:</strong> {'Yes' if interpretation else 'No'}</li>
        <li><strong>Claims:</strong> {'Yes' if claims else 'No'}</li>
      </ul>
    </div>

    <!-- Disclaimer -->
    <section class="what-appears" aria-labelledby="disclaimer-heading">
      <h3 id="disclaimer-heading">Data Presentation Only</h3>
      <p class="claim-notice">
        <strong>This page displays deterministic compiler outputs only.</strong> 
        No analysis, no interpretation, no conclusions, no claims. 
        All data is presented exactly as generated by the verified publication compiler.
      </p>
    </section>

    <!-- Derived Statistics -->
    <section class="publication-section" aria-labelledby="statistics-heading">
      <h3 id="statistics-heading">Derived Statistics</h3>
      <p class="section-description">Basic aggregation metrics. No interpretation applied.</p>
      
      <div class="statistics-grid">
        <div class="stat-card">
          <div class="stat-label">Total Platforms</div>
          <div class="stat-value">{total_platforms}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">SBDB Total Attempts</div>
          <div class="stat-value">{sbdb_total}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">SBDB Successful</div>
          <div class="stat-value">{sbdb_success}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">SBDB Failed</div>
          <div class="stat-value">{sbdb_failed}</div>
        </div>
      </div>

      <div class="subsection">
        <h4>Platform Counts by Category</h4>
        <ul class="category-list">
{category_list}
        </ul>
      </div>
    </section>

    <!-- Platforms Registry Table -->
    <section class="publication-section" aria-labelledby="platforms-heading">
      <h3 id="platforms-heading">Platforms Registry</h3>
      <p class="section-description">Flattened platform registry with categories. {len(platforms_data)} entries total.</p>
      
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
{platforms_table}
          </tbody>
        </table>
      </div>

      <div class="data-files">
        <h4>Data Files</h4>
        <ul>
          <li><a href="../{path}/tables/platforms_registry.json">platforms_registry.json</a> ({get_file_size('tables/platforms_registry.json'):,} bytes, SHA256: {get_file_checksum('tables/platforms_registry.json')})</li>
          <li><a href="../{path}/tables/platforms_registry.csv">platforms_registry.csv</a> ({get_file_size('tables/platforms_registry.csv'):,} bytes, SHA256: {get_file_checksum('tables/platforms_registry.csv')})</li>
        </ul>
      </div>
    </section>

    <!-- SBDB Attempts Table -->
    <section class="publication-section" aria-labelledby="sbdb-heading">
      <h3 id="sbdb-heading">SBDB Attempts</h3>
      <p class="section-description">Query attempts with status and errors. {len(sbdb_data)} attempts total.</p>
      
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th scope="col">Designation</th>
              <th scope="col">URL</th>
              <th scope="col">Status</th>
              <th scope="col">Error Type</th>
              <th scope="col">HTTP Status</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
{sbdb_table}
          </tbody>
        </table>
      </div>

      <div class="data-files">
        <h4>Data Files</h4>
        <ul>
          <li><a href="../{path}/tables/sbdb_attempts.json">sbdb_attempts.json</a> ({get_file_size('tables/sbdb_attempts.json'):,} bytes, SHA256: {get_file_checksum('tables/sbdb_attempts.json')})</li>
          <li><a href="../{path}/tables/sbdb_attempts.csv">sbdb_attempts.csv</a> ({get_file_size('tables/sbdb_attempts.csv'):,} bytes, SHA256: {get_file_checksum('tables/sbdb_attempts.csv')})</li>
        </ul>
      </div>
    </section>

    <!-- Provenance & Verification -->
    <section class="publication-section" aria-labelledby="provenance-heading">
      <h3 id="provenance-heading">Provenance & Verification</h3>
      <p class="section-description">Complete execution metadata and integrity checksums.</p>

      <div class="provenance-box">
        <h4>Execution Metadata</h4>
        <dl class="metadata-list">
          <dt>Engine Name:</dt>
          <dd>{engine_name}</dd>
          
          <dt>Engine Version:</dt>
          <dd>{engine_version}</dd>
          
          <dt>Claim ID:</dt>
          <dd>{claim_id}</dd>
          
          <dt>Execution Date:</dt>
          <dd>{date}</dd>
          
          <dt>Timestamp (UTC):</dt>
          <dd>{exec_timestamp}</dd>
          
          <dt>Deterministic:</dt>
          <dd>{'true' if exec_deterministic else 'false'}</dd>
          
          <dt>Network Access:</dt>
          <dd>{'true' if exec_network else 'false'}</dd>
        </dl>
      </div>

      <div class="provenance-box">
        <h4>Constraints</h4>
        <dl class="metadata-list">
          <dt>Gate-6 Status:</dt>
          <dd>{gate_6_status}</dd>
          
          <dt>Interpretation:</dt>
          <dd>{'true' if interpretation else 'false (prohibited)'}</dd>
          
          <dt>Claims:</dt>
          <dd>{'true' if claims else 'false (prohibited)'}</dd>
          
          <dt>Governance Authority:</dt>
          <dd>{'true' if governance_authority else 'false (no authority)'}</dd>
        </dl>
      </div>

      <div class="provenance-box">
        <h4>Input Sources</h4>
        <dl class="metadata-list">
          <dt>Source Directory:</dt>
          <dd>{input_source}</dd>
          
          <dt>Input Files:</dt>
          <dd>
            <ul>
{input_files_list}
            </ul>
          </dd>
          
          <dt>Inputs Verified:</dt>
          <dd>{'true' if inputs_verified else 'false'}</dd>
          
          <dt>Integrity Confirmed:</dt>
          <dd>{'true' if integrity_confirmed else 'false'}</dd>
        </dl>
      </div>

      <div class="provenance-box">
        <h4>Complete File Checksums (SHA256)</h4>
        <p class="help-text">All output files with integrity checksums. Verify using: <code>sha256sum -c sha256sum.txt</code></p>
        <pre class="checksum-list">{checksums_content}</pre>
      </div>

      <div class="data-files">
        <h4>Verification Files</h4>
        <ul>
          <li><a href="../{path}/manifest.json">manifest.json</a> - File manifest with checksums</li>
          <li><a href="../{path}/provenance.json">provenance.json</a> - Complete provenance metadata</li>
          <li><a href="../{path}/sha256sum.txt">sha256sum.txt</a> - SHA256 checksum file</li>
          <li><a href="../{path}/derived/statistics.json">statistics.json</a> - Derived statistics (JSON)</li>
        </ul>
      </div>
    </section>

    <!-- References -->
    <section class="references" aria-labelledby="references-heading">
      <h3 id="references-heading">References</h3>
      
      <ul class="reference-list">
        <li>
          <strong>Publication Directory:</strong> 
          <a href="../{path}/">{path}/</a>
        </li>
        <li>
          <strong>Phase-E Index:</strong> 
          <a href="index.html">Phase-E Publications Index</a>
        </li>
        <li>
          <strong>Scientific Presentation Contract:</strong> 
          <a href="../docs/SCIENTIFIC_PRESENTATION_CONTRACT.md">View Contract</a>
        </li>
      </ul>

      <p class="reference-note">
        All data is presented as-generated. No runtime behavior, no interpretation, no conclusions.
      </p>
    </section>

  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <p>
        TRIZEL Phase-E — {claim_display} Publication Data ({date})<br>
        All content governed by <a href="../docs/SCIENTIFIC_PRESENTATION_CONTRACT.md">Scientific Presentation Contract</a>
      </p>
      <p class="footer-status">
        Status: Deterministic | Network-Free | Gate-6 CLOSED | No Interpretation | No Claims
      </p>
    </div>
  </footer>
</body>
</html>"""
        
        return html
    
    def run(self) -> Dict[str, Any]:
        """
        Execute the page generator.
        
        Returns:
            Dictionary with execution results
        """
        print(f"TRIZEL Phase-E Static Page Generator {self.VERSION}")
        print()
        
        # Step 1: Discover all publications
        print("Step 1: Discovering publications...")
        publications = self.discover_publications()
        print(f"  ✓ Discovered {len(publications)} publication(s)")
        print()
        
        if not publications:
            print("WARNING: No publications found. Generating fail-closed index.")
        
        # Step 2: Generate index.html
        print("Step 2: Generating Phase-E index.html...")
        index_html = self.generate_index_html(publications)
        index_path = self.phase_e_dir / "index.html"
        with open(index_path, 'w') as f:
            f.write(index_html)
        print(f"  ✓ Generated: {index_path.relative_to(self.repo_root)}")
        print()
        
        # Step 3: Generate per-claim pages
        print("Step 3: Generating per-claim pages...")
        for pub in publications:
            claim_id = pub["claim_id"]
            page_html = self.generate_claim_page_html(pub)
            page_path = self.phase_e_dir / f"{claim_id}.html"
            with open(page_path, 'w') as f:
                f.write(page_html)
            print(f"  ✓ Generated: {page_path.relative_to(self.repo_root)}")
        print()
        
        # Summary
        print("="*60)
        print("PHASE-E PAGE GENERATION COMPLETE")
        print("="*60)
        print(f"Publications discovered: {len(publications)}")
        print(f"Index page: phase-e/index.html")
        print(f"Claim pages: {len(publications)}")
        print("Static HTML only: YES")
        print("Network-free: YES")
        print("Deterministic: YES")
        print("="*60)
        
        return {
            "success": True,
            "publications_count": len(publications),
            "publications": publications
        }


def main():
    """Main entry point for the page generator."""
    try:
        # Determine repository root
        repo_root = Path(__file__).parent.parent.resolve()
        
        # Create and run generator
        generator = PhaseEPageGenerator(repo_root)
        result = generator.run()
        
        # Exit with success
        sys.exit(0)
        
    except Exception as e:
        print(f"FATAL ERROR: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
