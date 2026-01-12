import Hero from "@/components/Hero/Hero";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import CoursesSection from "@/components/CoursesSection/CoursesSection";
import UpcomingBatch from "@/components/UpcomingBatch/UpcomingBatch";
import AboutHighlights from "@/components/AboutHighlights/AboutHighlights";
import LearnSection from "@/components/WhatULearn/WhatULearn";
import OurTeam from "@/components/OurTeam/OurTeam";
import FAQ from "@/components/FAQ/FAQ";
import ClassroomCulture from "@/components/ClassroomCulture/ClassroomCulture";

export default function Home() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div id="home"><Hero /></div>
      <div id="why-choose-us"><WhyChooseUs /></div>
      <div id="courses"><CoursesSection /></div>
      <div id="upcoming-batch"><UpcomingBatch /></div>
      <div id="about"><AboutHighlights /></div>
      <div id="classroom-culture"><ClassroomCulture /></div>
      <div id="learn"><LearnSection /></div>
      <div id="our-team"><OurTeam /></div>
      <div id="faq"><FAQ /></div>
    </div>
  );
}