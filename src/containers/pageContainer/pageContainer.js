import React from 'react';
import PropTypes from 'prop-types';

import styles from './pageContainer.module.css';

function PageContainer(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

export default PageContainer;
