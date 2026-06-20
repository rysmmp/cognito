"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getSaved,
  removeItem,
  saveItem,
} from "@/lib/storage";
import type { Scenario, SavedItem } from "@/lib/types";

/** Same-tab broadcast so every useSaved() instance re-reads after a change. */
const SAVED_CHANGE_EVENT = "cognito:saved-change";

/** React-stateful wrapper around the localStorage saved collection. */
export function useSaved() {
  const [saved, setSaved] = useState<SavedItem[]>([]);

  // localStorage is client-only; hydrate after mount.
  useEffect(() => {
    setSaved(getSaved());

    const sync = () => setSaved(getSaved());
    // `storage` fires across tabs; the custom event syncs instances in THIS tab
    // (the nav badge, the saved page, and any save buttons) on every change.
    const onStorage = (e: StorageEvent) => {
      if (e.key === "cognito_saved") sync();
    };
    window.addEventListener("storage", onStorage);
    window.addEventListener(SAVED_CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener(SAVED_CHANGE_EVENT, sync);
    };
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
    window.dispatchEvent(new Event(SAVED_CHANGE_EVENT));
  }, []);

  const remove = useCallback((id: string) => {
    removeItem(id);
    setSaved(getSaved());
    window.dispatchEvent(new Event(SAVED_CHANGE_EVENT));
  }, []);

  const isSaved = useCallback(
    (id: string) => saved.some((s) => s.scenario_id === id),
    [saved],
  );

  return { saved, save, remove, isSaved };
}
