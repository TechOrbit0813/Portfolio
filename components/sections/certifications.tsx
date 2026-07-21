/* eslint-disable @next/next/no-img-element */
import { additionalCertificates, certificationBadges, asset } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Certifications() {
  // Duplicate the badges so the track can loop seamlessly (animation shifts by -50%).
  const marqueeBadges = [...certificationBadges, ...certificationBadges];

  return (
    <section id="certifications" className="bg-white/35 py-[26px] dark:bg-slate-950/55">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Continued learning that supports
              <span className="text-brand"> practical delivery.</span>
            </>
          }
          description="Selected credentials across software development, AI, cloud platforms, and project delivery, backed by hands-on engineering experience."
        />

        {/* Right-to-left scrolling strip of badges. */}
        <div className="marquee-group relative mb-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="animate-marquee-rtl flex w-max items-center gap-10 py-2">
            {marqueeBadges.map((badge, i) => (
              <li key={`${badge.image}-${i}`} className="shrink-0">
                <img
                  src={asset(badge.image)}
                  alt={i < certificationBadges.length ? badge.alt : ""}
                  suppressHydrationWarning
                  className="h-36 w-36 object-contain transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                  aria-hidden={i >= certificationBadges.length}
                />
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="border-t border-slate-200/80 pt-10 dark:border-slate-800">
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                Additional HackerRank Certificates
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Select a certificate to open its online credential page.
              </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalCertificates.map((certificate) => (
                <li key={certificate.image}>
                  <a
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                    aria-label={`View ${certificate.title} credential`}
                  >
                    <img
                      src={asset(certificate.image)}
                      alt={certificate.alt}
                      suppressHydrationWarning
                      className="aspect-[3308/2520] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="flex items-center justify-between gap-4 px-4 py-3">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {certificate.title}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
