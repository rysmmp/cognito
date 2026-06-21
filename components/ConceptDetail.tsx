"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { fadeUp } from "@/lib/motion";
import type { Model } from "@/lib/types";
import { ModelIcon } from "./ModelIcon";
import { CollapsibleSection } from "./CollapsibleSection";

/** Small letter-spaced section label so readers can skim. */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 font-mono text-label-medium uppercase tracking-[0.14em] text-secondary">
      {children}
    </p>
  );
}

/** A section that fades/slides in as it scrolls into view (once). */
function RevealSection({ label, children }: { label: string; children: ReactNode }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="border-t border-outline-variant pt-5"
    >
      <Eyebrow>{label}</Eyebrow>
      <div className="font-sans text-body-large text-on-surface-variant">{children}</div>
    </motion.section>
  );
}

/** Bouncing "more below" cue; disappears after the first scroll. */
function ScrollCue() {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 32) setHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (hidden) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-5 flex justify-center text-on-surface-variant"
      aria-hidden="true"
    >
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.span>
    </motion.div>
  );
}

/**
 * The revealed concept, shared by every section (Models, Intelligence,
 * Fallacies, Puzzles). The lead (glyph + name + definition) appears immediately;
 * the deeper sections disclose progressively on scroll; the caveat stays in an
 * auto-animating collapsible.
 */
export function ConceptDetail({ id, model }: { id: string; model: Model }) {
  return (
    <div className="w-full">
      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-md-md bg-surface-container-high text-primary">
          <ModelIcon id={id} size={28} />
        </div>
        <h2 className="font-display text-headline-small font-medium text-primary">{model.name}</h2>
        <p className="mt-3 font-sans text-body-large text-on-surface">{model.short_definition}</p>
      </motion.div>

      <ScrollCue />

      <div className="mt-7 space-y-6">
        <RevealSection label="What it is">{model.what_it_is}</RevealSection>
        <RevealSection label="Why it matters">{model.why_it_matters}</RevealSection>
        <RevealSection label="Examples">
          <ul className="list-disc space-y-1.5 pl-5 marker:text-primary">
            {model.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </RevealSection>
      </div>

      <div className="mt-6 border-t border-outline-variant">
        <CollapsibleSection title="Common misuse">{model.common_misuse}</CollapsibleSection>
      </div>
    </div>
  );
}
