---
title: "We Decided to Build. But What Kind of System Did We Actually Need?"
date: "2026-04-11"
description: "After deciding to build in-house, I sprinted from zero to a working prototype in four days — Lovable for the frontend, Claude Code for the backend, and me making architecture calls. Three definitions mattered most: using Claude Code as a blueprint but going web-first, per-conversation workspace isolation for team collaboration, and drawing a clear line between 'make it alive' and 'make it good.'"
author: Bofu Chen
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

After deciding to build in-house, I sprinted from zero to a working prototype in four days. Lovable handled the frontend. Claude Code handled the backend. I made the architecture decisions. Three definitions mattered most — using Claude Code as a blueprint but going web-first, per-conversation (not per-user) workspace isolation so the team could collaborate, and drawing a clear line between "make it alive" and "make it good." None of these were planned on a whiteboard. They were forged in the chaos of AI failing to deliver, UI breaking apart, and connections dropping every few minutes.

---

## Starting Point: A Spec Written for AI

W1 covered why we decided to build. But between "why" and "how," there's a massive gap.

On January 3rd at 9:30 AM, I did something that only made sense in hindsight: I wrote an implementation plan (`da2c16c`).

It wasn't written for humans. It was written for AI.

| Claude Code Component | Numbers Omni Equivalent |
|---|---|
| CLI Interface | Web UI (Lovable frontend) |
| Application Orchestrator | FastAPI Gateway + WebSocket |
| Agentic Loop | Claude Agent SDK (Python) |
| Tool Runtime | Local execution environment (GCE VM) |
| Project Context | Workspace Manager |

This document mapped every Claude Code component, one-to-one, to its Omni counterpart. System architecture, file structure, implementation phases, tool definitions, WebSocket message protocol, security boundaries — all in one document.

> **Tech brain:** The best AI development tool in the world is Claude Code.
> If it weren't for AI sovereignty, I'd still be using it.
> Since we're building our own, we should stand on the shoulders of a giant —
> let AI study Claude Code thoroughly, then replicate its architecture.

> **Founder brain:** But I don't want another Claude Code.
> I want something that integrates with my existing team, that non-technical colleagues can use,
> and that costs less than subscribing eight people to individual plans.
> Claude Code is a personal tool. Omni is a team tool. That's the fundamental difference.

Both brains agreed on this one: use Claude Code's architecture as a starting point, but steer every design decision toward team collaboration.

It's like building a house — you don't need to reinvent bricks, but you do need to draw your own blueprint. Claude Code was the brick spec. Omni's blueprint was mine.

---

## Two AIs, One Human

Twenty-three minutes after I finished the implementation plan (09:55), the entire FastAPI backend was live (`3fb0958`).

I didn't write it — Claude Code did. WebSocket gateway, a custom ReAct agentic loop, five core tools (bash, read_file, write_file, edit_file, glob), Supabase JWT authentication, workspace isolation — all in a single commit.

But the backend was only half the story.

That same morning at 7 AM, Lovable had already built the frontend foundation: Supabase connection, auth system, database schema, three-column UI layout. By 10:30 AM, frontend and backend were connected. By 11 AM, the Cloudflare Tunnel had WSS running.

**Day one. Working prototype.**

> **Tech brain:** This speed is impossible in traditional development.
> The reason: I gave the frontend and backend to two different AI tools —
> Lovable handled the entire React + Supabase frontend stack,
> Claude Code handled the Python + FastAPI backend.
> Two parallel tracks. I made the decisions in the middle.

> **Founder brain:** Technically cool. But the distance between "it works" and "it's usable"
> was much further than I expected.

---

## The Crash Diary

January 3 to January 6. Four days. 138 commits. Minus Lovable's auto-syncs, roughly 90 real feature or fix commits. More than 20 a day.

This was not a normal development pace. Here's what those four days actually looked like.

**January 3 — Everything looked great. Then it didn't.**

