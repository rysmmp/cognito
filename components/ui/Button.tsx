"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Ripple } from "./Ripple";

type Variant = "filled" | "tonal" | "outlined" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANT: Record<Variant, string> = {
  filled: "btn-accent text-on-primary",
  tonal: "bg-secondary-container text-on-secondary-container",
  outlined: "border border-outline text-primary bg-transparent",
  text: "text-primary bg-transparent",
};

/**
 * Material 3 button. Pill shape, 40px tall, label-large, with an M3 state layer
 * (the ::after overlay from `.md-state` uses currentColor → the correct "on"
 * tone for each variant). Icons passed as children render inline at 18px.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "filled", className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "md-state relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md-full px-6 font-sans text-label-large font-medium transition-[background-color,box-shadow] duration-150 ease-md-standard",
        "disabled:pointer-events-none disabled:opacity-40",
        // leading-icon layout gets tighter left padding per M3
        "has-[svg:first-child]:pl-4",
        VARIANT[variant],
        className,
      )}
      {...props}
    >
      <Ripple />
      <span className="relative z-[1] inline-flex items-center gap-2 [&_svg]:h-[18px] [&_svg]:w-[18px]">
        {children}
      </span>
    </button>
  );
});
