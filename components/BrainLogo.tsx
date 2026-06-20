interface BrainLogoProps {
  className?: string;
  /** Pixel size of the square glyph. Defaults to 24 (M3 standard icon size). */
  size?: number;
}

/**
 * Cognito's brand mark — a stylized brain rendered as line art. Uses
 * `currentColor`, so colour it with any `text-*` utility (the nav tints it
 * `text-primary`). The same paths back the favicon in `app/icon.svg`.
 */
export function BrainLogo({ className, size = 24 }: BrainLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Silhouette — two mirrored, lobed hemispheres */}
      <path d="M12 4.2C9.8 2.9 6.8 3.6 6 5.8 3.9 5.6 2.4 7.6 3.2 9.6 1.8 10.9 2 13.4 3.7 14.4 3.4 16.6 5.2 18.4 7.4 18.2 8.2 20 10.9 20.6 12 19.2 13.1 20.6 15.8 20 16.6 18.2 18.8 18.4 20.6 16.6 20.3 14.4 22 13.4 22.2 10.9 20.8 9.6 21.6 7.6 20.1 5.6 18 5.8 17.2 3.6 14.2 2.9 12 4.2Z" />
      {/* Central fissure */}
      <path d="M12 5c-1 1-1 2.5 0 3.5s1 2.5 0 3.5-1 2.5 0 3.5" />
      {/* Left-hemisphere folds */}
      <path d="M6 6.4c1.4.6 1.6 1.8.6 2.6" />
      <path d="M3.9 10.2c1.3.2 2.1 1.2 1.7 2.4" />
      <path d="M7 17.4c.4-1.2 1.6-1.8 2.6-1.2" />
      {/* Right-hemisphere folds */}
      <path d="M18 6.4c-1.4.6-1.6 1.8-.6 2.6" />
      <path d="M20.1 10.2c-1.3.2-2.1 1.2-1.7 2.4" />
      <path d="M17 17.4c-.4-1.2-1.6-1.8-2.6-1.2" />
    </svg>
  );
}
