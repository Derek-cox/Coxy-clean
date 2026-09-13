import type { Lead } from "@/lib/leads";

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  BookingKoala adapter
 * ─────────────────────────────────────────────────────────────────────────
 *
 *  VERIFIED (from BookingKoala's own integration docs):
 *   • Auth is an API key generated under
 *     Settings → General → Apps & Integrations → Make, PLUS your account
 *     subdomain. Both are required — the key alone does not identify you.
 *   • Accounts live at https://<subdomain>.bookingkoala.com
 *   • A "Create lead" action exists in their Make/Zapier integration.
 *
 *  NOT VERIFIED — BookingKoala does not publish a REST reference, and their
 *  help center blocks automated fetches. These three things are therefore
 *  CONFIGURABLE rather than guessed into the code, and default to the most
 *  conventional shape:
 *   • the lead endpoint path   → BOOKINGKOALA_LEAD_PATH
 *   • the auth header name     → BOOKINGKOALA_AUTH_HEADER
 *   • the request field names  → see toBookingKoalaPayload() below
 *
 *  HOW TO CONFIRM THE REAL VALUES IN ~2 MINUTES:
 *   In Make, add BookingKoala's "Make an API Call" module, connect it with
 *   your key + subdomain, and look at the URL field — it shows the path the
 *   app calls. Or run their "Create lead" module once and inspect the
 *   request in the execution log; it lists the exact field names.
 *   Then set the env vars below. No code change needed.
 *
 *  Until they are confirmed, a wrong path simply fails the call, the error
 *  is logged in full, and the lead is routed to the fallback notifier — it
 *  is never dropped.
 * ─────────────────────────────────────────────────────────────────────────
 */

const TIMEOUT_MS = 10_000;

export type BookingKoalaResult =
  | { ok: true; status: number; body: unknown }
  | { ok: false; reason: string; status?: number; body?: string };

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

/**
 * Maps our lead onto BookingKoala's expected body.
 *
 * Field names follow the conventional shape. If BookingKoala rejects the
 * payload, the 4xx response body is logged verbatim — it normally names the
 * field it wanted — and this is the one function to adjust.
 */
function toBookingKoalaPayload(lead: Lead) {
  const [firstName, ...rest] = lead.name.split(/\s+/);
  return {
    first_name: firstName,
    last_name: rest.join(" ") || "-",
    email: lead.email,
    phone: lead.phone,
    address: lead.address,
    city: lead.city,
    zip_code: lead.zip,
    state: "PA",
    service: lead.service,
    extras: lead.addOns,
    sqft: lead.sqft ?? undefined,
    notes: [
      lead.message,
      lead.addOns.length ? `Add-ons: ${lead.addOns.join(", ")}` : "",
      lead.sqft ? `Approx. ${lead.sqft} sq ft` : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
    source: lead.source,
  };
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
      body: JSON.stringify(toBookingKoalaPayload(lead)),
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
    resolvedUrl: base ? new URL(path, base).toString() : null,
  };
}
