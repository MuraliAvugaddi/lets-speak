import { english } from './english';
import { hindi } from './hindi';

export const courses = {
  english,
  hindi,
  //Future languages 
} as const;

export type LanguageId = keyof typeof courses;
export type CourseData = typeof english;