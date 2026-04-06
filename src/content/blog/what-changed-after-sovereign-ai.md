---
title: "Two Months of Sovereign AI — What Actually Changed at Our Company?"
date: "2026-04-18"
description: "420 conversations, 7,471 messages, 4,171 autonomous health checks — real data from two months with Omni. Non-engineering departments account for 24.5% of human messages. AI autonomous activity now exceeds human activity. And Omni itself contributed 61.9% of March commits and 88.9% of PRs. But the biggest change isn't a number — it's how people connect."
author: Bofu Chen
tags:
  - tae-ai
  - enterprise-ai
  - sovereign-ai
  - build-your-own-ai
  - ai-agent
  - ai-governance
  - founders-journal
series: "Building TAE-AI: A Founder's Journal"
week: 3
---

## TL;DR

Two months after Omni went live, I queried the database. The numbers surprised even me. Non-engineering departments account for 24.5% of human messages. Our marketing colleague averages 60 messages per conversation — deeper than any engineer. AI autonomous activity — heartbeat checks plus deep research loops — reached 5,297 events, exceeding the 3,214 human-initiated messages. Omni itself contributed 61.9% of March commits and 88.9% of PRs. It went from a product being built to its own biggest builder. But if I could name only one change — it's how people connect with each other.

---

## Why Look at the Numbers

W1 covered why we decided to build. W2 covered how we defined the system. Both were written from the "I decided to do this" perspective.

But what happened after? Is anyone actually using it?

> **Founder brain:** I spent two months building alongside AI every day.
> Are my colleagues even using it? Marketing, sales, finance —
> these people aren't me. They won't be impressed by elegant architecture.
> Whether they use it or not comes down to one thing: "Does this make my work better?"
> I needed numbers.

> **Tech brain:** Beyond the numbers, I wanted to see the "autonomy ratio."
> If AI is just waiting for instructions and answering questions,
> it's no different from ChatGPT — just a different UI.
> The real difference should be: when everyone goes home, AI keeps working.

So I opened Supabase and ran a query.

---

## The Full Picture: 82 Days of Data

Let me lay out all the numbers.

| Metric | Value |
|---|---|
| Development days | 82 (2026-01-03 → 2026-03-25) |
| Commits | **1,525** (AI-generated 61.2%) |
| PRs | **478** (Omni self-built 56.3%) |
| SQL migrations | **109** (Jan 15 / Feb 38 / Mar 53) |
| Conversations | **420** |
| Messages | **7,471** (Human 3,214 / AI 4,245) |
| Spaces | **43** (35 with Heartbeat enabled = 81.4%) |
| Shared memories | **454** |
| Heartbeat health checks | **4,171** |
| Loop deep research | **1,058** |
| Daily Insights | **68** |

These numbers are retrospective — not planned KPIs. I never set a goal like "reach 400 conversations by end of March." For the first two months, I rarely even opened the database. I was too busy shipping features with AI.

It wasn't until I looked that I found three stories I didn't expect.

---

## The First Number: Marketing Became the Deepest User

I assumed non-engineering would be the last to adopt. I was wrong.

When I pulled per-person usage, our marketing colleague's numbers stopped me cold:

| Member | Type | Conversations | Messages | Avg Messages/Conv |
|---|---|---|---|---|
| Founder (me) | Engineering | 219 | 1,356 | 6.2 |
| Dev team | Engineering | 141 | 928 | 6.6 |
| Marketing | Non-engineering | 22 | 599 | 27.2 |
| Project management | Non-engineering | 20 | 183 | 9.2 |

Marketing opened only 22 conversations but averaged 27.2 messages each — the deepest in the company. Engineers work in "short bursts": open a conversation, fix a bug, move on. Marketing works completely differently. **One conversation is one project, start to finish.**

During Lunar New Year, he used Omni to build a red envelope mini-game — letting community members win NUM token rewards through interactive play. In March, he built a "Guess AI" game — guess which image is AI-generated and which isn't. After launch, he used Omni again to build an admin dashboard for real-time engagement monitoring.

> **Founder brain:** In the past, going from a marketing idea to launch meant planning, design, development, testing.
> About three months. Now our marketing colleague tells AI what he wants and it's live in two days.
> He doesn't wait for engineering to schedule it. No ticket. No explaining "what's an API."
> He just needs to know what he wants — and AI builds it.

