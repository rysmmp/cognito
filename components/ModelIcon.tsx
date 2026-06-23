import type { ReactNode } from "react";

/**
 * Per-model line-art glyphs. Each entry is keyed by scenario/model id (they map
 * 1:1) and corresponds to the framework it illustrates — e.g. an anchor for
 * Anchoring Bias, an hourglass pinch for the Theory of Constraints, overlapping
 * circles for Bayes' Theorem. All share the brand line style: 24×24, 1.5px
 * stroke, round caps, `currentColor` (filled accents use `fill="currentColor"`).
 */
const GLYPHS: Record<string, ReactNode> = {
  // Lightbulb — what springs easily to mind.
  "availability-heuristic": (
    <>
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.3.2.5.6.5 1V16h6v-1.1c0-.4.2-.8.5-1A6 6 0 0 0 12 3Z" />
      <path d="M9.5 19h5" />
      <path d="M10.5 21.5h3" />
    </>
  ),
  // Eye whose pupil is a checkmark — seeing only what confirms.
  "confirmation-bias": (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <path d="M9.5 12.2l1.7 1.8 3.3-3.6" />
    </>
  ),
  // Anchor — the first number that holds everything in place.
  "anchoring-bias": (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v12" />
      <path d="M8.5 10.5h7" />
      <path d="M5 13a7 7 0 0 0 14 0" />
      <path d="M5 13H3.5M5 13l1.5 1.4M19 13h1.5M19 13l-1.5 1.4" />
    </>
  ),
  // The Dunning–Kruger curve: a confident peak, a valley, a slow climb.
  "dunning-kruger-effect": (
    <>
      <path d="M4 19h16" />
      <path d="M4 19V5" />
      <path d="M5 15c1-8 3-8 4-1 .6 4.5 2 5.5 3.5 2.5 1.3-2.7 4-4 6.5-5.5" />
    </>
  ),
  // Bomber seen from above, dotted where the survivors took hits.
  "survivorship-bias": (
    <>
      <path d="M12 2c-1 0-1.4 1-1.4 2.8v3.4L3.5 12.5v1.8l7.1-2.1v3.9L8.4 19v1.4L12 19.2l3.6 1.2V19l-2.2-1.9v-3.9l7.1 2.1v-1.8l-7.1-4.3V4.8C13.4 3 13 2 12 2Z" />
      <circle cx="10.4" cy="9.5" r=".55" fill="currentColor" stroke="none" />
      <circle cx="13.8" cy="13" r=".55" fill="currentColor" stroke="none" />
      <circle cx="11" cy="15.6" r=".55" fill="currentColor" stroke="none" />
    </>
  ),
  // A picture in a frame — the presentation, not just the content.
  "framing-effect": (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M7 16l3.2-3.4 2.2 2.1 2.4-2.8L18 16" />
      <circle cx="9" cy="10" r="1.1" />
    </>
  ),
  // An atom — reasoning up from fundamentals.
  "first-principles-thinking": (
    <>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </>
  ),
  // A coin falling away — money already spent, chasing it down.
  "sunk-cost-fallacy": (
    <>
      <circle cx="9" cy="9" r="4.2" />
      <path d="M9 6.6v4.8M7.9 8c0-.7.5-1.1 1.3-1.1.7 0 1.1.3 1.1.8M10.1 10.3c0 .6-.5 1-1.3 1-.8 0-1.2-.4-1.2-.9" />
      <path d="M16 11v7M13.4 15.4 16 18l2.6-2.6" />
    </>
  ),
  // Opposed up/down arrows — reasoning from the reverse.
  inversion: (
    <>
      <path d="M8 20V4M8 4 5.5 6.6M8 4l2.5 2.6" />
      <path d="M16 4v16M16 20l-2.5-2.6M16 20l2.5-2.6" />
    </>
  ),
  // Toppling dominoes — consequences of consequences.
  "second-order-thinking": (
    <>
      <path d="M3 19h18" />
      <path d="M5 17V7" />
      <path d="M9.2 17l.8-9.5" />
      <path d="M13.4 17l2.4-8.6" />
      <path d="M17.6 17l4.2-7.2" />
    </>
  ),
  // A razor — shave away needless assumptions.
  "occams-razor": (
    <>
      <path d="M3 8h12a3 3 0 0 1 3 3v1H3V8Z" />
      <path d="M18 11.5l2.5-3.5" />
      <path d="M6 12v3M9 12v4M12 12v3M15 12v4" />
    </>
  ),
  // Two arrows chasing a circle — a reinforcing loop.
  "feedback-loops": (
    <>
      <path d="M6 7a8 8 0 0 1 12.5-1" />
      <path d="M19 3.2 18.6 6.7l-3.4-.6" />
      <path d="M18 17a8 8 0 0 1-12.5 1" />
      <path d="M5 20.8 5.4 17.3l3.4.6" />
    </>
  ),
  // A carrot — the dangled incentive.
  "incentive-caused-bias": (
    <>
      <path d="M5 19.5c-.6.6-1.9-.7-1.3-1.3l9.5-9.5 1.3 1.3-9.5 9.5Z" />
      <path d="M13.5 8.5c.6-1.8 2.2-2.6 3.8-2.2-.2 1.7-1.3 2.8-3 3" />
      <path d="M14.2 9.2c1.8-.5 3.4.2 4 1.8-1.6.6-3 .2-3.9-.9" />
      <path d="M6.6 15.4l1.4 1.4M9.1 12.9l1.4 1.4" />
    </>
  ),
  // A bullseye struck dead-center — the measure that became the target.
  "goodharts-law": (
    <>
      <circle cx="11" cy="13" r="8" />
      <circle cx="11" cy="13" r="4.5" />
      <circle cx="11" cy="13" r="1.2" fill="currentColor" stroke="none" />
      <path d="M11 13 20.5 3.5M16.5 3.5h4v4" />
    </>
  ),
  // A field of cases, one in many — the base rate.
  "base-rate-neglect": (
    <>
      {[7.5, 12, 16.5].map((y) =>
        [5.5, 9.83, 14.16, 18.5].map((x) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="1.3"
            {...(x === 9.83 && y === 12
              ? { fill: "currentColor", stroke: "none" }
              : {})}
          />
        )),
      )}
    </>
  ),
  // A jagged signal settling back toward the dashed mean.
  "regression-to-the-mean": (
    <>
      <path d="M3 12h18" strokeDasharray="2 2" />
      <polyline points="3,13 6,4 9,17 12,9 15,14 18,11 21,12" />
    </>
  ),
  // A small crowd — looking to others for the cue.
  "social-proof": (
    <>
      <circle cx="7.5" cy="9.5" r="2.1" />
      <path d="M4 18a3.5 3.5 0 0 1 7 0" />
      <circle cx="16.5" cy="9.5" r="2.1" />
      <path d="M13 18a3.5 3.5 0 0 1 7 0" />
      <circle cx="12" cy="7.4" r="2.4" />
      <path d="M7.8 17.5a4.2 4.2 0 0 1 8.4 0" />
    </>
  ),
  // A shield with a check — a buffer against the unexpected.
  "margin-of-safety": (
    <>
      <path d="M12 3l7 2.4v5.1c0 4.8-3 7.9-7 9.5-4-1.6-7-4.7-7-9.5V5.4L12 3Z" />
      <path d="M9 12l2 2 4-4.2" />
    </>
  ),
  // A folded map with a pin — the model, not the terrain.
  "map-is-not-the-territory": (
    <>
      <path d="M3 6.5 9 4.5l6 2 6-2v13l-6 2-6-2-6 2V6.5Z" />
      <path d="M9 4.5v13M15 6.5v13" />
      <path d="M12 9.3a1.7 1.7 0 0 0-1.7 1.7c0 1.3 1.7 3.1 1.7 3.1s1.7-1.8 1.7-3.1A1.7 1.7 0 0 0 12 9.3Z" />
    </>
  ),
  // A die — probability-weighted outcomes.
  "expected-value": (
    <>
      <rect x="5.5" y="5.5" width="13" height="13" rx="2.5" />
      <circle cx="9" cy="9" r=".9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="9" r=".9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none" />
      <circle cx="9" cy="15" r=".9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="15" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  // A balance tipped to the loss — losses outweigh equal gains.
  "loss-aversion": (
    <>
      <path d="M4 8.4l16-3.4" />
      <path d="M12 5v8" />
      <path d="M9.5 16h5M12 13v3" />
      <path d="M4 8.4V12" />
      <circle cx="4" cy="14.5" r="2.5" />
      <path d="M20 5v2" />
      <circle cx="20" cy="8.4" r="1.3" />
    </>
  ),
  // A flock of small marks — order emerging from simple rules.
  emergence: (
    <>
      <path d="M5 9l1.3 1.3L7.6 9" />
      <path d="M9.5 6.5l1.3 1.3 1.3-1.3" />
      <path d="M14.4 8l1.3 1.3L17 8" />
      <path d="M7.2 13l1.3 1.3 1.3-1.3" />
      <path d="M12 12.5l1.3 1.3 1.3-1.3" />
      <path d="M10 17l1.3 1.3 1.3-1.3" />
    </>
  ),
  // A gift — the unsolicited favor that asks to be returned.
  reciprocity: (
    <>
      <rect x="4" y="9.5" width="16" height="10" rx="1" />
      <path d="M3 9.5h18" />
      <path d="M12 9.5v10" />
      <path d="M12 9.5C10.8 6.5 6.6 6.8 7.4 8.7c.6 1.4 3.1 1 4.6.8" />
      <path d="M12 9.5C13.2 6.5 17.4 6.8 16.6 8.7c-.6 1.4-3.1 1-4.6.8" />
    </>
  ),
  // An hourglass — everything throttled by a single narrow point.
  "theory-of-constraints": (
    <>
      <path d="M6.5 3h11v2l-5.5 7 5.5 7v2h-11v-2l5.5-7-5.5-7V3Z" />
      <path d="M8 6.5h8" />
      <circle cx="12" cy="12" r=".5" fill="currentColor" stroke="none" />
    </>
  ),
  // Overlapping circles — conditional probability, prior meets evidence.
  "bayes-theorem": (
    <>
      <circle cx="9.5" cy="12" r="5.5" />
      <circle cx="14.5" cy="12" r="5.5" />
    </>
  ),

  // ——— Intelligences (Gardner's multiple intelligences) ———

  // Speech bubble with lines of text — facility with language.
  "linguistic-intelligence": (
    <>
      <path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 3.5V17.5H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5Z" />
      <path d="M6.5 9.5h11M6.5 12.5h7" />
    </>
  ),
  // Operators in a calculator frame — reasoning and number.
  "logical-mathematical-intelligence": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M6 7.5h3M7.5 6v3" />
      <path d="M15 7.5h3" />
      <path d="M6.1 14.6l2.8 2.8M8.9 14.6l-2.8 2.8" />
      <path d="M15 16.5h3" />
      <circle cx="16.5" cy="14.6" r=".55" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="18.4" r=".55" fill="currentColor" stroke="none" />
    </>
  ),
  // A cube to rotate in the mind's eye — spatial reasoning.
  "spatial-intelligence": (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 3v9M4 7.5l8 4.5 8-4.5" />
    </>
  ),
  // An eighth note — sensitivity to pitch, rhythm, melody.
  "musical-intelligence": (
    <>
      <ellipse cx="8" cy="16.8" rx="2.6" ry="2" fill="currentColor" stroke="none" />
      <path d="M10.6 16.8V5.2" />
      <path d="M10.6 5.2c4 .6 6.4 2.4 5.2 6" />
    </>
  ),
  // A figure in motion — thinking through the body.
  "bodily-kinesthetic-intelligence": (
    <>
      <circle cx="15" cy="4" r="2" />
      <path d="M14.6 6.2 12 12.5" />
      <path d="M9.5 7l4.2 1.3 3.3-1.6" />
      <path d="M12 12.5l3.6 2.8-.6 3.4M12 12.5l-2.8 3-2.6 1.4" />
    </>
  ),
  // Two figures — reading and moving other people.
  "interpersonal-intelligence": (
    <>
      <circle cx="8" cy="8.5" r="2.4" />
      <path d="M3.8 18v-.5a4.2 4.2 0 0 1 8.4 0v.5" />
      <circle cx="16" cy="8.5" r="2.4" />
      <path d="M11.8 18v-.5a4.2 4.2 0 0 1 8.4 0v.5" />
    </>
  ),
  // A figure turned inward within a circle — self-knowledge.
  "intrapersonal-intelligence": (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="9.8" r="2.3" />
      <path d="M7.5 17.2a4.6 4.6 0 0 1 9 0" />
      <circle cx="12" cy="9.8" r=".6" fill="currentColor" stroke="none" />
    </>
  ),
  // A leaf with veins — reading and classifying the natural world.
  "naturalistic-intelligence": (
    <>
      <path d="M5 19c-1-9 5-15 15-15 1 9-5 15-15 15Z" />
      <path d="M5 19C9 15 13 11 19 5" />
      <path d="M9.5 13.5l3.2.6M13 10l3.2.6" />
    </>
  ),

  // ——— Riddles / lateral-thinking puzzles ———

  // An elevator panel with up/down arrows.
  "elevator-man": (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M5 12h14" />
      <path d="M12 6l-2 2.5h4z" />
      <path d="M12 18l-2-2.5h4z" />
    </>
  ),
  // A parachute over a tiny figure.
  "parachute-field": (
    <>
      <path d="M3 11a9 9 0 0 1 18 0Z" />
      <path d="M5 11l7 4 7-4M12 11v4" />
      <circle cx="12" cy="17.6" r="1.6" />
    </>
  ),
  // A fish (Romeo and Juliet).
  "romeo-juliet-fish": (
    <>
      <path d="M3 12c3-4.5 9-4.5 13 0-4 4.5-10 4.5-13 0Z" />
      <path d="M16 12l4-3v6z" />
      <circle cx="6.5" cy="10.8" r=".7" fill="currentColor" stroke="none" />
    </>
  ),
  // A top hat — the Monopoly token.
  "monopoly-bankrupt": (
    <>
      <path d="M8 3.5h8v10H8z" />
      <rect x="4" y="13.5" width="16" height="3" rx="1" />
      <path d="M8 6h8" />
    </>
  ),
  // A glass of water.
  "hiccups-cure": (
    <>
      <path d="M7 4h10l-1.3 16H8.3L7 4Z" />
      <path d="M7.6 9.5h8.8" />
    </>
  ),
  // Two footprints.
  "footsteps-riddle": (
    <>
      <ellipse cx="8.5" cy="8" rx="2.1" ry="3" />
      <ellipse cx="8.5" cy="12.4" rx="1.5" ry="1.1" />
      <ellipse cx="15" cy="12" rx="2.1" ry="3" />
      <ellipse cx="15" cy="16.4" rx="1.5" ry="1.1" />
    </>
  ),
  // Sound radiating from a source — an echo.
  "echo-riddle": (
    <>
      <circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M9 8.5a5 5 0 0 1 0 7" />
      <path d="M12.5 6a9 9 0 0 1 0 12" />
      <path d="M16 3.5a13 13 0 0 1 0 17" />
    </>
  ),
  // A toggle switch.
  "three-light-switches": (
    <>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <circle cx="15.5" cy="12" r="2.6" fill="currentColor" stroke="none" />
    </>
  ),

  // ——— Fallacies (logical / argumentation) ———

  // A scarecrow — the straw man.
  "straw-man": (
    <>
      <circle cx="12" cy="4.5" r="2.2" />
      <path d="M12 6.7v10.3" />
      <path d="M4.5 10h15" />
      <path d="M12 17l-3 4M12 17l3 4" />
      <path d="M4.5 10l-1.5-1.5M4.5 10l-1 2M19.5 10l1.5-1.5M19.5 10l1 2" />
    </>
  ),
  // An arrow aimed at the person, not the argument.
  "ad-hominem": (
    <>
      <circle cx="8" cy="8" r="3" />
      <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
      <path d="M21 7l-6 3.5" />
      <path d="M21 7l-3 .3M21 7l-.4 3" />
    </>
  ),
  // A two-way fork — only two options offered.
  "false-dilemma": (
    <>
      <path d="M12 21v-7" />
      <path d="M12 14 6 5M12 14l6-9" />
      <circle cx="6" cy="4" r="1.4" />
      <circle cx="18" cy="4" r="1.4" />
    </>
  ),
  // A ball rolling down a slope.
  "slippery-slope": (
    <>
      <path d="M3 6c7 0 8 12 18 13" />
      <circle cx="5.5" cy="6.6" r="2" />
      <path d="M21 19l-2.6-.3M21 19l-.3-2.6" />
    </>
  ),
  // A crown — appeal to authority.
  "appeal-to-authority": (
    <>
      <path d="M4 8l3.5 3.5L12 5l4.5 6.5L20 8v9H4V8Z" />
      <path d="M4 20h16" />
    </>
  ),
  // A leap from a tiny sample to a big conclusion.
  "hasty-generalization": (
    <>
      <circle cx="4.5" cy="7" r="1.4" />
      <circle cx="4.5" cy="13" r="1.4" />
      <path d="M8 10h5M13 10l-2.2-2M13 10l-2.2 2" />
      <circle cx="18" cy="10" r="3.5" />
    </>
  ),
  // Two events linked by a dashed (questionable) causal arrow.
  "post-hoc": (
    <>
      <circle cx="5.5" cy="12" r="3" />
      <circle cx="18.5" cy="12" r="3" />
      <path d="M9 12h6" strokeDasharray="2 2" />
      <path d="M15 12l-2-2M15 12l-2 2" />
    </>
  ),
  // A wagon — the bandwagon.
  "bandwagon": (
    <>
      <path d="M4 7h11l1.5 7H5.5L4 7Z" />
      <path d="M4 7 3 4H2" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="15" cy="18" r="2" />
    </>
  ),
};

/** Fallback when an id has no bespoke glyph. */
const FALLBACK: ReactNode = (
  <>
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="8.5" />
  </>
);

interface ModelIconProps {
  /** Scenario / model id (e.g. "anchoring-bias"). */
  id: string;
  className?: string;
  /** Pixel size of the square glyph. Defaults to 28. */
  size?: number;
  /** When true, the strokes draw themselves in on mount (`.lineart-animated`). */
  animated?: boolean;
}

export function ModelIcon({ id, className, size = 28, animated = false }: ModelIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={[animated ? "lineart-animated" : "", className ?? ""].join(" ").trim() || undefined}
      aria-hidden="true"
    >
      {GLYPHS[id] ?? FALLBACK}
    </svg>
  );
}
