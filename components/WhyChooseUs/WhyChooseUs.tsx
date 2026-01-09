// WhyChooseUs.tsx
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h2 className={styles.heading}>Why Choose Us?</h2>

        {/* Top Cards */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                className={styles.iconImage}
                src="/wcu-1.png"
                alt="15+ Years of Excellence"
                loading="lazy"
              />
            </div>
            <p className={styles.text}>15+ Years of Excellence</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                className={styles.iconImage}
                src="/wcu-2.png"
                alt="Students Empowered"
                loading="lazy"
              />
            </div>
            <p className={styles.text}>Students Empowered</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                className={styles.iconImage}
                src="/wcu-3.png"
                alt="Online & Offline Flexibility"
                loading="lazy"
              />
            </div>
            <p className={styles.text}>Online & Offline Flexibility</p>
          </div>
        </div>

        {/* Stats / Add-ons */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            {/* Students Icon */}
            <img
              className={styles.statIcon}
              src="/wcu-sub-1.webp"
              alt="Satisfied Students"
              loading="lazy"
            />
            <h3>200,000+</h3>
            <p>Satisfied Students</p>
          </div>

          <div className={styles.statCard}>
            {/* Trainer Icon */}
            <img
              className={styles.statIcon}
              src="/wcu-sub-2.webp"
              alt="Expert Trainers"
              loading="lazy"
            />
            <h3>25+</h3>
            <p>Expert Trainers</p>
          </div>

          <div className={styles.statCard}>
            {/* Support Icon */}
            <img
              className={styles.statIcon}
              src="/wcu-sub-3.webp"
              alt="Learning Support"
              loading="lazy"
            />
            <h3>24/7</h3>
            <p>Learning Support</p>
          </div>

          <div className={styles.statCard}>
            {/* Community Icon */}
            <svg
              aria-hidden="true"
              className={styles.statIcon}
              viewBox="0 0 640 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="#4a5568"
            >
              <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"></path>
            </svg>
            <h3>1M+</h3>
            <p>Learning Community</p>
          </div>
        </div>
      </section>
    </div>
  );
}