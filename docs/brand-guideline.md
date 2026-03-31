# Bofu Chen — Personal Brand Guideline

---

## 一、品牌定位與核心主張

### 個人定義

**Bofu Chen（陳伯符）** 是軟體工程師、研究者與技術寫作者。他專注於 AI 應用開發、開源工程與產品建構，以可追溯、有根據的方式分享知識與實作經驗，並透過個人網站、部落格與演講傳遞技術洞察。

### 一句話定位

**Engineer. Builder. Context-Aware Thinker.**

### 核心主張

個人品牌不是自我行銷的工具，而是一個**展示思考方式、工程品質與知識脈絡**的介面。這個網站整合作品集、技術文章、演講記錄與聯絡資訊，讓每一次展示都有根據、可追溯、可驗證。

| 理念 | 英文 | 說明 | 在網站中的體現 |
| :---- | :---- | :---- | :---- |
| **內部知識優先** | Internal Knowledge First | 呈現自己實際做過的事，不填充空泛描述 | 作品集、部落格、演講均附帶具體脈絡與連結 |
| **精實呈現** | Lean Presentation | 每一頁都直接可讀，無需背景知識即能理解重點 | 漸進式揭露資訊，首屏即傳達核心定位 |
| **脈絡感知** | Context-Aware | 結合技術背景、專案經驗與實際產出，提供有根據的自我描述 | 各區塊資料完整、有來源、可驗證 |
| **透明可稽核** | Transparent & Verifiable | 所有呈現必須可重現、可驗證 | 作品附帶 repo 連結、演講附帶錄影或投影片 |

---

## 2. UI 設計哲學 — Chanel Style

視覺語言受 **Chanel** 高端時尚風格啟發，強調克制、優雅與精確。

### 2.1 四大設計原則

| 原則 | 規則 |
| :---- | :---- |
| **Monochrome First** | 黑、白、灰為主色調，彩色極度節制 |
| **One Accent** | 唯一強調色為 Beige-Gold（米金色），點綴使用 |
| **Crisp Geometry** | 1px 邊框、極簡陰影、大量留白 |
| **Typographic Hierarchy** | 襯線體用於標題，無襯線體用於內文，等寬體用於程式碼 |

---

## 3. 色彩系統

### 3.1 Light Mode 色票

| 用途 | CSS Variable | HSL | Hex 近似值 | 說明 |
| :---- | :---- | :---- | :---- | :---- |
| 背景 | `--background` | `0 0% 100%` | `#FFFFFF` | 純白 |
| 前景/文字 | `--foreground` | `0 0% 0%` | `#000000` | 純黑 |
| 卡片表面 | `--card` / `--surface` | `0 0% 97%` | `#F7F7F7` | 極淺灰 |
| 靜音文字 | `--muted-foreground` | `0 0% 29%` | `#4A4A4A` | 中灰，用於次要文字 |
| 邊框 | `--border` | `0 0% 90%` | `#E5E5E5` | 精緻淺灰邊框 |
| **強調色** | `--accent` / `--beige` | `37 38% 75%` | `#CEBB96` | 淺米色 |
| **強調深色** | `--beige-gold` | `37 38% 52%` | `#B79B5A` | 深米金色（Focus ring, 重點標記） |
| Deep Navy | `--deep-blue` | `215 32% 45%` | `#4E6D98` | 極深藍，標題色基底 |
| 導覽選中背景 | `--nav-active` | `215 70% 14%` | `#0B2844` | 極深 Navy，Sidebar 選中項目背景 |
| 成功 | `--success` | `142 76% 36%` | `#16A34A` | 綠色 |
| 警告 | `--warning` | `37 38% 52%` | `#B79B5A` | 同米金色 |
| 破壞 | `--destructive` | `0 84% 60%` | `#EF4444` | 紅色 |
| Inline Code | `--prose-inline-code` | `25 50% 45%` | `#AC7C39` | 深橘色 |
| 標題色 | `--prose-heading` | `215 32% 45%` | `#4E6D98` | Deep Navy 系 |

### 3.2 Dark Mode 色票

| 用途 | CSS Variable | HSL | Hex 近似值 |
| :---- | :---- | :---- | :---- |
| 背景 | `--background` | `0 0% 7%` | `#121212` |
| 前景/文字 | `--foreground` | `0 0% 95%` | `#F2F2F2` |
| 卡片表面 | `--card` / `--surface` | `0 0% 11%` | `#1C1C1C` |
| 靜音文字 | `--muted-foreground` | `0 0% 71%` | `#B5B5B5` |
| 邊框 | `--border` | `0 0% 16%` | `#292929` |
| 強調色 | `--accent` / `--beige` | `37 33% 67%` | `#C4B07D` |
| 強調深色 | `--beige-gold` | `37 33% 60%` | `#B09A6B` |
| Deep Navy | `--deep-blue` | `215 38% 62%` | `#7998C3` |
| 導覽選中背景 | `--nav-active` | `215 50% 23%` | `#1D3A57` |
| 標題色 | `--prose-heading` | `215 38% 62%` | `#7998C3` |
| Inline Code | `--prose-inline-code` | `25 50% 45%` | `#AC7C39` |

