"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/language";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

type HeaderProps = {
  locale: Locale;
  copy: {
    navLabel: string;
    mobileNavLabel: string;
    nav: readonly (readonly [string, string])[];
    cta: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    switchTo: string;
  };
};

export function Header({ locale, copy }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="brand" href="/#top" aria-label="AW Alexey Worker">
          <span className="brand__mark" aria-hidden="true">AW</span>
          <span>Alexey Worker</span>
        </Link>
        <nav className="desktop-nav" aria-label={copy.navLabel}>
          {copy.nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <LanguageSwitcher locale={locale} label={copy.languageLabel} switchTo={copy.switchTo} />
        <Link className="header-contact" href="/#contact">{copy.cta} <span aria-hidden="true">↗</span></Link>
        <button className={`menu-button${open ? " is-open" : ""}`} type="button" aria-label={open ? copy.closeMenu : copy.openMenu} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </Container>
      <MobileMenu open={open} onNavigate={() => setOpen(false)} links={copy.nav} cta={copy.cta} navLabel={copy.mobileNavLabel} />
    </header>
  );
}
