import type { Metadata } from "next";
import Navbar from "@/components/NavBar/NavBar";
import './global.css';

export const metadata: Metadata = {
  title: "Lets Speak - Learn Languages with Ease",
  description: "Learn English and Hindi languages with Lets Speak. Explore our courses, B2B solutions, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
