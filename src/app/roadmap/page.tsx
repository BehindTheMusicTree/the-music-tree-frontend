const roadmapItems = [
  {
    phase: "Now",
    focus:
      "Stabilize core taxonomy and improve contributor onboarding across repositories.",
  },
  {
    phase: "Next",
    focus:
      "Expand API capabilities for genre relationships, metadata enrichment, and discovery workflows.",
  },
  {
    phase: "Later",
    focus:
      "Deliver richer discovery tooling and broader ecosystem integrations for community partners.",
  },
] as const;

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Roadmap
      </h1>
      <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
        Our roadmap is public by design. We prioritize work that improves data
        quality, contributor experience, and real-world usefulness.
      </p>

      <div className="space-y-4">
        {roadmapItems.map((item) => (
          <section
            key={item.phase}
            className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {item.phase}
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.focus}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
