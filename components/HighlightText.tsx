"use client";

import { useMemo } from "react";

interface HighlightTextProps {
  text: string;
  highlights: string[];
  active: boolean;
}

interface Segment {
  value: string;
  highlighted: boolean;
}

/** Escape a string for safe use inside a RegExp. */
function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Salient anchors highlighted automatically (in addition to the curated
 * phrases): money, percentages, grouped numbers, and quoted phrases.
 */
const AUTO_SOURCES = [
  String.raw`\$\d[\d,]*(?:\.\d+)?`, // money: $2,000
  String.raw`\d[\d,]*(?:\.\d+)?%`, // percentages: 30%, 9%
  String.raw`\d{1,3}(?:,\d{3})+`, // grouped numbers: 1,000
  `"[^"]{2,}"`, // straight-quoted phrase
  "“[^”]{2,}”", // curly-quoted phrase
];
const AUTO_TEST = new RegExp(`^(?:${AUTO_SOURCES.join("|")})$`);

/**
 * Split prose into sentences, keeping terminal punctuation. Only breaks when the
 * next sentence starts with an uppercase letter, digit, or opening quote — so
 * abbreviations like "U.S." (followed by a lowercase word) are left intact.
 */
function splitSentences(text: string): string[] {
  return text
    .split(/(?<=[.!?]["'”’]?)\s+(?=[A-Z0-9"“'])/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Break a single sentence into highlighted / plain segments. */
function segmentSentence(sentence: string, phrases: string[]): Segment[] {
  // Curated phrases first (so they win over the auto patterns), then the
  // automatic anchors.
  const sources = [...phrases.map(escapeRegExp), ...AUTO_SOURCES];
  const pattern = new RegExp(`(${sources.join("|")})`, "gi");
  const lower = new Set(phrases.map((p) => p.toLowerCase()));
  return sentence
    .split(pattern)
    .filter((p) => p.length > 0)
    .map((p) => ({
      value: p,
      highlighted: lower.has(p.toLowerCase()) || AUTO_TEST.test(p),
    }));
}

/**
 * Renders the scenario in a sans-serif face, one sentence per line with
 * breathing room between them. Phrases in `highlights` animate to the highlight
 * background when `active` (case-insensitive match).
 */
export function HighlightText({ text, highlights, active }: HighlightTextProps) {
  const sentences = useMemo(() => {
    const phrases = highlights.filter(Boolean);
    return splitSentences(text).map((s) => segmentSentence(s, phrases));
  }, [text, highlights]);

  return (
    <div className="space-y-4">
      {sentences.map((segs, si) => (
        <p
          key={si}
          className="font-sans text-body-large text-on-surface"
        >
          {segs.map((seg, i) =>
            seg.highlighted ? (
              <mark
                key={i}
                style={{
                  backgroundColor: active ? "var(--md-highlight)" : "transparent",
                  color: "inherit",
                  borderRadius: "4px",
                  padding: "0 3px",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                  transition: "background-color 500ms cubic-bezier(0.2,0,0,1)",
                }}
              >
                {seg.value}
              </mark>
            ) : (
              <span key={i}>{seg.value}</span>
            ),
          )}
        </p>
      ))}
    </div>
  );
}
