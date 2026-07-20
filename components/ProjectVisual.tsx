import Image from "next/image";

export function ProjectVisual({ tone, title, image, imageAlt, priority = false }: { tone: string; title: string; image: string; imageAlt: string; priority?: boolean }) {
  return (
    <div className={`project-ui project-ui--${tone}`}>
      <Image className="project-ui__image" src={image} alt={imageAlt} fill sizes="(max-width: 820px) 100vw, 58vw" priority={priority} />
      <div className="project-ui__scrim" aria-hidden="true" />
      <span className="project-ui__label">{title}</span>
    </div>
  );
}
