import React, { FC } from 'react';
import logoImage from 'assets/icons/logo.svg';
import {Link} from "react-router-dom";

const Logo: FC = () => {
  return (
      <Link to="/">
        <img src={logoImage} alt="Logotype"/>
      </Link>
  );
};

export default Logo;
