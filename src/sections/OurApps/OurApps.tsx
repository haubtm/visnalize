import LayeredHeading from '../../components/Shared/LayeredHeading';
import CroppedImage from '../../components/Shared/CroppedImage';
import Button from '../../components/Shared/Button';
import AppCard from '../../components/AppCard/AppCard';
import { PointerRight } from '../../components/icons';
import { useInView } from '../../utils/useInView';
import appSprite from '../../assets/figma/app_sprite.png';
import rect32 from '../../assets/figma/deco_rect32.svg';
import rect33 from '../../assets/figma/deco_rect33.svg';
import styles from './OurApps.module.scss';
import reveal from '../../styles/reveal.module.scss';

export default function OurApps() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="apps" aria-labelledby="apps-title">
      <div
        className={`${styles.inner} ${reveal.reveal} ${inView ? reveal.in : ''}`}
        ref={ref}
      >
        {/* header */}
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <span className={styles.pointer}>
              <PointerRight width={24} height={24} />
            </span>
            <div className={styles.titleBlock}>
              <div className={styles.titles}>
                <LayeredHeading
                  as="h2"
                  id="apps-title"
                  offsetX={4}
                  offsetY={2}
                  className={styles.kicker}
                >
                  OUR APPS
                </LayeredHeading>
                <span className={styles.headline}>BUILD WITH PASSION.</span>
              </div>
              <p className={styles.subtitle}>
                Retro-inspired experiences loved by millions worldwide. Explore our
                growing collection of apps.
              </p>
            </div>
          </div>

          {/* more apps coming soon */}
          <div className={styles.more}>
            <div className={styles.cornerDeco} aria-hidden="true">
              <img className={styles.deco32} src={rect32} alt="" />
              <img className={styles.deco33} src={rect33} alt="" />
            </div>
            <div className={styles.moreRow}>
              <CroppedImage
                src={appSprite}
                width={58}
                height={80}
                inner={{ top: '-715.52%', left: '-2821.43%', width: '3428.57%', height: '1655.17%' }}
              />
              <div className={styles.moreText}>
                <p className={styles.moreTitle}>MORE APPS COMING SOON</p>
                <p className={styles.moreSub}>
                  We&apos;re building new experiences. Stay tuned!
                </p>
                <Button variant="light" size="sm">
                  VIEW ROADMAP
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* cards */}
        <div className={styles.cards}>
          <AppCard
            title="WIN7 SIMU"
            image={
              <CroppedImage
                src={appSprite}
                alt="Windows 7 simulator running on a tablet"
                width={237}
                height={200}
                inner={{ top: '-161.28%', left: '-30.82%', width: '516.13%', height: '408.51%' }}
              />
            }
          />
          <AppCard
            title="BRICK 1100"
            image={
              <div className={styles.brickImage}>
                <CroppedImage
                  src={appSprite}
                  alt="Retro brick phone simulator"
                  width={105}
                  height={202}
                  inner={{ top: '-154.07%', left: '-475.78%', width: '1125%', height: '390.24%' }}
                />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
