"use client";

import UpcomingBatch from "@/components/UpcomingBatch/UpcomingBatch";
import AboutHighlights from "@/components/AboutHighlights/AboutHighlights";
import LearnSection from "@/components/WhatULearn/WhatULearn";
import OurTeam from "@/components/OurTeam/OurTeam";
import WhatWillYouLearn from "@/components/WhatYouWillLearn/WhatYouWillLearn";

import styles from "./styles.module.css";
import FAQ from "@/components/FAQ/FAQ";
const stages = [
  {
    name: "Foundation",
    duration: "1 month course",
    features: [
      "Personal trainers available",
      "Lifetime assistance",
      "No qualification barrier",
      "No age limit",
      "7 time slots",
      "Club Available",
      "You can attend at any time and from anywhere in the world",
    ],
  },
  {
    name: "Basics",
    duration: "1 month course",
    features: [
      "Personal trainers available",
      "Lifetime assistance",
      "No qualification barrier",
      "No age limit",
      "7 time slots",
      "Club Available",
      "You can attend at any time and from anywhere in the world",
    ],
  },
  {
    name: "Structure",
    duration: "1 month course",
    features: [
      "Personal trainers available",
      "Lifetime assistance",
      "No qualification barrier",
      "No age limit",
      "7 time slots",
      "Club Available",
      "You can attend at any time and from anywhere in the world",
    ],
  },
  {
    name: "Expression",
    duration: "1 month course",
    features: [
      "Personal trainers available",
      "Lifetime assistance",
      "No qualification barrier",
      "No age limit",
      "7 time slots",
      "Club Available",
      "You can attend at any time and from anywhere in the world",
    ],
  },
  {
    name: "Confidence",
    duration: "1 month course",
    features: [
      "Personal trainers available",
      "Lifetime assistance",
      "No qualification barrier",
      "No age limit",
      "7 time slots",
      "Club Available",
      "You can attend at any time and from anywhere in the world",
    ],
  },
  {
    name: "Fluency",
    duration: "1 month course",
    features: [
      "Personal trainers available",
      "Lifetime assistance",
      "No qualification barrier",
      "No age limit",
      "7 time slots",
      "Club Available",
      "You can attend at any time and from anywhere in the world",
    ],
  },
  {
    name: "Mastery",
    duration: "1 month course",
    features: [
      "Personal trainers available",
      "Lifetime assistance",
      "No qualification barrier",
      "No age limit",
      "7 time slots",
      "Club Available",
      "You can attend at any time and from anywhere in the world",
    ],
  },
];

const courses = [
  {
    language: "Telugu to English",
    subtitle: "Spoken English",
    description:
      "Learn American and British pronunciation rules, intonation patterns, and common challenges through interactive modules and expert feedback. Master clear communication.",
    rating: 4.6,
    reviews: 1248,
    level: 7,
  },
  {
    language: "Telugu to Hindi",
    subtitle: "Spoken English",
    description:
      "Improve fluency from Hindi to English with practical speaking exercises, daily conversations, and personalized trainer feedback.",
    rating: 4.5,
    reviews: 986,
    level: 7,
  },
  {
    language: "Club",
    subtitle: "Communication",
    description:
      "Master English speaking from Telugu with structured lessons, pronunciation drills, and real-life conversation practice.",
    rating: 4.7,
    reviews: 1432,
    level: 7,
  },
];

