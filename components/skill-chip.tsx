import type { Skill } from "@/lib/data";

export function SkillChip({ skill }: { skill: Skill }) {
  return (
    <span
      title={skill.name}
      className="group/chip flex min-h-11 min-w-0 items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2 text-[13px] font-medium leading-5 text-slate-700 transition duration-200 hover:border-brand/35 hover:bg-white hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900/75 dark:text-slate-300 dark:hover:border-brand/35 dark:hover:bg-slate-900 dark:hover:text-white sm:text-sm"
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-slate-200/80 bg-white p-1.5 transition-transform duration-200 group-hover/chip:scale-105 dark:border-slate-700 dark:bg-slate-950">
        <i className={`${skill.fa} text-[11px] text-brand`} aria-hidden="true" />
      </span>
      <span className="min-w-0">{skill.name}</span>
    </span>
  );
}
