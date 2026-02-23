import Link from "next/link";
import styles from "./CoursesSection.module.css";

const courses = [
  {
    language: "English Language Course",
    subtitle: "Stage-Based Communication Training",
    bullets: [
      "Beginner to Advanced Levels",
      "Real-Life Speaking Practice",
      "Grammar Made Simple",
      "Personality & Soft Skills Development",
      "Public Speaking & Communication Skills",
      "Life & Business Skills Integration",
      "Online, Offline & 1-on-1 Learning"
    ],
    rating: 4.6,
    reviews: 4.6,
    level: 7,
    link: "/courses/english",
  },
  {
    language: "Hindi Language Course",
    subtitle: "Structured Communication Training",
    bullets: [
      "Beginner-friendly stages",
      "Practical Speaking Approach",
      "Everyday Conversation Practice",
      "Personality & Soft Skills Development",
      "Public Speaking & Communication Skills",
      "Life & Business Skills Integration",
      "Online, Offline & 1-on-1 Learning"
    ],
    rating: 4.5,
    reviews: 4.5,
    level: 7,
    link: "/courses/hindi",
  },
  {
    language: "New Languages Coming Soon",
    subtitle: "Expanding Your Global Language Programs & Prepare for International Opportunities",
    bullets: [
      "IELTS Coaching",
      "Foreign Language Training",
      "Global Communication Skills",
      "Flexible Learning Modes",
      "Beginner to Advanced Levels"
    ],
    rating: 4.7,
    reviews: 4.7,
    level: 7,
    link: "/coming-soon",
  },
];

export default function CoursesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h1>Choose Your Learning Path</h1>
        <p>
          Personalized, stage-based programs designed to help you speak with
          clarity and confidence.
        </p>
      </div>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
            {/* Header */}
            <div className={styles.header}>
              <h3>{course.language}</h3>
              <p>{course.subtitle}</p>
            </div>

            {/* Content (bullet points with colored dots) */}
            <div className={styles.cardBody}>
              <ul className={styles.bulletList}>
                {course.bullets.map((b, i) => {
                  const colors = [
                    styles.blue,
                    styles.teal,
                    styles.green,
                    styles.purple,
                  ];
                  return (
                    <li key={i} className={styles.bulletItem}>
                      <span
                        className={`${styles.bulletDot} ${colors[i % 4]}`}
                      ></span>
                      <span className={styles.bulletText}>{b}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Footer - always at bottom */}
            <div className={styles.cardFooter}> 
              <Link href={course.link} className={styles.button}>
                <span>Explore More</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7 4L12 9L7 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}