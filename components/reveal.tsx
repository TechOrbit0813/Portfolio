import type { CSSProperties, ReactNode } from "react";

type Direction = "up" | "left" | "right";

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}) {
  return (
    <div
      data-reveal
      data-reveal-direction={direction}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
