"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("page-top-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { rootMargin: "400px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full bg-brand text-white shadow-lg transition hover:bg-brand-dark"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
