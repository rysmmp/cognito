# Cognito — Product Requirements Document

## Overview

**Product name:** Cognito  
**Tagline:** Think about your thinking.  
**Type:** Web app (MVP, no backend)  
**Storage:** localStorage only — no login required  
**Stack:** Next.js 14, Tailwind CSS, Framer Motion, html2canvas (screenshot), Anthropic API (optional, for dynamic scenario generation in later versions)

---

## Problem Statement

Behavioral and cognitive science is one of the most practically useful bodies of knowledge a person can develop — but it's taught in the wrong order. Most resources lead with definitions and frameworks, then illustrate with examples. This creates passive recognition, not active thinking.

Cognito flips the sequence: scenario first, model second. You see a situation, try to make sense of it, and *then* the underlying mental model is revealed. That reveal is what makes it stick.

---

## Target User

- Intellectually curious generalists
- People who consume content about psychology, decision-making, or rationality (e.g. readers of Thinking, Fast and Slow; fans of Farnam Street)
- Students studying behavioral economics, UX research, product design, or philosophy
- Professionals who want sharper thinking as a meta-skill

---

## Core Loop

```
Encounter scenario
        ↓
Think / sit with it
        ↓
Reveal mental model (progressive)
        ↓
Read more context (collapsible)
        ↓
See related examples
        ↓
Save or screenshot
        ↓
Next scenario
```

---

## MVP Feature Set

### 1. Scenario Display
- One scenario shown at a time (puzzle, thought experiment, or real-world case)
- Minimalist card layout — no extraneous UI
- Scenario type labeled subtly (e.g. "Thought Experiment", "Real-World Case", "Puzzle")

### 2. Progressive Reveal
- A "Reveal" interaction that progressively surfaces:
  1. The name of the mental model
  2. A short definition (1–2 sentences)
  3. A collapsible dropdown with deeper context
- Highlight phrases in the scenario text that are relevant to the model, activated on reveal
- Smooth animated transitions — no jarring page reloads

### 3. Collapsible Detail Panel
- Appears after reveal
- Sections inside:
  - **What it is** — formal definition
  - **Why it matters** — practical relevance
  - **Other examples** — 2–3 bite-sized examples from different domains
  - **Common misuse** — where this model breaks down or gets applied wrongly
- Each section is independently expandable

### 4. Save to Collection
- Saved cards stored in localStorage
- Accessible from a "Saved" view
- Each saved card stores: scenario text, model name, definition, timestamp

### 5. Download Screenshot
- Captures the revealed card as a clean image (model name + scenario)
- Uses html2canvas or a similar utility
- Exported as a `.png` — styled to look shareable (no browser chrome)

### 6. Navigation
- "Next" button to advance to a new scenario
- Scenarios sourced from a local JSON file (static content for MVP)
- Random by default; optionally filtered by category in a later version

---

## Out of Scope (MVP)

- User accounts / authentication
- Backend or database
- Social sharing beyond screenshot download
- Search or filtering by model name
- Spaced repetition or quiz mode
- Mobile app

---

## Data Model

### Scenario Object (local JSON)

```json
{
  "id": "string",
  "type": "thought_experiment | real_world | puzzle",
  "scenario": "string (the situation text, ~100–200 words)",
  "highlights": ["phrase 1", "phrase 2"],
  "model": {
    "name": "string",
    "short_definition": "string (1–2 sentences)",
    "what_it_is": "string",
    "why_it_matters": "string",
    "examples": ["string", "string", "string"],
    "common_misuse": "string"
  },
  "tags": ["cognitive bias", "decision-making", "systems thinking"]
}
```

### Saved Item (localStorage key: `cognito_saved`)

```json
[
  {
    "scenario_id": "string",
    "model_name": "string",
    "scenario_text": "string",
    "short_definition": "string",
    "saved_at": "ISO timestamp"
  }
]
```

---

## Success Metrics (post-MVP)

- Time spent per scenario (proxy for engagement)
- Save rate (% of revealed cards saved)
- Return visit rate
- Screenshot download rate

---

## Open Questions

- Should scenario order be random or curated (e.g. easier/more familiar models first)?
- How many seed scenarios should be in the MVP JSON? (Suggested: 20–30)
- Should the app ever generate scenarios dynamically via the Anthropic API, or stay fully static for MVP?
- Is "Download Screenshot" a card-level or reveal-level action?
