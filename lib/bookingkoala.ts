import { estimateRange, type Lead } from "@/lib/leads";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  BookingKoala adapter
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  CONFIRMED — auth, from BookingKoala's integration docs:
 *   • An API key (Settings → General → Apps & Integrations → Make) PLUS
 *     your account subdomain. The key alone does not identify the account.
 *   • Accounts live at https://<subdomain>.bookingkoala.com
 *
 *  CONFIRMED — the "Create Lead" field list, read directly from the Make
 *  module:
 *     First Name, Last Name, Email (the only required one), Phone Number,
 *     Referrer Path, Referrer Source, Address, City, State, Zipcode,
 *     Country, Apt
 *
 *  There is NO field for service type, add-ons, square footage, price, or
 *  free-text notes. All of that is packed into Referrer Path as a formatted
 *  string, with a short campaign-style value in Referrer Source.
 *
 *  STILL UNCONFIRMED, so both stay env-overridable rather than guessed:
 *   • the endpoint path  → BOOKINGKOALA_LEAD_PATH   (default /api/v1/leads)
 *   • the auth header    → BOOKINGKOALA_AUTH_HEADER (default api-key)
 *   • how the field LABELS above are spelled on the wire. Make shows human
 *     labels, not JSON keys, so the casing is derived from the labels and
 *     switchable with BOOKINGKOALA_FIELD_CASE:
 *         snake  (default)  first_name, phone_number, referrer_path
 *         camel             firstName,  phoneNumber,  referrerPath
 *         pascal            FirstName,  PhoneNumber,  ReferrerPath
 *         title             "First Name", "Phone Number", "Referrer Path"
 *     If BookingKoala 400s on field names, try the next style — no code
 *     change, and the rejected payload keys are written to the log.
 *
 *  A wrong path or casing fails loudly into the fallback notifier. It never
 *  drops a lead.
 * ─────────────────────────────────────────────────────────────────────────
 */

const TIMEOUT_MS = 10_000;

export type BookingKoalaResult =
  | { ok: true; status: number; body: unknown }
  | {
      ok: false;
      reason: string;
      status?: number;
      body?: string;
      /** Field names we sent, so a rejection can be matched to the casing. */
      sentKeys?: string[];
    };

function config() {
  const apiKey = process.env.BOOKINGKOALA_API_KEY;
  const subdomain = process.env.BOOKINGKOALA_SUBDOMAIN;
  const base =
    process.env.BOOKINGKOALA_API_BASE ||
    (subdomain ? `https://${subdomain}.bookingkoala.com` : "");
  const path = process.env.BOOKINGKOALA_LEAD_PATH || "/api/v1/leads";
  const header = process.env.BOOKINGKOALA_AUTH_HEADER || "api-key";
  return { apiKey, subdomain, base, path, header };
}

/** True when enough is configured to attempt a call at all. */
export function isConfigured(): boolean {
  const { apiKey, base } = config();
  return Boolean(apiKey && base);
}

/** The confirmed Make field labels, in BookingKoala's own wording. */
const FIELD_LABELS = {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone Number",
  referrerPath: "Referrer Path",
  referrerSource: "Referrer Source",
  address: "Address",
  apt: "Apt",
  city: "City",
  state: "State",
  zipcode: "Zipcode",
  country: "Country",
} as const;

type FieldKey = keyof typeof FIELD_LABELS;
type FieldCase = "snake" | "camel" | "pascal" | "title";

// The service area is State College, PA. BookingKoala wants both, and the
// form does not ask for them.
const DEFAULT_STATE = "PA";
const DEFAULT_COUNTRY = "US";

// Referrer Path is the only place the service context can live, so give it
// room, but stay clear of any column limit.
const REFERRER_PATH_MAX = 900;

