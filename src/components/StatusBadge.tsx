"use client";

import { useTranslations } from "next-intl";

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
  const t = useTranslations("project");
  const label =
    status === "active" ? t("statusActive") : t("statusWip");
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {label}
    </span>
  );
}
