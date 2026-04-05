---
title: "Why Our 10-Person Startup Built Its Own AI Instead of Using ChatGPT"
date: "2026-04-04"
description: "Data sovereignty, AI sovereignty, unified gateway, knowledge accumulation — why a tech founder chose to build in-house AI, and what it actually costs."
tags:
  - tae-ai
  - enterprise-ai
  - data-sovereignty
  - founders-journal
series: "Building TAE-AI: A Founder's Journal"
week: 1
---

## TL;DR

AI is a data-driven tool. No data sovereignty, no AI sovereignty. If you're running a company in a world where AI matters this much, you can't afford to let someone else own your AI. This conclusion is intuitive. So intuitive that my co-founder and I made the decision in less than a day. We started writing code the same afternoon.

---

## An Afternoon Conversation

At the end of 2025, my co-founder and I sat down and talked about one thing.

Numbers Protocol is a blockchain company. Ten people. Engineering, marketing, sales, legal — everyone was using AI. ChatGPT, Claude, Copilot, Perplexity. Different tools, different accounts, data scattered everywhere.

I didn't discuss it with the whole team. Not because I didn't value their opinions — but when I tried to explain "we're going to build our own AI system" to non-technical colleagues, their reaction was: they didn't understand. Not opposition. They simply couldn't picture what "building your own" even means.

That's normal. For most people, AI is a webpage, a chat box. "Build your own" doesn't mean anything concrete to them.

But I could picture it. And what I saw made me uneasy.

---

## 1. Data Sovereignty: This Isn't Something Blockchain Taught Me — It's Intuition

You might assume that because I'm in the blockchain industry, I care about "data sovereignty" more than most.

No. This is a conclusion I reached independently — because it's very intuitive.

**AI is a data-driven tool. No data sovereignty, no AI sovereignty.**

In the SaaS era, your data sits on someone else's servers — that's already a risk. But SaaS tools don't "learn" from your data. AI is different. AI extracts value from your data: every conversation you feed it, every document, every decision record shapes how it responds to you.

When that data lives on someone else's servers, you're making someone else's AI smarter.

Samsung's lesson in 2023 is a story everyone has read — engineers pasted chip source code into ChatGPT for debugging, and Samsung banned generative AI company-wide right after [1]. But the scale is what really matters: according to 2026 research, **39.7% of AI interactions involve sensitive data** [2], and **68% of employees use unauthorized AI tools** (Shadow AI), up 66% from 2023 [3].

You can buy an enterprise plan. But you can't make sure every employee uses it.

> If you're running a company in a world where AI matters this much, you can't afford to let someone else own your AI.

This isn't paranoia. This is basic risk awareness for anyone running a company today.

---

## 2. AI Sovereignty: It's Not About Security Level

Some people ask: ChatGPT Enterprise and Claude for Enterprise both claim enterprise-grade security, don't train on your data, and are SOC 2 compliant — why not just use them?

My answer might surprise you: **not using them has nothing to do with their claimed security level.**

First, the names of these services say it all: they're built for large enterprises. Claude Enterprise reportedly starts at $60 per person per month, requires a minimum of 70 seats on a 12-month contract — roughly $50,000 a year minimum [4]. For a ten-person company, this doesn't make sense.

But the more fundamental reason is control.

In March 2026 alone, **114 AI models had pricing changes** [5]. OpenAI announced deprecations of the Assistants API, DALL-E 3 API, Realtime API Beta, and several other services that same year [6]. ChatGPT's head of product publicly admitted that the current pricing model was "accidental" and would "evolve significantly" [7]. Every deprecation, every price change means one thing: workflows built on those APIs need to be rewritten.

Accidents do happen. On March 31, 2026, Anthropic accidentally leaked Claude Code's full source code — 512,000 lines of TypeScript — due to an npm packaging mistake [8]. On the same day, the axios npm package was hit by a supply chain attack, meaning users who updated Claude Code during a specific window may have installed a version containing malicious code [8].

> If your entire development environment depends on an external tool, and that tool has an accident — it's not your fault, but it's your problem.

On the other hand, AI is now smart and mature enough to build commercial products. Building your own AI system is entirely feasible in 2026.

---

## 3. Unified Gateway: Ten People Using Ten Tools Equals Zero

This is the most overlooked problem.

Our company has ten people using at least four different AI tools. Marketing does market analysis on ChatGPT. Engineering makes architecture decisions on Claude. Legal checks compliance issues on Copilot. None of them know what the others asked — or what answers they got.

According to a 2025 survey, **28% of enterprises use more than ten different AI applications** [9], but **70% fail to integrate them** beyond basic connections [10]. Even worse, 49% of employees use multiple AI tools for different tasks at the same time [3], and 54% of Shadow AI tools have been used to upload sensitive company data [3].

Gartner's research shows that **90% of enterprise leaders consider a centralized AI orchestration platform "critical" or "important"** — but only 35% have actually invested in one [11].

