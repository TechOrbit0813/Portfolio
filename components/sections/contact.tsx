"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

// TODO: replace "your-id" with your own Formspree form ID (https://formspree.io)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-id";

const contactItems = [
  { icon: "fas fa-envelope", label: "Email", value: profile.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` },
  { icon: "fab fa-github", label: "GitHub", value: profile.github.replace(/^https?:\/\//, ""), href: profile.github },
  { icon: "fas fa-map-marker-alt", label: "Location", value: profile.location },
];

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white/55 py-[26px] dark:bg-slate-950/55">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Start with the problem.
              <span className="text-brand"> Build the right system.</span>
            </>
          }
          description="Share the business goal, current constraints, and where the project stands. I will help clarify the technical path, delivery risks, and practical next steps."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            {contactItems.map((c, i) => (
              <Reveal key={c.label} direction="left" delay={i * 100} className="group flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand transition-all duration-300 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                  <i className={c.icon} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {c.label}
                  </h3>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-sm text-slate-600 hover:text-brand dark:text-slate-400"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-600 dark:text-slate-400">{c.value}</p>
                  )}
                </div>
              </Reveal>
            ))}

            <Reveal direction="left" delay={contactItems.length * 100} className="flex-1">
              <div className="h-full min-h-60 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                <iframe
                  title={`Map of ${profile.location}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    profile.location
                  )}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block h-full w-full grayscale-[15%]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal direction="right"><form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
          >
            {["Name", "Email", "Subject"].map((field) => (
              <div key={field}>
                <label className="mb-1 block text-sm font-medium" htmlFor={field}>
                  {field}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "Email" ? "email" : "text"}
                  required
                  disabled={status === "submitting"}
                  className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand disabled:opacity-60 dark:border-slate-700"
                />
              </div>
            ))}
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="Message">
                Message
              </label>
              <textarea
                id="Message"
                name="Message"
                rows={5}
                required
                disabled={status === "submitting"}
                className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-brand disabled:opacity-60 dark:border-slate-700"
              />
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-600 dark:text-green-400" role="status">
                Thank you. Your message has been sent, and I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
                {error}
              </p>
            )}
          </form></Reveal>
        </div>
      </div>
    </section>
  );
}
