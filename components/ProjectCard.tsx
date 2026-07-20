import { Badge } from "./Badge";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  kind: string; title: string; eyeline: string; description: string; tags: readonly string[]; href: string; externalUrl: string; status: string; tone: string; imageAlt: string; visualStatus: string; visualLabels: readonly string[]; openCase: string; discuss: string; featured?: boolean;
};

export function ProjectCard({ kind, title, eyeline, description, tags, href, externalUrl, status, tone, imageAlt, visualStatus, visualLabels, openCase, discuss, featured = false }: ProjectCardProps) {
  const titleClass = title.length > 18 ? " project-card--long-title" : "";

  return (
    <article className={`project-card${featured ? " project-card--featured" : ""}${titleClass}`}>
      <div className="project-card__info">
        <div className="project-card__meta"><span>{kind}</span><Badge muted>{status}</Badge></div>
        <div className="project-card__body">
          <h3>{title}</h3>
          {externalUrl ? <a className="project-card__eyeline" href={externalUrl} target="_blank" rel="noreferrer">{eyeline} ↗</a> : <span className="project-card__eyeline">{eyeline}</span>}
          <p>{description}</p>
        </div>
        <div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="project-card__link" href={href}>{featured ? openCase : discuss}<span aria-hidden="true">↗</span></a>
      </div>
      <ProjectVisual tone={tone} title={title} imageAlt={imageAlt} visualStatus={visualStatus} visualLabels={visualLabels} />
    </article>
  );
}
