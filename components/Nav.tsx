"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  Bookmark,
  Lightbulb,
  Puzzle,
  Shapes,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSaved } from "@/hooks/useSaved";
import { BrainLogo } from "./BrainLogo";
import { Ripple } from "./ui/Ripple";

interface NavItem {
  href: string;
  label: string;
  Icon: LucideIcon;
}

const CATEGORIES: NavItem[] = [
  { href: "/models", label: "Models", Icon: Shapes },
  { href: "/intelligence", label: "Intelligence", Icon: Lightbulb },
  { href: "/fallacies", label: "Fallacies", Icon: AlertTriangle },
  { href: "/puzzles", label: "Puzzles", Icon: Puzzle },
];

const SAVED: NavItem = { href: "/saved", label: "Saved", Icon: Bookmark };

/**
 * M3 top app bar. Brand (brain logo) left; category destinations as icons —
 * labels show on web (`sm`+) and collapse to icons on mobile. Saved sits on the
 * right with an M3 count badge. Active item is a secondary-container pill.
 */
export function Nav() {
  const pathname = usePathname();
  const { saved } = useSaved();

  const renderItem = (item: NavItem, badge?: number) => {
    const active = pathname === item.href;
    const { Icon } = item;
    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={active ? "page" : undefined}
        aria-label={item.label}
        className={cn(
          "md-state relative inline-flex items-center gap-2 overflow-hidden rounded-md-full px-3 py-2 font-sans text-label-large font-medium transition-colors duration-150",
          active
            ? "bg-secondary-container text-on-secondary-container"
            : "text-on-surface-variant",
        )}
      >
        <Ripple />
        <span className="relative z-[1] inline-flex items-center gap-1.5">
          <Icon className="h-[18px] w-[18px] shrink-0" />
          {badge != null && badge > 0 && (
            <span className="grid h-4 min-w-4 place-items-center rounded-md-full bg-primary px-1 font-sans text-label-small font-medium text-on-primary">
              {badge > 99 ? "99+" : badge}
            </span>
          )}
          <span className="hidden sm:inline">{item.label}</span>
        </span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-20 app-bar">
      <nav className="mx-auto flex h-16 w-full max-w-[680px] items-center justify-between gap-2 px-3 sm:px-4 lg:max-w-[960px]">
        <Link
          href="/"
          aria-label="Cognito home"
          className="md-state relative -mx-1 flex items-center gap-2 overflow-hidden rounded-md-full px-2 py-1 font-sans text-title-large font-medium text-on-surface"
        >
          <Ripple />
          <span className="relative z-[1] flex items-center gap-2">
            <BrainLogo className="text-primary" size={26} />
            <span className="hidden sm:inline">Cognito</span>
            {/* live status dot */}
            <span className="relative ml-0.5 flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-md-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-md-full bg-primary" />
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1">
          {CATEGORIES.map((item) => renderItem(item))}
          {renderItem(SAVED, saved.length)}
        </div>
      </nav>
    </header>
  );
}
