import { AnimatedBackground } from "./AnimatedBackground";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Container } from "./Container";
import { SystemVisual } from "./SystemVisual";

type HeroProps = {
  copy: {
    badge: string;
    titleStart: string;
    titleAccent: string;
    titleEnd: string;
    description: string;
    primary: string;
    secondary: string;
    rail: string;
    location: string;
    system: Parameters<typeof SystemVisual>[0]["copy"];
  };
};

export function Hero({ copy }: HeroProps) {
  return (
    <section className="hero" id="top">
      <AnimatedBackground />
      <Container className="hero__inner">
        <div className="hero__copy">
          <Badge>{copy.badge}</Badge>
          <h1>{copy.titleStart}<em>{copy.titleAccent}</em>{copy.titleEnd}</h1>
          <p>{copy.description}</p>
          <div className="hero__actions">
            <Button href="#contact">{copy.primary}</Button>
            <Button href="#projects" variant="secondary">{copy.secondary}</Button>
          </div>
        </div>
        <SystemVisual copy={copy.system} />
        <div className="hero__rail">
          <span>{copy.rail}</span>
          <span>{copy.location}</span>
        </div>
      </Container>
    </section>
  );
}
