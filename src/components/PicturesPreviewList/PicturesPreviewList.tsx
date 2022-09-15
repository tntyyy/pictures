import React, { FC } from 'react';
import styles from './PicturesPreviewList.module.scss';
import {IPicture} from "types/pictures";
import Title from "../Titile/Title";
import {Link} from "react-router-dom";
import ButtonLink from "../ButtonLink/ButtonLink";

interface PicturesPreviewListProps {
    items: IPicture[];
}

const PicturesPreviewList: FC<PicturesPreviewListProps> = ({items}) => {
  return (
      <div className={styles.list}>
          <Title>Последние картинки</Title>
          <div className={styles.wrapper}>
              {items.map(item =>
                  <Link
                      to="/pictures"
                      key={item.id}
                      className={styles.item}
                  >
                      <img src={item.path} alt={item.title}/>
                      <p>{item.title}</p>
                  </Link>
              )}
          </div>
          <div className={styles.btnWrapper}>
              <ButtonLink path="/pictures" type="filled">Показать все</ButtonLink>
          </div>
      </div>
  );
};

export default PicturesPreviewList;
