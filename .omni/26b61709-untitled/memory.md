# Workspace Context

<!-- This file is auto-maintained. The Repositories section is refreshed -->
<!-- by the system. The AI should maintain Environment & Key Discoveries. -->

**Workspace root (absolute path):** `/home/workspaces/conversations/26b61709-1563-4694-b575-226655a64ab6`

## Repositories

- **`bafu.github.io/`** — Branch: `omni/26b61709/bafu-github-io`, Remote: `bafu/bafu.github.io`
  - React + Vite + Tailwind implementation of https://bafuchen.github.io.
  - Has `CLAUDE.md` project instructions

## Environment & Tools

- Repo `bafu.github.io`: React 18 + TypeScript 5.5 + Vite 5.4 + Tailwind CSS 3.4; build command is `npm run build`.
- Node dependencies are installed with `npm ci` from `package-lock.json`.

## Key Discoveries

- `bafu.github.io` public site data for talks lives in `src/data/talks.ts`; homepage Featured Talks renders from this file.
- Current site languages are `en`, `zh-TW`, and `ja` in `src/i18n/types.ts`.
- Agent-readiness files already present: `public/robots.txt` and `public/llms.txt`.

---
_Last system refresh: 2026-05-12 13:21 UTC_