### 3.3 狀態與功能色

| 用途 | 顏色 | 用法 |
| :---- | :---- | :---- |
| 個人連結 / 重點標記 | `deep-blue` | 文章標題連結、作品集卡片標記 |
| 使用者互動元素 | `bg-foreground text-background` | 黑底白字（light），深灰底淺字（dark） |
| 狀態-待處理 | `text-yellow-500` | 黃色 |
| 狀態-進行中 | `text-blue-500` | 藍色 |
| 狀態-完成 | `text-green-500` | 綠色 |
| 狀態-錯誤 | `text-red-500` | 紅色 |

### 3.4 色彩使用規範

```
禁止事項：
✗ 使用品牌色以外的裝飾性色彩
✗ 在同一區域使用超過 2 種非灰階色
✗ 使用高飽和度的大面積色塊
✗ 混用不同色系的強調色

允許事項：
✓ 狀態色（綠/黃/紅/藍/紫）僅用於功能性指示
✓ 米金色用於 focus ring、重點文字、accent button
✓ 黑白灰作為所有版面的基礎
```

---

## 4. 字型系統

### 4.1 字型家族

| 分類 | 字型 | 字重 | 用途 |
| :---- | :---- | :---- | :---- |
| **Serif** | Playfair Display | 400, 500, 600, 700 | 標題、品牌文字、空狀態 |
| **Sans-serif** | Inter | 400, 500, 600, 700 | 正文、按鈕、導覽、表單 |
| **Monospace** | JetBrains Mono | 400, 500 | 程式碼、終端輸出、檔案路徑 |

**Fallback 順序：**

- Sans: `Inter, 'Helvetica Neue', system-ui, sans-serif`
- Serif: `'Playfair Display', Georgia, serif`
- Mono: `'JetBrains Mono', monospace`

### 4.2 排版規範

| 元素 | 字型 | 大小 | 樣式 |
| :---- | :---- | :---- | :---- |
| 主標題（Hero） | Serif | `text-5xl` / `text-6xl` | 正常 |
| 頁面標題 | Serif | `text-3xl` | 正常 |
| 空狀態標題 | Serif | `text-2xl` / `text-3xl` | 正常 |
| 導覽標籤 | Sans | `text-xs` | `uppercase tracking-[0.15em] font-medium`（`.chanel-nav`） |
| 按鈕文字 | Sans | `text-sm` | `uppercase tracking-wide` |
| 正文 | Sans | `text-sm` | `leading-relaxed` |
| 靜音文字 | Sans | `text-sm` / `text-xs` | `text-muted-foreground` |
| 分隔線文字 | Sans | `text-xs` | `uppercase tracking-widest` |

---

## 5. 元件設計規範

### 5.1 按鈕變體

| 變體 | 樣式 | 使用場景 |
| :---- | :---- | :---- |
| `default` | 黑底白字，hover 90% 透明度 | 主要行動（View Project, Contact） |
| `outline` | 黑色邊框透明底，hover 反轉為黑底白字 | 次要行動（Download CV, View GitHub） |
| `accent` | 米金色底黑字 | 重點行動、CTA |
| `outline-accent` | 米金色邊框，hover 填滿 | 強調但非主要的行動 |
| `secondary` | 灰底，細邊框 | 輔助操作 |
| `ghost` | 無邊框，hover 灰底 | 工具列、密集 UI |
| `destructive` | 紅底白字 | 危險操作（刪除） |
| `link` | 底線裝飾 | 內文連結 |

**按鈕尺寸：**

- `xl`: 48px 高，`px-10`，用於 Hero 區塊等全寬按鈕
- `lg`: 44px 高，`px-8`
- `default`: 40px 高，`px-6`
- `sm`: 36px 高，`px-4`，`text-xs`
- `icon`: 40x40px / `icon-sm`: 32x32px

### 5.2 輸入欄位

- 高度 40px，`rounded` 極小圓角
- 邊框 `border-border`（淺灰）
- 背景 `bg-card`
- Focus 狀態：2px `ring-focus`（米金色）+ offset
- Placeholder 使用 `text-muted-foreground`

### 5.3 卡片

```css
.chanel-card {
  background: hsl(var(--card));
  border: 1px solid hsl(var(--border));
  /* 無 box-shadow */
  /* 無 border-radius 或極小 */
}
```

