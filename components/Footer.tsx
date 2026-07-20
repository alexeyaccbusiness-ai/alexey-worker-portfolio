import Link from "next/link";
import { Container } from "./Container";

export function Footer({ copy }: { copy: { text: string; top: string; telegram: string } }) {
  const telegramUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/AlexWorker7";
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <Link className="brand" href="/#top"><span className="brand__mark">AW</span><span>Alexey Worker</span></Link>
        <p>{copy.text}</p>
        <div><a href={telegramUrl} target="_blank" rel="noreferrer">{copy.telegram} ↗</a><a href="#top">{copy.top} ↑</a></div>
        <small>© {new Date().getFullYear()} Alexey Worker</small>
      </Container>
    </footer>
  );
}
