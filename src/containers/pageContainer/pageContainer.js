import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './pageContainer.module.css';

function PageContainer(props) {
  const { children, id } = props;

  return (
    <div id={id} className={styles.container}>
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
        <Image
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
        <Image
          src="/images/linkedin.svg"
          alt="linkedin"
          style={{
            marginBottom: '24px',
          }}
          height={50}
          width={50}
        />
      </footer>
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  id: PropTypes.string.isRequired,
};

export default PageContainer;
