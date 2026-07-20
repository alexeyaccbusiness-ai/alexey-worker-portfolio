import Link from "next/link";
import type { Locale } from "@/lib/language";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { CaseStudyPreview } from "./CaseStudyPreview";
import { Container } from "./Container";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProjectMechanics } from "./ProjectMechanics";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";

type HeaderCopy = Parameters<typeof Header>[0]["copy"];
type FooterCopy = Parameters<typeof Footer>[0]["copy"];
type JourneyCopy = Parameters<typeof CaseStudyPreview>[0]["copy"];

export type ProjectCaseCopy = {
  back: string;
  badge: string;
  intro: string;
  openBot: string;
  taskLabel: string;
  taskTitle: string;
  taskBodyOne: string;
  taskBodyTwo: string;
  solutionLabel: string;
  solutionTitle: string;
  functions: readonly (readonly [string, string])[];
  adminLabel: string;
  adminTitle: string;
  adminText: string;
  adminTools: readonly (readonly [string, string])[];
  resultLabel: string;
  resultTitle: string;
  resultBody: string;
  note: string;
  tech: string;
  next: string;
  ctaTitle: string;
  ctaText: string;
  cta: string;
};

type ProjectCasePageProps = {
  locale: Locale;
  headerCopy: HeaderCopy;
  footerCopy: FooterCopy;
  journeyCopy: JourneyCopy;
  copy: ProjectCaseCopy;
  titleLines: readonly string[];
  tone: string;
  imageAlt: string;
  visualStatus: string;
  visualLabels: readonly string[];
  tags: readonly string[];
  technology: readonly string[];
  externalHref?: string;
};

export function ProjectCasePage({ locale, headerCopy, footerCopy, journeyCopy, copy, titleLines, tone, imageAlt, visualStatus, visualLabels, tags, technology, externalHref }: ProjectCasePageProps) {
  const title = titleLines.join(" ");

  return (
    <>
      <Header locale={locale} copy={headerCopy} />
      <main className={`case-page case-page--${tone}`}>
        <section className="case-hero">
          <Container>
            <Link className="back-link" href="/#projects">← {copy.back}</Link>
            <div className="case-hero__grid">
              <div className="case-hero__copy">
                <Badge>{copy.badge}</Badge>
                <h1 className={titleLines.length > 2 ? "case-hero__title--long" : ""}>
                  {titleLines.map((line, index) => index === titleLines.length - 1 ? <em key={line}>{line}</em> : <span key={line}>{line}</span>)}
                </h1>
                <p>{copy.intro}</p>
                <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                {externalHref && copy.openBot ? <a className="case-bot-link" href={externalHref} target="_blank" rel="noreferrer">{copy.openBot} <span aria-hidden="true">↗</span></a> : null}
              </div>
              <ProjectVisual tone={tone} title={title} imageAlt={imageAlt} visualStatus={visualStatus} visualLabels={visualLabels} />
            </div>
          </Container>
        </section>

        <section className="case-summary">
          <Container className="case-summary__grid">
            <Reveal><span>{copy.taskLabel}</span><h2>{copy.taskTitle}</h2></Reveal>
            <Reveal className="case-summary__text"><p>{copy.taskBodyOne}</p><p>{copy.taskBodyTwo}</p></Reveal>
          </Container>
        </section>

        <section className="case-architecture">
          <Container><Reveal><CaseStudyPreview copy={journeyCopy} /></Reveal></Container>
        </section>

        <section className="case-functions">
          <Container>
            <Reveal><div className="case-section-title"><span>{copy.solutionLabel}</span><h2>{copy.solutionTitle}</h2></div></Reveal>
            <Reveal><ProjectMechanics tone={tone} labels={copy.functions.map(([functionTitle]) => functionTitle)} ariaLabel={copy.solutionTitle} /></Reveal>
            <div className="case-functions__grid">{copy.functions.map(([functionTitle, text], index) => <Reveal key={functionTitle}><article><div className="case-function__signal" aria-hidden="true"><span /><i /></div><span>0{index + 1}</span><h3>{functionTitle}</h3><p>{text}</p></article></Reveal>)}</div>
          </Container>
        </section>

        <section className="case-admin">
          <Container>
            <Reveal><div className="case-admin__head"><span>{copy.adminLabel}</span><h2>{copy.adminTitle}</h2><p>{copy.adminText}</p></div></Reveal>
            <div className="case-admin__grid">{copy.adminTools.map(([toolTitle, text], index) => <Reveal key={toolTitle}><article><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{toolTitle}</h3><p>{text}</p></div></article></Reveal>)}</div>
          </Container>
        </section>

        <section className="case-result">
          <Container className="case-result__grid">
            <Reveal><span>{copy.resultLabel}</span><h2>{copy.resultTitle}</h2></Reveal>
            <Reveal><div><p>{copy.resultBody}</p><p className="case-note">{copy.note}</p><h3>{copy.tech}</h3><div className="tech-list">{technology.map((item) => <span key={item}>{item}</span>)}</div></div></Reveal>
          </Container>
        </section>

        <section className="case-cta">
          <Container>
            <Reveal>
              <div className="case-cta__panel">
                <div className="case-cta__signal" aria-hidden="true"><i /><i /><i /><span>AW</span></div>
                <div className="case-cta__content"><span>{copy.next}</span><h2>{copy.ctaTitle}</h2><p>{copy.ctaText}</p><Button href="/#contact" className="case-cta__button">{copy.cta}</Button></div>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer copy={footerCopy} />
    </>
  );
}
