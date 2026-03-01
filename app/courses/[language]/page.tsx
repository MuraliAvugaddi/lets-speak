import LanguagePageClient from "./LanguageClient";


export async function generateMetadata(props: { params: Promise<{ language: string }> }) {
  const { language } = await props.params;
  return {
    title: `${language.toUpperCase()} Course`,
    description: `Learn ${language} from beginner to advanced with structured curriculum and mentorship.`,
  };
}

export default function Page({ params }: { params: { language: string } }) {
  return <LanguagePageClient />;
}
