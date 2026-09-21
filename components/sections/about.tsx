import { about, profile } from "@/lib/data";
import { ProfileImage } from "@/components/profile-image";

const stats = [
  {
    icon: "fas fa-briefcase",
    iconClass: "text-violet-500",
    value: "22+",
    label: <>Years in<br />Software</>,
  },
  {
    icon: "fas fa-brain",
    iconClass: "text-blue-500",
    value: "5+",
    label: <>Years in<br />Applied AI</>,
  },
  {
    icon: "fas fa-server",
    iconClass: "text-violet-500",
    value: "100+",
    label: <>Infrastructure<br />Assets</>,
  },
  {
    icon: "fas fa-cloud",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    value: "Hybrid",
    label: <>Cloud &amp;<br />On-Premises</>,
  },
];

const workPrinciples = [
  {
    icon: "fas fa-bullseye",
    iconClass: "text-violet-500",
    title: "Product-first thinking",
    text: "Start with the workflow, the user, and the outcome.",
  },
  {
    icon: "fas fa-code",
    iconClass: "text-blue-500",
    title: "End-to-end ownership",
    text: "Own the path from architecture through production.",
  },
  {
    icon: "far fa-comment",
    iconClass: "text-blue-500",
    title: "Clear communication",
    text: "Share decisions, risks, and progress without noise.",
  },
  {
    icon: "fas fa-shield-halved",
    iconClass: "text-violet-500",
    title: "Secure by design",
    text: "Build access control, privacy, and recovery in early.",
  },
  {
    icon: "fas fa-layer-group",
    iconClass: "text-violet-500",
    title: "Long-term maintainability",
    text: "Prefer clear systems, useful tests, and practical documentation.",
  },
];

const focusAreas = [
  {
    icon: "fas fa-code",
    iconClass: "text-blue-500",
    title: <>Full-Stack Product<br />Engineering</>,
    text: "Modern interfaces, APIs, integrations, and maintainable architecture.",
  },
  {
    icon: "fas fa-brain",
    iconClass: "text-violet-500",
    title: <>AI Systems<br />&amp; Automation</>,
    text: "LLM workflows, RAG, agents, document AI, and operational automation.",
  },
  {
    icon: "fas fa-database",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    title: <>Backend &amp;<br />Data Platforms</>,
    text: "Secure services, PostgreSQL, data models, and reliable integrations.",
  },
  {
    icon: "fas fa-cloud",
    iconClass: "text-blue-500",
    title: <>Cloud &amp;<br />Platform Operations</>,
    text: "AWS, Azure, Linux, containers, CI/CD, and hybrid infrastructure.",
  },
  {
    icon: "fas fa-shield-halved",
    iconClass: "text-orange-500",
    title: <>Security &amp;<br />Observability</>,
    text: "Least privilege, monitoring, alert quality, recovery, and performance.",
  },
  {
    icon: "fas fa-users",
    iconClass: "text-blue-500",
    title: <>Technical<br />Leadership</>,
    text: "Clear decisions, mentoring, cross-functional alignment, and ownership.",
  },
];

