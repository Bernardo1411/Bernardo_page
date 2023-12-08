import React from 'react';

import styles from './navbar.module.css';

function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.a} href="#landing">
            Bernardo
          </a>
        </li>
        <li className={styles.li}>
          <a href="#about">
            About
          </a>
        </li>
        <li className={styles.li}>
          <a href="#projects">
            Projects
          </a>
        </li>
        <li className={styles.li}>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
