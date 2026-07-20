"use client";

import { useState, type FormEvent } from "react";

type ContactFormProps = {
  copy: {
    nameLabel: string; namePlaceholder: string; contactLabel: string; contactPlaceholder: string;
    taskLabel: string; taskPlaceholder: string; privacy: string; submit: string; status: string;
    fallback: string; messageTitle: string; messageName: string; messageContact: string; messageTask: string;
    directTitle: string; telegram: string; email: string;
  };
};

const TELEGRAM_URL = "https://t.me/AlexWorker7";
const EMAIL = "alexworker7accbusiness@gmail.com";

export function ContactForm({ copy }: ContactFormProps) {
  const [status, setStatus] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      copy.messageTitle,
      `${copy.messageName}: ${form.get("name")}`,
      `${copy.messageContact}: ${form.get("contact")}`,
      `${copy.messageTask}: ${form.get("task")}`,
    ].join("\n");
    const directUrl = process.env.NEXT_PUBLIC_TELEGRAM_URL?.trim() || TELEGRAM_URL;
    const target = `${directUrl}${directUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;
    setFallbackUrl(target);
    window.open(target, "_blank", "noopener,noreferrer");
    setStatus(copy.status);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label><span>{copy.nameLabel}</span><input name="name" type="text" placeholder={copy.namePlaceholder} autoComplete="name" required /></label>
        <label><span>{copy.contactLabel}</span><input name="contact" type="text" placeholder={copy.contactPlaceholder} autoComplete="email" required /></label>
      </div>
      <label><span>{copy.taskLabel}</span><textarea name="task" placeholder={copy.taskPlaceholder} rows={4} required /></label>
      <div className="contact-form__bottom">
        <p>{copy.privacy}</p>
        <button type="submit">{copy.submit} <span aria-hidden="true">↗</span></button>
      </div>
      <div className="direct-contacts"><span>{copy.directTitle}</span><div><a href={TELEGRAM_URL} target="_blank" rel="noreferrer">{copy.telegram} · @AlexWorker7 ↗</a><a href={`mailto:${EMAIL}`}>{copy.email} · {EMAIL} ↗</a></div></div>
      <p className="form-status" role="status" aria-live="polite">
        {status} {fallbackUrl ? <a href={fallbackUrl} target="_blank" rel="noreferrer">{copy.fallback} ↗</a> : null}
      </p>
    </form>
  );
}
