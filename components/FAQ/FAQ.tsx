// FAQ.tsx
'use client';

import { useState } from "react";
import styles from "./FAQ.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Who can join your English speaking courses?",
    answer:
      "Our courses are designed for everyone from beginners to working professionals. Whether you're a student, homemaker, or someone aiming to improve workplace communication, we offer flexible modules that match your level and goals.",
  },
  {
    question: "Is the course useful for job interviews or career growth?",
    answer:
      "Absolutely! Our courses focus on practical communication skills that are essential for job interviews, presentations, and professional development. We include mock interviews, business communication modules, and confidence-building exercises.",
  },
  {
    question: "Do you offer an online English speaking course in India?",
    answer:
      "Yes, we offer comprehensive online English speaking courses accessible throughout India. Our virtual classes are interactive, scheduled at flexible timings, and designed to provide the same quality as in-person sessions.",
  },
  {
    question: "How do I know my level—beginner, intermediate, or advanced?",
    answer:
      "We provide a free assessment test when you enroll. This test evaluates your speaking, listening, reading, and writing skills to place you in the appropriate level. You can also discuss your goals with our counselors for personalized recommendations.",
  },
  {
    question: "Do you offer grammar-focused classes too?",
    answer:
      "Yes, grammar is an integral part of our curriculum. We offer dedicated grammar modules as well as integrated grammar lessons within our speaking courses to ensure you build a strong foundation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Question?</h2>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${
                  openIndex === index ? styles.active : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`${styles.faqAnswer} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}