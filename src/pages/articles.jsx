/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@gatsbyjs/reach-router';

import Layout from '../components/layout';
import ContentPageItems from '../components/ContentPageItems';

const ArticlesPage = ({ data, location }) => {
  const articleEdges = data.allMarkdownRemark.edges;

  const params = new URLSearchParams(location.search.slice(1));
  let currentPage = Number(params.get('page')) || 1;

  if (!currentPage) {
    currentPage = 1;
    navigate(`/articles?page=${currentPage}`);
  }

  return (
    <Layout>
      <ContentPageItems
        title="Articles on Developer Experience"
        description="Thoughts and experiences from experienced practicioners in the field"
        type="Articles"
        itemEdges={articleEdges}
        initCurrentPage={currentPage}
      />
    </Layout>
  );
};

export default ArticlesPage;

export const imageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "Article" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            author
            blurb
            date(formatString: "DD MMM, YY")
            tags
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 384, height: 184)
              }
            }
            readingTime
            imageAlt
          }
        }
      }
    }
  }
`;
