'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './navbar.module.css';

function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
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
          <Link className={pathname === '/projects' ? styles.active : ''} href="/projects">
            Projects
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
