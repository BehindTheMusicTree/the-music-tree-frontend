import { NextResponse } from "next/server";
import { subscribeNewsletterEmail } from "@/lib/brevo-subscribe";

const EMAIL_MAX = 320;

function isValidEmail(s: string): boolean {
  if (s.length === 0 || s.length > EMAIL_MAX) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
  const o = body as Record<string, unknown>;
  const website = typeof o.website === "string" ? o.website : "";
  if (website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }
  const emailRaw =
    typeof o.email === "string" ? o.email.trim().toLowerCase() : "";
  if (!isValidEmail(emailRaw)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const result = await subscribeNewsletterEmail(emailRaw);
  if (!result.success) {
    return NextResponse.json(
      { ok: false, error: result.publicMessage },
      { status: result.httpStatus },
    );
  }
  return NextResponse.json({ ok: true });
}
