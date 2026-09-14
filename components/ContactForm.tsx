"use client";

import { useState, type FormEvent } from "react";
import { ADD_ONS, SERVICE_TYPES, SQFT_SERVICES } from "@/lib/leads";

type Status =
  | "idle"
  | "submitting"
  | "created"
  | "received_fallback"
  | "failed";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-accent-700">{message}</p>;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [service, setService] = useState<string>("Residential Cleaning");

  const showSqft = SQFT_SERVICES.includes(service);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      address: data.get("address"),
      apt: data.get("apt"),
      city: data.get("city"),
      zip: data.get("zip"),
      service: data.get("service"),
      addOns: data.getAll("addOns"),
      sqft: showSqft ? data.get("sqft") : "",
      message: data.get("message"),
      company: data.get("company"), // honeypot
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (response.status === 201) {
        setStatus("created");
        form.reset();
        return;
      }
      if (response.status === 202) {
        setStatus("received_fallback");
        form.reset();
        return;
      }
      if (response.status === 400) {
        setErrors(result?.errors ?? {});
        setStatus("idle");
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  // Only a confirmed BookingKoala lead gets the clean success message.
  if (status === "created") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-brand-900">
          Your request is in.
        </h3>
        <p className="mt-2 text-sm text-brand-800">
          It&apos;s booked into our system and we&apos;ll get back to you with
          a quote, usually within one business day.
        </p>
      </div>
    );
  }

  // BookingKoala did not confirm, but the owner was notified directly. Say so
  // plainly rather than claiming a success that did not happen.
  if (status === "received_fallback") {
    return (
      <div className="rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-brand-950">
          We&apos;ve got your request.
        </h3>
        <p className="mt-2 text-sm text-slate-700">
          It came through to us directly, and the owner has been notified. You
          should hear back within one business day.
        </p>
        <p className="mt-4 text-sm text-slate-600">
          If it&apos;s urgent, call{" "}
          <a
            href="tel:+18142807074"
            className="font-semibold text-brand-700 underline underline-offset-4"
          >
            (814) 280-7074
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from people, tempting to bots. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company">Company (leave blank)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name"
            className={inputClass} placeholder="Jane Smith" />
          <FieldError message={errors.name} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel"
            className={inputClass} placeholder="(814) 555-0123" />
          <FieldError message={errors.phone} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email"
          className={inputClass} placeholder="jane@example.com" />
        <FieldError message={errors.email} />
      </div>

      <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-slate-700">
            Street address
          </label>
          <input id="address" name="address" type="text" required autoComplete="street-address"
            className={inputClass} placeholder="123 Main St" />
          <FieldError message={errors.address} />
        </div>
        <div>
          <label htmlFor="apt" className="block text-sm font-medium text-slate-700">
            Apt / Unit <span className="text-slate-400">(optional)</span>
          </label>
          <input id="apt" name="apt" type="text" autoComplete="address-line2"
            className={inputClass} placeholder="4B" />
          <FieldError message={errors.apt} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-slate-700">
            City
          </label>
          <input id="city" name="city" type="text" required autoComplete="address-level2"
            className={inputClass} placeholder="State College" />
          <FieldError message={errors.city} />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-slate-700">
            ZIP code
          </label>
          <input id="zip" name="zip" type="text" required inputMode="numeric"
            autoComplete="postal-code" className={inputClass} placeholder="16801" />
          <FieldError message={errors.zip} />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700">
          What do you need cleaned?
        </label>
        <select id="service" name="service" value={service}
          onChange={(event) => setService(event.target.value)}
          className={`${inputClass} bg-white`}>
          {SERVICE_TYPES.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <FieldError message={errors.service} />
      </div>

      {showSqft && (
        <div>
          <label htmlFor="sqft" className="block text-sm font-medium text-slate-700">
            Approximate square footage{" "}
            <span className="text-slate-400">(optional)</span>
          </label>
          <input id="sqft" name="sqft" type="text" inputMode="numeric"
            className={inputClass} placeholder="1800" />
          <p className="mt-1.5 text-xs text-slate-500">
            Move-out and deep cleans are quoted per square foot, so this helps
            us get closer on the first try.
          </p>
          <FieldError message={errors.sqft} />
        </div>
      )}

      <fieldset>
        <legend className="text-sm font-medium text-slate-700">
          Add-ons <span className="text-slate-400">(optional)</span>
        </legend>
        <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
          {ADD_ONS.map((addOn) => (
            <label key={addOn}
              className="flex cursor-pointer items-center gap-2.5 rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700 transition-colors hover:border-brand-300 hover:bg-brand-50">
              <input type="checkbox" name="addOns" value={addOn}
                className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-600" />
              {addOn}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Anything else? <span className="text-slate-400">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={inputClass}
          placeholder="Tell us about your space and when you'd like it cleaned..." />
        <FieldError message={errors.message} />
      </div>

      {status === "failed" && (
        <div className="rounded-lg border border-accent-200 bg-accent-50 p-4 text-sm text-accent-800">
          <p className="font-semibold">We couldn&apos;t submit your request.</p>
          <p className="mt-1">
            Please call{" "}
            <a href="tel:+18142807074" className="font-semibold underline">
              (814) 280-7074
            </a>{" "}
            or email{" "}
            <a href="mailto:hello@coxyclean.com" className="font-semibold underline">
              hello@coxyclean.com
            </a>{" "}
            so we don&apos;t miss you.
          </p>
        </div>
      )}

      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-accent-700">
          Please fix the highlighted fields and try again.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"}
        className="btn-shine w-full rounded-full bg-brand-800 px-6 py-3 text-sm font-bold text-white shadow-glow-brand transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-900 hover:shadow-glow-accent active:translate-y-0 disabled:pointer-events-none disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
        {status === "submitting" ? "Sending..." : "Request My Free Quote"}
      </button>
    </form>
  );
}
