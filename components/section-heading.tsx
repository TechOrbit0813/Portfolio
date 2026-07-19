import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <header className="mb-12 max-w-4xl">
        <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          <span className="h-px w-10 bg-brand" aria-hidden="true" />
          {eyebrow}
        </div>

        <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      </header>
    </Reveal>
  );
}
