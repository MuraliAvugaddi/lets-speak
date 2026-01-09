import styles from './AboutHighlights.module.css';

const coreValues = [
  {
    title: 'Core Visibility',
    desc: 'We ensure complete clarity and transparency in every learning process and communication.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 5C6 5 2 12 2 12s4 7 10 7 10-7 10-7-4-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Responsibility',
    desc: 'We take ownership of results and the outcomes of every student’s journey.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21c0-5 16-5 16 0" />
      </svg>
    ),
  },
  {
    title: 'Ethical Standards',
    desc: 'Honesty and integrity guide every decision we make and every class we deliver.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4Z" />
      </svg>
    ),
  },
  {
    title: 'Decisive Action',
    desc: 'We use data-backed strategies to make smart, effective decisions.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12h18M12 3v18" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: 'Perseverance',
    desc: 'We remain determined and resilient even through challenges.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l4 8-4-2-4 2 4-8Z" />
        <path d="M4 22h16" />
      </svg>
    ),
  },
  {
    title: 'Strategic Planning',
    desc: 'We plan ahead to ensure growth and future success for every learner.',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7 12h10M7 8h6M7 16h4" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: 'Sarah K',
    text: 'Thanks to this training, I am now working as a software engineer at a top company.',
  },
  {
    name: 'Rahul Sharma',
    text: 'The structured training helped me become a project manager with a multinational.',
  },
  {
    name: 'Emily Davis',
    text: 'I got my dream role in data analytics right after completing the course.',
  },
];

export default function AboutHighlights() {
  return (
    <section className={styles.section}>

      {/* ===== Core Values ===== */}
      <h2 className={styles.heading}>Our Core Values</h2>

      <div className={styles.coreGrid}>
        {coreValues.map((v, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>

      {/* ===== Achievements ===== */}
      <h2 className={styles.heading}>Our Teaching Style</h2>

      <div className={styles.achieveGrid}>
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className={styles.achieveCard}>
            <iframe
              className={styles.video}
              src={`https://www.youtube.com/embed?listType=user_uploads&list=SpeakWithSurendra`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`Achievement video ${n}`}
            />
            <p className={styles.achieveText}>
              We’ve delivered impactful learning initiatives focused on innovation,
              growth, and real-world results.
            </p>
          </div>
        ))}
      </div>

      {/* ===== Reviews ===== */}
      <h2 className={styles.heading}>Where Do Our Students Work?</h2>

      <div className={styles.reviewGrid}>
        {reviews.map((r, i) => (
          <div key={i} className={styles.reviewCard}>
            <p className={styles.reviewText}>"{r.text}"</p>
            <p className={styles.reviewName}>— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
