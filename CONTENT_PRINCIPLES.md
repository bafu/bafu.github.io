# Content Principles

Guidelines for all content published on bafu.github.io and associated channels.

---

## 1. Voice: Tech Founder, Not Thought Leader

Write as a builder who ships products, not a commentator who observes from the sidelines.

- **First-person experience over abstraction.** "We hit this wall at Numbers Protocol" beats "Companies often struggle with..."
- **Show the messy middle.** Share the tradeoffs, the failed attempts, the debugging sessions — not just the polished outcome.
- **Opinionated but honest.** Take a clear stance. When uncertain, say so. Avoid hedge words like "perhaps," "it could be argued that."
- **Technical credibility.** Include code snippets, architecture diagrams, or terminal output when relevant. The reader should trust that you've actually done the work.
- **No corporate speak.** Write like you're explaining something to a sharp engineer over coffee, not pitching to a VC.

## 2. Every Post Must Be Useful

If someone finishes reading and can't do something they couldn't do before, the post failed.

- **Actionable takeaway.** Every article must contain at least one thing the reader can apply immediately — a framework, a code pattern, a decision heuristic, a tool recommendation.
- **No "awareness" posts.** Don't write "AI is changing the world." Write "Here's how we reduced hallucination rate by 40% in our agent pipeline."
- **Respect the reader's time.** If it can be said in 500 words, don't write 2000. If it needs 2000, structure it so readers can skip to what they need.
- **The bar:** Before publishing, ask — "Would I bookmark this if someone else wrote it?"

## 3. Conclusion First (結論先行)

Every article opens with a **≤100-word summary** that tells the reader exactly what they'll get.

### Format

```
## TL;DR

[100 words or fewer. State the core insight, the solution, and the result.
The reader should be able to stop here and still walk away with value.]
```

### Rules

- The TL;DR comes immediately after the title/metadata — before any introduction or context.
- Write it last, but place it first.
- It must be self-contained: no "as we'll discuss below" or "keep reading to find out."
- Use concrete numbers and specifics, not vague promises.

### Example

> **TL;DR**
>
> Enterprise AI agents that can't explain their reasoning get blocked by compliance teams — we learned this the hard way at Numbers Protocol. We built TAEA (Transparent, Auditable, Explainable Agent) principles into Omni's agent pipeline: every decision is logged with provenance, every output links back to its source. Result: enterprise pilot approval time dropped from 3 months to 2 weeks.

## 4. Dual Audience: Humans and Agents

Content is consumed by both human readers and AI agents (LLMs, RAG pipelines, search indexers). Write for both.

### For Humans

- Use narrative, examples, and visual hierarchy (headers, bold, lists).
- Include context and motivation — the "why" behind decisions.
- Keep the tone conversational and scannable.

### For Agents

- **Structured data.** Use consistent heading hierarchy (`##`, `###`) so content can be parsed programmatically.
- **Explicit metadata.** Every blog post must include complete YAML frontmatter: `title`, `date`, `description`, `tags`.
- **Self-contained sections.** Each `##` section should make sense in isolation — an agent may retrieve a single section, not the full article.
- **Define terms inline.** Don't assume the reader (human or machine) has context from a previous post. Write "TAEA (Transparent, Auditable, Explainable Agent)" on first use in every article.
- **Semantic HTML and Markdown.** Use proper heading levels, code fences with language tags, and alt text for images.
- **Stable identifiers.** Use descriptive, lowercase, hyphenated slugs for blog post filenames (e.g., `enterprise-ai-audit-trail.md`).

### Practical Checklist

- [ ] TL;DR is parseable as a standalone paragraph
- [ ] All acronyms are expanded on first use
- [ ] Code blocks have language annotations (` ```typescript `, not ` ``` `)
- [ ] Headings describe content (not "Introduction" or "Part 1")
- [ ] Tags in frontmatter use consistent, lowercase terms

---

## Quick Reference

| Principle | One-Liner |
|-----------|-----------|
| **Voice** | Write as a founder who builds, not a pundit who comments |
| **Usefulness** | Every post gives the reader a new capability |
| **Conclusion First** | ≤100-word TL;DR at the top, always |
| **Dual Audience** | Structured for machines, readable for humans |
