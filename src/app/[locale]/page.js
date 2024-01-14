'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';

import PageContainer from '../../containers/pageContainer/pageContainer';
import Transition from '../../containers/Transition/Transition';
import Highlighted from '../../components/highlighted/highlighted';

function Landing() {
  const translation = useTranslations('Landing');

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
          priority
          style={{ marginBottom: '10px', borderRadius: '100%' }}
        />
        <div className={styles.divMainText}>
          <div>
            <h1 className={styles.h1}>{translation('title1')}</h1>
            <h1 className={`${styles.h1} ${styles.personal}`}>{translation('title2')}</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
            <h1 className={styles.h1}>{translation('title3')}</h1>
          </div>
        </div>
        <p style={{ marginBottom: '60px' }}>{translation('description')}</p>
      </PageContainer>
    </Transition>
  );
}

export default Landing;
