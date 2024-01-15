'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { useTranslations } from 'next-intl';

import styles from './submitButton.module.css';

function SubmitButton() {
  const translation = useTranslations('Contact');
  const { pending } = useFormStatus();

  return (
    <button
      className={styles.button}
      type="submit"
      aria-disabled={pending}
      aria-label="submit"
    >
      {translation('submit')}
    </button>
  );
}

export default SubmitButton;
