import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://letsspeakglobal.com";

  // Example dynamic data
  const languages = ["english", "hindi"];
  const modes = ["online", "offline"];
  const levels = ["beginner", "intermediate", "advanced"];

  const courseUrls = languages.flatMap((language) =>
    modes.flatMap((mode) =>
      levels.map((level) => ({
        url: `${baseUrl}/courses/${language}/mode/${mode}/levels/${level}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ),
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/club`,
      lastModified: new Date(),
    },
    ...courseUrls,
  ];
}
