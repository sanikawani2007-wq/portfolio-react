import { useEffect, useRef, useState } from "react";

// Returns [ref, inView].
//  once = true  → turns true the first time the element is seen and stays true
//  once = false → turns true every time it scrolls into view and false when it
//                 leaves, so the entrance animation REPLAYS each time.
export default function useInView(options = { threshold: 0.2 }, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) obs.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}
