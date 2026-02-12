  "use client";

import { useParams, useRouter } from "next/navigation";
import styles from "./Stage.module.css";
import { courses } from "@/data/courses";
import UpcomingBatch from "@/components/UpcomingBatch/UpcomingBatch";
import ClassroomCulture from "@/components/ClassroomCulture/ClassroomCulture";
import LearnerFeedback from "@/components/LearnerFeedback/LearnerFeedback";
import OurTeam from "@/components/OurTeam/OurTeam";
import FAQ from "@/components/FAQ/FAQ";
import MissionVisionSection from "@/components/MissionVision/MissionVision";

export default function LevelsPage() {
  const params = useParams();
  const router = useRouter();

  const language = params.language as keyof typeof courses;
  const mode = params.mode as string;

  const courseData = courses[language];

  if (!courseData) {
    return <div>Language not found</div>;
  }

  const selectedMode = courseData.modes.find((m) => m.id === mode);

  if (!selectedMode) {
    return <div>Mode not found</div>;
  }

  return (
    <section className={styles.english_section}>
      <div className={styles.english_container}>
        <h2 className={styles.english_heading}>
          {selectedMode.name} -{" "}
          <span className={styles.english_highlight}>Levels</span>
        </h2>
        <p style={{ textAlign: "center", marginBottom: "2rem", color: "#666" }}>
          Choose your level and start your learning journey
        </p>

        <div className={styles.english_coursesGrid}>
          {selectedMode.stages.map((stage) => (
            <div key={stage.id} className={styles.english_courseCard}>
              <div className={styles.english_cardHeader}>
                <h3 className={styles.english_stageName}>{stage.title}</h3>
              </div>

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
                  {stage.blocks.slice(0, 4).map((block) => (
                    <li key={block.id} className={styles.english_featureItem}>
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
                      <span>{block.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.english_cardFooter}>
                <button
                  className={styles.english_enrollButton}
                  onClick={() =>
                    router.push(
                      `/courses/${language}/mode/${mode}/levels/${stage.id}`,
                    )
                  }
                >
                  View Level Details
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {mode === "one-to-one" && (
        <>
          <MissionVisionSection />
          <FAQ />
        </>
      )}
      {mode === "offline" && (
        <>
          <UpcomingBatch />
          <ClassroomCulture />
          <LearnerFeedback />
          <OurTeam />
        </>
      )}
      {mode === "online" && (
        <>
          <UpcomingBatch />
          <LearnerFeedback />
          <OurTeam />
        </>
      )}
    </section>
  );
}