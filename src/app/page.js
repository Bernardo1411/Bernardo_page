'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

import PageContainer from '../containers/pageContainer/pageContainer';
import Transition from '../containers/Transition/Transition';
import Highlighted from '../components/highlighted/highlighted';

function Landing() {
  return (
    <Transition>
      <PageContainer>
        <div className={styles.div_highlighted}>
          <Highlighted>Bernardo Fonseca</Highlighted>
        </div>
        <Image
          src="/images/myphoto.webp"
          alt="Bernardo photo"
          height={250}
          width={250}
          style={{ marginBottom: '10px' }}
        />
        <div className={styles.divMainText}>
          <div>
            <h1 className={styles.h1}>Welcome to my </h1>
            <h1 className={`${styles.h1} ${styles.personal}`}>Personal</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <h1 className={styles.h1}>Webpage!</h1>
          </div>
        </div>
        <p>Build a consistent and reponsive front-end for your business.</p>
      </PageContainer>
    </Transition>
  );
}

export default Landing;
