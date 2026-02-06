#!/usr/bin/env python3
"""
TRIZEL Layer-2 Publication Engine
==================================

Deterministic, network-free analysis engine that:
- Reads ONLY verified ledger entries
- Produces deterministic derived artifacts
- Writes machine-readable provenance for every output
- NO network calls, NO model inference

Version: 1.0.0
"""

import json
import hashlib
import os
import csv
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Any, Optional


class PublicationEngine:
    """Deterministic publication engine for Layer-2 artifacts."""
    
    VERSION = "1.0.0"
    SCHEMA_VERSION = "1.0"
    
    def __init__(self, base_path: str = None):
        """Initialize the publication engine.
        
        Args:
            base_path: Base path for the repository (defaults to script location)
        """
        if base_path is None:
            base_path = Path(__file__).parent.parent
        self.base_path = Path(base_path)
        self.verified_ledger_path = self.base_path / "data" / "publish" / "3i-atlas"
        self.output_base = self.base_path / "lab" / "publication" / "claim-001"
        
    def compute_sha256(self, file_path: Path) -> str:
        """Compute SHA256 hash of a file.
        
        Args:
            file_path: Path to file
            
        Returns:
            SHA256 hash as hex string
        """
        sha256_hash = hashlib.sha256()
        with open(file_path, "rb") as f:
            for byte_block in iter(lambda: f.read(4096), b""):
                sha256_hash.update(byte_block)
        return sha256_hash.hexdigest()
    
    def compute_content_sha256(self, content: str) -> str:
        """Compute SHA256 hash of content string.
        
        Args:
            content: Content string
            
        Returns:
            SHA256 hash as hex string
        """
        return hashlib.sha256(content.encode('utf-8')).hexdigest()
    
    def read_verified_ledger(self) -> Dict[str, Any]:
        """Read verified ledger entries from data/publish/3i-atlas.
        
        This is the ONLY data source for the analysis engine.
        Network-free, deterministic read.
        
        Returns:
            Dictionary containing all verified ledger data
        """
        ledger_data = {
            "ledger_path": str(self.verified_ledger_path),
            "entries": {}
        }
        
        # Read all verified files
        files_to_read = [
            "daily-status.json",
            "source-snapshot.json",
            "manifest.json",
            "ro-crate-metadata.json"
        ]
        
        for filename in files_to_read:
            file_path = self.verified_ledger_path / filename
            if file_path.exists():
                with open(file_path, 'r') as f:
                    content = f.read()
                    data = json.loads(content)
                    ledger_data["entries"][filename] = {
                        "data": data,
                        "sha256": self.compute_content_sha256(content),
                        "path": str(file_path)
                    }
        
        return ledger_data
    
    def create_provenance(self, claim_id: str, ledger_data: Dict[str, Any], 
                         input_hashes: Dict[str, str], output_files: List[str]) -> Dict[str, Any]:
        """Create machine-readable provenance block.
        
        Args:
            claim_id: Claim identifier (e.g., "claim-001")
            ledger_data: Verified ledger data read
            input_hashes: SHA256 hashes of all input files
            output_files: List of output files generated
            
        Returns:
            Provenance dictionary
        """
        return {
            "schema_version": self.SCHEMA_VERSION,
            "engine_version": self.VERSION,
            "claim_id": claim_id,
            "timestamp_utc": datetime.now(timezone.utc).isoformat(),
            "determinism_statement": "This output is deterministically generated from verified input ledgers only. No network access, no model calls, no interpretation.",
            "inputs": {
                "ledger_path": ledger_data["ledger_path"],
                "record_ids": list(ledger_data["entries"].keys()),
                "input_hashes": input_hashes
            },
            "outputs": {
                "files": output_files
            },
            "verification": {
                "network_free": True,
                "deterministic": True,
                "verified_inputs_only": True
            }
        }
    
    def extract_tables(self, ledger_data: Dict[str, Any]) -> Dict[str, Any]:
        """Extract tabular data from verified ledger entries.
        
        This performs NO interpretation, only structural extraction.
        
        Args:
            ledger_data: Verified ledger data
            
        Returns:
            Dictionary of tables
        """
        tables = {}
        
        # Extract platform registry from source-snapshot
        if "source-snapshot.json" in ledger_data["entries"]:
            snapshot = ledger_data["entries"]["source-snapshot.json"]["data"]
            if "platforms_registry" in snapshot:
                registry = snapshot["platforms_registry"]
                
                # Flatten platform data to table
                platforms = []
                if "categories" in registry:
                    for category, items in registry["categories"].items():
                        for item in items:
                            platforms.append({
                                "category": category,
                                "name": item.get("name", ""),
                                "role": item.get("role", ""),
                                "type": item.get("type", "")
                            })
                
                tables["platforms_registry"] = platforms
            
            # Extract SBDB attempts
            if "sbdb_attempts" in snapshot:
                attempts = []
                for attempt in snapshot["sbdb_attempts"]:
                    attempts.append({
                        "designation": attempt.get("designation", ""),
                        "ok": attempt.get("ok", False),
                        "url": attempt.get("url", ""),
                        "error_type": attempt.get("error", {}).get("type", ""),
                        "http_status": attempt.get("error", {}).get("http_status", ""),
                        "message": attempt.get("error", {}).get("message", "")
                    })
                
                tables["sbdb_attempts"] = attempts
        
        # Extract integrity data from manifest
        if "manifest.json" in ledger_data["entries"]:
            manifest = ledger_data["entries"]["manifest.json"]["data"]
            if "files" in manifest:
                file_integrity = []
                for filename, data in manifest["files"].items():
                    file_integrity.append({
                        "filename": filename,
                        "sha256": data.get("sha256", "")
                    })
                
                tables["file_integrity"] = file_integrity
        
        return tables
    
    def generate_derived_artifacts(self, ledger_data: Dict[str, Any]) -> Dict[str, Any]:
        """Generate derived metadata artifacts.
        
        NO interpretation, only metadata aggregation.
        
        Args:
            ledger_data: Verified ledger data
            
        Returns:
            Dictionary of derived artifacts
        """
        derived = {}
        
        # Summary metadata
        derived["summary"] = {
            "total_ledger_entries": len(ledger_data["entries"]),
            "entry_files": list(ledger_data["entries"].keys()),
            "ledger_path": ledger_data["ledger_path"]
        }
        
        # Extract metadata from daily-status
        if "daily-status.json" in ledger_data["entries"]:
            status = ledger_data["entries"]["daily-status.json"]["data"]
            derived["data_flow"] = {
                "gate": status.get("gate", ""),
                "proof_type": status.get("proof_type", ""),
                "event_id": status.get("event_id", ""),
                "as_of_utc": status.get("as_of_utc", ""),
                "classification": status.get("classification", ""),
                "source_repository": status.get("source", {}).get("repository", ""),
                "source_commit": status.get("source", {}).get("commit", ""),
                "integrity_verified": status.get("integrity", {}).get("checksum_verified", False)
            }
        
        # Extract metadata from source-snapshot
        if "source-snapshot.json" in ledger_data["entries"]:
            snapshot = ledger_data["entries"]["source-snapshot.json"]["data"]
            derived["observation_metadata"] = {
                "project": snapshot.get("metadata", {}).get("project", ""),
                "pipeline": snapshot.get("metadata", {}).get("pipeline", ""),
                "query_designation": snapshot.get("metadata", {}).get("query_designation", ""),
                "retrieved_utc": snapshot.get("metadata", {}).get("retrieved_utc", ""),
                "has_sbdb_payload": snapshot.get("metadata", {}).get("integrity", {}).get("has_sbdb_payload", False),
                "has_error": snapshot.get("metadata", {}).get("integrity", {}).get("has_error", False)
            }
        
        return derived
    
    def write_json(self, data: Any, file_path: Path) -> None:
        """Write JSON data to file with deterministic formatting.
        
        Args:
            data: Data to write
            file_path: Output file path
        """
        file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(file_path, 'w') as f:
            json.dump(data, f, indent=2, sort_keys=True)
    
    def write_csv(self, data: List[Dict[str, Any]], file_path: Path) -> None:
        """Write CSV data to file.
        
        Args:
            data: List of dictionaries to write
            file_path: Output file path
        """
        if not data:
            return
        
        file_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Get all possible keys
        fieldnames = sorted(set().union(*(d.keys() for d in data)))
        
        with open(file_path, 'w', newline='') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(data)
    
    def generate_sha256_manifest(self, output_dir: Path) -> Dict[str, str]:
        """Generate SHA256 manifest for all files in output directory.
        
        Args:
            output_dir: Output directory
            
        Returns:
            Dictionary mapping filenames to SHA256 hashes
        """
        manifest = {}
        
        # Exclude self-referential files (sha256sum.txt and manifest.json contain hashes)
        excluded_files = {'sha256sum.txt', 'manifest.json'}
        
        for file_path in sorted(output_dir.rglob('*')):
            if file_path.is_file() and file_path.name not in excluded_files:
                relative_path = file_path.relative_to(output_dir)
                manifest[str(relative_path)] = self.compute_sha256(file_path)
        
        return manifest
    
    def run(self, date_str: Optional[str] = None) -> str:
        """Run the deterministic publication engine.
        
        Args:
            date_str: Date string in YYYY-MM-DD format (defaults to today)
            
        Returns:
            Path to output directory
        """
        # Determine output date
        if date_str is None:
            date_str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        
        output_dir = self.output_base / date_str
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Check if verified ledger exists
        if not self.verified_ledger_path.exists():
            # Generate NO_DATA_YET artifact (fail-closed)
            no_data_artifact = {
                "status": "NO_DATA_YET",
                "message": "No verified ledger found at expected path",
                "expected_path": str(self.verified_ledger_path),
                "timestamp_utc": datetime.now(timezone.utc).isoformat()
            }
            self.write_json(no_data_artifact, output_dir / "NO_DATA_YET.json")
            return str(output_dir)
        
        # Read verified ledger (deterministic, network-free)
        print(f"Reading verified ledger from: {self.verified_ledger_path}")
        ledger_data = self.read_verified_ledger()
        
        if not ledger_data["entries"]:
            # Generate NO_DATA_YET artifact (fail-closed)
            no_data_artifact = {
                "status": "NO_DATA_YET",
                "message": "Verified ledger directory exists but contains no entries",
                "ledger_path": str(self.verified_ledger_path),
                "timestamp_utc": datetime.now(timezone.utc).isoformat()
            }
            self.write_json(no_data_artifact, output_dir / "NO_DATA_YET.json")
            return str(output_dir)
        
        # Collect input hashes
        input_hashes = {
            filename: entry["sha256"] 
            for filename, entry in ledger_data["entries"].items()
        }
        
        # Extract tables (no interpretation)
        print("Extracting tables from verified data...")
        tables = self.extract_tables(ledger_data)
        
        # Generate derived artifacts (metadata only)
        print("Generating derived metadata artifacts...")
        derived = self.generate_derived_artifacts(ledger_data)
        
        # Write tables
        tables_dir = output_dir / "tables"
        output_files = []
        
        for table_name, table_data in tables.items():
            csv_path = tables_dir / f"{table_name}.csv"
            json_path = tables_dir / f"{table_name}.json"
            
            self.write_csv(table_data, csv_path)
            self.write_json(table_data, json_path)
            
            output_files.append(f"tables/{table_name}.csv")
            output_files.append(f"tables/{table_name}.json")
        
        # Write derived artifacts
        derived_dir = output_dir / "derived"
        
        for artifact_name, artifact_data in derived.items():
            json_path = derived_dir / f"{artifact_name}.json"
            self.write_json(artifact_data, json_path)
            output_files.append(f"derived/{artifact_name}.json")
        
        # Create provenance
        print("Generating provenance...")
        provenance = self.create_provenance("claim-001", ledger_data, input_hashes, output_files)
        self.write_json(provenance, output_dir / "provenance.json")
        output_files.append("provenance.json")
        
        # Generate SHA256 manifest
        print("Generating SHA256 manifest...")
        sha256_manifest = self.generate_sha256_manifest(output_dir)
        
        # Write SHA256 manifest in two formats
        # 1. sha256sum.txt (standard format)
        with open(output_dir / "sha256sum.txt", 'w') as f:
            for filename, hash_value in sorted(sha256_manifest.items()):
                f.write(f"{hash_value}  {filename}\n")
        
        # 2. manifest.json (structured format)
        manifest = {
            "schema_version": self.SCHEMA_VERSION,
            "engine_version": self.VERSION,
            "claim_id": "claim-001",
            "date": date_str,
            "timestamp_utc": datetime.now(timezone.utc).isoformat(),
            "files": sha256_manifest
        }
        self.write_json(manifest, output_dir / "manifest.json")
        
        print(f"\nPublication export completed successfully!")
        print(f"Output directory: {output_dir}")
        print(f"Total files generated: {len(sha256_manifest)}")
        
        return str(output_dir)


def main():
    """Main entrypoint for the publication engine."""
    import sys
    
    # Parse command line arguments
    date_str = None
    if len(sys.argv) > 1:
        date_str = sys.argv[1]
    
    # Run the engine
    engine = PublicationEngine()
    output_dir = engine.run(date_str)
    
    print(f"\n✓ Deterministic publication export complete: {output_dir}")


if __name__ == "__main__":
    main()
