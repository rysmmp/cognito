# Cognito — Claude Code Playbook

> Paste the relevant prompt block into Claude Code when starting each phase. Each block is self-contained and references the planning files.

---

## How to Use This Playbook

1. Open Claude Code in your Cognito project directory
2. Make sure your planning docs are in the root: `PRD.md`, `.plan.md`, `DESIGN_SYSTEM.md`, `CONTENT.md`
3. Copy the prompt for the phase you're starting
4. Paste it as your first message to Claude Code
5. After each phase, update `.plan.md` to check off completed items

---

## Phase 0 — Project Scaffold

```
Read PRD.md, .plan.md, and DESIGN_SYSTEM.md in this directory. Then scaffold the Cognito app.

Setup:
- Next.js 14 with the App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- html2canvas

Create the following directory structure exactly as specified in .plan.md under the Architecture section. 

After scaffolding:
1. Set up globals.css with all CSS custom properties from DESIGN_SYSTEM.md
2. Configure tailwind.config.ts with the font families and extended values from DESIGN_SYSTEM.md
3. Add Google Fonts imports for DM Serif Display, Inter, and JetBrains Mono in layout.tsx
4. Set the root layout background to --bg and default text to --text-primary

Do not create any components yet. Just the scaffold, config, and empty files with placeholder exports.
```

---

## Phase 1 — Background System

```
Read DESIGN_SYSTEM.md, focusing on the "Background System" section.

Create two components:

1. `components/GridBackground.tsx`
   - Full-viewport fixed position, z-index 0, pointer-events none
   - CSS dot grid as specified: radial-gradient, 40px spacing, rgba(255,255,255,0.04) dots
   - No canvas, pure CSS

2. `components/ParticleBackground.tsx`
   - Canvas element, fixed position, z-index 1, pointer-events none
   - 50 particles with the properties specified in DESIGN_SYSTEM.md
   - Mouse repulsion within 80px radius
   - requestAnimationFrame loop
   - cancelAnimationFrame cleanup on unmount
   - Respects prefers-reduced-motion (skip animation if reduced)
   - Use the --accent color value (compute it with getComputedStyle on mount)

Add both to app/layout.tsx so they appear on every page. Test that they don't interfere with content z-index (content should be z-index 10+).
```

---

## Phase 2 — Data Layer

```
Read CONTENT.md and the Data Model section of PRD.md.

1. Create `data/scenarios.json` with ALL scenarios from CONTENT.md. Each scenario must match this TypeScript type exactly:

interface Scenario {
  id: string
  type: 'thought_experiment' | 'real_world' | 'puzzle'
  scenario: string
  highlights: string[]
  model: {
    name: string
    short_definition: string
    what_it_is: string
    why_it_matters: string
    examples: string[]
    common_misuse: string
  }
  tags: string[]
}

2. Create `lib/storage.ts` with typed localStorage helpers:
   - getSaved(): SavedItem[]
   - saveItem(item: SavedItem): void
   - removeItem(id: string): void
   - isSaved(id: string): boolean
   - The key should be 'cognito_saved'

3. Create `hooks/useScenario.ts`:
   - Loads scenarios from the JSON
   - Tracks currentIndex (starts random)
   - Exposes: currentScenario, nextScenario(), prevScenario()
   - nextScenario() picks a random unseen scenario; resets when all have been seen

4. Create `hooks/useSaved.ts`:
   - Wraps storage.ts with React state
   - Exposes: saved, save(scenario), remove(id), isSaved(id)
   - Keeps state in sync with localStorage

5. Create `hooks/useReveal.ts`:
   - Manages reveal state: 'hidden' | 'name' | 'definition' | 'full'
   - Exposes: revealState, advance(), reset()
   - advance() moves to the next state in sequence
   - reset() goes back to 'hidden'
```

---

## Phase 3 — Core Scenario Card

