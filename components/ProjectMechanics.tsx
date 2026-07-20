type ProjectMechanicsProps = {
  tone: string;
  labels: readonly string[];
  ariaLabel: string;
};

export function ProjectMechanics({ tone, labels, ariaLabel }: ProjectMechanicsProps) {
  return (
    <div className={`mechanics-map mechanics-map--${tone}`} role="img" aria-label={ariaLabel}>
      <div className="mechanics-map__rail" aria-hidden="true"><i /><i /><i /></div>
      <div className="mechanics-map__core" aria-hidden="true">
        <span>AW</span>
        <small>DATA CORE</small>
      </div>
      <div className="mechanics-map__nodes" aria-hidden="true">
        {labels.map((label, index) => (
          <span className={`mechanics-map__node mechanics-map__node--${index + 1}`} key={label}>
            <i>{String(index + 1).padStart(2, "0")}</i>
            <b>{label}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
