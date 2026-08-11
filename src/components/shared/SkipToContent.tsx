/**
 * Visually hidden until focused — lets keyboard users jump straight past
 * the navbar to the main content instead of tabbing through every link.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-lg bg-ink px-4 py-3 text-sm font-medium text-white opacity-0 transition-all duration-150 focus:translate-y-0 focus:opacity-100"
    >
      Skip to main content
    </a>
  );
}
