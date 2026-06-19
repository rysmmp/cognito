"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getSaved,
  removeItem,
  saveItem,
} from "@/lib/storage";
import type { Scenario, SavedItem } from "@/lib/types";

/** React-stateful wrapper around the localStorage saved collection. */
export function useSaved() {
  const [saved, setSaved] = useState<SavedItem[]>([]);

  // localStorage is client-only; hydrate after mount.
  useEffect(() => {
    setSaved(getSaved());

    // Keep multiple tabs / the saved page in sync.
    const onStorage = (e: StorageEvent) => {
      if (e.key === "cognito_saved") setSaved(getSaved());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const save = useCallback((scenario: Scenario) => {
    const item: SavedItem = {
      scenario_id: scenario.id,
      model_name: scenario.model.name,
      scenario_text: scenario.scenario,
      short_definition: scenario.model.short_definition,
      saved_at: new Date().toISOString(),
    };
    saveItem(item);
    setSaved(getSaved());
  }, []);

  const remove = useCallback((id: string) => {
    removeItem(id);
    setSaved(getSaved());
  }, []);

  const isSaved = useCallback(
    (id: string) => saved.some((s) => s.scenario_id === id),
    [saved],
  );

  return { saved, save, remove, isSaved };
}
