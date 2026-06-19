"use client";

import { useCallback, useState } from "react";

export type RevealState = "hidden" | "name" | "full";

const ORDER: RevealState[] = ["hidden", "name", "full"];

/**
 * Drives the progressive reveal: hidden → name → full. The "full" step reveals
 * the definition, actions, and the "Explore further" drawer together (there is
 * no separate "definition" step / "Tell me more" click).
 */
export function useReveal() {
  const [revealState, setRevealState] = useState<RevealState>("hidden");

  const advance = useCallback(() => {
    setRevealState((prev) => {
      const i = ORDER.indexOf(prev);
      return ORDER[Math.min(i + 1, ORDER.length - 1)];
    });
  }, []);

  const reset = useCallback(() => setRevealState("hidden"), []);

  const atLeast = useCallback(
    (target: RevealState) => ORDER.indexOf(revealState) >= ORDER.indexOf(target),
    [revealState],
  );

  return { revealState, advance, reset, atLeast };
}
