"use client";

import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck } from "lucide-react";
import type { Scenario } from "@/lib/types";
import { useSaved } from "@/hooks/useSaved";
import { useSnackbar } from "./Snackbar";
import { Button } from "./ui/Button";

interface SaveButtonProps {
  scenario: Scenario;
}

/**
 * Toggles whether the current scenario is saved. Outlined when unsaved, filled
 * tonal (secondary-container) once saved — per M3 toggle-button conventions.
 */
export function SaveButton({ scenario }: SaveButtonProps) {
  const { save, remove, isSaved } = useSaved();
  const showSnackbar = useSnackbar();
  const saved = isSaved(scenario.id);

  const onClick = () => {
    if (saved) {
      remove(scenario.id);
      showSnackbar("Removed from saved");
    } else {
      save(scenario);
      showSnackbar("Saved to your models");
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.96 }} className="contents">
      <Button
        variant={saved ? "tonal" : "outlined"}
        onClick={onClick}
        aria-pressed={saved}
        className="w-full"
      >
        {saved ? <BookmarkCheck /> : <Bookmark />}
        {saved ? "Saved" : "Save"}
      </Button>
    </motion.div>
  );
}
