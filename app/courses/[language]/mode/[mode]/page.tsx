import SelectionPageClient from "./SelectionClient";
import { Metadata } from "next";

// Define types for Next.js 15+ Async Params
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

const modeDescriptions: Record<string, string> = {
  offline:
    "Learn in a structured classroom environment with expert faculty, collaborative peers, and a proven 7-stage curriculum.",
  online:
    "Attend live online classes from anywhere with real-time faculty interaction and a comprehensive 7-stage learning path.",
  "one-to-one":
    "Get personalized attention with dedicated one-to-one tutoring sessions tailored to your pace and learning goals.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // CRITICAL FIX: Await the params to resolve language and mode
  const { language, mode } = await params;
  
  const langKey = language.toLowerCase();
  const modeKey = mode.toLowerCase();

  const langLabel = languageNames[langKey] ?? language;
  const modeLabel = modeNames[modeKey] ?? mode;
  const description = modeDescriptions[modeKey] ?? `Explore ${langLabel} ${modeLabel} learning options.`;

  return {
    title: `${langLabel} ${modeLabel} | Let's Speak Global`,
    description: `${description} Choose between structured Levels or community-driven Clubs.`,
    alternates: {
      canonical: `/courses/${langKey}/mode/${modeKey}`,
    },
  };
}

export default function SelectionPage() {
  return <SelectionPageClient />;
}