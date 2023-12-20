'use client';

import React from 'react';
import PropTypes from 'prop-types';

function CleanButton(props) {
  const {
    children, onClick, name,
  } = props;

  const buttonComponent = (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        outline: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      aria-label={name}
    >
      {children}
    </button>
  );

  return buttonComponent;
}

CleanButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default CleanButton;
