import type { SavedItem } from "./types";

const KEY = "cognito_saved";

const isBrowser = () => typeof window !== "undefined";

/** Returns the saved collection, or [] if nothing is stored / on the server. */
export function getSaved(): SavedItem[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SavedItem[]) : [];
  } catch {
    return [];
  }
}

/** Adds an item, skipping if its scenario_id is already saved. */
export function saveItem(item: SavedItem): void {
  if (!isBrowser()) return;
  const current = getSaved();
  if (current.some((s) => s.scenario_id === item.scenario_id)) return;
  const next = [item, ...current];
  window.localStorage.setItem(KEY, JSON.stringify(next));
}

/** Removes the saved item matching a scenario id. */
export function removeItem(id: string): void {
  if (!isBrowser()) return;
  const next = getSaved().filter((s) => s.scenario_id !== id);
  window.localStorage.setItem(KEY, JSON.stringify(next));
}

/** Whether a scenario id is currently in the saved collection. */
export function isSaved(id: string): boolean {
  return getSaved().some((s) => s.scenario_id === id);
}
