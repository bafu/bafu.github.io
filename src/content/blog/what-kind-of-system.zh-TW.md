---
title: "決定要做了，但我需要怎樣的系統？"
date: "2026-04-11"
description: "決定自建之後，我用四天完成了從零到可運作原型的衝刺：Lovable 做前端、Claude Code 做後端，我負責架構決策。最關鍵的三個定義——以 Claude Code 為藍圖但走 Web 架構、per-conversation 的工作空間隔離、以及明確區分「先讓系統活著」和「再讓它好用」。"
author: 陳伯符
tags:
  - tae-ai
  - enterprise-ai
  - sovereign-ai
  - build-your-own-ai
  - founders-journal
series: "Building TAE-AI: A Founder's Journal"
week: 2
---

## TL;DR

決定自建之後，我用四天完成了從零到可運作原型的衝刺：Lovable 做前端、Claude Code 做後端，我負責架構決策。最關鍵的定義有三個——以 Claude Code 為藍圖但走 Web 架構、per-conversation 而非 per-user 的工作空間隔離讓團隊能協作、以及明確區分「先讓系統活著」和「再讓它好用」。這些決策不是坐在白板前想出來的，是在 AI 做不出來、UI 歪掉、連線中斷的崩潰中，一個一個撞出來的。

---

## 起點：一份寫給 AI 的規格書

W1 講了為什麼要自己建。但「為什麼」和「怎麼建」之間，有一道巨大的鴻溝。

1 月 3 日早上九點半，我做了一件回頭看才覺得關鍵的事：寫了一份 implementation plan（`da2c16c`）。

不是寫給人看的——是寫給 AI 看的。

| Claude Code 元件 | Numbers Omni 對應 |
|---|---|
| CLI 介面 | Web UI（Lovable 前端） |
| 應用程式協調器 | FastAPI Gateway + WebSocket |
| Agentic Loop | Claude Agent SDK（Python） |
| Tool Runtime | 本地執行環境（GCE VM） |
| Project Context | Workspace Manager |

這份文件把 Claude Code 的每一個元件，一對一映射到 Omni 的對應物。系統架構、檔案結構、實作階段、工具定義、WebSocket 訊息協議、安全邊界——全部寫在裡面。

> **Tech 腦：** 全世界最好的 AI 開發工具就是 Claude Code。
> 如果不是為了 AI 主權，我會繼續用它。
> 既然要自己建，就該站在巨人的肩膀上——
> 讓 AI 對 Claude Code 進行完整的研究，然後復刻它的架構。

> **Founder 腦：** 但我要的不是另一個 Claude Code。
> 我要的是能跟既有團隊無縫整合、非技術同事也能用、
> 成本比訂閱八個人帳號還低的東西。
> Claude Code 是個人工具，Omni 是團隊工具。這是根本的不同。

兩顆腦袋在這件事上達成了共識：用 Claude Code 的架構作為起點，但所有設計決策都朝「團隊協作」的方向修改。

就像蓋房子——你不需要重新發明磚塊，但你需要自己畫藍圖。Claude Code 是磚塊的規格書，Omni 的藍圖是我自己畫的。

---

## 兩個 AI、一個人

寫完 implementation plan 二十三分鐘後（09:55），整個 FastAPI 後端就上線了（`3fb0958`）。

不是我寫的——是 Claude Code 寫的。WebSocket gateway、自建的 ReAct agentic loop、五個核心工具（bash、read_file、write_file、edit_file、glob）、Supabase JWT 認證、workspace 隔離——全部在一個 commit 裡。

但後端只是故事的一半。

同一天早上七點，Lovable 已經完成了前端的基礎建設：Supabase 連接、認證系統、資料庫 schema、三欄式 UI 框架。到了十點半，前後端串接完畢。十一點，Cloudflare Tunnel 打通了 WSS 連線。

**第一天就有了一個能動的 prototype。**

> **Tech 腦：** 這個速度在傳統開發中不可能發生。
> 原因是我把前端和後端交給了兩個不同的 AI 工具——
> Lovable 處理 React + Supabase 的整個前端棧，
> Claude Code 處理 Python + FastAPI 的後端。
> 兩條線平行推進，我在中間做決策。

> **Founder 腦：** 技術上很酷。但「能動」跟「能用」之間的距離，
> 比我想像的遠得多。

---

## 崩潰日記

1 月 3 日到 1 月 6 日，四天 138 個 commit。扣掉 Lovable 的自動同步，大約 90 個實質的功能或修復。平均一天超過 20 個。

