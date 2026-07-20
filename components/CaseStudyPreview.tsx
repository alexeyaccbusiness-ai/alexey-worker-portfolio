export function CaseStudyPreview() {
  return (
    <div className="case-preview">
      <div className="case-preview__label"><span>Архитектура решения</span><span>5 контуров</span></div>
      <div className="case-flow">
        {[["01","Telegram"],["02","Mini App"],["03","Backend"],["04","Admin"],["05","Services"]].map(([id, name], index) => (
          <div className="case-flow__item" key={id}><span>{id}</span><strong>{name}</strong>{index < 4 ? <i aria-hidden="true">→</i> : null}</div>
        ))}
      </div>
    </div>
  );
}
