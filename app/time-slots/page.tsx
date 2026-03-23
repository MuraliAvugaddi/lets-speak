// app/time-slots/page.tsx  (or drop as a component anywhere)
import Link from "next/link";
import styles from "./TimeSlots.module.css";

const AM_SLOTS = [
  { time: "05:30 - 07:00", batch: "BATCH-1", accent: "teal" },
  { time: "07:00 - 08:30", batch: "BATCH-2", accent: "yellow" },
  { time: "09:00 - 10:30", batch: "BATCH-3", accent: "teal" },
  { time: "10:30 - 12:00", batch: "BATCH-4", accent: "yellow" },
];

const PM_SLOTS = [
  { time: "03:30 - 05:00", batch: "BATCH-5", accent: "teal" },
  { time: "05:00 - 06:30", batch: "BATCH-6", accent: "yellow" },
  { time: "06:30 - 08:00", batch: "BATCH-7", accent: "teal" },
];

const STATS = [
  { value: "30+", label: "Trainers" },
  { value: "5",   label: "Clubs" },
  { value: "50K+",label: "Students" },
  { value: "7",   label: "Timings" },
];

const MODES = [
  { icon: "🌐", label: "ONLINE" },
  { icon: "🏫", label: "OFFLINE" },
  { icon: "👤", label: "1 ON 1" },
];

export default function TimeSlotsPage() {
  return (
    <main className={styles.page}>
      {/* ══ HERO CARD ══════════════════════════════════════════════ */}
      <div className={styles.card}>

        {/* Header pill */}
        <div className={styles.headerPill}>
          <span className={styles.headerIcon}>
            {/* LS logo-style speech bubble */}
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="20" fill="white" fillOpacity="0.15"/>
              <path d="M10 12C10 10.9 10.9 10 12 10H28C29.1 10 30 10.9 30 12V24C30 25.1 29.1 26 28 26H22L16 30V26H12C10.9 26 10 25.1 10 24V12Z" fill="white"/>
              <text x="14" y="22" fontSize="10" fontWeight="900" fill="#0b3c63" fontFamily="sans-serif">LS</text>
            </svg>
          </span>
          <h1 className={styles.headerTitle}>TIME SLOTS</h1>
        </div>

        {/* Outer border frame */}
        <div className={styles.frame}>

          {/* ── AM SECTION ─────────────────────────────────── */}
          <div className={styles.periodLabel}>
            <span>A.M</span>
          </div>

          <div className={styles.slotList}>
            {AM_SLOTS.map((slot) => (
              <div key={slot.batch} className={`${styles.slotRow} ${styles[slot.accent]}`}>
                <span className={styles.slotTime}>{slot.time}</span>
                <span className={`${styles.batchBadge} ${styles[slot.accent + "Badge"]}`}>
                  {slot.batch}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className={styles.divider} />

          {/* ── PM SECTION ─────────────────────────────────── */}
          <div className={styles.periodLabel}>
            <span>P.M</span>
          </div>

          <div className={styles.slotList}>
            {PM_SLOTS.map((slot) => (
              <div key={slot.batch} className={`${styles.slotRow} ${styles[slot.accent]}`}>
                <span className={styles.slotTime}>{slot.time}</span>
                <span className={`${styles.batchBadge} ${styles[slot.accent + "Badge"]}`}>
                  {slot.batch}
                </span>
              </div>
            ))}
          </div>

          {/* CTA pill */}
          <a
            href="https://wa.me/919959751194"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPill}
          >
            JOIN US TODAY!
          </a>

        </div>{/* /frame */}
      </div>{/* /card */}
    </main>
  );
}