"use client";

import { useParams, useRouter } from "next/navigation";
import styles from "./Selection.module.css";
import { courses } from "@/data/courses";

export default function SelectionPage() {
  const params = useParams();
  const router = useRouter();

  const language = params.language as keyof typeof courses;
  const mode = params.mode as string;

  const courseData = courses[language];

  if (!courseData) {
    return <div className={styles.errorContainer}>Language not found</div>;
  }

  const selectedMode = courseData.modes.find((m) => m.id === mode);

  if (!selectedMode) {
    return <div className={styles.errorContainer}>Mode not found</div>;
  }

  const selectionOptions = [
    {
      id: "levels",
      title: "Learning Levels",
      description: "Structured stage-wise progression designed for systematic skill development and mastery.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Stage-wise structured learning",
        "30-day comprehensive curriculum",
        "Progressive skill building",
        "Dedicated faculty guidance"
      ],
      route: `/courses/${language}/mode/${mode}/levels`
    },
    {
      id: "clubs",
      title: "Learning Clubs",
      description: "Specialized club-based learning focusing on specific interests and interactive group activities.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Club-based interactive learning",
        "Community-driven activities",
        "Specialized focus areas",
        "Collaborative practice sessions"
      ],
      route: `/courses/${language}/mode/${mode}/clubs`
    }
  ];

  return (
    <section className={styles.selectionSection}>
      <div className={styles.selectionContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainHeading}>
            Choose Your Learning Path
          </h1>
          <p className={styles.mainSubheading}>
            {selectedMode.description}
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {selectionOptions.map((option) => (
            <div key={option.id} className={styles.selectionCard}>
              <div className={styles.cardIcon}>
                {option.icon}
              </div>
              
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{option.title}</h2>
                <p className={styles.cardDescription}>{option.description}</p>
                
                <ul className={styles.featuresList}>
                  {option.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 6L9 17l-5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={styles.exploreButton}
                onClick={() => router.push(option.route)}
              >
                Explore {option.title}
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}