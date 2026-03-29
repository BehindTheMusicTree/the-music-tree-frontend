import Link from "next/link";

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h1>

      <section className="mb-10" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Our Mission
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          BehindTheMusicTree aims to create a{" "}
          <strong className="text-zinc-800 dark:text-zinc-300">
            global, authoritative reference
          </strong>{" "}
          that serves as the foundation for music discovery, exploration, and
          understanding. Through our comprehensive framework, we build tools
          that reflect the full diversity of global music culture, empowering
          communities to share and celebrate their musical traditions.
        </p>
      </section>

      <section className="mb-10" aria-labelledby="vision-heading">
        <h2 id="vision-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Our Vision
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Building the ultimate music genre reference and transforming the way
          the world navigates and understands music—where your journey, your
          collection, and your community thrive.
        </p>
      </section>

      <section aria-labelledby="impact-heading">
        <h2 id="impact-heading" className="mb-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Our Impact
        </h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          Our work contributes to preserving and organizing our global musical
          heritage. By building tools that help people discover, understand,
          and connect with diverse music cultures worldwide, we are creating a
          more inclusive and accessible cultural landscape.
        </p>
      </section>

      <p className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
        <Link
          href="/team"
          className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-2 hover:decoration-zinc-500 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-400"
        >
          BehindTheMusicTree
        </Link>
      </p>
    </div>
  );
}

export default AboutPage;
