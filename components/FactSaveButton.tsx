"use client";

import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck } from "lucide-react";
import type { ObscureFact } from "@/lib/types";
import { useSaved } from "@/hooks/useSaved";
import { useSnackbar } from "./Snackbar";
import { Button } from "./ui/Button";

/** Save toggle for an obscure fact (mirrors SaveButton, but for facts). */
export function FactSaveButton({ fact }: { fact: ObscureFact }) {
  const { remove, isSaved, saveRecord } = useSaved();
  const showSnackbar = useSnackbar();
  const saved = isSaved(fact.id);

  const onClick = () => {
    if (saved) {
      remove(fact.id);
      showSnackbar("Removed from saved");
    } else {
      saveRecord({
        scenario_id: fact.id,
        model_name: fact.fact,
        scenario_text: fact.detail,
        short_definition: fact.detail,
      });
      showSnackbar("Saved to your collection");
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
