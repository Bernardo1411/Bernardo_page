import React from 'react';
import styles from './page.module.css';

import Landing from './landing/landing';

function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}

export default Home;
