import type { Metadata } from "next";
import { NewsletterSubscribeForm } from "@/components/NewsletterSubscribeForm";
import { pageMetadata } from "@/i18n/page-metadata";
import { Link } from "@/i18n/navigation";
import { getServerI18n } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/newsletter");
}

export default async function NewsletterPage() {
  const { language } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          title: "Newsletter",
          intro:
            "Mises a jour occasionnelles sur les projets et l'ecosysteme open data musical. Apres inscription, nous envoyons un email de confirmation : vous etes ajoute uniquement apres validation (double opt-in).",
          contact: "Contactez-nous",
          end: "pour d'autres moyens de joindre l'equipe.",
        }
      : {
          title: "Newsletter",
          intro:
            "Occasional updates on projects and the open music-data ecosystem. After you subscribe, we send a confirmation email — you are only added once you confirm (double opt-in).",
          contact: "Contact us",
          end: "for other ways to reach the team.",
        };
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>
      <p className="mb-8 leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.intro}
      </p>
      <NewsletterSubscribeForm
        variant="contact"
        trackLabel="newsletter_page_submit"
      />
      <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
        <Link
          href="/contact"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          {copy.contact}
        </Link>{" "}
        {copy.end}
      </p>
    </div>
  );
}
