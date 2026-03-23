// URL: /about
import styles from "./about.module.css";
import OurTeam from "@/components/OurTeam/OurTeam";
import MissionVision from "@/components/MissionVision/MissionVision";
import HeadCarousel from "@/components/HeadCarousel/HeadCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Let's Speak Global",
  description:
    "Discover our mission to make language learning structured, accessible, and effective. Meet our team of expert mentors dedicated to your fluency journey.",
};

const about = () => {
  return (
    <div className={styles.aboutPage}>
      <HeadCarousel />
      <MissionVision />
      <OurTeam />
    </div>
  );
};

export default about;
