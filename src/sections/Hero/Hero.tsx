import Button from '../../components/Shared/Button';
import LayeredHeading from '../../components/Shared/LayeredHeading';
import CroppedImage from '../../components/Shared/CroppedImage';
import TypewriterText from '../../components/Shared/TypewriterText';
import Checkerboard from '../../components/Hero/Checkerboard';
import StatsBar from '../../components/Stats/StatsBar';
import { PointerRight } from '../../components/icons';
import heroDevice from '../../assets/figma/hero_device.png';
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
              src={heroDevice}
              alt="Windows 7 tablet and a retro brick phone running Visnalize"
              aspectRatio="505 / 515"
              loading="eager"
              style={{ width: '100%' }}
              inner={{ top: '-17.73%', left: '-61.96%', width: '168.96%', height: '124.26%' }}
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
