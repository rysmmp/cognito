import { BrainLogo } from "@/components/BrainLogo";

/** Minimalist landing: what Cognito is. Navigation lives in the top bar. */
export default function Landing() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-center">
        <div className="mb-8 grid h-20 w-20 place-items-center rounded-md-xl bg-surface-container-high text-primary">
          <BrainLogo size={44} />
        </div>

        <h1 className="font-sans text-display-medium font-medium text-on-surface">
          Think about your thinking
        </h1>

        <p className="mt-5 max-w-[48ch] font-sans text-body-large text-on-surface-variant">
          Cognito makes behavioral and cognitive science easy to absorb — mental
          models, types of intelligence, fallacies, and puzzles, one concept at a
          time.
        </p>
      </div>
    </main>
  );
}
