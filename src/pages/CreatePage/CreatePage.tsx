import React, {FC, useState} from 'react';
import cn from 'classnames';
import styles from './CreatePage.module.scss';
import Container from "components/Container/Container";
import Title from "components/Titile/Title";

const CreatePage: FC = () => {
    const [picture, setIsPicture] = useState<boolean>(false);

  return (
      <main className={styles.main}>
          <Container>
              <div className={styles.wrapper}>
                  <Title>Создать</Title>
                  <div className={styles.btnsWrapper}>
                      <button
                          className={picture ? cn(styles.button, styles.filled) : styles.button}
                          onClick={() => setIsPicture(true)}
                      >
                          Картинку
                      </button>
                      <button
                          className={picture ? styles.button : cn(styles.button, styles.filled)}
                          onClick={() => setIsPicture(false)}
                      >
                          Коллекцию
                      </button>
                  </div>
              </div>
          </Container>
      </main>
  );
};

export default CreatePage;
