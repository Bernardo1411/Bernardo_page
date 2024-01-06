'use client';

import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Title from '../title/title';
import CleanButton from '../cleanButton/CleanButton';

import styles from './card.module.css';

function Card(props) {
  const {
    title, image, techs, description, link, style = {},
  } = props;

  const handleMouseMove = (e) => {
    const { currentTarget } = e;

    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    currentTarget.style.setProperty('--mouse-x', `${x}px`);
    currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <CleanButton onClick={() => window.open(`https://github.com/Bernardo1411/${link}/blob/master/README.md`)} name={link}>
      <div className={styles.card_container} style={style} onMouseMove={(e) => handleMouseMove(e)}>
        <div className={styles.div_image}>
          <Image
            fill
            src={`/images/${image}.webp`}
            style={{ borderRadius: '10px', objectFit: 'cover' }}
            alt={image}
            sizes="210px"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAVSURBVHgBY+zu7v7PAAVMDEgAhQMAX74CpgpXNjAAAAAASUVORK5CYII="
          />
        </div>
        <div className={styles.card_right}>
          <Title style={{ fontSize: '1.2rem' }}>{title}</Title>
          <p className={styles.p}>
            {description}
          </p>
          <p className={styles.hyperLink}>
            See more...
          </p>
          <div>
            {techs && techs.length > 0 && techs.map((tech) => (
              <Image
                width={26}
                height={26}
                key={tech}
                style={{ marginRight: '11px' }}
                src={`/images/${tech}.svg`}
                alt={tech}
              />
            ))}
          </div>
        </div>
      </div>
    </CleanButton>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

export default Card;
