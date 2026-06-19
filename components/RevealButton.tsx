"use client";

import { Button } from "./ui/Button";
import type { RevealState } from "@/hooks/useReveal";

interface RevealButtonProps {
  revealState: RevealState;
  onAdvance: () => void;
}

const LABELS: Partial<Record<RevealState, string>> = {
  hidden: "Reveal the model",
  name: "What is this?",
};

/**
 * M3 filled button driving the progressive reveal. The 'name' step ("What is
 * this?") reveals everything (definition + actions + Explore further), so the
 * button is hidden once the reveal is complete ('full').
 */
export function RevealButton({ revealState, onAdvance }: RevealButtonProps) {
  const label = LABELS[revealState];
  if (!label) return null;

  return (
    <Button variant="filled" onClick={onAdvance}>
      {label}
    </Button>
  );
}
