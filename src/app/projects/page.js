'use client';

import React from 'react';

import PageContainer from '../../containers/pageContainer/pageContainer';
import Transition from '../../containers/Transition/Transition';
import Title from '../../components/title/title';
import Card from '../../components/card/card';

import styles from './projects.module.css';

function Projects() {
  return (
    <Transition>
      <PageContainer>
        <Title style={{ marginBottom: '30px' }}>Projects</Title>
        <div className={styles.container}>
          <Card
            title="Nerdflix"
            image="nerdflix"
            link="Nerdflix"
            techs={['react_mini', 'CSS3', 'HTML5', 'firebase']}
            description="Nerdflix is an web app that simulates an online movie store. You can browse a movie and add to your cart."
          />
          <Card
            title="Nerdflix"
            image="nerdflix"
            link="Nerdflix"
            techs={['react_mini', 'CSS3', 'HTML5', 'firebase']}
            description="Nerdflix is an web app that simulates an online movie store. You can browse a movie and add to your cart."
          />
          <Card
            title="Nerdflix"
            image="nerdflix"
            link="Nerdflix"
            techs={['react_mini', 'CSS3', 'HTML5', 'firebase']}
            description="Nerdflix is an web app that simulates an online movie store. You can browse a movie and add to your cart."
          />
          <Card
            title="Nerdflix"
            image="nerdflix"
            link="Nerdflix"
            techs={['react_mini', 'CSS3', 'HTML5', 'firebase']}
            description="Nerdflix is an web app that simulates an online movie store. You can browse a movie and add to your cart."
          />
        </div>
      </PageContainer>
    </Transition>
  );
}

export default Projects;