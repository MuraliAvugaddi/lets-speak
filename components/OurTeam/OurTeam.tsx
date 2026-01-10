// OurTeam.tsx
"use client";

import { useState, useEffect } from "react";
import styles from "./OurTeam.module.css";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

export const TEAM: TeamMember[] = [
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
    name: "Surendhra",
    role: "English Trainer",
    image: "/staff/suredhra sir 1.png",
    linkedin: "#",
  },
];


export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Determine number of cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth <= 600) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 900) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const maxIndex = TEAM.length - cardsToShow;

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Our <span className={styles.red}>Team</span>
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
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div className={styles.cardsContainer}>
          <div
            className={styles.cardsWrapper}
            style={{
              transform: `translateX(calc(-${currentIndex} * (100% / ${cardsToShow} + ${
                cardsToShow === 1 ? "16px" : cardsToShow === 2 ? "10px" : "9.33px"
              })))`,
            }}
          >
            {TEAM.map((member, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.diagonalRed}></div>
                  <div className={styles.diagonalBlue}></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.avatar}
                  />
                </div>

                <div className={styles.cardBody}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedin}
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.navButton}
          onClick={handleNext}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className={styles.dots}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${
              i === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}