import FacultyClient from "./FacultyClient";

export async function generateMetadata({
  params,
}: {
  params: { facultyId: string };
}) {
  const { facultyId } = params;

  return {
    title: `Faculty ${facultyId}`,
    description: `Meet ${facultyId}, expert language mentor at Let's Speak.`,
  };
}

export default function FacultyPage() {
  return <FacultyClient />;
}
