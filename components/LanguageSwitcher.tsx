"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  isLocale,
  LANGUAGE_STORAGE_KEY,
  type Locale,
} from "@/lib/language";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  switchTo: string;
};

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function saveLocale(locale: Locale) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
  document.cookie = `${LANGUAGE_STORAGE_KEY}=${locale}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`;
  document.documentElement.lang = locale;
}

export function LanguageSwitcher({ locale, label, switchTo }: LanguageSwitcherProps) {
  const router = useRouter();
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null);
  const activeLocale = pendingLocale ?? locale;

  useEffect(() => {
    document.documentElement.lang = locale;

    const storedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (isLocale(storedLocale) && storedLocale !== locale) {
      saveLocale(storedLocale);
      router.refresh();
    }
  }, [locale, router]);

  function selectLocale(nextLocale: Locale) {
    if (nextLocale === activeLocale) return;
    saveLocale(nextLocale);
    setPendingLocale(nextLocale);
    router.refresh();
  }

  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {(["ru", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          className={activeLocale === option ? "is-active" : ""}
          aria-label={`${switchTo} ${option.toUpperCase()}`}
          aria-pressed={activeLocale === option}
          onClick={() => selectLocale(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