### 5.4 Focus 指示器

```css
.focus-gold {
  focus-visible:ring-2
  focus-visible:ring-[hsl(var(--focus))]  /* 米金色 */
  focus-visible:ring-offset-2
  focus-visible:ring-offset-background
}
```

所有可互動元素必須使用米金色 focus ring，確保無障礙可及性。

---

## 6. 版面結構

### 6.1 單頁式個人網站佈局

```
┌──────────────────────────────────────────────┐
│ Header (Nav: About / Projects / Blog / Contact)│
├──────────────────────────────────────────────┤
│                                              │
│   Hero — 姓名、定位、一句話描述              │
│                                              │
├──────────────────────────────────────────────┤
│   Projects — 作品集卡片列表                  │
├──────────────────────────────────────────────┤
│   Experience — 演講 / 獲獎 / 媒體報導        │
├──────────────────────────────────────────────┤
│   Blog — 最新文章預覽                        │
├──────────────────────────────────────────────┤
│   Contact — 聯絡方式                         │
├──────────────────────────────────────────────┤
│ Footer                                       │
└──────────────────────────────────────────────┘
```

### 6.2 Hero 區塊雙欄佈局

```
┌─────────────────────┬─────────────────────┐
│                     │                     │
│   Bofu Chen         │                     │
│   陳伯符             │   Engineer.         │
│                     │   Builder.          │
│   Software Engineer │   Context-Aware     │
│   & AI Builder      │   Thinker.          │
│                     │                     │
│   ◻ Open Source     │   [View Projects →] │
│   ◻ AI Development  │   [Read Blog →]     │
│   ◻ Technical Write │                     │
│                     │                     │
│   bg-foreground     │   bg-background     │
│   (黑底白字)          │   (白底黑字)         │
└─────────────────────┴─────────────────────┘
```

左欄黑底白字，展示個人定位與核心特質；右欄白底黑字，承載行動按鈕。標題中的專業定位關鍵詞使用 `text-beige` 米色強調。

---

## 7. 動畫效果規範

| 動效名稱 | 持續時間 | 緩動函數 | 用途 |
| :---- | :---- | :---- | :---- |
| `fade-in` | 0.3s | ease-out | 頁面/元素進場 |
| `scale-in` | 0.2s | ease-out | 卡片/彈窗出現 |
| `slide-up` | 0.3s | ease-out | 列表項目進場 |
| `typing` | 1.2s | ease-in-out, infinite | 載入中指示 |
| `enter` | fade-in + scale-in | ease-out | 複合進場動效 |
| 顏色過渡 | 0.2s | default | hover 狀態切換 |

**動效守則：**

- 不使用 bounce、elastic 等誇張緩動
- 進場動效不超過 0.3s
- 退場動效不超過 0.3s
- Hover 反轉效果使用 `.hover-invert` 統一處理

---

## 8. 開發守則

### 8.1 Chanel Style 實作規範

```
DO:
  使用 CSS 變數（hsl(var(--token))），不硬編碼色值
  使用 .chanel-nav 處理導航文字
  使用 .chanel-card 處理卡片容器
  使用 .focus-gold 處理 focus 狀態
  保持 1px 邊框、無 box-shadow 的俐落感
  按鈕文字使用 uppercase + tracking-wide
  標題使用 font-serif，內文使用 font-sans

DON'T:
  使用漸層背景
  使用 box-shadow 製造卡片層次（改用 border）
  在非 accent 按鈕上使用 beige-gold
  使用超過 300ms 的動畫
  使用 bounce / elastic 動畫曲線
  混用不同圓角大小（統一 0.25rem）
```

### 8.2 Dark Mode 規範

- 所有元件必須同時支援 light / dark mode
- 使用 CSS 變數而非硬編碼色值，確保主題切換一致
- Dark mode 下 beige-gold 調低飽和度（38% → 33%）與提高亮度（52% → 60%），保持視覺平衡
- 使用 `next-themes` 的 `attribute="class"` 模式，支援系統偵測

### 8.3 內容誠信原則（Content Integrity）

網站上所有個人資訊的呈現必須遵守：

1. **只呈現實際發生的事**，絕不誇大或捏造成就
2. **使用精確識別碼**（連結、日期、機構名稱），確保可驗證
3. **缺失的資料如實揭露**，不以模糊描述填充
4. **所有作品附帶可查核的佐證**（repo 連結、錄影、文件）
5. **TAE-AI 精神延伸**：個人頁面上的每一項資訊必須可獨立驗證

---

## 9. 個人品牌資產

