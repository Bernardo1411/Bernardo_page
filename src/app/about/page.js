'use client';

import React from 'react';
import Image from 'next/image';

import PageContainer from '../../containers/pageContainer/pageContainer';
import Transition from '../../containers/Transition/Transition';
import Title from '../../components/title/title';
import ChangeOnHover from '../../components/changeOnHover/changeOnHover';

import styles from './about.module.css';

function About() {
  return (
    <Transition>
      <PageContainer>
        <div className={styles.div_container_rows}>
          <div className={styles.div_rows}>
            <div className={styles.div_container_text}>
              <Title style={{ marginBottom: '10px' }}>About Me</Title>
              <p className={styles.p}>
                My name is Bernardo Fonseca and I’m based in Natal, RN, Brazil.
                I build mobile and web applications using React.js and React Native.
                In case you also need a backend, I can do it with Node.js and express.
              </p>

              <p className={styles.p}>
                Wether alone or with a team, I’m ready to make your project become reality!
              </p>
            </div>
            <div className={styles.div_container_text}>
              <Title className={styles.p}>Degree</Title>
              <p className={styles.p}>
                Graduated in chemistry Engineering at Federal University of Rio Grande do Norte
              </p>

              <p className={styles.p}>
                Master Science in Oil Science & Engineering at
                Federal University of Rio Grande do Norte
              </p>
            </div>
          </div>
          <div className={styles.div_rows}>
            <div className={styles.div_container_text}>
              <Title style={{ marginBottom: '10px' }}>Experience</Title>
              <p className={styles.p}>
                Full-Stack developer at Centro de Inovação Edge
              </p>

              <p className={styles.p}>
                Web and mobile developer at Extraconomy
              </p>

              <p className={styles.p}>
                Front-end developer at Laboratório de Automação em Petróleo (LAUT)
              </p>
            </div>
            <div className={styles.div_images}>
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginRight: '35px',
                  marginBottom: '20px',
                }}
                firstElement={<Image width={75} height={75} style={{ marginRight: '35px', marginBottom: '20px' }} src="/images/react_mini.svg" />}
                secondElement={<Image width={75} height={75} style={{ marginRight: '35px', marginBottom: '20px' }} src="/images/react_mini_color.svg" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginBottom: '20px',
                }}
                firstElement={<Image width={75} height={75} src="/images/css3.svg" />}
                secondElement={<Image width={75} height={75} src="/images/css3_color.svg" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginRight: '35px',
                  marginBottom: '20px',
                }}
                firstElement={<Image width={75} height={75} src="/images/javascript.svg" />}
                secondElement={<Image width={75} height={75} src="/images/javascript_color.svg" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginBottom: '20px',
                }}
                firstElement={<Image width={75} height={75} src="/images/mongodb.svg" />}
                secondElement={<Image width={75} height={75} src="/images/mongodb_color.svg" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginRight: '35px',
                }}
                firstElement={<Image width={75} height={75} src="/images/node.svg" />}
                secondElement={<Image width={75} height={75} src="/images/node_color.svg" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                }}
                firstElement={<Image width={75} height={75} src="/images/html5.svg" />}
                secondElement={<Image width={75} height={75} src="/images/html5_color.svg" />}
              />
            </div>
          </div>
          <div className={styles.div_rows}>
            <div className={styles.div_container_text}>
              <Title style={{ marginBottom: '10px' }}>Technologies</Title>
              <p className={styles.p}>JavaScript</p>
              <p className={styles.p}>HTML</p>
              <p className={styles.p}>CSS</p>
              <p className={styles.p}>React.js</p>
              <p className={styles.p}>React Native</p>
              <p className={styles.p}>Node</p>
              <p className={styles.p}>Express</p>
              <p className={styles.p}>MongoDB</p>
              <p className={styles.p}>Docker</p>
              <p className={styles.p}>Git/Github</p>
              <p className={styles.p}>Firebase</p>
              <p className={styles.p}>Figma</p>
              <p className={styles.p}>C++</p>
              <p className={styles.p}>Python</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </Transition>
  );
}

export default About;
