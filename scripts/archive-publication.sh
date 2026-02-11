#!/bin/bash
#
# TRIZEL Publication Archive Script
#
# Archives a publication claim directory into a compressed tar.gz file
#
# Usage:
#   ./scripts/archive-publication.sh <claim-id> <date>
#
# Example:
#   ./scripts/archive-publication.sh claim-001 2026-02-11
#
# Output:
#   Creates trizel-publication-<claim-id>-<date>.tar.gz in current directory

set -e

# Check arguments
if [ $# -ne 2 ]; then
    echo "Usage: $0 <claim-id> <date>"
    echo "Example: $0 claim-001 2026-02-11"
    exit 1
fi

CLAIM_ID="$1"
DATE="$2"
SOURCE_DIR="lab/publication/${CLAIM_ID}/${DATE}"
OUTPUT_FILE="trizel-publication-${CLAIM_ID}-${DATE}.tar.gz"

# Validate source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "ERROR: Publication directory not found: $SOURCE_DIR"
    exit 1
fi

# Create the archive
echo "Creating archive: $OUTPUT_FILE"
echo "Source: $SOURCE_DIR"

tar -czvf "$OUTPUT_FILE" "$SOURCE_DIR"

echo ""
echo "Archive created successfully: $OUTPUT_FILE"
echo ""
echo "To verify the archive:"
echo "  tar -tzf $OUTPUT_FILE"
echo ""
echo "To extract the archive:"
echo "  tar -xzvf $OUTPUT_FILE"
