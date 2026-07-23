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
- shadcn/ui adopted (Atelier direction): `@/` alias in tsconfig+vite, `cn()` in `src/lib/utils.ts`, `components.json`, primitives in `src/components/ui/` (button/badge/card/separator/input/tabs) rebranded to Chanel tokens (1px border, 0.25rem radius, no shadow, beige-gold surgical accent). Tabs is dependency-free (no Radix); ExperienceSection keeps its own accessible keyboard tabs.
- Design tokens shifted warm: light bg paper white `40 33% 98%`, dark warm charcoal `30 6% 7%`; body has a fixed SVG grain overlay (disabled under prefers-reduced-motion). Atelier utility classes in global.css: `.display .kicker .eyebrow .link-underline .rise/.rise-d0..d5`.
- Standalone style proposal demo (not part of build): `design-proposal/index.html` — self-contained Tailwind CDN page with light/dark toggle.

## Installed Skills

- **`aeo-assessment`** (system)
- **`agent-readiness-generator`** (system)
- **`ai-bot-traffic`** (system)
- **`dev-monitor`** (system)
- **`doc-coauthoring`** (system)
- **`frontend-design`** (system)
- **`google-ads`** (system)
- **`google-workspace`** (system)
- **`gov-projects-search`** (space)
- **`harness-agent`** (system)
- **`harness-dev`** (system)
- **`harness-execution`** (system)
- **`harness-plan`** (system)
- **`harness-supervisor`** (system)
- **`image-generation`** (system)
- **`internal-comms`** (system)
- **`line-messaging`** (system)
- **`meta-ads`** (system)
- **`ms-office-suite`** (system)
- **`omni-help`** (system)
- **`pdf`** (system)
- **`short-video`** (system)
- **`skill-creator`** (system)
- **`theme-factory`** (system)
- **`webapp-testing`** (system)
- **`z-agent-ticket-creation`** (system)
- **`z-check-comment`** (system)
- **`z-report-status`** (system)
- **`z-sync`** (system)
- **`z-ticket-check`** (system)
- **`z-writing-rules`** (system)

---
_Last system refresh: 2026-07-23 08:40 UTC_
