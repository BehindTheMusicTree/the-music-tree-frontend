import type { Metadata } from "next";
import Link from "next/link";
import { getServerI18n } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Newsletter confirmed",
  description: "Your newsletter subscription was confirmed.",
  alternates: { canonical: "/newsletter/confirmed" },
  openGraph: {
    title: "Newsletter confirmed",
    description: "You are subscribed to TheMusicTree updates.",
    url: "/newsletter/confirmed",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter confirmed",
    description: "You are subscribed to TheMusicTree updates.",
  },
};

export default async function NewsletterConfirmedPage() {
  const { language, withLocalePath } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          title: "Inscription confirmee",
          intro:
            "Merci - vous etes bien inscrit. Vous pouvez fermer cet onglet ou continuer votre navigation.",
          back: "Retour a l'accueil",
        }
      : {
          title: "Subscription confirmed",
          intro:
            "Thanks — you are on the list. You can close this tab or continue browsing the site.",
          back: "Back to home",
        };
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>
      <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.intro}
      </p>
      <p className="mt-6">
        <Link
          href={withLocalePath("/")}
          className="text-sm font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          {copy.back}
        </Link>
      </p>
    </div>
  );
}
