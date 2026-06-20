"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSaved } from "@/hooks/useSaved";
import { BrainLogo } from "./BrainLogo";
import { Ripple } from "./ui/Ripple";

const LINKS = [
  { href: "/explore", label: "Mental Models" },
  { href: "/intelligences", label: "Intelligences" },
  { href: "/riddles", label: "Riddles" },
  { href: "/saved", label: "Saved" },
];

/** M3 top app bar: brand (brain logo + title) left, destination text buttons
 *  with an M3 count badge on "Saved" right. */
export function Nav() {
  const pathname = usePathname();
  const { saved } = useSaved();

  return (
    <header className="sticky top-0 z-20 bg-surface">
      <nav className="mx-auto flex h-16 w-full max-w-[680px] items-center justify-between gap-4 px-4 lg:max-w-[960px]">
        <Link
          href="/"
          className="md-state relative -mx-2 flex items-center gap-2 overflow-hidden rounded-md-full px-2 py-1 font-sans text-title-large font-medium text-on-surface"
        >
          <Ripple />
          <span className="relative z-[1] flex items-center gap-2">
            <BrainLogo className="text-primary" size={26} />
            Cognito
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            const badge = link.href === "/saved" && saved.length > 0;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "md-state relative overflow-hidden rounded-md-full px-4 py-2 font-sans text-label-large font-medium transition-colors duration-150",
                  active
                    ? "bg-secondary-container text-on-secondary-container"
                    : "text-on-surface-variant",
                )}
              >
                <Ripple />
                <span className="relative z-[1] inline-flex items-center gap-1.5">
                  {link.label}
                  {badge && (
                    <span className="grid h-5 min-w-5 place-items-center rounded-md-full bg-primary px-1 font-sans text-label-small font-medium text-on-primary">
                      {saved.length > 99 ? "99+" : saved.length}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
