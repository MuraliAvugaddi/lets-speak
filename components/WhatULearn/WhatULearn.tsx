'use client';

import { useState } from 'react';
import styles from './WhatULearn.module.css';

const mentorTypes = [
  {
    id: 'mentor',
    title: 'The Mentor',
    heading: 'Personalized Guidance Every Step',
    description: 'Get one-on-one attention from expert trainers who understand your learning style. Our mentors provide customized feedback, track your progress, and adapt lessons to your pace. With years of teaching experience, they help you overcome challenges and build confidence in speaking English naturally.',
    image: './WUL-1.png',
  },
  {
    id: 'motivator',
    title: 'The Motivator',
    heading: 'Stay Inspired and Energized',
    description: 'Learning a language requires consistent motivation. Our courses are designed to keep you engaged with interactive sessions, gamified learning, and regular achievements. Celebrate your milestones with our supportive community and trainers who encourage you to push beyond your limits.',
    image: './WUL-2.png',
  },
  {
    id: 'curator',
    title: 'The Curator',
    heading: 'Carefully Crafted Content',
    description: 'Every lesson is thoughtfully designed by language experts. We curate content that is relevant, practical, and aligned with real-world scenarios. From business presentations to casual conversations, our curriculum covers what you actually need to succeed in your personal and professional life.',
    image: './WUL-3.png',
  },
  {
    id: 'companion',
    title: 'The Companion',
    heading: 'Learn Together, Grow Together',
    description: 'Join a vibrant community of learners just like you. Practice speaking with peers, participate in group discussions, and build lasting connections. Our companion approach ensures you never feel alone on your learning journey. Share experiences, learn from others, and grow your network.',
    image: './WUL-4.png',
  },
  {
    id: 'champion',
    title: 'The Champion',
    heading: 'Achieve Excellence',
    description: 'We are committed to making you a champion in English communication. With proven teaching methods, comprehensive support, and result-oriented strategies, we help you achieve fluency and confidence. Our success stories speak for themselves - join thousands who have transformed their careers and lives.',
    image: './WUL-5.png',
  },
];

export default function LearnSection() {
  const [activeTab, setActiveTab] = useState('champion');

  const activeContent = mentorTypes.find(m => m.id === activeTab) || mentorTypes[4];

  return (
    <section className={styles.section}>
      {/* Google Rating Badge */}
      <div className={styles.ratingBadge}>
        <div className={styles.googleIcon}>
          <svg viewBox="0 0 48 48" width="48" height="48">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
        </div>
        <div className={styles.ratingText}>
          <div className={styles.ratingScore}>Rated 4.7/5.0</div>
          <div className={styles.ratingReviews}>More Than 7500 Reviews</div>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className={styles.heading}>
        What are you <span className={styles.going}>going</span> to{' '}
        <span className={styles.learn}>learn here?</span>
      </h2>

      {/* Description */}
      <p className={styles.description}>
        If you're looking for the{' '}
        <span className={styles.underline}>best online & offline spoken English & Hindi classes in India</span>, you're
        in the right place. At Let's Speak, our program is designed for every stage of your journey,
        starting from Pre-Basic to IELTS, including levels like Basic, Intermediate, Advanced, and
        Business Communication.
      </p>

      <p className={styles.description}>
        Our online & offline English & Hindi classes for adults are perfect if you want to build fluency, expand your
        vocabulary, and improve real-life communication. Along with that, we offer focused grammar
        classes online & offline and practical English speaking classes that make learning easy and engaging
        according to the learner's level.
      </p>

      <p className={styles.descriptionBold}>
        This isn't just another English or Hindi learning course it's your opportunity to speak confidently,
        learn flexibly on WhatsApp, and grow with expert support.
      </p>

      {/* Tabs */}
      <div className={styles.tabs}>
        {mentorTypes.map((mentor) => (
          <button
            key={mentor.id}
            className={`${styles.tab} ${activeTab === mentor.id ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(mentor.id)}
          >
            {mentor.title}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className={styles.contentWrapper}>
        <div className={styles.contentLeft}>
          <h3 className={styles.contentHeading}>Because You Deserve the Best</h3>
          <h4 className={styles.contentSubheading}>{activeContent.heading}</h4>
          <p className={styles.contentDescription}>{activeContent.description}</p>
        </div>

        <div className={styles.contentRight}>
          <img
            src={activeContent.image}
            alt={activeContent.title}
            className={styles.contentImage}
          />
        </div>
      </div>
    </section>
  );
}