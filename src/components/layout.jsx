import React from 'react';
import PropTypes from 'prop-types';

import '@fontsource/rubik';
import 'normalize.css';

import Header from './Header';
import Footer from './Footer';

import '../styles/globals/global-styles.scss';
import { layout } from '../styles/layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={layout}>
      <Header />
      <main aria-label="Main Content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
