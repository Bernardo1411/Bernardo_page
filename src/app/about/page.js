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
                My name is Bernardo Fonseca, and I am a skilled developer based in Natal
                , RN, Brazil.
                I specialize in crafting cutting-edge mobile and web applications using
                React.js and React Native.
                Additionally, I bring expertise in backend development through Node.js and Express.
              </p>

              <p className={styles.p}>
                I am enthusiastic about the prospect of contributing
                to the the success of your project.
                Whether you have a clear project roadmap or are in the initial planning stages,
                I am ready to bring my skills to the table.
              </p>
            </div>
            <div className={styles.div_container_text}>
              <Title className={styles.p} style={{ marginBottom: '10px' }}>Degree</Title>
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
                Web and mobile developer at Extraconomy company
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
                firstElement={<Image width={75} height={75} style={{ marginRight: '35px', marginBottom: '20px' }} src="/images/react_mini.svg" alt="react" />}
                secondElement={<Image width={75} height={75} style={{ marginRight: '35px', marginBottom: '20px' }} src="/images/react_mini_color.svg" alt="react" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginBottom: '20px',
                }}
                firstElement={<Image width={75} height={75} src="/images/css3.svg" alt="css3" />}
                secondElement={<Image width={75} height={75} src="/images/css3_color.svg" alt="css3" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginRight: '35px',
                  marginBottom: '20px',
                }}
                firstElement={<Image width={75} height={75} src="/images/javascript.svg" alt="javascript" />}
                secondElement={<Image width={75} height={75} src="/images/javascript_color.svg" alt="javascript" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginBottom: '20px',
                }}
                firstElement={<Image width={75} height={75} src="/images/mongodb.svg" alt="mongoDB" />}
                secondElement={<Image width={75} height={75} src="/images/mongodb_color.svg" alt="mongoDB" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                  marginRight: '35px',
                }}
                firstElement={<Image width={75} height={75} src="/images/node.svg" alt="node.js" />}
                secondElement={<Image width={75} height={75} src="/images/node_color.svg" alt="node.js" />}
              />
              <ChangeOnHover
                style={{
                  width: '75px',
                  height: '75px',
                }}
                firstElement={<Image width={75} height={75} src="/images/html5.svg" alt="html5" />}
                secondElement={<Image width={75} height={75} src="/images/html5_color.svg" alt="html5" />}
              />
            </div>
          </div>
          <div className={styles.div_rows}>
            <div className={styles.div_container_text}>
              <Title style={{ marginBottom: '10px' }}>Technologies</Title>
              <p className={`${styles.p} ${styles.p_option}`}>JavaScript</p>
              <p className={`${styles.p} ${styles.p_option}`}>HTML</p>
              <p className={`${styles.p} ${styles.p_option}`}>CSS</p>
              <p className={`${styles.p} ${styles.p_option}`}>React.js</p>
              <p className={`${styles.p} ${styles.p_option}`}>React Native</p>
              <p className={`${styles.p} ${styles.p_option}`}>Node</p>
              <p className={`${styles.p} ${styles.p_option}`}>Express</p>
              <p className={`${styles.p} ${styles.p_option}`}>MongoDB</p>
              <p className={`${styles.p} ${styles.p_option}`}>Docker</p>
              <p className={`${styles.p} ${styles.p_option}`}>Git/Github</p>
              <p className={`${styles.p} ${styles.p_option}`}>Firebase</p>
              <p className={`${styles.p} ${styles.p_option}`}>Figma</p>
              <p className={`${styles.p} ${styles.p_option}`}>C++</p>
              <p className={`${styles.p} ${styles.p_option}`}>Python</p>
            </div>
          </div>
        </div>
      </PageContainer>
    </Transition>
  );
}

export default About;
