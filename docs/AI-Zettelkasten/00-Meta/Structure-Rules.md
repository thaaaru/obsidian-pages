---
title: Structure Rules
id: ZK-RULES
tags: [meta, rules]
created: 2025-11-13
updated:
---

**Definition**
- Canonical instructions for adding, naming, and linking notes inside the AI-Zettelkasten vault.

**Key Ideas**
- Use topic-first folders (00-10, 99) exactly as defined; new topics require explicit numbering approval.
- Note IDs follow folder prefix (e.g., 02 → ZK-01xx) and remain immutable once published.
- Every note carries YAML front matter with `title`, `id`, `tags`, `created`, `updated`.
- Maintain atomic scope: one concept per note, linked to adjacent concepts via `[[ZK-xxxx Name]]` syntax.
- Related section must include at least two intra-vault references; avoid external URLs in core notes.
- Further Expansion bullets store research prompts or TODOs, not definitive facts.



**Real-World Use Cases**
- Standardize contributions across multi-agency AI task forces without content drift.
- Enable automated linting before publishing vault updates to MkDocs.

**Technologies & Tooling**
- Pre-commit hooks running markdownlint and custom ID validators.
- GitHub Actions that refuse PRs missing YAML or backlinks.

**Related Notes**
- [[ZK-Index]]
- [[ZK-GRAPH]]
- [[ZK-0503 RAG]]

**Further Expansion**
- Add lint script to validate IDs and required sections automatically.
- Document branching strategy for collaborative editing in Git.
