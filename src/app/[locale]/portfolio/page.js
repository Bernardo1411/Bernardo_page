'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import PageContainer from '../../../containers/pageContainer/pageContainer';
import Transition from '../../../containers/Transition/Transition';
import Title from '../../../components/title/title';
import Card from '../../../components/card/card';

import styles from './portfolio.module.css';

function Portfolio() {
  const translation = useTranslations('Portfolio');

  return (
    <Transition>
      <PageContainer>
        <Title style={{ marginBottom: '30px', marginTop: '20px' }}>{translation('title')}</Title>
        <div className={styles.container}>
          <Card
            title={translation('mywebpage')}
            image="mywebpage_mobile"
            link="Bernardo_page"
            techs={['next', 'javascript', 'html5', 'css3']}
            description={translation('mywebpageDescription')}
          />
          <Card
            title={translation('eqbea')}
            image="eqbea"
            link="EQBEA"
            techs={['react_mini', 'node', 'mongoose', 'mongodb']}
            description={translation('eqbeaDescription')}
          />
          <Card
            title={translation('flowers')}
            image="flowersdashboard"
            link="flowersdashboard"
            techs={['react_mini', 'node', 'mongoose', 'mongodb']}
            description={translation('flowersDescription')}
          />
          <Card
            title={translation('nerdflix')}
            image="nerdflix"
            link="Nerdflix"
            techs={['react_mini', 'css3', 'html5', 'firebase']}
            description={translation('nerdflixDescription')}
          />
          <Card
            title={translation('wallet')}
            image="wallet"
            link="Wallet"
            techs={['react_mini', 'css3', 'html5', 'javascript']}
            description={translation('walletDescription')}
          />
          <Card
            title={translation('hashgame')}
            image="hashgame"
            link="Hash-Game"
            techs={['react_mini', 'css3', 'html5', 'javascript']}
            description={translation('hashgameDescription')}
          />
        </div>
      </PageContainer>
    </Transition>
  );
}

export default Portfolio;
