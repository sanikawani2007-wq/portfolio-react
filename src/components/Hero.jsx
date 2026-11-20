import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio.js";

// Types the role word by word with a blinking caret (loops: type → pause → delete)
function useTypewriter(text, speed = 85, pause = 1800) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let dir = 1;
    let timer;
    const tick = () => {
      i += dir;
      setOut(text.slice(0, i));
      if (dir === 1 && i === text.length) {
        dir = -1;
        timer = setTimeout(tick, pause);
      } else if (dir === -1 && i === 0) {
        dir = 1;
        timer = setTimeout(tick, 500);
      } else {
        timer = setTimeout(tick, dir === 1 ? speed : speed / 2);
      }
    };
    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [text, speed, pause]);
  return out;
}

export default function Hero() {
  const role = useTypewriter(profile.role);
  const photoRef = useRef(null);

  // 3D tilt of the photo following the mouse
  useEffect(() => {
    const el = photoRef.current;
    if (!el) return;
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty("--rx", `${-y * 10}deg`);
      el.style.setProperty("--ry", `${x * 12}deg`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-photo" ref={photoRef}>
          <span className="orbit orbit-1" />
          <span className="orbit orbit-2" />
          <div className="hero-photo-img">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <div className="photo-placeholder round">Your Photo</div>
            )}
          </div>
        </div>

        <h1 className="hero-name glitch" data-text={profile.name}>
          {profile.name}
        </h1>
        <h2 className="hero-role">
          {role}
          <span className="caret" />
        </h2>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-buttons">
          <button
            className="btn"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </button>
          <a className="btn" href={profile.resumeUrl} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
