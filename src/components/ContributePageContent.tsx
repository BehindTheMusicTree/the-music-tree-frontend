"use client";

import { useMessages } from "next-intl";
import { ContributeSponsorSection } from "@/components/ContributeSponsorSection";
import { ContributeWhereToStartSection } from "@/components/ContributeWhereToStartSection";
import type { Messages } from "@/i18n/messages";

export function ContributePageContent() {
  const { contribute: copy } = useMessages() as Messages;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>

      <p className="mb-10 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.intro}
      </p>

      <ContributeWhereToStartSection />

      <ContributeSponsorSection />
    </div>
  );
}
