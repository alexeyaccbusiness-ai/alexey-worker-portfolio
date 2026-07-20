export function ProjectVisual({ tone, title }: { tone: string; title: string }) {
  if (tone === "pink") {
    return (
      <div className="project-ui project-ui--pink" aria-label={`Фрагменты интерфейса проекта ${title}`}>
        <div className="phone-frame">
          <div className="phone-bar"><span>9:41</span><i /></div>
          <div className="club-logo">P<span>·</span>C</div>
          <p>Ваш клуб.<br />Всегда рядом.</p>
          <div className="club-balance"><small>Баланс</small><strong>2 480 <b>PC</b></strong></div>
          <button type="button" tabIndex={-1}>Открыть клуб</button>
        </div>
        <div className="admin-frame">
          <div className="admin-sidebar"><b>PC</b><i /><i /><i /></div>
          <div className="admin-content"><small>DASHBOARD</small><strong>1 248</strong><span>участников</span><div className="chart-bars">{[34,62,45,82,70,94,76].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div></div>
        </div>
      </div>
    );
  }
  return (
    <div className={`project-ui project-ui--${tone}`} aria-label={`Концептуальный интерфейс ${title}`}>
      <div className="placeholder-window"><div className="window-bar"><i/><i/><i/></div><div className="placeholder-sidebar"/><div className="placeholder-main"><span/><strong/><p/><div><i/><i/><i/></div></div></div>
      <span className="concept-label">Концептуальная заготовка</span>
    </div>
  );
}
