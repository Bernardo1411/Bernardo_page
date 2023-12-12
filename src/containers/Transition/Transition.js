'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

function Transition(props) {
  const { children } = props;

  const { asPath } = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 0 }}
        transition={{
          duration: 1,
        }}
        key={asPath}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

Transition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]).isRequired,
};

export default Transition;
