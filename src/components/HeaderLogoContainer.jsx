import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';

import {
  headerText,
  headerContainer,
} from '../styles/headerLogoContainer.module.scss';

const HeaderLogoContainer = () => (
  <Link to="/" className={headerContainer}>
    <Logo />
    <span className={headerText} aria-label="Goto home page">
      DXP
    </span>
  </Link>
);

export default HeaderLogoContainer;
