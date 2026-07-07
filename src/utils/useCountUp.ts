import { useEffect, useRef, useState } from 'react';

/**
 * Counts up to a numeric target when `active` becomes true.
 * Preserves an optional prefix/suffix (e.g. "10", "M+") supplied by the caller.
 * Skips the animation entirely under prefers-reduced-motion.
 */
export function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(target);
      return;
    }

    let raf = 0;
    let startTime: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(target * easeOut(progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}
