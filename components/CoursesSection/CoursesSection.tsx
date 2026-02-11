import Link from "next/link";
import styles from "./CoursesSection.module.css";

const courses = [
  {
    language: "English Language Course",
    subtitle:
      "Stage-based, personalized English training to improve speaking, listening, reading, and writing skills",
    bullets: [
      "Level-based stages (Beginner to Advanced)",
      "Online, Offline & One-on-One sessions",
      "Focus on spoken English & communication",
      "Practical, real-life usage",
    ],
    rating: 4.6,
    reviews: 4.6,
    level: 7,
    link: "/courses/english",
  },
  {
    language: "Hindi Language Course",
    subtitle:
      "Personalized, stage-based Hindi training to build confidence in speaking and understanding.",
    bullets: [
      "Beginner-friendly stages",
      "Speaking-focused approach",
      "Online, Offline & One-on-One options",
      "Useful for daily and professional use",
    ],
    rating: 4.5,
    reviews: 4.5,
    level: 7,
    link: "/courses/hindi",
  },
  {
    language: "More Courses Coming Soon",
    subtitle:
      "We’re expanding our learning programs to help you grow in communication and life skills.",
    bullets: [
      "New language courses",
      "Communication & life skills training",
      "Skill-based programs for all age groups",
      "Skill-based programs for all age groups",
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
        <h1>Choose Your Choice</h1>
        <p>
          Our online English courses are customized according to your level,
          ensuring a progressive learning experience, explore the comprehensive
          curriculum we have prepared.
        </p>
      </div>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
            {/* Header */}
            <div className={styles.header}>
              <h3>{course.language}</h3>
              <p>{course.subtitle} </p>
            </div>

            {/* Content (bullet points with colored dots) */}
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

            <div className={styles.bottomContent}>
              {/* Button */}
              <button className={styles.button}>
                <Link href={course.link}>View Details</Link>
              </button>

              {/* Rating */}
              <div className={styles.rating}>
                {"★".repeat(Math.floor(course.rating))}
                {"☆".repeat(5 - Math.floor(course.rating))}
                <span>({course.reviews})</span>
              </div>

              {/* Level */}
              <p className={styles.level}>Course level {course.level}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
