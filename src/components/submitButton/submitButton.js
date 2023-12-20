'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

import styles from './submitButton.module.css';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className={styles.button}
      type="submit"
      aria-disabled={pending}
      aria-label="submit"
    >
      Submit
    </button>
  );
}

export default SubmitButton;
