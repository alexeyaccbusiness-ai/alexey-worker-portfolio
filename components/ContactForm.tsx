"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Новая заявка с сайта Alexey Worker",
      `Имя: ${form.get("name")}`,
      `Контакт: ${form.get("contact")}`,
      `Задача: ${form.get("task")}`,
    ].join("\n");
    const directUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim();
    const target = directUrl
      ? `${directUrl}${directUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`
      : `https://t.me/share/url?url=&text=${encodeURIComponent(message)}`;
    setFallbackUrl(target);
    window.open(target, "_blank", "noopener,noreferrer");
    setStatus("Заявка подготовлена — отправьте её в открывшемся Telegram.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label><span>Как вас зовут</span><input name="name" type="text" placeholder="Имя" autoComplete="name" required /></label>
        <label><span>Как связаться</span><input name="contact" type="text" placeholder="@telegram или email" autoComplete="email" required /></label>
      </div>
      <label><span>Коротко о задаче</span><textarea name="task" placeholder="Что должно работать и для кого?" rows={4} required /></label>
      <div className="contact-form__bottom">
        <p>Отправляя форму, вы соглашаетесь на обработку указанных данных только для ответа на заявку.</p>
        <button type="submit">Отправить в Telegram <span aria-hidden="true">↗</span></button>
      </div>
      <p className="form-status" role="status" aria-live="polite">
        {status} {fallbackUrl ? <a href={fallbackUrl} target="_blank" rel="noreferrer">Открыть Telegram вручную ↗</a> : null}
      </p>
    </form>
  );
}
