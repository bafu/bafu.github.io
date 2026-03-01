---
title: Hello World — 第一篇文章
date: "2026-02-28"
description: 本站的第一篇部落格文章。快速介紹技術架構與未來方向。
tags:
  - meta
  - react
  - markdown
---

## 為什麼要寫部落格？

經過多年的產品開發、開源貢獻，以及共同創辦 [Numbers Protocol](https://numbersprotocol.io) 的經歷，我決定是時候分享更多日常學到的東西——從工程深度探討到創業心得。

## 技術架構

這個部落格建立在現有的作品集網站之上：

- **React 18** + TypeScript
- **Vite** 實現極速建置
- **Tailwind CSS** 處理樣式
- **react-markdown** + remark-gfm 渲染內容
- **rehype-highlight** 處理語法高亮

文章是純 `.md` 檔案搭配 YAML frontmatter，透過 Vite 的 `import.meta.glob` 在建置時載入。

## 程式碼範例

這是一段 TypeScript 程式碼：

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`
}

console.log(greet('World'))
```

還有一些 JavaScript：

```javascript
const sum = (a, b) => a + b
console.log(sum(1, 2)) // 3
```

## 接下來

- 更多關於 **Web3 基礎設施** 與 **開源永續** 的文章
- 深入探討 **React 模式** 與 **TypeScript 技巧**
- 關於 **創業生活** 與 **團隊建設** 的反思

敬請期待！
