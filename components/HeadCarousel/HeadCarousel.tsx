"use client";
import { useState, useEffect, useCallback } from "react";
import styles from "./HeadCarousel.module.css";

const images = [
  "/carousel/carousel-1.jpeg",
  "/carousel/carousel-2.jpeg",
  "/carousel/carousel-3.jpeg",
  "/carousel/carousel-4.jpeg",
  "/carousel/carousel-5.jpeg",
  "/carousel/carousel-6.jpeg",
];

interface HeadCarouselProps {
  autoPlayInterval?: number;
}

const HeadCarousel: React.FC<HeadCarouselProps> = ({
  autoPlayInterval = 4000,
}) => {
  const [current, setCurrent] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating],
  );

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = useCallback(
    () => goTo((current + 1) % images.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  return (
    <div className={styles.carousel}>
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
        >
          <img src={src} alt={`Slide ${i + 1}`} draggable={false} />
          <div className={styles.overlay} />
        </div>
      ))}

      {/* Arrow buttons */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prev}
        aria-label="Previous slide"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={next}
        aria-label="Next slide"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeadCarousel;
