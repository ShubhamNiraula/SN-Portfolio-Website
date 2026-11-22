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
    <section className="contact-section page-wrap" id="contact">
      <div className="contact-panel contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2>
            {c.titleFirst}
            <br />
            <span>{c.titleSecond}</span>
          </h2>
          <p className="contact-copy">{c.copy}</p>

          <p className="contact-small-label">{c.orEmail}</p>
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <Mail size={17} aria-hidden="true" />
            {profile.email}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <div className="contact-actions">
            <a className="button button-primary" href={pick(profile.cv)} download>
              {t.hero.downloadCv} <Download size={16} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={`mailto:${profile.academicEmail}`}>
              <GraduationCap size={16} aria-hidden="true" /> {profile.academicEmail}
            </a>
          </div>

          {profile.socialLinks.length > 0 && (
            <div className="contact-socials">
              {profile.socialLinks.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="eyebrow">{c.formTitle}</p>
          <label>
            <span>{c.name}</span>
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            <span>{c.email}</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            <span>{c.message}</span>
            <textarea name="message" rows={5} required />
          </label>
          <input
            type="text"
            name="_honey"
            className="honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button className="button button-primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? c.sending : c.send} <Send size={15} aria-hidden="true" />
          </button>
          {status === "sent" && <p className="form-status success" role="status">{c.success}</p>}
          {status === "error" && <p className="form-status error" role="alert">{c.error}</p>}
        </form>
      </div>
    </section>
  );
}
