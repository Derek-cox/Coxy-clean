import { leadToText, type Lead } from "@/lib/leads";

/**
 * Fallback notification: runs only when BookingKoala did not confirm the
 * lead. Tries every configured channel and reports whether any landed, so a
 * lead is never lost to a silent failure.
 *
 * Channels, all optional and all plain fetch (no extra dependencies):
 *   1. Email via Resend  — RESEND_API_KEY + LEAD_NOTIFY_TO
 *   2. Webhook           — LEAD_FALLBACK_WEBHOOK_URL (Slack-compatible)
 *   3. Server log        — always, and always last so it runs even if the
 *                          others throw. Visible in the Vercel logs.
 */

const TIMEOUT_MS = 8_000;

async function postJson(
  url: string,
  body: unknown,
  headers: Record<string, string> = {}
) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(body),
      signal: controller.signal,
      cache: "no-store",
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`${res.status} ${text.slice(0, 300)}`);
    }
    return true;
  } finally {
    clearTimeout(timer);
  }
}

async function sendEmail(lead: Lead, failureReason: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_TO;
  if (!apiKey || !to) return false;

  // Resend's shared sender works with no domain setup; override it with
  // LEAD_NOTIFY_FROM once coxyclean.com is verified in Resend.
  const from = process.env.LEAD_NOTIFY_FROM || "CoxyClean <onboarding@resend.dev>";

  try {
    await postJson(
      "https://api.resend.com/emails",
      {
        from,
        to: to.split(",").map((address) => address.trim()),
        reply_to: lead.email,
        subject: `ACTION NEEDED — new lead not saved to BookingKoala (${lead.name})`,
        text: [
          "A lead came in through the website, but BookingKoala did NOT confirm it.",
          "Add this one to BookingKoala by hand, and follow up with the customer.",
          "",
          `Reason: ${failureReason}`,
          "",
          "───────────── LEAD ─────────────",
          leadToText(lead),
        ].join("\n"),
      },
      { Authorization: `Bearer ${apiKey}` }
    );
    return true;
  } catch (error) {
    console.error("[lead] Resend notification failed:", error);
    return false;
  }
}

async function sendWebhook(lead: Lead, failureReason: string): Promise<boolean> {
  const url = process.env.LEAD_FALLBACK_WEBHOOK_URL;
  if (!url) return false;
  try {
    await postJson(url, {
      text: `*New lead NOT saved to BookingKoala* (${failureReason})\n\`\`\`${leadToText(
        lead
      )}\`\`\``,
      lead,
      failureReason,
    });
    return true;
  } catch (error) {
    console.error("[lead] Webhook notification failed:", error);
    return false;
  }
}

/** Returns true if at least one channel accepted the notification. */
export async function notifyOwner(
  lead: Lead,
  failureReason: string
): Promise<boolean> {
  const results = await Promise.allSettled([
    sendEmail(lead, failureReason),
    sendWebhook(lead, failureReason),
  ]);

  const delivered = results.some(
    (result) => result.status === "fulfilled" && result.value === true
  );

  // Always emit the full lead to the server log, whatever else happened.
  // This is the last line of defence: even with no channel configured, the
  // lead is recoverable from the Vercel logs.
  console.error(
    "[lead] BookingKoala did not confirm this lead.",
    JSON.stringify({ failureReason, delivered, lead })
  );

  return delivered;
}

export function notifyConfigSummary() {
  return {
    resendConfigured: Boolean(
      process.env.RESEND_API_KEY && process.env.LEAD_NOTIFY_TO
    ),
    webhookConfigured: Boolean(process.env.LEAD_FALLBACK_WEBHOOK_URL),
    notifyTo: process.env.LEAD_NOTIFY_TO ? "set" : null,
  };
}
