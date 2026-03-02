// URL : /courses/[language]/mode/[mode]/levels 
// page.tsx (new server wrapper)
import LevelsListingClient from "./LevelsListingClient"; // rename your current file

const languageNames: Record<string, string> = {
  english: "English",
  hindi: "Hindi",
};

const modeNames: Record<string, string> = {
  offline: "Offline Classroom",
  online: "Online Live Classes",
  "one-to-one": "One-to-One Tutoring",
};

export async function generateMetadata({
  params,
}: {
  params: { language: string; mode: string };
}) {
  const { language, mode } = params;
  const langLabel = languageNames[language] ?? language;
  const modeLabel = modeNames[mode] ?? mode;

  return {
    title: `${langLabel} ${modeLabel} — Learning Levels | Let's Speak Global`,
    description: `Explore all 7 learning stages for the ${langLabel} ${modeLabel} program — from Foundation to Mastery. Each stage includes a 30-day planner, expert faculty, and structured modules.`,
  };
}

export default function LevelsPage() {
  return <LevelsListingClient />;
}