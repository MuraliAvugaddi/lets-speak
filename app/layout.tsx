import type { Metadata } from "next";
import Navbar from "@/components/NavBar/NavBar";
import { Poppins } from "next/font/google";
import './global.css';

export const metadata: Metadata = {
  title: "Lets Speak - Learn Languages with Ease",
  description: "Learn English and Hindi languages with Lets Speak. Explore our courses, B2B solutions, and more.",
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
      </body>
    </html>
  );
}
