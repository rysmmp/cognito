"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ModelIcon } from "./ModelIcon";

interface ModelPanelProps {
  id: string;
  name: string;
  shortDefinition: string;
  showDefinition: boolean;
}

/**
 * The revealed model: a line-art glyph for the framework in a tonal tile, the
 * name as an M3 headline in the primary color, and the short definition
 * (body-large, on-surface-variant) once revealed.
 */
export function ModelPanel({ id, name, shortDefinition, showDefinition }: ModelPanelProps) {
  return (
    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="w-full">
      <hr className="my-6 h-px border-none bg-outline-variant lg:hidden" />

      <div className="mb-4 grid h-12 w-12 place-items-center rounded-md-md bg-surface-container-high text-primary">
        <ModelIcon id={id} size={28} />
      </div>

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
