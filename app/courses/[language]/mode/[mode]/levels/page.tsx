import LevelsListingClient from "./LevelsListingClient";
import { Metadata } from "next";

// Define the type for Next.js 15+ Async Params
type Props = {
  params: Promise<{ language: string; mode: string }>;
};

const languageNames: Record<string, string> = {
  english: "English",
  hindi: "Hindi",
};

const modeNames: Record<string, string> = {
  offline: "Offline Classroom",
  online: "Online Live Classes",
  "one-to-one": "One-to-One Tutoring",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // CRITICAL: Await the params to resolve language and mode values
  const { language, mode } = await params;
  
  const langKey = language.toLowerCase();
  const modeKey = mode.toLowerCase();

  const langLabel = languageNames[langKey] ?? language;
  const modeLabel = modeNames[modeKey] ?? mode;

  return {
    title: `${langLabel} ${modeLabel} — Learning Levels | Let's Speak Global`,
    description: `Explore all 7 learning stages for the ${langLabel} ${modeLabel} program — from Foundation to Mastery. Each stage includes a 30-day planner, expert faculty, and structured modules.`,
    alternates: {
      canonical: `/courses/${langKey}/mode/${modeKey}/levels`,
    },
  };
}

export default function LevelsPage() {
  return <LevelsListingClient />;
}