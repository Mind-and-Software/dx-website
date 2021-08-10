/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import Layout from '../components/layout';
import ContentPageItems from '../components/ContentPageItems';

const TutorialsPage = ({ data, location }) => {
  const tutorialEdges = data.allMarkdownRemark.edges;

  const params = new URLSearchParams(location.search.slice(1));
  let currentPage = Number(params.get('page')) || 1;

  if (!currentPage) {
    currentPage = 1;
    navigate(`/tutorials?page=${currentPage}`);
  }

  return (
    <Layout>
      <ContentPageItems
        title="Tutorials on Developer Experience"
        description="Learn about Developer Experience"
        type="Tutorials"
        itemEdges={tutorialEdges}
        initCurrentPage={currentPage}
      />
    </Layout>
  );
};

export default TutorialsPage;

export const imageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "Tutorial" } } }
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
