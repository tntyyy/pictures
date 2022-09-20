import React, { FC } from 'react';
import styles from './Spinner.module.scss';


const Spinner: FC = () => {
  return (
      <div className={styles.spinnerWrapper}>
          <div className={styles.ldsRing}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  );
};

export default Spinner;
