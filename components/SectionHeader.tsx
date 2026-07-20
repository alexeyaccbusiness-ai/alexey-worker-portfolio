import { Badge } from "./Badge";

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-header">
      <Badge>{eyebrow}</Badge>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
