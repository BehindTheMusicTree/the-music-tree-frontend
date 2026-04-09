import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/page-metadata";
import { Link } from "@/i18n/navigation";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/newsletter/confirmed");
}

export default async function NewsletterConfirmedPage() {
  const { messages } = await getServerI18n();
  const copy = messages.newsletter;
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.confirmedTitle}
      </h1>
      <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.confirmedIntro}
      </p>
      <p className="mt-6">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          {copy.confirmedBackHome}
        </Link>
      </p>
    </div>
  );
}
