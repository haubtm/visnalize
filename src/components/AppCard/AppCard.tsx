import type { ReactNode } from 'react';
import { Bullet, PointerRight } from '../icons';
import MiniStats from './MiniStats';
import StoreBadges from './StoreBadges';
import styles from './AppCard.module.scss';

interface AppCardProps {
  title: string;
  tag?: string;
  description?: string;
  features?: string[];
  image: ReactNode;
}

const DEFAULT_FEATURES = ['6+ Themes', 'Fully Customizable', 'Lightweight', 'Regular Updates'];

export default function AppCard({
  title,
  tag = 'SIMULATOR',
  description = 'The classic Windows 7 experience on your Android device.',
  features = DEFAULT_FEATURES,
  image,
}: AppCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>

      <div className={styles.body}>
        <div className={styles.imageArea}>{image}</div>
        <div className={styles.info}>
          <span className={styles.badge}>{tag}</span>
          <p className={styles.desc}>{description}</p>
          <ul className={styles.features}>
            {features.map((f) => (
              <li className={styles.feature} key={f}>
                <Bullet width={9} height={9} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <MiniStats />

      <div className={styles.footer}>
        <button type="button" className={styles.learnMore}>
          LEARN MORE
          <PointerRight width={20} height={20} />
        </button>
        <StoreBadges />
      </div>
    </article>
  );
}
