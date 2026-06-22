"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { fadeUp } from "@/lib/motion";
import type { Scenario } from "@/lib/types";
import { SaveButton } from "./SaveButton";
import { ScreenshotButton } from "./ScreenshotButton";
import { ScreenshotTarget } from "./ScreenshotTarget";
import { Ripple } from "./ui/Ripple";

/**
 * Shared post-reveal action stack (Save, Save image, Next), used by every card
 * mode. All M3 pills; Next anchors the bottom.
 */
export function CardActions({
  scenario,
  onNext,
}: {
  scenario: Scenario;
  onNext: () => void;
}) {
  const shotRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-7 flex flex-col gap-3"
      >
        <SaveButton scenario={scenario} />
        <ScreenshotButton targetRef={shotRef} filename={`cognito-${scenario.id}.png`} />
        <button
          type="button"
          onClick={onNext}
          className="md-state relative inline-flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-md-full bg-primary-container px-6 font-sans text-label-large font-medium text-on-primary-container shadow-[0_6px_24px_-10px_rgba(255,255,255,0.3)] transition-[background-color,box-shadow] duration-150 ease-md-standard"
        >
          <Ripple />
          <span className="relative z-[1] inline-flex items-center gap-2">
            <ArrowRight className="h-[18px] w-[18px]" />
            Next
          </span>
        </button>
      </motion.div>

      <ScreenshotTarget ref={shotRef} scenario={scenario} />
    </>
  );
}
