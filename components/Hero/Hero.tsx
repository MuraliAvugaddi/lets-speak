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
              viewBox="10 -15 180 100"
              xmlns="http://www.w3.org/2000/svg"
              width="240"
              height="140"
            >
              <path
              d="M 5 40 Q 20 15, 60 18 T 140 25 Q 180 28, 195 38 Q 185 50, 150 53 T 60 58 Q 25 56, 10 48 Q 3 43, 5 40"
              fill="none"
              stroke="#d61f26"
              strokeWidth="3"
              strokeLinecap="round"
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
            className={styles.whatsappBtn}
          >
            WhatsApp Now
          </a>

          <button className={styles.courseBtn}>
            Get Course & Price
          </button>
        </div>

      </div>
    </section>
  );
}