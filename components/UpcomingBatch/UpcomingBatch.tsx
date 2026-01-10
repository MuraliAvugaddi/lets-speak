"use client";

import { useEffect, useState } from "react";
import styles from "./UpcomingBatch.module.css";

function getNextBatchDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
}

function getNextMonthName() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return next.toLocaleString("en-US", { month: "long" });
}

export default function UpcomingBatch() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [typedText, setTypedText] = useState("");
  const fullText = "Batch";

  // Countdown timer
  useEffect(() => {
    const targetDate = getNextBatchDate();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(type, 150); // Typing speed
      } else if (!isDeleting && currentIndex > fullText.length) {
        // Pause at the end before deleting
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex--;
        timeout = setTimeout(type, 100); // Deleting speed
      } else if (isDeleting && currentIndex < 0) {
        // Pause before typing again
        isDeleting = false;
        currentIndex = 0;
        timeout = setTimeout(type, 500);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  const nextMonthName = getNextMonthName();

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        <p>Upcoming</p> 
        <span className={styles.typingText}>
          {typedText}
          <span className={styles.cursor}>|</span>
        </span>
      </h2>
      <p className={styles.subheading}>
        Plan your schedule now to never miss any crucial deadlines and ensure
        you enroll on time.
      </p>

      <p className={styles.note}><i>So begin your journey right now. We have batches every week; we will allocate the batch according to your level, and our trainers are always here to help you kickstart your learning journey.
      </i></p>

      {/* Countdown */}
      <div className={styles.timeline}>
        <div className={`${styles.box} ${styles.active}`}>
          <h3>{timeLeft.days}</h3>
          <p>DAYS</p>
        </div>

        <div className={styles.box}>
          <h3>{timeLeft.hours}</h3>
          <p>HOURS</p>
        </div>

        <div className={styles.box}>
          <h3>{timeLeft.minutes}</h3>
          <p>MINUTES</p>
        </div>

        <div className={styles.box}>
          <h3>{timeLeft.seconds}</h3>
          <p>SECONDS</p>
        </div>
      </div>

      <p className={styles.note}>
        Next batch starts on the <b>1st of{" "}
        {nextMonthName}</b>.
      </p>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Join via WhatsApp
      </a>
    </section>
  );
}