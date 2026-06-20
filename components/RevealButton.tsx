"use client";

import { Button } from "./ui/Button";
import type { RevealState } from "@/hooks/useReveal";

/** Labels for the two interactive reveal steps (the "full" step has no button). */
export interface RevealLabels {
  hidden?: string;
  name?: string;
}

interface RevealButtonProps {
  revealState: RevealState;
  onAdvance: () => void;
  labels?: RevealLabels;
}

const DEFAULT_LABELS: Required<RevealLabels> = {
  hidden: "Reveal the model",
  name: "What is this?",
};

/**
 * M3 filled button driving the progressive reveal. The 'name' step reveals
 * everything (definition + actions + Explore further), so the button is hidden
 * once the reveal is complete ('full'). Labels are configurable per section
 * (e.g. "Reveal the answer" for riddles).
 */
export function RevealButton({ revealState, onAdvance, labels }: RevealButtonProps) {
  const merged = { ...DEFAULT_LABELS, ...labels };
  const label =
    revealState === "hidden"
      ? merged.hidden
      : revealState === "name"
        ? merged.name
        : undefined;
  if (!label) return null;

  return (
    <Button variant="filled" onClick={onAdvance} className="w-full">
      {label}
    </Button>
  );
}
