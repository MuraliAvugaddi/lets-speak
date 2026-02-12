import Link from "next/link";
import styles from "./CoursesSection.module.css";

const courses = [
  {
    language: "English Language Course",
    subtitle: "Stage-Based Spoken English Mastery",
    bullets: [
      "Beginner to Advanced Levels",
      "Focus on Speaking & Communication",
      "Real-Life Practice Activities",
      "Online | Offline | One-on-One Options",
    ],
    rating: 4.6,
    reviews: 4.6,
    level: 7,
    link: "/courses/english",
  },
  {
    language: "Hindi Language Course",
    subtitle: "Stage-Based Spoken Hindi Mastery",
    bullets: [
      "Beginner-friendly stages",
      "Speaking-focused approach",
      "Daily & Professional Usage",
      "Online | Offline | One-on-One Options",
    ],
    rating: 4.5,
    reviews: 4.5,
    level: 7,
    link: "/courses/hindi",
  },
  {
    language: "More Courses Coming Soon",
    subtitle: "Expanding Your Growth Opportunities",
    bullets: [
      "New language courses",
      "Communication & Life Skills Training",
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
        <h1>Explore Our Programs</h1>
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
              {/* Rating */}
              <div className={styles.rating}>
                {"★".repeat(Math.floor(course.rating))}
                {"☆".repeat(5 - Math.floor(course.rating))}
                <span>({course.reviews})</span>
              </div>

              <button className={styles.button}>
                <Link href={course.link} className={styles.linkWithIcon}>
                  View Details
                  <span
                    className={styles.icon}
                    aria-hidden="true"
                    style={{
                      display: "inline-flex",
                      verticalAlign: "middle",
                      marginLeft: 6,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4L12 9L7 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