這不是正常的開發節奏。以下是那四天的真實面貌。

**1 月 3 日——一切看起來很美好，然後就不美好了**

09:55 後端上線，11:20 Cloudflare Tunnel 連通。然後 11:48 第一次撞牆：JWT 驗證失敗——Supabase 用的是 ES256 演算法，不是我們假設的 RS256。同時 CORS 擋住了 WebSocket。晚上九點還在加 WebSocket debugging logs。

**1 月 4 日——連線是一切的基礎，而它一直斷**

07:10 加了 WebSocket 心跳機制（每 15 秒），因為 Cloudflare Tunnel 在長時間無資料時會斷線。十一分鐘後（07:21）發現更深的問題：同步版的 Anthropic 客戶端在 rate limit 重試時會用 `time.sleep()` 阻塞整個事件循環，心跳也發不出去，Cloudflare 就直接砍連線。解法是換成 `AsyncAnthropic`。

一個 bug 拉出第二個 bug，第二個 bug 牽出架構問題。這就是那四天的日常。

接下來是手機適配、GCP 憑證整合、GitHub 從 REST API 換成 CLI + MCP。每一個都是「做了才知道不行」。

**1 月 5 日——架構級的反思**

07:24 做了最重要的架構改動：workspace 從 per-user 改成 per-conversation（`f5a61d8`）。下午加了多檔案分頁（`ec49a71`）、AWS 和 Firebase 憑證支援、啟用了 prompt caching。

**1 月 6 日——工具大爆發**

一口氣加了六個新工具：TodoWrite、Grep、AskUserQuestion、WebSearch、WebFetch、Task（sub-agent spawning）。同時修了一個機密外洩的 bug——Agent 的回應和 canvas logs 會把 API key 洩漏出去。加了 PWA 支援、聊天分享功能、版本號顯示。

> **Founder 腦：** 那四天完全沒有計畫。
> 每次看到很醜的 UI、歪掉的按鈕、連線動不動就中斷，真的很崩潰。
> 一直有一個聲音在問自己：還要繼續嗎？還是放棄好了？
> 但又不甘心——再試一次，真的最後一次。
> 就這麼不眠不休過了四天。

> **Tech 腦：** 這是一種被兩個 AI 同時拉著跑的感覺。
> Lovable 每幾分鐘產出新的 UI 變更，Claude Code 每幾分鐘產出新的後端 code。
> 你必須比它們更快做決定，否則它們會往錯的方向衝。
> 你不能停——因為停下來的成本比繼續撞牆更高。

想像你同時在兩台跑步機上跑步。每一台都在加速。你不能下來，因為下來就摔倒。你能做的就是把節奏調對，然後跟上。

---

## 第一個架構級的決定：per-conversation

1 月 5 日，專案才開始兩天，我做了第一個架構級的改動。

原始設計很直覺：每個使用者一個工作目錄（`/workspaces/{user_id}/`），就像每個人有一張自己的桌子。

兩天的使用就讓我意識到這行不通。

```python
# 舊：每個使用者一個目錄
/workspaces/{user_id}/

# 新：每個對話一個目錄
/workspaces/conversations/{conversation_id}/
```

> **Tech 腦：** Per-user 的問題很明確——
> 同一個人的不同對話會互相污染。
> 你在 A 對話裡改了一個檔案，B 對話的 Agent 會看到一個它完全沒脈絡的修改。
> 更根本的是：不同使用者無法在同一個對話裡協作。

> **Founder 腦：** 我在做企業 AI 技術顧問的時候發現一件事：
> 很多非技術的員工其實很願意 vibe code，但他們既期待又怕受傷害。
> 法務擔心自己做的工具有安全漏洞，因為無法對技術負責，
> 這份恐懼阻止了他們打造自己需要的工具。
> 如果開發者能輕鬆接手任何一個對話、幫非技術同事調整環境，
> 所有人就能更安心地使用 AI。

Per-conversation 只是一行路徑的差異，但它定義了 Omni 往後所有設計的方向：**一切以對話為單位，一切為團隊協作服務。**

session model 也跟著變——WebSocket 連線不再綁定工作目錄。使用者切換對話時，後端透過 `switch_workspace` 訊息動態切換工作空間，不需要斷線重連。所有工具操作都從 session 動態讀取當前的 workspace path，而不是在連線時就固定住。

