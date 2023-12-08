'use client';

import React from 'react';
import Image from 'next/image';

import PageContainer from '../../containers/pageContainer/pageContainer';

import styles from './landing.module.css';

function Landing() {
  return (
    <PageContainer id="">
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
      <p className={styles.p}>Build a consistent and reponsive front-end for your business.</p>
      <button
        className={styles.bottomButton}
        type="button"
        onClick={() => { window.location.hash = 'about'; }}
      >
        <p className={styles.p}>About</p>
        <Image
          src="/images/arrowDown.svg"
          alt="arrow down"
          height={24}
          width={24}
        />
      </button>
    </PageContainer>
  );
}

export default Landing;
