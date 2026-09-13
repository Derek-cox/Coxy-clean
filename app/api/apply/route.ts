import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Job application intake.
 *
 * Applications are not BookingKoala leads, so this route does not touch that
 * API. It exists because the hiring form was pointed at the same placeholder
 * Formspree ID as the lead form and was losing applications the same way.
 * It emails the owner and always logs, so nothing is dropped silently.
 */

export async function POST(request: Request) {
  const raw: unknown = await request.json().catch(() => null);
  if (raw === null || typeof raw !== "object") {
    return NextResponse.json({ status: "invalid" }, { status: 400 });
  }
  const body = raw as Record<string, unknown>;

  const get = (key: string) =>
    typeof body[key] === "string" ? (body[key] as string).trim() : "";

  const name = get("name");
  const email = get("email");
  const phone = get("phone");

  if (name.length < 2 || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
    return NextResponse.json({ status: "invalid" }, { status: 400 });
  }

  const text = [
    `Name:        ${name}`,
    `Email:       ${email}`,
    `Phone:       ${phone || "(none)"}`,
    `Experience:  ${get("experience") || "(none)"}`,
    `Availability:${get("availability") || "(none)"}`,
    `Transport:   ${get("transportation") || "(none)"}`,
    "",
    "About them:",
    get("message") || "(none)",
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CAREERS_NOTIFY_TO || process.env.LEAD_NOTIFY_TO;
  let delivered = false;

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from:
            process.env.LEAD_NOTIFY_FROM || "CoxyClean <onboarding@resend.dev>",
          to: to.split(",").map((address) => address.trim()),
          reply_to: email,
          subject: `New CoxyClean application — ${name}`,
          text,
        }),
        cache: "no-store",
      });
      delivered = res.ok;
      if (!res.ok) {
        console.error("[apply] Resend failed:", res.status, await res.text());
      }
    } catch (error) {
      console.error("[apply] Resend threw:", error);
    }
  }

  console.error("[apply] Application received.", JSON.stringify({ delivered, name, email, phone }));

  return NextResponse.json(
    { status: delivered ? "sent" : "logged" },
    { status: delivered ? 201 : 202 }
  );
}
