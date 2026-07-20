type MobileMenuProps = { open: boolean; onNavigate: () => void };

const links = [["Услуги", "#services"], ["Работы", "#projects"], ["Процесс", "#process"], ["Обо мне", "#about"]];

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
      <nav aria-label="Мобильная навигация">
        {links.map(([label, href], index) => (
          <a key={href} href={href} onClick={onNavigate} tabIndex={open ? 0 : -1}>
            <span>0{index + 1}</span>{label}
          </a>
        ))}
        <a className="mobile-menu__cta" href="#contact" onClick={onNavigate} tabIndex={open ? 0 : -1}>Обсудить проект</a>
      </nav>
    </div>
  );
}
