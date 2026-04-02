import { codeToHtml } from "shiki";
import type { ProjectCodeSnippet } from "@/data/projects";

function shikiLang(language: ProjectCodeSnippet["language"]): string {
  return language === "bash" ? "bash" : "python";
}

export async function ProjectCodeSnippetsSection({
  snippets,
  sourceUrl,
}: {
  snippets: ProjectCodeSnippet[];
  sourceUrl?: string;
}) {
  if (!snippets.length) return null;

  const highlighted = await Promise.all(
    snippets.map(async (snippet) => {
      const codeHtml = await codeToHtml(snippet.code, {
        lang: shikiLang(snippet.language),
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: "light-dark()",
      });
      const resultHtml = snippet.result
        ? await codeToHtml(snippet.result.trimEnd(), {
            lang: "text",
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
            defaultColor: "light-dark()",
          })
        : null;
      return { label: snippet.label, codeHtml, resultHtml };
    }),
  );

  return (
    <section className="mb-8" aria-labelledby="code-snippets-heading">
      <h2
        id="code-snippets-heading"
        className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50"
      >
        Code snippets
      </h2>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        Short examples from the project README, with illustrative output (not run in the
        browser). See the repository for real validation, formats, and the full API.
      </p>
      <div className="space-y-6">
        {highlighted.map((block) => (
          <div key={block.label}>
            <h3 className="mb-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              {block.label}
            </h3>
            <div
              className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800 [&_.shiki]:m-0 [&_.shiki]:rounded-lg [&_.shiki]:p-4 [&_.shiki]:text-[13px] [&_.shiki]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: block.codeHtml }}
            />
            {block.resultHtml ? (
              <div className="mt-3">
                <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Example output
                </p>
                <div
                  className="overflow-x-auto rounded-xl border border-zinc-200 border-l-4 border-l-emerald-500/80 dark:border-zinc-800 dark:border-l-emerald-500/60 [&_.shiki]:m-0 [&_.shiki]:rounded-lg [&_.shiki]:bg-zinc-50 [&_.shiki]:p-3 [&_.shiki]:text-[13px] [&_.shiki]:leading-relaxed dark:[&_.shiki]:bg-zinc-900/80"
                  dangerouslySetInnerHTML={{ __html: block.resultHtml }}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {sourceUrl ? (
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
          >
            Full README on GitHub
          </a>
        </p>
      ) : null}
    </section>
  );
}
