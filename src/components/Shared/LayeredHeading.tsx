import type { CSSProperties, ElementType } from 'react';
import styles from './LayeredHeading.module.scss';

interface LayeredHeadingProps {
  children: string;
  /** Offset of the teal shadow copy behind the ink copy (Figma: +x / +y). */
  offsetX?: number;
  offsetY?: number;
  font?: 'mono' | 'display';
  size?: number | string;
  letterSpacing?: number | string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

/**
 * Retro layered title — a teal copy offset behind the black copy.
 * The shadow copy is aria-hidden so assistive tech reads the text once.
 */
export default function LayeredHeading({
  children,
  offsetX = 4,
  offsetY = 2,
  font = 'mono',
  size,
  letterSpacing,
  as: Tag = 'span',
  className,
  style,
  id,
}: LayeredHeadingProps) {
  const fontSize = typeof size === 'number' ? `${size}px` : size;
  const tracking =
    typeof letterSpacing === 'number' ? `${letterSpacing}px` : letterSpacing;

  return (
    <Tag
      id={id}
      className={[styles.wrap, styles[font], className].filter(Boolean).join(' ')}
      style={{ fontSize, letterSpacing: tracking, ...style }}
    >
      <span
        className={styles.shadow}
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span className={styles.front}>{children}</span>
    </Tag>
  );
}
