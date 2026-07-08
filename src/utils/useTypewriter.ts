import { useEffect, useState } from 'react';

interface TypewriterOptions {
  /** ms per character */
  speed?: number;
  /** ms to wait before typing starts */
  startDelay?: number;
  /** only type once this is true (e.g. element in view) */
  active?: boolean;
}

/**
 * Types out `text` one character at a time. Returns the currently-visible
 * substring and whether typing has finished. Honours prefers-reduced-motion by
 * showing the full string immediately.
 */
export function useTypewriter(
  text: string,
  { speed = 55, startDelay = 400, active = true }: TypewriterOptions = {},
) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(text);
      setDone(true);
      return;
    }

    // Reset so the animation is deterministic on (re)mount — incl. StrictMode.
    setDisplay('');
    setDone(false);

    let i = 0;
    let timer: number;

    const typeNext = () => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i < text.length) {
        timer = window.setTimeout(typeNext, speed);
      } else {
        setDone(true);
      }
    };

    timer = window.setTimeout(typeNext, startDelay);
    return () => window.clearTimeout(timer);
  }, [text, speed, startDelay, active]);

  return { display, done };
}
