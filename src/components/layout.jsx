import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer';
import Header from './Header';

import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import 'normalize.css';

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
