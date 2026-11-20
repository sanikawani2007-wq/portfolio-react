import { projects } from "../data/portfolio.js";
import SectionTitle from "./SectionTitle.jsx";
import useInView from "../hooks/useInView.js";

function ProjectCard({ p, index }) {
  const [ref, inView] = useInView({ threshold: 0.15 }, false);
  return (
    <article
      ref={ref}
      className={`project-card ${inView ? "in" : ""}`}
      style={{ "--d": `${index * 140}ms` }}
    >
      <div className="project-img">
        {p.image ? <img src={p.image} alt={p.title} /> : <div className="img-placeholder">{p.title}</div>}
      </div>
      <div className="tags">
        {p.tags.map((t, i) => (
          <span key={t} style={{ "--t": i }}>{t}</span>
        ))}
      </div>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <div className="project-links">
        <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
          </svg>
        </a>
        <a href={p.demo} target="_blank" rel="noreferrer" className="demo">
          Live Demo ↗
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle>Featured Projects</SectionTitle>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.title + i} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
