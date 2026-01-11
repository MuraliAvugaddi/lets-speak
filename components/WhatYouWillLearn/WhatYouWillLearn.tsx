"use client";

import React, { useState } from "react";
import styles from "./WhatYouWillLearn.module.css";

interface WhatWillYouLearnProps {
  language?: "en" | "hi";
}

const WhatWillYouLearn: React.FC<WhatWillYouLearnProps> = ({
  language = "en",
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("students");

  const learningCards = [
    {
      title: "Speaking",
      color: "orange",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Speak confidently in real life",
        "Live jam sessions",
        "One-to-one trainer calls",
      ],
    },
    {
      title: "Listening",
      color: "blue",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        language === "hi" ? "Understand different Hindi accents" : "Understand different English accents",
        "Audio-based learning",
        "Real conversation practice",
      ],
    },
    {
      title: "Writing",
      color: "cyan",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Correct grammar & spelling",
        "Sentence building",
        "Picture-based writing",
      ],
    },
    {
      title: "Reading",
      color: "green",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Vocabulary building",
        "Context-based reading",
        "Comprehension practice",
      ],
    },
  ];

  const criteria = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="7" r="4" strokeWidth="2" />
          <path
            d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "No age limit",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M22 10v6M2 10l10-5 10 5-10 5z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 12v5c3 3 9 3 12 0v-5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "No qualification needed",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "No time restriction",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="10" r="3" strokeWidth="2" />
        </svg>
      ),
      title: "No place restriction",
    },
  ];

  const categories = [
    { 
      id: "homemakers", 
      label: "Homemakers", 
      icon: "🏠",
      description: "Age is not an issue and you can learn English anytime from the comfort of your own home in your free time."
    },
    { 
      id: "students", 
      label: "Students", 
      icon: "🎓",
      description: "You can balance your studies and still improve your English by learning after school or college in your free time."
    },
    { 
      id: "employed", 
      label: "Employed in India and Overseas", 
      icon: "💼",
      description: "You can manage both your professional life and English learning journey with us by spending just 20 mins a day online with us."
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? "" : categoryId);
  };

  const getActiveCategoryDescription = () => {
    const category = categories.find(cat => cat.id === activeCategory);
    return category?.description || "";
  };

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContainer}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <img src="/lets-speak-logo.png" alt="logo" />
        </div>

        {/* Header */}
        <h2 className={styles.mainHeading}>
          What Will You Learn <span className={styles.highlight}>Here?</span>
        </h2>
        <p className={styles.subheading}>
          {language === "hi"
            ? "Build confidence in Hindi with guided training"
            : "Build confidence in English with guided training"}
        </p>

        {/* Learning Cards Grid */}
        <div className={styles.cardsGrid}>
          {learningCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.learningCard} ${styles[card.color]}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <ul className={styles.featuresList}>
                {card.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="white"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.exploreButton}>Explore</button>
            </div>
          ))}
        </div>

        {/* Start Learning Button */}
        <div className={styles.ctaWrapper}>
          <button className={styles.startButton}>Start Learning Now</button>
        </div>

        {/* Who Can Join Section */}
        <div className={styles.whoCanJoinSection}>
          <h2 className={styles.whoCanJoinHeading}>
            Who <span className={styles.highlightGreen}>Can Join</span>
          </h2>
          <p className={styles.criteriaSubtitle}>Criteria</p>

          {/* Criteria Cards */}
          <div className={styles.criteriaGrid}>
            {criteria.map((item, index) => (
              <div key={index} className={styles.criteriaCard}>
                <div className={styles.criteriaIcon}>{item.icon}</div>
                <h3 className={styles.criteriaTitle}>{item.title}</h3>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className={styles.categoriesWrapper}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryButton} ${
                  activeCategory === category.id ? styles.active : ""
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span className={styles.categoryLabel}>{category.label}</span>
                <svg
                  className={styles.chevronIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>

          {/* Category Description Box */}
          <div className={`${styles.descriptionBox} ${activeCategory ? styles.visible : ""}`}>
            <div className={styles.descriptionContent}>
              <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <p className={styles.descriptionText}>
                {getActiveCategoryDescription()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWillYouLearn;