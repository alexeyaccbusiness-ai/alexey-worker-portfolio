export const LANGUAGE_STORAGE_KEY = "alexey-worker-language";
export const LANGUAGE_REQUEST_HEADER = "x-alexey-worker-language";

export const RUSSIAN_SPEAKING_COUNTRIES = ["RU", "BY", "KZ", "KG"] as const;

export type Locale = "ru" | "en";

export function isLocale(value: string | undefined | null): value is Locale {
  return value === "ru" || value === "en";
}

export function localeFromCountry(country: string | null): Locale | null {
  if (!country) return null;
  return RUSSIAN_SPEAKING_COUNTRIES.includes(
    country.toUpperCase() as (typeof RUSSIAN_SPEAKING_COUNTRIES)[number],
  )
    ? "ru"
    : "en";
}

export function localeFromAcceptLanguage(value: string | null): Locale {
  return value?.trim().toLowerCase().startsWith("ru") ? "ru" : "en";
}
