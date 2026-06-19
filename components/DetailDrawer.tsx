"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Model } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CollapsibleSection } from "./CollapsibleSection";

interface DetailDrawerProps {
  model: Model;
  visible: boolean;
}

/**
 * Deep-dive drawer. An M3 text button expands four independently-collapsible
 * sections; "What it is" opens by default once the drawer is shown.
 */
export function DetailDrawer({ model, visible }: DetailDrawerProps) {
  const [open, setOpen] = useState(false);
  if (!visible) return null;

  return (
    <div className="mt-6 w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="md-state -ml-3 inline-flex h-10 items-center gap-2 rounded-md-full pl-3 pr-4 font-sans text-label-large font-medium text-primary"
      >
        Explore further
        <ChevronDown
          className={cn(
            "h-[18px] w-[18px] transition-transform duration-300 ease-md-standard",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-md-md bg-surface-container px-4">
              <CollapsibleSection title="What it is" defaultOpen>
                {model.what_it_is}
              </CollapsibleSection>
              <CollapsibleSection title="Why it matters">
                {model.why_it_matters}
              </CollapsibleSection>
              <CollapsibleSection title="Other examples">
                <ul className="list-disc space-y-1.5 pl-5 marker:text-primary">
                  {model.examples.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              </CollapsibleSection>
              <CollapsibleSection title="Common misuse">
                {model.common_misuse}
              </CollapsibleSection>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
