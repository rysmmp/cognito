"use client";

import { Square, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Ripple } from "./ui/Ripple";

/**
 * Reads the given text aloud via the Web Speech API (no dependency). Toggles
 * play/stop; cancels on unmount so speech never outlives the card. Renders
 * nothing if the browser has no speech synthesis.
 */
export function ReadAloud({ text }: { text: string }) {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const toggle = () => {
    const synth = window.speechSynthesis;
    if (speaking) {
      synth.cancel();
      setSpeaking(false);
      return;
    }
    synth.cancel(); // clear anything queued
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1;
    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    synth.speak(utter);
  };

  if (!supported) return null;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={speaking}
      aria-label={speaking ? "Stop reading" : "Read aloud"}
      className="md-state relative mt-4 inline-flex h-9 items-center gap-2 overflow-hidden rounded-md-full border border-outline px-4 font-sans text-label-large font-medium text-primary"
    >
      <Ripple />
      <span className="relative z-[1] inline-flex items-center gap-2">
        {speaking ? (
          <Square className="h-[18px] w-[18px]" />
        ) : (
          <Volume2 className="h-[18px] w-[18px]" />
        )}
        {speaking ? "Stop" : "Read aloud"}
      </span>
    </button>
  );
}
