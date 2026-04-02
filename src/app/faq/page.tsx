import Link from "next/link";

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

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Frequently Asked Questions
      </h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        Quick answers about collaboration, priorities, and getting started.
      </p>

      <div className="space-y-4">
        {faqs.map((item) => (
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
        Still have questions?{" "}
        <Link
          href="/contact"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
        >
          Contact us
        </Link>
        .
      </p>
    </div>
  );
}
