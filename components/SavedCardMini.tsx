"use client";

import { X } from "lucide-react";
import type { SavedItem } from "@/lib/types";

interface SavedCardMiniProps {
  item: SavedItem;
  onRemove: (id: string) => void;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

/** Compact, non-interactive display of a saved model — M3 outlined card. */
export function SavedCardMini({ item, onRemove }: SavedCardMiniProps) {
  return (
    <div className="relative rounded-md-md border border-outline-variant bg-surface-container-low p-5">
      <button
        type="button"
        onClick={() => onRemove(item.scenario_id)}
        aria-label={`Remove ${item.model_name}`}
        className="md-state absolute right-2 top-2 grid h-10 w-10 place-items-center rounded-md-full text-on-surface-variant"
      >
        <X className="h-5 w-5" />
      </button>

      <h3 className="pr-8 font-sans text-title-large font-medium text-primary">
        {item.model_name}
      </h3>

      <p className="mt-2 line-clamp-2 font-sans text-body-medium text-on-surface-variant">
        {item.scenario_text}
      </p>

      <p className="mt-4 font-sans text-label-medium font-medium text-on-surface-variant">
        {formatDate(item.saved_at)}
      </p>
    </div>
  );
}
