import { useEffect, useState } from "react";
import { contact } from "../data/portfolio.js";

function useClock(timeZone) {
  const fmt = () =>
    new Date().toLocaleTimeString("en-US", { timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const [t, setT] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setT(fmt()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return t;
}

export default function Contact() {
  const time = useClock(contact.timeZone);
  const [type, setType] = useState(contact.inquiryTypes[0]);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's mail app with everything pre-filled.
  // To use a real backend instead (Formspree, EmailJS ...) replace this function.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${type}] ${form.subject}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <section id="contact" className="section contact">
      <h2 className="contact-title">
        {contact.heading1}
        <br />
        <span>{contact.heading2}</span>
      </h2>
      <p className="contact-sub">{contact.subtitle}</p>
      <span className="st-line" />

      <div className="contact-grid">
        <form className="contact-form" onSubmit={submit}>
          <h3>Send a Message</h3>
          <div className="type-tabs">
            {contact.inquiryTypes.map((t) => (
              <button type="button" key={t} className={t === type ? "active" : ""} onClick={() => setType(t)}>
                {t}
              </button>
            ))}
          </div>

          <div className="row">
            <label>
              <span>👤 Full Name</span>
              <input name="name" value={form.name} onChange={change} placeholder="John Doe" required />
            </label>
            <label>
              <span>✉️ Email</span>
              <input name="email" type="email" value={form.email} onChange={change} placeholder="john@example.com" required />
            </label>
          </div>
          <label>
            <span>✦ Subject</span>
            <input name="subject" value={form.subject} onChange={change} placeholder="What's this about?" required />
          </label>
          <label>
            <span>➤ Message</span>
            <textarea name="message" rows="5" value={form.message} onChange={change} placeholder="Tell me about your project..." required />
          </label>
          <button className="btn send" type="submit">
            Send Message ➤
          </button>
        </form>

        <div className="contact-info">
          <div className="info-card">
            <span className="info-icon">🕒</span>
            <div>
              <small>LOCAL TIME</small>
              <strong className="clock">{time}</strong>
            </div>
          </div>
          <div className="info-card">
            <span className="info-icon">✉️</span>
            <div>
              <small>EMAIL</small>
              <strong>{contact.email}</strong>
            </div>
            <button className="copy" onClick={copyEmail} aria-label="Copy email">
              {copied ? "✓" : "⧉"}
            </button>
          </div>
          <a className="info-card" href={contact.linkedin.url} target="_blank" rel="noreferrer">
            <span className="info-icon in">in</span>
            <div>
              <small>LINKEDIN</small>
              <strong>{contact.linkedin.label}</strong>
            </div>
            <span className="copy">↗</span>
          </a>
          <a className="info-card" href={contact.github.url} target="_blank" rel="noreferrer">
            <span className="info-icon">🐙</span>
            <div>
              <small>GITHUB</small>
              <strong>{contact.github.label}</strong>
            </div>
            <span className="copy">↗</span>
          </a>
          <div className="info-card">
            <span className="info-icon">📍</span>
            <div>
              <small>LOCATION</small>
              <strong>{contact.location}</strong>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">© {new Date().getFullYear()} All rights reserved.</footer>
    </section>
  );
}
