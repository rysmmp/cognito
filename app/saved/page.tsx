"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSaved } from "@/hooks/useSaved";
import { SavedCardMini } from "@/components/SavedCardMini";

export default function SavedPage() {
  const { saved, remove } = useSaved();

  return (
    <main className="flex flex-1 flex-col px-4 py-10">
      <div className="mx-auto w-full max-w-[680px] lg:max-w-[960px]">
        <h1 className="font-sans text-headline-large font-medium text-on-surface">
          Your saved
        </h1>

        {saved.length === 0 ? (
          <div className="mt-8 rounded-md-md bg-surface-container-low p-10 text-center">
            <p className="font-sans text-body-large text-on-surface-variant">
              Nothing saved yet.
            </p>
            <Link
              href="/models"
              className="md-state mt-4 inline-flex h-10 items-center gap-2 rounded-md-full pl-3 pr-4 font-sans text-label-large font-medium text-primary"
            >
              <ArrowLeft className="h-[18px] w-[18px]" />
              Explore models
            </Link>
          </div>
        ) : (
          <>
            <p className="mt-2 font-sans text-label-large font-medium text-on-surface-variant">
              {saved.length} {saved.length === 1 ? "item" : "items"}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {saved.map((item) => (
                <SavedCardMini key={item.scenario_id} item={item} onRemove={remove} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
