import React from 'react';
import PropTypes from 'prop-types';

import styles from './title.module.css';

function Title(props) {
  const { children, style } = props;

  return (
    <h2 className={styles.h2} style={style}>
      {children}
    </h2>
  );
}

Title.defaultProps = {
  style: {},
};

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.shape({}),
};

export default Title;
