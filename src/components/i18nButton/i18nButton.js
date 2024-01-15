import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import CleanButton from '../cleanButton/CleanButton';
import { Link, usePathname } from '../../../navigation';

import styles from './i18nButton.module.css';

function i18nButton(props) {
  const { locale } = props;
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((oldState) => !oldState);
  };

  useEffect(() => {
    if (isMenuOpen) document.body.addEventListener('click', () => setIsMenuOpen(false));

    return () => {
      document.body.removeEventListener('click', () => setIsMenuOpen(false));
    };
  }, []);

  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <CleanButton onClick={toggleMenu} name="i18nButton">
        <Image
          className={styles.toggleButton}
          src="/images/translator.svg"
          alt="translator"
          height={30}
          width={30}
        />
      </CleanButton>
      <ul className={`${styles.ul} ${isMenuOpen ? styles.showMenu : ''}`} onMouseLeave={() => setIsMenuOpen(false)}>
        <li className={styles.li}>
          <Link className={locale === 'en' ? styles.active : ''} href={pathname} locale="en">
            English
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={locale === 'pt' ? styles.active : ''} href={pathname} locale="pt">
            Português
          </Link>
        </li>
      </ul>
    </div>
  );
}

i18nButton.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default i18nButton;
