'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.css';

import CleanButton from '../../components/cleanButton/CleanButton';

function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.addEventListener('click', () => setIsMenuOpen(false));

    return () => {
      document.body.removeEventListener('click', () => setIsMenuOpen(false));
    };
  }, []);

  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <CleanButton onClick={toggleMenu} name="toggle_nav">
        <div className={styles.toggleButton}>
          ☰
        </div>
      </CleanButton>
      <ul className={`${styles.ul} ${isMenuOpen ? styles.showMenu : ''}`} onMouseLeave={() => setIsMenuOpen(false)}>
        <li className={styles.li}>
          <Link className={pathname === '/' ? styles.active : ''} href="/">
            Bernardo
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={pathname === '/about' ? styles.active : ''} href="/about">
            About
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={pathname === '/portfolio' ? styles.active : ''} href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={pathname === '/contact' ? styles.active : ''} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
