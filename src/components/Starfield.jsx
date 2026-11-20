import { useEffect, useRef } from "react";

// Animated star background: twinkling + slowly drifting stars,
// mouse parallax, and random shooting stars.
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, stars, raf;
    let shooters = [];
    const mouse = { x: 0, y: 0, sx: 0, sy: 0 };

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = Math.min(260, Math.floor((w * h) / 7000));
      stars = Array.from({ length: count }, () => {
        const warm = Math.random();
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.6 + 0.3,
          d: Math.random() * 0.8 + 0.1, // depth
          t: Math.random() * Math.PI * 2,
          s: Math.random() * 0.035 + 0.01, // twinkle speed
          vx: (Math.random() - 0.5) * 0.12, // slow drift
          vy: Math.random() * 0.1 + 0.02,
          c: warm > 0.75 ? "255,170,90" : warm > 0.5 ? "170,190,255" : "255,235,215",
        };
      });
    };

    const spawnShooter = () => {
      const fromLeft = Math.random() > 0.5;
      shooters.push({
        x: fromLeft ? Math.random() * w * 0.6 : w * 0.4 + Math.random() * w * 0.6,
        y: Math.random() * h * 0.4,
        vx: (fromLeft ? 1 : -1) * (7 + Math.random() * 5),
        vy: 3 + Math.random() * 3,
        life: 1,
      });
    };

    let nextShooter = 90;
    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);

      // smooth parallax
      mouse.sx += (mouse.x - mouse.sx) * 0.05;
      mouse.sy += (mouse.y - mouse.sy) * 0.05;

      for (const s of stars) {
        s.t += s.s;
        s.x += s.vx;
        s.y += s.vy;
        if (s.y > h + 5) { s.y = -5; s.x = Math.random() * w; }
        if (s.x > w + 5) s.x = -5;
        if (s.x < -5) s.x = w + 5;

        const tw = 0.5 + Math.sin(s.t) * 0.5; // 0..1
        const x = s.x + mouse.sx * s.d * 40;
        const y = s.y + mouse.sy * s.d * 40;
        const r = s.r * (0.8 + tw * 0.5);

        // soft glow
        const g = ctx.createRadialGradient(x, y, 0, x, y, r * 4);
        g.addColorStop(0, `rgba(${s.c},${0.25 + tw * 0.6})`);
        g.addColorStop(1, `rgba(${s.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.c},${0.4 + tw * 0.6})`;
        ctx.fill();
      }

      // shooting stars
      if (frame >= nextShooter) {
        spawnShooter();
        nextShooter = frame + 120 + Math.random() * 240;
      }
      shooters = shooters.filter((m) => m.life > 0);
      for (const m of shooters) {
        const tail = 14;
        const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * tail, m.y - m.vy * tail);
        g.addColorStop(0, `rgba(255,220,170,${m.life})`);
        g.addColorStop(1, "rgba(255,170,80,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.vx * tail, m.y - m.vy * tail);
        ctx.stroke();
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.014;
      }

      raf = requestAnimationFrame(draw);
    };

    // stars are only visible on the Home section: fade out while scrolling away
    const onScroll = () => {
      const o = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.75));
      canvas.style.opacity = o.toFixed(3);
    };
    onScroll();

    const onMove = (e) => {
      mouse.x = e.clientX / w - 0.5;
      mouse.y = e.clientY / h - 0.5;
    };

    init();
    draw();
    window.addEventListener("resize", init);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
