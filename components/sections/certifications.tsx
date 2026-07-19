/* eslint-disable @next/next/no-img-element */
import { certificationBadges, asset } from "@/lib/data";
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

      </div>
    </section>
  );
}
