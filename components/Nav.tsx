"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AlertTriangle,
  Bookmark,
  Lightbulb,
  Puzzle,
  Shapes,
  Sparkles,
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
  { href: "/obscure", label: "Obscure", Icon: Sparkles },
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
          <span className="hidden lg:inline">{item.label}</span>
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
          className="md-state relative -ml-1.5 flex items-center overflow-hidden rounded-md-full p-1.5 text-on-surface"
        >
          <Ripple />
          <span className="relative z-[1] flex items-center">
            <BrainLogo className="text-primary" size={28} />
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
