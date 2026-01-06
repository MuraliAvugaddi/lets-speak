'use client';

import styles from './NavBar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="./lets-speak.jpg" alt="LOGO" className={styles.logoImage}/>
      </div>

      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>

        <div className={styles.dropdown}>
          <span>Courses ▾</span>
          <div className={styles.dropdownMenu}>
            <Link href="/courses/spoken">Spoken English</Link>
            <Link href="/courses/business">Business English</Link>
            <Link href="/courses/personality">Personality Development</Link>
          </div>
        </div>

        <Link href="/ielts" className={styles.highlight}>IELTS</Link>

        <div className={styles.dropdown}>
          <span>Languages ▾</span>
          <div className={styles.dropdownMenu}>
            <Link href="/languages/french">French</Link>
            <Link href="/languages/german">German</Link>
            <Link href="/languages/japanese">Japanese</Link>
          </div>
        </div>

        <div className={styles.dropdown}>
          <span>B2B ▾</span>
          <div className={styles.dropdownMenu}>
            <Link href="/b2b/corporate">Corporate Training</Link>
            <Link href="/b2b/institutes">Institutes</Link>
          </div>
        </div>

        <Link href="/contact">Contact Us</Link>
      </nav>

      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className={styles.whatsappBtn}
      >
        Book 3 Free Demo Classes
      </a>
      </div>
    </header>
  );
}
