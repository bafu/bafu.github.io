---
title: Hello World — First Post
date: "2026-02-28"
description: The very first blog post on this site. A quick look at the tech stack and what to expect.
tags:
  - meta
  - react
  - markdown
---

## Why a blog?

After years of building products, contributing to open source, and co-founding [Numbers Protocol](https://numbersprotocol.io), I decided it was time to share more of what I learn day-to-day — from engineering deep-dives to startup lessons.

## Tech stack

This blog is built on top of the existing portfolio site:

- **React 18** + TypeScript
- **Vite** for blazing-fast builds
- **Tailwind CSS** for styling
- **react-markdown** + remark-gfm for rendering
- **rehype-highlight** for syntax highlighting

Posts are plain `.md` files with YAML frontmatter, loaded at build time via Vite's `import.meta.glob`.

## Code example

Here's a TypeScript snippet:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`
}

console.log(greet('World'))
```

And some JavaScript:

```javascript
const sum = (a, b) => a + b
console.log(sum(1, 2)) // 3
```

## What's next

- More posts on **web3 infrastructure** and **open-source sustainability**
- Deep dives into **React patterns** and **TypeScript tips**
- Reflections on **startup life** and **team building**

Stay tuned!
