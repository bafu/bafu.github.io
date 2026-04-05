---
title: "有了 ChatGPT 和 Claude Code，為什麼我還是決定自己建？"
date: "2026-04-04"
description: "資料主權、AI 主權、統一入口、知識累積——一個 tech founder 決定自建企業 AI 的四個理由"
tags:
  - tae-ai
  - enterprise-ai
  - data-sovereignty
  - founders-journal
series: "Building TAE-AI: A Founder's Journal"
week: 1
---

## TL;DR

AI 是資料驅動的工具。沒有資料主權，就沒有 AI 主權。一個對公司負責的經營者，絕對不會想要在一個 AI 占絕對重要性的世界裡，讓公司的 AI 掌控在別人手上。這個結論很直覺——直覺到我和共同創辦人花了不到一天就做了決定，然後當天就開始寫 code。

---

## 引言：一個下午的對話

2025 年底，我和共同創辦人坐下來，聊了一件事。

Numbers Protocol 是一家區塊鏈公司，十個人。工程、行銷、業務、法務——每個人都在用 AI。ChatGPT、Claude、Copilot、Perplexity，每個人用的工具不一樣、帳號不一樣、資料留在不同的地方。

我沒有跟整個團隊討論。不是因為不重視他們的意見——而是當我試著跟非技術同事解釋「我們要自己建一套 AI 系統」的時候，他們的反應是：不理解。不是反對，是不理解到無法有太多反應。

這很正常。對大部分人來說，AI 就是一個網頁、一個聊天框。「自己建」意味著什麼？他們想像不到。

但我想像得到。而且想到的東西讓我不安。

---

## 一、資料主權：這不是區塊鏈教我的，這是直覺

你可能以為，因為我在區塊鏈產業，所以特別在意「資料主權」。

不是。這是一個獨立得出的結論，因為它非常直覺。

**AI 是資料驅動的工具。沒有資料主權，就沒有 AI 主權。**

在 SaaS 時代，你的資料存在別人的伺服器上——這已經是風險。但 SaaS 工具不會「學習」你的資料。AI 不一樣。AI 從你的資料中汲取價值：你餵給它的每一段對話、每一份文件、每一個決策紀錄，都在塑造它回應你的方式。

當這些資料存在別人的伺服器上，你是在幫別人的 AI 變聰明。

2023 年三星的教訓是大家都讀過的新聞了——工程師把晶片原始碼貼進 ChatGPT 除錯，三星隨後全面禁用生成式 AI [1]。但更值得關注的是規模：根據 2026 年的研究，**39.7% 的 AI 互動涉及敏感資料** [2]，**68% 的員工使用未經授權的 AI 工具**（Shadow AI），較 2023 年成長 66% [3]。

你可以買企業方案。但你無法確保每個員工都用企業方案。

> 一個對公司負責的經營者，絕對不會想要在一個 AI 占絕對重要性的世界裡，讓公司的 AI 掌控在別人手上。

這不是技術者的偏執。這是一個負責任的經營者該有的風險意識。

---

## 二、AI 主權：跟安全級別無關

有人會問：ChatGPT Enterprise 和 Claude for Enterprise 都宣稱企業級安全、不用資料訓練模型、SOC 2 合規——為什麼不用？

我的答案可能出乎你的意料：**不採用它們，與它們宣稱的安全級別無關。**

首先，這些服務的名字說明了一切：服務對象是大型企業。Claude Enterprise 報導的起步價是每人每月 $60，最少 70 人、12 個月合約，最低消費約 $50,000 一年 [4]。對一家十個人的公司，這不是合理的選擇。

但更根本的原因是掌控權。

2026 年 3 月，單月內有 **114 個 AI 模型發生了價格變動** [5]。OpenAI 同年宣布棄用 Assistants API、DALL-E 3 API、Realtime API Beta 等多項服務 [6]。ChatGPT 產品負責人更公開承認目前的定價模式是「意外的」，將「顯著演化」[7]。每一次棄用、每一次改價，都意味著：建立在這些 API 上的工作流程必須重寫。

意外也是真的會發生的。2026 年 3 月 31 日，Anthropic 因為 npm 打包的人為失誤，意外洩漏了 Claude Code 的完整原始碼——512,000 行 TypeScript [8]。同一天 axios npm 套件遭受供應鏈攻擊，在特定時段更新 Claude Code 的使用者可能安裝了含有惡意程式的版本 [8]。

> 如果你的整個開發環境依賴一個外部工具，而這個工具出了意外——不是你的錯，但是你的問題。

