"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import type { Scenario } from "@/lib/types";
import { TYPE_LABEL } from "@/lib/types";
import { fadeUp } from "@/lib/motion";
import { HighlightText } from "./HighlightText";
import { RevealButton } from "./RevealButton";
import { ModelPanel } from "./ModelPanel";
import { DetailDrawer } from "./DetailDrawer";
import { SaveButton } from "./SaveButton";
import { ScreenshotButton } from "./ScreenshotButton";
import { ScreenshotTarget } from "./ScreenshotTarget";
import type { RevealLabels } from "./RevealButton";
import { Ripple } from "./ui/Ripple";

interface ScenarioCardProps {
  scenario: Scenario;
  /** Advance to the next scenario (the bottom button in the action stack). */
  onNext: () => void;
  /** Override the reveal-button labels (e.g. "Reveal the answer" for riddles). */
  revealLabels?: RevealLabels;
}

/**
 * The heart of the app: scenario text, progressive reveal, model panel, drawer,
 * and the save / screenshot actions. Reveal state lives here; remount via a
 * `key` on the scenario id to reset it when navigating.
 */
export function ScenarioCard({ scenario, onNext, revealLabels }: ScenarioCardProps) {
  const { revealState, advance, atLeast } = useReveal();
  const shotRef = useRef<HTMLDivElement>(null);

  const revealed = atLeast("name");
  const showActions = atLeast("full");

  return (
    <article className="md-elevation-1 mx-auto w-full max-w-[680px] rounded-md-md bg-surface-container-low p-6 sm:p-8 lg:max-w-[960px]">
      {/* lg+ → two columns (scenario | model); below lg the columns stack,
          preserving the original tablet/mobile order. */}
      <div className="lg:flex lg:items-start lg:gap-10">
        {/* LEFT — the scenario */}
        <div className="lg:min-w-0 lg:flex-1">
          {/* M3 assist chip */}
          <span className="mb-5 inline-flex h-8 items-center rounded-md-sm border border-outline-variant bg-surface-container px-3 font-sans text-label-large font-medium text-on-surface-variant">
            {TYPE_LABEL[scenario.type]}
          </span>

          <HighlightText
            text={scenario.scenario}
            highlights={scenario.highlights}
            active={revealed}
          />
        </div>

        {/* RIGHT — reveal, model, actions, details */}
        <div className="mt-7 lg:mt-0 lg:w-[320px] lg:shrink-0 lg:border-l lg:border-outline-variant lg:pl-10">
          {revealState !== "full" && (
            <RevealButton
              revealState={revealState}
              onAdvance={advance}
              labels={revealLabels}
            />
          )}

          {revealed && (
            <ModelPanel
              id={scenario.id}
              name={scenario.model.name}
              shortDefinition={scenario.model.short_definition}
              showDefinition={atLeast("full")}
            />
          )}

          {showActions && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-col gap-3"
            >
              <SaveButton scenario={scenario} />
              <ScreenshotButton
                targetRef={shotRef}
                filename={`cognito-${scenario.id}.png`}
              />
            </motion.div>
          )}

          <DetailDrawer model={scenario.model} visible={revealState === "full"} />

          {/* Bottom of the action stack: advance to the next scenario. Same M3
              pill shape (rounded-full, h-10, label-large) as the other CTAs,
              distinguished only by its filled primary-container tone. */}
          <button
            type="button"
            onClick={onNext}
            className="md-state relative mt-6 inline-flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-md-full bg-primary-container px-6 font-sans text-label-large font-medium text-on-primary-container transition-[background-color,box-shadow] duration-150 ease-md-standard"
          >
            <Ripple />
            <span className="relative z-[1] inline-flex items-center gap-2">
              <ArrowRight className="h-[18px] w-[18px]" />
              Next scenario
            </span>
          </button>
        </div>
      </div>

      <ScreenshotTarget ref={shotRef} scenario={scenario} />
    </article>
  );
}
