"use client";

import { useEffect, useRef } from "react";

/**
 * M3 touch ripple. Drop as a child of any positioned, `overflow-hidden`
 * interactive surface; it listens to the parent's pointer events and emits a
 * ripple from the press point. Pair with `.md-state` (relative + isolated) and
 * render the surface's content above it (e.g. a `relative z-[1]` wrapper).
 */
export function Ripple() {
  const layer = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = layer.current;
    const host = el?.parentElement;
    if (!el || !host) return;

    const onDown = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const dot = document.createElement("span");
      dot.className = "md-ripple";
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${e.clientX - rect.left - size / 2}px`;
      dot.style.top = `${e.clientY - rect.top - size / 2}px`;
      el.appendChild(dot);
      dot.addEventListener("animationend", () => dot.remove());
    };

    host.addEventListener("pointerdown", onDown);
    return () => host.removeEventListener("pointerdown", onDown);
  }, []);

  return (
    <span
      ref={layer}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"
    />
  );
}