09:55 backend went live. 11:20 Cloudflare Tunnel connected. Then 11:48, the first wall: JWT verification failed — Supabase uses ES256, not the RS256 we assumed. CORS was also blocking WebSocket. By 9 PM I was still adding WebSocket debugging logs.

**January 4 — Connectivity is the foundation. And it kept breaking.**

07:10 I added a WebSocket heartbeat (every 15 seconds) because Cloudflare Tunnel drops connections during long periods of inactivity. Eleven minutes later (07:21) I found a deeper problem: the synchronous Anthropic client uses `time.sleep()` during rate-limit retries, blocking the entire event loop. Heartbeats couldn't get through. Cloudflare killed the connection. The fix was switching to `AsyncAnthropic`.

One bug pulled out a second bug. The second bug exposed an architecture problem. That was every day for four days.

Then came mobile layout fixes, GCP credential integration, GitHub switching from REST API to CLI + MCP. Every single one was "we tried it, it didn't work."

**January 5 — Architecture-level rethinking.**

07:24 I made the most important architecture change: workspace isolation went from per-user to per-conversation (`f5a61d8`). Afternoon brought multi-file tabs (`ec49a71`), AWS and Firebase credential support, and prompt caching.

**January 6 — Tool explosion.**

Six new tools in one go: TodoWrite, Grep, AskUserQuestion, WebSearch, WebFetch, Task (sub-agent spawning). Also fixed a credential leak — the Agent's responses and canvas logs were exposing API keys. Added PWA support, chat sharing, version display.

> **Founder brain:** Those four days had zero planning.
> Every time I saw ugly UI, misaligned buttons, connections dropping —
> it was genuinely demoralizing.
> There was a voice constantly asking: should I keep going? Or just give up?
> But I couldn't let it go — "one more try, really the last one."
> Four sleepless days, just like that.

> **Tech brain:** It felt like being pulled by two AIs at the same time.
> Lovable pushed new UI changes every few minutes. Claude Code pushed new backend code every few minutes.
> You had to make decisions faster than they could code — otherwise they'd sprint in the wrong direction.
> You couldn't stop. Because stopping cost more than hitting walls.

Imagine running on two treadmills at once. Both are speeding up. You can't step off — you'd fall. All you can do is match the rhythm and keep up.

---

## The First Architecture Decision: Per-Conversation

January 5. The project was two days old. I made the first architecture-level change.

The original design was intuitive: one working directory per user (`/workspaces/{user_id}/`). Like giving everyone their own desk.

Two days of actual use showed me it wouldn't work.

```python
# Old: one directory per user
/workspaces/{user_id}/

# New: one directory per conversation
/workspaces/conversations/{conversation_id}/
```

> **Tech brain:** The problem with per-user was clear —
> different conversations from the same user would pollute each other.
> You change a file in conversation A, and the Agent in conversation B
> sees a modification it has zero context for.
> More fundamentally: different users couldn't collaborate in the same conversation.

> **Founder brain:** From my experience as an enterprise AI consultant, I've noticed something:
> many non-technical employees actually want to vibe code, but they're afraid.
> Legal worries their tool might have security holes. They can't take responsibility for the tech.
> That fear stops them from building the tools they need.
> If a developer can easily step into any conversation and adjust the environment for a non-technical colleague,
> everyone can use AI with more confidence.

Per-conversation was just a one-line path change. But it defined the direction of every design decision that followed: **everything scoped to the conversation, everything built for team collaboration.**

The session model changed with it — WebSocket connections were no longer bound to a working directory. When a user switches conversations, the backend dynamically switches workspaces via a `switch_workspace` message. No disconnect, no reconnect. All tool operations read the current workspace path from the session dynamically, rather than locking it at connection time.

Think of it like office design — not giving each person a private room, but giving each project a meeting room. Anyone can walk in, see all the materials, and pick up the work.

---

