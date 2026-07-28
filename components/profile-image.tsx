/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/data";
import { profileImageSet } from "@/lib/optimized-images";

type ProfileImageProps = {
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
};

function srcSet(sources: { src: string; width: number }[]) {
  return sources.map(({ src, width }) => `${asset(src)} ${width}w`).join(", ");
}

export function ProfileImage({
  alt,
  className = "",
  sizes,
  priority = false,
}: ProfileImageProps) {
  const fallback = profileImageSet.webp.at(-1);

  if (!fallback) return null;

  return (
    <picture className="contents">
      <source
        type="image/avif"
        srcSet={srcSet(profileImageSet.avif)}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={srcSet(profileImageSet.webp)}
        sizes={sizes}
      />
      <img
        src={asset(fallback.src)}
        srcSet={srcSet(profileImageSet.webp)}
        sizes={sizes}
        width={profileImageSet.width}
        height={profileImageSet.height}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </picture>
  );
}
