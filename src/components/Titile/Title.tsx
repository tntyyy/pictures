import React, { FC } from 'react';
import styles from './Title.module.scss';

interface TitleProps {
    children: React.ReactNode
}

const Title: FC<TitleProps> = (props) => {
  return (
      <h3 className={styles.title}>{props.children}</h3>
  );
};

export default Title;
