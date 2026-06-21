import type { MetadataRoute } from "next";

/**
 * Web app manifest (served at /manifest.webmanifest and auto-linked by Next).
 * Icons are scalable SVGs (public/icon-512.svg), so they're crisp at every size
 * and need no rasterization.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cognito — Think about your thinking",
    short_name: "Cognito",
    description:
      "Learn mental models, types of intelligence, and lateral-thinking puzzles through scenarios — one at a time.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#07090c",
    theme_color: "#07090c",
    categories: ["education", "productivity"],
    icons: [
      { src: "/icon-512.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-512.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
