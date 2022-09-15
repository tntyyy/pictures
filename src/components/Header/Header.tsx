import React, { FC } from 'react';
import styles from './Header.module.scss';
import Container from "components/Container/Container";
import Logo from "components/Logo/Logo";
import Search from "components/Search/Search";

const Header: FC = () => {
  return (
      <header className={styles.header}>
        <Container>
            <div className={styles.header__wrapper}>
                <Logo />
                <Search />
            </div>
        </Container>
      </header>
  );
};

export default Header;
