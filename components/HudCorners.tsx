/**
 * Decorative HUD-style corner brackets for cards — four small cyan L-ticks at
 * the corners. Purely visual (pointer-events-none); the host must be `relative`.
 */
export function HudCorners() {
  const tick = "pointer-events-none absolute h-3 w-3 border-[#ffffff3d]";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
      <span className={`${tick} left-2 top-2 border-l border-t`} />
      <span className={`${tick} right-2 top-2 border-r border-t`} />
      <span className={`${tick} bottom-2 left-2 border-l border-b`} />
      <span className={`${tick} bottom-2 right-2 border-r border-b`} />
    </span>
  );
}