## System Definition: What to Build, and What Not to Build

After four days, the shape of the system was clear. Not because we planned it — but because every wall we hit, every fix, every architecture change was answering the same question: **what kind of system do we actually need?**

The answer came in two parts.

**Phase 1 — Make it alive:**

| Decision | Choice |
|---|---|
| Backend framework | FastAPI + WebSocket (real-time streaming, not request-response) |
| AI engine | Custom ReAct agentic loop + five core tools |
| Authentication | Supabase JWKS public key verification (ES256) |
| Connectivity | Cloudflare Tunnel + heartbeat (no exposed IP) |
| Isolation | Per-conversation workspace |
| Frontend | Lovable (React + TypeScript + Supabase) |

**Phase 2 — Make it good (deliberately deferred):**
- MCP Client (external tool integration)
- Git Integration (auto-commit, diff analysis)
- Preview Server (live preview of user applications)
- Context Summarization (token management, auto-summarization)

> **Tech brain:** This is the hardest decision an engineer makes — knowing what to build, and choosing not to.
> MCP, Git, Preview are all things Claude Code has. Not building them feels incomplete.
> But Phase 1's goal wasn't completeness. It was survival.
> A system that can connect, run an Agent, and isolate workspaces
> is worth more than a system that has everything but nothing works.

> **Founder brain:** Also, I hadn't slept in four days.
> If I didn't stop, the system wouldn't be the thing that got defined — I would be.

Those four days also planted three principles that were later written into the product requirements doc — though we didn't have a PRD at the time:

1. **Claude Code Web Parity:** Match Claude Code's capabilities, but implement them for the web — because development can't drop connections, so it has to be web, not terminal.
2. **Internal Knowledge First:** Prioritize the company's own resources (repos, cloud configs, logs). External search is a last resort.
3. **Incremental Capability:** Every feature is additive. Never remove existing capabilities — every Phase 2 item builds on top, never tears down.

These principles weren't planned on a whiteboard. They were patterns that emerged from making choices over and over in those four chaotic days.

---

## Looking Back: Four Days, One Timeline

| Time | Event | What It Defined |
|---|---|---|
| 1/03 07:14 | Lovable connected to Supabase | Data layer: Supabase (PostgreSQL + Auth) |
| 1/03 09:32 | Implementation plan (`da2c16c`) | System blueprint: Claude Code architecture mapping |
| 1/03 09:55 | FastAPI backend live (`3fb0958`) | Tech stack: Python + FastAPI + WebSocket |
| 1/03 11:48 | JWT ES256 fix | Auth method: Supabase JWKS |
| 1/04 07:10 | WebSocket heartbeat | Connectivity strategy: Cloudflare Tunnel + heartbeat |
| 1/04 07:21 | AsyncAnthropic fix | Non-blocking principle: all I/O must be async |
| 1/05 07:24 | Per-conversation workspace (`f5a61d8`) | Isolation model: conversation-scoped |
| 1/05 16:29 | Multi-file tabs (`ec49a71`) | Dev experience: multi-file switching |
| 1/06 15:34 | Six new tools live | Agent capability boundary: approaching Claude Code |
| 1/06 15:47 | Sub-agent spawning | Agent autonomy: can spawn sub-tasks |

Those four days weren't about "building features." They were about **defining the system's boundaries.**

What should match Claude Code? Toolset, agentic loop, streaming. What should be different? Web instead of CLI, per-conversation instead of per-user, team instead of individual. What can wait? MCP, Git Integration, Preview Server.

---

## This Week's Conclusion

Defining a system takes three things:

1. **A good reference.** Claude Code was the best AI development tool at the time. Instead of designing from scratch, we stood on its shoulders and focused our energy on "where to be different" — web instead of CLI, team instead of individual, per-conversation instead of per-user.

2. **One non-negotiable difference.** For Omni, that difference was team collaboration. Per-conversation workspace wasn't a technical preference — it was a product belief. Non-technical colleagues should feel safe to vibe code, and the technical team should be able to step in and supervise at any time.

