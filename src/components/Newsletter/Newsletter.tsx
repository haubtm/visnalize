import { useState, type FormEvent } from 'react';
import { Envelope, CloseSquare, PointerRight } from '../icons';
import styles from './Newsletter.module.scss';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Front-end demo only — no backend.
  };

  return (
    <section className={styles.card} aria-labelledby="newsletter-title">
      <div className={styles.header}>
        <h3 id="newsletter-title">NEVER MISS AN UPDATE</h3>
        <button type="button" className={styles.close} aria-label="Dismiss">
          <CloseSquare width={24} height={24} />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.intro}>
          <Envelope width={32} height={32} />
          <p>Get the latest news, updates and exclusive content straight to your inbox.</p>
        </div>

        <form className={styles.form} onSubmit={onSubmit}>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            className={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.subscribe}>
            SUBSRIBE
            <PointerRight width={20} height={20} />
          </button>
        </form>

        <p className={styles.note}>No spam, just good stuff</p>
      </div>
    </section>
  );
}
