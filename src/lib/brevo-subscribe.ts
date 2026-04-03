const BREVO_API = "https://api.brevo.com/v3";

type BrevoErrorBody = { code?: string; message?: string };

function parseListIds(): number[] {
  const raw = process.env.BREVO_NEWSLETTER_LIST_ID?.trim() ?? "";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => parseInt(s, 10))
    .filter((n) => Number.isFinite(n));
}

function isDuplicateError(body: BrevoErrorBody): boolean {
  const c = body.code;
  return c === "duplicate_parameter" || c === "duplicate_request";
}

/** `https://` + **`DOMAIN_NAME`** + **`BREVO_DOI_REDIRECT_PATH`** (required in `next.config.ts`). */
function getBrevoDoiRedirectUrl(): string | undefined {
  const pathRaw = process.env.BREVO_DOI_REDIRECT_PATH?.trim();
  const domain = process.env.DOMAIN_NAME?.trim();
  if (!pathRaw || !domain) return undefined;
  const path = pathRaw.startsWith("/") ? pathRaw : `/${pathRaw}`;
  return `https://${domain}${path}`;
}

export type SubscribeNewsletterResult =
  | { success: true }
  | { success: false; httpStatus: number; publicMessage: string };

/** Server-only: POST Brevo `doubleOptinConfirmation` (required env in `next.config.ts`). */
export async function subscribeNewsletterEmail(
  email: string,
): Promise<SubscribeNewsletterResult> {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const listIds = parseListIds();
  const doiTemplateRaw = process.env.BREVO_DOI_TEMPLATE_ID?.trim();
  const redirectUrl = getBrevoDoiRedirectUrl();

  if (!apiKey || listIds.length === 0 || !doiTemplateRaw || !redirectUrl) {
    return {
      success: false,
      httpStatus: 500,
      publicMessage: "Newsletter is not configured.",
    };
  }

  const templateId = parseInt(doiTemplateRaw, 10);
  if (!Number.isFinite(templateId)) {
    return {
      success: false,
      httpStatus: 500,
      publicMessage: "Newsletter is not configured.",
    };
  }

  const headers = {
    accept: "application/json",
    "content-type": "application/json",
    "api-key": apiKey,
  } as const;

  const res = await fetch(`${BREVO_API}/contacts/doubleOptinConfirmation`, {
    method: "POST",
    cache: "no-store",
    headers: { ...headers },
    body: JSON.stringify({
      email,
      includeListIds: listIds,
      templateId,
      redirectionUrl: redirectUrl,
    }),
  });

  if (res.ok) {
    return { success: true };
  }

  let body: BrevoErrorBody = {};
  try {
    body = (await res.json()) as BrevoErrorBody;
  } catch {
    /* ignore */
  }
  if (isDuplicateError(body)) {
    return { success: true };
  }
  if (res.status === 400 && body.code === "invalid_parameter") {
    return {
      success: false,
      httpStatus: 400,
      publicMessage: "Invalid email address.",
    };
  }
  return {
    success: false,
    httpStatus: 502,
    publicMessage: "Could not send confirmation email. Try again later.",
  };
}
