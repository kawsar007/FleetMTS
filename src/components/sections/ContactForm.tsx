"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-dim transition-colors focus:border-signal focus:outline-none";

/**
 * Contact form UI. Not wired to a backend yet — `handleSubmit` is where
 * a real endpoint (API route, email service, or CRM webhook) should be
 * plugged in. Currently simulates a network request so the success/
 * error states can be reviewed.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      // TODO: replace with a real submission — e.g.
      // await fetch("/api/contact", { method: "POST", body: new FormData(event.currentTarget) });
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-live" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-ink">
          Message sent
        </h3>
        <p className="max-w-xs text-sm text-slate">
          Thanks for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-signal hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Rahman"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
            Company <span className="font-normal text-slate-dim">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company name"
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Tell us about your fleet and what you're looking for."
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <PrimaryButton
          type="submit"
          disabled={status === "submitting"}
          className="min-w-[160px]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "submitting" ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending…
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Send message
              </motion.span>
            )}
          </AnimatePresence>
        </PrimaryButton>

        {status === "error" ? (
          <p className="text-sm text-red-600" role="alert">
            Something went wrong — please try again.
          </p>
        ) : null}
      </div>
    </form>
  );
}
