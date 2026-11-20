import { useState } from "react";
import { skillCategories, skillRings } from "../data/portfolio.js";
import SectionTitle from "./SectionTitle.jsx";
import CircularSkill from "./CircularSkill.jsx";
import useInView from "../hooks/useInView.js";

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const [ref, inView] = useInView();
  const active = skillCategories.find((c) => c.id === activeId);

  return (
    <section id="skills" className="section">
      <SectionTitle icon="🧊">My Technical Arsenal</SectionTitle>

      <div ref={ref} className={`skills-card reveal ${inView ? "in" : ""}`}>
        <ul className="skill-tabs">
          {skillCategories.map((c) => (
            <li key={c.id}>
              <button
                className={c.id === activeId ? "active" : ""}
                onClick={() => setActiveId(c.id)}
              >
                <span className="tab-icon">{c.icon}</span>
                {c.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="skill-panel">
          <h3>
            {active.icon} {active.label}
            <span className="badge">{active.items.length} Skills</span>
          </h3>
          <div className="chips" key={active.id}>
            {active.items.map((s) => (
              <span className="chip" key={s.name} title={s.name}>
                <span className="chip-icon">{s.icon}</span>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="rings">
        {skillRings.map((s) => (
          <CircularSkill key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
