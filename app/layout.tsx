import type { Metadata, Viewport } from "next";
import { getTranslations } from "@/lib/content";
import { getRequestLocale } from "@/lib/request-locale";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { meta } = getTranslations(locale);

  return {
    title: meta.title,
    description: meta.description,
    keywords: locale === "ru"
      ? ["веб-разработка", "Telegram Mini App", "автоматизация", "AI-агенты", "цифровые продукты"]
      : ["web development", "Telegram Mini App", "automation", "AI agents", "digital products"],
    openGraph: { title: meta.ogTitle, description: meta.ogDescription, type: "website", locale: meta.locale },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#101011" };

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getRequestLocale();
  return <html lang={locale} suppressHydrationWarning><body>{children}</body></html>;
}
