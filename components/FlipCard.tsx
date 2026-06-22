"use client";

import { motion, useAnimationControls } from "framer-motion";
import { Eye, RotateCcw } from "lucide-react";
import { useState } from "react";
import type { Scenario } from "@/lib/types";
import { TYPE_LABEL } from "@/lib/types";
import { HighlightText } from "./HighlightText";
import { ConceptDetail } from "./ConceptDetail";
import { CardActions } from "./CardActions";
import { HudCorners } from "./HudCorners";
import { Ripple } from "./ui/Ripple";

interface FlipCardProps {
  scenario: Scenario;
  onNext: () => void;
}

// M3 emphasized accelerate / decelerate easings for the two flip halves.
const ACCEL = [0.3, 0, 0.8, 0.15] as const;
const DECEL = [0.05, 0.7, 0.1, 1] as const;

/**
 * Flip mode (Puzzles): tap "Reveal the answer" and the card flips on its Y axis
 * to the answer. Content is swapped at the 90° edge so the back reads upright
 * (no mirroring).
 */
export function FlipCard({ scenario, onNext }: FlipCardProps) {
  const [back, setBack] = useState(false);
  const [busy, setBusy] = useState(false);
  const controls = useAnimationControls();

  const flip = async () => {
    if (busy) return;
    setBusy(true);
    await controls.start({ rotateY: 90, transition: { duration: 0.18, ease: ACCEL } });
    setBack((b) => !b);
    controls.set({ rotateY: -90 });
    await controls.start({ rotateY: 0, transition: { duration: 0.22, ease: DECEL } });
    setBusy(false);
  };

  return (
    <div className="mx-auto w-full max-w-[680px]" style={{ perspective: 1200 }}>
      <motion.article
        animate={controls}
        style={{ transformStyle: "preserve-3d" }}
        className="glass glow relative rounded-md-md p-6 sm:p-8"
      >
        <HudCorners />
        {!back ? (
          <>
            <span className="mb-5 inline-flex h-7 items-center rounded-md-sm border border-outline-variant bg-surface-container px-2.5 font-sans text-label-small font-medium uppercase tracking-[0.12em] text-on-surface-variant">
              {TYPE_LABEL[scenario.type]}
            </span>
            <HighlightText
              text={scenario.scenario}
              highlights={scenario.highlights}
              active={false}
            />
            <button
              type="button"
              onClick={flip}
              className="btn-accent md-state relative mt-7 inline-flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-md-full px-6 font-sans text-label-large font-medium text-on-primary"
            >
              <Ripple />
              <span className="relative z-[1] inline-flex items-center gap-2">
                <Eye className="h-[18px] w-[18px]" />
                Reveal the answer
              </span>
            </button>
          </>
        ) : (
          <>
            <ConceptDetail id={scenario.id} model={scenario.model} />
            <button
              type="button"
              onClick={flip}
              className="md-state relative mt-6 inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-md-full border border-outline px-4 font-sans text-label-large font-medium text-primary"
            >
              <Ripple />
              <span className="relative z-[1] inline-flex items-center gap-2">
                <RotateCcw className="h-[18px] w-[18px]" />
                Flip back
              </span>
            </button>
            <CardActions scenario={scenario} onNext={onNext} />
          </>
        )}
      </motion.article>
    </div>
  );
}
