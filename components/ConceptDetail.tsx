"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { Model } from "@/lib/types";
import { ModelIcon } from "./ModelIcon";
import { CollapsibleSection } from "./CollapsibleSection";
import { ReadAloud } from "./ReadAloud";

/** The whole framework as one spoken passage, for read-aloud. */
function speechText(model: Model): string {
  return [
    `${model.name}.`,
    model.short_definition,
    `What it is. ${model.what_it_is}`,
    `Why it matters. ${model.why_it_matters}`,
    `Examples. ${model.examples.join(". ")}.`,
    `Common misuse. ${model.common_misuse}`,
  ].join(" ");
}

/**
 * The revealed concept, shared by every section (Models, Intelligence,
 * Fallacies, Puzzles). The lead (glyph + name + definition) appears on reveal;
 * the deeper sections are collapsibles — "What it is" opens by default, the rest
 * expand on demand. A "Read aloud" control speaks the entire framework.
 */
export function ConceptDetail({ id, model }: { id: string; model: Model }) {
  return (
    <div className="w-full">
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-md-md bg-surface-container-high text-primary">
          <ModelIcon id={id} size={28} />
        </div>
        <h2 className="font-sans text-headline-medium font-medium text-primary">{model.name}</h2>
        <p className="mt-3 font-sans text-body-large text-on-surface">{model.short_definition}</p>
        <ReadAloud text={speechText(model)} />
      </motion.div>

      <div className="mt-6 border-t border-outline-variant">
        <CollapsibleSection title="What it is" defaultOpen>
          {model.what_it_is}
        </CollapsibleSection>
        <CollapsibleSection title="Why it matters">{model.why_it_matters}</CollapsibleSection>
        <CollapsibleSection title="Examples">
          <ul className="list-disc space-y-1.5 pl-5 marker:text-primary">
            {model.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </CollapsibleSection>
        <CollapsibleSection title="Common misuse">{model.common_misuse}</CollapsibleSection>
      </div>
    </div>
  );
}
