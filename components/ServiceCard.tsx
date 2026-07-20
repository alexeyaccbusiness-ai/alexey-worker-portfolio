type ServiceCardProps = { index: string; title: string; task: string; result: string; example: string; clientGets: string; exampleLabel: string };

export function ServiceCard({ index, title, task, result, example, clientGets, exampleLabel }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__top"><span>{index}</span><i aria-hidden="true" /></div>
      <div className="service-card__signal" aria-hidden="true"><span /><span /><span /><i /></div>
      <h3>{title}</h3>
      <p>{task}</p>
      <dl>
        <div><dt>{clientGets}</dt><dd>{result}</dd></div>
        <div><dt>{exampleLabel}</dt><dd>{example}</dd></div>
      </dl>
    </article>
  );
}
