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

  const nextMonthName = getNextMonthName();

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Upcoming Batch</h2>
      <p className={styles.subheading}>
        Plan your schedule now to never miss any crucial deadlines and ensure
        you enroll on time.
      </p>

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
        Next batch starts on the 1st of {nextMonthName}.
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
