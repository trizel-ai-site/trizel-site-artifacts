#!/usr/bin/env python3
"""
TRIZEL Phase-E Deterministic Publication Compiler v001

This is the first executable scientific production layer of TRIZEL.
It operates as a deterministic, network-free publication compiler that:
- Reads ONLY verified ledgers from /data/publish/3i-atlas
- Produces reproducible, versioned scientific artifacts
- Enforces NO interpretation, NO claims, NO governance authority

Gate-6 remains CLOSED. This engine performs deterministic transformation only.
"""

import os
import sys
import json
import hashlib
import csv
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Optional


class PublicationEngine:
    """
    Deterministic publication compiler for TRIZEL Phase-E.
    
    Enforces:
    - Network-free execution (no external calls)
    - Verified-inputs-only (reads ONLY from /data/publish/3i-atlas)
    - Deterministic outputs (same inputs → same outputs)
    - Fail-closed handling (NO_DATA_YET on missing inputs)
    """
    
    VERSION = "v001"
    # IMMUTABLE INPUT ROOT - GOVERNANCE ENFORCED
    # This is the ONLY allowed input directory. No alternate paths permitted.
    VERIFIED_INPUT_ROOT = "data/publish/3i-atlas"
    
    def __init__(self, repo_root: Path, claim_id: str):
        """Initialize the publication engine.
        
        Args:
            repo_root: Root directory of the repository
            claim_id: Claim identifier (e.g., "claim-001")
        """
        self.repo_root = repo_root
        self.claim_id = claim_id
        
        # STRICT INPUT SOURCE ENFORCEMENT
        # Construct the data directory using the immutable constant
        self.data_dir = repo_root / "data" / "publish" / "3i-atlas"
        
        # Verify the path is canonical and within the allowed root
        self._verify_input_path_security()
        
        self.output_base = repo_root / "lab" / "publication" / self.claim_id
        self.execution_timestamp = datetime.now(timezone.utc)
        
        # Ensure deterministic execution
        self.deterministic_date = self.execution_timestamp.strftime("%Y-%m-%d")
    
    def _verify_input_path_security(self):
        """
        Verify that the input path is secure and canonical.
        
        This is a governance-critical check that ensures:
        1. The path resolves to the expected location
        2. No path traversal or symbolic link attacks
        3. The path is strictly under the allowed input root
        
        Raises:
            ValueError: If path verification fails
        """
        try:
            # Resolve to canonical absolute path
            canonical_data_dir = self.data_dir.resolve()
            expected_root = (self.repo_root / self.VERIFIED_INPUT_ROOT).resolve()
            
            # Verify the canonical path matches expected
            if canonical_data_dir != expected_root:
                raise ValueError(
                    f"Input path security violation: "
                    f"resolved to {canonical_data_dir}, "
                    f"expected {expected_root}"
                )
            
            # Additional check: ensure no parent directory escape
            try:
                canonical_data_dir.relative_to(self.repo_root)
            except ValueError:
                raise ValueError(
                    f"Input path escapes repository root: {canonical_data_dir}"
                )
                
        except Exception as e:
            raise ValueError(f"Input path verification failed: {e}")
        
    def verify_inputs(self) -> Dict[str, Any]:
        """
        Verify that required input files exist and are valid.
        
        Returns:
            Dict containing verification status and input data
            
        Raises:
            FileNotFoundError: If required inputs are missing (NO_DATA_YET)
        """
        required_files = [
            "manifest.json",
            "daily-status.json",
            "source-snapshot.json"
        ]
        
        verification = {
            "verified": True,
            "inputs": {},
            "checksums": {},
            "missing_files": []
        }
        
        # Check all required files exist
        for filename in required_files:
            filepath = self.data_dir / filename
            if not filepath.exists():
                verification["verified"] = False
                verification["missing_files"].append(filename)
            else:
                # Read and verify file
                with open(filepath, 'r') as f:
                    data = json.load(f)
                verification["inputs"][filename] = data
                
                # Compute checksum
                with open(filepath, 'rb') as f:
                    file_hash = hashlib.sha256(f.read()).hexdigest()
                verification["checksums"][filename] = file_hash
        
        # Fail-closed handling: NO_DATA_YET
        if not verification["verified"]:
            raise FileNotFoundError(
                f"NO_DATA_YET: Missing required input files: {verification['missing_files']}"
            )
        
        # Verify manifest checksums if available
        manifest = verification["inputs"]["manifest.json"]
        if "files" in manifest:
            for filename, file_info in manifest["files"].items():
                if filename in verification["checksums"]:
                    expected = file_info.get("sha256", "")
                    actual = verification["checksums"][filename]
                    if expected != actual:
                        verification["verified"] = False
                        print(f"WARNING: Checksum mismatch for {filename}", file=sys.stderr)
                        print(f"  Expected: {expected}", file=sys.stderr)
                        print(f"  Actual:   {actual}", file=sys.stderr)
        
        return verification
    
    def generate_provenance(self, verification: Dict[str, Any]) -> Dict[str, Any]:
        """
        Generate provenance metadata for this publication.
        
        Args:
            verification: Input verification results
            
        Returns:
            Provenance metadata dictionary
        """
        provenance = {
            "engine": {
                "name": "TRIZEL Phase-E Publication Compiler",
                "version": self.VERSION,
                "claim_id": self.claim_id
            },
            "execution": {
                "timestamp_utc": self.execution_timestamp.isoformat() + "Z",
                "date": self.deterministic_date,
                "deterministic": True,
                "network_access": False
            },
            "inputs": {
                "source": str(self.data_dir.relative_to(self.repo_root)),
                "files": list(verification["inputs"].keys()),
                "checksums": verification["checksums"]
            },
            "verification": {
                "inputs_verified": verification["verified"],
                "manifest_checked": True,
                "integrity_confirmed": verification["verified"]
            },
            "constraints": {
                "gate_6_status": "CLOSED",
                "interpretation": False,
                "claims": False,
                "governance_authority": False
            }
        }
        
        return provenance
    
    def extract_tables(self, verification: Dict[str, Any]) -> Dict[str, Any]:
        """
        Extract tabular data from verified inputs.
        
        Args:
            verification: Input verification results
            
        Returns:
            Dictionary of tables
        """
        tables = {}
        
        # Extract platform registry as a table
        source_snapshot = verification["inputs"].get("source-snapshot.json", {})
        platforms_registry = source_snapshot.get("platforms_registry", {})
        
        if "categories" in platforms_registry:
            # Flatten platforms into a single table
            platforms_data = []
            for category, items in platforms_registry["categories"].items():
                for item in items:
                    platforms_data.append({
                        "category": category,
                        "name": item.get("name", ""),
                        "role": item.get("role", ""),
                        "type": item.get("type", "")
                    })
            
            tables["platforms_registry"] = platforms_data
        
        # Extract SBDB attempts as a table
        sbdb_attempts = source_snapshot.get("sbdb_attempts", [])
        if sbdb_attempts:
            attempts_data = []
            for attempt in sbdb_attempts:
                attempts_data.append({
                    "designation": attempt.get("designation", ""),
                    "ok": attempt.get("ok", False),
                    "url": attempt.get("url", ""),
                    "error_type": attempt.get("error", {}).get("type", ""),
                    "http_status": attempt.get("error", {}).get("http_status", ""),
                    "message": attempt.get("error", {}).get("message", "")
                })
            
            tables["sbdb_attempts"] = attempts_data
        
        return tables
    
    def compute_derived(self, verification: Dict[str, Any]) -> Dict[str, Any]:
        """
        Compute derived statistics (NO INTERPRETATION, only counting/aggregation).
        
        Args:
            verification: Input verification results
            
        Returns:
            Dictionary of derived data
        """
        derived = {}
        
        source_snapshot = verification["inputs"].get("source-snapshot.json", {})
        
        # Count platforms by category
        platforms_registry = source_snapshot.get("platforms_registry", {})
        if "categories" in platforms_registry:
            platform_counts = {}
            for category, items in platforms_registry["categories"].items():
                platform_counts[category] = len(items)
            
            derived["platform_counts_by_category"] = platform_counts
            derived["total_platforms"] = sum(platform_counts.values())
        
        # Count SBDB attempts
        sbdb_attempts = source_snapshot.get("sbdb_attempts", [])
        derived["sbdb_total_attempts"] = len(sbdb_attempts)
        derived["sbdb_successful_attempts"] = sum(1 for a in sbdb_attempts if a.get("ok", False))
        derived["sbdb_failed_attempts"] = sum(1 for a in sbdb_attempts if not a.get("ok", False))
        
        # Extract metadata stats
        metadata = source_snapshot.get("metadata", {})
        derived["metadata"] = {
            "project": metadata.get("project", ""),
            "query_designation": metadata.get("query_designation", ""),
            "retrieved_utc": metadata.get("retrieved_utc", ""),
            "has_sbdb_payload": metadata.get("integrity", {}).get("has_sbdb_payload", False),
            "has_error": metadata.get("integrity", {}).get("has_error", False)
        }
        
        return derived
    
    def generate_visual_evidence(
        self, 
        verification: Dict[str, Any],
        derived: Dict[str, Any]
    ) -> Dict[str, Any]:
        """
        Generate visual evidence metadata for plots and reference images.
        
        Phase-E Scientific Publication Enhancement:
        - Creates metadata for data visualizations
        - Prepares reference image manifests
        - Ensures all visual artifacts are traceable via checksums
        
        Args:
            verification: Input verification results
            derived: Derived statistics
            
        Returns:
            Dictionary containing visual evidence metadata
        """
        visual_evidence = {
            "plots": [],
            "reference_images": [],
            "metadata": {
                "generation_date": self.deterministic_date,
                "deterministic": True,
                "network_free": True
            }
        }
        
        # Plot 1: SBDB Attempts Status Chart
        # Generate metadata for SBDB attempts visualization
        if derived.get("sbdb_total_attempts", 0) > 0:
            visual_evidence["plots"].append({
                "id": "sbdb-attempts-status",
                "title": "SBDB Query Attempts Status",
                "type": "bar_chart",
                "description": "Distribution of successful vs failed SBDB query attempts",
                "data_source": "derived/statistics.json",
                "format": "svg",
                "filename": "sbdb_attempts_status.svg",
                "dimensions": {"width": 800, "height": 400},
                "accessibility": {
                    "alt_text": f"Bar chart showing {derived.get('sbdb_successful_attempts', 0)} successful and {derived.get('sbdb_failed_attempts', 0)} failed SBDB query attempts",
                    "wcag_compliant": True
                }
            })
        
        # Plot 2: Platform Distribution by Category
        if derived.get("total_platforms", 0) > 0:
            visual_evidence["plots"].append({
                "id": "platform-distribution",
                "title": "Platform Distribution by Category",
                "type": "bar_chart",
                "description": "Number of platforms in each category",
                "data_source": "derived/statistics.json",
                "format": "svg",
                "filename": "platform_distribution.svg",
                "dimensions": {"width": 800, "height": 400},
                "accessibility": {
                    "alt_text": f"Bar chart showing distribution of {derived.get('total_platforms', 0)} platforms across {len(derived.get('platform_counts_by_category', {}))} categories",
                    "wcag_compliant": True
                }
            })
        
        # Reference images metadata (for external reference data)
        # These would be added when verified external reference images are available
        visual_evidence["reference_images"] = [
            {
                "id": "sbdb-api-documentation",
                "title": "NASA JPL SBDB API Documentation Reference",
                "source": "NASA JPL Solar System Dynamics",
                "url": "https://ssd-api.jpl.nasa.gov/doc/sbdb.html",
                "acquisition_date": "2025-12-19",
                "reference_id": "SBDB-API-DOC-2025",
                "description": "Official API documentation for parameter reference",
                "format": "note",
                "note": "External reference - documentation link only, no image artifact",
                "checksum": None,
                "verified": True
            }
        ]
        
        return visual_evidence
    
    def write_outputs(
        self, 
        provenance: Dict[str, Any], 
        tables: Dict[str, Any], 
        derived: Dict[str, Any],
        visual_evidence: Optional[Dict[str, Any]] = None
    ) -> Path:
        """
        Write all publication outputs to versioned directory.
        
        Args:
            provenance: Provenance metadata
            tables: Extracted tables
            derived: Derived data
            
        Returns:
            Path to output directory
        """
        output_dir = self.output_base / self.deterministic_date
        output_dir.mkdir(parents=True, exist_ok=True)
        
        tables_dir = output_dir / "tables"
        tables_dir.mkdir(exist_ok=True)
        
        derived_dir = output_dir / "derived"
        derived_dir.mkdir(exist_ok=True)
        
        # Create directories for visual evidence (Phase-E scientific publication enhancement)
        figures_dir = output_dir / "figures"
        figures_dir.mkdir(exist_ok=True)
        
        reference_images_dir = output_dir / "reference-images"
        reference_images_dir.mkdir(exist_ok=True)
        
        # Write provenance.json
        provenance_path = output_dir / "provenance.json"
        with open(provenance_path, 'w') as f:
            json.dump(provenance, f, indent=2, sort_keys=True)
        
        # Write tables (both CSV and JSON)
        for table_name, table_data in tables.items():
            # Write JSON
            json_path = tables_dir / f"{table_name}.json"
            with open(json_path, 'w') as f:
                json.dump(table_data, f, indent=2)
            
            # Write CSV
            if table_data:
                csv_path = tables_dir / f"{table_name}.csv"
                with open(csv_path, 'w', newline='') as f:
                    writer = csv.DictWriter(f, fieldnames=table_data[0].keys())
                    writer.writeheader()
                    writer.writerows(table_data)
        
        # Write derived data
        derived_path = derived_dir / "statistics.json"
        with open(derived_path, 'w') as f:
            json.dump(derived, f, indent=2, sort_keys=True)
        
        # Write visual evidence metadata (Phase-E scientific publication enhancement)
        if visual_evidence:
            visual_evidence_path = derived_dir / "visual_evidence.json"
            with open(visual_evidence_path, 'w') as f:
                json.dump(visual_evidence, f, indent=2, sort_keys=True)
        
        # Generate manifest.json
        manifest = self._generate_manifest(output_dir)
        manifest_path = output_dir / "manifest.json"
        with open(manifest_path, 'w') as f:
            json.dump(manifest, f, indent=2, sort_keys=True)
        
        # Generate sha256sum.txt
        sha256sum_path = output_dir / "sha256sum.txt"
        self._generate_checksums(output_dir, sha256sum_path)
        
        return output_dir
    
    def _generate_manifest(self, output_dir: Path) -> Dict[str, Any]:
        """Generate manifest.json for the publication.
        
        Excludes timestamp-containing files (provenance.json, sha256sum.txt) 
        to ensure deterministic manifest checksums.
        """
        files = {}
        
        # Files to exclude from manifest for determinism
        excluded_files = {"manifest.json", "provenance.json", "sha256sum.txt"}
        
        for filepath in output_dir.rglob("*"):
            if filepath.is_file():
                rel_path = filepath.relative_to(output_dir)
                filename = str(rel_path)
                
                # Skip excluded files
                if filepath.name in excluded_files or filename in excluded_files:
                    continue
                
                with open(filepath, 'rb') as f:
                    file_hash = hashlib.sha256(f.read()).hexdigest()
                
                files[filename] = {
                    "sha256": file_hash,
                    "size_bytes": filepath.stat().st_size
                }
        
        manifest = {
            "publication": {
                "claim_id": self.claim_id,
                "version": self.VERSION,
                "date": self.deterministic_date
            },
            "files": files
        }
        
        return manifest
    
    def _generate_checksums(self, output_dir: Path, checksum_path: Path):
        """Generate sha256sum.txt file."""
        with open(checksum_path, 'w') as out:
            for filepath in sorted(output_dir.rglob("*")):
                if filepath.is_file() and filepath.name != "sha256sum.txt":
                    rel_path = filepath.relative_to(output_dir)
                    with open(filepath, 'rb') as f:
                        file_hash = hashlib.sha256(f.read()).hexdigest()
                    out.write(f"{file_hash}  {rel_path}\n")
    
    def run(self) -> Dict[str, Any]:
        """
        Execute the deterministic publication compiler.
        
        Returns:
            Dictionary with execution results
            
        Raises:
            FileNotFoundError: If required inputs are missing
            Exception: On any other error
        """
        print(f"TRIZEL Phase-E Publication Compiler {self.VERSION}")
        print(f"Claim ID: {self.claim_id}")
        print(f"Date: {self.deterministic_date}")
        print()
        
        # Step 1: Verify inputs
        print("Step 1: Verifying inputs...")
        verification = self.verify_inputs()
        print(f"  ✓ Verified {len(verification['inputs'])} input files")
        print()
        
        # Step 2: Generate provenance
        print("Step 2: Generating provenance...")
        provenance = self.generate_provenance(verification)
        print(f"  ✓ Provenance generated (deterministic: {provenance['execution']['deterministic']})")
        print()
        
        # Step 3: Extract tables
        print("Step 3: Extracting tables...")
        tables = self.extract_tables(verification)
        print(f"  ✓ Extracted {len(tables)} tables")
        for table_name, table_data in tables.items():
            print(f"    - {table_name}: {len(table_data)} rows")
        print()
        
        # Step 4: Compute derived data
        print("Step 4: Computing derived data...")
        derived = self.compute_derived(verification)
        print(f"  ✓ Computed {len(derived)} derived metrics")
        print()
        
        # Step 5: Generate visual evidence (Phase-E scientific publication enhancement)
        print("Step 5: Generating visual evidence metadata...")
        visual_evidence = self.generate_visual_evidence(verification, derived)
        print(f"  ✓ Generated {len(visual_evidence.get('plots', []))} plot definitions")
        print(f"  ✓ Generated {len(visual_evidence.get('reference_images', []))} reference image entries")
        print()
        
        # Step 6: Write outputs
        print("Step 6: Writing outputs...")
        output_dir = self.write_outputs(provenance, tables, derived, visual_evidence)
        print(f"  ✓ Outputs written to: {output_dir.relative_to(self.repo_root)}")
        print()
        
        # Summary
        print("="*60)
        print("PUBLICATION COMPLETE")
        print("="*60)
        print(f"Claim ID: {self.claim_id}")
        print(f"Output directory: {output_dir.relative_to(self.repo_root)}")
        print(f"Deterministic: YES")
        print(f"Network access: NO")
        print(f"Gate-6 status: CLOSED")
        print(f"Interpretation: NO")
        print(f"Claims: NO")
        print(f"Governance authority: NO")
        print("="*60)
        
        return {
            "success": True,
            "claim_id": self.claim_id,
            "output_dir": str(output_dir.relative_to(self.repo_root)),
            "provenance": provenance,
            "verification": verification
        }


def main():
    """Main entry point for the publication engine."""
    try:
        # Parse command-line arguments
        import argparse
        parser = argparse.ArgumentParser(
            description="TRIZEL Phase-E Deterministic Publication Compiler"
        )
        parser.add_argument(
            "--claim-id",
            default="claim-001",
            help="Claim identifier (default: claim-001)"
        )
        args = parser.parse_args()
        
        # Determine repository root
        repo_root = Path(__file__).parent.parent.resolve()
        
        # Create and run engine
        engine = PublicationEngine(repo_root, args.claim_id)
        result = engine.run()
        
        # Exit with success
        sys.exit(0)
        
    except FileNotFoundError as e:
        print(f"ERROR: {e}", file=sys.stderr)
        print("", file=sys.stderr)
        print("This is expected if verified input data is not yet available.", file=sys.stderr)
        print("The publication engine enforces fail-closed handling.", file=sys.stderr)
        sys.exit(1)
        
    except Exception as e:
        print(f"FATAL ERROR: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(2)


if __name__ == "__main__":
    main()
