# Workspace Context

<!-- This file is auto-maintained. The Repositories section is refreshed -->
<!-- by the system. The AI should maintain Environment & Key Discoveries. -->

**Workspace root (absolute path):** `/home/workspaces/conversations/870384fe-5e67-4c64-8b75-3aec21355026`

## Repositories

- **`bafu.github.io/`** — Branch: `omni/870384fe/bafu-github-io`, Remote: `bafu/bafu.github.io`
  - React + Vite + Tailwind implementation of https://bafuchen.github.io.
  - Has `CLAUDE.md` project instructions

## Environment & Tools

- `bafu.github.io/`: React 18 + TypeScript 5.5 + Vite 5 + Tailwind CSS 3; dependencies install with `npm ci`.
- Build command is `npm run build`, which runs `tsc`, `vite build`, `scripts/generate-sitemap.ts`, and `scripts/generate-rss.ts`.

## Key Discoveries

- Blog posts live in `bafu.github.io/src/content/blog/`; filenames use `slug.md` for English, `slug.zh-TW.md` for Traditional Chinese, and `slug.ja.md` for Japanese.
- Sitemap generation now only publishes actual language URLs for non-English source-only posts; English-source posts still publish all language URLs via English fallback.

---
_Last system refresh: 2026-07-19 14:23 UTC_
