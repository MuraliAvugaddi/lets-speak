"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./AboutHighlights.module.css";

const coreValues = [
  {
    title: "Core Visibility",
    desc: "We ensure complete clarity and transparency in every learning process and communication.",
    img: "/h-1.png",
  },
  {
    title: "Responsibility",
    desc: "We take ownership of results and the outcomes of every student's journey.",
    img: "/h-2.png",
  },
  {
    title: "Ethical Standards",
    desc: "Honesty and integrity guide every decision we make and every class we deliver.",
    img: "/h-3.png",
  },
  {
    title: "Decisive Action",
    desc: "We use data-backed strategies to make smart, effective decisions.",
    img: "/h-4.png",
  },
  {
    title: "Perseverance",
    desc: "We remain determined and resilient even through challenges.",
    img: "/h-5.png",
  },
  {
    title: "Strategic Planning",
    desc: "We plan ahead to ensure growth and future success for every learner.",
    img: "/h-6.png",
  },
];

const reviews = [
  {
    name: "Kalyani",
    job: "Circle Inspector",
    text: "The management is very sincere and the classes are very productive and interactive. I truly feel that anybody can learn both the languages here from anywhere in the world",
    image: "/kalyani-reviewer.webp"
  },
  {
    name: "Kayala Surya Reddy",
    job: "Businessman & Politician",
    text: "English language has always been my dream to achieve but due to my hectic schedule I couldn't give time. I came across this institution through my friend and could learn the language so comfortably.",
    image: "/surya-reviewer.webp"
  },
  {
    name: "Padmavathi",
    job: "Home Maker",
    text: "Let's Speak is not just a language coaching center but a hub for personality development. The dedication of our founder, Mr. Surendra Garu whom I consider a god-given brother, and the entire LS team has been truly inspiring.",
    image: "/sahasra-reviewer.webp"
  },
  {
    name: "Chandrahasa",
    job: "Dietician",
    text: "The dedication and commitment of every trainer are exceptional, and I've truly enjoyed every stage of learning here. This institute stands out for its high-quality instruction, excellent training, and welcoming environment.",
    image: "/chandrahasa.webp"
  },
  {
    name: "Parnika",
    job: "Student",
    text: "After attending three free demo classes, I loved the teaching methods and got motivated to join. My short-term goal was to speak English and Hindi fluently, and though people doubted me, I achieved it!",
    image: "/parnika-reviewer.webp"
  },
  {
    name: "Murali",
    job: "Software Engineer",
    text: "The structured curriculum and personalized attention from trainers made a real difference in my communication skills. As a software engineer, clear communication is crucial, and Let's Speak helped me express my ideas confidently in both professional and social settings.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    name: "Kamal",
    job: "Student",
    text: "I was always hesitant to speak Hindi in public, but Let's Speak changed that completely. The trainers created such a supportive environment that I felt comfortable making mistakes and learning from them. Now I can confidently communicate in Hindi in any situation, whether it's casual conversations or formal settings.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
];

export default function AboutHighlights() {
  const [shorts, setShorts] = useState<string[]>([]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;

    fetch("/api/shorts?count=4&channel=SpeakWithSurendra")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.videos) setShorts(data.videos);
      })
      .catch(() => {
        /* ignore */
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        {/* ===== Core Values ===== */}
        <h2 className={styles.heading}>Our Core Values</h2>

        <div className={styles.coreGrid}>
          {coreValues.map((v, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>
                <img src={v.img} alt={v.title} loading="lazy" />
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* ===== Teaching Style / Shorts ===== */}
        <h2 className={styles.heading}>Our Teaching Style</h2>

        <div className={styles.achieveGrid}>
          {shorts.length > 0
            ? shorts.map((id) => (
                <div key={id} className={styles.achieveCard}>
                  <div className={styles.videoWrapper}>
                    {playingVideo === id ? (
                      <iframe
                        className={styles.video}
                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`YouTube Short ${id}`}
                      />
                    ) : (
                      <>
                        <img
                          src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                          alt="Video thumbnail"
                          className={styles.thumbnail}
                          onError={(e) => {
                            e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                          }}
                        />
                        <button
                          className={styles.playButton}
                          onClick={() => handlePlayVideo(id)}
                          aria-label="Play video"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="48"
                            height="48"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  <p className={styles.achieveText}>
                    A structured learning program designed for every age group, focusing on confidence, clarity, and real-world communication skills—guided by expert mentors and practical training.
                  </p>
                </div>
              ))
            : [1, 2, 3, 4].map((n) => (
                <div key={n} className={styles.achieveCard}>
                  <div className={styles.videoWrapper}>
                    <div className={styles.skeleton} />
                  </div>
                  <p className={styles.achieveText}>
                    We've delivered impactful learning initiatives focused on
                    innovation, growth, and real-world results.
                  </p>
                </div>
              ))}
        </div>

        <div className={styles.moreButtonWrapper}>
          <a
            href="https://www.youtube.com/@SpeakWithSurendra/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.moreButton}
          >
            View More on YouTube
          </a>
        </div>

        {/* ===== Reviews ===== */}
        <h2 className={styles.heading}>Students Feedback</h2>

        <div className={styles.reviewContainer}>
          <div className={styles.fadeLeft}></div>
          <div className={styles.fadeRight}></div>
          
          <div 
            className={styles.reviewScroller}
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`${styles.reviewTrack} ${isPaused ? styles.paused : ''}`}>
              {/* First set of reviews */}
              {reviews.map((r, i) => (
                <div key={`first-${i}`} className={styles.reviewCard}>
                  <img
                    src={r.image}
                    alt={`Photo of ${r.name}`}
                    className={styles.reviewPhoto}
                    loading="lazy"
                  />
                  <p className={styles.reviewText}>"{r.text}"</p>
                  <div className={styles.reviewAuthor}>
                    <p className={styles.reviewName}>{r.name}</p>
                    <p className={styles.reviewJob}>{r.job}</p>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {reviews.map((r, i) => (
                <div key={`second-${i}`} className={styles.reviewCard}>
                  <img
                    src={r.image}
                    alt={`Photo of ${r.name}`}
                    className={styles.reviewPhoto}
                    loading="lazy"
                  />
                  <p className={styles.reviewText}>"{r.text}"</p>
                  <div className={styles.reviewAuthor}>
                    <p className={styles.reviewName}>{r.name}</p>
                    <p className={styles.reviewJob}>{r.job}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}