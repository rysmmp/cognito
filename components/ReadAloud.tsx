"use client";

import { Square, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import type { Scenario } from "@/lib/types";
import { Ripple } from "./ui/Ripple";

/**
 * The card as one spoken passage — the top content (the scenario) first, then
 * the framework it reveals.
 */
function speechText(scenario: Scenario): string {
  const m = scenario.model;
  return [
    scenario.scenario,
    `${m.name}.`,
    m.short_definition,
    `What it is. ${m.what_it_is}`,
    `Why it matters. ${m.why_it_matters}`,
    `Examples. ${m.examples.join(". ")}.`,
    `Common misuse. ${m.common_misuse}`,
  ].join(" ");
}

/**
 * Reads the card aloud via the Web Speech API (no dependency) — scenario first,
 * then the framework. Toggles play/stop; cancels on unmount. Renders nothing if
 * the browser has no speech synthesis.
 */
export function ReadAloud({ scenario }: { scenario: Scenario }) {
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
    const utter = new SpeechSynthesisUtterance(speechText(scenario));
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
      className="md-state relative inline-flex h-8 items-center gap-2 overflow-hidden rounded-md-full border border-outline px-3 font-sans text-label-medium font-medium text-primary"
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
