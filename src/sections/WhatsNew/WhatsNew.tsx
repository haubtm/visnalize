import { Fragment } from 'react';
import LayeredHeading from '../../components/Shared/LayeredHeading';
import Newsletter from '../../components/Newsletter/Newsletter';
import UpdateItem, { type UpdateData } from '../../components/UpdateItem/UpdateItem';
import { PointerRight, Android, Apple, Copy } from '../../components/icons';
import { useInView } from '../../utils/useInView';
import gem from '../../assets/figma/gem1.svg';
import styles from './WhatsNew.module.scss';
import reveal from '../../styles/reveal.module.scss';

const DESC =
  'Retro-inspired experiences loved by millions worldwide. Explore our growing collection of apps.';

const UPDATES: UpdateData[] = [
  { day: 'MAY 10', year: '2024', thumbTop: '-339.33%', app: 'WIN7 SIMU', type: 'NEW FEATURE', version: 'v3.8.0', versionName: 'Theme Studio Pro', desc: DESC },
  { day: 'MAY 10', year: '2024', thumbTop: '-457.03%', app: 'WIN7 SIMU', type: 'FIX', version: 'v3.8.0', versionName: 'Theme Studio Pro', desc: DESC },
  { day: 'MAY 10', year: '2024', thumbTop: '-575.29%', app: 'WIN7 SIMU', type: 'IMPROMENT', version: 'v3.8.0', versionName: 'Theme Studio Pro', desc: DESC },
  { day: 'MAY 10', year: '2024', thumbTop: '-808.44%', app: 'WIN7 SIMU', type: 'NEW FEATURE', version: 'v3.8.0', versionName: 'Theme Studio Pro', desc: DESC },
  { day: 'MAY 10', year: '2024', thumbTop: '-690.38%', app: 'WIN7 SIMU', type: 'NEW FEATURE', version: 'v3.8.0', versionName: 'Theme Studio Pro', desc: DESC },
  { day: 'MAY 10', year: '2024', thumbTop: '-457.03%', app: 'WIN7 SIMU', type: 'FIX', version: 'v3.8.0', versionName: 'Theme Studio Pro', desc: DESC },
  { day: 'MAY 10', year: '2024', thumbTop: '-339.33%', app: 'WIN7 SIMU', type: 'NEW FEATURE', version: 'v3.8.0', versionName: 'Theme Studio Pro', desc: DESC },
];

const DISCOVER_TAGS = [
  'Browser Games',
  'Internet & Telecom',
  'Action & Platform Games',
  'Smart Phones',
  'Game',
  'Web Services',
  'Apple iOS',
  'Communications Equipment',
  'Software Utilities',
];

export default function WhatsNew() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className={styles.section} id="updates" aria-labelledby="updates-title">
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
            <div className={styles.headMain}>
              <div className={styles.titleCol}>
                <LayeredHeading
                  as="h2"
                  id="updates-title"
                  offsetX={4}
                  offsetY={2}
                  className={styles.kicker}
                >
                  WHAT&apos;S NEW
                </LayeredHeading>
                <span className={styles.headline}>STAY IN THE LOOP.</span>
              </div>
              <p className={styles.desc}>
                We&apos;re always improving, adding new features, fixing bugs, and
                creating better retro experiences for you.
              </p>
            </div>
          </div>

          {/* annotation legend */}
          <div className={styles.annotation}>
            <p className={styles.annTitle}>ANNOTATION</p>
            <div className={styles.annRow}>
              <div className={styles.annItem}>
                <Android width={40} height={40} />
                <span>Android</span>
              </div>
              <div className={styles.annItem}>
                <Apple width={40} height={40} />
                <span>iSO</span>
              </div>
              <div className={styles.annItem}>
                <img src={gem} alt="" width={24.889} height={32} />
                <span>Premium feature</span>
              </div>
            </div>
          </div>
        </div>

        {/* two-column main */}
        <div className={styles.main}>
          {/* changelog */}
          <div className={styles.changelog}>
            <div className={styles.clHeader}>
              <h3>LASTEST UPDATE</h3>
            </div>
            <div className={styles.clScroll}>
              <div className={styles.clList}>
                {UPDATES.map((u, i) => (
                  <Fragment key={i}>
                    <UpdateItem data={u} />
                    {i < UPDATES.length - 1 && (
                      <span className={styles.divider} aria-hidden="true" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
            <div className={styles.clFooter} role="button" tabIndex={0}>
              <Copy width={24} height={24} />
              <span>VIEW FULL CHANGELOG</span>
            </div>
          </div>

          {/* side column */}
          <div className={styles.side}>
            <Newsletter />
            <section className={styles.discover} aria-labelledby="discover-title">
              <div className={styles.discoverBody}>
                <p className={styles.discoverTitle} id="discover-title">
                  Discover more:
                </p>
                <div className={styles.tags}>
                  {DISCOVER_TAGS.map((tag) => (
                    <button type="button" className={styles.tag} key={tag}>
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
