import "server-only";

import { cookies, headers } from "next/headers";
import {
  isLocale,
  LANGUAGE_REQUEST_HEADER,
  LANGUAGE_STORAGE_KEY,
  type Locale,
} from "./language";

export async function getRequestLocale(): Promise<Locale> {
  const requestHeaders = await headers();
  const requestLocale = requestHeaders.get(LANGUAGE_REQUEST_HEADER);
  if (isLocale(requestLocale)) return requestLocale;

  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LANGUAGE_STORAGE_KEY)?.value;
  return isLocale(cookieLocale) ? cookieLocale : "en";
}
