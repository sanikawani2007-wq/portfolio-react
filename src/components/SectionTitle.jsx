import useInView from "../hooks/useInView.js";

// Heading whose letters fly in one by one + underline that grows.
// Replays every time the heading scrolls into view.
export default function SectionTitle({ icon, children }) {
  const [ref, inView] = useInView({ threshold: 0.6 }, false);
  const text = String(children);

  return (
    <div ref={ref} className={`section-title ${inView ? "in" : ""}`}>
      <h2 aria-label={text}>
        {icon && <span className="st-icon">{icon}</span>}
        {[...text].map((ch, i) => (
          <span key={i} className="ch" style={{ "--i": i }} aria-hidden="true">
            {ch === " " ? " " : ch}
          </span>
        ))}
      </h2>
      <span className="st-line" />
    </div>
  );
}
