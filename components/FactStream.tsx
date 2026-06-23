"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useScenario } from "@/hooks/useScenario";
import { cardSwap } from "@/lib/motion";
import { FactCard } from "./FactCard";
import type { ObscureFact } from "@/lib/types";

/** One obscure fact at a time, reveal-and-save, matching the other sections. */
export function FactStream({ facts }: { facts: ObscureFact[] }) {
  const { currentScenario: fact, nextScenario: next } = useScenario(facts);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[680px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={fact.id}
            variants={cardSwap}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <FactCard fact={fact} onNext={next} />
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