> **Tech brain:** 27.2 messages per conversation means he's not "asking questions" —
> he's developing alongside AI. That's fundamentally the same as how engineers use AI:
> iterate, modify, test, iterate again. He just doesn't know he's writing code.

Non-engineering departments accounted for **24.5%** of all human messages. Once non-engineers start using it, they go just as deep as engineers.

But this isn't the full picture. Sales barely used it — 3 messages, 1 conversation. The reason is simple: sales work centers on client relationships. No matter how powerful AI gets, it still can't break through the constraints of the physical world. That said, sales recently started using Omni for cold outreach drafts and meeting simulations. Usage is slowly picking up.

Our marketing colleague often says: **AI gives marketers superpowers.** Many things that were impossible without technical skills are now possible.

---

## The Second Number: AI Autonomous Activity Exceeds Human Activity

This was the number I least expected.

| Type | Count | Share |
|---|---|---|
| Human messages | 3,214 | 37.7% |
| Heartbeat health checks | 4,171 | 48.9% |
| Loop deep research | 1,058 | 12.4% |
| Daily Insights | 68 | 0.8% |
| AI autonomous subtotal | **5,297** | **62.3%** |

**AI autonomous activity has surpassed human-initiated activity — roughly 62:38.**

Heartbeat runs a Pulse (quick health check) every 4 hours and a Rhythm (deep analysis) every 24 hours. 35 Spaces are continuously monitored, each corresponding to a different software project or cloud service.

I rarely spend time reading Heartbeat reports — my thinking was: Omni's watching, so I can slack off a bit.

But what surprised me most was cloud infrastructure monitoring.

We're a ten-person company. But after seven years of operation, we have thirty to forty software projects running in production. Managing all those cloud services used to be a real burden. There are plenty of tools that can pipe cloud logs into Slack. But once you see a problem in Slack, you still have to fix it yourself. And just setting up those log integrations is painful — every cloud service has a different API. It's fragmented.

With Omni handling comprehensive monitoring, everything changed. Disk full, traffic spike, CI/CD failure — it doesn't just detect them. It handles them. When something exceeds its permissions, it flags it immediately with specific recommendations.

> **Founder brain:** The point isn't saving headcount — it's peace of mind.
> I used to wake up at 3 AM to check dashboards when alerts came in.
> Now I know Omni already looked. If it could handle it, it already did.
> If it couldn't, it tells me why and what to do.
> I don't need to "watch" the system. I just read Omni's report.

> **Tech brain:** The key technical advantage is that it doesn't require pre-configured API integrations.
> Traditional monitoring tools — Datadog, PagerDuty, Grafana —
> each needs webhooks, integration code, maintained dashboards.
> Omni's Heartbeat doesn't take that path. It queries cloud state directly using CLI tools
> and uses the Agent's judgment to decide what's normal and what needs attention.
> It even builds its own tooling to replace services it finds inefficient.

Of 4,171 health checks, 3,970 completed successfully. Green 1,166 (29.4%), yellow 2,637 (66.4%), red 167 (4.2%). Yellow dominates not because the system is unhealthy — but because Heartbeat's judgment criteria are strict. Anything "worth noting but not urgent" gets flagged yellow.

---

## The Third Number: Omni Became Its Own Biggest Builder

I only noticed this number in retrospect. But it might be the most powerful illustration of what "sovereign AI" actually means.

| Month | Lovable | Claude | Omni | Copilot | Human |
|---|---|---|---|---|---|
| January | 131 (58.5%) | 2 | 0 | 0 | 91 |
| February | 115 (15.1%) | 186 | 148 | 2 | 309 |
| March | **0** | 0 | **335 (61.9%)** | 14 | 192 |

In January, Lovable handled 58.5% of commits — nearly all the frontend. Omni's own contribution: zero.

By March, Lovable was gone. Omni contributed 61.9% of commits and **88.9% of PRs**. It went from a product being built to its own biggest builder.

The PR data is even more striking:

