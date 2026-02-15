"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./clubs.module.css";
import { courses } from "@/data/courses";
import UpcomingBatch from "@/components/UpcomingBatch/UpcomingBatch";
import FAQ from "@/components/FAQ/FAQ";
import Image from "next/image";

export default function ClubDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [openDay, setOpenDay] = useState<number | null>(null);

  const language = params?.language as keyof typeof courses;
  const mode = params?.mode as string;
  const club = params?.club as string;

  const courseData = courses[language];

  if (!courseData) {
    return <div className={styles.errorContainer}>Course not found</div>;
  }

  const selectedMode = courseData.modes.find((m) => m.id === mode);

  if (!selectedMode) {
    return <div className={styles.errorContainer}>Mode not found</div>;
  }

  // Use clubs if available, otherwise fallback to stages
  const clubs = (selectedMode as any).clubs || selectedMode.stages;
  const clubData = clubs.find((c: any) => c.id === club);

  if (!clubData) {
    return <div className={styles.errorContainer}>Club not found</div>;
  }

  // Smart planner selection: Use club's planner if available, 
  // otherwise use the corresponding stage's planner
  const getPlanner = () => {
    // If club has its own planner, use it
    if (clubData.planner && clubData.planner.length > 0) {
      return clubData.planner;
    }

    // Otherwise, find the corresponding stage by extracting the number
    // club-1 -> stage-1, club-2 -> stage-2, etc.
    const clubNumber = club.match(/\d+/)?.[0];
    if (clubNumber) {
      const correspondingStage = selectedMode.stages.find(
        (stage: any) => stage.id === `stage-${clubNumber}`
      );
      if (correspondingStage) {
        return correspondingStage.planner;
      }
    }

    // Fallback to first stage's planner if no match found
    return selectedMode.stages[0]?.planner || [];
  };

  const planner = getPlanner();

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  const handleFacultyClick = () => {
    if (clubData.faculty_name) {
      router.push(
        `/faculty/${clubData.faculty_name.toLowerCase().replace(/\s+/g, "-")}`
      );
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <main>
        <section className={styles.stageHeader}>
          <h1 className={styles.stageTitle}>{clubData.title}</h1>
          <p className={styles.stageSubtitle}>
            Duration: {clubData.duration} — {selectedMode.description}
          </p>
        </section>

        {/* Faculty Section */}
        {clubData.faculty_name && clubData.faculty_img_url && (
          <section className={styles.facultySection}>
            <div className={styles.facultyContainer}>
              <div className={styles.facultyCard}>
                <div className={styles.facultyContent}>
                  <div className={styles.facultyImageWrapper}>
                    <div className={styles.facultyImageBorder}>
                      <Image
                        src={clubData.faculty_img_url}
                        alt={clubData.faculty_name}
                        width={180}
                        height={180}
                        className={styles.facultyImage}
                      />
                    </div>
                    <div className={styles.facultyBadge}>Expert Instructor</div>
                  </div>
                  <div className={styles.facultyInfo}>
                    <div className={styles.facultyHeader}>
                      <h3 className={styles.facultyName}>
                        {clubData.faculty_name}
                      </h3>
                      <p className={styles.facultyTitle}>Club Facilitator</p>
                    </div>
                    <p className={styles.facultyDescription}>
                      Your guide through this learning journey with years of
                      experience in language education and a proven track record
                      of student success.
                    </p>
                    <button
                      className={styles.facultyButton}
                      onClick={handleFacultyClick}
                    >
                      View Faculty Profile
                      <svg
                        className={styles.buttonIcon}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className={styles.plannerSection}>
          <div className={styles.plannerContainer}>
            <h2 className={styles.plannerHeading}>30-Day Learning Journey</h2>
            <p className={styles.plannerDesc}>
              Click on any day to view detailed learning objectives and syllabus
            </p>

            <div className={styles.accordionWrapper}>
              {planner.map((item: any) => (
                <div
                  key={`day-${item.day}`}
                  className={`${styles.accordionItem} ${openDay === item.day ? styles.accordionItemActive : ""}`}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleDay(item.day)}
                    aria-expanded={openDay === item.day}
                  >
                    <div className={styles.accordionHeaderContent}>
                      <div className={styles.dayBadge}>Day {item.day}</div>
                      <h3 className={styles.accordionTitle}>{item.title}</h3>
                    </div>
                    <div
                      className={`${styles.accordionIcon} ${openDay === item.day ? styles.accordionIconOpen : ""}`}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`${styles.accordionContent} ${openDay === item.day ? styles.accordionContentOpen : ""}`}
                  >
                    <div className={styles.accordionInner}>
                      <div className={styles.syllabusGrid}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.blocksSection}>
          <div className={styles.blocksContainer}>
            <h2 className={styles.blocksHeading}>Practice Includes</h2>
            <p className={styles.blocksDesc}>
              Comprehensive practice modules designed for complete mastery
            </p>
            <div className={styles.blocksGrid}>
              {clubData.blocks.map((block: any, index: number) => (
                <div key={block.id} className={styles.contentBlock}>
                  <div className={styles.blockNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className={styles.blockTitle}>{block.title}</h3>
                  <p className={styles.blockDescription}>{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UpcomingBatch />
        <FAQ />
      </main>
    </div>
  );
}