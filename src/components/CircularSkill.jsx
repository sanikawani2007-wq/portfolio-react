import useInView from "../hooks/useInView.js";

const R = 38;
const C = 2 * Math.PI * R;

export default function CircularSkill({ name, level, icon }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const offset = C - (C * (inView ? level : 0)) / 100;

  return (
    <div className="ring" ref={ref}>
      <svg viewBox="0 0 100 100" width="84" height="84">
        <circle cx="50" cy="50" r={R} className="ring-bg" />
        <circle
          cx="50"
          cy="50"
          r={R}
          className="ring-fg"
          strokeDasharray={C}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
        <text x="50" y="56" textAnchor="middle" className="ring-text">
          {level}%
        </text>
      </svg>
      <span className="ring-icon">{icon}</span>
      <span className="ring-name">{name}</span>
    </div>
  );
}
