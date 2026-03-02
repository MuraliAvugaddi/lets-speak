// URL: /courses/[language]/mode/[mode]
import SelectionPageClient from "./SelectionClient";

const languageNames: Record<string, string> = {
  english: "English",
  hindi: "Hindi",
};

const modeNames: Record<string, string> = {
  offline: "Offline Classroom",
  online: "Online Live Classes",
  "one-to-one": "One-to-One Tutoring",
};

const modeDescriptions: Record<string, string> = {
  offline:
    "Learn in a structured classroom environment with expert faculty, collaborative peers, and a proven 7-stage curriculum.",
  online:
    "Attend live online classes from anywhere with real-time faculty interaction and a comprehensive 7-stage learning path.",
  "one-to-one":
    "Get personalized attention with dedicated one-to-one tutoring sessions tailored to your pace and learning goals.",
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
    title: `${langLabel} ${modeLabel} | Let's Speak Global`,
    description: `${modeDescriptions[mode] ?? `Explore ${langLabel} ${modeLabel} learning options.`} Choose between structured Levels or community-driven Clubs.`,
  };
}

export default function SelectionPage() {
  return <SelectionPageClient />;
}
