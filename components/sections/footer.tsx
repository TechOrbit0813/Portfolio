import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 py-10 dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center">
        <a href="#home" className="text-lg font-bold">
          {profile.name}
        </a>
        {/* <div className="flex gap-4">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            aria-label="Email"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 transition hover:text-brand"
          >
            <i className="fas fa-envelope text-lg" />
          </a>
        </div> */}
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
