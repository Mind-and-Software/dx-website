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
    <div className={headerText}>DXP</div>
  </Link>
);

export default HeaderLogoContainer;
