"use client";

import { lazy, Suspense, useMemo, useState } from "react";
import { projects, projectFilters } from "@/lib/data";
import type { Project, ProjectCategory } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ProjectImage } from "@/components/projects/project-image";

const categoryIcons: Record<ProjectCategory, string> = {
  ai: "fas fa-brain",
  saas: "fas fa-layer-group",
  automation: "fas fa-gears",
  industry: "fas fa-building",
};

const categoryLabels = Object.fromEntries(
  projectFilters
    .filter((item) => item.key !== "all")
    .map((item) => [item.key, item.label])
) as Record<ProjectCategory, string>;

type GalleryState = {
  title: string;
  images: string[];
};

const ProjectGallery = lazy(() => import("@/components/projects/project-gallery"));
const visibleProjectsList = projects.filter((project) => !project.hidden);

export function Projects() {
  const [gallery, setGallery] = useState<GalleryState | null>(null);
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");
  const [expanded, setExpanded] = useState(false);

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? visibleProjectsList
        : visibleProjectsList.filter((project) =>
          project.category.includes(filter)
        ),
    [filter]
  );

  const INITIAL_LIMIT = filter === "all" ? 5 : 4;
  const showToggle = filteredProjects.length > INITIAL_LIMIT;
  const visibleProjects =
    !showToggle || expanded
      ? filteredProjects
      : filteredProjects.slice(0, INITIAL_LIMIT);
  const featuredProject = visibleProjects[0];
  const supportingProjects = visibleProjects.slice(1);

  const openGallery = (project: Project) => {
    if (!project.gallery?.length) return;

    setGallery({
      title: project.title,
      images: project.gallery,
    });
  };

  return (
    <section id="projects" className="relative py-[26px]">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_23rem] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                <span className="h-px w-10 bg-brand" />
                Selected product work
              </div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-[3.5rem]">
                Products and platforms shaped by
                <span className="text-brand"> real operating needs.</span>
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                A selection of SaaS, AI, automation, engineering, healthcare, education, and consumer products. Each reflects a practical balance of user experience, data, integration, and production delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white/95 to-slate-50/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800 dark:bg-none dark:bg-slate-950/55 dark:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <div className="grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800">
                <div className="px-3 text-center first:pl-0">
                  <strong className="block text-2xl font-semibold text-slate-950 dark:text-white">
                    {visibleProjectsList.length}
                  </strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Projects
                  </span>
                </div>
                <div className="px-3 text-center">
                  <strong className="block text-2xl font-semibold text-slate-950 dark:text-white">
                    4
                  </strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Focus areas
                  </span>
                </div>
                <div className="px-3 text-center last:pr-0">
                  <strong className="block text-2xl font-semibold text-brand">
                    12+
                  </strong>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    Years experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-3 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/45 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((item) => {
                const active = filter === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setFilter(item.key);
                      setExpanded(false);
                    }}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${active
                        ? "bg-slate-950 text-white shadow-lg shadow-slate-950/15 dark:bg-white dark:text-slate-950"
                        : "text-slate-600 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                      }`}
                    aria-pressed={active}
                  >
                    {item.key !== "all" && (
                      <i
                        className={`${categoryIcons[item.key]} text-xs ${active ? "text-brand" : "text-slate-400"
                          }`}
                      />
                    )}
                    {item.label}
                    {active && (
                      <span className="rounded-md bg-white/15 px-1.5 py-0.5 text-[10px] dark:bg-slate-950/10">
                        {filteredProjects.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="hidden items-center gap-2 pr-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-400 md:flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Product and platform casework
            </div>
          </div>
        </Reveal>

        {featuredProject && (
          <Reveal delay={160}>
            <article className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-br from-white/95 to-slate-50/80 shadow-[0_28px_90px_rgba(15,23,42,0.10)] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-brand/35 hover:shadow-[0_32px_100px_rgba(15,23,42,0.16)] dark:border-slate-800 dark:bg-none dark:bg-slate-950/60 dark:shadow-[0_28px_90px_rgba(0,0,0,0.30)]">
              <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
                <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
                  <div>
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.category.map((category) => (
                          <span
                            key={category}
                            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/8 px-3 py-1.5 text-xs font-semibold text-brand"
                          >
                            <i className={categoryIcons[category]} />
                            {categoryLabels[category]}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-semibold tracking-[0.2em] text-slate-300 dark:text-slate-700">
                        01
                      </span>
                    </div>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Featured project
                    </p>
                    <h3 className="text-2xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-3xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {featuredProject.stack.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-5">
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand dark:bg-white dark:text-slate-950 dark:hover:bg-brand dark:hover:text-white"
                      >
                        View live project
                        <i className="fas fa-arrow-up-right-from-square text-xs" />
                      </a>
                      {featuredProject.gallery?.length ? (
                        <button
                          type="button"
                          onClick={() => openGallery(featuredProject)}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-brand dark:text-slate-400"
                        >
                          <i className="fas fa-images" />
                          View project gallery
                          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] text-brand">
                            {featuredProject.gallery.length}
                          </span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openGallery(featuredProject)}
                  disabled={!featuredProject.gallery?.length}
                  aria-label={
                    featuredProject.gallery?.length
                      ? `View ${featuredProject.title} gallery`
                      : `${featuredProject.title} project preview`
                  }
                  className={`relative min-h-[20rem] overflow-hidden border-t border-slate-200 bg-slate-100 text-left dark:border-slate-800 dark:bg-slate-900 lg:min-h-[36rem] lg:border-l lg:border-t-0 ${featuredProject.gallery?.length
                      ? "cursor-pointer"
                      : "cursor-default"
                    }`}
                >
                  <div className="absolute inset-x-0 top-0 z-10 flex h-10 items-center gap-2 border-b border-white/10 bg-slate-950/75 px-4 backdrop-blur-md">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-3 h-4 flex-1 rounded-full bg-white/8" />
                  </div>
                  <ProjectImage
                    image={featuredProject.image}
                    alt={featuredProject.title}
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className={`h-full min-h-[20rem] w-full object-cover object-top pt-10 transition duration-700 lg:min-h-[36rem] ${featuredProject.gallery?.length
                        ? "group-hover:scale-[1.025]"
                        : ""
                      }`}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/38 via-transparent to-transparent" />
                  {featuredProject.gallery?.length ? (
                    <span className="absolute bottom-5 right-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/65 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition group-hover:scale-105 group-hover:bg-brand">
                      <i className="fas fa-images" />
                      {featuredProject.gallery.length} gallery views
                    </span>
                  ) : null}
                </button>
              </div>
            </article>
          </Reveal>
        )}

        {supportingProjects.length > 0 && (
          <div className="mt-7 grid gap-7 md:grid-cols-2">
            {supportingProjects.map((project, index) => {
              const hasGallery = Boolean(project.gallery?.length);

              return (
                <Reveal
                  key={project.title}
                  delay={Math.min(220 + index * 90, 580)}
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white/95 to-slate-50/85 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-brand/35 hover:shadow-[0_26px_80px_rgba(15,23,42,0.13)] dark:border-slate-800 dark:bg-none dark:bg-slate-950/55 dark:shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                    <button
                      type="button"
                      onClick={() => openGallery(project)}
                      disabled={!hasGallery}
                      aria-label={
                        hasGallery
                          ? `View ${project.title} gallery`
                          : `${project.title} project preview`
                      }
                      className={`relative aspect-[16/9] overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900 ${hasGallery ? "cursor-pointer" : "cursor-default"
                        }`}
                    >
                      <ProjectImage
                        image={project.image}
                        alt={project.title}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={`h-full w-full object-cover object-top transition duration-700 ${hasGallery ? "group-hover:scale-105" : ""
                          }`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-80" />
                      <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                        {project.category.map((category) => (
                          <span
                            key={category}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md"
                          >
                            <i className={categoryIcons[category]} />
                            {categoryLabels[category]}
                          </span>
                        ))}
                      </div>
                      {hasGallery ? (
                        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-slate-950/60 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md transition group-hover:bg-brand">
                          <i className="fas fa-images" />
                          {project.gallery?.length} photos
                        </span>
                      ) : null}
                    </button>

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="mb-4 flex items-start justify-between gap-5">
                        <h3 className="text-xl font-semibold leading-snug text-slate-950 dark:text-white">
                          {project.title}
                        </h3>
                        <span className="shrink-0 pt-1 text-xs font-semibold tracking-[0.2em] text-slate-300 dark:text-slate-700">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-400 dark:bg-slate-900">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200 pt-5 dark:border-slate-800">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition group-hover:text-brand dark:text-slate-200"
                        >
                          Explore project
                          <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
                        </a>
                        {hasGallery ? (
                          <button
                            type="button"
                            onClick={() => openGallery(project)}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-brand dark:text-slate-400"
                          >
                            <i className="fas fa-images text-xs" />
                            View gallery
                          </button>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}

        {showToggle && (
          <Reveal delay={260}>
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((current) => !current)}
                className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand hover:shadow-lg dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:border-brand dark:hover:text-brand"
              >
                <i
                  className={`fas ${expanded ? "fa-chevron-up" : "fa-chevron-down"
                    } text-xs`}
                />
                {expanded
                  ? "Show fewer projects"
                  : `View ${filteredProjects.length - INITIAL_LIMIT} more projects`}
              </button>
            </div>
          </Reveal>
        )}
      </div>

      {gallery ? (
        <Suspense fallback={null}>
          <ProjectGallery
            key={gallery.title}
            title={gallery.title}
            images={gallery.images}
            onClose={() => setGallery(null)}
          />
        </Suspense>
      ) : null}
    </section>
  );
}