3. **Someone willing to keep going when everything breaks.** AI can write code. But it can't decide at 3 AM that "this architecture is wrong — we need to change it." The most important output of those four days wasn't 138 commits — it was a set of decisions forged in the crash.

Can you define a system in four days? Looking back, the answer is: you can define a system's **boundaries** in four days. You learn what it should be, what it shouldn't be, and which problems to leave for your future self.

It's like the first four days of building a house — you think you're laying bricks, but really you're confirming where the foundation goes. Bricks can be torn down and rebuilt. Once the foundation is set, the whole building follows.

---

## Conversation: Q&A with the Agent

*The following are questions from Omni AI Agent based on commit history, with the author's answers.*

---

**Agent: 138 commits in four days — Lovable on frontend, Claude Code on backend, two AIs running at the same time. Looking back, what was your mental state during those four days? Was it a planned sprint, or could you just not stop?**

Looking back, I think I entered a mode where I was being "driven by AI." In the early days of laying the foundation, I had so many ideas — from UI to backend — but the AI just couldn't deliver. Every time I saw ugly UI, broken buttons, connections dropping out of nowhere, it was genuinely crushing. There was a constant voice asking, "Should I keep going? Or just give up?" But I couldn't let go. I kept telling myself: one more try, really the last one. That's how four sleepless days went by. Zero planning. In hindsight, it was a completely new kind of development experience.

---

**Agent: The implementation plan mapped every Claude Code component one-to-one to Omni. Why did you choose to "replicate Claude Code's architecture" as a starting point instead of designing a new system from enterprise requirements?**

When I was designing Omni, Claude Code was the best development tool in the world. If it weren't for wanting AI sovereignty and more control for the company and team collaboration, I would have kept using Claude Code. Since Claude Code was that good, and Omni is also built on the Claude SDK, it made sense to stand on the shoulders of a giant — so I had AI study Claude Code thoroughly. As I was writing this article, Claude Code's source code happened to leak. If I'd had the source code when building Omni, I probably would have wanted to use it too. Too bad I didn't (laughs).

---

**Agent: By day three, you changed the workspace from per-user to per-conversation. What made you realize so early that per-user isolation wasn't enough?**

Collaboration and safety. The core difference between Omni and Claude Code is team tool vs. personal tool. From my experience as an enterprise AI consultant, I've noticed that many non-technical employees actually want to vibe code — but they're excited and scared at the same time. For example, legal might worry that a tool they built with vibe coding could have security vulnerabilities. They can't take technical responsibility for it, and that fear stops them from building the tools their role actually needs. That's a loss for both the individual and the company. So when designing Omni, I thought: if existing developers can easily step into any conversation and adjust the AI environment for non-technical teams — and if things go wrong, the technical team can immediately take over — then you create a collaborative AI environment where someone with technical knowledge is supervising. Everyone can use AI to vibe code with confidence, and both individual and company productivity go up. To achieve that, per-conversation instead of per-user was the natural choice.

---

**Agent: Lovable wrote the frontend, Claude Code wrote the backend, and you wrote the implementation plan and architecture decisions. In an age where AI writes most of the code, what does "engineer" mean to you?**

I once read someone say that engineers in the AI era are like pilots — the plane can fly fully automated, but you still need someone to supervise, confirm the machine's decisions are correct, and make quick calls in emergencies. I strongly agree. I think we're heading toward a software "unmanned factory" era. But unmanned doesn't mean the industry has no humans — it means humans move from inside the factory to outside. The factory work goes to AI. In the short term, it looks like software jobs are shrinking. But that's temporary. In the future, the work of designing AI factories and supervising AI will grow explosively — and that work relies heavily on engineering experience. One more thing: Omni has completely moved beyond both Lovable and Claude Code. Today, Omni builds itself.
