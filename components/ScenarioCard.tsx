"use client";

import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import type { Scenario } from "@/lib/types";
import { TYPE_LABEL } from "@/lib/types";
import { HighlightText } from "./HighlightText";
import type { RevealLabels } from "./RevealButton";
import { ConceptDetail } from "./ConceptDetail";
import { CardActions } from "./CardActions";
import { HudCorners } from "./HudCorners";
import { ReadAloud } from "./ReadAloud";
import { TypeIllustration } from "./TypeIllustration";
import { Button } from "./ui/Button";

interface ScenarioCardProps {
  scenario: Scenario;
  onNext: () => void;
  revealLabels?: RevealLabels;
  category?: string;
}

/**
 * Reveal mode (Models, Intelligence): a single-column card with the illustration
 * boxed top-left and the scenario text wrapping around it, then a bottom-right
 * reveal button. On reveal, the concept and its actions take its place.
 */
export function ScenarioCard({ scenario, onNext, revealLabels, category }: ScenarioCardProps) {
  const { revealed, advance } = useReveal();
  // Intelligence gets its own cover; everything else illustrates by scenario type.
  const illoId = category === "intelligence" ? "intelligence" : scenario.type;

  return (
    <article className="glass relative mx-auto w-full max-w-[720px] rounded-md-md p-6 sm:p-8">
      <HudCorners />

      {/* type tag + read-aloud */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="inline-flex h-7 items-center rounded-md-sm border border-outline-variant bg-surface-container px-2.5 font-sans text-label-small font-medium uppercase tracking-[0.12em] text-on-surface-variant">
          {TYPE_LABEL[scenario.type]}
        </span>
        {revealed && <ReadAloud scenario={scenario} />}
      </div>

      {/* Scenario — illustration boxed top-left, text wrapping around it. */}
      <div>
        {!revealed && (
          <div className="float-left mb-4 mr-5 grid h-28 w-28 place-items-center rounded-md-md border border-outline-variant bg-surface-container-high text-on-surface-variant sm:mr-7">
            <TypeIllustration id={illoId} size={84} />
          </div>
        )}
        <HighlightText
          text={scenario.scenario}
          highlights={scenario.highlights}
          active={revealed}
        />
      </div>

      {!revealed ? (
        <div className="mt-7 flex justify-end clear-both">
          <Button variant="filled" onClick={advance}>
            {revealLabels?.hidden ?? "Reveal the model"}
            <ArrowRight className="h-[18px] w-[18px]" />
          </Button>
        </div>
      ) : (
        <div className="clear-both">
          <hr className="my-6 h-px border-none bg-outline-variant" />
          <ConceptDetail id={scenario.id} model={scenario.model} />
          <CardActions scenario={scenario} onNext={onNext} />
        </div>
      )}
    </article>
  );
}
