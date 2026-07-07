import CroppedImage from '../Shared/CroppedImage';
import badges from '../../assets/figma/store_badges.png';
import styles from './AppCard.module.scss';

// Three crops of the store-badge sprite: Google Play, App Store, and a compact icon.
const CROPS = [
  { w: 151, inner: { top: '-44.48%', left: '-3.31%', width: '262.91%', height: '217.85%' }, label: 'Get it on Google Play' },
  { w: 148, inner: { top: '-44.48%', left: '-112.46%', width: '268.24%', height: '217.85%' }, label: 'Download on the App Store' },
  { w: 46, inner: { top: '-44.48%', left: '-706.04%', width: '863.04%', height: '217.85%' }, label: 'More download options' },
];

export default function StoreBadges() {
  return (
    <div className={styles.badges}>
      {CROPS.map((c, i) => (
        <CroppedImage
          key={i}
          src={badges}
          alt={c.label}
          width={c.w}
          height={45}
          radius={8}
          inner={c.inner}
        />
      ))}
    </div>
  );
}
