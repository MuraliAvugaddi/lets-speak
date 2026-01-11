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
    <div style={{ width: 100 + '%' ,display: 'flex', justifyContent: 'center' , alignItems: 'center', flexDirection: 'column'}}>
      <Hero/>
      <WhyChooseUs/>
      <CoursesSection/>
      <UpcomingBatch/>
      <AboutHighlights/>
      <ClassroomCulture/>
      <LearnSection/>
      <OurTeam/>
      <FAQ/>
    </div>
  );
}
