"use client";

import { Button } from "./ui/Button";
import type { RevealState } from "@/hooks/useReveal";

/** Per-section override for the single reveal button's label. */
export interface RevealLabels {
  hidden?: string;
}

interface RevealButtonProps {
  revealState: RevealState;
  onAdvance: () => void;
  labels?: RevealLabels;
}

/**
 * The single M3 filled button that triggers the reveal. Once revealed, the
 * concept discloses progressively on scroll, so the button is gone.
 */
export function RevealButton({ revealState, onAdvance, labels }: RevealButtonProps) {
  if (revealState !== "hidden") return null;
  return (
    <Button variant="filled" onClick={onAdvance} className="w-full">
      {labels?.hidden ?? "Reveal the model"}
    </Button>
  );
}
