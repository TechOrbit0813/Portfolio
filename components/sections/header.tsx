"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const activeLockRef = useRef<number | null>(null);

  const handleNavClick = (href: string) => {
    setActive(href);

    if (activeLockRef.current !== null) {
      window.clearTimeout(activeLockRef.current);
    }

    activeLockRef.current = window.setTimeout(() => {
      activeLockRef.current = null;
    }, 900);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (activeLockRef.current !== null) {
        return;
      }

      // scroll-spy: find the section nearest the top
      const offset = window.scrollY + 120;
      let current = "#home";
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el instanceof HTMLElement && el.offsetTop <= offset) {
          current = link.href;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (activeLockRef.current !== null) {
        window.clearTimeout(activeLockRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur dark:bg-slate-950/90"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "page" : undefined}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium transition hover:text-brand ${
                active === link.href ? "text-brand" : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex h-10 w-10 items-center justify-end">
          <button
            aria-label="Toggle navigation menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 text-slate-300 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <i className={open ? "fas fa-times" : "fas fa-bars"} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-4 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={active === link.href ? "page" : undefined}
                  onClick={() => {
                    handleNavClick(link.href);
                    setOpen(false);
                  }}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition hover:text-brand ${
                    active === link.href
                      ? "bg-brand/10 text-brand"
                      : "text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
