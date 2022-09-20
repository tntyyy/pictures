import React, {FC, useEffect} from 'react';
import styles from './OneCollectionPage.module.scss';
import Container from "components/Container/Container";
import Title from "components/Titile/Title";
import {useParams} from "react-router-dom";
import PicturesList from "components/PicturesList/PicturesList";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import Spinner from "components/Spinner/Spinner";

const OneCollectionPage: FC = () => {
    const {id} = useParams();

    const {pictures, error, loading} = useTypedSelector(state => state.pictures);
    const {getPicturesByCollection} = useActions();

    useEffect(() => {
        getPicturesByCollection(id);
    }, []);

    if (loading) {
        return (<Spinner />)
    }

    if (error) {
        return (<h1>Произошла ошибка</h1>)
    }

  return (
      <main className={styles.main}>
          <Container>
              <div className={styles.wrapper}>
                  <Title>Коллекция номер: {id}</Title>
                  <PicturesList
                    items={pictures}
                  />
              </div>
          </Container>
      </main>
  );
};

export default OneCollectionPage;