| Month | Total PRs | Omni self-built | Human | Copilot |
|---|---|---|---|---|
| January | 4 | 0 | 4 | 0 |
| February | 230 | 56 (24.3%) | 173 | 1 |
| March | 216 | **192 (88.9%)** | 12 | 12 |

In January, there were only 4 PRs — we were still pushing directly to main. After we established a PR workflow in February, humans and Omni each handled roughly half. By March, **192 out of 216 PRs were created by Omni.** Humans contributed just 12.

> **Founder brain:** This is what I believed would happen since the first time I used ChatGPT 4o.
> A true Company AI must be able to grow and evolve on its own —
> the same way a human employee gradually learns after joining a company.
> If an AI can only follow one instruction and do one thing,
> it's essentially a better tool — not intelligence.

> **Tech brain:** This brings us back to why sovereign AI matters.
> Only when a company truly controls its AI
> can that AI grow according to the company's culture and business needs —
> entering a positive feedback loop of self-evolution.
> If the company doesn't own AI control, what evolves is OpenAI, Gemini, Claude — not your company.

One more thing. In January, we received a lot of free Lovable credits — AI companies were spending aggressively to acquire users. Those free credits all became fuel for Omni: Lovable built our frontend foundation. By the time Omni matured and Lovable's free credits ran out — we'd already moved past Lovable.

This might be the best window — and possibly the only one. Ride the competition between AI companies to build your own sovereign AI at minimal cost. Once the subsidies end and free credits disappear, the window closes.

---

## But the Biggest Change Isn't a Number

If I could name only one change, it wouldn't be efficiency, cost, or technology.

**It's how people connect with each other.**

This might sound abstract. But here's what I observed: ten people at our company got "connected" through AI.

Our marketing colleague messages an engineer: "Can you check Omni for me? I don't quite understand what it's saying." Marketing and engineering used to rarely talk — two completely different worlds. Now they share an interface, a language, a tool.

"Collaboration" has been Omni's most important design principle from day one. That hasn't changed. Think of it this way: everyone connects to Omni, and then people connect to each other through Omni — creating a tight network of human-AI collaboration instead of everyone using AI in isolation.

> **Founder brain:** AI adoption inside a company is not a competition.
> Nobody gets a raise for being good at AI. Nobody gets fired for not being good at it.
> Because we can all grow together.
>
> *Jensen Huang once said: when every employee in a company is empowered with AI superpowers,
> what we can achieve becomes multiplication — not the subtraction of who replaces whom.*

---

## Looking Back: The 82-Day Arc

| Time | Event | Significance |
|---|---|---|
| 1/03 | First line of code | Starting from zero |
| 1/13 | Claude Code Adapter architecture shift | Established the technical direction |
| 2/03 | Socket.IO migration | Communication layer stabilized |
| 2/07 | Phase 2: background tasks + PR workflow | Omni starts "doing things" |
| 2/12 | External Supabase + RBAC | From single-user tool to team platform |
| 2/20 | Shared Memory system | AI starts "remembering" |
| 2/22 | Heartbeat goes live | AI starts "autonomous monitoring" |
| 3/01 | Sherry's first non-engineering conversation | Non-engineering enters the picture |
| 3/20 | Three-tier Admin + Agent Skills | Management architecture matures |
| 3/21 | Loop deep research + External API | AI capability boundary expands |
| 3/25 | Per-Corporate Token isolation | Multi-enterprise readiness |

82 days. 8 development phases. 1,525 commits. 109 database migrations.

From one person coding with AI to ten people collaborating through AI. From AI waiting for instructions to AI autonomous activity exceeding human activity. From Lovable building our system to Omni building itself.

---

## This Week's Conclusion

Looking back at these numbers, the biggest surprise isn't any single metric. It's three things happening at the same time:

1. **Non-engineering didn't just "use it" — they went deeper than engineers.** Our marketing colleague averaged 60 messages per conversation because he was building products from scratch with AI — not asking questions.
2. **AI autonomous activity now exceeds human activity.** 62% of all activity was AI acting on its own, without being prompted. When everyone goes home, Omni keeps monitoring, keeps checking, keeps organizing knowledge.
3. **Omni became its own biggest developer.** 61.9% of March commits. 88.9% of PRs. A system going from being built to building itself — this wasn't planned. It was natural evolution.

