import React from 'react';
import PropTypes from 'prop-types';

import styles from './highlighted.module.css';

function Highlighted(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles.p}>
        {children}
      </h3>
    </div>
  );
}

Highlighted.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

export default Highlighted;
