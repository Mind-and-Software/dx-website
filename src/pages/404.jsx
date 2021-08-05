import * as React from 'react';
import { graphql } from 'gatsby';

import RelatedContent from '../components/RelatedContent';

import Layout from '../components/layout';
import { notFoundContainer } from '../styles/404.module.scss';

const NotFoundPage = ({ data }) => (
  <Layout>
    <div className={notFoundContainer}>
      <h1>404 Page not found</h1>
      <p>
        Well that's not a very great developer experience <br />
        Want to see what is? Check out out latest content instead:
      </p>
      <RelatedContent contentList={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            tags
            readingTime
            title
            description
            authorCredentials
            author
            authorUrl
            date(formatString: "DD MMM, YY")
            imageAlt
            authorImage {
              childrenImageSharp {
                gatsbyImageData(width: 30)
              }
            }
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 350, height: 135)
              }
            }
          }
        }
      }
    }
  }
`;

export default NotFoundPage;
