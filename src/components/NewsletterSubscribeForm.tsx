"use client";

import { useTranslations } from "next-intl";
import { useId, useState, type FormEvent } from "react";

type Variant = "hero" | "contact";

const inputBase =
  "min-w-0 flex-1 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-600";

const inputContact =
  "min-w-0 flex-1 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-600";

const buttonHero =
  "inline-flex shrink-0 items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200";

const buttonContact =
  "inline-flex shrink-0 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200";

type NewsletterSubscribeFormProps = {
  variant: Variant;
  /** `data-track-label` on the submit button. */
  trackLabel: string;
};

export function NewsletterSubscribeForm({
  variant,
  trackLabel,
}: NewsletterSubscribeFormProps) {
  const t = useTranslations("newsletterForm");
  const id = useId();
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const inputClass = variant === "hero" ? inputBase : inputContact;
  const buttonClass = variant === "hero" ? buttonHero : buttonContact;
  const formClass = "flex flex-col gap-2 sm:flex-row sm:items-stretch";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: honeypot }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setMessage(data.error ?? t("errorGeneric"));
        return;
      }
      setStatus("success");
      setEmail("");
      setMessage(t("success"));
    } catch {
      setStatus("error");
      setMessage(t("errorNetwork"));
    }
  }

  const statusClass = "text-sm text-zinc-600 dark:text-zinc-400";

  const wrapClass =
    variant === "hero" ? "mx-auto w-full max-w-md" : "w-full max-w-lg";

  return (
    <div className={wrapClass}>
      <form
        className={`relative ${formClass}`}
        onSubmit={onSubmit}
        noValidate
        aria-label={t("ariaLabel")}
      >
        <label htmlFor={id} className="sr-only">
          {t("emailLabel")}
        </label>
        <input
          id={id}
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          required
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          disabled={status === "loading"}
          className={inputClass}
        />
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          value={honeypot}
          onChange={(ev) => setHoneypot(ev.target.value)}
          className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          data-track-event="cta_click"
          data-track-label={trackLabel}
          className={buttonClass}
        >
          {status === "loading" ? "…" : t("submit")}
        </button>
      </form>
      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={`${statusClass} ${variant === "hero" ? "mt-2 text-center" : "mt-2"}`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
