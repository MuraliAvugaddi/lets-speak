'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './levels.module.css';
import { courses } from '@/data/courses';
import UpcomingBatch from '@/components/UpcomingBatch/UpcomingBatch';
import FAQ from '@/components/FAQ/FAQ';
import Image from 'next/image';

export default function CourseStagePage() {
  const params = useParams();
  const router = useRouter();
  const [openDay, setOpenDay] = useState<number | null>(null);

  const language = params?.language as keyof typeof courses;
  const mode = params?.mode as string;
  const level = params?.level as string;

  const courseData = courses[language];

  if (!courseData) {
    return <div className={styles.errorContainer}>Course not found</div>;
  }

  const selectedMode = courseData.modes.find((m) => m.id === mode);

  if (!selectedMode) {
    return <div className={styles.errorContainer}>Mode not found</div>;
  }

  const stageData = selectedMode.stages.find((s) => s.id === level);

  if (!stageData) {
    return <div className={styles.errorContainer}>Stage not found</div>;
  }

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  const handleFacultyClick = () => {
    if (stageData.faculty_name) {
      router.push(`/faculty/${stageData.faculty_name.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <main>
        <section className={styles.stageHeader}>
          <h1 className={styles.stageTitle}>{stageData.title}</h1>
          <p className={styles.stageSubtitle}>
            Duration: {stageData.duration} — {selectedMode.description}
          </p>
        </section>

        {/* Faculty Section */}
        {stageData.faculty_name && stageData.faculty_img_url && (
          <section className={styles.facultySection}>
            <div className={styles.facultyContainer}>
              <div className={styles.facultyCard}>
                <div className={styles.facultyContent}>
                  <div className={styles.facultyImageWrapper}>
                    <div className={styles.facultyImageBorder}>
                      <Image
                        src={stageData.faculty_img_url}
                        alt={stageData.faculty_name}
                        width={180}
                        height={180}
                        className={styles.facultyImage}
                      />
                    </div>
                    <div className={styles.facultyBadge}>Expert Instructor</div>
                  </div>
                  <div className={styles.facultyInfo}>
                    <div className={styles.facultyHeader}>
                      <h3 className={styles.facultyName}>{stageData.faculty_name}</h3>
                      <p className={styles.facultyTitle}>Lead Faculty</p>
                    </div>
                    <p className={styles.facultyDescription}>
                      Your guide through this learning journey with years of experience in language education and a proven track record of student success.
                    </p>
                    <button 
                      className={styles.facultyButton}
                      onClick={handleFacultyClick}
                    >
                      View Faculty Profile
                      <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              {stageData.planner.map((item) => (
                <div 
                  key={`day-${item.day}`} 
                  className={`${styles.accordionItem} ${openDay === item.day ? styles.accordionItemActive : ''}`}
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
                    <div className={`${styles.accordionIcon} ${openDay === item.day ? styles.accordionIconOpen : ''}`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`${styles.accordionContent} ${openDay === item.day ? styles.accordionContentOpen : ''}`}>
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
            <h2 className={styles.blocksHeading}>Learning Modules</h2>
            <p className={styles.blocksDesc}>
              Comprehensive curriculum designed for complete mastery
            </p>
            <div className={styles.blocksGrid}>
              {stageData.blocks.map((block, index) => (
                <div key={block.id} className={styles.contentBlock}>
                  <div className={styles.blockNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className={styles.blockTitle}>{block.title}</h3>
                  <p className={styles.blockDescription}>{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <UpcomingBatch/>
        <FAQ/>
      </main>
    </div>
  );
}