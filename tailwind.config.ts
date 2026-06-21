import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--md-primary)",
        "on-primary": "var(--md-on-primary)",
        "primary-container": "var(--md-primary-container)",
        "on-primary-container": "var(--md-on-primary-container)",

        secondary: "var(--md-secondary)",
        "on-secondary": "var(--md-on-secondary)",
        "secondary-container": "var(--md-secondary-container)",
        "on-secondary-container": "var(--md-on-secondary-container)",

        tertiary: "var(--md-tertiary)",
        "on-tertiary": "var(--md-on-tertiary)",
        "tertiary-container": "var(--md-tertiary-container)",
        "on-tertiary-container": "var(--md-on-tertiary-container)",

        error: "var(--md-error)",
        "on-error": "var(--md-on-error)",
        "error-container": "var(--md-error-container)",
        "on-error-container": "var(--md-on-error-container)",

        background: "var(--md-background)",
        "on-background": "var(--md-on-background)",
        surface: "var(--md-surface)",
        "on-surface": "var(--md-on-surface)",
        "surface-variant": "var(--md-surface-variant)",
        "on-surface-variant": "var(--md-on-surface-variant)",

        "surface-container-lowest": "var(--md-surface-container-lowest)",
        "surface-container-low": "var(--md-surface-container-low)",
        "surface-container": "var(--md-surface-container)",
        "surface-container-high": "var(--md-surface-container-high)",
        "surface-container-highest": "var(--md-surface-container-highest)",

        outline: "var(--md-outline)",
        "outline-variant": "var(--md-outline-variant)",

        "inverse-surface": "var(--md-inverse-surface)",
        "inverse-on-surface": "var(--md-inverse-on-surface)",
        "inverse-primary": "var(--md-inverse-primary)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      // M3 type scale — https://m3.material.io/styles/typography/type-scale-tokens
      fontSize: {
        "display-large": ["57px", { lineHeight: "64px", letterSpacing: "-0.25px" }],
        "display-medium": ["45px", { lineHeight: "52px" }],
        "display-small": ["36px", { lineHeight: "44px" }],
        "headline-large": ["32px", { lineHeight: "40px" }],
        "headline-medium": ["28px", { lineHeight: "36px" }],
        "headline-small": ["24px", { lineHeight: "32px" }],
        "title-large": ["22px", { lineHeight: "28px" }],
        "title-medium": ["16px", { lineHeight: "24px", letterSpacing: "0.15px" }],
        "title-small": ["14px", { lineHeight: "20px", letterSpacing: "0.1px" }],
        "body-large": ["16px", { lineHeight: "24px", letterSpacing: "0.5px" }],
        "body-medium": ["14px", { lineHeight: "20px", letterSpacing: "0.25px" }],
        "body-small": ["12px", { lineHeight: "16px", letterSpacing: "0.4px" }],
        "label-large": ["14px", { lineHeight: "20px", letterSpacing: "0.1px" }],
        "label-medium": ["12px", { lineHeight: "16px", letterSpacing: "0.5px" }],
        "label-small": ["11px", { lineHeight: "16px", letterSpacing: "0.5px" }],
      },
      borderRadius: {
        // M3 shape scale
        "md-xs": "4px",
        "md-sm": "8px",
        "md-md": "12px",
        "md-lg": "16px",
        "md-xl": "28px",
        "md-full": "9999px",
      },
      transitionTimingFunction: {
        // M3 easing tokens — https://m3.material.io/styles/motion/easing-and-duration/tokens-specs
        "md-standard": "cubic-bezier(0.2, 0, 0, 1)",
        "md-standard-decelerate": "cubic-bezier(0, 0, 0, 1)",
        "md-standard-accelerate": "cubic-bezier(0.3, 0, 1, 1)",
        // Emphasized is a two-part curve in spec; these are the standard single-cubic approximations.
        "md-emphasized": "cubic-bezier(0.2, 0, 0, 1)",
        "md-emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1)",
        "md-emphasized-accelerate": "cubic-bezier(0.3, 0, 0.8, 0.15)",
      },
      transitionDuration: {
        // M3 duration tokens (subset)
        "md-short": "200ms",
        "md-medium": "300ms",
        "md-long": "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
