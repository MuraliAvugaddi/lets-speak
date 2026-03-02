"use client";

import { useEffect, useState } from "react";
import styles from "./ComingSoon.module.css";

export default function ComingSoonPage() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const istTime = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Kolkata",
        }),
      );
      setTime(istTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <img
          src="/coming-soon-clock.png"
          alt="Coming Soon"
          className={styles.clockImage}
        />
        
        {/* <div className={styles.clockContainer}>
          <div
            className={styles.hourHand}
            style={{ transform: `rotate(${hourDeg}deg)` }}
          />
          <div
            className={styles.minuteHand}
            style={{ transform: `rotate(${minuteDeg}deg)` }}
          />
          <div
            className={styles.secondHand}
            style={{ transform: `rotate(${secondDeg}deg)` }}
          />
        </div> */}

        {/* Content */}
        <h1 className={styles.title}>Coming Soon</h1>

        <p className={styles.description}>
          We’re building something exciting for you. Stay tuned for updates.
        </p>
      </div>
    </section>
  );
}
