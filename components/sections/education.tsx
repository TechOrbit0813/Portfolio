import { education } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section id="education" className="bg-white/35 py-[26px] dark:bg-slate-950/55">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              A computer science foundation,
              <span className="text-brand"> strengthened through practice.</span>
            </>
          }
          description="Formal computer science study established the fundamentals. Years of hands-on engineering have developed the judgment needed to apply them in real systems."
        />

        <div className="space-y-6">
          {education.map((ed, i) => (
            <Reveal key={ed.school} delay={i * 150}>
              <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-white/95 to-slate-50/85 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl dark:border-slate-800 dark:bg-none dark:bg-slate-950">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {ed.degree}
              </h3>
              <p className="font-medium text-brand">{ed.school}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                {ed.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {ed.highlights.map((h) => (
                  <span
                    key={h}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {h}
                  </span>
                ))}
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
