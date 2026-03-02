// URL: /courses/[language]
import LanguagePageClient from "./LanguageClient";

const languageNames: Record<string, string> = {
  english: "English",
  hindi: "Hindi",
};

const languageDescriptions: Record<string, string> = {
  english:
    "Master the English language with structured levels, expert faculty, and flexible learning modes — Offline, Online, and One-to-One.",
  hindi:
    "Master the Hindi language with structured levels, expert faculty, and flexible learning modes — Offline, Online, and One-to-One.",
};

export async function generateMetadata(props: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await props.params;
  const langLabel = languageNames[language] ?? language;

  return {
    title: `${langLabel} Course | Let's Speak Global`,
    description:
      languageDescriptions[language] ??
      `Learn ${langLabel} from Foundation to Mastery with structured curriculum and expert mentorship at Let's Speak Global.`,
  };
}

export default function Page({ params }: { params: { language: string } }) {
  return <LanguagePageClient />;
}
