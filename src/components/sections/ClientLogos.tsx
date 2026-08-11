import { clients } from "@/config/clients";
import Image from "next/image";

/**
 * Continuous, seamless auto-scrolling strip of client logos.
 * Pure CSS animation (translateX loop over a doubled list) so it never
 * drops frames the way a JS-driven marquee can, pauses on hover, and
 * respects prefers-reduced-motion. No Tailwind config changes required —
 * the keyframes are scoped locally via styled-jsx.
 */
export function ClientLogos() {
  // Duplicate the list so the loop can reset invisibly at the halfway point.
  const track = [...clients, ...clients];

  return (
    <div
      className="logoMarquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      role="region"
      aria-label="Trusted by leading fleet operators"
    >
      <div className="track flex w-max items-center gap-12 sm:gap-16">
        {track.map((client, i) => (
          // <div
          //   key={`${client.id}-${i}`}
          //   className="relative h-8 w-24 shrink-0 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-20 sm:w-52"
          //   aria-hidden={i >= clients.length ? "true" : undefined}
          // >
          <div
            key={`${client.id}-${i}`}
            className="relative h-8 w-24 shrink-0 transition-all duration-300 opacity-100 grayscale-0 sm:h-20 sm:w-52"
            aria-hidden={i >= clients.length ? "true" : undefined}
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              sizes="220px"
              className="object-contain"
            />
          </div>
        ))}
      </div>
      {/* 
      <style jsx>{`
        .track {
          animation: scroll 34s linear infinite;
        }
        .logoMarquee:hover .track {
          animation-play-state: paused;
        }
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none;
          }
        }
      `}</style> */}
    </div>
  );
}