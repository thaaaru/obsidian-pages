#!/usr/bin/env bash
set -euo pipefail

# Default Quartz path is sibling directory, override with QUARTZ_DIR env var.
QUARTZ_DIR="${QUARTZ_DIR:-../quartz}"
SOURCE_DIR="$QUARTZ_DIR/docs"
TARGET_DIR="$(cd -- "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/docs"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Quartz docs directory not found at $SOURCE_DIR" >&2
  exit 1
fi

mkdir -p "$TARGET_DIR"
rsync -av --delete "$SOURCE_DIR"/ "$TARGET_DIR"/
echo "Synced build artifacts from $SOURCE_DIR to $TARGET_DIR."
