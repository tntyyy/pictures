import React, { FC } from 'react';
import styles from './OneCollectionPage.module.scss';
import Container from "../../components/Container/Container";
import Title from "../../components/Titile/Title";

const OneCollectionPage: FC = () => {
  return (
      <main className={styles.main}>
          <Container>
              <div className={styles.wrapper}>
                  <Title>Обезьяна нах</Title>
              </div>
          </Container>
      </main>
  );
};

export default OneCollectionPage;
