# CLAUDE.md — bafu.github.io

## Project Overview

Personal portfolio + blog site for Bofu Chen (陳伯符). Deployed on GitHub Pages as a static SPA.

## Tech Stack

- React 18 + TypeScript + Vite 5 + Tailwind CSS 3
- React Router v7 (client-side routing)
- react-markdown + remark-gfm + rehype-highlight (blog rendering)
- No testing framework configured
- No i18n library — custom lightweight React Context implementation

## Commands

- `npm run dev` — Start dev server
- `npm run build` — TypeScript check + Vite production build (`tsc && vite build`)
- `npm run preview` — Preview production build locally

## Project Structure

```
src/
├── i18n/                  # i18n infrastructure
│   ├── types.ts           # Language type, LANGUAGES array, constants
│   ├── translations.ts    # dot-notation key resolver with English fallback
│   ├── I18nContext.tsx     # React Context: lang, setLang, t(), localePath(), isHomePath
│   ├── index.ts           # barrel export
│   └── locales/           # JSON translation files
│       ├── en.json
│       ├── zh-TW.json
│       ├── zh-CN.json
│       └── ja.json
├── components/
│   ├── Header.tsx          # Desktop nav + LanguageSwitcher
│   ├── MobileNav.tsx       # Mobile drawer nav
│   ├── SiteFooter.tsx
│   ├── Hero.tsx
│   ├── ExperienceSection.tsx  # Tabs: talks, awards, media
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   ├── LocaleLink.tsx      # Language-aware <Link> wrapper
│   ├── LanguageSwitcher.tsx # <select> dropdown for language
│   ├── LanguageRedirect.tsx # Auto-detect browser language on first visit
│   ├── MetaTags.tsx         # Dynamic document.title + meta tags
│   └── ...                  # ScrollReveal, ScrollProgress, etc.
├── data/                   # Content data (Record<Language, T[]> pattern)
│   ├── experience.ts       # getExperiences(lang)
│   ├── projects.ts         # getProjects(lang)
│   ├── awards.ts           # getAwards(lang)
│   ├── talks.ts            # getTalks(lang)
│   ├── media.ts            # getMedia(lang)
│   ├── navigation.ts       # sectionNavIds + translation key maps
│   └── blog.ts             # BlogPost type definition
├── lib/
│   ├── blog.ts             # Vite glob import, getPosts(lang), getPostBySlug(slug, lang)
│   └── parseFrontmatter.ts
├── pages/
│   ├── HomePage.tsx
│   ├── BlogListPage.tsx
│   └── BlogPostPage.tsx
├── context/
│   └── NavigationContext.tsx  # activeSection for highlight (Provider in HomePage)
├── content/blog/            # Markdown blog posts
│   ├── hello-world.md       # English (default)
│   └── hello-world.zh-TW.md # Translated variant
└── App.tsx                  # Flat routes with /:lang duplicates
```

## i18n Architecture

**Languages:** en (default, no URL prefix), zh-TW, zh-CN, ja (prefixed: `/ja/blog`)

**Routing:** Flat duplicate routes in App.tsx — each page has both `/path` and `/:lang/path` variants. React Router ranks static segments (`/blog`) above dynamic ones (`/:lang`), so no ambiguity.

**UI strings:** JSON locale files accessed via `t('dot.notation.key')`. Missing keys fall back to English.

**Data content:** Each data file exports `getXxx(lang: Language)` backed by `Record<Language, T[]>`. All four languages have independent arrays — editing one does not affect others.

**Blog posts:** Filename convention: `slug.md` (English), `slug.zh-TW.md`, `slug.ja.md`. Falls back to English if no translation exists.

**Language detection:** URL path → localStorage `preferredLang` → `navigator.language` → English.

## Key Patterns

- `useI18n()` hook provides: `lang`, `setLang()`, `t()`, `localePath()`, `isHomePath`
- Use `<LocaleLink to="/blog">` instead of `<Link>` for internal links
- Use `localePath('/') + '#section'` for cross-page hash navigation
- Header/MobileNav scroll directly via DOM (not through NavigationContext) because they sit outside the Provider
- NavigationContext is only for `activeSection` highlight state (Provider lives in HomePage)

## Important Notes

- Chinese name: 陳伯符 (zh-TW) / 陈伯符 (zh-CN), NOT 陳柏孚/陈柏孚
- GitHub Pages SPA: `public/404.html` handles client-side routing redirects
- `index.html` static meta stays in English; dynamic meta via MetaTags component
- When adding new data entries, add to all 4 language arrays to keep them in sync
- When adding new UI translation keys, add to all 4 locale JSON files (missing keys fall back to English)
