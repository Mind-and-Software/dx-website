import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import '../styles/variables.css';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <nav>
        <Link to="/">Index</Link>
        {' '}
        <Link to="/docs/test-article">Markdown Test</Link>
        {' '}
        <Link to="/formPage">Form Demo</Link>
      </nav>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
