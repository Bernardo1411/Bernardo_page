'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';

import RingLoader from 'react-spinners/RingLoader';
import PageContainer from '../../../containers/pageContainer/pageContainer';
import SubmitButton from '../../../components/submitButton/submitButton';
import sendEmail from '../../../API/actions';
import Transition from '../../../containers/Transition/Transition';
import Title from '../../../components/title/title';
import CleanButton from '../../../components/cleanButton/CleanButton';
import Toast from '../../../components/toastfy/toastfy';

import styles from './contact.module.css';

function Contact() {
  const translation = useTranslations('Contact');

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(formRef.current);

    const result = await sendEmail(formData);

    if (result.success) {
      toast.success(`${translation('emailSentSuccessfully')}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: true,
      });
      formRef.current.reset();

      setIsLoading(false);
    } else {
      toast.error(`${translation('errorSendingEmail')}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 4000,
        hideProgressBar: true,
      });

      setIsLoading(false);
    }
  };

  return (
    <Transition>
      <PageContainer>
        <Toast />
        <Title style={{ marginBottom: '20px' }}>{translation('title')}</Title>
        <div className={styles.container}>
          <div className={styles.div_form}>
            <p style={{ marginBottom: '26px' }}>{translation('checkMyCurriculum')}</p>
            <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '70px' }}>
              <div className={styles.div_image} style={{ marginRight: '50px' }}>
                <CleanButton onClick={() => window.open('https://drive.google.com/file/d/10nNS-o9UYAv56SBgOjfOSUYdifCp9kmL/view?usp=sharing')} name="download_file_english">
                  <Image src="/images/download_file.svg" width={100} height={100} style={{ cursor: 'pointer' }} alt="curriculum english" />
                </CleanButton>
                <p>English</p>
              </div>
              <div className={styles.div_image}>
                <CleanButton onClick={() => window.open('https://drive.google.com/file/d/1HCLfz6gAf27u5g-w1WZkwS4pNArjpNPC/view?usp=sharing')} name="download_file_portuguese">
                  <Image src="/images/download_file.svg" width={100} height={100} style={{ cursor: 'pointer' }} alt="curriculum portuguese" />
                </CleanButton>
                <p>Português</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className={styles.div_social}>
                <Image src="/images/github.svg" width={24} height={24} alt="github" />
                <p className={styles.p_social}>: Bernardo1411</p>
              </div>
              <div className={styles.div_social}>
                <Image src="/images/linkedin.svg" width={24} height={24} alt="linkedin" />
                <p className={styles.p_social}>: bernardo-fonseca-97926811b</p>
              </div>
              <div className={styles.div_social}>
                <Image src="/images/outlook.svg" width={24} height={24} alt="outlook" />
                <p className={styles.p_social}>{translation('findMyEmail')}</p>
              </div>
            </div>
          </div>
          <div className={styles.div_form}>
            <p className={styles.p_send_message}>{translation('sendMeMessage')}</p>
            <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
              <RingLoader
                color="#6B4FC6"
                loading={isLoading}
                cssOverride={{
                  position: 'absolute',
                  zIndex: 5,
                  top: '25%',
                }}
                size={200}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
              <input className={styles.input} type="email" name="email" placeholder="E-mail" required maxLength="100" />
              <input className={styles.input} type="text" name="title" placeholder={translation('emailTitle')} required maxLength="100" />
              <textarea className={`${styles.input} ${styles.textarea}`} type="text" name="message" placeholder={translation('insertMessage')} required maxLength="8000" />
              <SubmitButton />
            </form>
          </div>
        </div>
      </PageContainer>
    </Transition>
  );
}

export default Contact;
