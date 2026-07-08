import { useEffect, useRef, useState } from 'react';
import { VolumeOn, VolumeOff } from '../../components/icons';
import styles from './Teaser.module.scss';

const SRC = `${import.meta.env.BASE_URL}Visnalize_Teaser_v2.mp4`;

/**
 * Full-bleed video teaser that closes the Apps page (the Visnalize_Teaser_v2 frame).
 *
 * Sound is ON by default. Browsers forbid autoplay-with-sound without a user
 * gesture, so we: play only while the teaser is on screen (no off-screen audio),
 * try to start with sound, and if that's blocked, fall back to muted playback and
 * unmute automatically on the first real interaction. A manual toggle is always
 * available, and prefers-reduced-motion keeps the video paused with native controls.
 */
export default function Teaser() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const wantSound = useRef(true); // user preference — sound unless they mute
  const [muted, setMuted] = useState(true); // reflects the video's real state
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduced(prefersReduced);
    if (prefersReduced) {
      video.muted = true;
      setMuted(true);
      video.pause();
      return;
    }

    let inView = false;

    const play = () => {
      if (!inView) return;
      video.muted = !wantSound.current;
      const attempt = video.play();
      if (attempt) {
        attempt
          .then(() => setMuted(video.muted))
          .catch(() => {
            // Autoplay-with-sound blocked → play muted, wait for a gesture.
            video.muted = true;
            setMuted(true);
            video.play().catch(() => {});
          });
      }
    };

    // First real interaction unlocks audio (browser user-activation requirement).
    const onGesture = () => {
      if (wantSound.current && video.muted) {
        video.muted = false;
        video.volume = 1;
        setMuted(false);
        if (inView) video.play().catch(() => {});
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) play();
        else video.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(section);

    const gestures = ['pointerdown', 'keydown', 'touchstart'] as const;
    gestures.forEach((e) => window.addEventListener(e, onGesture, { passive: true }));

    return () => {
      io.disconnect();
      gestures.forEach((e) => window.removeEventListener(e, onGesture));
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    wantSound.current = !nextMuted;
    video.muted = nextMuted;
    if (!nextMuted) {
      video.volume = 1;
      video.play().catch(() => {});
    }
    setMuted(nextMuted);
  };

  return (
    <section ref={sectionRef} className={styles.teaser} aria-label="Visnalize teaser video">
      <video
        ref={videoRef}
        className={styles.video}
        src={SRC}
        muted
        loop
        playsInline
        controls={reduced}
        preload="metadata"
      />
      {!reduced && (
        <button
          type="button"
          className={styles.sound}
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? 'Unmute teaser video' : 'Mute teaser video'}
        >
          {muted ? <VolumeOff width={24} height={24} /> : <VolumeOn width={24} height={24} />}
          <span>{muted ? 'SOUND OFF' : 'SOUND ON'}</span>
        </button>
      )}
    </section>
  );
}
