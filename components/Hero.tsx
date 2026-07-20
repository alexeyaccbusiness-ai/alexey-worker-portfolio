import { AnimatedBackground } from "./AnimatedBackground";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Container } from "./Container";
import { SystemVisual } from "./SystemVisual";

export function Hero() {
  return (
    <section className="hero" id="top">
      <AnimatedBackground />
      <Container className="hero__inner">
        <div className="hero__copy">
          <Badge>Digital product developer</Badge>
          <h1>Создаю цифровые продукты, которые <em>выполняют работу</em>, а не просто выглядят красиво.</h1>
          <p>Сайты, Telegram-боты, AI-инструменты и автоматизация бизнес-процессов — от идеи до готовой работающей системы.</p>
          <div className="hero__actions">
            <Button href="#contact">Обсудить проект</Button>
            <Button href="#projects" variant="secondary">Смотреть работы</Button>
          </div>
        </div>
        <SystemVisual />
        <div className="hero__rail" aria-label="Направления работы">
          <span>WEB / TELEGRAM / AI / AUTOMATION</span>
          <span>GERMANY · РАБОТАЮ УДАЛЁННО</span>
        </div>
      </Container>
    </section>
  );
}
