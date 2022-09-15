import React, { FC } from 'react';
import styles from './PicturesPreviewList.module.scss';
import {IPicture} from "types/pictures";
import Title from "../Titile/Title";
import ButtonLink from "../ButtonLink/ButtonLink";
import PictureItem from "../PictureItem/PictureItem";

interface PicturesPreviewListProps {
    items: IPicture[];
}

const PicturesPreviewList: FC<PicturesPreviewListProps> = ({items}) => {
  return (
      <div className={styles.list}>
          <Title>Последние картинки</Title>
          <div className={styles.wrapper}>
              {items.map(item =>
                <PictureItem
                    key={item.id}
                    id={item.id}
                    path={item.path}
                    title={item.title}
                    collection_id={item.collection_id}
                />
              )}
          </div>
          <div className={styles.btnWrapper}>
              <ButtonLink path="/pictures" type="filled">Показать все</ButtonLink>
          </div>
      </div>
  );
};

export default PicturesPreviewList;
