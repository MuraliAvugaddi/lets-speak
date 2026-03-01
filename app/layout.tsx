import type { Metadata } from "next";
import Navbar from "@/components/NavBar/NavBar";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.letsspeakglobal.com/"),

  title: {
    default: "Let's Speak | Spoken English & Hindi",
    template: "%s | YourBrand",
  },

  description:
    "Learn English & Hindi through structured courses, clubs, and expert faculty. Beginner to advanced levels available.",

  keywords: [
    "English Language Course",
    "learn English",
    "online spoken english classes",
    "spoken english course",
    "strucutred english course",
    "Hindi Language Course",
    "learn Hindi",
    "online spoken hindi classes",
    "spoken hindi course",
    "strucutred hindi course",
  ],

  authors: [{ name: "Let's Speak" }],

  creator: "Let's Speak",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.letsspeakglobal.com/",
    siteName: "Let's Speak",
    title: "Let's Speak | Learn English & Hindi",
    description:
      "Structured English & Hindi courses with clubs and faculty guidance.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Let's Speak",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Let's Speak | Learn Programming",
    description:
      "Structured language courses with clubs and faculty guidance.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
