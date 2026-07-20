type ServiceCardProps = { index: string; title: string; task: string; result: string; example: string };

export function ServiceCard({ index, title, task, result, example }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__top"><span>{index}</span><i aria-hidden="true" /></div>
      <h3>{title}</h3>
      <p>{task}</p>
      <dl>
        <div><dt>Клиент получает</dt><dd>{result}</dd></div>
        <div><dt>Например</dt><dd>{example}</dd></div>
      </dl>
    </article>
  );
}
