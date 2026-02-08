#!/usr/bin/env python3
"""
TRIZEL Phase-E Publications Registry Updater

Deterministically updates phase-e/publications.yml from discovered publications.

This script:
- Scans lab/publication/ for all valid publication directories
- Extracts metadata from provenance.json
- Generates publications.yml entries deterministically
- Merges with existing entries (no duplicates)
- Sorts by date (newest first)

Constraints:
- Network-free (no external calls)
- Deterministic (same inputs → same outputs)
- Fail-closed (skips invalid publications)
- Gate-6 CLOSED (no interpretation, no claims)
"""

import json
import sys
from pathlib import Path
from typing import Dict, List, Any
from datetime import datetime


def discover_publications(repo_root: Path) -> List[Dict[str, Any]]:
    """
    Scan lab/publication/ for valid publications.
    
    Args:
        repo_root: Root directory of the repository
        
    Returns:
        List of publication entries sorted by date (newest first)
    """
    publications = []
    pub_dir = repo_root / "lab" / "publication"
    
    if not pub_dir.exists():
        print(f"⚠️  Publication directory not found: {pub_dir}")
        return []
    
    # Scan for claim-* directories
    for claim_dir in sorted(pub_dir.glob("claim-*")):
        claim_id = claim_dir.name
        
        # Scan for date directories (YYYY-MM-DD format)
        for date_dir in sorted(claim_dir.glob("????-??-??"), reverse=True):
            date_str = date_dir.name
            
            # Validate date format
            try:
                datetime.strptime(date_str, "%Y-%m-%d")
            except ValueError:
                print(f"⚠️  Invalid date format: {date_dir}")
                continue
            
            # Check for required files
            manifest_path = date_dir / "manifest.json"
            provenance_path = date_dir / "provenance.json"
            
            if not manifest_path.exists():
                print(f"⚠️  Missing manifest.json: {date_dir}")
                continue
                
            if not provenance_path.exists():
                print(f"⚠️  Missing provenance.json: {date_dir}")
                continue
            
            # Load provenance metadata
            try:
                with open(provenance_path) as f:
                    provenance = json.load(f)
            except Exception as e:
                print(f"⚠️  Failed to read provenance.json: {date_dir}: {e}")
                continue
            
            # Verify provenance structure
            if not isinstance(provenance, dict):
                print(f"⚠️  Invalid provenance format: {date_dir}")
                continue
            
            # Extract metadata from provenance
            engine_info = provenance.get("engine", {})
            execution_info = provenance.get("execution", {})
            
            # Verify Gate-6 CLOSED
            constraints = provenance.get("constraints", {})
            if constraints.get("gate_6_status") != "CLOSED":
                print(f"⚠️  Gate-6 not CLOSED: {date_dir}")
                continue
            
            # Generate publication entry
            entry_id = f"{claim_id}-{date_str}"
            
            publication = {
                "id": entry_id,
                "claim": claim_id,
                "date": date_str,
                "type": "dataset",
                "status": "published",
                "source": f"lab/publication/{claim_id}/{date_str}",
                "doi": "pending",
                "notes": "نشر Phase-E حتمي. دون تفسير."
            }
            
            publications.append(publication)
            print(f"✓ Discovered: {entry_id}")
    
    # Sort by date (newest first)
    publications.sort(key=lambda x: x["date"], reverse=True)
    
    return publications


def load_existing_publications(yml_path: Path) -> Dict[str, Any]:
    """
    Load existing publications.yml file.
    
    Args:
        yml_path: Path to publications.yml
        
    Returns:
        Dictionary with publications data
    """
    if not yml_path.exists():
        print(f"ℹ️  No existing publications.yml found at {yml_path}")
        return {"publications": []}
    
    try:
        # Try to use PyYAML if available
        try:
            import yaml
            with open(yml_path) as f:
                data = yaml.safe_load(f)
                if data is None:
                    return {"publications": []}
                return data
        except ImportError:
            # Fallback: Manual YAML parsing for simple structure
            print("ℹ️  PyYAML not available, using manual parsing")
            return parse_simple_yaml(yml_path)
            
    except Exception as e:
        print(f"⚠️  Failed to load publications.yml: {e}")
        return {"publications": []}


