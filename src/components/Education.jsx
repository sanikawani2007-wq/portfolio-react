import { education } from "../data/portfolio.js";
import SectionTitle from "./SectionTitle.jsx";
import useInView from "../hooks/useInView.js";

function Item({ e, side }) {
  const [ref, inView] = useInView({ threshold: 0.25 }, false);
  return (
    <div ref={ref} className={`tl-item ${side} ${inView ? "in" : ""}`}>
      <span className="tl-node">🎓</span>
      <div className="tl-head">
        <span className="tl-logo">{e.logo}</span>
        <h3>{e.institute}</h3>
        <span className="tl-period">📅 {e.period}</span>
      </div>
      <div className="tl-body">
        <p><b>Degree:</b> {e.degree}</p>
        <p><b>Grade:</b> {e.grade}</p>
        <p><b>Key Skills:</b> {e.skills}</p>
      </div>
    </div>
  );
}

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1 }, false);
  return (
    <section id="education" className="section">
      <SectionTitle>Education</SectionTitle>
      <div ref={ref} className={`timeline ${inView ? "in" : ""}`}>
        {education.map((e, i) => (
          <Item key={e.institute} e={e} side={i % 2 === 0 ? "left" : "right"} />
        ))}
      </div>
    </section>
  );
}
