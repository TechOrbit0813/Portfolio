import { skills } from "@/lib/data";
import { SkillChip } from "@/components/skill-chip";
import { Reveal } from "@/components/reveal";

const categoryDetails: Record<
  string,
  { title: string; description: string }
> = {
  "Product Frontend": {
    title: "Product Frontend",
    description:
      "Responsive interfaces built for accessibility, performance, and maintainable product growth.",
  },
  "Languages and Backend": {
    title: "Languages and Backend",
    description:
      "APIs, services, and application logic designed for clear ownership and reliable operation.",
  },
  "AI and LLM Systems": {
    title: "AI and LLM Systems",
    description:
      "Applied AI workflows grounded in business context, useful data, and production constraints.",
  },
  "Data and Integrations": {
    title: "Data and Integrations",
    description:
      "Structured data, secure access patterns, third-party integrations, and dependable persistence.",
  },
  "Cloud and Platform": {
    title: "Cloud and Platform",
    description:
      "Repeatable delivery across cloud, Linux, containers, infrastructure, and CI/CD workflows.",
  },
  "Operations and Security": {
    title: "Operations and Security",
    description:
      "Monitoring, hardening, access control, recovery, and incident analysis across the stack.",
  },
};

export function Skills() {
  const skillCount = skills.reduce(
    (total, category) => total + category.items.length,
    0
  );

  return (
    <section
      id="skills"
      className="bg-white/35 py-[26px] dark:bg-slate-950/55"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                <span className="h-px w-10 bg-brand" />
                Engineering toolkit
              </div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.5rem]">
                Practical depth across product,
                <span className="text-brand"> AI, and platform engineering.</span>
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                A focused technical toolkit for building and operating production software, from user-facing applications and backend services to AI workflows, cloud infrastructure, security, and observability.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white/95 to-slate-50/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-slate-950/60 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-800">
                <div className="px-4 text-center first:pl-0">
                  <strong className="block text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                    {skills.length}
                  </strong>
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Focus areas
                  </span>
                </div>
                <div className="px-4 text-center last:pr-0">
                  <strong className="block text-3xl font-semibold tracking-tight text-brand">
                    {skillCount}
                  </strong>
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Core capabilities
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-xs text-emerald-600 dark:text-emerald-400">
                  <i className="fas fa-check" />
                </span>
                Production-minded, end-to-end ownership
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category, index) => {
            const details = categoryDetails[category.title] ?? {
              title: category.title,
              description: "A focused set of tools used in production delivery.",
            };

            return (
              <Reveal
                key={category.title}
                delay={80 + index * 70}
                className="h-full"
              >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white/95 to-slate-50/85 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_22px_65px_rgba(15,23,42,0.11)] dark:border-slate-800 dark:bg-none dark:bg-slate-950/60 dark:hover:shadow-[0_22px_65px_rgba(0,0,0,0.26)] sm:p-7">
                <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-brand/15 bg-brand/10 text-lg text-brand transition duration-300 group-hover:border-brand/25 group-hover:bg-brand group-hover:text-white">
                    <i className={category.icon} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-semibold leading-6 text-slate-950 dark:text-white">
                        {details.title}
                      </h3>
                      <span className="pt-0.5 text-xs font-semibold tracking-[0.16em] text-slate-300 dark:text-slate-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {details.description}
                    </p>
                  </div>
                </div>

                <div className="my-5 h-px bg-slate-200/80 dark:bg-slate-800" />

                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item) => (
                    <SkillChip key={item.name} skill={item} />
                  ))}
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
