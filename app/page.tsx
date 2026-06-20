"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScenario } from "@/hooks/useScenario";
import { cardSwap } from "@/lib/motion";
import { ScenarioCard } from "@/components/ScenarioCard";
import { Ripple } from "@/components/ui/Ripple";

export default function Home() {
  const { currentScenario, nextScenario } = useScenario();

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
            <ScenarioCard scenario={currentScenario} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center">
          {/* M3 extended FAB */}
          <button
            type="button"
            onClick={nextScenario}
            className="md-state md-elevation-2 relative inline-flex h-14 items-center overflow-hidden rounded-md-lg bg-primary-container pl-5 pr-6 font-sans text-label-large font-medium text-on-primary-container transition-shadow duration-150 ease-md-standard"
          >
            <Ripple />
            <span className="relative z-[1] inline-flex items-center gap-3">
              <ArrowRight className="h-6 w-6" />
              Next scenario
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
