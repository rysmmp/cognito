"use client";

import { motion } from "framer-motion";
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

interface ScenarioCardProps {
  scenario: Scenario;
}

/**
 * The heart of the app: scenario text, progressive reveal, model panel, drawer,
 * and the save / screenshot actions. Reveal state lives here; remount via a
 * `key` on the scenario id to reset it when navigating.
 */
export function ScenarioCard({ scenario }: ScenarioCardProps) {
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
            <RevealButton revealState={revealState} onAdvance={advance} />
          )}

          {revealed && (
            <ModelPanel
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
              className="mt-6 flex flex-wrap justify-end gap-3 max-sm:justify-stretch lg:justify-start"
            >
              <SaveButton scenario={scenario} />
              <ScreenshotButton
                targetRef={shotRef}
                filename={`cognito-${scenario.id}.png`}
              />
            </motion.div>
          )}

          <DetailDrawer model={scenario.model} visible={revealState === "full"} />
        </div>
      </div>

      <ScreenshotTarget ref={shotRef} scenario={scenario} />
    </article>
  );
}
