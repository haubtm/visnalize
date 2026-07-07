import { Download, Heart, Globe, StarSolid } from '../icons';
import styles from './AppCard.module.scss';

/** Compact 3-up stats strip shown inside every app card. */
export default function MiniStats() {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <span className={styles.statIcon}>
          <Download width={32} height={32} />
        </span>
        <span className={styles.statBody}>
          <span className={styles.statValue}>10M+</span>
          <span className={styles.statSub}>Download</span>
        </span>
      </div>

      <div className={styles.stat}>
        <span className={styles.statIcon}>
          <Heart width={32} height={32} />
        </span>
        <span className={styles.statBody}>
          <span className={styles.statValue}>
            4.2
            <StarSolid width={24} height={24} />
          </span>
          <span className={styles.statSub}>77K+ reviews</span>
        </span>
      </div>

      <div className={styles.stat}>
        <span className={styles.statIcon}>
          <Globe width={32} height={32} />
        </span>
        <span className={styles.statBody}>
          <span className={`${styles.statValue} ${styles.small}`}>TOP IN INDIA</span>
          <span className={styles.statSub}>And 20+ countries</span>
        </span>
      </div>
    </div>
  );
}
