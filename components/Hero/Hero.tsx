// Hero.tsx
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>

        {/* Eyebrow text */}
        <p className={styles.eyebrow}>
          Learn English Through Mother Tongue Languages
        </p>

        {/* Main Heading */}
        <h1 className={styles.heading}>
          Award{" "}
          <span className={styles.winningWrapper}>
            <span className={styles.winning}>Winning</span>
            <svg
              className={styles.circle}
              viewBox="-10 5 260 110"
              xmlns="http://www.w3.org/2000/svg"
              width="260"
              height="110"
            >
              {/* Hand-drawn ellipse with slight imperfections */}
              <path
                d="M 20 55 
                   Q 25 22, 70 18 
                   Q 115 15, 160 18 
                   Q 205 22, 235 42
                   Q 242 52, 238 62
                   Q 232 75, 190 82
                   Q 145 88, 95 87
                   Q 50 85, 22 70
                   Q 15 62, 18 55
                   Q 19 52, 20 55 Z"
                fill="none"
                stroke="#d61f26"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.circlePath}
              />
            </svg>
          </span>
          <br />
          Online English
          <br />
          Learning Platform
        </h1>

        {/* Description */}
        <p className={styles.description}>
          Learn English through WhatsApp | Grammar + Spoken English
          <br />
          Course | 1 to 1 Personal Training
        </p>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
          >
            WhatsApp Now
          </a>

          <button className={styles.courseBtn}>
            Get Course & Price
          </button>
        </div>

      </div>
      <div className={styles.right}>
        <img src="./hero-right.png" alt="HERO-RIGHT"/>
      </div>
    </section>
  );
}