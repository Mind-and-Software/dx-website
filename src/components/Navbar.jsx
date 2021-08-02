import React from 'react';
import { Link } from 'gatsby';
import Header from './Header';

import {
  navBarStyle,
  navBarLinks,
  navBarLinksContainer
} from '../styles/navBar.module.scss';

const Navbar = () => (
  <nav className={navBarStyle}>
      <Header/>
      <div className={navBarLinksContainer}>
        <Link className={navBarLinks} to='/articles'>Articles</Link>
        <Link className={navBarLinks} to='/tutorials'>Tutorials</Link>
        <Link className={navBarLinks} to='/research'>Research</Link>
        <Link className={navBarLinks} to='/discussions'>Discussions</Link>
        <Link className={navBarLinks} to='/about'>About</Link>
        <Link className={navBarLinks} to='/sign-in'>Sign In</Link>
      </div>
  </nav>
);

export default Navbar;
