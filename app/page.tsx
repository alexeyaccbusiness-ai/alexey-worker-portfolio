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
import { benefits, processSteps, projects, services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="section services" id="services">
          <Container>
            <Reveal><SectionHeader eyebrow="Направления / 06" title="От интерфейса до процессов за ним" text="Проектирую продукт целиком: то, что видит пользователь, и то, что делает систему полезной для бизнеса." /></Reveal>
            <div className="services-grid">
              {services.map(service => <Reveal key={service.index}><ServiceCard {...service} /></Reveal>)}
            </div>
          </Container>
        </section>

        <section className="section projects" id="projects">
          <Container>
            <Reveal><SectionHeader eyebrow="Избранные проекты" title="Системы, собранные вокруг реальной задачи" text="Без вымышленных метрик: показываю логику продукта, состав решения и роль каждого модуля." /></Reveal>
            <div className="projects-grid">
              {projects.map((project, index) => <Reveal key={project.title}><ProjectCard {...project} featured={index === 0} /></Reveal>)}
            </div>
            <Reveal><CaseStudyPreview /></Reveal>
          </Container>
        </section>

        <section className="section process" id="process">
          <Container>
            <Reveal><SectionHeader eyebrow="Подход к работе" title="От неопределённой идеи до понятного запуска" text="На выходе — не отдельный фрагмент кода, а продуманное решение, которое можно использовать, поддерживать и развивать." /></Reveal>
            <div className="process-list">{processSteps.map(([title, text], index) => <Reveal key={title}><ProcessStep index={index + 1} title={title} text={text} /></Reveal>)}</div>
          </Container>
        </section>

        <section className="section benefits">
          <Container>
            <Reveal><SectionHeader eyebrow="Почему так" title="Цельная ответственность за результат" /></Reveal>
            <div className="benefits-grid">{benefits.map(([title, text], index) => <Reveal key={title}><BenefitCard index={index} title={title} text={text} /></Reveal>)}</div>
          </Container>
        </section>

        <section className="section about" id="about">
          <Container>
            <Reveal className="about-grid">
              <div><span className="about-index">AW / 2026</span><div className="about-portrait" aria-hidden="true"><span>Alexey<br />Worker</span><i /></div></div>
              <div className="about-copy"><SectionHeader eyebrow="Обо мне" title="Разработчик цифровых решений" /><p className="about-copy__lead">Помогаю превратить бизнес-задачу в систему с понятной логикой, удобным интерфейсом и надёжной технической основой.</p><p>Работаю на стыке проектирования, дизайна и разработки. Поэтому вижу не только отдельный экран или интеграцию, а весь пользовательский путь: от первого действия до данных в панели управления.</p><div className="about-stats"><div><strong>Full-cycle</strong><span>один контекст от идеи до запуска</span></div><div><strong>Product thinking</strong><span>функции связаны с задачей</span></div></div></div>
            </Reveal>
          </Container>
        </section>

        <section className="section contact" id="contact">
          <Container>
            <Reveal className="contact-panel">
              <div className="contact-panel__head"><span className="contact-kicker">Начать проект / 2026</span><h2>Есть идея или задача, которую пора <em>автоматизировать?</em></h2><p>Опишите, что должно работать. Я помогу превратить это в понятный цифровой продукт.</p></div>
              <ContactForm />
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
