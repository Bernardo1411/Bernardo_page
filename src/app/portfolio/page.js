'use client';

import React from 'react';

import PageContainer from '../../containers/pageContainer/pageContainer';
import Transition from '../../containers/Transition/Transition';
import Title from '../../components/title/title';
import Card from '../../components/card/card';

import styles from './portfolio.module.css';

function Portfolio() {
  return (
    <Transition>
      <PageContainer>
        <Title style={{ marginBottom: '30px', marginTop: '20px' }}>Portfolio</Title>
        <div className={styles.container}>
          <Card
            title="EQBEA"
            image="eqbea"
            link="EQBEA"
            techs={['react_mini', 'node', 'mongoose', 'mongoDB']}
            description="Mobile application for animal welfare management and diagnosis prediction."
          />
          <Card
            title="Nerdflix"
            image="nerdflix"
            link="Nerdflix"
            techs={['react_mini', 'CSS3', 'HTML5', 'firebase']}
            description="Nerdflix is an web app that simulates an online movie store. You can browse a movie and add to your cart."
          />
          <Card
            title="Wallet"
            image="wallet"
            link="Wallet"
            techs={['react_mini', 'CSS3', 'HTML5', 'javascript']}
            description="One of my first projects. It is a digital wallet that calculates and converts any expense in any currency into reais."
          />
          <Card
            title="Hash Game"
            image="hashgame"
            link="Hash-Game"
            techs={['react_mini', 'CSS3', 'HTML5', 'javascript']}
            description="
            Excited to present my first React project: a tic-tac-toe game where you can challenge yourself by playing against the computer. Enjoy the challenge!"
          />
        </div>
      </PageContainer>
    </Transition>
  );
}

export default Portfolio;
