import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.hero}>
        <div className={styles.left}>

          {/* Main Heading */}
          <h1 className={styles.heading}>
            <span className={styles.winningWrapper}>
              <span className={styles.winning}>Personalized</span>
              <svg
                className={styles.circle}
                viewBox="-2 10 260 90"
                xmlns="http://www.w3.org/2000/svg"
                // Removed inline width/height to let CSS control it
                preserveAspectRatio="none"
              >
                <path
                  d="M 20 55 Q 25 22, 70 18 Q 115 15, 160 18 Q 205 22, 235 42 Q 242 52, 238 62 Q 232 75, 190 82 Q 145 88, 95 87 Q 50 85, 22 70 Q 15 62, 18 55 Q 19 52, 20 55 Z"
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
            English & Hindi 
            <br />Training Programs.
            <br />Online | Offline 
            <br />| 1-on-1
          </h1>

          {/* Description */}
          <p className={styles.description}>
             Speak Confidently with Strong Grammar and Real-Life Communication Practice through Online, Offline or 1 to 1 Training.
          </p>

          {/* CTA Buttons */}
          <div className={styles.actions}>
            <a
              href="https://wa.me/919959751194"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              WhatsApp Now
            </a>

            <a href="tel:+919959751194" className={styles.courseBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Contact Us
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageContainer}>
            {/* Ensure your image path is correct */}
            <img
              src="/hero-right.png"
              alt="Student learning online"
              className={styles.floating}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
