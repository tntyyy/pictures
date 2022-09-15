import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import Container from "components/Container/Container";
import CollectionsPreviewList from "components/CollectionsPreviewList/CollectionsPreviewList";
import {ICollection} from "../../types/collections";

const mockCollections: ICollection[] = [
    {id: 1, title: 'Anime', description: 'fsdgsd'},
    {id: 2, title: 'Natural', description: 'fsdgsd'},
    {id: 3, title: 'Animals', description: 'fsdgsd'}
]

const MainPage: FC = () => {
  return (
      <main className={styles.main}>
        <Container>
            <CollectionsPreviewList items={mockCollections}/>
        </Container>
      </main>
  );
};

export default MainPage;
