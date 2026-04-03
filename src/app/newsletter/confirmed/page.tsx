import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter confirmed",
  description: "Your newsletter subscription was confirmed.",
};

export default function NewsletterConfirmedPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Subscription confirmed
      </h1>
      <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
        Thanks — you are on the list. You can close this tab or continue browsing
        the site.
      </p>
      <p className="mt-6">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          Back to home
        </Link>
      </p>
    </div>
  );
}
