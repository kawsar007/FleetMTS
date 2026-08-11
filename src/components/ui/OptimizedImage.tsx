import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  /** Marks the image as above-the-fold / LCP critical. */
  priority?: boolean;
  className?: string;
}

/**
 * Thin, opinionated wrapper around next/image.
 * - Defaults to lazy loading unless `priority` is set (hero / above-the-fold).
 * - Requires meaningful `alt` text for accessibility.
 */
export function OptimizedImage({
  alt,
  priority = false,
  className,
  sizes,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      alt={alt}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
      className={cn(className)}
      {...props}
    />
  );
}
