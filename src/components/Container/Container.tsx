import React, { FC } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: FC<ContainerProps> = (props) => {

  return (
      <div className={styles.container}>
          {props.children}
      </div>
  );
};

export default Container;
