import React, { FC } from 'react';
import styles from './Header.module.scss';
import Container from "components/Container/Container";
import Logo from "components/Logo/Logo";
import Search from "components/Search/Search";
import ButtonLink from "components/ButtonLink/ButtonLink";

const Header: FC = () => {
  return (
      <header className={styles.header}>
        <Container>
            <div className={styles.header__wrapper}>
                <Logo />
                <Search />
                <nav>
                    <ButtonLink type="stroked" path="/collections">Коллекции</ButtonLink>
                    <ButtonLink type="stroked" path="/pictures">Картинки</ButtonLink>
                </nav>
                <ButtonLink type="filled" path="/create">Создать</ButtonLink>
            </div>
        </Container>
      </header>
  );
};

export default Header;
