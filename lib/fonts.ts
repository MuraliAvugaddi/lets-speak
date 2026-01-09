// lib/fonts.ts
import { Outfit } from 'next/font/google';

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-outfit',
});
