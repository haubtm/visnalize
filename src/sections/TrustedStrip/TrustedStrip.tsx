import CroppedImage from '../../components/Shared/CroppedImage';
import strip from '../../assets/figma/trusted_strip.png';
import styles from './TrustedStrip.module.scss';

/** "Trusted & featured on" logo band — Google Play, YouTube, XDA, Android Community. */
export default function TrustedStrip() {
  return (
    <section className={styles.strip} aria-label="Trusted and featured on Google Play, YouTube, XDA and Android Community">
      <div className={styles.wrap}>
        <CroppedImage
          src={strip}
          aspectRatio="1440 / 100"
          style={{ width: '100%' }}
          inner={{ top: '-860%', left: '0', width: '100%', height: '960%' }}
        />
      </div>
    </section>
  );
}
