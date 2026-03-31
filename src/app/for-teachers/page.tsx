import Link from "next/link";

export default function ForTeachersPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        For Teachers
      </h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        Use TheMusicTree to support music education with transparent genre
        context, discoverable relationships, and open resources students can
        explore.
      </p>

      <section className="mb-6 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          What educators can do
        </h2>
        <ul className="list-inside list-disc space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>Explore genre trees to explain musical context and evolution.</li>
          <li>Use open APIs and tools for lesson materials and workshops.</li>
          <li>Contribute local and underrepresented music knowledge.</li>
        </ul>
      </section>

      <p className="text-zinc-600 dark:text-zinc-400">
        Want to collaborate on educational use cases?{" "}
        <Link
          href="/contact"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-700 dark:hover:decoration-zinc-500"
        >
          Contact the team
        </Link>
        .
      </p>
    </div>
  );
}
