type SystemVisualProps = {
  copy: {
    aria: string;
    status: string;
    count: string;
    core: string;
    modules: readonly (readonly [string, string, string])[];
    footer: readonly string[];
  };
};

export function SystemVisual({ copy }: SystemVisualProps) {
  return (
    <div className="system-visual" aria-label={copy.aria}>
      <div className="system-visual__head">
        <span><i /> {copy.status}</span>
        <span>{copy.count}</span>
      </div>
      <div className="system-map">
        <div className="system-map__ring system-map__ring--one" />
        <div className="system-map__ring system-map__ring--two" />
        <div className="connector connector--h" />
        <div className="connector connector--v" />
        <div className="core-node">
          <span>AW</span>
          <small>{copy.core}</small>
        </div>
        {copy.modules.map(([code, label, className]) => (
          <div className={`system-module ${className}`} key={code}>
            <span>{code}</span><small>{label}</small><i />
          </div>
        ))}
        <div className="data-pulse data-pulse--one" /><div className="data-pulse data-pulse--two" />
      </div>
      <div className="system-visual__foot">
        {copy.footer.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  );
}
