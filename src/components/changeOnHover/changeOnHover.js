import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ChangeOnHover(props) {
  const { firstElement, secondElement, style } = props;

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div
      style={{ ...style }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering
        ? (
          secondElement
        )
        : (
          firstElement
        )}
    </div>
  );
}

ChangeOnHover.defaultProps = {
  style: {},
};

ChangeOnHover.propTypes = {
  firstElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  secondElement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.shape({}),
};

export default ChangeOnHover;
