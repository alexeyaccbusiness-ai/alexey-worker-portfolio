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

export const metadata: Metadata = {
  title: "PINK CLUB — кейс цифровой системы | Alexey Worker",
  description: "Проектирование Telegram-продукта: Mini App, пользовательские сценарии, внутренняя экономика, административная панель и интеграции.",
};

const functions = [
  ["Telegram-first сценарии", "Вход, навигация и ключевые действия встроены в привычную среду пользователя."],
  ["Внутренняя экономика", "Модель баланса, операций и правил спроектирована как отдельный контролируемый контур."],
  ["Административная панель", "Управление участниками, контентом и событиями без вмешательства в код."],
  ["Автоматизация", "Система сама обрабатывает стандартные события, меняет статусы и отправляет уведомления."],
] as const;

export default function PinkClubCase() {
  return (
    <>
      <Header />
      <main className="case-page">
        <section className="case-hero">
          <Container>
            <Link className="back-link" href="/#projects">← Все проекты</Link>
            <div className="case-hero__grid">
              <div><Badge>Case 01 / Telegram product</Badge><h1>PINK<br /><em>CLUB</em></h1><p>Цифровая система клуба внутри Telegram: пользовательские сценарии, внутренняя экономика, автоматизация, администрирование и инфраструктура.</p><div className="tag-list"><span>Telegram Bot</span><span>Mini App</span><span>Backend</span><span>Admin Panel</span></div></div>
              <ProjectVisual tone="pink" title="PINK CLUB" />
            </div>
          </Container>
        </section>

        <section className="case-summary">
          <Container className="case-summary__grid">
            <Reveal><span>Задача</span><h2>Собрать не отдельного бота, а цельный Telegram-продукт</h2></Reveal>
            <Reveal><p>Клубу нужен единый пользовательский путь: знакомство с продуктом, участие в сценариях, работа с внутренними единицами и обратная связь — без ручного сопровождения каждого действия.</p><p>Решение проектируется как система связанных модулей. Это позволяет разделить интерфейс, бизнес-логику и управление, не разрывая опыт пользователя.</p></Reveal>
          </Container>
        </section>

        <section className="case-architecture">
          <Container><Reveal><CaseStudyPreview /></Reveal></Container>
        </section>

        <section className="case-functions">
          <Container>
            <Reveal><div className="case-section-title"><span>Решение / 04</span><h2>Основные контуры продукта</h2></div></Reveal>
            <div className="case-functions__grid">{functions.map(([title, text], index) => <Reveal key={title}><article><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div>
          </Container>
        </section>

        <section className="case-result">
          <Container className="case-result__grid">
            <Reveal><span>Результат</span><h2>Основа, на которой можно развивать продукт</h2></Reveal>
            <Reveal><div><p>Архитектура объединяет Telegram-интерфейс, Mini App, серверную логику, хранение данных и административные сценарии. Каждый модуль можно развивать независимо, сохраняя единый продуктовый контекст.</p><p className="case-note">Количественные показатели намеренно не приведены: для кейса используются только подтверждённые сведения о составе и логике решения.</p><h3>Технологический контур</h3><div className="tech-list"><span>TypeScript</span><span>Telegram Bot API</span><span>Web App API</span><span>REST API</span><span>Database</span><span>Admin UI</span></div></div></Reveal>
          </Container>
        </section>

        <section className="case-cta"><Container><Reveal><div><span>Следующий продукт</span><h2>Нужна система с похожей логикой?</h2><Button href="/#contact">Обсудить задачу</Button></div></Reveal></Container></section>
      </main>
      <Footer />
    </>
  );
}
