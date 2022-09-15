import React, { FC } from 'react';
import styles from './PicturesList.module.scss';
import CollectionItem from "../CollectionItem/CollectionItem";
import {IPicture} from "../../types/pictures";
import PictureItem from "../PictureItem/PictureItem";

interface PicturesListProps {
    items: IPicture[];
}

const PicturesList: FC<PicturesListProps> = ({items}) => {
  return (
      <div className={styles.wrapper}>
          {items.map(item =>
              <PictureItem
                key={item.id}
                id={item.id}
                title={item.title}
                collection_id={item.collection_id}
                path={item.path}
              />
          )}
      </div>
  );
};

export default PicturesList;
