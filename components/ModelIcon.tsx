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
}

export function ModelIcon({ id, className, size = 28 }: ModelIconProps) {
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
      className={className}
      aria-hidden="true"
    >
      {GLYPHS[id] ?? FALLBACK}
    </svg>
  );
}
