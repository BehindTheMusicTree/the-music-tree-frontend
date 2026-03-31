import Link from "next/link";

const workflowSteps = [
  {
    title: "Contribute",
    description:
      "Community members propose updates to data models, taxonomy, code, and documentation across projects.",
  },
  {
    title: "Review",
    description:
      "Maintainers review pull requests for quality, consistency, and ecosystem fit before merging.",
  },
  {
    title: "Ship",
    description:
      "Approved changes flow into APIs, web apps, and docs so users get a more reliable music reference.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        How It Works
      </h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        TheMusicTree is built as an open ecosystem: people contribute knowledge
        and code, maintainers ensure quality, and the full community benefits.
      </p>

      <ol className="space-y-4">
        {workflowSteps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {index + 1}. {step.title}
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              {step.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-zinc-600 dark:text-zinc-400">
        Ready to join?{" "}
        <Link
          href="/contribute"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
        >
          Start contributing
        </Link>
        .
      </p>
    </div>
  );
}
