import type { ReactNode } from 'react';
import { Download, Heart, Globe, Youtube, StarSolid } from '../icons';
import { useInView } from '../../utils/useInView';
import { useCountUp } from '../../utils/useCountUp';
import styles from './StatsBar.module.scss';

interface StatItem {
  icon: ReactNode;
  num?: number;
  decimals?: number;
  suffix?: string;
  text?: string;
  star?: boolean;
  bold: string;
  reg: string;
}

const STATS: StatItem[] = [
  { icon: <Download width={32} height={32} />, num: 10, suffix: 'M+', bold: 'Download', reg: 'Across all apps' },
  { icon: <Heart width={32} height={32} />, num: 4.2, decimals: 1, star: true, bold: 'Average rating', reg: '77K+ reviews' },
  { icon: <Globe width={32} height={32} />, text: 'TOP IN INDIA', bold: 'And 20+ countries', reg: 'Loved worldwide' },
  { icon: <Youtube width={32} height={32} />, num: 16.7, decimals: 1, suffix: 'K+', bold: 'Youtube subscribers', reg: 'Retro community' },
];

function StatValue({ stat, active }: { stat: StatItem; active: boolean }) {
  const counted = useCountUp(stat.num ?? 0, active);
  if (stat.text) {
    return <span className={`${styles.value} ${styles.valueText}`}>{stat.text}</span>;
  }
  const display = counted.toFixed(stat.decimals ?? 0) + (stat.suffix ?? '');
  return (
    <span className={styles.value}>
      {display}
      {stat.star && <StarSolid width={24} height={24} />}
    </span>
  );
}

export default function StatsBar() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div className={styles.bar} ref={ref}>
      {STATS.map((stat, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.iconBox} aria-hidden="true">
            {stat.icon}
          </div>
          <div className={styles.body}>
            <StatValue stat={stat} active={inView} />
            <span className={styles.label}>
              <span className={styles.bold}>{stat.bold}</span>
              <span className={styles.reg}>{stat.reg}</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
