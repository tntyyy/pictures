import React, { FC } from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames';

import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
    path: string;
    type: 'filled' | 'stroked';
    children: React.ReactNode;
}

const ButtonLink: FC<ButtonLinkProps> = ({type, path, children}) => {
  return (
      <Link className={type === 'filled' ? cn(styles.button, styles.filled) : cn(styles.button, styles.stroked) } to={path}>{children}</Link>
  );
};

export default ButtonLink;
