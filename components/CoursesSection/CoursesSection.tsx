import styles from "./CoursesSection.module.css";

const courses = [
  {
    language: "Telugu to English",
    subtitle: "Spoken English",
    description:
      "Learn American and British pronunciation rules, intonation patterns, and common challenges through interactive modules and expert feedback. Master clear communication.",
    rating: 4.6,
    reviews: 1248,
    level: 6,
  },
  {
    language: "Telugu to Hindi",
    subtitle: "Spoken English",
    description:
      "Improve fluency from Hindi to English with practical speaking exercises, daily conversations, and personalized trainer feedback.",
    rating: 4.5,
    reviews: 986,
    level: 5,
  },
  {
    language: "Club",
    subtitle: "Communication",
    description:
      "Master English speaking from Telugu with structured lessons, pronunciation drills, and real-life conversation practice.",
    rating: 4.7,
    reviews: 1432,
    level: 6,
  },
];

export default function CoursesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.intro}>
        <h1>Our Courses</h1>
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
              <p>({course.subtitle})</p>
            </div>

            {/* Dots */}
            <div className={styles.dots}>
              <span className={styles.blue}></span>
              <span className={styles.teal}></span>
              <span className={styles.green}></span>
              <span className={styles.purple}></span>
            </div>

            {/* Content */}
            <p className={styles.description}>{course.description}</p>

            <div className={styles.bottomContent}>
              {/* Button */}
              <button className={styles.button}>View Details</button>

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
