import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" className="bg-white/35 py-[26px] dark:bg-slate-950/55">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Engineering experience built in
              <span className="text-brand"> production.</span>
            </>
          }
          description="More than two decades of building, modernizing, and operating software across product development, backend systems, cloud platforms, and production infrastructure."
        />

        <div className="relative space-y-10 border-l border-slate-200 pl-8 dark:border-slate-800">
          {experience.map((job, i) => (
            <Reveal key={job.title + job.company} delay={i * 150} className="relative">
              <span className="absolute -left-[41px] grid h-6 w-6 place-items-center rounded-full bg-brand text-xs text-white transition-transform duration-300 hover:scale-110">
                <i className="fas fa-briefcase" />
              </span>
              <div className="rounded-xl border border-slate-200 bg-white/80 p-6 shadow-[0_12px_35px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl dark:border-slate-800 dark:bg-transparent dark:shadow-none">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="font-medium text-brand">{job.company}</p>
                <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-slate-500 dark:text-slate-400">
                  <span>
                    <i className="far fa-calendar-alt mr-1" />
                    {job.period}
                  </span>
                  <span>
                    <i className="fas fa-map-marker-alt mr-1" />
                    {job.location}
                  </span>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
