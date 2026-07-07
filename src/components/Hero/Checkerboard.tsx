import styles from './Checkerboard.module.scss';

const ROWS = 12;
const COLS = 5;

/** Visibility taper matching Figma: full top band + left band + one corner step. */
function isVisible(r: number, c: number) {
  return r < 2 || c < 2 || (r === 2 && c === 2);
}

/**
 * Retro checkerboard decoration. Only the teal squares are painted — the cream
 * squares are identical to the page background, exactly as in the design.
 */
export default function Checkerboard({ className }: { className?: string }) {
  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const teal = (r + c) % 2 === 0 && isVisible(r, c);
      cells.push(
        <div
          key={`${r}-${c}`}
          className={`${styles.cell} ${teal ? styles.teal : ''}`}
        />,
      );
    }
  }
  return (
    <div className={`${styles.grid} ${className ?? ''}`} aria-hidden="true">
      {cells}
    </div>
  );
}
