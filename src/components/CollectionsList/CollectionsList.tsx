import React, { FC } from 'react';
import styles from './CollectionsList.module.scss';
import {ICollection} from "../../types/collections";
import CollectionItem from "../CollectionItem/CollectionItem";

interface CollectionsListProps {
    items: ICollection[];
}

const CollectionsList: FC<CollectionsListProps> = ({items}) => {
  return (
      <div className={styles.wrapper}>
          {items.map(item =>
              <CollectionItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
              />
          )}
      </div>
  );
};

export default CollectionsList;
