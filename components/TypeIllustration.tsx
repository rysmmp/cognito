import type { ReactNode } from "react";

/**
 * Larger isometric line-art illustrations (Armory-style) shown as a card's
 * centerpiece before the reveal — one per scenario kind. 96×96 viewBox,
 * `currentColor` strokes. Keyed by an illustration id (a scenario `type` or a
 * section name like "intelligence").
 */
const ILLOS: Record<string, ReactNode> = {
  // Real-World Case — an isometric building.
  real_world: (
    <>
      <path d="M48 14 72 26 48 38 24 26Z" />
      <path d="M24 26V70L48 82V38" />
      <path d="M72 26V70L48 82V38" />
      <path d="M48 38V82" />
      <path d="M24 41 48 53 72 41" />
      <path d="M24 54 48 66 72 54" />
    </>
  ),
  // Thought Experiment — a conical lab flask with bubbles.
  thought_experiment: (
    <>
      <ellipse cx="48" cy="18" rx="7" ry="2" />
      <path d="M42 18.5V35M54 18.5V35" />
      <path d="M42 35 26 74M54 35 70 74" />
      <path d="M26 74a22 4 0 0 0 44 0" />
      <path d="M26 74a22 4 0 0 1 44 0" strokeDasharray="3 3" opacity="0.5" />
      <path d="M33 62a15 3 0 0 0 30 0" />
      <circle cx="45" cy="56" r="2" />
      <circle cx="52.5" cy="50" r="1.5" />
      <circle cx="46" cy="47" r="1" />
    </>
  ),
  // Puzzle — an isometric cube with a 2×2 grid (Rubik's-style).
  puzzle: (
    <>
      <path d="M48 18 78 33 48 48 18 33Z" />
      <path d="M18 33V63L48 80V48" />
      <path d="M78 33V63L48 80V48" />
      <path d="M48 48V80" />
      <path d="M63 25.5 33 40.5M33 25.5 63 40.5" />
      <path d="M33 40.5V71.5M18 48 48 64" />
      <path d="M63 40.5V71.5M78 48 48 64" />
    </>
  ),
  // What would you do? — balance scales weighing the options.
  dilemma: (
    <>
      <path d="M48 18l-4 6h8z" />
      <path d="M48 24V64" />
      <path d="M40 64h16M44 64l-5 8M52 64l5 8M34 72h28" />
      <path d="M22 26H74" />
      <path d="M24 26 20 36M24 26 28 36M16 36a8 3 0 0 0 16 0" />
      <path d="M72 26 68 36M72 26 76 36M64 36a8 3 0 0 0 16 0" />
    </>
  ),
  // Obscure facts — a magnifying glass discovering a spark of insight.
  obscure: (
    <>
      <circle cx="40" cy="40" r="22" />
      <path d="M56 56 73 73" />
      <path d="M40 30l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
    </>
  ),
  // Intelligence — an isometric microchip with pins and a die.
  intelligence: (
    <>
      <path d="M48 30 70 42 48 54 26 42Z" />
      <path d="M26 42V49L48 61V54" />
      <path d="M70 42V49L48 61V54" />
      <path d="M48 54V61" />
      <path d="M48 36 59 42 48 48 37 42Z" />
      <path d="M53.5 51l3.5 4M59 48l3.5 4M64.5 45l3.5 4" />
      <path d="M42.5 51l-3.5 4M37 48l-3.5 4M31.5 45l-3.5 4" />
    </>
  ),
};

/** Fallback — a simple isometric cube. */
const FALLBACK: ReactNode = (
  <>
    <path d="M48 20 76 36 48 52 20 36Z" />
    <path d="M20 36V64L48 80V52" />
    <path d="M76 36V64L48 80V52" />
    <path d="M48 52V80" />
  </>
);

interface TypeIllustrationProps {
  id: string;
  className?: string;
  /** Pixel size of the square illustration. Defaults to 112. */
  size?: number;
}

export function TypeIllustration({ id, className, size = 112 }: TypeIllustrationProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ILLOS[id] ?? FALLBACK}
    </svg>
  );
}
