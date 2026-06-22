# Cognito — Design System

> The app follows **Material Design 3** (Material You). All decisions here are
> authoritative for the build. Components derive from these tokens — no hardcoded
> values. References: <https://m3.material.io>.

---

## Visual Direction — monochromatic, tech-forward

A sleek dark surface in a **single cool-neutral (achromatic) hue** — near-black
backgrounds, a light-gray accent, **glassy** translucent cards with a soft neutral
**glow**, a faint grid + interactive particles, all expressed through **grayscale
gradients** (no saturated color). Modern geometric display type. Motion is
purposeful and short. (Token names stay `--md-*`; the values carry this direction.)

**Principles:** high-contrast type · generous spacing · glass + hairline borders
· monochrome gradients + glow · pill components · subtle grid/particle ambiance.

---

## Color — monochrome (cool-neutral) on near-black

Defined as `--md-*` custom properties in `app/globals.css` and exposed to Tailwind
as semantic utilities (`bg-surface`, `text-primary`, `border-outline-variant`, …).
`app/globals.css` is the source of truth — always use the role token, never the hex.

| Role | Token | Value |
|------|-------|-------|
| Primary (accent) | `--md-primary` | `#d7dde5` |
| On primary | `--md-on-primary` | `#0a0d11` |
| Primary container | `--md-primary-container` | `#2b313a` |
| On primary container | `--md-on-primary-container` | `#e7ebf1` |
| Secondary container | `--md-secondary-container` | `#232830` |
| Background / Surface | `--md-background` / `--md-surface` | `#07090c` |
| On surface | `--md-on-surface` | `#e8ecf1` |
| On surface variant | `--md-on-surface-variant` | `#9aa4b0` |
| Outline | `--md-outline` | `#3a424d` |
| Outline variant | `--md-outline-variant` | `#1d242c` |

**Tonal surface containers** (lowest → highest):
`#05070a` · `#0b0e13` · `#0f131a` · `#161b22` · `#1c222b`.

Gradients (`.btn-accent`, `.beam`, `.glow`, `.grid-overlay`) are all grayscale.
Subtle press feedback (`lib/sound.ts`) plays a quiet Web Audio tick + a short
vibration, wired through `Ripple`; both respect `prefers-reduced-motion`.

**Surface treatments** (`app/globals.css`): `.glass` (translucent + blur +
hairline, via `color-mix`) for cards, `.glow` (`--md-glow` cyan shadow) behind
key surfaces, `.app-bar` (blurred translucent top bar), `.grid-overlay` (cyan
grid).

---

## Typography

**Typefaces:** **Inter** for body/UI (`--font-sans` → `font-sans`) and **Space
Grotesk** for display/headings (`--font-display` → `font-display`), loaded via
`next/font` in `app/layout.tsx`. Apply `font-display` to large headings (brand,
landing h1, concept name, page titles); everything else uses `font-sans`.

The full M3 type scale lives in `tailwind.config.ts` under `fontSize`. Use the
token class — never an arbitrary `text-[..px]`.

| Token class | Size / line | Tracking | Typical use |
|-------------|-------------|----------|-------------|
| `text-display-large` | 57 / 64 | -0.25 | — |
| `text-headline-large` | 32 / 40 | — | Page title (`/saved`) |
| `text-headline-small` | 24 / 32 | — | Revealed model name |
| `text-title-large` | 22 / 28 | — | App title, card titles |
| `text-title-medium` | 16 / 24 | 0.15 | — |
| `text-title-small` | 14 / 20 | 0.1 | Section headers (drawer) |
| `text-body-large` | 16 / 24 | 0.5 | **Scenario text**, definitions |
| `text-body-medium` | 14 / 20 | 0.25 | Secondary copy |
| `text-label-large` | 14 / 20 | 0.1 | Buttons, nav, chips |
| `text-label-medium` | 12 / 16 | 0.5 | Timestamps, metadata |

Headlines/display: 400. Titles/labels/emphasis: 500 (`font-medium`).

---

## Spacing

Tailwind's 4px scale **is** the M3 4dp grid. Common steps:

