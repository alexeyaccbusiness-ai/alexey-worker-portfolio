import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexey Worker — цифровые продукты и автоматизация",
  description: "Сайты, Telegram-продукты, AI-инструменты, интеграции и автоматизация бизнес-процессов — от идеи до работающей системы.",
  keywords: ["веб-разработка", "Telegram Mini App", "автоматизация", "AI-агенты", "цифровые продукты"],
  openGraph: {
    title: "Alexey Worker — цифровые продукты, которые выполняют работу",
    description: "Разработка сайтов, Telegram-продуктов, AI-инструментов и автоматизации для бизнеса.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#101011" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
