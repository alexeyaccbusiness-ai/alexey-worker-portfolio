export function ProcessStep({ index, title, text }: { index: number; title: string; text: string }) {
  return <article className="process-step"><span>{String(index).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>;
}