| Step | px | Use |
|------|----|-----|
| `2` | 8 | Inline gaps |
| `3` | 12 | Chip / icon-button padding |
| `4`–`5` | 16–20 | Component padding |
| `6` | 24 | Card padding (mobile), section gaps |
| `8` | 32 | Card padding (desktop) |
| `10` | 40 | Column gutter, empty-state padding |

App content max width: `680px` (single column) → `960px` at `lg` (two columns).
Top app bar height: `h-16` (64px). Buttons: `h-10` (40px). Extended FAB: `h-14`.

---

## Shape

M3 shape scale, in `tailwind.config.ts` under `borderRadius`:

| Token class | Radius | Use |
|-------------|--------|-----|
| `rounded-md-xs` | 4px | Inline list-row hit areas |
| `rounded-md-sm` | 8px | Assist chips |
| `rounded-md-md` | 12px | Cards, drawer container |
| `rounded-md-lg` | 16px | FAB |
| `rounded-md-xl` | 28px | Large containers / dialogs |
| `rounded-md-full` | 9999px | Buttons, nav pills, icon buttons |

---

## Elevation & State

**Tonal first, shadow second.** Prefer a higher `surface-container-*` tone to
imply elevation; use shadow utilities only where M3 specifies a cast shadow.

- Shadows: `.md-elevation-1/2/3` (`app/globals.css`) — M3 dark elevation values.
- **State layer:** add `.md-state` to any interactive surface. It paints a
  `currentColor` overlay — 8% hover · 10% focus · 12% press — so each variant
  gets the correct "on" tone automatically.
- Focus: global `:focus-visible` ring (`2px` primary, `2px` offset).

---

## Motion

Easing and duration tokens — `tailwind.config.ts` (`ease-md-*`, `duration-md-*`)
and `lib/motion.ts` (Framer variants). Always respects
`prefers-reduced-motion: reduce` (handled globally in `globals.css`).

| Token | cubic-bezier | Use |
|-------|--------------|-----|
| `md-standard` | `0.2, 0, 0, 1` | Hover, color, height collapse |
| `md-emphasized-decelerate` | `0.05, 0.7, 0.1, 1` | Element **entrances** |
| `md-emphasized-accelerate` | `0.3, 0, 0.8, 0.15` | Element **exits** |

Durations: short 200ms (hover/state) · medium 300ms (expand/collapse) ·
long 400ms (reveal/fade-up). Framer variants `fadeUp`, `cardSwap`,
`staggerContainer` implement these.

---

## Components

| Component | M3 pattern | File |
|-----------|-----------|------|
| Button | Filled / tonal / outlined / text · pill · `h-10` · label-large · state layer · 18px leading icon | `components/ui/Button.tsx` |
| Top app bar | Surface bar, title left, pill text-buttons right (active = secondary-container) | `components/Nav.tsx` |
| Extended FAB | `h-14`, primary-container, elevation-2, leading icon | `app/page.tsx` |
| Card | `surface-container-low`, `rounded-md-md`, elevation-1 | `components/ScenarioCard.tsx` |
| Assist chip | `h-8`, outline-variant border, surface-container, label-large | `components/ScenarioCard.tsx` |
| Outlined card | outline-variant border, no shadow | `components/SavedCardMini.tsx` |
| Expandable item | Title-small header + chevron, animated height | `components/CollapsibleSection.tsx` |
| Icon button | `h-10 w-10`, `rounded-md-full`, state layer, 24px icon | `components/SavedCardMini.tsx` |
| Snackbar | inverse-surface container, body-medium, elevation-3, auto-dismiss 4s, bottom-center | `components/Snackbar.tsx` |
| Badge | small count badge (`h-5`, primary / on-primary) on the Saved destination | `components/Nav.tsx` |
| Ripple | press-origin touch ripple in `currentColor`, clipped to shape | `components/ui/Ripple.tsx` |

**Interaction feedback.** Every interactive surface combines two M3 layers: the
`.md-state` overlay (hover/focus/press tones) and a `<Ripple />` (touch response
from the press point). Render the surface's content in a `relative z-[1]` wrapper
so it sits above both; the host must be `relative overflow-hidden`.

---

