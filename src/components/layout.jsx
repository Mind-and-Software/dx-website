import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export default function Layout({ children }) {
  return (
    <div style={{
      margin: '0 auto', maxWidth: 650, padding: '0 1rem', backgroundColor: 'lightgray',
    }}
    >
      <nav>
        <Link to="/">Index</Link>
        {' '}
        <Link to="/docs/test-article">Markdown Test</Link>
      </nav>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
