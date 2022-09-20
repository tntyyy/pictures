import React, {FC, useEffect} from 'react';
import styles from './PicturesPage.module.scss';
import Container from "components/Container/Container";
import Title from "components/Titile/Title";
import PicturesList from "components/PicturesList/PicturesList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";

const PicturesPage: FC = () => {
    const {pictures, loading, error} = useTypedSelector(state => state.pictures);
    const {getPictures} = useActions();

    useEffect(() => {
        getPictures();
    }, []);

    if (loading) {
        return <h1>Загрузка</h1> //todo изменить на спиннер
    }

    if (error) {
        return <h1>Ошибка</h1> //todo изменить на спиннер
    }

  return (
      <main className={styles.main}>
        <Container>
          <div className={styles.wrapper}>
            <Title>Все картинки</Title>
            <PicturesList items={pictures}/>
          </div>
        </Container>
      </main>
  );
};

export default PicturesPage;
