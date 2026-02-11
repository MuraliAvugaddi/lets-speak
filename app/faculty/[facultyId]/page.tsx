"use client"

import React from "react";
import { useParams } from "next/navigation";

const FacultyPage = () => {
  const params = useParams();
  const { facultyId } = params;

  return (
    <div>
      <h1>Faculty: {facultyId}</h1>
      <p>This is the dynamic faculty page for ID: {facultyId}</p>
    </div>
  );
};

export default FacultyPage;
