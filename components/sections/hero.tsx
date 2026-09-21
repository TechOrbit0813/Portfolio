import { asset, hero, profile } from "@/lib/data";
import { ProfileImage } from "@/components/profile-image";

const capabilityTone: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-500 ring-blue-500/20 dark:bg-blue-500/15 dark:text-blue-400",
  purple:
    "bg-violet-500/10 text-violet-500 ring-violet-500/20 dark:bg-violet-500/15 dark:text-violet-400",
  green:
    "bg-emerald-500/10 text-emerald-500 ring-emerald-500/20 dark:bg-emerald-500/15 dark:text-emerald-400",
  orange:
    "bg-orange-500/10 text-orange-500 ring-orange-500/20 dark:bg-orange-500/15 dark:text-orange-400",
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-slate-50/60 to-white/30 pt-24 dark:from-slate-900/60 dark:to-slate-950/30"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-20 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl dark:bg-brand/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-28 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/15"
      />

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-6 pb-10 pt-10 lg:px-8 lg:pb-12 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] xl:gap-16">

          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:justify-self-end">
            <div className="absolute -inset-4 -z-10 rounded-[2.25rem] bg-gradient-to-br from-blue-500/20 via-brand/5 to-violet-500/20 blur-2xl" />

            <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-slate-300/70 bg-white/55 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:min-h-[540px] sm:p-7 dark:border-white/15 dark:bg-slate-900/55 dark:shadow-black/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(67,97,238,0.34),transparent_38%),linear-gradient(145deg,rgba(37,99,235,0.15),transparent_45%,rgba(124,58,237,0.13))]" />
              <div className="hero-grid absolute inset-0 opacity-60 dark:opacity-70" />

              <div className="relative flex min-h-[410px] items-center justify-center pb-24 sm:min-h-[490px] sm:pb-28">
                <div className="relative h-72 w-72 rounded-full p-1.5 sm:h-[370px] sm:w-[370px]">
                  <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_35deg,var(--color-brand),var(--color-accent),#8b5cf6,var(--color-brand))] opacity-90 transition duration-700 group-hover:rotate-45" />
                  <span className="absolute inset-[7px] rounded-full bg-white dark:bg-slate-950" />
                  <ProfileImage
                    alt={`${profile.name}, ${profile.title}`}
                    sizes="(min-width: 640px) 370px, 288px"
                    priority
                    className="relative h-full w-full rounded-full object-cover object-center shadow-2xl transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
              </div>

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-slate-200/90 bg-transparent p-3 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-4 dark:border-white/20 dark:bg-slate-950/80 dark:shadow-black/30">
                <ul className="grid grid-cols-3 divide-x divide-slate-200/90 dark:divide-white/10">
                  {hero.stats.map((stat) => (
                    <li
                      key={stat.label}
                      className="flex min-w-0 items-center justify-center gap-2 px-2 py-1.5 text-slate-900 sm:gap-3 sm:px-3 dark:text-white"
                    >
                      <i
                        className={`${stat.icon} hidden text-lg text-slate-500 sm:block sm:text-xl dark:text-slate-300`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0">
                        <strong className="block truncate text-sm font-semibold sm:text-lg">
                          {stat.value}
                        </strong>
                        <span className="mt-0.5 block text-[0.56rem] leading-3 text-slate-500 sm:text-[0.67rem] sm:leading-4 dark:text-slate-400">
                          {stat.label}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-emerald-600 shadow-sm backdrop-blur dark:bg-emerald-500/10 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.availability}
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-[4.6rem] dark:text-white">
              <span className="block">{hero.headline.firstLine}</span>
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-brand to-violet-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400">
                {hero.headline.secondLine}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
              {hero.description}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5" aria-label="Core technologies">
              {hero.technologies.map((technology) => (
                <li
                  key={technology.label}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/65 px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-slate-900/55 dark:text-slate-200 dark:hover:border-brand/50 dark:hover:text-blue-300"
                >
                  <i className={`${technology.icon} text-brand`} aria-hidden="true" />
                  {technology.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:ring-offset-slate-950"
              >
                View My Work
                <i
                  className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-slate-300/90 bg-white/45 px-7 py-3.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand dark:border-white/15 dark:bg-slate-900/45 dark:text-white dark:hover:border-blue-400/50 dark:hover:text-blue-300"
              >
                Download Resume
                <i className="fas fa-download text-xs" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-9">
              <p className="text-[0.67rem] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-500">
                Platforms and technologies I work with
              </p>
              <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 text-slate-500 dark:text-slate-400">
                {hero.trustedPlatforms.map((platform) => (
                  <li
                    key={platform.label}
                    className="inline-flex items-center gap-2 text-sm font-semibold opacity-80 transition hover:opacity-100"
                  >
                    <i className={`${platform.icon} text-lg`} aria-hidden="true" />
                    {platform.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/50 p-3 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-4 lg:mt-14 dark:border-white/10 dark:bg-slate-900/45 dark:shadow-black/20">
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {hero.capabilities.map((capability, index) => (
              <li
                key={capability.title}
                className={`group flex min-h-28 items-center gap-4 rounded-2xl px-4 py-4 transition hover:bg-white/70 dark:hover:bg-white/[0.045] ${index > 0 ? "lg:border-l lg:border-slate-200/80 dark:lg:border-white/10" : ""
                  }`}
              >
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-xl ring-1 transition group-hover:-translate-y-1 ${capabilityTone[capability.tone]}`}
                >
                  <i className={capability.icon} aria-hidden="true" />
                </span>
                <span>
                  <strong className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {capability.title}
                  </strong>
                  <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {capability.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
