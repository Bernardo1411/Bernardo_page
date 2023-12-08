import React from 'react';
import styles from './page.module.css';

import Navbar from './navbar/navbar';
import Landing from './landing/landing';
import About from './about/about';
import Projects from './projects/projects';
import Contact from './contact/contact';

function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default Home;
