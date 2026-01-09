'use client';

import styles from './NavBar.module.css';
import Link from 'next/link';
import { useState } from 'react';

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
    <header className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src="./lets-speak.jpg" alt="LOGO" className={styles.logoImage}/>
        </div>

        {/* Hamburger Icon */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/about" onClick={closeMenu}>About Us</Link>

          <div className={styles.dropdown}>
            <span onClick={() => toggleDropdown('courses')}>
              Courses <span className={styles.arrow}>▾</span>
            </span>
            <div className={`${styles.dropdownMenu} ${openDropdown === 'courses' ? styles.dropdownOpen : ''}`}>
              <Link href="/courses/spoken" onClick={closeMenu}>Spoken English</Link>
              <Link href="/courses/business" onClick={closeMenu}>Business English</Link>
              <Link href="/courses/personality" onClick={closeMenu}>Personality Development</Link>
            </div>
          </div>

          <Link href="/ielts" className={styles.highlight} onClick={closeMenu}>IELTS</Link>

          <div className={styles.dropdown}>
            <span onClick={() => toggleDropdown('languages')}>
              Languages <span className={styles.arrow}>▾</span>
            </span>
            <div className={`${styles.dropdownMenu} ${openDropdown === 'languages' ? styles.dropdownOpen : ''}`}>
              <Link href="/languages/french" onClick={closeMenu}>French</Link>
              <Link href="/languages/german" onClick={closeMenu}>German</Link>
              <Link href="/languages/japanese" onClick={closeMenu}>Japanese</Link>
            </div>
          </div>

          <div className={styles.dropdown}>
            <span onClick={() => toggleDropdown('b2b')}>
              B2B <span className={styles.arrow}>▾</span>
            </span>
            <div className={`${styles.dropdownMenu} ${openDropdown === 'b2b' ? styles.dropdownOpen : ''}`}>
              <Link href="/b2b/corporate" onClick={closeMenu}>Corporate Training</Link>
              <Link href="/b2b/institutes" onClick={closeMenu}>Institutes</Link>
            </div>
          </div>

          <Link href="/contact" onClick={closeMenu}>Contact Us</Link>

          {/* Mobile WhatsApp Button */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className={`${styles.whatsappBtn} ${styles.mobileWhatsapp}`}
            onClick={closeMenu}
          >
            Book Demo Classes
          </a>
        </nav>

        {/* Desktop WhatsApp Button */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          className={`${styles.whatsappBtn} ${styles.desktopWhatsapp}`}
        >
          Book 3 Free Demo Classes
        </a>
      </div>
    </header>
  );
}