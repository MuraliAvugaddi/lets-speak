// WhyChooseUs.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./WhyChooseUs.module.css";

type StatData = {
  target: number;
  suffix: string;
  label: string;
  icon: string | "svg";
};

type MarqueeCard = {
  icon: string;
  text: string;
  link?: string;
};

const STATS: StatData[] = [
  {
    target: 15,
    suffix: "+",
    label: "Years of Excellence",
    icon: "/wcu-sub-1.webp",
  },
  {
    target: 50000,
    suffix: "+",
    label: "Satisfied & Empowered",
    icon: "/wcu-sub-2.png",
  },
  {
    target: 7,
    suffix: "~",
    label: "Days Practise Clubs",
    icon: "/wcu-sub-3.webp",
  },
  {
    target: 1000,
    suffix: "+",
    label: "Active Learners Community",
    icon: "svg",
  },
];

const MARQUEE_CARDS = [
  { icon: "/wcu-1.png", text: "Flexible Time Slots", link: "/time-slots" },
  { icon: "/wcu-2.png", text: "Structured Stage-Based Learning" },
  { icon: "/wcu-3.png", text: "Online & Offline Options" },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // ── Intersection Observer for counter ──────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) setIsVisible(true);
        });
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [isVisible]);

  // ── Counter animation ──────────────────────────────────────────
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCounts(
        STATS.map((stat) => {
          const eased = 1 - Math.pow(1 - progress, 3);
          return Math.round(stat.target * eased);
        }),
      );
      if (frame === totalFrames) {
        clearInterval(counter);
        setCounts(STATS.map((s) => s.target));
      }
    }, frameRate);
    return () => clearInterval(counter);
  }, [isVisible]);

  // ── Auto-advance carousel ──────────────────────────────────────
  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % MARQUEE_CARDS.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  // Scroll the carousel track when activeSlide changes
  useEffect(() => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: activeSlide * cardWidth,
      behavior: "smooth",
    });
  }, [activeSlide]);

  const handleDotClick = (index: number) => {
    // Reset timer on manual navigation
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setActiveSlide(index);
    startAutoPlay();
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    return num.toString();
  };

  return (
    <div className={styles.wrapper}>
      <section ref={sectionRef} className={styles.section}>
        <h2 className={styles.heading}>What Makes Us Different</h2>

        {/* ── Desktop / Tablet: Normal grid cards ── */}
        <div className={styles.cards}>
          <a href="/time-slots" className={styles.card}>
            <div className={styles.icon}>
              <img
                className={styles.iconImage}
                src="/wcu-1.png"
                alt="Flexible Time Slots"
                loading="lazy"
              />
            </div>
            <p className={styles.text}>Flexible Time Slots</p>
          </a>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                className={styles.iconImage}
                src="/wcu-2.png"
                alt="Structured Stage-Based Learning"
                loading="lazy"
              />
            </div>
            <p className={styles.text}>Structured Stage-Based Learning</p>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <img
                className={styles.iconImage}
                src="/wcu-3.png"
                alt="Online & Offline Options"
                loading="lazy"
              />
            </div>
            <p className={styles.text}>Online & Offline Options</p>
          </div>
        </div>

        {/* ── Mobile only: Auto-advancing carousel ── */}
        <div className={styles.carouselOuter}>
          <div className={styles.carouselTrack} ref={carouselRef}>
            {MARQUEE_CARDS.map((item, index) =>
              item.link ? (
                <a key={index} href={item.link} className={styles.carouselCard}>
                  <div className={styles.carouselIcon}>
                    <img src={item.icon} alt={item.text} loading="lazy" />
                  </div>
                  <p className={styles.carouselText}>{item.text}</p>
                </a>
              ) : (
                <div key={index} className={styles.carouselCard}>
                  <div className={styles.carouselIcon}>
                    <img src={item.icon} alt={item.text} loading="lazy" />
                  </div>
                  <p className={styles.carouselText}>{item.text}</p>
                </div>
              ),
            )}
          </div>

          {/* Dot indicators */}
          <div className={styles.carouselDots}>
            {MARQUEE_CARDS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeSlide ? styles.dotActive : ""}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats / Add-ons */}
        <div className={styles.stats}>
          {STATS.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              {stat.icon === "svg" ? (
                <svg
                  aria-hidden="true"
                  className={styles.statIcon}
                  viewBox="0 0 640 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#002768"
                >
                  <path d="M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z" />
                </svg>
              ) : (
                <img
                  className={styles.statIcon}
                  src={stat.icon}
                  alt={stat.label}
                  loading="lazy"
                />
              )}
              <div className={styles.statText}>
                <h3>
                  {formatNumber(counts[index])}
                  {stat.suffix}
                </h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
