import { NextResponse, type NextRequest } from "next/server";
import {
  isLocale,
  LANGUAGE_REQUEST_HEADER,
  LANGUAGE_STORAGE_KEY,
  localeFromAcceptLanguage,
  localeFromCountry,
} from "./lib/language";

const ONE_YEAR = 60 * 60 * 24 * 365;

export function proxy(request: NextRequest) {
  const savedLocale = request.cookies.get(LANGUAGE_STORAGE_KEY)?.value;
  const country = request.headers.get("x-vercel-ip-country");
  const detectedLocale =
    (isLocale(savedLocale) && savedLocale) ||
    localeFromCountry(country) ||
    localeFromAcceptLanguage(request.headers.get("accept-language"));

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LANGUAGE_REQUEST_HEADER, detectedLocale);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (!isLocale(savedLocale)) {
    response.cookies.set(LANGUAGE_STORAGE_KEY, detectedLocale, {
      path: "/",
      maxAge: ONE_YEAR,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.(?:png|jpg|jpeg|gif|webp|svg)$).*)"],
};
