import CourseStagePageClient from "./CourseStagePageClient";

export async function generateMetadata({ params }: { params: { language: string; mode: string; level: string } }) {
  const { language, mode, level } = params;

  return {
    title: `${language} ${level} (${mode})`,
    description: `${level} level ${language} course in ${mode} mode with structured roadmap.`,
  };
}

export default function CourseStagePage() {
  return <CourseStagePageClient />;
}