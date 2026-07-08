import styles from './Checkerboard.module.scss';

const ROWS = 12;
const COLS = 7;

/**
 * Visibility taper matching the updated Figma checkerboard:
 *   row 0 → all 7 columns, row 1 → 6, row 2 → 3, rows 3+ → 2.
 */
function visibleCols(r: number): number {
  if (r === 0) return 7;
  if (r === 1) return 6;
  if (r === 2) return 3;
  return 2;
}

/**
 * Retro checkerboard decoration. Only the teal squares are painted — the cream
 * squares are identical to the page background, exactly as in the design.
 */
export default function Checkerboard({ className }: { className?: string }) {
  const cells = [];
  for (let r = 0; r < ROWS; r++) {
    const limit = visibleCols(r);
    for (let c = 0; c < COLS; c++) {
      const teal = (r + c) % 2 === 0 && c < limit;
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