const page = () => {
  return (
    <div className={styles.englishPage}>
      <section className={styles.englishHero}>
        <div className={styles.englishLeft}>
          {/* Eyebrow text */}
          <p className={styles.englishEyebrow}>
            Learn Hindi Through Mother Tongue Language
          </p>

          {/* Main Heading */}
          <h1 className={styles.englishHeading}>
            Learn{" "}
            <span className={styles.englishWinningWrapper}>
              <span className={styles.englishWinning}>Hindi</span>
              <svg
                className={styles.englishCircle}
                viewBox="-2 10 260 90"
                xmlns="http://www.w3.org/2000/svg"
                // Removed inline width/height to let CSS control it
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M 20 55 Q 25 22, 70 18 Q 115 15, 160 18 Q 205 22, 235 42 Q 242 52, 238 62 Q 232 75, 190 82 Q 145 88, 95 87 Q 50 85, 22 70 Q 15 62, 18 55 Q 19 52, 20 55 Z"
                  fill="none"
                  stroke="#d61f26"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.englishCirclePath}
                />
              </svg>
            </span>
            <br />
            in Telugu
            <br /> Easily With
            <br />
            Let's Speak
          </h1>

          {/* Description */}
          <p className={styles.englishDescription}>
            Learn Hindi through Onilne & Offline | Grammar + Spoken Hindi
            <br />
            Course | 1 to 1 Personal Training
          </p>

          {/* CTA Buttons */}
          <div className={styles.englishActions}>
          <a
            href="https://wa.me/919959751194"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.englishWhatsappBtn}
          >
            WhatsApp Now
          </a>

          <a
            href="https://wa.me/919959751194"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.englishCourseBtn}
          >
            Get Course Details
          </a>
        </div>
        </div>

        <div className={styles.englishRight}>
          <div className={styles.englishImageContainer}>
            {/* Ensure your image path is correct */}
            <img
              src="/hero-india.png"
              alt="Student learning online"
              className={styles.englishFloating}
            />
          </div>
        </div>
      </section>
      <section className={styles.english_section}>
        <div className={styles.english_container}>
          {/* Header */}
          <h2 className={styles.english_heading}>
            Our <span className={styles.english_highlight}>Courses</span>
          </h2>

          {/* Courses Grid */}
          <div className={styles.english_coursesGrid}>
            {stages.map((stage, index) => (
              <div key={index} className={styles.english_courseCard}>
                {/* Card Header */}
                <div className={styles.english_cardHeader}>
                  <h3 className={styles.english_stageName}>{stage.name}</h3>
                </div>

                {/* Card Body */}
                <div className={styles.english_cardBody}>
                  <div className={styles.english_duration}>
                    <svg
                      className={styles.english_clockIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path
                        d="M12 6v6l4 2"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span>{stage.duration}</span>
                  </div>

                  <ul className={styles.english_featuresList}>
                    {stage.features.map((feature, idx) => (
                      <li key={idx} className={styles.english_featureItem}>
                        <svg
                          className={styles.english_checkIcon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className={styles.english_cardFooter}>
                  <a
                    href="https://wa.me/919959751194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.english_enrollButton}
                  >
                    Enroll Now
                    <svg
                      className={styles.english_arrowIcon}
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.simpleSection}>
        <div className={styles.simpleContainer}>
          {/* Header */}
          <h2 className={styles.simpleHeading}>
            Why Choose <span className={styles.simpleHighlightRed}>Let's</span>{" "}
            <span className={styles.simpleHighlightBlue}>Speak</span>?
          </h2>

          {/* Cards Grid */}
          <div className={styles.simpleGrid}>
            {/* Card 1: WhatsApp Classes */}
            <div className={`${styles.simpleCard} ${styles.simpleCardRed}`}>
              <div className={styles.simpleIconWrapper}>
                <svg
                  className={styles.simpleIcon}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className={styles.simpleCardTitle}>Online & Offline Classes</h3>
              <ul className={styles.simpleList}>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Text & on call training.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Jam session & storytelling activities.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Speaking room training.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Multiple assignments.</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Flexible Timings */}
            <div className={`${styles.simpleCard} ${styles.simpleCardBlue}`}>
              <div className={styles.simpleIconWrapper}>
                <svg
                  className={styles.simpleIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className={styles.simpleCardTitle}>Flexible Timings</h3>
              <ul className={styles.simpleList}>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>24*7 personal trainer assistance.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Can learn in your free time.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Can learn from anywhere.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>New batch every month.</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Other Benefits */}
            <div className={`${styles.simpleCard} ${styles.simpleCardRed}`}>
              <div className={styles.simpleIconWrapper}>
                <svg
                  className={styles.simpleIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17l10 5 10-5M2 12l10 5 10-5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.simpleCardTitle}>Other Benefits</h3>
              <ul className={styles.simpleList}>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Spoken Hindi & Grammar expertise.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Friendly & communicative.</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1 on 1 Training</span>
                </li>
                <li className={styles.simpleListItem}>
                  <svg
                    className={styles.simpleCheckIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Motivation & mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <WhatWillYouLearn language="hi"/>
      <UpcomingBatch />
      <AboutHighlights />
      <LearnSection />
      <OurTeam />
      <FAQ />
    </div>
  );
};

export default page;
