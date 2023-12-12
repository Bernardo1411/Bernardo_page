'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

import PageContainer from '../containers/pageContainer/pageContainer';
import Transition from '../containers/Transition/Transition';

function Landing() {
  return (
    <Transition>
      <PageContainer>
        <Image
          src="/images/myphoto.webp"
          alt="Bernardo photo"
          height={250}
          width={250}
        />
        <div className={styles.divMainText}>
          <div>
            <h1 className={styles.h1}>Welcome to my </h1>
            <h1 className={`${styles.h1} ${styles.personal}`}>Personal</h1>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <h1 className={styles.h1}>Webpage!</h1>
        </div>
        <p>Build a consistent and reponsive front-end for your business.</p>
        <button
          className={styles.bottomButton}
          type="button"
          onClick={() => { window.location.hash = 'about'; }}
        >
          <p>About</p>
          <Image
            src="/images/arrowDown.svg"
            alt="arrow down"
            height={24}
            width={24}
          />
        </button>
      </PageContainer>
    </Transition>
  );
}

export default Landing;
