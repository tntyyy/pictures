import React, { FC } from 'react';

import {ICollection} from "types/collections";

import Title from "components/Titile/Title";
import ButtonLink from "components/ButtonLink/ButtonLink";

import styles from './CollectionsPreviewList.module.scss';
import {Link} from "react-router-dom";

interface CollectionsPreviewListProps {
    items: ICollection[];
}

const CollectionsPreviewList: FC<CollectionsPreviewListProps> = ({items}) => {
  return (
    <div className={styles.list}>
        <Title>Последние коллекции</Title>
        <div className={styles.wrapper}>
            {items.map(item =>
                <Link
                    to="/collections"
                    key={item.id}
                    className={styles.item}
                >
                    <p>{item.title}</p>
                </Link>
            )}
        </div>
        <div className={styles.btnWrapper}>
            <ButtonLink path="/collections" type="filled">Показать все</ButtonLink>
        </div>
    </div>
  );
};

export default CollectionsPreviewList;
