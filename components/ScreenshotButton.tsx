"use client";

import { Download, Loader2 } from "lucide-react";
import { useState, type RefObject } from "react";
import { captureCard } from "@/lib/screenshot";
import { Button } from "./ui/Button";

interface ScreenshotButtonProps {
  targetRef: RefObject<HTMLElement>;
  filename?: string;
}

/** M3 outlined button that exports the ScreenshotTarget to a PNG. */
export function ScreenshotButton({ targetRef, filename }: ScreenshotButtonProps) {
  const [busy, setBusy] = useState(false);

  const onClick = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await captureCard(targetRef, filename);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Button variant="outlined" onClick={onClick} disabled={busy} className="w-full">
      {busy ? <Loader2 className="animate-spin" /> : <Download />}
      {busy ? "Saving…" : "Save image"}
    </Button>
  );
}
