import { Container } from "./Container";

export function Footer() {
  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me";
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <a className="brand" href="#top"><span className="brand__mark">AW</span><span>Alexey Worker</span></a>
        <p>Цифровые продукты и автоматизация для бизнеса.</p>
        <div><a href={telegramUrl} target="_blank" rel="noreferrer">Telegram ↗</a><a href="#top">Наверх ↑</a></div>
        <small>© {new Date().getFullYear()} Alexey Worker</small>
      </Container>
    </footer>
  );
}
