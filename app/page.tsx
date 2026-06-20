import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrainLogo } from "@/components/BrainLogo";
import { Ripple } from "@/components/ui/Ripple";

/** Minimalist landing: what Cognito is, and a way in. */
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
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
