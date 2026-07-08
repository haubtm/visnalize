import { useTypewriter } from '../../utils/useTypewriter';
import styles from './TypewriterText.module.scss';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  active?: boolean;
  className?: string;
}

/**
 * Retro terminal-style typing effect with a blinking block cursor.
 * The full text is always present for assistive tech (sr-only); the animated
 * copy is aria-hidden.
 */
export default function TypewriterText({
  text,
  speed,
  startDelay,
  active = true,
  className,
}: TypewriterTextProps) {
  const { display } = useTypewriter(text, { speed, startDelay, active });

  return (
    <span className={[styles.wrap, className].filter(Boolean).join(' ')}>
      <span aria-hidden="true">{display}</span>
      <span className={styles.cursor} aria-hidden="true" />
      <span className="sr-only">{text}</span>
    </span>
  );
}
