import { useEffect, useRef } from 'react';
import styles from './Teaser.module.scss';

const SRC = `${import.meta.env.BASE_URL}Visnalize_Teaser_v2.mp4`;

/**
 * Full-bleed video teaser that closes the Apps page (the Visnalize_Teaser_v2 frame).
 * Autoplays muted/looped, but honours prefers-reduced-motion by staying paused
 * and exposing native controls instead.
 */
export default function Teaser() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      video.autoplay = false;
      video.controls = true;
      video.pause();
    } else {
      // Nudge muted autoplay along in browsers that defer it; ignore rejection.
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className={styles.teaser} aria-label="Visnalize teaser video">
      <video
        ref={videoRef}
        className={styles.video}
        src={SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </section>
  );
}
