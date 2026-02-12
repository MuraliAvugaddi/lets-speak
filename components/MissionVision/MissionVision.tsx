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
              We strive to provide the best platform for people to learn and
              master, both English and Life.
            </p>
          </div>

          {/* Passion Card (Blue) */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.iconWrapper}>
              <FiHeart className={styles.icon} size={24} />
            </div>
            <h3 className={styles.cardTitle}>Passion</h3>
            <p className={styles.cardText}>
              We are on a never-ending pursuit to give the best training and
              learning platform at your comfort!
            </p>
          </div>

          {/* Vision Card (Blue) */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.iconWrapper}>
              <FiEye className={styles.icon} size={24} />
            </div>
            <h3 className={styles.cardTitle}>Vision</h3>
            <p className={styles.cardText}>
              To inspire people to learn something new and help them taste the
              triumph of life with the weapon of English language.
            </p>
          </div>

          {/* Achievement Card (Red) */}
          <div className={`${styles.card} ${styles.cardRed}`}>
            <div className={styles.iconWrapper}>
              <FiAward className={styles.icon} size={24} />
            </div>
            <h3 className={styles.cardTitle}>Achievement</h3>
            <p className={styles.cardText}>
              We have successfully trained more than 200,000 exceptional English
              language speakers around the world.
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
          <h2 className={styles.founderSubtitle}>The Founder of Let's Speak</h2>
          <p className={styles.founderText}>
            Surendra is a dedicated Life Skills Coach and Communication Trainer who believes that real education goes beyond language learning. His approach focuses on building strong communication skills, discipline, civic sense, social responsibility, and healthy life habits.
          </p>
          
          <p className={styles.founderText}>
            With a practical, value-driven training style, he helps learners develop confidence, clarity, and consistency in both personal and professional life. As a founder, he ensures quality training and continuous learner support through structured systems and dedicated teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;