import React, { FC } from 'react';
import styles from './Header.module.scss';
import Container from "components/Container/Container";

const Header: FC = () => {
  return (
      <header className={styles.header}>
        <Container>
            <div className={styles.header__wrapper}>
                <h1></h1>
            </div>
        </Container>
      </header>
  );
};

export default Header;
