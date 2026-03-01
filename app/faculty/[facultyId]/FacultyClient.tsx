"use client";
import { useParams } from "next/navigation";

const FacultyClient = () => {
  const params = useParams();
  const { facultyId } = params;

  return (
    <div>
      <h1>Faculty: {facultyId}</h1>
      <p>This is the dynamic faculty page for ID: {facultyId}</p>
    </div>
  );
};

export default FacultyClient;
