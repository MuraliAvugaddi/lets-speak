// app/courses/[language]/mode/[mode]/clubs/[club]/page.tsx
import ClubDetailPageClient from "./ClubDetailPageClient";
import { Metadata } from "next";
import { courses } from "@/data/courses";

type Props = {
  params: Promise<{ language: string; mode: string; club: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { language, mode, club } = await params;
  
  // Optional: Check if the data actually exists to avoid generic metadata on 404s
  const course = courses[language as keyof typeof courses];
  if (!course) return { title: "Course Not Found" };

  const displayLang = language.charAt(0).toUpperCase() + language.slice(1);
  const displayMode = mode.charAt(0).toUpperCase() + mode.slice(1);
  const displayClub = club.replace("-", " ").toUpperCase();

  return {
    title: `${displayLang} ${displayClub} | ${displayMode} Learning`,
    description: `Join the ${displayLang} ${displayClub} at Let's Speak Global. Experience ${displayMode} learning with expert faculty.`,
    alternates: {
      canonical: `/courses/${language}/mode/${mode}/clubs/${club}`,
    },
  };
}

export default function Page() {
  return <ClubDetailPageClient />;
} 