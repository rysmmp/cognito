import type { RefObject } from "react";

/**
 * Renders a DOM element to a PNG and triggers a download. html2canvas is
 * imported dynamically so it never runs (or ships) on the server.
 */
export async function captureCard(
  ref: RefObject<HTMLElement>,
  filename = "cognito-card.png",
): Promise<void> {
  if (!ref.current) return;
  const { default: html2canvas } = await import("html2canvas");

  const canvas = await html2canvas(ref.current, {
    backgroundColor: "#0a0a0f",
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const link = document.createElement("a");
  link.download = filename;
  link.href = canvas.toDataURL("image/png");
  link.click();
}
