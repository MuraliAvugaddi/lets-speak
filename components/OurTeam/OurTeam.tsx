// OurTeam.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./OurTeam.module.css";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "Surendhra",
    role: "English Trainer",
    image: "/staff/suredhra sir 1.png",
    linkedin: "#",
  },
  {
    name: "Sireesha",
    role: "English Trainer",
    image: "/staff/0.2.Sireesha mam 1.png",
    linkedin: "#",
  },
  {
    name: "Poornima",
    role: "English Trainer",
    image: "/staff/0.3.Poornima garu1 1.png",
    linkedin: "#",
  },
  {
    name: "Mourya",
    role: "English Trainer",
    image: "/staff/0.5.Mourya mam 1.png",
    linkedin: "#",
  },
  {
    name: "Gayatri",
    role: "English Trainer",
    image: "/staff/Gayatri mam 1.png",
    linkedin: "#",
  },
  {
    name: "Gopal",
    role: "English Trainer",
    image: "/staff/gopal mam 1.png",
    linkedin: "#",
  },
  {
    name: "Jyothi",
    role: "English Trainer",
    image: "/staff/jyothi mam 1.png",
    linkedin: "#",
  },
  {
    name: "Laxman",
    role: "English Trainer",
    image: "/staff/laxman sir 1.png",
    linkedin: "#",
  },
  {
    name: "Padmavathi",
    role: "English Trainer",
    image: "/staff/padmavathi mam 1.png",
    linkedin: "#",
  },
  {
    name: "Pavani",
    role: "English Trainer",
    image: "/staff/pavani mam 1.png",
    linkedin: "#",
  },
  {
    name: "Raju",
    role: "English Trainer",
    image: "/staff/raju sir 1.png",
    linkedin: "#",
  },
  {
    name: "Revathi",
    role: "English Trainer",
    image: "/staff/revathi mam 1.png",
    linkedin: "#",
  },
  {
    name: "Sripathi",
    role: "English Trainer",
    image: "/staff/sripathi sir 1.png",
    linkedin: "#",
  },
  {
    name: "Hyma",
    role: "English Trainer",
    image: "/staff/hyma.png",
    linkedin: "#",
  },
  {
    name: "Santhosh",
    role: "English Trainer",
    image: "/staff/santhosh.png",
    linkedin: "#",
  },
];

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Determine number of cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, TEAM.length - cardsToShow);

  // Auto-scroll
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= maxIndex) return 0;
          return prev + 1;
        });
      }, 5000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [maxIndex]);

  const resetAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 5000);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetAutoScroll();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    resetAutoScroll();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    resetAutoScroll();
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
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Calculate gap based on cards to show
  const getGap = () => {
    if (cardsToShow === 1) return 0;
    if (cardsToShow === 2) return 20;
    return 24;
  };

  const gap = getGap();
  const cardWidth = `calc((100% - ${gap * (cardsToShow - 1)}px) / ${cardsToShow})`;
  const offset = currentIndex * (100 / cardsToShow + (gap * currentIndex) / (cardsToShow * 10));

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Our <span className={styles.highlight}>Team</span>
        </h2>
        <p className={styles.description}>
          Our team is driven by a passion for empowering learners worldwide. We
          combine innovative methods with personalized attention to help every
          student succeed. Together, we are redefining the future of English
          education.
        </p>
      </div>

      {/* Cards Container with Navigation */}
      <div className={styles.carouselWrapper}>
        <button
          className={styles.navButton}
          onClick={handlePrev}
          aria-label="Previous team member"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div 
          className={styles.cardsContainer}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={styles.cardsTrack}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow + gap / 10)}%)`,
              gap: `${gap}px`,
            }}
          >
            {TEAM.map((member, idx) => (
              <div 
                key={idx} 
                className={styles.card}
                style={{
                  minWidth: cardWidth,
                  maxWidth: cardWidth,
                }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.diagonalRed}></div>
                  <div className={styles.diagonalBlue}></div>
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className={styles.avatar}
                    loading="lazy"
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next team member"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.pagination}>
        <div className={styles.dots}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${
                i === currentIndex ? styles.active : ""
              }`}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
        <div className={styles.counter}>
          {currentIndex + 1} / {maxIndex + 1}
        </div>
      </div>
    </section>
  );
}