'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

import PageContainer from '../../containers/pageContainer/pageContainer';
import SubmitButton from '../../components/submitButton/submitButton';
import sendEmail from '../../API/actions';
import Transition from '../../containers/Transition/Transition';
import Title from '../../components/title/title';

import styles from './contact.module.css';

function Contact() {
  const formRef = useRef();

  const handleSubmit = async () => {
    const formData = new FormData(formRef.current);

    const result = await sendEmail(formData);

    if (result.success) {
      alert('Email sent successfully!');
      formRef.current.reset();
    } else {
      alert('Error sending email!');
    }
  };

  return (
    <Transition>
      <PageContainer>
        <Title style={{ marginBottom: '20px' }}>Contact</Title>
        <div className={styles.container}>
          <div className={styles.div_form}>
            <p>Download curriculum</p>
            <div>
              <Image src="/images/download_file.svg" width={100} height={100} />
              <Image src="/images/download_file.svg" width={100} height={100} />
            </div>
          </div>
          <div className={styles.div_form}>
            <p style={{ marginBottom: '20px' }}>Send me a message</p>
            <form ref={formRef} action={handleSubmit} className={styles.form}>
              <input className={styles.input} type="email" name="email" placeholder="E-mail" required />
              <input className={styles.input} type="text" name="title" placeholder="Title" required />
              <textarea className={`${styles.input} ${styles.textarea}`} type="text" name="message" placeholder="Insert message..." required />
              <SubmitButton />
            </form>
          </div>
        </div>
      </PageContainer>
    </Transition>
  );
}

export default Contact;
