/**
 * Subtle sensory feedback: a soft synthesized tick (Web Audio — no asset files)
 * plus a short vibration on supported devices. Deliberately quiet and short.
 * Skipped when the user prefers reduced motion.
 */
let ctx: AudioContext | null = null;

function reducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  // Browsers start the context suspended until a user gesture; resume on use.
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** A soft, short downward "tick" — the tactile press sound. */
export function playTap(): void {
  if (reducedMotion()) return;
  const ac = getCtx();
  if (!ac) return;

  const t = ac.currentTime;
  const osc = ac.createOscillator();
  const gain = ac.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(440, t);
  osc.frequency.exponentialRampToValueAtTime(280, t + 0.05);

  // Quiet: peaks at ~0.05 then decays in ~80ms.
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.05, t + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);

  osc.connect(gain).connect(ac.destination);
  osc.start(t);
  osc.stop(t + 0.09);
}

/** A very short vibration where supported (mobile). */
export function haptic(): void {
  if (reducedMotion()) return;
  if (typeof navigator !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate?.(8);
  }
}

/** Combined press feedback. */
export function feedbackTap(): void {
  playTap();
  haptic();
}
