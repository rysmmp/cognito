"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Explore" },
  { href: "/saved", label: "Saved" },
];

/** M3 top app bar: title (headline) left, destination text buttons right. */
export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 bg-surface">
      <nav className="mx-auto flex h-16 w-full max-w-[680px] items-center justify-between gap-4 px-4 lg:max-w-[960px]">
        <Link
          href="/"
          className="md-state -mx-2 rounded-md-full px-2 py-1 font-sans text-title-large font-medium text-on-surface"
        >
          Cognito
        </Link>

        <div className="flex items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "md-state rounded-md-full px-4 py-2 font-sans text-label-large font-medium transition-colors duration-150",
                  active
                    ? "bg-secondary-container text-on-secondary-container"
                    : "text-on-surface-variant",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
