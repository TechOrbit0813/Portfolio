"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { galleryImageDimensions } from "@/lib/gallery-image-meta";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const asset = (path: string) => `${BASE_PATH}${path}`;

type ProjectGalleryProps = {
  title: string;
  images: string[];
  onClose: () => void;
};

export default function ProjectGallery({
  title,
  images,
  onClose,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];
  const dimensions = galleryImageDimensions[activeImage] ?? {
    width: 1672,
    height: 941,
  };

  const move = (direction: -1 | 1) => {
    setActiveIndex(
      (current) => (current + direction + images.length) % images.length
    );
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && images.length > 1) move(-1);
      if (event.key === "ArrowRight" && images.length > 1) move(1);
    };

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [images.length, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} project gallery`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/94 p-1 backdrop-blur-xl sm:p-2 lg:p-3"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-[98dvh] w-[98vw] max-w-none items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:rounded-3xl"
      >
        <div className="relative flex h-full min-h-0 w-full items-center justify-center overflow-hidden bg-black/35 p-1 sm:p-2 lg:p-3">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_55%)]" />
          <img
            key={activeImage}
            src={asset(activeImage)}
            width={dimensions.width}
            height={dimensions.height}
            alt={`${title} gallery image ${activeIndex + 1}`}
            className="relative z-10 h-full w-full max-w-none rounded-lg object-contain shadow-2xl sm:rounded-xl"
            loading="eager"
            decoding="async"
          />

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/15 bg-slate-950/78 p-1.5 text-white shadow-[0_16px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:bottom-6">
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="View previous gallery image"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <i className="fas fa-chevron-left text-xs" />
              </button>
            )}

            <span className="min-w-[4.25rem] px-2 text-center text-xs font-semibold tabular-nums text-slate-100">
              {activeIndex + 1} / {images.length}
            </span>

            {images.length > 1 && (
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="View next gallery image"
                className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <i className="fas fa-chevron-right text-xs" />
              </button>
            )}

            <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project gallery"
              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <i className="fas fa-times text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