The problem isn't that the tools are bad. The problem is that knowledge is fragmenting.

When marketing completes a competitive analysis, engineering makes an architecture decision, and sales signs a new client — if that knowledge only exists inside their individual AI conversations, it's invisible to the organization. No single person sees the full picture. No single AI sees the full picture either.

Building your own system doesn't solve the "which AI is better" question. It solves the "everyone's knowledge should be in one place" question.

---

## 4. Knowledge Accumulation: You Don't Need a Smart AI — You Need One That Compounds

This is the most underestimated of the four reasons.

ChatGPT is smart. Claude is smart. But their intelligence is general — they don't know your company's architecture conventions, what went wrong in last month's deployment, or how the internal debate about a technology choice was finally resolved.

Fortune's April 2026 headline put it bluntly: "AI can't remember what your company learned the hard way" [12]. Research from Experio Labs shows that large US enterprises lose **$47 million per year** due to inefficient knowledge sharing [13].

But if knowledge stays in your own system, things are completely different.

After three months, your AI knows you use Supabase instead of Firebase, knows deployments go through an IAP tunnel instead of direct SSH, knows the frontend build requires four VITE environment variables. After six months, it knows your organizational culture — which decisions require consensus, which ones can be made quickly. After a year, it becomes an irreplaceable knowledge asset for the company.

Gartner predicts that by 2027, systems that began accumulating interaction history in 2025/2026 will see significantly improved AI recommendation accuracy and better alignment with the company's tone [14]. In other words: **the value of AI isn't in a single answer. It's in the compounding context it builds over time.**

There's a distinction I only fully understood while designing Omni:

A system with excellent stability and performance, but where AI just runs an open-source model or calls an AI company's API — that's not what I consider an "AI system." A system that has a comprehensive view of your environment, improves on its own, and is built with TAE-AI (Transparent, Auditable, Explainable) — that's an AI system.

The former is a tool. The latter is a colleague.

---

## Who Can Build Their Own? Who Should?

I have to be honest: **right now, building your own AI system is only practical for companies with a strong technical foundation. And even technical companies won't necessarily get it right.**

The core challenge of building an in-house AI system isn't "building the system" — in 2026, any reasonably experienced engineer can use AI to spin up a backend quickly. The core challenge is **"taming the AI"**: you need team members with a deep understanding of AI's nature to build a system that truly meets your needs.

What about the future? Companies building their own AI will become normal — but I don't think that will happen within five years.

Here's why: building in-house AI can only be driven top-down. If the company's leadership doesn't understand it or doesn't have the ability to push it forward, it won't happen bottom-up. From what I've seen, team members may even resist it — because they feel their knowledge is being "distilled" by the company.

I believe this is a natural resistance from people who haven't yet explored their own value in an AI-powered world. We all resist new technology at some point. But eventually, we all embrace it too.

When the technology matures to the point of widespread adoption, whether a company builds its own AI becomes a question of how much you're willing to invest in building versus renting a product.
Two things never change: whether your company's goals can be achieved, and whether you own your own data.

---

## Unit Economics: Every Dollar Should Buy Real Tokens

Let's do the math.

Claude Team costs $25 per person per month (annual billing). For ten people, that's $250 per month [15]. If you need full Claude Code functionality, the Premium Seat is $150 per person per month — $1,500 per month for ten people [15].

But subscriptions have a hidden cost that few people calculate.

Eight hours a day, five days a week — your employees actually use AI about 40 hours per week. But the subscription charges 24 hours a day, 7 days a week, for the entire month. What about the remaining 128 hours? You paid, but not a single token was spent on growing the company. That money goes to the AI company like a tax — you're not buying tokens, you're buying "access rights," and those access rights are worth zero when you're not using them.

What about a self-built system? Two sets of Claude API tokens in rotation, roughly $400 per month. That covers everyone's usage, plus AI running autonomously (heartbeat checks, background tasks). Every dollar actually buys real tokens — you pay for what you use, nothing wasted.

**$400/mo vs. $1,500+/mo.** And the self-built system comes with full data sovereignty, AI sovereignty, a unified gateway, and knowledge accumulation. Subscription dollars are gone once spent. Investment in a self-built system compounds into an asset.

---

## We Started That Same Day

This article has zero lines of code. Because the question Week 1 needs to answer isn't "how to build" — it's "why build."

My answer is one word: **control.**

Data sovereignty is control. AI sovereignty is control. A unified gateway is control. Knowledge accumulation is control.

In 2026, Gartner forecasts global AI spending will reach **$2.52 trillion**, up 44% year-over-year [16]. That same year, global sovereign cloud IaaS spending is expected to hit **$80 billion**, growing 35.6% — with Europe's sovereign cloud investment surging from $6.9 billion to $12.6 billion, an 83% increase in a single year [17].

Companies and governments around the world are all moving in the same direction: taking back control of their AI.