就像辦公室的設計——不是給每個人一間獨立的房間，而是給每個專案一間會議室。任何人都可以走進來、看到所有資料、接手工作。

---

## 系統定義：做什麼，以及不做什麼

四天結束後，系統的輪廓清晰了。不是因為事先規劃好——而是每一次撞牆、每一次修復、每一個架構改動，都在回答同一個問題：**我們到底需要怎樣的系統？**

答案分成兩部分。

**Phase 1——先讓系統活著：**

| 決策 | 選擇 |
|---|---|
| 後端框架 | FastAPI + WebSocket（即時串流，不是 request-response） |
| AI 引擎 | 自建 ReAct agentic loop + 五個核心工具 |
| 認證 | Supabase JWKS 公鑰驗證（ES256） |
| 連線 | Cloudflare Tunnel + 心跳機制（不暴露 IP） |
| 隔離 | Per-conversation workspace |
| 前端 | Lovable（React + TypeScript + Supabase） |

**Phase 2——再讓它好用（刻意推遲）：**
- MCP Client（外部工具整合）
- Git Integration（自動 commit、diff 分析）
- Preview Server（即時預覽使用者應用）
- Context Summarization（token 管理、自動摘要）

> **Tech 腦：** 這是工程師最難做的決定——知道什麼該做、但選擇不做。
> MCP、Git、Preview 都是 Claude Code 有的能力，不做會覺得不完整。
> 但 Phase 1 的目標不是完整，是存活。
> 一個能連線、能跑 Agent、能隔離工作空間的系統，
> 比一個什麼都有但什麼都不穩的系統有價值得多。

> **Founder 腦：** 而且我已經四天沒睡了。
> 再不停下來，系統沒定義完，人先定義完了。

這四天也埋下了三個後來被寫進產品需求文件的核心原則——雖然當時還沒有 PRD：

1. **Claude Code Web Parity**：以 Claude Code 的能力為基準，但用 Web 實現——因為開發不能斷線，必須是 web 而不是 terminal
2. **Internal Knowledge First**：優先使用公司內部資源（repos、cloud configs、logs），外部搜尋是最後手段
3. **Incremental Capability**：每個功能都是增量的，不移除現有能力——Phase 2 的每一項都是往上疊加，不是推翻重來

這些原則不是在白板上想出來的。它們是在那四天的混亂中，反覆做選擇後沉澱出來的模式。

---

## 回頭看：四天的時間線

| 時間 | 事件 | 定義了什麼 |
|---|---|---|
| 1/03 07:14 | Lovable 連接 Supabase | 資料層：Supabase (PostgreSQL + Auth) |
| 1/03 09:32 | Implementation plan (`da2c16c`) | 系統藍圖：Claude Code 架構映射 |
| 1/03 09:55 | FastAPI 後端上線 (`3fb0958`) | 技術棧：Python + FastAPI + WebSocket |
| 1/03 11:48 | JWT ES256 修復 | 認證方式：Supabase JWKS |
| 1/04 07:10 | WebSocket 心跳 | 連線策略：Cloudflare Tunnel + heartbeat |
| 1/04 07:21 | AsyncAnthropic 修復 | 非阻塞原則：所有 I/O 必須 async |
| 1/05 07:24 | Per-conversation workspace (`f5a61d8`) | 隔離模型：以對話為單位 |
| 1/05 16:29 | Multi-file tabs (`ec49a71`) | 開發體驗：多檔案切換 |
| 1/06 15:34 | 六個新工具上線 | Agent 能力邊界：接近 Claude Code |
| 1/06 15:47 | Sub-agent spawning | Agent 自主性：可派生子任務 |

四天不是在「開發功能」——是在**定義系統的邊界**。

哪些東西要跟 Claude Code 一樣？工具集、agentic loop、streaming。哪些東西要不一樣？Web 而非 CLI、per-conversation 而非 per-user、團隊而非個人。哪些東西可以先不做？MCP、Git Integration、Preview Server。

---

## 這一週的結論

定義一個系統需要三件事：

1. **一個好的參照物。** Claude Code 是當時最好的 AI 開發工具。與其從零設計，不如站在它的肩膀上，把精力花在「哪裡要不一樣」——Web 而非 CLI、團隊而非個人、per-conversation 而非 per-user。

2. **一個不可妥協的核心差異。** 對 Omni 來說，這個差異是「團隊協作」。Per-conversation workspace 不是技術偏好，是產品信念——非技術的同事應該能安心 vibe code，而技術團隊能隨時接手監督。

