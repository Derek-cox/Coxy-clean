import { NextResponse } from "next/server";
import { configSummary, createLead, isConfigured } from "@/lib/bookingkoala";
import { notifyConfigSummary, notifyOwner } from "@/lib/notify";
import { validateLead } from "@/lib/leads";

// Leads must never be cached or prerendered.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Lead intake.
 *
 * Response contract — the client keys its message off `status`:
 *   201 created           BookingKoala confirmed the lead. Only this one
 *                         shows the customer a success message.
 *   202 received_fallback BookingKoala failed, but the owner was notified
 *                         through a fallback channel. The lead is safe.
 *   400 invalid           Validation failed; `errors` is per-field.
 *   502 failed            BookingKoala failed AND every fallback failed.
 *                         The lead is still in the server log.
 */
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  if (body === null || typeof body !== "object") {
    return NextResponse.json(
      { status: "invalid", errors: { form: "Malformed request." } },
      { status: 400 }
    );
  }

  // Honeypot: a real person never fills a hidden field. Answer 201 so bots
  // cannot tell they were caught, but do not touch BookingKoala.
  const honeypot = (body as Record<string, unknown>)?.company;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ status: "created" }, { status: 201 });
  }

  const result = validateLead(body);
  if (!result.ok) {
    return NextResponse.json(
      { status: "invalid", errors: result.errors },
      { status: 400 }
    );
  }
  const lead = result.lead;

  if (!isConfigured()) {
    const delivered = await notifyOwner(
      lead,
      "BookingKoala is not configured on this deployment (missing BOOKINGKOALA_API_KEY or BOOKINGKOALA_SUBDOMAIN)."
    );
    return NextResponse.json(
      { status: delivered ? "received_fallback" : "failed" },
      { status: delivered ? 202 : 502 }
    );
  }

  const bk = await createLead(lead);

  if (bk.ok) {
    return NextResponse.json({ status: "created" }, { status: 201 });
  }

  // Full detail server-side only — never returned to the browser.
  console.error(
    "[lead] BookingKoala createLead failed:",
    JSON.stringify({
      reason: bk.reason,
      httpStatus: bk.status ?? null,
      responseBody: bk.body ?? null,
      sentFieldNames: bk.sentKeys ?? null,
      fieldCase: configSummary().fieldCase,
      target: configSummary().resolvedUrl,
    })
  );

  const delivered = await notifyOwner(lead, bk.reason);
  return NextResponse.json(
    { status: delivered ? "received_fallback" : "failed" },
    { status: delivered ? 202 : 502 }
  );
}

/**
 * Config diagnostic. Reports which env vars are present and what URL the
 * lead call resolves to — never the secrets themselves. Requires
 * LEAD_DIAGNOSTIC_TOKEN and returns 404 when that is unset, so the route is
 * invisible unless you deliberately turn it on.
 *
 *   curl "https://coxyclean.com/api/lead?token=YOUR_TOKEN"
 */
export async function GET(request: Request) {
  const expected = process.env.LEAD_DIAGNOSTIC_TOKEN;
  const provided = new URL(request.url).searchParams.get("token");

  if (!expected || provided !== expected) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.json({
    bookingKoala: configSummary(),
    fallback: notifyConfigSummary(),
    note: "leadPath and authHeader are defaults until confirmed against your BookingKoala account. See lib/bookingkoala.ts.",
  });
}