而另一方面，AI 已經聰明與成熟到足以建立商業產品。自己建 AI 系統，在 2026 年完全是可行的。

---

## 三、統一入口：十個人用十套工具，等於零

這是最容易被忽略的問題。

我們公司十個人，用至少四套不同的 AI 工具。行銷在 ChatGPT 上做的市場分析，工程在 Claude 上做的架構決策，法務在 Copilot 上查的合規問題——彼此完全不知道對方問了什麼、得到了什麼答案。

根據 2025 年的調查，**28% 的企業使用超過十種不同的 AI 應用** [9]，但 **70% 未能將它們整合**到基礎連接之上 [10]。更嚴重的是，49% 的員工同時使用多個 AI 工具處理不同任務 [3]，54% 的 Shadow AI 工具曾被用來上傳敏感公司資料 [3]。

Gartner 的調查顯示，**90% 的企業領導者認為中央 AI 協調平台是「關鍵」或「重要」的**——但只有 35% 真的有投資 [11]。

問題不是工具不好。問題是知識在碎片化。

當行銷做了一份競品分析、工程做了一個架構決策、業務簽了一個新客戶——如果這些知識只存在各自的 AI 對話裡，對組織來說等於不存在。沒有一個人看到全貌，也沒有一個 AI 看到全貌。

自建系統解決的不是「哪個 AI 比較好」的問題，而是「所有人的知識該在同一個地方」的問題。

---

## 四、資料累積：你要的不是聰明的 AI，是越來越懂你的 AI

這是四個理由中最容易被低估的一個。

ChatGPT 很聰明。Claude 很聰明。但它們的聰明是通用的——它們不知道你公司的架構慣例是什麼、上個月的部署踩了什麼坑、團隊內部對某個技術選型的爭論最後怎麼收場的。

Fortune 在 2026 年 4 月的報導標題說得直白：「AI 無法記住你的公司辛苦學到的教訓」[12]。Experio Labs 的研究指出，美國大型企業每年因低效的知識共享損失 **4,700 萬美元** [13]。

但如果知識留在你自己的系統裡，情況完全不同。

三個月後，你的 AI 知道你用的是 Supabase 不是 Firebase、知道部署要走 IAP tunnel 不是直接 SSH、知道前端 build 需要四個 VITE 環境變數。六個月後，它知道你的組織文化——哪些決策需要共識、哪些可以快速拍板。一年後，它成為公司不可替代的知識資產。

Gartner 預測，到 2027 年，從 2025/2026 就開始累積互動歷史的系統，其 AI 推薦精確度和回應與公司調性的契合度將顯著提升 [14]。換言之：**AI 的價值不在單次回答的品質，在於累積後的上下文理解。**

這裡有一個我在設計 Omni 時才想清楚的區別：

一個穩定度與效能極佳的系統，但 AI 只是跑個開源模型或呼叫 AI 公司的 API——這不是我所認為的「AI 系統」。一個對你所處的環境擁有全知全能的視角、會自主進步、且具備 TAE-AI（Transparent, Auditable, Explainable）——這才是。

前者是工具，後者是同事。

---

## 誰能自建？誰該自建？

我必須誠實地說：**現階段，自建 AI 系統只適合有技術底子的公司。而且即使是技術公司也未必能做好。**

自建 AI 系統的核心挑戰不是「建立系統」——2026 年，任何稍有經驗的工程師都能用 AI 快速搭出一個後端。核心挑戰是**「馴化 AI」**：你必須有對 AI 本質理解十分透徹的成員，才能建立真正符合需求的系統。

那未來呢？企業自建 AI 一定會變成常態——但我不認為在五年內會發生。

原因是：企業自建 AI 絕對是 top-down 才能推動的。如果經營者自己沒有理解或者沒有能力推動，它不會 bottom-up 發生。根據我目前的觀察，公司內部的成員甚至可能阻止這件事——因為他們認為自己的知識正在被公司「蒸餾」。

我認為這是尚未嘗試挖掘自身價值、還不願接受 AI 未來的必然反抗，我們都曾經抗拒新技術，但也總有一天會擁抱新技術。

但當技術成熟到普及的程度，企業是否自建 AI，就如同評估願意花多少成本建置或租用一項產品。
而絕對不變的兩件事是：公司的目標是否能被達成，以及企業是否擁有自己的資料。

---

## 每一分錢都要真實買到 token

最後算一筆帳。

