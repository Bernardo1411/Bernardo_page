import React from 'react';
import styles from './page.module.css';

import Landing from './landing/landing';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';

function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
