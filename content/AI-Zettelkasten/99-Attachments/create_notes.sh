#!/usr/bin/env bash
set -euo pipefail
CSV="${1:-AI-Zettelkasten/99-Attachments/bulk-notes.csv}"
DATE=$(date +%Y-%m-%d)
if [[ ! -f "$CSV" ]]; then
  echo "CSV not found: $CSV" >&2
  exit 1
fi
while IFS=, read -r id title folder tags definition key1 key2 rel1 rel2 exp1 exp2; do
  [[ "$id" == "id" ]] && continue
  note_path="${folder}/${id} ${title}.md"
  mkdir -p "$(dirname "$note_path")"
  cat > "$note_path" <<NOTE
---
title: ${title}
id: ${id}
tags: [${tags}]
created: ${DATE}
updated:
---

**Definition**
- ${definition}

**Key Ideas**
- ${key1}
- ${key2}

**Related Notes**
- [[${rel1}]]
- [[${rel2}]]

**Further Expansion**
- ${exp1}
- ${exp2}
NOTE
done < "$CSV"
echo "Notes created from $CSV"
