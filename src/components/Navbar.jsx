import React from 'react';
import { Link } from 'gatsby';
import HeaderLogoContainer from './HeaderLogoContainer';

import {
  navbar,
  navbarLink,
  navbarLinkActive,
  navbarLinksContainer,
} from '../styles/navBar.module.scss';

const Navbar = () => (
  <nav className={navbar}>
    <HeaderLogoContainer />
    <ul className={navbarLinksContainer}>
      <li>
        <Link
          className={navbarLink}
          activeClassName={navbarLinkActive}
          to="/tags"
        >
          Articles
        </Link>
      </li>
      <li>
        <Link
          className={navbarLink}
          activeClassName={navbarLinkActive}
          to="/tutorials"
        >
          Tutorials
        </Link>
      </li>
      <li>
        <Link
          className={navbarLink}
          activeClassName={navbarLinkActive}
          to="/research"
        >
          Research
        </Link>
      </li>
      <li>
        <Link
          className={navbarLink}
          activeClassName={navbarLinkActive}
          to="/discussions"
        >
          Discussions
        </Link>
      </li>
      <li>
        <Link
          className={navbarLink}
          activeClassName={navbarLinkActive}
          to="/about"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          className={navbarLink}
          activeClassName={navbarLinkActive}
          to="/sign-in"
        >
          Sign In
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