def parse_simple_yaml(yml_path: Path) -> Dict[str, Any]:
    """
    Simple YAML parser for the publications.yml structure.
    
    This is a fallback for environments without PyYAML.
    Only handles the specific structure of publications.yml.
    
    Args:
        yml_path: Path to YAML file
        
    Returns:
        Parsed dictionary
    """
    publications = []
    current_entry = {}
    in_publications = False
    
    with open(yml_path) as f:
        for line in f:
            line = line.rstrip()
            
            # Skip comments and empty lines
            if line.strip().startswith("#") or not line.strip():
                continue
            
            # Detect publications list start
            if line.strip() == "publications:":
                in_publications = True
                continue
            
            if not in_publications:
                continue
            
            # Detect new entry (starts with "  - ")
            if line.startswith("  - "):
                if current_entry:
                    publications.append(current_entry)
                current_entry = {}
                # Parse first field
                parts = line[4:].split(":", 1)
                if len(parts) == 2:
                    key = parts[0].strip()
                    value = parts[1].strip().strip('"').strip("'")
                    current_entry[key] = value
            # Parse field (starts with "    ")
            elif line.startswith("    "):
                parts = line.strip().split(":", 1)
                if len(parts) == 2:
                    key = parts[0].strip()
                    value = parts[1].strip().strip('"').strip("'")
                    current_entry[key] = value
    
    # Add last entry
    if current_entry:
        publications.append(current_entry)
    
    return {"publications": publications}


def write_publications_yml(yml_path: Path, data: Dict[str, Any]) -> None:
    """
    Write publications.yml file.
    
    Args:
        yml_path: Path to publications.yml
        data: Dictionary with publications data
    """
    yml_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(yml_path, "w", encoding="utf-8") as f:
        # Write header comment
        f.write("# Phase-E Publications Registry\n")
        f.write("# Static single source of truth for allowlisted publication references\n")
        f.write("# \n")
        f.write("# This file is the canonical registry for Phase-E publications.\n")
        f.write("# Auto-updated by lab/update_publications_yml.py\n")
        f.write("# \n")
        f.write("# SCHEMA:\n")
        f.write("# publications:\n")
        f.write("#   - id: \"<unique-stable-identifier>\"\n")
        f.write("#     claim: \"<claim-id>\"\n")
        f.write("#     date: \"<YYYY-MM-DD>\"\n")
        f.write("#     type: \"paper|report|dataset|doi|release\"\n")
        f.write("#     status: \"allowlisted|verified|published\"\n")
        f.write("#     source: \"<repository-path>\"\n")
        f.write("#     doi: \"pending|<doi>\"\n")
        f.write("#     notes: \"<neutral-description-no-performance-claims>\"\n")
        f.write("\n")
        f.write("publications:\n")
        
        # Write each publication entry
        for pub in data.get("publications", []):
            f.write(f"  - id: {pub['id']}\n")
            f.write(f"    claim: {pub['claim']}\n")
            f.write(f"    date: {pub['date']}\n")
            f.write(f"    type: {pub['type']}\n")
            f.write(f"    status: {pub['status']}\n")
            f.write(f"    source: {pub['source']}\n")
            f.write(f"    doi: {pub['doi']}\n")
            f.write(f"    notes: \"{pub['notes']}\"\n")


def main():
    """Main execution function."""
    repo_root = Path(__file__).parent.parent.resolve()
    
    print("=== TRIZEL Phase-E Publications Registry Updater ===")
    print(f"Repository root: {repo_root}")
    print("")
    
    # Discover publications
    print("Discovering publications...")
    discovered = discover_publications(repo_root)
    print(f"✓ Discovered {len(discovered)} publications")
    print("")
    
    # Load existing publications.yml
    yml_path = repo_root / "phase-e" / "publications.yml"
    print(f"Loading existing registry: {yml_path}")
    existing_data = load_existing_publications(yml_path)
    print(f"✓ Found {len(existing_data.get('publications', []))} existing entries")
    print("")
    
    # Merge (avoid duplicates)
    existing_ids = {p["id"] for p in existing_data.get("publications", [])}
    new_pubs = [p for p in discovered if p["id"] not in existing_ids]
    
    if not new_pubs:
        print("ℹ️  No new publications to add")
        return 0
    
    print(f"Merging {len(new_pubs)} new publications...")
    for pub in new_pubs:
        print(f"  + {pub['id']}")
    
    # Combine and sort by date (robust ISO date comparison)
    all_publications = existing_data.get("publications", []) + new_pubs
    # Parse dates for proper comparison (ISO format YYYY-MM-DD)
    def parse_date_key(pub):
        try:
            return datetime.strptime(str(pub.get("date", "")), "%Y-%m-%d")
        except (ValueError, TypeError):
            # Fallback to string comparison for invalid dates
            return str(pub.get("date", ""))
    
    all_publications.sort(key=parse_date_key, reverse=True)
    
    updated_data = {"publications": all_publications}
    
    # Write updated publications.yml
    print("")
    print(f"Writing updated registry: {yml_path}")
    write_publications_yml(yml_path, updated_data)
    print(f"✓ Updated publications.yml: {len(all_publications)} total entries")
    print("")
    print("=== Update Complete ===")
    
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)
