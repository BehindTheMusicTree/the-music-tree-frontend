import { NextResponse, type NextRequest } from "next/server";
import { resolveUnprefixedPublicLocale } from "@/i18n/locale-detection";
import {
  getLocaleFromPathname,
  LOCALE_COOKIE_NAME,
  LOCALE_REQUEST_HEADER,
  stripLocalePrefix,
  withLocalePrefix,
} from "@/i18n/routing";

// Repo root: Turbopack (`turbopack.root` in next.config) resolves middleware here, not only under `src/`.
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname.match(/\.[^/]+$/)
  ) {
    return NextResponse.next();
  }

  const localeInPath = getLocaleFromPathname(pathname);
  if (localeInPath) {
    const internalPath = stripLocalePrefix(pathname);
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = internalPath;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_REQUEST_HEADER, localeInPath);
    const response = NextResponse.rewrite(rewriteUrl, {
      request: { headers: requestHeaders },
    });
    response.cookies.set(LOCALE_COOKIE_NAME, localeInPath, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  const targetLocale = resolveUnprefixedPublicLocale(request);
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = withLocalePrefix(pathname, targetLocale);
  redirectUrl.search = search;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
