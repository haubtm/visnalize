import Button from '../../components/Shared/Button';
import LayeredHeading from '../../components/Shared/LayeredHeading';
import CroppedImage from '../../components/Shared/CroppedImage';
import TypewriterText from '../../components/Shared/TypewriterText';
import Checkerboard from '../../components/Hero/Checkerboard';
import StatsBar from '../../components/Stats/StatsBar';
import { PointerRight } from '../../components/icons';
import heroDevices from '../../assets/figma/hero_devices.png';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-label="Introduction">
      <Checkerboard className={styles.checker} />

      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.textCol}>
            <div className={styles.titleGroup}>
              <LayeredHeading
                as="h1"
                font="display"
                offsetX={6}
                offsetY={3}
                className={styles.title}
              >
                VISNALIZE
              </LayeredHeading>
              <p className={styles.tagline}>
                <PointerRight width={32} height={32} />
                <TypewriterText text="MODERN APPS FOR VINTAGES SOULS" speed={55} startDelay={500} />
              </p>
            </div>

            <div className={styles.descGroup}>
              <p className={styles.desc}>
                We build retro-inspired apps that bring back the nostalgia of old
                computers and devices - with a modern twist.
              </p>
              <div className={styles.actions}>
                <Button variant="teal" size="md">
                  EXPLORE APPS
                </Button>
                <Button variant="light" size="md">
                  WORK WITH US
                </Button>
              </div>
            </div>
          </div>

          <div className={styles.imageCol}>
            <CroppedImage
              className={styles.heroImage}
              src={heroDevices}
              alt="Visnalize Studio — a smartphone running Windows 7 beside a retro brick phone"
              aspectRatio="644 / 424"
              loading="eager"
              style={{ width: '100%' }}
              inner={{ top: '-2.09%', left: '-1.59%', width: '103.19%', height: '104.45%' }}
            />
          </div>
        </div>
      </div>

      <div className={styles.statsWrap}>
        <StatsBar />
      </div>
    </section>
  );
}
