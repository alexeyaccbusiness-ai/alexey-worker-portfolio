import type { Metadata } from "next";
import { ProjectCasePage } from "@/components/ProjectCasePage";
import { getTranslations } from "@/lib/content";
import { getRequestLocale } from "@/lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getTranslations(locale).scoutCasePage;
  return { title: copy.metaTitle, description: copy.metaDescription, openGraph: { title: copy.metaTitle, description: copy.metaDescription } };
}

export default async function PinkScoutCase() {
  const locale = await getRequestLocale();
  const t = getTranslations(locale);
  const project = t.projects.items[1];

  return <ProjectCasePage locale={locale} headerCopy={t.header} footerCopy={t.footer} journeyCopy={t.journey} copy={t.scoutCasePage} titleLines={["PINK", "SCOUT"]} tone={project.tone} imageAlt={project.imageAlt} visualStatus={project.visualStatus} visualLabels={project.visualLabels} tags={project.tags} technology={["TypeScript", "Telegram Bot API", "Data Pipeline", "REST API", "Database", "AI Ranking"]} />;
}
