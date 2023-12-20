'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './background.module.css';
import CleanButton from '../../components/cleanButton/CleanButton';
import ChangeOnHover from '../../components/changeOnHover/changeOnHover';

function Background(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      {children}
      <Image
        src="/images/react.svg"
        alt="atomic logo"
        style={{
          objectFit: 'cover',
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
        height={300}
        width={330}
      />
      <footer className={styles.footer}>
        <ChangeOnHover
          firstElement={(
            <CleanButton onClick={() => window.open('https://github.com/Bernardo1411')} name="github">
              <Image
                className="upDown"
                src="/images/github.svg"
                alt="github"
                style={{
                  marginLeft: '27px',
                  marginRight: '13px',
                  marginBottom: '24px',
                }}
                height={50}
                width={50}
              />
            </CleanButton>
          )}
          secondElement={(
            <CleanButton onClick={() => window.open('https://github.com/Bernardo1411')} name="github_color">
              <Image
                className="upDown"
                src="/images/github_color.svg"
                alt="github"
                style={{
                  marginLeft: '27px',
                  marginRight: '13px',
                  marginBottom: '24px',
                }}
                height={50}
                width={50}
              />
            </CleanButton>
          )}
        />
        <ChangeOnHover
          firstElement={(
            <CleanButton onClick={() => window.open('https://www.linkedin.com/in/bernardo-fonseca-97926811b/')} name="linkedin">
              <Image
                className={`${styles.linkedin} upDown`}
                src="/images/linkedin.svg"
                alt="linkedin"
                style={{
                  marginBottom: '24px',
                }}
                height={50}
                width={50}
              />
            </CleanButton>
          )}
          secondElement={(
            <CleanButton onClick={() => window.open('https://www.linkedin.com/in/bernardo-fonseca-97926811b/')} name="linkedin_color">
              <Image
                className={`${styles.linkedin} upDown`}
                src="/images/linkedin_color.svg"
                alt="linkedin"
                style={{
                  marginBottom: '24px',
                }}
                height={50}
                width={50}
              />
            </CleanButton>
          )}
        />
      </footer>
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

export default Background;
