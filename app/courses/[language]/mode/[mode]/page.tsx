import SelectionPageClient from "./SelectionClient";

export async function generateMetadata({ params }: { params: { language: string; mode: string } }) {
  const { language, mode } = params;

  return {
    title: `${language} ${mode} Course`,
    description: `Enroll in ${language} ${mode} learning program with guided levels and clubs.`,
  };
}

export default function SelectionPage() {
  return <SelectionPageClient />;
}