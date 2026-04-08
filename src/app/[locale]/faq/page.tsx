import type { Metadata } from "next";
import { pageMetadata } from "@/i18n/page-metadata";
import { Link } from "@/i18n/navigation";
import { getServerI18n } from "@/i18n/server";
import { absoluteUrlForLocale } from "@/lib/language-alternates";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/faq");
}

const faqs = [
  {
    question: "Do I need to be a developer to contribute?",
    answer:
      "No. You can contribute by improving documentation, reporting issues, sharing domain knowledge, or helping validate genre information.",
  },
  {
    question: "Which project should I start with?",
    answer:
      "Start with the project closest to your interest: metadata tooling, API ecosystem work, or genre exploration apps.",
  },
  {
    question: "How are project priorities decided?",
    answer:
      "Priorities are set in public based on impact, feasibility, and community feedback collected through issues and discussions.",
  },
  {
    question: "Is TheMusicTree free to use?",
    answer:
      "Yes. The ecosystem is open-source and designed for broad access and collaboration.",
  },
] as const;

export default async function FaqPage() {
  const { language } = await getServerI18n();
  const copy =
    language === "fr"
      ? {
          title: "Questions frequentes",
          intro:
            "Reponses rapides sur la collaboration, les priorites et la prise en main.",
          contact: "Contactez-nous",
          still: "Vous avez encore des questions ?",
          faqs: [
            {
              question: "Faut-il etre developpeur pour contribuer ?",
              answer:
                "Non. Vous pouvez contribuer en ameliorant la documentation, en signalant des problemes, en partageant des connaissances metier, ou en aidant a valider les informations de genres.",
            },
            {
              question: "Par quel projet commencer ?",
              answer:
                "Commencez par le projet le plus proche de vos interets : outils de metadonnees, ecosysteme API ou applications d'exploration des genres.",
            },
            {
              question: "Comment les priorites sont-elles decidees ?",
              answer:
                "Les priorites sont definies publiquement selon l'impact, la faisabilite et les retours de la communaute via issues et discussions.",
            },
            {
              question: "TheMusicTree est-il gratuit ?",
              answer:
                "Oui. L'ecosysteme est open source et concu pour un acces large et collaboratif.",
            },
          ],
        }
      : {
          title: "Frequently Asked Questions",
          intro:
            "Quick answers about collaboration, priorities, and getting started.",
          contact: "Contact us",
          still: "Still have questions?",
          faqs,
        };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: absoluteUrlForLocale(language, "/faq"),
    mainEntity: copy.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        {copy.title}
      </h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        {copy.intro}
      </p>

      <div className="space-y-4">
        {copy.faqs.map((item) => (
          <section
            key={item.question}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {item.question}
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.answer}
            </p>
          </section>
        ))}
      </div>

      <p className="mt-8 text-zinc-600 dark:text-zinc-400">
        {copy.still}{" "}
        <Link
          href="/contact"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
        >
          {copy.contact}
        </Link>
        .
      </p>
    </div>
  );
}