Claude Team 每人每月 $25（年繳），十個人每月 $250 [15]。如果需要 Claude Code 的完整功能，Premium Seat 每人每月 $150，十個人每月 $1,500 [15]。

但 subscription 有一個很少人算過的隱形成本。

一天工作八小時，一週五天——你的員工每週真正使用 AI 的時間大約是 40 小時。但 subscription 是 24 小時、7 天、整個月都在計費的。那剩下的 128 小時呢？你付了錢，但沒有任何一個 token 真正花在讓公司成長的事情上。這些錢像繳稅一樣上繳給了 AI 公司——你買到的不是 token，是「使用權」，而這個使用權在你不用的時候，價值是零。

自建系統呢？兩組 Claude API token 輪替，大約每月 $400。這包含所有人的使用量，加上 AI 自主運行（心跳巡檢、背景任務）的消耗。每一分錢都真實買到了 token——用多少、花多少，沒有浪費。

**每月 $400 vs. 每月 $1,500+**。而且自建的系統有完整的資料主權、AI 主權、統一入口和知識累積。外部訂閱的錢花完就沒了；自建系統的投入，會隨時間累積成資產。

---

## 結語：當天就開始了

這篇文章沒有任何一行 code。因為 W1 要回答的問題不是「怎麼建」——是「為什麼建」。

我的答案很簡單就是三個字：**控制權。**

資料主權是控制權。AI 主權是控制權。統一入口是控制權。資料累積是控制權。

2026 年，Gartner 預測全球 AI 支出將達到 **2.52 兆美元**，年增 44% [16]。同年全球主權雲 IaaS 支出預計達 **800 億美元**，年增 35.6%——歐洲的主權雲投資更從 69 億美元暴增到 126 億美元，一年成長 83% [17]。

全世界的企業和政府都在往同一個方向走：把 AI 的控制權拿回自己手上。

我們只是比較早走了這一步。

2026 年 1 月 3 日，和共同創辦人聊完的同一天，我寫下了第一行 code（`3fb0958`）。

接下來的故事，下週再繼續。現在是時候喝個茶，坐下來跟我的 AI 同事聊聊了。

---

## 參考資料

