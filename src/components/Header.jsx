import React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Navbar from '../components/Navbar';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header aria-label="Header" role="banner">
      <Helmet>
        <html lang="en" />
        <meta charSet="UTF-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content="Website about developer experience" />
      </Helmet>
      <Navbar />
    </header>
  );
};

export default Header;