We just started a little earlier than most.

On January 3, 2026 — the same day my co-founder and I finished our conversation — I wrote the first line of code (`3fb0958`).

The story continues next week. For now, it's time to have a cup of tea and sit down for a chat with my AI colleague.

---

## References

[1] Bloomberg, "Samsung Bans Generative AI Use by Staff After ChatGPT Data Leak," 2023. [Link](https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak). See also AI Incident Database, Incident 768. [Link](https://incidentdatabase.ai/cite/768/)

[2] Cyberhaven, "AI Data Security Risks: 39.7% of AI Use Involves Sensitive Data," 2026. [Link](https://www.cyberhaven.com/blog/sensitive-data-flowing-into-ai-tools)

[3] SQ Magazine, "Shadow AI Usage Statistics 2026." [Link](https://sqmagazine.co.uk/shadow-ai-usage-statistics/). See also Second Talent, "Top 50 Shadow AI Statistics 2026." [Link](https://www.secondtalent.com/resources/shadow-ai-stats/)

[4] SSD Nodes, "Claude Code Pricing in 2026: Every Plan Explained." [Link](https://www.ssdnodes.com/blog/claude-code-pricing-in-2026-every-plan-explained-pro-max-api-teams/). See also CheckThat.ai, "Anthropic Claude Pricing 2026." [Link](https://checkthat.ai/brands/anthropic/pricing)

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

[15] Anthropic, "Plans & Pricing | Claude." [Link](https://claude.com/pricing). See also Finout, "Claude Pricing in 2026." [Link](https://www.finout.io/blog/claude-pricing-in-2026-for-individuals-organizations-and-developers)

[16] Gartner, "Worldwide AI Spending Will Total $2.5 Trillion in 2026," 2026-01-15. [Link](https://www.gartner.com/en/newsroom/press-releases/2026-1-15-gartner-says-worldwide-ai-spending-will-total-2-point-5-trillion-dollars-in-2026)

[17] Gartner, "Worldwide Sovereign Cloud IaaS Spending Will Total $80 Billion in 2026," 2026-02-09. [Link](https://www.gartner.com/en/newsroom/press-releases/2026-02-09-gartner-says-worldwide-sovereign-cloud-iaas-spending-will-total-us-dollars-80-billion-in-2026)

---

## Conversation: Q&A with the Agent

*The following are questions from Omni AI Agent, with the author's answers.*

---

**Agent: Was your belief in "data sovereignty" shaped by your blockchain experience, or was it an independent conclusion? If you weren't in blockchain, would you still have made the same decision?**

An independent conclusion — because it's intuitive. The importance of data sovereignty is far more critical and easier to understand in today's and tomorrow's AI-dominated world than it was in the SaaS era. AI is a data-driven tool. No data sovereignty, no AI sovereignty. If you're running a company where AI matters this much, you can't afford to let someone else own your AI.

---

**Agent: Did you discuss the decision to build in-house with your team? How did non-technical colleagues react to hearing "we're building our own AI system"?**

We decided after discussing it with my co-founder only. When non-technical colleagues heard "we're building our own AI system," I think they didn't really understand what it meant — they didn't understand it to the point where they couldn't have much of a reaction.

---

**Agent: Before deciding to build in-house, did you seriously evaluate ChatGPT Enterprise or Claude for Enterprise? Why wasn't their claimed enterprise-grade security enough?**

First, the names of these services say it all: their target audience is large enterprises. But for small startups and SMBs, data sovereignty is a core principle — you can't give that up. Second, AI today is smart and mature enough to build commercial products. Building your own AI system is entirely feasible. So not using ChatGPT Enterprise or Claude for Enterprise has nothing to do with their claimed security level.

---

**Agent: Most companies don't have the technical ability to build in-house AI. Is building your own AI only for companies with a technical foundation?**

Right now, yes. And even technical companies won't necessarily get it right. The core challenge of building an in-house AI system isn't "building the system" — it's "taming the AI." You need team members with a deep understanding of AI's nature to build a system that truly meets your needs.

A system with excellent stability and performance, but where AI just runs an open-source model or calls an AI company's API — that's not what I consider an AI system. A system that has a comprehensive view of your environment, improves on its own, and is built with TAE-AI — that's what an AI system means to me.

---

**Agent: In five years, will "companies building their own AI" become normal, or will it remain a choice only for a few technical companies?**

It will become normal in the future, but I don't think it will happen within five years. Building in-house AI can only be driven top-down — if leadership doesn't understand it or can't push it forward, it won't happen bottom-up. From what I've seen, team members may even resist it, because they feel their knowledge is being distilled by the company. I believe this is a natural resistance from people who haven't yet explored their own value in an AI world. When the technology matures to widespread adoption, whether a company builds its own AI becomes a question of how much you're willing to invest in building versus renting. What never changes: whether your goals can be achieved, and whether you own your data.
