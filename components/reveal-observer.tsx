"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not([data-reveal-observed])";

export function RevealObserver() {
  useEffect(() => {
    // Content is visible by default (see globals.css). Nothing to do here
    // unless we can actually run the scroll-triggered fade-in animation.
    let reducedMotion = false;
    try {
      reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    } catch {
      // matchMedia unavailable/unsupported: leave content visible, skip the animation.
      return;
    }

    if (reducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    try {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            (entry.target as HTMLElement).classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );

      const observeElement = (element: Element) => {
        if (!(element instanceof HTMLElement) || !element.matches(SELECTOR)) {
          return;
        }

        element.dataset.revealObserved = "true";
        // Arm the element (opacity 0 + offset) only now that we know we can
        // actually observe and later reveal it — never leave an element
        // hidden without also guaranteeing it will be watched.
        // element.classList.add("reveal-armed");
        observer.observe(element);
      };

      document.querySelectorAll<HTMLElement>(SELECTOR).forEach(observeElement);

      const mutationObserver = new MutationObserver((records) => {
        for (const record of records) {
          for (const node of record.addedNodes) {
            if (!(node instanceof HTMLElement)) continue;
            observeElement(node);
            node.querySelectorAll<HTMLElement>(SELECTOR).forEach(observeElement);
          }
        }
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => {
        mutationObserver.disconnect();
        observer.disconnect();
      };
    } catch {
      // Anything unexpected here (an unusual/locked-down browser
      // environment, an extension patching these APIs, etc.) must never
      // leave real content invisible. Strip any classes already applied
      // so everything falls back to the always-visible default.
      document
        .querySelectorAll<HTMLElement>(".reveal-armed")
        .forEach((element) => element.classList.remove("reveal-armed", "is-revealed"));
      return;
    }
  }, []);

  return null;
}
