"use client";

import { useEffect, useState } from "react";
import styles from "./UpcomingBatch.module.css";

function getNextBatchDate() {
  const now = new Date();
  // Next batch: next upcoming Thursday (or customise as needed)
  // For now, keeping logic: 1st of next month
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
}

function getNextMonthName() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return next.toLocaleString("en-US", { month: "long" }).toUpperCase();
}

function getNextBatchDateString() {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const dd = String(next.getDate()).padStart(2, "0");
  const mm = String(next.getMonth() + 1).padStart(2, "0");
  const yyyy = next.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}

export default function UpcomingBatch() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [typedText, setTypedText] = useState("");
  const fullText = "Batches";

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
        timeout = setTimeout(type, 150);
      } else if (!isDeleting && currentIndex > fullText.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && currentIndex >= 0) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex--;
        timeout = setTimeout(type, 100);
      } else if (isDeleting && currentIndex < 0) {
        isDeleting = false;
        currentIndex = 0;
        timeout = setTimeout(type, 500);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  const nextMonthName = getNextMonthName();
  const nextBatchDateStr = getNextBatchDateString();

  const timeUnits = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HRS" },
    { value: timeLeft.minutes, label: "MINS" },
    { value: timeLeft.seconds, label: "SECS" },
  ];

  return (
    <section className={styles.section}>
      {/* ── Left Column ── */}
      <div className={styles.left}>
        <h2 className={styles.heading}>
          <span className={styles.headingAccent}>Upcoming</span>{" "}
          <span className={styles.typingWrapper}>
            <span className={styles.typingText}>{typedText}</span>
            <span className={styles.cursor}>|</span>
          </span>
        </h2>

        <p className={styles.subheading}>
          Procrastination steals time. Secure your spot in our next batch
          allocated according to your level.
        </p>

        <p className={styles.cta}>
          <strong>Join us and start learning.</strong>
        </p>

        <p className={styles.note}>
          <i>
            We have batches every week; we will allocate the batch according to
            your level, and our trainers are always here to help you kickstart
            your learning journey.
          </i>
        </p>
      </div>

      {/* ── Right Column ── */}
      <div className={styles.right}>
        {/* Countdown boxes */}
        <div className={styles.countdown}>
          {timeUnits.map((unit, i) => (
            <div key={i} className={styles.countdownItem}>
              <div className={styles.box}>
                <span className={styles.boxNumber}>
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className={styles.boxLabel}>{unit.label}</span>
              {i < timeUnits.length - 1 && (
                <span className={styles.colon}>:</span>
              )}
            </div>
          ))}
        </div>

        {/* Next batch label */}
        <p className={styles.nextBatchLabel}>NEXT BATCH STARTS ON</p>

        {/* Date card */}
        <div className={styles.dateCard}>
          <div className={styles.dateCardMonth}>{nextMonthName}</div>
          <div className={styles.dateCardDate}>{nextBatchDateStr}</div>
        </div>

        {/* WhatsApp CTA button */}
        <a
          href="https://wa.me/919959751194"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Check Availability
        </a>
      </div>
    </section>
  );
}