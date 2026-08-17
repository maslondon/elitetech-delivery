"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-stone/60 focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/30";

const labelClasses = "text-sm font-medium text-ink";

type ContactFormProps = {
  email: string;
  submitButtonLabel: string;
  successHeading: string;
  successBody: string;
};

export function ContactForm({ email, submitButtonLabel, successHeading, successBody }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      phone: String(data.get("phone") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white/60 p-8 ring-1 ring-ink/10 sm:p-10">
        <h2 className="text-xl font-medium tracking-tight text-ink">{successHeading}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-stone">
          {successBody}{" "}
          <a href={`mailto:${email}`} className="text-bronze-dark hover:underline">
            {email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name <span className="text-bronze-dark">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={`mt-2 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span className="text-bronze-dark">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={`mt-2 ${inputClasses}`} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" className={`mt-2 ${inputClasses}`} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone <span className="text-stone">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={`mt-2 ${inputClasses}`} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          What are you trying to achieve? <span className="text-bronze-dark">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`mt-2 ${inputClasses} resize-none`}
          placeholder="A new website, a web application, an AI or automation idea, or help with delivery — a few lines is plenty to start."
        />
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <Button as="button" type="submit" variant="primary" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : submitButtonLabel}
      </Button>

      <p className="text-xs leading-relaxed text-stone">
        By submitting this form you agree to be contacted about your
        enquiry. We won&apos;t use your details for anything else.
      </p>
    </form>
  );
}