[1] Bloomberg, "Samsung Bans Generative AI Use by Staff After ChatGPT Data Leak," 2023. [Link](https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak). 另見 AI Incident Database, Incident 768. [Link](https://incidentdatabase.ai/cite/768/)

[2] Cyberhaven, "AI Data Security Risks: 39.7% of AI Use Involves Sensitive Data," 2026. [Link](https://www.cyberhaven.com/blog/sensitive-data-flowing-into-ai-tools)

[3] SQ Magazine, "Shadow AI Usage Statistics 2026." [Link](https://sqmagazine.co.uk/shadow-ai-usage-statistics/). 另見 Second Talent, "Top 50 Shadow AI Statistics 2026." [Link](https://www.secondtalent.com/resources/shadow-ai-stats/)

[4] SSD Nodes, "Claude Code Pricing in 2026: Every Plan Explained." [Link](https://www.ssdnodes.com/blog/claude-code-pricing-in-2026-every-plan-explained-pro-max-api-teams/). 另見 CheckThat.ai, "Anthropic Claude Pricing 2026." [Link](https://checkthat.ai/brands/anthropic/pricing)

[5] CostLayer, "AI API Price Hikes Coming: 114 Models Changed This Month," March 2026. [Link](https://costlayer.ai/blog/ai-api-price-increases-march-2026-openai-anthropic)

[6] OpenAI, "Deprecations." [Link](https://platform.openai.com/docs/deprecations)

[7] AI Empire Media, "AI Pricing 2026 News." [Link](https://aiempiremedia.com/ai-pricing-2026-breakdown/)

[8] VentureBeat, "Claude Code's source code appears to have leaked," 2026-03-31. [Link](https://venturebeat.com/technology/claude-codes-source-code-appears-to-have-leaked-heres-what-we-know)

[9] Menlo Ventures, "2025: The State of Generative AI in the Enterprise." [Link](https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/)

[10] GlobeNewsWire / Zapier, "70% of Enterprises Fail to Integrate AI Tools," 2025-12-03. [Link](https://www.globenewswire.com/news-release/2025/12/03/3198934/0/en/Zapier-Survey-Finds-70-of-Enterprises-Fail-to-Integrate-AI-Tools-Beyond-Basic-Connections.html)

[11] Rebase, "AI is Causing Its Own Tool Sprawl." [Link](https://rebasehq.ai/blog/ai-tool-sprawl)

[12] Fortune, "AI can't remember what your company learned the hard way," 2026-04-01. [Link](https://fortune.com/2026/04/01/corporate-history-archives-brand-management-ai-doesnt-know/)

[13] Experio Labs, "Why Your Agentic AI Will Fail Without Institutional Memory." [Link](https://www.experiolabs.ai/post/the-47-million-blind-spot-why-your-agentic-ai-will-fail-without-institutional-memory)

[14] VentureBeat, "Six data shifts that will shape enterprise AI in 2026." [Link](https://venturebeat.com/data/six-data-shifts-that-will-shape-enterprise-ai-in-2026)

[15] Anthropic, "Plans & Pricing | Claude." [Link](https://claude.com/pricing). 另見 Finout, "Claude Pricing in 2026." [Link](https://www.finout.io/blog/claude-pricing-in-2026-for-individuals-organizations-and-developers)

[16] Gartner, "Worldwide AI Spending Will Total $2.5 Trillion in 2026," 2026-01-15. [Link](https://www.gartner.com/en/newsroom/press-releases/2026-1-15-gartner-says-worldwide-ai-spending-will-total-2-point-5-trillion-dollars-in-2026)

[17] Gartner, "Worldwide Sovereign Cloud IaaS Spending Will Total $80 Billion in 2026," 2026-02-09. [Link](https://www.gartner.com/en/newsroom/press-releases/2026-02-09-gartner-says-worldwide-sovereign-cloud-iaas-spending-will-total-us-dollars-80-billion-in-2026)

---

## 對談：與 Agent 的問答

*以下是 Omni AI Agent 的提問，與作者的回答。*

---

**Agent：「資料主權」的信念是從區塊鏈經驗來的，還是獨立得出的結論？如果你不是在區塊鏈產業，你還會做同樣的決定嗎？**

獨立得出的結論，因為這很直覺：資料主權的重要性，在 AI 占絕對重要性的今日與未來，比起 SaaS 時代更顯重要也更容易理解。AI 是資料驅動的工具，沒有資料主權，就沒有 AI 主權。一個對公司負責的經營者，絕對不會想要在一個 AI 占絕對重要性的世界裡，讓公司的 AI 掌控在別人手上。

---

**Agent：決定自建的時候有跟團隊討論嗎？非技術同事聽到「自己建 AI 系統」的反應是什麼？**

只和共同創辦人討論後就決定了。非技術的同事聽到「自己建 AI 系統」時，我認為他們其實還不理解這是什麼意思——不理解到無法有太多反應。

---

**Agent：在自建之前，有沒有認真評估過 ChatGPT Enterprise 或 Claude for Enterprise？它們宣稱的企業級安全為什麼不夠？**

首先這些服務的名字說明了一切：服務對象是大型企業。然而小型新創公司或 SMB，資料主權是核心靈魂，不能拋棄。其次，目前的 AI 已經聰明與成熟到足以建立商業產品，自己建立 AI 系統完全是可行的。因此不採用 ChatGPT Enterprise 或 Claude for Enterprise，與他們宣稱的安全級別無關。

---

**Agent：大部分公司沒有技術能力自建 AI。自建 AI 只適合有技術底子的公司嗎？**

現階段是，而且即使是技術公司也未必能做好。這裡必須先定義「技術公司」是什麼。自建 AI 系統的核心挑戰不是「建立系統」而是「馴化 AI」——你必須有對 AI 本質理解十分透徹的成員，才能建立真正符合需求的 AI 系統。

建立一個穩定度與效能極佳的系統，但 AI 只是跑個開源模型或呼叫 AI 公司的 API，這不是我所認為的 AI 系統。一個對你所處的環境擁有全知全能的視角、會自主進步、且具備 TAE-AI——這才是我心目中的 AI 系統。

---

**Agent：五年後，「企業自建 AI」會變成常態，還是只會是少數技術公司的選擇？**

未來會變成常態，但我不認為在五年內會發生。企業自建 AI 絕對是 top-down 才會發生的——如果經營者自己沒有理解或者沒有能力推動，它不會 bottom-up 發生。根據我目前的觀察，公司內的成員甚至會阻止這件事，因為他們認為自己的知識正在被公司蒸餾。我認為這是尚未嘗試挖掘自身價值、還不願接受 AI 未來的必然反抗。當技術成熟到普及的程度，企業是否自建 AI 的問題，就如同評估願意花多少成本建置或租用一項產品或服務。絕對不變的是：你的目標是否能被達成，以及你是否擁有自己的資料。
