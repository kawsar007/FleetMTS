import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-ink">
      <PageContainer className="flex flex-col items-center py-24 text-center">
        <span className="font-mono text-sm uppercase tracking-[0.14em] text-live">
          404 · Off route
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white sm:text-5xl">
          This page left the fleet.
        </h1>
        <p className="mt-4 max-w-md text-slate-dim">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/" tone="dark">
            Back to homepage
          </PrimaryButton>
          <SecondaryButton href="/#contact" tone="dark">
            Contact us
          </SecondaryButton>
        </div>
      </PageContainer>
    </main>
  );
}
