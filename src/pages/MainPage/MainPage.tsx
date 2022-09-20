import React, {FC, useEffect} from 'react';
import styles from './MainPage.module.scss';
import Container from "components/Container/Container";
import CollectionsPreviewList from "components/CollectionsPreviewList/CollectionsPreviewList";
import PicturesPreviewList from "components/PicturesPreviewList/PicturesPreviewList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import Spinner from "components/Spinner/Spinner";

const MainPage: FC = () => {
    const {pictures, error: pictureError, loading: pictureLoading} = useTypedSelector(state => state.pictures);
    const {collections, error: collectionsError, loading: collectionLoading} = useTypedSelector(state => state.collections);
    const {getPictures, getCollections} = useActions();

    useEffect(() => {
        getPictures();
        getCollections();
    }, []);

    if (pictureLoading || collectionLoading) {
        return (<Spinner/>)
    }


    if (pictureError || collectionsError) {
        return (<h1>Произошла ошибка</h1>)
    }

  return (
      <main className={styles.main}>
        <Container>
            <div className={styles.wrapper}>
                <CollectionsPreviewList items={collections.slice(-3).reverse()}/>
                <PicturesPreviewList items={pictures.slice(-3).reverse()}/>
            </div>
        </Container>
      </main>
  );
};

export default MainPage;
