/* eslint-disable @next/next/no-img-element */
import { asset } from "@/lib/data";
import { projectImageSets } from "@/lib/optimized-images";

type ProjectImageProps = {
  image: string;
  alt: string;
  className?: string;
  sizes: string;
};

function srcSet(sources: { src: string; width: number }[]) {
  return sources.map(({ src, width }) => `${asset(src)} ${width}w`).join(", ");
}

export function ProjectImage({
  image,
  alt,
  className = "",
  sizes,
}: ProjectImageProps) {
  const imageSet = projectImageSets[image];
  const fallback = imageSet?.webp.at(-1);

  if (!imageSet || !fallback) return null;

  return (
    <picture className="contents">
      <source
        type="image/webp"
        srcSet={srcSet(imageSet.webp)}
        sizes={sizes}
      />
      <img
        src={asset(fallback.src)}
        srcSet={srcSet(imageSet.webp)}
        sizes={sizes}
        width={imageSet.width}
        height={imageSet.height}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
}
