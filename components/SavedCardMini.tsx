"use client";

import { X } from "lucide-react";
import type { SavedItem } from "@/lib/types";
import { ModelIcon } from "./ModelIcon";
import { Ripple } from "./ui/Ripple";

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
    <div className="glass relative rounded-md-md p-5">
      <button
        type="button"
        onClick={() => onRemove(item.scenario_id)}
        aria-label={`Remove ${item.model_name}`}
        className="md-state absolute right-2 top-2 grid h-10 w-10 place-items-center overflow-hidden rounded-md-full text-on-surface-variant"
      >
        <Ripple />
        <X className="relative z-[1] h-5 w-5" />
      </button>

      <div className="mb-3 grid h-10 w-10 place-items-center rounded-md-sm bg-surface-container-high text-primary">
        <ModelIcon id={item.scenario_id} size={24} />
      </div>

      <h3 className="pr-8 font-display text-title-large font-medium text-primary">
        {item.model_name}
      </h3>

      <p className="mt-2 line-clamp-2 font-sans text-body-medium text-on-surface-variant">
        {item.scenario_text}
      </p>

      <p className="mt-4 font-mono text-label-medium uppercase tracking-wide text-on-surface-variant">
        {formatDate(item.saved_at)}
      </p>
    </div>
  );
}
