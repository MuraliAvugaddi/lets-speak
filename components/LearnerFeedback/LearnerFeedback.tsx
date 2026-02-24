'use client';

import React, { useState } from 'react';
import styles from './LearnerFeedback.module.css';

const LearnerFeedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videos = [
    'XSb-8UR-Qhc',
    '-0VtH0Ju37c',
    'FIqNwQIziwY',
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % videos.length;
      visible.push(videos[index]);
    }
    return visible;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our learner's feedback</h1>
      
      <div className={styles.carouselWrapper}>
        <button 
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={handlePrev}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className={styles.videoGrid}>
          {getVisibleVideos().map((videoId, index) => (
            <div key={`${videoId}-${index}`} className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Learner feedback ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.video}
                />
                <div className={styles.verifiedBadge}>
                  <span className={styles.checkmark}>✓</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={handleNext}
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default LearnerFeedback;