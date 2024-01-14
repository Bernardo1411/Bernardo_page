'use client';

import React, { useState, useEffect } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import { useTranslations } from 'next-intl';
import styles from './navbar.module.css';

import { Link, usePathname } from '../../../../navigation'; // Next intl Link and pathname

import CleanButton from '../../../components/cleanButton/CleanButton';

function Navbar(props) {
  const { locale } = props;
  const translation = useTranslations('Navbar');

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
          <Link className={pathname === '/' ? styles.active : ''} href="/" locale={locale}>
            Bernardo
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={pathname === '/about' ? styles.active : ''} href="/about" locale={locale}>
            {translation('about')}
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={pathname === '/portfolio' ? styles.active : ''} href="/portfolio" locale={locale}>
            {translation('portfolio')}
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={pathname === '/contact' ? styles.active : ''} href="/contact" locale={locale}>
            {translation('contact')}
          </Link>
        </li>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Navbar;
