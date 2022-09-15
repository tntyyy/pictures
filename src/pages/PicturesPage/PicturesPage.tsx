import React, { FC } from 'react';
import styles from './PicturesPage.module.scss';
import {IPicture} from "../../types/pictures";
import Container from "../../components/Container/Container";
import Title from "../../components/Titile/Title";
import PicturesList from "../../components/PicturesList/PicturesList";

const mockPictures: IPicture[] = [
  {id: 1, title: 'Lorem', path: 'https://stockmeier-food.ru/uploads/posts/2021-11/medium/1637312162_aromatizator-vanil.jpg', collection_id: 1},
  {id: 2, title: 'Lorem', path: 'https://stockmeier-food.ru/uploads/posts/2021-11/medium/1637312162_aromatizator-vanil.jpg', collection_id: 1},
  {id: 3, title: 'Lorem', path: 'https://stockmeier-food.ru/uploads/posts/2021-11/medium/1637312162_aromatizator-vanil.jpg', collection_id: 1}
];

const PicturesPage: FC = () => {

  return (
      <main className={styles.main}>
        <Container>
          <div className={styles.wrapper}>
            <Title>Все картинки</Title>
            <PicturesList items={mockPictures}/>
          </div>
        </Container>
      </main>
  );
};

export default PicturesPage;
