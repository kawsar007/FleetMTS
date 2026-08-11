import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centers content and applies the shared horizontal page padding. */
export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