function PanelHeading({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div className="flex h-11 items-center gap-3 border-b border-slate-200/80 px-5 dark:border-[#1a2a41]">
      <i className={`${icon} w-5 text-center text-[20px] text-blue-600 dark:text-blue-500`} aria-hidden="true" />
      <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-slate-950 dark:text-white">{children}</h3>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white/35 py-[26px] text-slate-700 dark:bg-slate-950/55 dark:text-white"
    >
      <div className="mx-auto max-w-[1336px] px-5 sm:px-7 xl:px-0">
        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,0.855fr)_minmax(0,1fr)] xl:gap-14">
          <div className="min-w-0 pt-2">
            <div className="text-[13px] font-semibold uppercase tracking-[0.025em] text-blue-500">
              About Me
            </div>
            <div className="mt-[11px] h-[2px] w-[47px] bg-blue-500" />

            <h2 className="mt-[21px] max-w-[610px] text-[34px] font-semibold leading-[1.18] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-[39px] xl:text-[40px]">
              Building products with depth,
              <br className="hidden sm:block" /> clarity, and{" "}
              <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                long-term thinking.
              </span>
            </h2>

            <p className="mt-[18px] max-w-[575px] text-[15px] leading-[1.63] tracking-[-0.012em] text-slate-600 dark:text-slate-300">
              I&apos;m a product-minded engineer with 22+ years in software and 5+ years focused on
              applied AI. My background spans full-stack product development, backend and data
              systems, cloud infrastructure, Linux operations, and production support.
            </p>

            <div className="mt-[20px] flex items-center gap-[14px]">
              <span className="grid h-[38px] w-[38px] place-items-center rounded-full border border-blue-200/80 bg-blue-50/90 text-[18px] text-blue-600 shadow-[0_8px_24px_rgba(37,99,235,0.08)] dark:border-[#1f395e] dark:bg-[#061022] dark:text-blue-500 dark:shadow-[0_0_18px_rgba(37,99,235,0.06)]">
                <i className="far fa-star" aria-hidden="true" />
              </span>
              <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">My Journey</h3>
            </div>

            <div className="relative mt-[14px] max-w-[570px] pl-[52px]">
              <div className="absolute bottom-[7px] left-[15px] top-[3px] w-px border-l border-dotted border-blue-200 dark:border-[#28406a]" />
              <div className="space-y-[16px]">
                {about.paragraphs.map((paragraph, index) => (
                  <div key={index} className="relative">
                    <span className="absolute left-[-45px] top-[7px] grid h-[17px] w-[17px] place-items-center rounded-full bg-white ring-1 ring-blue-200 shadow-sm dark:bg-[#13203a] dark:ring-[#26395e] dark:shadow-none">
                      <span className="h-[7px] w-[7px] rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.75)]" />
                    </span>
                    <p className="text-[13px] leading-[1.47] tracking-[-0.012em] text-slate-600 dark:text-[#c3c8d2] sm:text-[13.4px]">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0 space-y-[10px]">
            <div className="h-auto overflow-hidden rounded-[17px] border border-slate-200/90 bg-gradient-to-br from-white/95 to-slate-50/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-[#1b2d49] dark:bg-none dark:bg-[#030b19]/90 dark:shadow-[0_18px_50px_rgba(0,0,0,0.14)] xl:h-[385px]">
              <div className="flex min-h-[220px] flex-col items-center gap-5 p-4 sm:flex-row sm:items-start sm:gap-8 sm:px-7 sm:py-[15px] xl:h-[220px]">
                <div className="relative h-[190px] w-[190px] shrink-0 rounded-full border-[3px] border-blue-500 bg-white p-[2px] shadow-[0_0_25px_rgba(37,99,235,0.2)]">
                  <ProfileImage
                    alt={`${profile.name}, ${profile.title}`}
                    sizes="190px"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                  <span className="absolute bottom-[5px] right-[9px] h-[28px] w-[28px] rounded-full border-[4px] border-white bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.42)] dark:border-[#030b19]" />
                </div>

                <div className="min-w-0 pt-4 text-center sm:text-left">
                  <h3 className="text-[21px] font-semibold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white">
                    {profile.name}
                  </h3>
                  <p className="mt-[8px] text-[15px] font-medium text-blue-500">{profile.title}</p>

                  <div className="mt-[19px] space-y-[13px] text-[13px] text-slate-600 dark:text-slate-300">
                    <div className="flex items-center justify-center gap-[13px] sm:justify-start">
                      <i className="fas fa-location-dot w-[18px] text-center text-[18px] text-blue-500" aria-hidden="true" />
                      <span>{profile.location}, USA</span>
                    </div>
                    <div className="flex items-center justify-center gap-[13px] sm:justify-start">
                      <i className="fas fa-desktop w-[18px] text-center text-[16px] text-blue-500" aria-hidden="true" />
                      <span>Remote | Available Worldwide</span>
                    </div>
                    {/* <div className="flex items-center justify-center gap-[13px] sm:justify-start">
                      <i className="far fa-envelope w-[18px] text-center text-[18px] text-blue-500" aria-hidden="true" />
                      <a href={`mailto:${profile.email}`} className="transition hover:text-blue-400">
                        {profile.email}
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>

              <ul className="grid min-h-[145px] grid-cols-2 border-t border-slate-200/80 dark:border-[#1a2a41] sm:grid-cols-4 xl:h-[165px]">
                {stats.map((stat, index) => (
                  <li
                    key={stat.value}
                    className={`flex min-h-[140px] flex-col items-center justify-center px-2 text-center ${index > 0 ? "border-l border-slate-200/80 dark:border-[#15233a]" : ""
                      } ${index === 2 ? "max-sm:border-l-0 max-sm:border-t" : ""} ${index === 3 ? "max-sm:border-t" : ""
                      }`}
                  >
                    <i className={`${stat.icon} ${stat.iconClass} mb-[9px] text-[25px]`} aria-hidden="true" />
                    <strong className="text-[25px] font-semibold leading-none tracking-[-0.035em] text-slate-950 dark:text-white">
                      {stat.value}
                    </strong>
                    <span className="mt-[9px] text-[14px] leading-[1.36] text-slate-600 dark:text-slate-300">{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[15px] border border-slate-200/90 bg-white/90 shadow-[0_14px_38px_rgba(15,23,42,0.06)] dark:border-[#1b2d49] dark:bg-none dark:bg-[#030b19]/90 dark:shadow-none xl:h-[252px]">
              <PanelHeading icon="far fa-user">How I Work</PanelHeading>
              <div className="grid sm:grid-cols-2 xl:h-[207px]">
                <div className="space-y-[7px] px-4 py-[11px] sm:border-r sm:border-slate-200/80 sm:dark:border-[#15233a]">
                  {workPrinciples.slice(0, 3).map((item) => (
                    <div key={item.title} className="flex min-h-[57px] items-start gap-[14px]">
                      <i className={`${item.icon} ${item.iconClass} mt-[3px] w-[31px] text-center text-[25px]`} aria-hidden="true" />
                      <div className="min-w-0">
                        <h4 className="text-[14px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="mt-[3px] max-w-[230px] text-[12px] leading-[1.28] text-slate-600 dark:text-[#c0c6d1]">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-[12px] border-t border-slate-200/80 px-5 py-[11px] dark:border-[#15233a] sm:border-t-0">
                  {workPrinciples.slice(3).map((item) => (
                    <div key={item.title} className="flex min-h-[57px] items-start gap-[14px]">
                      <i className={`${item.icon} ${item.iconClass} mt-[3px] w-[31px] text-center text-[25px]`} aria-hidden="true" />
                      <div className="min-w-0">
                        <h4 className="text-[14px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-900 dark:text-white">{item.title}</h4>
                        <p className="mt-[3px] max-w-[240px] text-[12px] leading-[1.28] text-slate-600 dark:text-[#c0c6d1]">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[15px] border border-slate-200/90 bg-white/90 shadow-[0_14px_38px_rgba(15,23,42,0.06)] dark:border-[#1b2d49] dark:bg-none dark:bg-[#030b19]/90 dark:shadow-none xl:h-[296px]">
              <PanelHeading icon="far fa-star">Core Focus</PanelHeading>
              <div className="grid gap-[7px] p-[8px] sm:grid-cols-2 lg:grid-cols-3 xl:h-[251px]">
                {focusAreas.map((area) => (
                  <div
                    key={typeof area.title === "string" ? area.title : area.text}
                    className="min-h-[110px] rounded-[12px] border border-slate-200/80 bg-slate-50/90 px-[12px] py-[11px] transition hover:border-blue-200 hover:bg-white dark:border-[#101d31] dark:bg-[#020916]/75 dark:hover:border-[#1b2d49] dark:hover:bg-[#020916]"
                  >
                    <div className="flex items-start gap-[11px]">
                      <i className={`${area.icon} ${area.iconClass} mt-[1px] w-[27px] shrink-0 text-center text-[23px]`} aria-hidden="true" />
                      <h4 className="text-[13.5px] font-semibold leading-[1.28] tracking-[-0.02em] text-slate-900 dark:text-white">{area.title}</h4>
                    </div>
                    <p className="mt-[7px] text-[11.5px] leading-[1.38] text-slate-600 dark:text-[#b5bdca]">{area.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex min-h-[67px] flex-col gap-3 rounded-[14px] border border-slate-200/90 bg-gradient-to-r from-white/95 to-blue-50/65 px-4 py-4 shadow-[0_14px_38px_rgba(15,23,42,0.06)] dark:border-[#1b2d49] dark:bg-none dark:bg-[#030b19]/90 dark:shadow-none sm:flex-row sm:items-center sm:gap-0 sm:px-8 sm:py-3">
          <div className="flex w-full min-w-0 items-center gap-3 sm:w-auto sm:min-w-[267px] sm:gap-[18px]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-violet-100/80 dark:bg-violet-500/10 sm:contents">
              <i className="fas fa-quote-left text-[22px] text-violet-500 sm:text-[32px]" aria-hidden="true" />
            </span>
            <h3 className="text-[15px] font-semibold leading-tight tracking-[-0.025em] text-slate-950 dark:text-white sm:whitespace-nowrap sm:text-[16px]">
              My Operating Principle
            </h3>
          </div>
          <div className="mx-7 hidden h-8 w-px bg-slate-200 dark:bg-[#1b2d49] sm:block" />
          <p className="min-w-0 flex-1 border-t border-slate-200/80 pt-3 text-[13px] leading-[1.55] text-slate-600 dark:border-[#1b2d49] dark:text-[#c3c9d4] sm:border-t-0 sm:pt-0 sm:text-[13.5px] sm:leading-[1.42]">
            Build secure, observable systems that are straightforward to operate and reliable over time.
          </p>
          <i className="fas fa-shield-halved ml-5 hidden text-[27px] text-blue-500 sm:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
