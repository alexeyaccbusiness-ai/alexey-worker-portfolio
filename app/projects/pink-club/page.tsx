import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { getTranslations } from "@/lib/content";
import { getRequestLocale } from "@/lib/request-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const copy = getTranslations(locale).casePage;
  return { title: copy.metaTitle, description: copy.metaDescription, openGraph: { title: copy.metaTitle, description: copy.metaDescription } };
}

export default async function PinkClubCase() {
  const locale = await getRequestLocale();
  const t = getTranslations(locale);
  const copy = t.casePage;
  const project = t.projects.items[0];

  return (
    <>
      <Header locale={locale} copy={t.header} />
      <main className="case-page">
        <section className="case-hero">
          <Container>
            <Link className="back-link" href="/#projects">← {copy.back}</Link>
            <div className="case-hero__grid">
              <div><Badge>{copy.badge}</Badge><h1>PINK<br /><em>CLUB</em></h1><p>{copy.intro}</p><div className="tag-list"><span>Telegram Bot</span><span>Mini App</span><span>Backend</span><span>Admin Panel</span></div></div>
              <ProjectVisual tone="pink" title="PINK CLUB" image={project.image} imageAlt={project.imageAlt} priority />
            </div>
          </Container>
        </section>

        <section className="case-summary">
          <Container className="case-summary__grid">
            <Reveal><span>{copy.taskLabel}</span><h2>{copy.taskTitle}</h2></Reveal>
            <Reveal><p>{copy.taskBodyOne}</p><p>{copy.taskBodyTwo}</p></Reveal>
          </Container>
        </section>

        <section className="case-architecture">
          <Container><Reveal><CaseStudyPreview copy={t.journey} /></Reveal></Container>
        </section>

        <section className="case-functions">
          <Container>
            <Reveal><div className="case-section-title"><span>{copy.solutionLabel}</span><h2>{copy.solutionTitle}</h2></div></Reveal>
            <div className="case-functions__grid">{copy.functions.map(([title, text], index) => <Reveal key={title}><article><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
          </Container>
        </section>

        <section className="case-result">
          <Container className="case-result__grid">
            <Reveal><span>{copy.resultLabel}</span><h2>{copy.resultTitle}</h2></Reveal>
            <Reveal><div><p>{copy.resultBody}</p><p className="case-note">{copy.note}</p><h3>{copy.tech}</h3><div className="tech-list"><span>TypeScript</span><span>Telegram Bot API</span><span>Web App API</span><span>REST API</span><span>Database</span><span>Admin UI</span></div></div></Reveal>
          </Container>
        </section>

        <section className="case-cta"><Container><Reveal><div><span>{copy.next}</span><h2>{copy.ctaTitle}</h2><Button href="/#contact">{copy.cta}</Button></div></Reveal></Container></section>
      </main>
      <Footer copy={t.footer} />
    </>
  );
}
