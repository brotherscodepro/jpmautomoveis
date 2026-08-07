import { useState, useEffect } from "react";
import { fmt } from "../lib.jsx";

export default function Ticker({ value, active, delay = 0, suffix = "" }) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!active) { setV(0); return; }
    let raf, t0;
    const timer = setTimeout(() => {
      const step = (t) => {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / 900, 1);
        setV(Math.round((1 - Math.pow(1 - p, 3)) * value));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [active, value, delay]);

  return <>{fmt(v)}{suffix}</>;
}
