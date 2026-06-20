import Link from "next/link";
import { ArrowRight, BookOpen, Layers, Sparkles } from "lucide-react";
import { BrainLogo } from "@/components/BrainLogo";
import { Ripple } from "@/components/ui/Ripple";

const STEPS = [
  {
    icon: BookOpen,
    title: "Read the scenario",
    body: "A real situation — no jargon, no answer up front.",
  },
  {
    icon: Sparkles,
    title: "Reveal the model",
    body: "Uncover the mental model that explains what's happening.",
  },
  {
    icon: Layers,
    title: "Explore further",
    body: "Go as deep as you want, then save it for later.",
  },
];

/** Minimalist landing: what Cognito is, how it works, and a way in. */
export default function Landing() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto flex w-full max-w-[600px] flex-col items-center">
        <div className="mb-8 grid h-20 w-20 place-items-center rounded-md-xl bg-surface-container-high text-primary">
          <BrainLogo size={44} />
        </div>

        <h1 className="font-sans text-display-small font-normal text-on-surface">
          Think about your thinking
        </h1>

        <p className="mt-5 max-w-[46ch] font-sans text-body-large text-on-surface-variant">
          Cognito teaches mental models through real scenarios. Read a situation
          first, reveal the model that explains it, then explore as deep as you
          like — one model at a time.
        </p>

        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-md-md bg-surface-container-low p-5 text-center"
            >
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="mt-3 font-sans text-title-small font-medium text-on-surface">
                {title}
              </h2>
              <p className="mt-1.5 font-sans text-body-small text-on-surface-variant">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/explore"
            className="md-state md-elevation-1 relative inline-flex h-12 items-center overflow-hidden rounded-md-full bg-primary pl-7 pr-6 font-sans text-label-large font-medium text-on-primary transition-shadow duration-150 ease-md-standard"
          >
            <Ripple />
            <span className="relative z-[1] inline-flex items-center gap-2">
              Start exploring
              <ArrowRight className="h-[18px] w-[18px]" />
            </span>
          </Link>

          <Link
            href="/saved"
            className="md-state relative inline-flex h-12 items-center overflow-hidden rounded-md-full px-5 font-sans text-label-large font-medium text-primary"
          >
            <Ripple />
            <span className="relative z-[1]">Browse saved</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
