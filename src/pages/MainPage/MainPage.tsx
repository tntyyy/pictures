import React, {FC, useEffect} from 'react';
import styles from './MainPage.module.scss';
import Container from "components/Container/Container";
import CollectionsPreviewList from "components/CollectionsPreviewList/CollectionsPreviewList";
import {ICollection} from "types/collections";
import PicturesPreviewList from "components/PicturesPreviewList/PicturesPreviewList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";

const mockCollections: ICollection[] = [
    {id: 1, title: 'Anime', description: 'fsdgsd'},
    {id: 2, title: 'Natural', description: 'fsdgsd'},
    {id: 3, title: 'Animals', description: 'fsdgsd'}
];

const MainPage: FC = () => {
    const {pictures, error, loading} = useTypedSelector(state => state.pictures);
    const {getPictures} = useActions();

    useEffect(() => {
        getPictures();
    }, []);
  return (
      <main className={styles.main}>
        <Container>
            <div className={styles.wrapper}>
                <CollectionsPreviewList items={mockCollections}/>
                <PicturesPreviewList items={pictures.slice(0, 3)}/>
            </div>
        </Container>
      </main>
  );
};

export default MainPage;
