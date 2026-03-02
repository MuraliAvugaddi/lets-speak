import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://letsspeakglobal.com";

  const languages = ["english", "hindi"];
  const modes = ["online", "offline", "one-to-one"]; 
  const stages = [
    "stage-1", "stage-2", "stage-3",
    "stage-4", "stage-5", "stage-6", "stage-7",
  ];
  const clubs = ["club-1", "club-2", "club-3", "club-4", "club-5",  "club-6", "club-7"];

  const levelUrls = languages.flatMap((language) =>
    modes.flatMap((mode) =>
      stages.map((stage) => ({
        url: `${baseUrl}/courses/${language}/mode/${mode}/levels/${stage}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }))
    )
  );

  const clubUrls = languages.flatMap((language) =>
    modes.flatMap((mode) =>
      clubs.map((club) => ({
        url: `${baseUrl}/courses/${language}/mode/${mode}/clubs/${club}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }))
    )
  );

  // Mode selection pages
  const modeUrls = languages.flatMap((language) =>
    modes.map((mode) => ({
      url: `${baseUrl}/courses/${language}/mode/${mode}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  // Course landing pages
  const courseUrls = languages.map((language) => ({
    url: `${baseUrl}/courses/${language}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/club`, lastModified: new Date() },
    ...courseUrls,
    ...modeUrls,
    ...levelUrls,
    ...clubUrls,
  ];
}