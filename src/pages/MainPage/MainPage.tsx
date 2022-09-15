import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import Container from "components/Container/Container";
import CollectionsPreviewList from "components/CollectionsPreviewList/CollectionsPreviewList";
import {ICollection} from "types/collections";
import {IPicture} from "types/pictures";
import PicturesPreviewList from "components/PicturesPreviewList/PicturesPreviewList";

const mockCollections: ICollection[] = [
    {id: 1, title: 'Anime', description: 'fsdgsd'},
    {id: 2, title: 'Natural', description: 'fsdgsd'},
    {id: 3, title: 'Animals', description: 'fsdgsd'}
];

const mockPictures: IPicture[] = [
    {id: 1, title: 'Lorem', path: 'https://stockmeier-food.ru/uploads/posts/2021-11/medium/1637312162_aromatizator-vanil.jpg', collection_id: 1},
    {id: 2, title: 'Lorem', path: 'https://stockmeier-food.ru/uploads/posts/2021-11/medium/1637312162_aromatizator-vanil.jpg', collection_id: 1},
    {id: 3, title: 'Lorem', path: 'https://stockmeier-food.ru/uploads/posts/2021-11/medium/1637312162_aromatizator-vanil.jpg', collection_id: 1}
];

const MainPage: FC = () => {
  return (
      <main className={styles.main}>
        <Container>
            <CollectionsPreviewList items={mockCollections}/>
            <PicturesPreviewList items={mockPictures}/>
        </Container>
      </main>
  );
};

export default MainPage;
