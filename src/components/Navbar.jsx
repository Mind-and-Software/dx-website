import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import LogoContainer from './LogoContainer';

import HamburgerIcon from '../assets/menu-icon.svg';
import CloseIcon from '../assets/cross.svg';

import {
  hidden,
  menuToggle,
  navbar,
  navbarLink,
  navbarLinkActive,
  navbarLinksContainer,
  navbarTop,
} from '../styles/navBar.module.scss';

const Navbar = () => {
  const [hamburgerMenuOpen, toggleHamburgerMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(undefined);

  const showLinks = hamburgerMenuOpen || windowWidth >= 1280;

  useEffect(() => {
    if (!window) return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    if (windowWidth > 1280) toggleHamburgerMenu(false);
  }, [windowWidth]);

  const toggleMenu = () => toggleHamburgerMenu(!hamburgerMenuOpen);

  return (
    <nav className={navbar}>
      <div className={navbarTop}>
        <LogoContainer />
        <button
          type="button"
          onClick={toggleMenu}
          className={menuToggle}
          aria-label={hamburgerMenuOpen ? 'Close the menu' : 'Open the menu'}
        >
          {hamburgerMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
      <div className={navbarLinksContainer}>
        <ul className={`${navbarLinksContainer} ${showLinks ? '' : hidden}`}>
          <li>
            <Link
              className={navbarLink}
              activeClassName={navbarLinkActive}
              to="/articles"
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
      </div>
    </nav>
  );
};

export default Navbar;
