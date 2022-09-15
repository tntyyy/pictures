import React, { FC } from 'react';
import styles from './CollectionItem.module.scss';
import {Link} from "react-router-dom";
import {ICollection} from "types/collections";


const CollectionItem: FC<ICollection> = ({id, title, description}) => {
  return (
      <Link
          to={`/collections/${id}`}
          className={styles.item}
      >
          <p>{title}</p>
      </Link>
  );
};

export default CollectionItem;
