/** Shape of a lead after server-side validation. */
export type Lead = {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  service: string;
  addOns: string[];
  sqft: number | null;
  message: string;
  source: string;
};

export const SERVICE_TYPES = [
  "Airbnb Turnover",
  "Residential Cleaning",
  "Commercial Cleaning",
  "Move-In / Move-Out",
  "Deep Clean",
  "Something else",
] as const;

export const ADD_ONS = [
  "Inside of appliances",
  "Windows",
  "Unfinished area sweep",
  "Garage floor sweep and dust",
] as const;

/** Services priced by square footage, so the sqft field is worth asking for. */
export const SQFT_SERVICES = ["Move-In / Move-Out", "Deep Clean"];

export type ValidationResult =
  | { ok: true; lead: Lead }
  | { ok: false; errors: Record<string, string> };

function str(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Validates and normalizes an untrusted request body. The client validates
 * too, but this is the copy that decides — never trust the browser.
 */
export function validateLead(body: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const b = (body ?? {}) as Record<string, unknown>;

  const name = str(b.name);
  const email = str(b.email);
  const phoneRaw = str(b.phone);
  const address = str(b.address);
  const city = str(b.city);
  const zip = str(b.zip);
  const service = str(b.service);
  const message = str(b.message);

  if (name.length < 2) errors.name = "Please enter your name.";
  // Deliberately permissive: the only thing worth rejecting here is input
  // that clearly is not an address at all.
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  const phoneDigits = phoneRaw.replace(/\D/g, "");
  if (phoneDigits.length < 10) errors.phone = "Please enter a valid phone number.";
  if (address.length < 4) errors.address = "Please enter your street address.";
  if (city.length < 2) errors.city = "Please enter your city.";
  if (!/^\d{5}(-\d{4})?$/.test(zip)) errors.zip = "Please enter a valid ZIP code.";
  if (!SERVICE_TYPES.includes(service as (typeof SERVICE_TYPES)[number])) {
    errors.service = "Please choose a service.";
  }

  const addOns = Array.isArray(b.addOns)
    ? b.addOns
        .map(str)
        .filter((a): a is string =>
          ADD_ONS.includes(a as (typeof ADD_ONS)[number])
        )
    : [];

  let sqft: number | null = null;
  if (str(b.sqft) !== "") {
    const n = Number(str(b.sqft).replace(/[^\d.]/g, ""));
    if (!Number.isFinite(n) || n <= 0 || n > 100000) {
      errors.sqft = "Please enter a realistic square footage.";
    } else {
      sqft = Math.round(n);
    }
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    lead: {
      name,
      email,
      phone: phoneDigits.length === 10 ? phoneDigits : phoneRaw,
      address,
      city,
      zip,
      service,
      addOns,
      sqft,
      message: message.slice(0, 2000),
      source: "coxyclean.com website form",
    },
  };
}

/** Plain-text rendering used by the fallback notification. */
export function leadToText(lead: Lead): string {
  return [
    `Name:     ${lead.name}`,
    `Phone:    ${lead.phone}`,
    `Email:    ${lead.email}`,
    `Address:  ${lead.address}, ${lead.city} ${lead.zip}`,
    `Service:  ${lead.service}`,
    `Add-ons:  ${lead.addOns.length ? lead.addOns.join(", ") : "none"}`,
    `Sq ft:    ${lead.sqft ?? "not given"}`,
    "",
    "Message:",
    lead.message || "(none)",
  ].join("\n");
}
