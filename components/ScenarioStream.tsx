"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useScenario } from "@/hooks/useScenario";
import { cardSwap } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { ScenarioCard } from "./ScenarioCard";
import { ChoiceCard } from "./ChoiceCard";
import { FlipCard } from "./FlipCard";
import type { RevealLabels } from "./RevealButton";
import type { Scenario } from "@/lib/types";

export type StreamMode = "reveal" | "choice" | "flip";

/**
 * The one-at-a-time experience for any category. `mode` selects the front
 * interaction: tap-to-reveal (Models/Intelligence), pick-a-choice (Fallacies),
 * or flip (Puzzles). All share the ConceptDetail reveal underneath.
 */
export function ScenarioStream({
  data,
  mode = "reveal",
  revealLabels,
  category,
}: {
  data: Scenario[];
  mode?: StreamMode;
  revealLabels?: RevealLabels;
  /** Section name, used to pick the cover illustration (e.g. "intelligence"). */
  category?: string;
}) {
  const { currentScenario, nextScenario } = useScenario(data);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-10">
      <div
        className={cn(
          "w-full",
          mode === "flip" ? "max-w-[680px]" : "max-w-[680px] lg:max-w-[960px]",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentScenario.id}
            variants={cardSwap}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {mode === "choice" ? (
              <ChoiceCard scenario={currentScenario} onNext={nextScenario} />
            ) : mode === "flip" ? (
              <FlipCard scenario={currentScenario} onNext={nextScenario} />
            ) : (
              <ScenarioCard
                scenario={currentScenario}
                onNext={nextScenario}
                revealLabels={revealLabels}
                category={category}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
