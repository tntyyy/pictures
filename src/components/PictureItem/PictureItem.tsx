import React, { FC } from 'react';
import styles from './PictureItem.module.scss';
import {IPicture} from "../../types/pictures";
import {Link} from "react-router-dom";


const PictureItem: FC<IPicture> = ({id, title, path, collection_id}) => {
  return (
      <Link
          to="/pictures"
          className={styles.item}
      >
          <img src={path} alt={title}/>
          <p>{title}</p>
      </Link>
  );
};

export default PictureItem;
