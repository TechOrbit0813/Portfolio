"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]:not([data-reveal-observed])";

export function RevealObserver() {
  useEffect(() => {
    const revealImmediately = (root: ParentNode = document) => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
        element.classList.add("is-revealed");
      });
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealImmediately();
      return;
    }

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
  }, []);

  return null;
}
