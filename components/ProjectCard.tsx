import { Badge } from "./Badge";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  kind: string; title: string; description: string; tags: readonly string[]; href: string; status: string; tone: string; image: string; imageAlt: string; openCase: string; discuss: string; featured?: boolean;
};

export function ProjectCard({ kind, title, description, tags, href, status, tone, image, imageAlt, openCase, discuss, featured = false }: ProjectCardProps) {
  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}`}>
      <div className="project-card__info">
        <div className="project-card__meta"><span>{kind}</span><Badge muted>{status}</Badge></div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="project-card__link" href={href}>{featured ? openCase : discuss}<span aria-hidden="true">↗</span></a>
      </div>
      <ProjectVisual tone={tone} title={title} image={image} imageAlt={imageAlt} />
    </article>
  );
}
