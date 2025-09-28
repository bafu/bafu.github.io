# Bofu Chen — Personal Site

React + Vite + Tailwind implementation of https://bafuchen.github.io.

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173 by default.

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

GitHub Pages deployment is automated via the **Deploy to GitHub Pages** workflow located in `.github/workflows/deploy.yml`. On every push to `master` (or manual dispatch), the workflow:

1. Installs dependencies with `npm ci`.
2. Builds the static site with `npm run build`.
3. Publishes the generated `dist/` directory using the official GitHub Pages actions.

Ensure the repository's **Pages** settings are configured to use **GitHub Actions** as the source so the workflow output is served at https://bafu.github.io/.
