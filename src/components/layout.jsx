import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import 'normalize.css';
import '../styles/globals/global-styles.scss';
import { layout } from '../styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={layout}>
      <nav>
        <Link to="/">Index</Link>{' '}
        <Link to="/docs/test-article">Markdown Test</Link>
      </nav>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
