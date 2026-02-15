"use client";

import styles from "./NavBar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.wrapper}>
          <Link href="/" onClick={closeMenu} className={styles.logo}>
            <img src="/navbar-logo.png" alt="LOGO" className={styles.logoImage} />
          </Link>

          {/* Hamburger Icon */}
          <button
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>

            <div className={styles.dropdown}>
              <span onClick={() => toggleDropdown("courses")}>
                Courses <span className={styles.arrow}>▾</span>
              </span>
              <div
                className={`${styles.dropdownMenu} ${openDropdown === "courses" ? styles.dropdownOpen : ""}`}
              >
                <Link href="/courses/english" onClick={closeMenu}>
                  English
                </Link>
                <Link href="/courses/hindi" onClick={closeMenu}>
                  Hindi
                </Link>
              </div>
            </div>

            <Link href="/about" onClick={closeMenu}>
              About Us
            </Link>

            <Link href="/contact" onClick={closeMenu}>
              Contact Us
            </Link>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/919959751194"
              target="_blank"
              className={`${styles.whatsappBtn} ${styles.mobileWhatsapp}`}
              onClick={closeMenu}
            >
              Book Demo Classes
            </a>
          </nav>

          {/* Desktop WhatsApp Button */}
          <a
            href="https://wa.me/919959751194"
            target="_blank"
            className={`${styles.whatsappBtn} ${styles.desktopWhatsapp}`}
          >
            Book 3 Free Demo Classes
          </a>
        </div>
      </header>

      {/* Announcement Bar - Below Navbar */}
      <div className={styles.announcementBar}>
        <div className={styles.announcementTrack}>
          <div className={styles.announcementContent}>
            <span className={styles.announcementText}>
              🎉 Enroll Now! New Batches Commencing on the 1st of Every Month | Book Your Free Demo Today!
            </span>
            <span className={styles.announcementText}>
              🎉 Enroll Now! New Batches Commencing on the 1st of Every Month | Book Your Free Demo Today!
            </span>
            <span className={styles.announcementText}>
              🎉 Enroll Now! New Batches Commencing on the 1st of Every Month | Book Your Free Demo Today!
            </span>
          </div>
        </div>
      </div>
    </>
  );
}