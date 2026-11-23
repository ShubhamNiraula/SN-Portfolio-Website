"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Download, GraduationCap, Mail, Send } from "lucide-react";
import { contactFormEndpoint, profile } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { t, lang, pick } = useLanguage();
  const c = t.contact;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // spam bot

    setStatus("sending");
    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: `Website message from ${data.get("name")}`,
          _replyto: data.get("email"),
          language: lang === "ru" ? "Russian" : "English",
          _template: "table"
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === "false" || result.success === false) {
        throw new Error("send failed");
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="contact-band" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="kicker">{c.eyebrow}</span>
          <h2 className="contact-title">
            {c.titleFirst}
            <br />
            {c.titleSecond}
          </h2>
          <p className="contact-copy">{c.copy}</p>

          <div className="contact-list">
            <a className="contact-item" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" /> {profile.email}
            </a>
            <a className="contact-item" href={`mailto:${profile.academicEmail}`}>
              <GraduationCap size={18} aria-hidden="true" /> {profile.academicEmail}
            </a>
            {profile.socialLinks.map((link) => (
              <a className="contact-item" href={link.href} key={link.label} target="_blank" rel="noreferrer">
                <ArrowUpRight size={18} aria-hidden="true" /> {link.label}
              </a>
            ))}
          </div>

          <div className="contact-actions">
            <a className="btn btn-light" href={pick(profile.cv)} download>
              {t.hero.downloadCv} <Download size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="kicker">{c.formTitle}</span>
          <label>
            <span>{c.name}</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            <span>{c.email}</span>
            <input name="email" type="email" required autoComplete="email" inputMode="email" />
          </label>
          <label>
            <span>{c.message}</span>
            <textarea name="message" rows={5} required />
          </label>
          <input type="text" name="_honey" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button className="btn btn-light" type="submit" disabled={status === "sending"}>
            {status === "sending" ? c.sending : c.send} <Send size={16} aria-hidden="true" />
          </button>
          {status === "sent" && (
            <p className="form-status success" role="status">
              {c.success}
            </p>
          )}
          {status === "error" && (
            <p className="form-status error" role="alert">
              {c.error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
