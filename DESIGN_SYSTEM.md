# Cognito — Design System

> All decisions here are authoritative for the build. Components must derive from these tokens; no hardcoded values.

---

## Visual Direction

**Mood:** Contemplative intelligence. The app should feel like you opened a beautifully designed notebook in a quiet room. Dark, focused, minimal — but with life in it (particles, subtle glow, motion).

**Reference feels:**
- A dim reading lamp late at night
- The UI of a scientific instrument
- A luxury editorial magazine that chose to go dark mode

**Anti-references (avoid):**
- Neon-heavy "hacker" dark mode
- Generic SaaS dashboard
- Flat, cold minimalism with no warmth

---

## Color Palette

```css
:root {
  /* Backgrounds */
  --bg:              #0A0A0F;  /* Near-black with a violet tint */
  --surface:         #111118;  /* Card / primary surface */
  --surface-raised:  #17171F;  /* Elevated panels (drawers, tooltips) */
  --surface-overlay: #1E1E28;  /* Modal-level overlay */

  /* Borders */
  --border:          #2A2A38;  /* Default border */
  --border-subtle:   #1E1E28;  /* Very low contrast dividers */
  --border-accent:   rgba(123, 104, 238, 0.4); /* Accent-tinted border on focus */

  /* Text */
  --text-primary:    #E8E6F0;  /* Main content */
  --text-secondary:  #8A87A0;  /* Labels, metadata, captions */
  --text-tertiary:   #55536A;  /* Disabled, placeholders */
  --text-inverse:    #0A0A0F;  /* Text on light/accent backgrounds */

  /* Accent — Slate Violet */
  --accent:          #7B68EE;  /* Primary accent */
  --accent-light:    #A094F5;  /* Hover state, lighter variant */
  --accent-dark:     #5A4EC4;  /* Pressed state */
  --accent-glow:     rgba(123, 104, 238, 0.15); /* Ambient glow */
  --accent-muted:    rgba(123, 104, 238, 0.08); /* Subtle tint on surfaces */

  /* Highlight (applied to scenario text on reveal) */
  --highlight:       rgba(123, 104, 238, 0.22);
  --highlight-border: rgba(123, 104, 238, 0.5);

  /* Grid */
  --grid:            rgba(255, 255, 255, 0.03);

  /* Semantic */
  --success:         #4ADE80;
  --warning:         #FACC15;
  --error:           #F87171;
}
```

---

## Typography

### Typefaces

| Role | Family | Import |
|------|--------|--------|
| Display | `DM Serif Display` | Google Fonts |
| Body | `Inter` | Google Fonts |
| Mono | `JetBrains Mono` | Google Fonts |

```html
<!-- In <head> or Next.js font config -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Name | Size | Line Height | Weight | Family | Usage |
|------|------|-------------|--------|--------|-------|
| `display-lg` | 28px | 1.65 | 400 | DM Serif Display | Scenario text |
| `display-sm` | 22px | 1.6 | 400 | DM Serif Display | Model name, section headers |
| `body-lg` | 17px | 1.7 | 400 | Inter | Definitions, drawer body |
| `body-md` | 15px | 1.65 | 300–400 | Inter | Secondary content |
| `body-sm` | 13px | 1.6 | 400 | Inter | Captions, helper text |
| `label` | 11px | 1.4 | 500 | JetBrains Mono | Tags, badges, timestamps |
| `label-lg` | 13px | 1.4 | 400 | JetBrains Mono | Nav items, button labels |

### Tailwind Config Additions

```js
// tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      serif: ['DM Serif Display', 'Georgia', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      'display-lg': ['28px', { lineHeight: '1.65' }],
      'display-sm': ['22px', { lineHeight: '1.6' }],
      'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.08em' }],
    }
  }
}
```

---

## Spacing

Uses Tailwind's default 4px base scale. Key values:

| Token | px | Usage |
|-------|----|-------|
| `2` | 8px | Inline gaps, tight labels |
| `4` | 16px | Component internal padding |
| `6` | 24px | Between related sections |
| `8` | 32px | Card padding |
| `12` | 48px | Section-to-section |
| `16` | 64px | Page-level breathing room |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded` | 4px | Labels, badges |
| `rounded-lg` | 8px | Buttons |
| `rounded-xl` | 12px | Cards |
| `rounded-2xl` | 16px | Drawers, panels |

---

## Shadow / Glow

