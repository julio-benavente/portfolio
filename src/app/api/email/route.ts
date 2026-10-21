import { NextResponse } from "next/server";
import { validateEmail, validateMessage, validateName } from "@/lib/validation";
import { confirmationEmail, notificationEmail } from "./templates";

const OWNER_EMAIL = "julio.benavente.02@gmail.com";
// Resend's shared test sender. It only delivers to the email you signed up to Resend with.
// Once juliobenavente.com is verified in Resend, set RESEND_FROM="Julio Benavente <hello@juliobenavente.com>".
const FROM = process.env.RESEND_FROM || "Julio Benavente <onboarding@resend.dev>";

// A real message is far smaller than this, so anything bigger is rejected before it is parsed
const MAX_BODY_LENGTH = 20_000;

const json = (body: object, status: number) => NextResponse.json(body, { status });

interface Email {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}

// Resend REST API: https://resend.com/docs/api-reference/emails/send-email
const sendEmail = async (apiKey: string, { replyTo, ...email }: Email) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, reply_to: replyTo, ...email }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded with ${response.status}: ${await response.text()}`);
  }
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json({ error: "Email is not configured." }, 500);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) {
    return json({ error: "The request is too large." }, 413);
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return json({ error: "Invalid request." }, 400);
  }

  // Hidden "website" field: people never see it, bots fill it in. Pretend it worked and send nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  // Same rules as the form, checked again here because the browser can't be trusted
  const problem = [validateName(name), validateEmail(email), validateMessage(message)].find(
    (result) => result !== true
  );
  if (problem) {
    return json({ error: problem }, 400);
  }

  const contact = { name, email, message };

  // The message to me is the important one: if it fails, the visitor should see an error
  try {
    await sendEmail(apiKey, { to: OWNER_EMAIL, replyTo: email, ...notificationEmail(contact) });
  } catch (error) {
    console.error("Could not send the contact message:", error);
    return json({ error: "Could not send the message." }, 502);
  }

  // The confirmation to the visitor is a courtesy: log a failure but still report success
  try {
    await sendEmail(apiKey, { to: email, ...confirmationEmail(contact) });
  } catch (error) {
    console.error("Could not send the confirmation email:", error);
  }

  return json({ ok: true }, 200);
}
