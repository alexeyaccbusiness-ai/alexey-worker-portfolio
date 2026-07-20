export function BenefitCard({ index, title, text }: { index: number; title: string; text: string }) {
  return <article className="benefit-card"><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>;
}
