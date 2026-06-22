"use client";

import { useReveal } from "@/hooks/useReveal";
import type { Scenario } from "@/lib/types";
import { TYPE_LABEL } from "@/lib/types";
import { HighlightText } from "./HighlightText";
import { RevealButton, type RevealLabels } from "./RevealButton";
import { ConceptDetail } from "./ConceptDetail";
import { CardActions } from "./CardActions";
import { HudCorners } from "./HudCorners";

interface ScenarioCardProps {
  scenario: Scenario;
  onNext: () => void;
  revealLabels?: RevealLabels;
}

/**
 * Reveal mode (Models, Intelligence): a scenario, one tap to reveal the concept,
 * then the deeper sections disclose on scroll. Two columns on desktop
 * (scenario | concept), stacked on mobile.
 */
export function ScenarioCard({ scenario, onNext, revealLabels }: ScenarioCardProps) {
  const { revealState, revealed, advance } = useReveal();

  return (
    <article className="glass glow relative mx-auto w-full max-w-[680px] rounded-md-md p-6 sm:p-8 lg:max-w-[960px]">
      <HudCorners />
      <div className="lg:flex lg:items-start lg:gap-10">
        {/* LEFT — the scenario */}
        <div className="lg:min-w-0 lg:flex-1">
          <span className="mb-5 inline-flex h-7 items-center rounded-md-sm border border-outline-variant bg-surface-container px-2.5 font-sans text-label-small font-medium uppercase tracking-[0.12em] text-on-surface-variant">
            {TYPE_LABEL[scenario.type]}
          </span>
          <HighlightText
            text={scenario.scenario}
            highlights={scenario.highlights}
            active={revealed}
          />
        </div>

        {/* RIGHT — reveal → concept → actions */}
        <div className="mt-7 lg:mt-0 lg:w-[340px] lg:shrink-0 lg:border-l lg:border-outline-variant lg:pl-10">
          {!revealed ? (
            <RevealButton revealState={revealState} onAdvance={advance} labels={revealLabels} />
          ) : (
            <>
              <hr className="mb-6 h-px border-none bg-outline-variant lg:hidden" />
              <ConceptDetail id={scenario.id} model={scenario.model} />
              <CardActions scenario={scenario} onNext={onNext} />
            </>
          )}
        </div>
      </div>
    </article>
  );
}
