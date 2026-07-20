import Link from "next/link";

type MobileMenuProps = {
  open: boolean;
  onNavigate: () => void;
  links: readonly (readonly [string, string])[];
  cta: string;
  navLabel: string;
};

export function MobileMenu({ open, onNavigate, links, cta, navLabel }: MobileMenuProps) {
  return (
    <div className={`mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
      <nav aria-label={navLabel}>
        {links.map(([label, href], index) => (
          <Link key={href} href={href} onClick={onNavigate} tabIndex={open ? 0 : -1}>
            <span>0{index + 1}</span>{label}
          </Link>
        ))}
        <Link className="mobile-menu__cta" href="/#contact" onClick={onNavigate} tabIndex={open ? 0 : -1}>{cta}</Link>
      </nav>
    </div>
  );
}
