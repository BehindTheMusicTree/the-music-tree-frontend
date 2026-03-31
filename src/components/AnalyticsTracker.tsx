"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 100] as const;

export function AnalyticsTracker() {
  useEffect(() => {
    const reachedThresholds = new Set<number>();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-track-event]");
      if (!trackedElement) {
        return;
      }

      const eventName = trackedElement.dataset.trackEvent;
      if (!eventName) {
        return;
      }

      track(eventName, {
        label: trackedElement.dataset.trackLabel ?? "",
        href: trackedElement.getAttribute("href") ?? "",
        path: window.location.pathname,
      });
    };

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = maxScrollable > 0 ? scrollTop / maxScrollable : 1;
      const scrollPercent = Math.round(scrollRatio * 100);

      for (const threshold of SCROLL_THRESHOLDS) {
        if (scrollPercent >= threshold && !reachedThresholds.has(threshold)) {
          reachedThresholds.add(threshold);
          track("scroll_depth", {
            depth: threshold,
            path: window.location.pathname,
          });
        }
      }
    };

    window.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
