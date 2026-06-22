import type { RefObject } from "react";

/**
 * Renders a DOM element to a PNG and triggers a download. html2canvas is
 * imported dynamically so it never runs (or ships) on the server.
 *
 * The element lives off-screen (its wrapper is translated far to the side) so
 * the user never sees it. We capture the element at its full intrinsic size and
 * neutralize the wrapper transform inside the clone, so the whole card — not a
 * clipped region — ends up in the image.
 */
export async function captureCard(
  ref: RefObject<HTMLElement>,
  filename = "cognito-card.png",
): Promise<void> {
  const el = ref.current;
  if (!el) return;
  const { default: html2canvas } = await import("html2canvas");

  const width = el.offsetWidth;
  const height = el.offsetHeight;

  const canvas = await html2canvas(el, {
    backgroundColor: "#07090c",
    scale: 2,
    useCORS: true,
    logging: false,
    width,
    height,
    windowWidth: width,
    windowHeight: height,
    scrollX: 0,
    scrollY: 0,
    onclone: (doc) => {
      // Drop the off-screen transform on the clone so the element renders at the
      // origin and is captured in full.
      const node = doc.querySelector<HTMLElement>("[data-shot]");
      const wrapper = node?.parentElement;
      if (wrapper) {
        wrapper.style.transform = "none";
        wrapper.style.position = "static";
      }
    },
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
