import ClubsListingClient from "./ClubsListingClient";
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
  // CRITICAL: Await the params to prevent "undefined" errors
  const { language, mode } = await params;
  
  const langLabel = languageNames[language.toLowerCase()] ?? language;
  const modeLabel = modeNames[mode.toLowerCase()] ?? mode;

  return {
    title: `${langLabel} ${modeLabel} — Learning Clubs`,
    description: `Join community-driven Learning Clubs for the ${langLabel} ${modeLabel} program. Collaborate, practice, and grow with peers in focused club sessions at Let's Speak Global.`,
    alternates: {
      canonical: `/courses/${language}/mode/${mode}/clubs`,
    },
  };
}

export default function ClubsPage() {
  return <ClubsListingClient />;
}