```
Read DESIGN_SYSTEM.md (Component Library section) and .plan.md (Component Specs section).

Build the main scenario display. This is the heart of the app.

1. `components/HighlightText.tsx`
   - Props: text (string), highlights (string[]), active (boolean)
   - Renders the scenario text, wrapping any phrases in highlights[] with a <mark> span
   - When active=false: mark spans have transparent background
   - When active=true: mark spans animate to --highlight background (smooth transition, 600ms)
   - Use inline styles for the background animation so Tailwind purge doesn't strip it

2. `components/ScenarioCard.tsx`
   - Uses useReveal, useScenario, useSaved hooks
   - Layout from top to bottom:
     a. Scenario type tag (JetBrains Mono, uppercase, --text-secondary)
     b. Scenario text via HighlightText (DM Serif Display, 28px)
     c. RevealButton (below the text)
     d. ModelPanel (appears when revealState >= 'name')
     e. DetailDrawer (appears when revealState === 'full')
     f. Action row: Save button + Screenshot button (appears when revealState >= 'definition')
   - Card styles: bg-surface, border-border, rounded-xl, p-8, max-w-[680px], shadow-card
   - All new elements use fadeUp variant from DESIGN_SYSTEM.md (Framer Motion)

3. `components/RevealButton.tsx`
   - Ghost button style from DESIGN_SYSTEM.md
   - Label: "Reveal the model" (hidden state) | "What is this?" (name state) | "Tell me more" (definition state) | hidden (full state)
   - Each click calls advance() from useReveal
   - Subtle pulse animation while in 'hidden' state to draw attention

4. Wire everything together in `app/page.tsx`
   - Center the ScenarioCard vertically and horizontally
   - Add a "Next →" button below the card (advances to next scenario, resets reveal)
```

---

## Phase 4 — Model Panel & Detail Drawer

```
Read DESIGN_SYSTEM.md, the Collapsible Section spec.

1. `components/ModelPanel.tsx`
   - Props: name (string), short_definition (string), visible (boolean)
   - When visible: animate in with fadeUp
   - Model name: DM Serif Display, 22px, --accent color
   - Subtle --accent-glow behind the name (use a div with glow-accent class)
   - Short definition below in Inter, --text-secondary
   - Divider line between this panel and what's above

2. `components/DetailDrawer.tsx`
   - Props: model (Model type), visible (boolean)
   - Trigger button: "Explore further ↓" — ghost, mono, small
   - When clicked: expands to show four CollapsibleSection components:
     a. "What it is" → model.what_it_is
     b. "Why it matters" → model.why_it_matters  
     c. "Other examples" → render model.examples as a bulleted list
     d. "Common misuse" → model.common_misuse
   - Each section independently open/close
   - First section (What it is) opens by default when drawer appears
   - Smooth height animation with Framer Motion AnimatePresence
   - All text in Inter, --text-secondary, 15px

3. Each CollapsibleSection:
   - Header: JetBrains Mono, 11px, uppercase, letter-spacing wide
   - Chevron rotates on open
   - Body text fades in with height animation
   - Divider between sections
```

---

## Phase 5 — Save & Screenshot

```
Read DESIGN_SYSTEM.md (Screenshot Export section) and lib/storage.ts.

1. `components/SaveButton.tsx`
   - Uses useSaved hook
   - When not saved: Bookmark icon + "Save" label, ghost button
   - When saved: BookmarkCheck icon + "Saved" label, accent-tinted
   - On click: toggle save state
   - Brief scale animation on save (Framer Motion)
   - Persists via useSaved → localStorage

2. `lib/screenshot.ts`
   - Implement captureCard(ref) using html2canvas as specified in DESIGN_SYSTEM.md
   - The ref should point to a custom screenshot-only element (not the full card)

3. `components/ScreenshotTarget.tsx`
   - Hidden div (off-screen via translate, not display:none — html2canvas needs it rendered)
   - Contains: model name (large, centered), scenario excerpt (3 lines max), Cognito wordmark
   - Styled per DESIGN_SYSTEM.md Screenshot Export section
   - Width: 600px fixed

4. `components/ScreenshotButton.tsx`
   - Download icon + "Save image" label, ghost button
   - On click: calls captureCard with the ScreenshotTarget ref
   - Show a brief "Downloading..." loading state

5. Action row in ScenarioCard: arrange Save and Screenshot buttons side by side, right-aligned
```

---

## Phase 6 — Saved View

