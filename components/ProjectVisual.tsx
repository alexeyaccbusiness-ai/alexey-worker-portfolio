import Image from "next/image";

type ProjectVisualProps = {
  tone: string;
  title: string;
  image: string;
  imageAlt: string;
  visualStatus: string;
  visualLabels: readonly string[];
  priority?: boolean;
};

export function ProjectVisual({ tone, title, image, imageAlt, visualStatus, visualLabels, priority = false }: ProjectVisualProps) {
  return (
    <div className={`project-ui project-ui--${tone}`}>
      <Image className="project-ui__image" src={image} alt={imageAlt} fill sizes="(max-width: 820px) 100vw, 58vw" priority={priority} />
      <div className="project-ui__scrim" aria-hidden="true" />
      <div className="project-ui__scan" aria-hidden="true" />
      <div className="project-ui__status" aria-hidden="true"><span><i />{visualStatus}</span><small>AW / SYSTEM</small></div>
      <div className="project-ui__nodes" aria-hidden="true">
        {visualLabels.map((label, index) => <span key={label} className={`project-ui__node project-ui__node--${index + 1}`}><i />{label}</span>)}
      </div>
      <span className="project-ui__label">{title}</span>
    </div>
  );
}
