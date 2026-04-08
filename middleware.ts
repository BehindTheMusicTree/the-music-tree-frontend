import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
  withLocalePrefix,
} from "@/i18n/routing";

const COOKIE_NAME = "the-music-tree-language";

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
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, localeInPath, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  const targetLocale = cookieLocale === "fr" ? "fr" : DEFAULT_LOCALE;
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = withLocalePrefix(pathname, targetLocale);
  redirectUrl.search = search;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