3. **願意在崩潰中繼續的人。** AI 可以寫 code，但它沒辦法在凌晨三點決定「這個架構不對，要改」。那四天最重要的產出不是 138 個 commit——是一組經過崩潰驗證的決策。

四天能定義一個系統嗎？回頭看，答案是：四天能定義一個系統的**邊界**。你知道了它應該是什麼、不應該是什麼、以及哪些問題要留給未來的自己。

就像蓋房子的前四天——你以為自己在砌牆，其實你在確認地基的位置。牆可以拆了重來，地基一旦定了，整棟樓都跟著走。

---

## 對談：與 Agent 的問答

*以下是 Omni AI Agent 基於 commit 歷史的提問，與作者的回答。*

---

**Agent：四天 138 個 commit，Lovable 負責前端、Claude Code 負責後端，同時操作兩個 AI。回頭看，這四天的工作狀態是什麼？是計畫性的衝刺，還是停不下來的狀態？**

現在回頭看，覺得自己好像進入了一個「被 AI 驅動」的模式。在早期打基礎的時候，從 UI 到後台心裡有很多想法，但 AI 就是做不出來！每次看到很醜的 UI、歪掉的按鈕、連線動不動就中斷，真的很崩潰。一直有一個聲音在問自己「還要繼續嗎？還是放棄好了」——但又不甘心，一直想說：再試一次，真的最後一次！就這麼不眠不休過了四天。完全沒有計畫，回想起來也是一種全新的開發體驗。

---

**Agent：Implementation plan 把 Claude Code 的每個元件一一對應到 Omni。為什麼選擇「複製 Claude Code 的架構」作為起點，而不是從企業需求出發設計全新系統？**

在設計 Omni 的時候，全世界最好用的開發工具就是 Claude Code。如果不是為了公司的 AI 主權、希望讓公司有更多掌控權與團隊協作，我絕對會繼續使用 Claude Code。既然 Claude Code 這麼棒，同樣以 Claude SDK 為基礎的 Omni 當然要站在巨人的肩膀上往前走，所以就決定讓 AI 對 Claude Code 進行完整的研究與學習。在我寫文章的時候剛好遇到 Claude Code 原始碼外洩——如果做 Omni 的時候有 Claude Code source code，我大概也會想偷用，太可惜了（笑）。

---

**Agent：專案第三天就把 workspace 從 per-user 改成 per-conversation。什麼讓你這麼早就意識到 per-user 隔離不夠？**

協作與安全性！我認為 Omni 跟 Claude Code 最核心的差異就是團隊合作 vs. 個人工具。在我擔任企業 AI 技術顧問的時候，常常發現很多非技術的員工其實很願意 vibe code，但他們既期待又怕受傷害。舉例來說，法務會很擔心萬一自己 vibe code 做的法務工具有安全性漏洞，那不是太糟糕了嗎？因為對技術的不理解、甚至無法對技術負責，這份恐懼往往阻止了他們用 vibe code 打造自己職位上需要的工具，這完全是公司與個人的雙重損失。因此我在設計 Omni 的時候就想：如果既有的開發者能夠很容易地幫法務、人資等非技術團隊調整他們的 AI 開發環境，萬一有問題技術團隊也可以立刻接手，等於是建立一個大家能夠一起協作的 AI 環境，由熟悉技術的人幫公司監督 AI，這樣人人都能更安心使用 AI 來 vibe code、大幅增加個人與公司的生產力。為了達成這個目標，per-conversation instead of per-user 就是很自然的選擇。

---

**Agent：Lovable 寫前端、Claude Code 寫後端，你寫的是 implementation plan 和架構決策。AI 寫了大部分 code 的時代，「工程師」這個身份對你來說還意味著什麼？**

我曾經在網路上看過有人說：AI 時代的工程師就像開飛機的機師——飛機完全可以全自動，但還是需要有人監督、確認機器的決策正確、以及在緊急的時候迅速做決定。我非常同意。我覺得我們正在邁向軟體「無人工廠」的時代，但無人工廠不代表這個產業真的「無人」，而是人類會從工廠內部移轉到外部——工廠的工作交給 AI，短期內看似軟體工作減少了，但這只是一時的。未來設計 AI 工廠與監督 AI 的工作一定會爆炸性增長，這些工作都非常需要仰賴工程師的經驗。補充一下，Omni 已經完全脫離 Lovable 以及 Claude Code 了，現在的 Omni 已經是自己打造自己的模式了。
