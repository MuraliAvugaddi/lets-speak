"use client";

import { useParams, useRouter } from "next/navigation";
import styles from "./Selection.module.css";
import { courses } from "@/data/courses";
import Image from "next/image";

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
      title: "Learning Stages",
      description: "Structured Learning Stages Progress step-by-step from basic understanding to confident communication.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Stage-Wise Learning Framework",
        "Grammar + Speaking Integration",
        "Real-Life Communication Activities",
        "Personality Development Support ",
        "Continuous Trainer Guidance"
      ],
      route: `/courses/${language}/mode/${mode}/levels`
    },
    {
      id: "clubs",
      title: "Practice Clubs",
      description: "Daily Practice Clubs Each stage includes a dedicated club for guided practice and skill development.",
      icon: (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Stage-Specific Practice Sessions",
        "Confidence Building Exercises",
        "🗣️ Structured Speaking Practice",
        "🕒 Available at 7 Timings Daily",
        "🔓 Join Anytime During the Session",
        "⏱ Practice for Any Duration"
      ],
      route: `/courses/${language}/mode/${mode}/clubs`
    }
  ];

  return (
    <section className={styles.selectionSection}>
      <div className={styles.selectionContainer}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainHeading}>
            How You Progress with Us
          </h1>
          <p className={styles.mainSubheading}>
            {selectedMode.description}
          </p>
        </div>

        {/* Manager Profile Card */}
        <div className={styles.managerCard}>
          <div className={styles.managerImageWrapper}>
            <Image
              src={selectedMode.manager_img}
              alt={selectedMode.manager_name}
              width={120}
              height={120}
              className={styles.managerImage}
            />
            <div className={styles.managerBadge}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className={styles.managerContent}>
            <div className={styles.managerInfo}>
              <h3 className={styles.managerName}>{selectedMode.manager_name}</h3>
              <p className={styles.managerRole}>Course Manager & Expert Trainer</p>
            </div>
            
            <div className={styles.managerDescription}>
              <p>
                Your dedicated course manager who will guide you through {selectedMode.name}. 
                With years of experience in language training, I ensure personalized attention 
                and continuous support throughout your learning journey.
              </p>
            </div>
          </div>
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