const modules = [
  ["Web", "Interface", "module--web"],
  ["AI", "Agent", "module--ai"],
  ["API", "Gateway", "module--api"],
  ["TG", "Mini App", "module--tg"],
] as const;

export function SystemVisual() {
  return (
    <div className="system-visual" aria-label="Схема цифровой системы: интерфейс, AI, API и Telegram соединены с единым ядром">
      <div className="system-visual__head">
        <span><i /> SYSTEM / ONLINE</span>
        <span>04 MODULES</span>
      </div>
      <div className="system-map">
        <div className="system-map__ring system-map__ring--one" />
        <div className="system-map__ring system-map__ring--two" />
        <div className="connector connector--h" />
        <div className="connector connector--v" />
        <div className="core-node">
          <span>AW</span>
          <small>Product core</small>
        </div>
        {modules.map(([code, label, className]) => (
          <div className={`system-module ${className}`} key={code}>
            <span>{code}</span><small>{label}</small><i />
          </div>
        ))}
        <div className="data-pulse data-pulse--one" /><div className="data-pulse data-pulse--two" />
      </div>
      <div className="system-visual__foot">
        <span>Проектирование</span><span>Интерфейс</span><span>Логика</span><span>Запуск</span>
      </div>
    </div>
  );
}
