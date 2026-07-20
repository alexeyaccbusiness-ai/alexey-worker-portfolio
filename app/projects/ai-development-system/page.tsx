import type { Metadata } from "next";
import { ProjectCasePage } from "@/components/ProjectCasePage";
import { getTranslations } from "@/lib/content";
import { getRequestLocale } from "@/lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getTranslations(locale).aiCasePage;
  return { title: copy.metaTitle, description: copy.metaDescription, openGraph: { title: copy.metaTitle, description: copy.metaDescription } };
}

export default async function AiDevelopmentCase() {
  const locale = await getRequestLocale();
  const t = getTranslations(locale);
  const project = t.projects.items[2];

  return <ProjectCasePage locale={locale} headerCopy={t.header} footerCopy={t.footer} journeyCopy={t.journey} copy={t.aiCasePage} titleLines={["AI", "DEVELOPMENT", "SYSTEM"]} tone={project.tone} imageAlt={project.imageAlt} visualStatus={project.visualStatus} visualLabels={project.visualLabels} tags={project.tags} technology={["TypeScript", "LLM Orchestration", "Code Review", "Test Runner", "Git", "Quality Gates"]} />;
}
