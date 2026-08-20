import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Shown to the visitor whenever we could not hand the enquiry to Resend.
 * Telling them to email directly matters more than looking polished: an
 * enquiry the visitor thinks was sent, but never arrives, is a lost client.
 */
const DELIVERY_FAILED_MESSAGE =
  `We couldn't send your enquiry just now. Please email ${siteConfig.email} directly and we'll come straight back to you.`;

/**
 * Logged at error level so a failed enquiry is still recoverable from the
 * platform logs, rather than being lost entirely.
 */
function logUndeliveredEnquiry(reason: string, enquiry: Record<string, unknown>, detail?: unknown) {
  console.error("[contact] ENQUIRY NOT DELIVERED —", reason, {
    ...enquiry,
    detail,
    recoverFrom: "these logs — the visitor was told to email directly",
  });
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, phone, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email and a short description are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const enquiry = {
    name,
    email,
    company: company || undefined,
    phone: phone || undefined,
    message,
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    logUndeliveredEnquiry("RESEND_API_KEY is not set on this environment", enquiry);
    return NextResponse.json({ error: DELIVERY_FAILED_MESSAGE }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    // Resend resolves with { data, error } rather than throwing on API
    // errors, so the error field must be checked explicitly — a rejected
    // key or exhausted quota would otherwise look like a successful send.
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || `Elite Tech Delivery <${siteConfig.email}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      logUndeliveredEnquiry("Resend rejected the send", enquiry, error);
      return NextResponse.json({ error: DELIVERY_FAILED_MESSAGE }, { status: 502 });
    }

    console.info("[contact] Enquiry delivered", { emailId: data?.id, from: email });
  } catch (thrown) {
    logUndeliveredEnquiry("Could not reach Resend", enquiry, thrown);
    return NextResponse.json({ error: DELIVERY_FAILED_MESSAGE }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
