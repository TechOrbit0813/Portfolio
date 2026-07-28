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
    const sentinel = document.getElementById("page-top-sentinel");
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const topObserver = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "20px 0px 0px 0px", threshold: 0 }
    );

    if (sentinel) {
      topObserver.observe(sentinel);
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (activeLockRef.current !== null) return;

        const nearest = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aDistance = Math.abs(a.boundingClientRect.top - 120);
            const bDistance = Math.abs(b.boundingClientRect.top - 120);
            return aDistance - bDistance;
          })[0];

        if (nearest instanceof IntersectionObserverEntry) {
          setActive(`#${nearest.target.id}`);
        }
      },
      {
        rootMargin: "-18% 0px -70% 0px",
        threshold: [0, 0.01, 0.25],
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      topObserver.disconnect();
      sectionObserver.disconnect();

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
                active === link.href
                  ? "text-brand"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex h-10 w-10 items-center justify-end">
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-700 text-slate-300 md:hidden"
            onClick={() => setOpen((value) => !value)}
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