## Brand Mark

A stylized brain in line art — `components/BrainLogo.tsx` — built from a lobed,
mirrored silhouette with a central fissure and fold strokes (1.5px, round caps).
It uses `currentColor`; the top app bar tints it `text-primary` beside the
wordmark. The same paths back the favicon (`app/icon.svg`) on a `#1d1b20`
rounded tile with a `#d0bcff` stroke.

---

## Background — Particle Field

`components/Particles.tsx` paints an ambient, cursor-reactive constellation
behind all content (`fixed inset-0 z-0`, `pointer-events-none`; page content
sits in a `relative z-10` wrapper). Particles are tinted with `--md-primary`,
drift slowly, link to neighbours within 130px, and scatter from the pointer
within 120px. Density scales with viewport area (clamped 30–80). Honours
`prefers-reduced-motion` by painting one static frame and skipping animation and
pointer tracking.

---

## Iconography

**`lucide-react`** — clean 2px-stroke outlined icons that read as Material
Symbols (Outlined). Sizing per M3:

- **24px** (`h-6 w-6`) — standalone / icon buttons / FAB.
- **18px** (`h-[18px] w-[18px]`) — inside text & filled buttons (Button applies
  this automatically via `[&_svg]`).
- **20px** (`h-5 w-5`) — dense affordances (collapse chevrons, close `X`).

In use: `ArrowRight`, `ArrowLeft`, `ChevronDown`, `Bookmark` / `BookmarkCheck`,
`Download`, `Loader2`, `X`.

**Per-concept line art.** Beyond the UI icons, every concept (model,
intelligence, fallacy, puzzle) has its own bespoke glyph in the brand line style
(24×24, 1.5px, round, `currentColor`) — `components/ModelIcon.tsx`, keyed by id
(e.g. anchor → Anchoring Bias, scarecrow → Straw Man, parachute → the field
puzzle). They appear in a tonal tile (`surface-container-high`, `text-primary`)
on the revealed concept, the saved cards, and the shareable screenshot. Add a
glyph to the `GLYPHS` map whenever a new concept is added; unknown ids fall back
to a generic mark.

**Nav category icons** use `lucide-react`: Models→`Shapes`,
Intelligence→`Lightbulb`, Fallacies→`AlertTriangle`, Puzzles→`Puzzle`,
Saved→`Bookmark`. Labels show on `sm`+ and collapse to icons on mobile.

---

## Information Architecture & Disclosure (v2)

Four icon-based categories, each presenting one concept at a time and sharing the
`ConceptDetail` reveal. Routes: `/models`, `/intelligence`, `/fallacies`,
`/puzzles`, plus `/saved` and the `/` landing.

`components/ScenarioStream.tsx` drives all of them with a `mode`:

| Mode | Sections | Front interaction | Component |
|------|----------|-------------------|-----------|
| `reveal` | Models, Intelligence | one tap reveals the concept | `ScenarioCard` |
| `choice` | Fallacies | "what would you do?" → pick an option | `ChoiceCard` |
| `flip` | Puzzles | tap → 3D Y-axis flip to the answer | `FlipCard` |

**Disclosure** (`components/ConceptDetail.tsx`) replaces the old click-to-expand
drawer: the lead (glyph + name + definition) appears on reveal; the deeper
sections (*What it is / Why it matters / Examples*) fade in on scroll
(`whileInView`, once) with letter-spaced **eyebrow** labels for skimmability; the
*Common misuse* caveat stays in an auto-animating `CollapsibleSection`. A
bouncing chevron cues scrolling and hides after the first scroll. No "read more".

Reveal is a single step (`hooks/useReveal.ts`: `hidden → revealed`).

**Background:** a subtle fixed line grid (`.grid-overlay` in `globals.css`,
radial-masked) sits under the particle field.

---

## Screenshot Export

`components/ScreenshotTarget.tsx` is an off-screen, fixed 600px card captured by
`html2canvas` (`lib/screenshot.ts`). It intentionally inlines **explicit M3 hex
values** rather than CSS variables, because html2canvas cannot resolve `var(--…)`
reliably. Keep those values in sync with the tokens above when the scheme changes.
