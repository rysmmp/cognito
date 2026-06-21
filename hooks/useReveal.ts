"use client";

import { useCallback, useState } from "react";

export type RevealState = "hidden" | "revealed";

/**
 * Single-step reveal: hidden → revealed. One tap shows the concept; the deeper
 * sections then disclose progressively on scroll (see ConceptDetail). There is
 * no intermediate step or "read more" click.
 */
export function useReveal() {
  const [revealState, setRevealState] = useState<RevealState>("hidden");

  const advance = useCallback(() => setRevealState("revealed"), []);
  const reset = useCallback(() => setRevealState("hidden"), []);
  const revealed = revealState === "revealed";

  return { revealState, revealed, advance, reset };
}
