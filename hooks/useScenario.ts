"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * One-at-a-time navigation over any dataset (mental models, intelligences,
 * fallacies, puzzles, or obscure facts). Renders item 0 on the server
 * (deterministic, so SSR and the first client render match), then jumps to a
 * random item after mount. Serves random unseen items; once every item has been
 * seen, the seen-set resets and the loop continues forever.
 */
export function useScenario<T>(data: T[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const seenRef = useRef<Set<number>>(new Set([0]));
  const [history, setHistory] = useState<number[]>([]);
  const didInit = useRef(false);

  const pickNext = useCallback(
    (current: number): number => {
      let pool = data
        .map((_, i) => i)
        .filter((i) => !seenRef.current.has(i) && i !== current);

      // All seen → reset, excluding the current card so it doesn't repeat.
      if (pool.length === 0) {
        seenRef.current = new Set([current]);
        pool = data.map((_, i) => i).filter((i) => i !== current);
      }

      const choice = pool[Math.floor(Math.random() * pool.length)] ?? current;
      seenRef.current.add(choice);
      return choice;
    },
    [data],
  );

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

  const currentScenario = useMemo(
    () => data[currentIndex],
    [data, currentIndex],
  );

  return {
    currentScenario,
    currentIndex,
    nextScenario,
    prevScenario,
    canGoBack: history.length > 0,
    total: data.length,
  };
}
