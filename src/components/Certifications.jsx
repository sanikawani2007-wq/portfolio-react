import { certifications } from "../data/portfolio.js";
import SectionTitle from "./SectionTitle.jsx";
import useInView from "../hooks/useInView.js";

function Card({ c, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 }, false);
  return (
    <article
      ref={ref}
      className={`cert-card ${inView ? "in" : ""}`}
      style={{ "--d": `${(index % 3) * 150}ms` }}
    >
      <div className="cert-img">
        {c.image ? <img src={c.image} alt={c.title} /> : <div className="img-placeholder">Certificate</div>}
        {c.badge && <span className="cert-badge">{c.badge}</span>}
        <span className="shine" />
      </div>
      <span className="cert-date">{c.date}</span>
      <h3>{c.title}</h3>
      <p className="cert-issuer">
        <span className="dot" /> {c.issuer}
      </p>
      <a href={c.link} target="_blank" rel="noreferrer">
        View Credential ↗
      </a>
    </article>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionTitle>Certifications</SectionTitle>
      <div className="cert-grid">
        {certifications.map((c, i) => (
          <Card key={c.title + i} c={c} index={i} />
        ))}
      </div>
    </section>
  );
}
