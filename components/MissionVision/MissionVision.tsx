import React from "react";
import { FiTarget, FiHeart, FiEye, FiAward } from "react-icons/fi";
import styles from "./MissionVision.module.css";

const MissionVisionSection: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      {/* Mission, Vision, Passion, Achievement Section */}
      <div className={styles.container}>
        {/* Left Column: The 2x2 Grid of Cards */}
        <div className={styles.cardGrid}>
          {/* Mission Card (Red) */}
          <div className={`${styles.card} ${styles.cardRed}`}>
            <div className={styles.iconWrapper}>
              <FiTarget className={styles.icon} size={24} />
            </div>
            <h3 className={styles.cardTitle}>Mission</h3>
            <p className={styles.cardText}>
              To empower individuals with communication and life skills that
              build confidence for real-life success.
            </p>
          </div>

          {/* Passion Card (Blue) */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.iconWrapper}>
              <FiHeart className={styles.icon} size={24} />
            </div>
            <h3 className={styles.cardTitle}>Passion</h3>
            <p className={styles.cardText}>
              Driven by a commitment to make quality English training accessible
              to every learner.
            </p>
          </div>

          {/* Vision Card (Blue) */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.iconWrapper}>
              <FiEye className={styles.icon} size={24} />
            </div>
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.cardText}>
              To create confident communicators who can express themselves
              clearly in personal and professional life.
            </p>
          </div>

          {/* Achievement Card (Red) */}
          <div className={`${styles.card} ${styles.cardRed}`}>
            <div className={styles.iconWrapper}>
              <FiAward className={styles.icon} size={24} />
            </div>
            <h3 className={styles.cardTitle}>Impact</h3>
            <p className={styles.cardText}>
              Trusted by 50,000+ learners for structured training in English
              communication and life skills.
            </p>
          </div>
        </div>

        {/* Right Column: Image with Decorative Frames */}
        <div className={styles.imageSection}>
          {/* Decorative Frames */}
          <div className={`${styles.frame} ${styles.frameTopRight}`}></div>
          <div className={`${styles.frame} ${styles.frameBottomLeft}`}></div>

          {/* Image Container & Image */}
          <div className={styles.imageBackground}>
            <img
              src="/surendra-pose-1.jpg"
              alt="Trainer speaking with microphone"
              className={styles.personImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className={styles.founderSpace}>
        <div className={styles.leftSection}>
          <img
            src="/surendra-the-founder.jpg"
            alt="Surendra - Founder of Let's Speak"
            loading="lazy"
          />
        </div>
        <div className={styles.rightSection}>
          <h1 className={styles.founderHeading}>
            I'm <span className={styles.founderName}>Surendra</span>
          </h1>
          <h2 className={styles.founderSubtitle}>Founder, Let's Speak</h2>
          <p className={styles.founderText}>
            A Life Skills Coach and Communication Trainer who believes that
            learning Any language is not just about language, but about building
            confidence to speak in real-life situations
          </p>

          <div className={styles.founderText}>
            <p>His training approach integrates:</p>
            <ul>
              <li>Communication Skills</li>
              <li>Public Speaking</li>
              <li>Personality Development</li>
              <li>Social & Business Etiquette</li>
              <li>Habit Building Techniques</li>
              <li>Self Discipline</li>
              <li>Soft skills… Besides languages</li>
            </ul>
          </div>
          <p className={styles.founderText}>
            Through structured learning stages and dedicated practice clubs, he
            helps learners develop clarity, fluency, and confidence in both
            personal and professional communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
