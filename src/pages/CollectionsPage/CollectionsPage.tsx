import React, {FC, useEffect} from 'react';
import styles from './CollectionsPage.module.scss';
import Container from "components/Container/Container";
import CollectionsList from "components/CollectionsList/CollectionsList";
import Title from "components/Titile/Title";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import Spinner from "components/Spinner/Spinner";

const CollectionsPage: FC = () => {

    const {collections, loading, error} = useTypedSelector(state => state.collections);
    const {getCollections} = useActions();

    useEffect(() => {
        getCollections();
    }, []);

    if (loading) {
        return (<Spinner/>)
    }


    if (error) {
        return (<h1>Произошла ошибка</h1>)
    }

  return (
      <main className={styles.main}>
        <Container>
          <div className={styles.wrapper}>
            <Title>Все коллекции</Title>
            <CollectionsList items={collections}/>
          </div>
        </Container>
      </main>
  );
};

export default CollectionsPage;
