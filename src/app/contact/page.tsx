const GITHUB_ORG = "https://github.com/BehindTheMusicTree";
const LINKEDIN = "https://www.linkedin.com/in/andreas-garcia/";
const EMAIL = "garcia.andreas.1991@gmail.com";

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Connect With Us
      </h1>

      <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <li>
          <strong className="text-zinc-800 dark:text-zinc-300">Issues</strong> —
          Report bugs or suggest features in individual project repositories.
        </li>
        <li>
          <strong className="text-zinc-800 dark:text-zinc-300">
            Discussions
          </strong>{" "}
          — Join conversations in the organization discussions on GitHub.
        </li>
        <li>
          <strong className="text-zinc-800 dark:text-zinc-300">GitHub</strong> —{" "}
          <a
            href={GITHUB_ORG}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            github.com/BehindTheMusicTree
          </a>
        </li>
        <li>
          <strong className="text-zinc-800 dark:text-zinc-300">Email</strong> —{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            {EMAIL}
          </a>
        </li>
        <li>
          <strong className="text-zinc-800 dark:text-zinc-300">LinkedIn</strong> —{" "}
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-900 underline underline-offset-2 hover:no-underline dark:text-zinc-50"
          >
            Connect on LinkedIn
          </a>
        </li>
      </ul>

      <p className="mt-10 text-zinc-600 dark:text-zinc-400">
        <strong className="text-zinc-800 dark:text-zinc-300">Open to:</strong>{" "}
        Collaborations, consulting opportunities, and connecting with fellow
        developers and music technology enthusiasts.
      </p>
    </div>
  );
}

export default ContactPage;
