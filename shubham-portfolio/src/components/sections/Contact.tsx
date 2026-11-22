import { ArrowUpRight, Download, GraduationCap, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="contact-section page-wrap" id="contact">
      <div className="contact-panel">
        <p className="eyebrow">HAVE A PROJECT OR AN OPPORTUNITY?</p>
        <h2>
          Let&apos;s build
          <br />
          <span>something meaningful.</span>
        </h2>
        <p className="contact-copy">
          Interested in renewable energy, power systems or a research
          collaboration? Write to me. I&apos;d be glad to connect.
        </p>

        <a className="contact-link" href={`mailto:${profile.email}`}>
          <Mail size={17} aria-hidden="true" />
          {profile.email}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <div className="contact-actions">
          <a className="button button-primary" href={profile.cv} download>
            Download CV <Download size={16} aria-hidden="true" />
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
    </section>
  );
}
