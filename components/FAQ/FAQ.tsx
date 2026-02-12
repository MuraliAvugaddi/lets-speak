// FAQ.tsx
"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Is this course only about learning English/Hindi?",
    answer:
      "<strong>No.</strong> Along with language skills, the course focuses on communication skills, soft skills, self-discipline, civic sense, social responsibility, and overall personality development.",
  },
  {
    question: " Who can join this course?",
    answer:
      "Our courses are suitable for school students, college students, working professionals, and anyone who wants to improve communication, confidence, and life skills.",
  },
  {
    question: "What teaching method do you follow?",
    answer:
      "We follow a practical, activity-based approach that includes real-life situations, role plays, guided practice, and continuous feedback.",
  },
  {
    question: "Will I receive individual attention and support?",
    answer:
      "<strong>Yes.</strong> We have dedicated teams for training, quality control, admin, and management to ensure instant support and personalised guidance whenever required.",
  },
  {
    question: "How does this course help in daily life and career?",
    answer:
      "The training helps you communicate clearly, manage time better, stay disciplined, improve social behaviour, and build confidence for both personal and professional growth.",
  },
  {
    question: "Do you focus on habits like punctuality and discipline?",
    answer:
      "Absolutely. Punctuality, self-discipline, organising skills, and responsibility are core values that are practised consistently throughout the course.",
  },
  {
    question: "Are the sessions practical or theory-based?",
    answer:
      "Our sessions are mostly practical. Learners actively participate in discussions, activities, and exercises designed for real-world application.",
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
        <h2 className={styles.title}>Frequently Asked Questions?</h2>

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
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}