# sayless

You ask AI to write a button label. It says "Submit."
You ask for a headline. It gives you "Innovative AI-Powered Platform."
You ask for an error message. You get "Something went wrong."

That copy could live on 1,000 products unchanged. It's dead.

sayless is a Claude Code skill that fixes this.

---

**You:** "Write onboarding copy for a transcription app."

**Without sayless:**
> Start your journey with our powerful transcription platform. We leverage cutting-edge AI to deliver seamless results.

**With sayless:**
> Record a meeting. Get a summary before your next one.
> English and Spanish. Up to 60 minutes. Works offline.

One has adjectives. The other has facts.

---

**You:** "Error message for failed save."

Without: *Something went wrong. Please try again.*

With: *You're offline. Reconnect to save changes.*

Three differences: what happened, why, what to do. No mystery.

---

**You:** "Landing page headline for a design reference tool."

Without: *The Ultimate Design Research Platform for Modern Teams*

With: *Stop debating. Start seeing.*
*Search 100k real screens. Ship with fewer arguments.*

One is a headline. The other is a point of view.

---

## What changes

sayless carries a 21-section copywriting methodology inside it. When triggered, every line gets filtered:

- Can a stranger get this in 3 seconds?
- Is there a concrete detail or is it all adjectives?
- Can I cut 30% and lose nothing?
- Does this sound like a person or a committee?

It knows where personality belongs (onboarding, tooltips, success states) and where it doesn't (errors, payments, deletion, security).

It has a banned words list. "Seamless" is on it. So is "leverage," "synergy," and "In today's fast-paced world."

---

## Install

Download `sayless.skill` from this repo. Then in Claude Code:

```
/install-skill sayless.skill
```

Or copy the `sayless/` folder into `~/.claude/skills/`.

Works with any Claude Code project. Triggers on copy-related requests automatically.

---

## Structure

```
sayless/
  SKILL.md                         — workflow and quick patterns
  references/copywriting-guide.md  — full 21-section methodology
```

SKILL.md loads first. The guide loads when depth is needed. Context-efficient by design.

---

Clarity earns trust.
Character earns memory.
Honesty earns respect.

If your copy can't do all three — say less.
