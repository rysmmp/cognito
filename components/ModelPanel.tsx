"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface ModelPanelProps {
  name: string;
  shortDefinition: string;
  showDefinition: boolean;
}

/**
 * The revealed model: name as an M3 headline in the primary color, with the
 * short definition (body-large, on-surface-variant) once revealed.
 */
export function ModelPanel({ name, shortDefinition, showDefinition }: ModelPanelProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="w-full">
      <hr className="my-6 h-px border-none bg-outline-variant lg:hidden" />

      <h2 className="font-sans text-headline-small font-medium text-primary">{name}</h2>

      {showDefinition && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-3 font-sans text-body-large text-on-surface-variant"
        >
          {shortDefinition}
        </motion.p>
      )}
    </motion.div>
  );
}
