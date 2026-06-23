"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Scenario } from "@/lib/types";
import { fadeUp } from "@/lib/motion";
import { HighlightText } from "./HighlightText";
import { ConceptDetail } from "./ConceptDetail";
import { CardActions } from "./CardActions";
import { HudCorners } from "./HudCorners";
import { ReadAloud } from "./ReadAloud";
import { TypeIllustration } from "./TypeIllustration";
import { Ripple } from "./ui/Ripple";

interface ChoiceCardProps {
  scenario: Scenario;
  onNext: () => void;
}

/**
 * Choice mode (Fallacies): a "what would you do?" scenario with answer options.
 * Picking one locks the answer and reveals the fallacy + breakdown.
 */
export function ChoiceCard({ scenario, onNext }: ChoiceCardProps) {
  const [picked, setPicked] = useState<number | null>(null);
  const choices = scenario.choices ?? [];
  const chosen = picked !== null ? choices[picked] : undefined;
  const answered = picked !== null;

  return (
    <article className="glass relative mx-auto w-full max-w-[720px] rounded-md-md p-6 sm:p-8">
      <HudCorners />

      {answered && (
        <div className="mb-5">
          <ReadAloud scenario={scenario} />
        </div>
      )}

      {/* Dilemma — illustration boxed top-left, text wrapping around it. */}
      <div>
        {!answered && (
          <div className="float-left mb-4 mr-5 grid h-28 w-28 place-items-center rounded-md-md border border-outline-variant bg-surface-container-high text-on-surface-variant sm:mr-7">
            <TypeIllustration id={scenario.type} size={84} />
          </div>
        )}
        <HighlightText
          text={scenario.scenario}
          highlights={scenario.highlights}
          active={answered}
        />
      </div>

      {!answered ? (
        <div className="mt-7 flex flex-col gap-3 clear-both">
          <p className="mb-1 font-sans text-title-small font-medium text-on-surface">
            What would you do?
          </p>
          {choices.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPicked(i)}
              className="md-state relative overflow-hidden rounded-md-lg border border-outline bg-surface-container px-4 py-3 text-left font-sans text-body-medium text-on-surface transition-colors"
            >
              <Ripple />
              <span className="relative z-[1]">{c}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-7 clear-both">
          {chosen && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 rounded-md-md border border-outline-variant bg-surface-container px-4 py-3"
            >
              <p className="font-sans text-label-small font-medium uppercase tracking-[0.12em] text-secondary">
                Your answer
              </p>
              <p className="mt-1 font-sans text-body-medium text-on-surface-variant">
                {chosen}
              </p>
            </motion.div>
          )}
          <ConceptDetail id={scenario.id} model={scenario.model} />
          <CardActions scenario={scenario} onNext={onNext} />
        </div>
      )}
    </article>
  );
}
