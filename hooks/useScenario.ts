"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import scenariosData from "@/data/scenarios.json";
import type { Scenario } from "@/lib/types";

const scenarios = scenariosData as Scenario[];

/**
 * Scenario navigation. Renders scenario 0 on the server (deterministic, so SSR
 * and the first client render match), then jumps to a random scenario after
 * mount. Serves random unseen scenarios; once every scenario has been seen, the
 * seen-set resets and the loop continues forever.
 */
export function useScenario() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const seenRef = useRef<Set<number>>(new Set([0]));
  const [history, setHistory] = useState<number[]>([]);
  const didInit = useRef(false);

  const pickNext = useCallback((current: number): number => {
    let pool = scenarios
      .map((_, i) => i)
      .filter((i) => !seenRef.current.has(i) && i !== current);

    // All seen → reset, excluding the current card so it doesn't repeat.
    if (pool.length === 0) {
      seenRef.current = new Set([current]);
      pool = scenarios.map((_, i) => i).filter((i) => i !== current);
    }

    const choice = pool[Math.floor(Math.random() * pool.length)] ?? current;
    seenRef.current.add(choice);
    return choice;
  }, []);

  // Randomize the starting scenario on the client, after hydration.
  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;
    setCurrentIndex((current) => pickNext(current));
  }, [pickNext]);

  const nextScenario = useCallback(() => {
    setCurrentIndex((current) => {
      setHistory((h) => [...h, current]);
      return pickNext(current);
    });
  }, [pickNext]);

  const prevScenario = useCallback(() => {
    setHistory((h) => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setCurrentIndex(prev);
      return h.slice(0, -1);
    });
  }, []);

  const currentScenario = useMemo(() => scenarios[currentIndex], [currentIndex]);

  return {
    currentScenario,
    currentIndex,
    nextScenario,
    prevScenario,
    canGoBack: history.length > 0,
    total: scenarios.length,
  };
}
