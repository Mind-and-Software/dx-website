import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';

import {
  headerText,
  headerContainer
} from '../styles/header.module.scss';

const Header = () => (
  <Link
    to={'/'}
    className={headerContainer}
  >
    <Logo/>
    <div className={headerText}>
      {'DXP'}
    </div>
  </Link>
);

export default Header;
