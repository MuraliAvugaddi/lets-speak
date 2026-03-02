// URL : /courses/[language]/mode/[mode]/clubs
import ClubsListingClient from "./ClubsListingClient"; // rename your current file

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
    title: `${langLabel} ${modeLabel} — Learning Clubs | Let's Speak Global`,
    description: `Join community-driven Learning Clubs for the ${langLabel} ${modeLabel} program. Collaborate, practice, and grow with peers in focused club sessions.`,
  };
}

export default function ClubsPage() {
  return <ClubsListingClient />;
}