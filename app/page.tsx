import { BenefitCard } from "@/components/BenefitCard";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProcessStep } from "@/components/ProcessStep";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { getTranslations } from "@/lib/content";
import { getRequestLocale } from "@/lib/request-locale";

export default async function Home() {
  const locale = await getRequestLocale();
  const t = getTranslations(locale);

  return (
    <>
      <Header locale={locale} copy={t.header} />
      <main>
        <Hero copy={t.hero} />

        <section className="section services" id="services">
          <Container>
            <Reveal><SectionHeader eyebrow={t.services.eyebrow} title={t.services.title} text={t.services.text} /></Reveal>
            <Reveal className="services-livebar"><span><i />{t.services.liveStatus}</span><small>{t.services.liveHint}</small></Reveal>
            <div className="services-grid">
              {t.services.items.map((service) => <Reveal key={service.index}><ServiceCard {...service} clientGets={t.services.clientGets} exampleLabel={t.services.example} /></Reveal>)}
            </div>
          </Container>
        </section>

        <section className="section projects" id="projects">
          <Container>
            <Reveal><SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} text={t.projects.text} /></Reveal>
            <div className="projects-grid">
              {t.projects.items.map((project) => <Reveal key={project.title}><ProjectCard {...project} openCase={t.projects.openCase} discuss={t.projects.discuss} featured /></Reveal>)}
            </div>
            <Reveal><CaseStudyPreview copy={t.journey} /></Reveal>
          </Container>
        </section>

        <section className="section process" id="process">
          <Container>
            <Reveal><SectionHeader eyebrow={t.process.eyebrow} title={t.process.title} text={t.process.text} /></Reveal>
            <div className="process-list">{t.process.steps.map(([title, text], index) => <Reveal key={title}><ProcessStep index={index + 1} title={title} text={text} /></Reveal>)}</div>
          </Container>
        </section>

        <section className="section benefits">
          <Container>
            <Reveal><SectionHeader eyebrow={t.benefits.eyebrow} title={t.benefits.title} /></Reveal>
            <div className="benefits-grid">{t.benefits.items.map(([title, text], index) => <Reveal key={title}><BenefitCard index={index} title={title} text={text} /></Reveal>)}</div>
          </Container>
        </section>

        <section className="section about" id="about">
          <Container>
            <Reveal className="about-grid">
              <div><span className="about-index">AW / 2026</span><div className="about-portrait" aria-hidden="true"><span>Alexey<br />Worker</span><i /></div></div>
              <div className="about-copy"><SectionHeader eyebrow={t.about.eyebrow} title={t.about.title} /><p className="about-copy__lead">{t.about.lead}</p><p>{t.about.body}</p><div className="about-stats"><div><strong>{t.about.statOneTitle}</strong><span>{t.about.statOne}</span></div><div><strong>{t.about.statTwoTitle}</strong><span>{t.about.statTwo}</span></div></div></div>
            </Reveal>
          </Container>
        </section>

        <section className="section contact" id="contact">
          <Container>
            <Reveal className="contact-panel">
              <div className="contact-panel__head"><span className="contact-kicker">{t.contact.kicker}</span><h2>{t.contact.titleStart}<em>{t.contact.titleAccent}</em></h2><p>{t.contact.text}</p></div>
              <ContactForm copy={t.contact} />
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer copy={t.footer} />
    </>
  );
}
