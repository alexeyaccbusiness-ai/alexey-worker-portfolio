"use client";

import { useEffect, useState } from "react";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <Container className="header-inner">
        <a className="brand" href="#top" aria-label="AW Alexey Worker">
          <span className="brand__mark" aria-hidden="true">AW</span>
          <span>Alexey Worker</span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a><a href="#projects">Работы</a><a href="#process">Процесс</a><a href="#about">Обо мне</a>
        </nav>
        <a className="header-contact" href="#contact">Обсудить проект <span aria-hidden="true">↗</span></a>
        <button className={`menu-button${open ? " is-open" : ""}`} type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </Container>
      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
