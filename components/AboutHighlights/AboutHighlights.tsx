"use client";

import { useEffect, useState } from "react";
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
    name: "Sarah K",
    text: "Thanks to this training, I am now working as a software engineer at a top company.",
  },
  {
    name: "Rahul Sharma",
    text: "The structured training helped me become a project manager with a multinational.",
  },
  {
    name: "Emily Davis",
    text: "I got my dream role in data analytics right after completing the course.",
  },
];

export default function AboutHighlights() {
  const [shorts, setShorts] = useState<string[]>([]);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

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
                            // Fallback to hqdefault if maxresdefault doesn't exist
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
                    We've delivered impactful learning initiatives focused on
                    innovation, growth, and real-world results.
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
        <h2 className={styles.heading}>Where Do Our Students Work?</h2>

        <div className={styles.reviewGrid}>
          {reviews.map((r, i) => (
            <div key={i} className={styles.reviewCard}>
              <img
                src={`https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt={`Photo of ${r.name}`}
                className={styles.reviewPhoto}
                loading="lazy"
              />
              <p className={styles.reviewText}>"{r.text}"</p>
              <p className={styles.reviewName}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
