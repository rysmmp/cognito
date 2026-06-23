"use client";

import { useReveal } from "@/hooks/useReveal";
import type { Scenario } from "@/lib/types";
import { TYPE_LABEL } from "@/lib/types";
import { HighlightText } from "./HighlightText";
import { RevealButton, type RevealLabels } from "./RevealButton";
import { ConceptDetail } from "./ConceptDetail";
import { CardActions } from "./CardActions";
import { HudCorners } from "./HudCorners";
import { ReadAloud } from "./ReadAloud";
import { TypeIllustration } from "./TypeIllustration";

interface ScenarioCardProps {
  scenario: Scenario;
  onNext: () => void;
  revealLabels?: RevealLabels;
  category?: string;
}

/**
 * Reveal mode (Models, Intelligence): a scenario, one tap to reveal the concept,
 * then the deeper sections disclose on scroll. Two columns on desktop
 * (scenario | concept), stacked on mobile.
 */
export function ScenarioCard({ scenario, onNext, revealLabels, category }: ScenarioCardProps) {
  const { revealState, revealed, advance } = useReveal();
  // Intelligence gets its own cover; everything else illustrates by scenario type.
  const illoId = category === "intelligence" ? "intelligence" : scenario.type;

  return (
    <article className="glass relative mx-auto w-full max-w-[680px] rounded-md-md p-6 sm:p-8 lg:max-w-[960px]">
      <HudCorners />
      <div className="lg:flex lg:items-start lg:gap-10">
        {/* LEFT — the scenario; the type tag and read-aloud share a row */}
        <div className="lg:min-w-0 lg:flex-1">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex h-7 items-center rounded-md-sm border border-outline-variant bg-surface-container px-2.5 font-sans text-label-small font-medium uppercase tracking-[0.12em] text-on-surface-variant">
              {TYPE_LABEL[scenario.type]}
            </span>
            {revealed && <ReadAloud scenario={scenario} />}
          </div>
          {/* Scenario info with the illustration to its right (until revealed). */}
          <div className="flex items-start gap-5 sm:gap-8">
            <div className="min-w-0 flex-1">
              <HighlightText
                text={scenario.scenario}
                highlights={scenario.highlights}
                active={revealed}
              />
            </div>
            {!revealed && (
              <div className="shrink-0 self-center text-on-surface-variant">
                <TypeIllustration id={illoId} size={104} />
              </div>
            )}
          </div>
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
