import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type HeroShowcaseImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/**
 * Hero görselleri split layout sağ kolonunda gösterilir.
 */
export function HeroShowcaseImage({
  src,
  alt,
  className,
  priority = false,
}: HeroShowcaseImageProps) {
  return (
    <div
      className={cn(
        "rounded-3xl overflow-hidden shadow-premium-lg relative w-full",
        "aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10]",
        "min-h-[260px] sm:min-h-[300px] lg:min-h-[380px]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );
}
