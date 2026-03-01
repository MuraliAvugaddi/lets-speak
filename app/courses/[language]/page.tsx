import LanguagePageClient from "./LanguageClient";

export async function generateMetadata({
  params,
}: {
  params: { language: string };
}) {
  const { language } = params;

  return {
    title: `${language.toUpperCase()} Course`,
    description: `Learn ${language} from beginner to advanced with structured curriculum and mentorship.`,
  };
}

export default function Page({ params }: { params: { language: string } }) {
  return <LanguagePageClient />;
}
