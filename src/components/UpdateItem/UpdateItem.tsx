import CroppedImage from '../Shared/CroppedImage';
import { PointerRight } from '../icons';
import changelog from '../../assets/figma/changelog_sprite.png';
import styles from './UpdateItem.module.scss';

export type UpdateType = 'NEW FEATURE' | 'FIX' | 'IMPROMENT';

export interface UpdateData {
  day: string;
  year: string;
  thumbTop: string;
  app: string;
  type: UpdateType;
  version: string;
  versionName: string;
  desc: string;
}

const TYPE_CLASS: Record<UpdateType, string> = {
  'NEW FEATURE': styles.teal,
  FIX: styles.fix,
  IMPROMENT: styles.blue,
};

export default function UpdateItem({ data }: { data: UpdateData }) {
  return (
    <div className={styles.item}>
      <div className={styles.date}>
        <span className={styles.day}>{data.day}</span>
        <span className={styles.year}>{data.year}</span>
      </div>

      <div className={styles.rail} aria-hidden="true">
        <span className={styles.line} />
        <span className={styles.dot} />
        <span className={styles.line} />
      </div>

      <div className={styles.content}>
        <CroppedImage
          className={styles.thumb}
          src={changelog}
          alt={`${data.app} ${data.version} screenshot`}
          width={131}
          height={89}
          inner={{ top: data.thumbTop, left: '-167.94%', width: '1099.24%', height: '1078.65%' }}
        />

        <div className={styles.cbody}>
          <div className={styles.ctext}>
            <div className={styles.badges}>
              <span className={styles.appTag}>{data.app}</span>
              <span className={`${styles.type} ${TYPE_CLASS[data.type]}`}>{data.type}</span>
            </div>
            <div className={styles.version}>
              <span>{data.version}</span>
              <span>{data.versionName}</span>
            </div>
            <p className={styles.cdesc}>{data.desc}</p>
          </div>

          <div className={styles.viewDetail}>
            <button type="button" className={styles.viewBtn}>
              View detail
              <PointerRight width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
