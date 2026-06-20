"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useScenario } from "@/hooks/useScenario";
import { cardSwap } from "@/lib/motion";
import { ScenarioCard } from "@/components/ScenarioCard";
import type { RevealLabels } from "@/components/RevealButton";
import type { Scenario } from "@/lib/types";

/**
 * The scenario → reveal experience, driven by whichever dataset is passed in
 * (mental models on /explore, intelligences on /intelligences, riddles on
 * /riddles). Identical format either way; `revealLabels` lets a section retune
 * the reveal-button wording.
 */
export function ScenarioStream({
  data,
  revealLabels,
}: {
  data: Scenario[];
  revealLabels?: RevealLabels;
}) {
  const { currentScenario, nextScenario } = useScenario(data);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[680px] lg:max-w-[960px]">
        {/* initial={false} → the first card paints in its visible state (and is
            present in the SSR HTML), so it never flashes blank before JS loads.
            Subsequent scenario swaps via "Next" still animate. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentScenario.id}
            variants={cardSwap}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ScenarioCard
              scenario={currentScenario}
              onNext={nextScenario}
              revealLabels={revealLabels}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
