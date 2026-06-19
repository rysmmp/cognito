# Cognito

> Think about your thinking.

A lightweight web app for learning mental models through scenarios. No login. No fluff. One model at a time.

---

## What it is

Cognito teaches behavioral and cognitive science the right way around: scenario first, model second. You read a situation, sit with it, then reveal the mental model behind it — progressively, with context on demand.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Screenshot:** html2canvas
- **Storage:** localStorage (no backend, no login)

---

## Planning Docs

| File | Purpose |
|------|---------|
| `PRD.md` | Product requirements, feature scope, data model |
| `.plan.md` | Architecture, component specs, design tokens, decisions log |
| `DESIGN_SYSTEM.md` | Color palette, typography, motion, component library |
| `CONTENT.md` | All 25 seed scenarios, ready to convert to JSON |
| `CLAUDE_CODE_PLAYBOOK.md` | Phase-by-phase prompts for Claude Code |

---

## Getting Started

```bash
npx create-next-app@latest cognito --typescript --tailwind --app
cd cognito
npm install framer-motion lucide-react html2canvas
```

Then follow the phases in `CLAUDE_CODE_PLAYBOOK.md`, starting with Phase 0.

---

## Features (MVP)

- Scenario card with type label and formatted text
- Progressive reveal (3 steps: name → definition → full)
- Highlighted key phrases on reveal
- Collapsible detail drawer (4 sections)
- Save to local collection
- Download card as PNG
- Saved view
- Interactive particle background + dot grid

---

## Visual Direction

Dark mode, always. Slate-violet accent. Serif display font (DM Serif Display) for scenario text and model names. Mono font (JetBrains Mono) for labels and metadata. Ambient particles. Subtle grid.

---

## Content

25 seed scenarios covering:
- Cognitive biases (Availability Heuristic, Confirmation Bias, Anchoring, etc.)
- Decision frameworks (First Principles, Inversion, Second-Order Thinking)
- Systems thinking (Feedback Loops, Emergence, Bottlenecks)
- Probabilistic thinking (Bayes, Expected Value, Regression to the Mean)
- Social/behavioral (Reciprocity, Social Proof, Incentive-Caused Bias)

---

## Roadmap (Post-MVP)

- [ ] Dynamic scenario generation via Anthropic API
- [ ] Category filtering
- [ ] Spaced repetition / review mode
- [ ] Daily model
- [ ] Share via URL slug
