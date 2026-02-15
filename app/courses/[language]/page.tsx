"use client";

import { useState, useRef } from "react";
import styles from "./Language.module.css";
import { courses } from "@/data/courses/index";
import { useParams, useRouter } from "next/navigation";
import UpcomingBatch from "@/components/UpcomingBatch/UpcomingBatch";
import OurTeam from "@/components/OurTeam/OurTeam";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const language = params?.language as keyof typeof courses;
  const courseData = courses[language];

  if (!courseData) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.errorContainer}>
          <h1>Language not found</h1>
          <p>The requested language course is not available.</p>
        </div>
      </div>
    );
  }

  const modeDisplayData = {
    online: {
      icon: "/online-icon.jpg",
    },
    offline: {
      icon: "/offline-icon.jpg",
    },
    "one-to-one": {
      icon: "/personal-icon.jpg",
    },
  };

  const getModeFeatures = (mode: (typeof courseData.modes)[0]) => {
    switch (mode.id) {
      case "online":
        return [
          "Real-time interactive classes",
          "Flexible scheduling options",
          "Recorded Session Access",
          "Daily Practice Support",
          "Soft Skills & Life Skills Integration"
        ];
      case "offline":
        return [
          "Direct faculty mentoring",
          "Live Doubt-Clearing Sessions",
          "Stage-Wise Structured Learning",
          "Daily Speaking Activities",
          "Personality & Communication Development"
        ];
      case "one-to-one":
        return [
          "Dedicated Personal Mentor",
          "Customized Learning Plan",
          "Performance-Based Feedback",
          "Public Speaking Support",
          "Business Communication Skills"
        ];
      default:
        return [];
    }
  };

  const handleExploreClick = (modeId: string) => {
    router.push(`/courses/${courseData.id}/mode/${modeId}`);
  };

  const reviews = [
    {
      name: "Kalyani",
      job: "Circle Inspector",
      text: "The management is very sincere and the classes are very productive and interactive. I truly feel that anybody can learn both the languages here from anywhere in the world",
      image: "/kalyani-reviewer.webp",
    },
    {
      name: "Kayala Surya Reddy",
      job: "Businessman & Politician",
      text: "English language has always been my dream to achieve but due to my hectic schedule I couldn't give time. I came across this institution through my friend and could learn the language so comfortably.",
      image: "/surya-reviewer.webp",
    },
    {
      name: "Padmavathi",
      job: "Home Maker",
      text: "Let's Speak is not just a language coaching center but a hub for personality development. The dedication of our founder, Mr. Surendra Garu whom I consider a god-given brother, and the entire LS team has been truly inspiring.",
      image: "/sahasra-reviewer.webp",
    },
    {
      name: "Chandrahasa",
      job: "Dietician",
      text: "The dedication and commitment of every trainer are exceptional, and I've truly enjoyed every stage of learning here. This institute stands out for its high-quality instruction, excellent training, and welcoming environment.",
      image: "/chandrahasa.webp",
    },
    {
      name: "Parnika",
      job: "Student",
      text: "After attending three free demo classes, I loved the teaching methods and got motivated to join. My short-term goal was to speak English and Hindi fluently, and though people doubted me, I achieved it!",
      image: "/parnika-reviewer.webp",
    },
    {
      name: "Murali",
      job: "Software Engineer",
      text: "The structured curriculum and personalized attention from trainers made a real difference in my communication skills. As a software engineer, clear communication is crucial, and Let's Speak helped me express my ideas confidently in both professional and social settings.",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Kamal",
      job: "Student",
      text: "I was always hesitant to speak Hindi in public, but Let's Speak changed that completely. The trainers created such a supportive environment that I felt comfortable making mistakes and learning from them. Now I can confidently communicate in Hindi in any situation, whether it's casual conversations or formal settings.",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{courseData.name}</h1>
        <p className={styles.heroSubtitle}>{courseData.description}</p>
      </section>

      <section className={styles.courseSection}>
        <div className={styles.courseGrid}>
          {courseData.modes.map((mode) => {
            const displayData =
              modeDisplayData[mode.id as keyof typeof modeDisplayData];
            const features = getModeFeatures(mode);

            return (
              <div key={mode.id} className={styles.courseCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <img src={displayData.icon} alt={`${mode.name} icon`} />
                  </div>
                  <h3 className={styles.courseCardTitle}>{mode.name}</h3>
                  <p className={styles.courseCardDesc}>{mode.description}</p>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.checklistWrapper}>
                    {features.map((feature, index) => (
                      <div key={index} className={styles.checklistItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button
                    className={styles.exploreButton}
                    onClick={() => handleExploreClick(mode.id)}
                  >
                    {`Explore ${
                      mode.name === "Offline Classroom"
                        ? "Offline Training"
                        : mode.name === "Online Live"
                        ? "Online Training"
                        : "1-on-1 Training"
                    } →`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <UpcomingBatch />
      
      <div className={styles.reviewSection}>
        <h2 className={styles.review_heading}>Students Feedback</h2>

        <div className={styles.review_reviewContainer}>
          <div className={styles.review_fadeLeft}></div>
          <div className={styles.review_fadeRight}></div>

          <div
            className={styles.review_reviewScroller}
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`${styles.review_reviewTrack} ${isPaused ? styles.review_paused : ""}`}
            >
              {/* First set of reviews */}
              {reviews.map((r, i) => (
                <div key={`first-${i}`} className={styles.review_reviewCard}>
                  <div className={styles.review_cardHeader}>
                    <img
                      src={r.image}
                      alt={`Photo of ${r.name}`}
                      className={styles.review_reviewPhoto}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.review_cardBody}>
                    <p className={styles.review_reviewText}>"{r.text}"</p>
                  </div>
                  <div className={styles.review_cardFooter}>
                    <div className={styles.review_reviewAuthor}>
                      <p className={styles.review_reviewName}>{r.name}</p>
                      <p className={styles.review_reviewJob}>{r.job}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {reviews.map((r, i) => (
                <div key={`second-${i}`} className={styles.review_reviewCard}>
                  <div className={styles.review_cardHeader}>
                    <img
                      src={r.image}
                      alt={`Photo of ${r.name}`}
                      className={styles.review_reviewPhoto}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.review_cardBody}>
                    <p className={styles.review_reviewText}>"{r.text}"</p>
                  </div>
                  <div className={styles.review_cardFooter}>
                    <div className={styles.review_reviewAuthor}>
                      <p className={styles.review_reviewName}>{r.name}</p>
                      <p className={styles.review_reviewJob}>{r.job}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <OurTeam />
    </div>
  );
}