| 資產 | 說明 |
| :---- | :---- |
| **全名** | Bofu Chen（英文）/ 陳伯符（繁體中文）/ 陈伯符（簡體中文） |
| **個人網域** | [bafuchen.github.io](https://bafuchen.github.io) |
| **GitHub** | [github.com/bafu](https://github.com/bafu) |
| **Logo / 頭像** | 個人照或 monogram，自動切換 light/dark 版本 |

### 命名規則

- 英文名永遠是 **Bofu Chen**，不縮寫
- 中文名：繁體 **陳伯符**，簡體 **陈伯符**，不得混用
- 頁面功能名保持英文：Projects、Blog、Experience、Contact
- 中文頁面中功能名不翻譯，維持跨語言一致性

---

## 10. 個人訊息體系

| 特質 | 描述 | 範例 |
| :---- | :---- | :---- |
| **冷靜** | 不使用驚嘆號、不誇大 | ✓ "Building tools that reason about code." ✗ "Amazing engineer!" |
| **專業** | 以同行工程師為受眾，使用技術語言 | ✓ "Context-aware AI development" |
| **克制** | 不使用 emoji，不用過多修飾詞 | ✓ "Open Source Contributor" ✗ "🚀 Super Passionate Coder!!!" |
| **直接** | 短句優先，動詞開頭 | ✓ "Build. Write. Ship." |
| **自信** | 不使用「可能」「也許」等弱化詞 | ✓ "Engineer. Builder. Context-Aware Thinker." |

### 10.1 訊息層級

| 層級 | 內容 | 使用場景 |
| :---- | :---- | :---- |
| **Tagline** | Engineer. Builder. Context-Aware Thinker. | 網站首屏、社群 bio、名片 |
| **自我介紹（一段話）** | Bofu Chen 是軟體工程師與 AI 建構者，專注於開源工具開發、技術寫作與 AI 應用落地。他相信好的工程來自對脈絡的深度理解，每一個作品都附帶完整的可查核紀錄。 | 個人網站 About 區塊、履歷開頭 |
| **Differentiator** | 不是黑盒子的工程師。每一個作品都有 repo，每一篇文章都有根據，每一次演講都有錄影。 | 面對潛在合作者、招募者 |
| **CTA** | Explore projects. Read the blog. Get in touch. | 各區塊底部行動按鈕 |

### 10.2 核心訴求主軸

#### 主軸一：工程品質 — Verifiable Engineering

所有作品均附帶可查核的程式碼與文件。不以模糊的「豐富經驗」取代實際產出。

適用場景：作品集區塊、履歷、面試準備。

#### 主軸二：脈絡感知 — Context-Aware Thinking

深度理解問題背景，給出的解法都基於實際系統，而非通用範本。

適用場景：部落格文章、技術演講、開源貢獻說明。

#### 主軸三：透明可追溯 — Transparent & Traceable

開源優先。所有技術主張附帶來源與論據，不捏造、不模糊。

適用場景：技術寫作、學術引用、開源社群。

#### 主軸四：持續輸出 — Consistent Output

定期發布技術文章與開源工具，建立可信任的長期知識積累。

適用場景：部落格訂閱、社群經營、個人影響力建立。

---

## 11. Logo / 個人標識使用規範

- Logo 或 monogram 元件支援 light/dark mode 自動切換
- 個人名稱旁使用 `.chanel-nav` 樣式：`uppercase tracking-[0.15em] text-xs font-medium`
- Logo 與文字間距 `gap-4`
- 提供 `sm` / `md` / `lg` 三種尺寸

---

## 12. Scrollbar 與微細節

| 元素 | 規格 |
| :---- | :---- |
| Scrollbar 寬度 | 6px |
| Scrollbar track | 透明 |
| Scrollbar thumb | `hsl(var(--border))`，hover 時 `hsl(var(--muted-foreground))` |
| Scrollbar 圓角 | 3px |
| 選取反白 | 米金色底黑字 `::selection { background: hsl(var(--beige)); color: black; }` |

---

## 13. 色彩快速參考卡

```
Light Mode                          Dark Mode
─────────                           ─────────
Background   #FFFFFF                Background   #121212
Foreground   #000000                Foreground   #F2F2F2
Surface      #F7F7F7                Surface      #1C1C1C
Border       #E5E5E5                Border       #292929
Muted Text   #4A4A4A                Muted Text   #B5B5B5
Beige        #CEBB96                Beige        #C4B07D
Beige-Gold   #B79B5A                Beige-Gold   #B09A6B
Deep Navy    #4E6D98                Deep Navy    #7998C3
Nav Active   #0B2844                Nav Active   #1D3A57
Heading      #4E6D98                Heading      #7998C3
Inline Code  #DC6B14                Inline Code  #DF8749
Success      #16A34A                Destructive  #EF4444
```
