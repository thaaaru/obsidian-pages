#!/usr/bin/env node
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const repoRoot = path.resolve(path.dirname(__filename), "..")
const docsDir = path.join(repoRoot, "docs")

const notes = []
const aliasMap = new Map()

const registerAlias = (alias, id) => {
  if (!alias) return
  aliasMap.set(alias.toLowerCase(), id)
}

const walk = async (dir) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(fullPath)
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      const relPath = path.relative(docsDir, fullPath).replace(/\\/g, "/")
      const contents = await fs.readFile(fullPath, "utf8")
      const meta = parseFrontmatter(contents)
      const id = meta.id || entry.name.split(".md")[0].split(" ")[0]
      const title = meta.title || entry.name.replace(/\.md$/, "")
      notes.push({
        id,
        title,
        relPath,
        contents,
        outgoing: [],
        unresolved: [],
      })
      registerAlias(id, id)
      registerAlias(title, id)
      registerAlias(entry.name.replace(/\.md$/, ""), id)
    }
  }
}

const parseFrontmatter = (text) => {
  const match = text.match(/^---\n([\s\S]+?)\n---/)
  if (!match) return {}
  const lines = match[1].split("\n")
  return lines.reduce((acc, line) => {
    const [key, ...rest] = line.split(":")
    if (!key || rest.length === 0) return acc
    acc[key.trim()] = rest.join(":").trim().replace(/^["']|["']$/g, "")
    return acc
  }, {})
}

const resolveTarget = (raw) => {
  let cleaned = raw.split("|")[0].trim()
  const hashIndex = cleaned.indexOf("#")
  if (hashIndex !== -1) cleaned = cleaned.slice(0, hashIndex)
  const firstToken = cleaned.split(" ")[0]
  const byFull = aliasMap.get(cleaned.toLowerCase())
  if (byFull) return byFull
  const byToken = aliasMap.get(firstToken.toLowerCase())
  if (byToken) return byToken
  return null
}

const encodeHref = (relPath) => encodeURI(relPath)

const main = async () => {
  await walk(docsDir)
  const notesById = new Map(notes.map((note) => [note.id, note]))

  for (const note of notes) {
    const matches = [...note.contents.matchAll(/\[\[([^\]]+)\]\]/g)]
    for (const match of matches) {
      const target = match[1]
      const resolvedId = resolveTarget(target)
      if (resolvedId && notesById.has(resolvedId)) {
        note.outgoing.push(resolvedId)
      } else {
        note.unresolved.push(target)
      }
    }
  }

  const backlinks = new Map()
  for (const note of notes) {
    for (const targetId of note.outgoing) {
      if (!backlinks.has(targetId)) backlinks.set(targetId, new Set())
      backlinks.get(targetId).add(note.id)
    }
  }

  const simplifiedNotes = notes
    .map((note) => {
      const href = encodeHref(note.relPath)
      const outgoing = note.outgoing
        .map((targetId) => notesById.get(targetId))
        .filter(Boolean)
        .map((targetNote) => ({
          id: targetNote.id,
          title: targetNote.title,
          href: encodeHref(targetNote.relPath),
        }))
      const incoming = [...(backlinks.get(note.id) || [])]
        .map((sourceId) => notesById.get(sourceId))
        .filter(Boolean)
        .map((sourceNote) => ({
          id: sourceNote.id,
          title: sourceNote.title,
          href: encodeHref(sourceNote.relPath),
        }))
      return {
        id: note.id,
        title: note.title,
        href,
        outgoing,
        backlinks: incoming,
        unresolved: [...new Set(note.unresolved)],
      }
    })
    .sort((a, b) => a.id.localeCompare(b.id))

  const html = buildHtml(simplifiedNotes)
  await fs.writeFile(path.join(docsDir, "index.html"), html, "utf8")
  console.log(
    `Generated index with ${simplifiedNotes.length} notes -> docs/index.html`,
  )
}

const buildHtml = (notes) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>AI Zettelkasten Index</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
      :root {
        color-scheme: light dark;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background-color: #0b0b0f;
        color: #e4e8f4;
      }
      body {
        margin: 0;
        padding: 2rem 1rem 4rem;
        background: radial-gradient(circle at top, rgba(103,59,183,0.2), transparent 60%), #050608;
        min-height: 100vh;
      }
      .page {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        margin-bottom: 0.5rem;
        font-size: clamp(2rem, 3vw, 3rem);
      }
      p.lede {
        max-width: 720px;
        color: #a9b1d6;
        line-height: 1.6;
      }
      .controls {
        margin: 2rem 0 1rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .controls input {
        flex: 1;
        min-width: 240px;
        padding: 0.75rem 1rem;
        border-radius: 999px;
        border: 1px solid #333a57;
        background: rgba(12,14,24,0.8);
        color: inherit;
      }
      .note {
        border: 1px solid rgba(70,76,122,0.6);
        border-radius: 16px;
        padding: 1rem 1.25rem;
        margin-bottom: 1rem;
        background: rgba(9,12,22,0.85);
        backdrop-filter: blur(8px);
      }
      .note h2 {
        margin: 0 0 0.4rem;
        font-size: 1.2rem;
      }
      .note h2 a {
        color: #7dcfff;
        text-decoration: none;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        border-radius: 999px;
        border: 1px solid rgba(125,207,255,0.2);
        padding: 0.12rem 0.8rem;
        font-size: 0.85rem;
        color: #7dcfff;
      }
      dl {
        margin: 0.5rem 0 0;
        display: grid;
        grid-template-columns: minmax(140px, 220px) 1fr;
        gap: 0.25rem 1rem;
      }
      dt {
        font-weight: 600;
        color: #9399b7;
      }
      dd {
        margin: 0;
      }
      .link-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem 0.5rem;
      }
      .link-list a {
        color: #c0caf5;
        text-decoration: none;
        border-bottom: 1px dotted rgba(192,202,245,0.4);
      }
      .empty {
        color: #5c6280;
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <div class="page">
      <h1>AI Zettelkasten</h1>
      <p class="lede">
        Interactive index of every Markdown note plus its bidirectional links, emulating Obsidian’s graph view in list form.
        Type to filter by ID or title and jump straight into any note.
      </p>
      <div class="controls">
        <input id="search" type="search" placeholder="Filter notes by id, title, or linked note…" />
      </div>
      <div id="notes"></div>
    </div>
    <script id="site-data" type="application/json">${JSON.stringify(notes)}</script>
    <script>
      const data = JSON.parse(document.getElementById("site-data").textContent)
      const container = document.getElementById("notes")
      const search = document.getElementById("search")

      const render = (query = "") => {
        container.innerHTML = ""
        const q = query.trim().toLowerCase()
        const filtered = q
          ? data.filter((note) => {
              const haystack = [
                note.id,
                note.title,
                ...note.outgoing.map((n) => n.title),
                ...note.backlinks.map((n) => n.title),
              ]
                .join(" ")
                .toLowerCase()
              return haystack.includes(q)
            })
          : data

        for (const note of filtered) {
          const el = document.createElement("article")
          el.className = "note"
          el.innerHTML = \`
            <h2><a href="\${note.href}">\${note.title}</a></h2>
            <span class="pill">\${note.id}</span>
            <dl>
              <dt>Links out</dt>
              <dd>\${renderLinks(note.outgoing)}</dd>
              <dt>Backlinks</dt>
              <dd>\${renderLinks(note.backlinks)}</dd>
              <dt>Unresolved</dt>
              <dd>\${note.unresolved.length ? note.unresolved.join(", ") : '<span class="empty">none</span>'}</dd>
            </dl>
          \`
          container.appendChild(el)
        }
      }

      const renderLinks = (items) => {
        if (!items.length) return '<span class="empty">none</span>'
        return '<div class="link-list">' + items.map((item) => '<a href="' + item.href + '">' + item.title + "</a>").join("") + "</div>"
      }

      search.addEventListener("input", (event) => render(event.target.value))
      render()
    </script>
  </body>
</html>`

await main().catch((err) => {
  console.error(err)
  process.exit(1)
})
