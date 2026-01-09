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

const TEAM: TeamMember[] = [
  {
    name: "Shimna Thasnim",
    role: "Marketing & Growth Strategist",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
  },
  {
    name: "Harshini Priya",
    role: "Product Manager",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
  },
  {
    name: "Rakshith",
    role: "Regional Manager",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
  },
  {
    name: "Prabakaran",
    role: "Operations Manager",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Design",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    linkedin: "#",
  },
];

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 4;
  const totalPages = Math.ceil(TEAM.length / cardsPerView);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleCards = () => {
    const start = currentIndex * cardsPerView;
    return TEAM.slice(start, start + cardsPerView);
  };

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.red}>Our</span>{" "}
          <span className={styles.blue}>Team</span>
        </h2>

        <p className={styles.description}>
          Our team is driven by a passion for empowering learners worldwide. We
          combine innovative methods with personalized attention to help every
          student succeed. Together, we are redefining the future of English
          education.
        </p>
      </div>

      {/* Cards Container with Overflow Hidden */}
      <div className={styles.cardsContainer}>
        <div
          className={styles.cardsWrapper}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className={styles.cardsPage}>
              {TEAM.slice(
                pageIndex * cardsPerView,
                (pageIndex + 1) * cardsPerView
              ).map((member, idx) => (
                <div key={`${member.name}-${idx}`} className={styles.card}>
                  <div className={styles.cardTop}>
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
                      className={styles.linkedin}
                      aria-label="LinkedIn"
                    >
                      <svg viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.4c0-1.76-.03-4.03-2.46-4.03-2.46 0-2.84 1.92-2.84 3.9V24h-4V8z" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className={styles.dots}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${
              i === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
