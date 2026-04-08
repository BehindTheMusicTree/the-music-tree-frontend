"use client";

import { useI18n } from "@/components/LanguageProvider";

type Status = "active" | "wip";

const styles: Record<Status, string> = {
  active:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  wip: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
};

type StatusBadgeProps = {
  status: Status;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const { messages } = useI18n();
  const label =
    status === "active"
      ? messages.project.statusActive
      : messages.project.statusWip;
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {label}
    </span>
  );
}
