"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import type { ObscureFact } from "@/lib/types";
import { fadeUp } from "@/lib/motion";
import { HighlightText } from "./HighlightText";
import { RevealButton } from "./RevealButton";
import { HudCorners } from "./HudCorners";
import { TypeIllustration } from "./TypeIllustration";
import { FactSaveButton } from "./FactSaveButton";
import { Ripple } from "./ui/Ripple";

interface FactCardProps {
  fact: ObscureFact;
  onNext: () => void;
}

/**
 * A single obscure fact as a card: the statement up front, tap to reveal why
 * it's true, then save it or move on.
 */
export function FactCard({ fact, onNext }: FactCardProps) {
  const { revealState, revealed, advance } = useReveal();

  return (
    <article className="glass relative mx-auto w-full max-w-[680px] rounded-md-md p-6 sm:p-8">
      <HudCorners />

      <span className="mb-5 inline-flex h-7 items-center rounded-md-sm border border-outline-variant bg-surface-container px-2.5 font-sans text-label-small font-medium uppercase tracking-[0.12em] text-on-surface-variant">
        Obscure Fact
      </span>

      <div className="flex items-start gap-5 sm:gap-8">
        <div className="min-w-0 flex-1">
          <HighlightText text={fact.fact} highlights={[]} active />
        </div>
        <div className="shrink-0 self-center text-on-surface-variant">
          <TypeIllustration id="obscure" size={104} />
        </div>
      </div>

      {!revealed ? (
        <div className="mt-7">
          <RevealButton
            revealState={revealState}
            onAdvance={advance}
            labels={{ hidden: "Reveal why" }}
          />
        </div>
      ) : (
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-7">
          <div className="border-t border-outline-variant pt-5">
            <p className="mb-2 font-sans text-label-small font-medium uppercase tracking-[0.16em] text-secondary">
              Why it&rsquo;s true
            </p>
            <p className="font-sans text-body-large text-on-surface-variant">{fact.detail}</p>
          </div>

          <div className="mt-7 flex flex-col gap-3">
            <FactSaveButton fact={fact} />
            <button
              type="button"
              onClick={onNext}
              className="md-state relative inline-flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-md-full bg-primary-container px-6 font-sans text-label-large font-medium text-on-primary-container transition-colors duration-150 ease-md-standard"
            >
              <Ripple />
              <span className="relative z-[1] inline-flex items-center gap-2">
                <ArrowRight className="h-[18px] w-[18px]" />
                Next
              </span>
            </button>
          </div>
        </motion.div>
      )}
    </article>
  );
}
