import React, { FC } from 'react';
import styles from './CollectionsPage.module.scss';
import Container from "components/Container/Container";
import {ICollection} from "types/collections";
import CollectionsList from "components/CollectionsList/CollectionsList";
import Title from "components/Titile/Title";

const mockCollection: ICollection[] = [
    {id: 1, title: 'Anime', description: 'fdsfs'},
    {id: 2, title: 'Anime', description: 'fdsfs'},
    {id: 3, title: 'Anime', description: 'fdsfs'},
    {id: 4, title: 'Anime', description: 'fdsfs'},
    {id: 5, title: 'Anime', description: 'fdsfs'},
    {id: 6, title: 'Anime', description: 'fdsfs'}
];

const CollectionsPage: FC = () => {

  return (
      <main className={styles.main}>
        <Container>
          <div className={styles.wrapper}>
            <Title>Все коллекции</Title>
            <CollectionsList items={mockCollection}/>
          </div>
        </Container>
      </main>
  );
};

export default CollectionsPage;