```css
/* Card shadow */
.shadow-card {
  box-shadow: 0 0 0 1px var(--border), 0 4px 24px rgba(0,0,0,0.4);
}

/* Accent glow — used behind revealed model name */
.glow-accent {
  box-shadow: 0 0 40px var(--accent-glow), 0 0 0 1px var(--border-accent);
}

/* Subtle inner glow on hover */
.glow-hover {
  box-shadow: inset 0 0 0 1px var(--accent), 0 0 20px var(--accent-glow);
}
```

---

## Motion

All animations respect `prefers-reduced-motion: reduce`.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Transitions

| Name | Duration | Easing | Usage |
|------|----------|--------|-------|
| `fast` | 150ms | `ease-out` | Hover states, button color |
| `base` | 300ms | `ease-out` | Appear/disappear |
| `reveal` | 500ms | `ease-in-out` | Highlight sweep on text |
| `drawer` | 350ms | `spring` | Collapsible drawer |
| `fade-up` | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Panel entry |

### Framer Motion Variants

```ts
// Shared fade-up variant for revealed elements
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
}

// Stagger container for multi-item reveals
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
}

// Highlight text span
export const highlightSpan = {
  idle: { backgroundColor: 'transparent' },
  highlighted: { 
    backgroundColor: 'var(--highlight)',
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
}
```

---

## Component Library

### Button

```tsx
// Variants: primary | ghost | icon
// Sizes: sm | md

// Primary
<button className="
  px-5 py-2.5 rounded-lg
  bg-accent text-white font-mono text-label-lg
  hover:bg-accent-light active:bg-accent-dark
  transition-colors duration-150
  tracking-wide uppercase
">

// Ghost (default for most actions)
<button className="
  px-5 py-2.5 rounded-lg
  border border-border text-secondary font-mono text-label-lg
  hover:border-accent hover:text-primary
  transition-all duration-150
  tracking-wide uppercase
">
```

### Card

```tsx
<div className="
  bg-surface border border-border rounded-xl
  p-8 max-w-[680px] w-full mx-auto
  shadow-card
">
```

### Tag / Badge

```tsx
<span className="
  font-mono text-label text-secondary
  px-2 py-1 rounded
  bg-surface-raised border border-border-subtle
  uppercase tracking-widest
">
  Thought Experiment
</span>
```

### Divider

```tsx
<hr className="border-none h-px bg-border-subtle my-6" />
```

### Collapsible Section (DrawerItem)

```tsx
// Header triggers open/close
// Body animates height with Framer Motion
<div>
  <button 
    onClick={toggle}
    className="flex items-center justify-between w-full py-3 text-secondary hover:text-primary transition-colors"
  >
    <span className="font-mono text-label uppercase tracking-widest">{title}</span>
    <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
  </button>
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-body-md text-secondary leading-relaxed">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
```

---

## Background System

### Dot Grid (CSS)

```css
.grid-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.04) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
  pointer-events: none;
}
```

### Particle System (`<canvas>`)

- Canvas: `position: fixed`, `z-index: 1`, `pointer-events: none`
- 50 particles, each with:
  - `x`, `y` position (random init)
  - `vx`, `vy` velocity (very slow: ±0.15px/frame)
  - `radius`: 1.5–3px
  - `alpha`: 0.2–0.4
  - `color`: `var(--accent)` computed value
- Mouse interaction: within 80px, repulsion force proportional to `1/distance`
- Loop: `requestAnimationFrame`
- Cleanup: `cancelAnimationFrame` on unmount

---

## Screenshot Export

The screenshot captures a custom `ref`-ed element (not the full page) styled for sharing:

- Background: `--bg`
- Model name: large, centered, serif
- Scenario excerpt: below, secondary color, max 3 lines
- Cognito wordmark: bottom-right, small, mono
- Padding: `40px`
- Width: `600px` (fixed, for consistency)
- Format: `.png`

```ts
// lib/screenshot.ts
import html2canvas from 'html2canvas'

export async function captureCard(ref: React.RefObject<HTMLElement>) {
  if (!ref.current) return
  const canvas = await html2canvas(ref.current, {
    backgroundColor: '#0A0A0F',
    scale: 2,
    useCORS: true,
  })
  const link = document.createElement('a')
  link.download = 'cognito-card.png'
  link.href = canvas.toDataURL('image/png')
  link.click()
}
```

---

## Iconography

Use `lucide-react`. Preferred icons:

| Usage | Icon |
|-------|------|
| Expand drawer | `ChevronDown` |
| Save | `Bookmark` |
| Saved | `BookmarkCheck` |
| Download | `Download` |
| Next | `ArrowRight` |
| Close | `X` |
| Info | `Info` |
