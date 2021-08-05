import React from 'react';

import { Helmet } from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';

import LinkWithArrow from './LinkWithArrow';

import { nav } from '../styles/header.module.scss';

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
      <nav className={nav} aria-label="Main Navigation" role="navigation">
        <Link to="/">Index</Link>
        <Link to="/articles?ALL=true">Articles</Link>
        <LinkWithArrow to="/docs/test-article">Markdown test</LinkWithArrow>
        <LinkWithArrow to="/docs/test-article" type="secondary">
          Markdown test
        </LinkWithArrow>
        <Link to="/docs/test-article">Markdown Test</Link>
      </nav>
    </header>
  );
};

export default Header;
