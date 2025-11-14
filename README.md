# Obsidian Pages

This repository is a GitHub Pages–ready wrapper around your Quartz build output. Keep your canonical Quartz development environment in `../quartz`, generate the static site there, and sync the artifacts into this repo before pushing to GitHub.

## Usage
1. Make sure the sibling `quartz/` workspace is up to date and contains your Obsidian-style Markdown inside `quartz/content/`.
2. From `quartz/`, run `npm run quartz -- build` (or `npm run docs`) to generate the static site into `quartz/docs/`.
3. Back in this repo, run `./scripts/sync-from-quartz.sh` to copy the latest `docs/` output here.
4. Commit and push to your GitHub Pages repository (`username.github.io` or project pages). In the Pages settings, point the source to the `main` branch and `/docs` folder.

## Repository Layout
- `content/`: Optional staged notes you want to keep inside your Pages repo (handy if you publish raw Markdown alongside the built site).
- `docs/`: The folder GitHub Pages will serve; populated via the sync script.
- `scripts/`: Helper utilities for pulling artifacts from the Quartz build.

You generally do not edit `docs/` manually—treat it as a build artifact. Keep your day-to-day writing inside your Obsidian vault or the Quartz repo, then publish by rebuilding Quartz and syncing the generated files here.