function cap(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/** Derives the wire key for a label under the configured casing style. */
function toKey(label: string, style: FieldCase): string {
  const words = label.split(/\s+/);
  switch (style) {
    case "title":
      return label;
    case "pascal":
      return words.map(cap).join("");
    case "camel":
      return words
        .map((w, i) => (i === 0 ? w.toLowerCase() : cap(w)))
        .join("");
    case "snake":
    default:
      return words.map((w) => w.toLowerCase()).join("_");
  }
}

/**
 * BookingKoala has no field for service type, add-ons, square footage,
 * price, or notes, so they are packed into one readable string:
 *
 *   Website Lead — Move-In / Move-Out — Add-ons: Windows, Inside of
 *   appliances — 1800 sq ft — Est. $270–$540 — Notes: gate code is 1234
 */
export function buildReferrerPath(lead: Lead): {
  value: string;
  truncated: boolean;
} {
  const estimate = estimateRange(lead.service, lead.sqft);
  const parts = [
    "Website Lead",
    lead.service,
    lead.addOns.length ? `Add-ons: ${lead.addOns.join(", ")}` : "",
    lead.sqft ? `${lead.sqft} sq ft` : "",
    estimate ? `Est. $${estimate.low}\u2013$${estimate.high}` : "",
    lead.message ? `Notes: ${lead.message.replace(/\s+/g, " ")}` : "",
  ].filter(Boolean);

  const full = parts.join(" \u2014 ");
  if (full.length <= REFERRER_PATH_MAX) return { value: full, truncated: false };
  return { value: full.slice(0, REFERRER_PATH_MAX - 1) + "\u2026", truncated: true };
}

function toBookingKoalaPayload(lead: Lead): Record<string, string> {
  const style = (process.env.BOOKINGKOALA_FIELD_CASE || "snake") as FieldCase;
  const [firstName, ...rest] = lead.name.split(/\s+/);
  const referrerPath = buildReferrerPath(lead);

  if (referrerPath.truncated) {
    console.warn(
      `[lead] Referrer Path exceeded ${REFERRER_PATH_MAX} chars and was truncated for ${lead.email}. BookingKoala has no notes field, so the tail of the customer's message is not stored there.`
    );
  }

  const values: Record<FieldKey, string> = {
    firstName,
    // BookingKoala expects a last name; a single-word name would leave it
    // empty, so fall back to a dash rather than sending nothing.
    lastName: rest.join(" ") || "-",
    email: lead.email,
    phone: lead.phone,
    referrerPath: referrerPath.value,
    referrerSource: "coxyclean.com website form",
    address: lead.address,
    apt: lead.apt,
    city: lead.city,
    state: DEFAULT_STATE,
    zipcode: lead.zip,
    country: DEFAULT_COUNTRY,
  };

  const payload: Record<string, string> = {};
  for (const key of Object.keys(values) as FieldKey[]) {
    const value = values[key];
    // Apt is genuinely optional; don't send an empty string for it.
    if (value === "") continue;
    payload[toKey(FIELD_LABELS[key], style)] = value;
  }
  return payload;
}

export async function createLead(lead: Lead): Promise<BookingKoalaResult> {
  const { apiKey, base, path, header } = config();

  if (!apiKey || !base) {
    return {
      ok: false,
      reason:
        "BookingKoala is not configured (BOOKINGKOALA_API_KEY and BOOKINGKOALA_SUBDOMAIN required).",
    };
  }

  const url = new URL(path, base).toString();
  const payload = toBookingKoalaPayload(lead);
  const sentKeys = Object.keys(payload);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        [header]: apiKey,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });

    const text = await response.text();

    if (!response.ok) {
      return {
        ok: false,
        reason: `BookingKoala responded ${response.status}`,
        status: response.status,
        // Capped: this goes to logs, and an HTML error page can be huge.
        body: text.slice(0, 1000),
        sentKeys,
      };
    }

    let parsed: unknown = text;
    try {
      parsed = JSON.parse(text);
    } catch {
      // A 2xx with a non-JSON body still counts as created.
    }
    return { ok: true, status: response.status, body: parsed };
  } catch (error) {
    const aborted = error instanceof Error && error.name === "AbortError";
    return {
      ok: false,
      reason: aborted
        ? `BookingKoala request timed out after ${TIMEOUT_MS}ms`
        : `BookingKoala request failed: ${
            error instanceof Error ? error.message : String(error)
          }`,
      sentKeys,
    };
  } finally {
    clearTimeout(timer);
  }
}

/** Non-secret config summary for the diagnostic endpoint. */
export function configSummary() {
  const { apiKey, subdomain, base, path, header } = config();
  return {
    apiKeyPresent: Boolean(apiKey),
    subdomain: subdomain || null,
    baseUrl: base || null,
    leadPath: path,
    authHeader: header,
    fieldCase: process.env.BOOKINGKOALA_FIELD_CASE || "snake",
    resolvedUrl: base ? new URL(path, base).toString() : null,
  };
}
