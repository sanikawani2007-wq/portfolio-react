import { useEffect, useRef } from "react";

// Small glowing dot that smoothly follows the mouse (desktop only).
export default function CustomCursor() {
  const dot = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const pos = { x: -50, y: -50 };
    const cur = { x: -50, y: -50 };
    let raf;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };
    const loop = () => {
      cur.x += (pos.x - cur.x) * 0.18;
      cur.y += (pos.y - cur.y) * 0.18;
      if (dot.current)
        dot.current.style.transform = `translate(${cur.x}px, ${cur.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dot} className="cursor-dot" aria-hidden="true" />;
}
