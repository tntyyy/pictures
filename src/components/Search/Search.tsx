import React, { FC } from 'react';
import styles from './Search.module.scss';

import searchImage from 'assets/icons/search.svg';

const Search: FC = () => {
  return (
      <div className={styles.inputWrapper}>
          <img src={searchImage} alt="Search"/>
          <input type="text" placeholder="Введите название картинки или коллекции..."/>
      </div>
  );
};

export default Search;
