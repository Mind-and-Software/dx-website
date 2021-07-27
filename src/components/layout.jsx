import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import '@fontsource/rubik';
import LinkWithArrow from './LinkWithArrow';

import 'normalize.css';
import '../styles/globals/global-styles.scss';
import { layout, nav } from '../styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={layout}>
      <header>
        <nav className={nav}>
          <Link to="/">Index</Link>
          <LinkWithArrow to="/docs/test-article">Markdown test</LinkWithArrow>
          <LinkWithArrow to="/docs/test-article" type="secondary">Markdown test</LinkWithArrow>
          <Link to="/docs/test-article">Markdown Test</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
