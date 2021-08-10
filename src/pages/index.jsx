/* eslint-disable react/prop-types */
import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

import Hero from '../components/Hero';
import HomePageSection from '../components/HomePageSection';

const IndexPage = ({ data }) => {
  const { develop, manage, research } = data;

  const filterGroup = (grp, fltr) => {
    const filtered = grp.group.filter((edge) =>
      edge.nodes[0] ? edge.nodes[0].frontmatter.type === fltr : []
    );
    if (filtered.length > 0) return filtered[0].nodes;
    return filtered;
  };

  return (
    <Layout>
      <Hero />
      <button className="button" type="button">
        Contact us
      </button>
      <HomePageSection
        sectionId="for-developers"
        featuredArticles={filterGroup(develop, 'Article')}
        featuredTutorials={filterGroup(develop, 'Tutorial')}
        featuredDiscussions={filterGroup(develop, 'Discussion')}
        title="Grow as a developer"
        targetGroup="develop"
      />
      <HomePageSection
        sectionId="for-managers"
        featuredArticles={filterGroup(manage, 'Article')}
        featuredTutorials={filterGroup(manage, 'Tutorial')}
        featuredDiscussions={filterGroup(manage, 'Discussion')}
        title="Work better with developers"
        targetGroup="manage"
      />
      <HomePageSection
        sectionId="for-researchers"
        featuredArticles={filterGroup(research, 'Article')}
        featuredTutorials={filterGroup(research, 'Tutorial')}
        featuredDiscussions={filterGroup(research, 'Discussion')}
        title="Research developer experience"
        targetGroup="research"
      />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    develop: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "develop" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      group(field: frontmatter___type, limit: 10) {
        nodes {
          frontmatter {
            author
            authorCredentials
            authorImage {
              childImageSharp {
                gatsbyImageData(width: 32, height: 32)
              }
            }
            authorUrl
            date(formatString: "DD MMM, YY")
            description
            imageAlt
            readingTime
            slug
            tags
            title
            type
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 300, height: 130)
              }
            }
          }
        }
      }
    }
    manage: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "manage" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      group(field: frontmatter___type, limit: 3) {
        nodes {
          frontmatter {
            author
            authorCredentials
            authorImage {
              childImageSharp {
                gatsbyImageData(width: 32, height: 32)
              }
            }
            authorUrl
            date(formatString: "DD MMM, YY")
            description
            imageAlt
            readingTime
            slug
            tags
            title
            type
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 300, height: 130)
              }
            }
          }
        }
      }
    }
    research: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: "research" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      group(field: frontmatter___type, limit: 3) {
        nodes {
          frontmatter {
            author
            authorCredentials
            authorImage {
              childImageSharp {
                gatsbyImageData(width: 32, height: 32)
              }
            }
            authorUrl
            date(formatString: "DD MMM, YY")
            description
            imageAlt
            readingTime
            slug
            tags
            title
            type
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 300, height: 130)
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