```
Read PRD.md (Saved Item data model) and lib/storage.ts.

Build the saved collection page.

1. `app/saved/page.tsx`
   - Header: "Your saved models" in DM Serif Display
   - If empty: empty state with message "Nothing saved yet." and a link back to explore
   - Grid of saved cards (2 columns on desktop, 1 on mobile)
   - Each card shows: model name, scenario excerpt (truncated at 2 lines), saved date

2. Saved card component (inline or separate `SavedCardMini.tsx`):
   - Compact version of the card — no interactions, just display
   - Model name: accent color, serif
   - Excerpt: secondary color, small, clamped
   - Date: mono, tertiary color, very small
   - Remove button (X icon) in top-right corner

3. Navigation:
   - Add a subtle nav in layout.tsx with two links: "Explore" (/) and "Saved" (/saved)
   - Mono font, small, right-aligned or centered below the main content area
   - Active link gets accent color
```

---

## Phase 7 — Polish & Responsive

```
Do a full polish pass on the Cognito app. Read DESIGN_SYSTEM.md one more time before starting.

Checklist:

Animations:
- [ ] All Framer Motion animations feel smooth and don't feel like "template" fade-ins
- [ ] Particle system is ambient but noticeable
- [ ] Highlight sweep on scenario text feels satisfying
- [ ] No janky layout shifts during reveal

Typography:
- [ ] DM Serif Display is rendering correctly (check font-feature-settings)
- [ ] No text is too small on mobile (minimum 15px for body)
- [ ] Line heights feel comfortable throughout

Spacing:
- [ ] Card has generous padding on all screen sizes
- [ ] No content touches the viewport edge on mobile
- [ ] Consistent gaps between all sections

Dark mode:
- [ ] Colors look correct — not too flat, not too glowy
- [ ] Borders are visible but not harsh
- [ ] The grid is subtle — barely there

Interactions:
- [ ] All hover states have 150ms transitions
- [ ] Buttons have visible active/pressed states
- [ ] Save button toggle feels crisp
- [ ] "Next" scenario transition is smooth (brief fade of card)

Accessibility:
- [ ] All interactive elements are keyboard focusable
- [ ] Focus indicators are visible (use --accent-glow)
- [ ] prefers-reduced-motion disables particles and animations
- [ ] Sufficient color contrast on all text

Mobile (375px min):
- [ ] Card padding reduces to p-5 on mobile
- [ ] Type scale steps down (display-lg → 22px on mobile)
- [ ] Action row stacks vertically on small screens
- [ ] Saved grid becomes single column

Final:
- [ ] favicon.ico (simple C or brain icon, dark bg)
- [ ] <title> and <meta description> in layout.tsx
- [ ] Remove all console.logs
- [ ] Check for TypeScript errors
```

---

## Utility Prompts

### Add a new scenario to the JSON

```
Open data/scenarios.json. Add a new scenario for the mental model "[MODEL NAME]".

Follow the exact schema already in the file. The scenario should:
- Be a real-world situation or thought experiment, ~100–150 words
- Not name the mental model anywhere in the scenario text
- Include 2–4 highlight phrases that are key to understanding the model
- Have a clear, concise short_definition (1–2 sentences)
- Include 3 examples from different domains (not the same as the scenario)
- Include a genuine common misuse or limitation of the model

After adding, verify the JSON is still valid.
```

### Debug localStorage issues

```
Check lib/storage.ts and hooks/useSaved.ts. I'm having an issue where [DESCRIBE ISSUE].

Make sure:
1. getSaved() handles the case where the key doesn't exist yet (return [])
2. saveItem() doesn't create duplicates (check by id first)
3. The hook re-renders correctly when localStorage changes
4. There are no SSR issues (localStorage is only accessed client-side)
```

### Fix particle performance

```
The particle system in components/ParticleBackground.tsx is causing performance issues.

Optimize it:
1. Reduce particle count to 35
2. Make sure the canvas is sized correctly with devicePixelRatio
3. Ensure the animation loop is cleaned up properly on unmount
4. Cap the mouse repulsion calculation to only run when the mouse has actually moved (use a flag)
5. Memoize the particle initialization so it doesn't re-run on re-renders
```
