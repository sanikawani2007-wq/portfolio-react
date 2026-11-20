import { about, profile } from "../data/portfolio.js";
import SectionTitle from "./SectionTitle.jsx";
import useInView from "../hooks/useInView.js";

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.25 }, false);

  return (
    <section id="about" className="section">
      <SectionTitle>{about.title}</SectionTitle>
      <div ref={ref} className={`about-grid ${inView ? "in" : ""}`}>
        <div className="about-text">
          {about.points.map((p, i) => (
            <p key={i} className="about-line" style={{ "--i": i }}>
              <span className="about-icon">{p.icon}</span>
              <span className="hl">{p.text.split("—")[0]}</span>
              {p.text.includes("—") && <span>—{p.text.split("—").slice(1).join("—")}</span>}
            </p>
          ))}
        </div>
        <div className="about-photo">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <div className="photo-placeholder">Your Photo</div>
          )}
        </div>
      </div>
    </section>
  );
}
