"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right";

const hiddenOffset: Record<Direction, string> = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hiddenOffset[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
