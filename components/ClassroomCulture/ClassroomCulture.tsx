"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./ClassroomCulture.module.css";

const images = [
  { src: "/cc-1.webp", alt: "Classroom culture moment 1" },
  { src: "/cc-2.webp", alt: "Classroom culture moment 2" },
  { src: "/cc-3.webp", alt: "Classroom culture moment 3" },
  { src: "/cc-4.webp", alt: "Classroom culture moment 4" },
  { src: "/cc-5.webp", alt: "Classroom culture moment 5" },
  { src: "/cc-6.webp", alt: "Classroom culture moment 6" },
  { src: "/cc-7.webp", alt: "Classroom culture moment 7" },
];

const ClassroomCulture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetAutoScroll();
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetAutoScroll();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetAutoScroll();
  };

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    if (!isPaused) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 4000);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Classroom <span className={styles.highlight}>Culture</span>
          </h1>
          <p className={styles.subtitle}>
            Have a look at our rich classroom culture
          </p>
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          {/* Previous Button */}
          <button
            className={`${styles.navButton} ${styles.navButtonPrev}`}
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div
            className={styles.carouselContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div key={index} className={styles.slide}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.slideImage}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className={styles.slideOverlay}>
                    <span className={styles.slideNumber}>
                      {index + 1} / {images.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            className={`${styles.navButton} ${styles.navButtonNext}`}
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.dotActive : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>

        {/* Thumbnail Preview (Desktop only) */}
        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.thumbnail} ${
                index === currentIndex ? styles.thumbnailActive : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image.src}
                alt={`Thumbnail ${index + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassroomCulture;