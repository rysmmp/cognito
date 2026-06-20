import type { Variants } from "framer-motion";

// M3 motion easing tokens (cubic-bezier control points).
// https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
const EMPHASIZED_DECELERATE = [0.05, 0.7, 0.1, 1] as const;
const EMPHASIZED_ACCELERATE = [0.3, 0, 0.8, 0.15] as const;

/** Shared fade-up variant for revealed elements. Enters on emphasized-decelerate. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EMPHASIZED_DECELERATE },
  },
};

/** Stagger container for multi-item reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Card cross-fade used when advancing to the next scenario. */
export const cardSwap: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EMPHASIZED_DECELERATE },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: EMPHASIZED_ACCELERATE },
  },
};
