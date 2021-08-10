import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/logo.svg';

import { logoText, logoContainer } from '../styles/logoContainer.module.scss';

const LogoContainer = () => (
  <Link to="/" className={logoContainer}>
    <Logo />
    <span className={logoText} aria-label="Goto home page">
      DevX Lab
    </span>
  </Link>
);

export default LogoContainer;
