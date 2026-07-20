type CaseStudyPreviewProps = {
  copy: {
    label: string;
    count: string;
    aria: string;
    steps: readonly (readonly [string, string])[];
  };
};

export function CaseStudyPreview({ copy }: CaseStudyPreviewProps) {
  return (
    <div className="case-preview">
      <div className="case-preview__label"><span>{copy.label}</span><span>{copy.count}</span></div>
      <div className="case-flow" aria-label={copy.aria}>
        {copy.steps.map(([name, text], index) => (
          <div className={`case-flow__item${index === 0 || index === copy.steps.length - 1 ? " is-key" : ""}`} key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><small>{text}</small>{index < copy.steps.length - 1 ? <i aria-hidden="true">→</i> : null}</div>
        ))}
      </div>
    </div>
  );
}