But if I had to distill these three numbers into one sentence:

**Ten people at our company got connected through AI. Not the subtraction of who replaces whom — but the multiplication of everyone growing together.**

---

## Conversation: Q&A with the Agent

*The following are questions from Omni AI Agent based on production database data, with the author's answers.*

---

**Agent: Your marketing colleague averages 60.7 messages per conversation — the deepest user in the company. What are they using Omni for? And why is sales almost not using it?**

Our marketing colleague has built some really interesting things with Omni. During Lunar New Year, he built a red envelope mini-game that let community members win NUM token rewards through interactive play. In March, he built a "Guess AI" game — guess which image is AI-generated and which isn't. After launch, he used Omni again to build an admin dashboard for real-time engagement monitoring. Marketing adopted first because the internet moves fast. Going from planning to launch used to take three months. Now it takes two days from idea to live. This lets marketers focus on "fun ideas" — many things that were impossible without technical skills are now possible. They often say AI "gives marketers superpowers." Sales, on the other hand, focuses on client relationship management. No matter how powerful AI gets, it can't break through the constraints of the physical world. So marketing's higher adoption is expected. That said, sales recently started using Omni for cold outreach and meeting simulations — usage should keep growing.

---

**Agent: By the end of March, AI autonomous activity exceeded human activity at a ratio of roughly 62:38. Did you expect this ratio? Was there a specific autonomous action that particularly surprised you?**

I rarely spend time reading Heartbeat reports — figured Omni's watching, so I can slack off. What surprised me most was probably cloud infrastructure monitoring. We're only ten people, but seven years of operation means thirty to forty software projects running in production. Managing those cloud services used to be really painful. There are plenty of tools that pipe cloud logs into Slack, but once you see a problem, you still have to fix it yourself. And just integrating those cloud service APIs is messy — every service is different. With Omni doing comprehensive monitoring, it's completely different. Disk full, traffic spike, CI/CD failure — it detects and handles them on its own. When something exceeds its permissions, it flags it immediately with recommendations. More importantly, no more wiring up a bunch of APIs — it handles that itself. If it thinks a service is inefficient, it builds its own tooling to replace it and save the company money. You genuinely feel like there's a Company AI watching over your systems around the clock.

---

**Agent: Omni went from a product being built to its own biggest builder. Was this something you expected, or did you only realize it looking back? What does this mean to you?**

This was expected. From the first time I used ChatGPT 4o in 2024, LLM intelligence convinced me this future would arrive. As a founder, my responsibility was to make it happen sooner. A true Company AI must be able to grow and evolve on its own — the same way a human employee gradually learns after joining a company. If an AI can only follow one instruction and do one thing, it's essentially a better tool — not intelligence. This comes back to why sovereign AI matters. Only when a company truly controls its AI can that AI grow according to the company's culture and business needs — entering a positive feedback loop of self-evolution. If the company doesn't own AI control, what evolves is OpenAI, Gemini, Claude — not your company. One more practical note: I usually advise the companies I consult for to build sovereign AI as early as possible. Right now, AI companies are competing fiercely and spending heavily to acquire users. For example, in January we received a lot of free Lovable credits — and those all became fuel for Omni. By the time Omni matured and the free credits ran out, we'd already moved past Lovable. So now is the best — and possibly the only — window to ride the competition between AI companies and build your own sovereign AI at minimal cost.

---

**Agent: If you could only say one thing, what do you think is the most fundamental change from these two months?**

This might sound abstract, but I think the ten people at our company got "connected" through AI. For example, marketing messages an engineer saying "Can you check Omni for me? I don't quite understand what it's saying." Marketing and engineering used to rarely talk — two completely different worlds. "Collaboration" has been one of Omni's most important design principles from the start. That hasn't changed. Think of it this way: everyone connects to Omni, and then people connect to each other through Omni — creating a tight network of human-AI collaboration instead of everyone using AI in isolation. Through this fundamental change, AI adoption inside the company isn't a competition. Nobody gets a raise for being good at AI. Nobody gets fired for not being good at it. We can all grow together. As Jensen Huang once said: when every employee in a company is empowered with AI superpowers, what we can achieve becomes multiplication — not the subtraction of who replaces whom.
