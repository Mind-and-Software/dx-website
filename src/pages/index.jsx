/* eslint-disable react/prop-types */
import * as React from 'react';
import { graphql } from 'gatsby';

import Blurb from '../components/Blurb';
import Layout from '../components/layout';
import ContactParagraph from '../components/ContactParagraph';
import Pager from '../components/Pager';
import Tag from '../components/Tag';
import SearchBar from '../components/SearchBar';
import ArticlePreviewList from '../components/ArticlePreviewList';

const previewData = [
  {
    title: 'Your first DX survey',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    content: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
  {
    title: 'Why should we care about developer experience (DX)',
    tags: ['Develop'],
    articleUrl: '/docs/test-article',
    readingTime: '5 min',
    previewImageName: 'laptop-code.png',
    authorName: 'Test Author',
    authorCredentials: 'Manager',
  },
  {
    title: 'How developers around the world experience their work',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(),
    authorName: 'Test Author',
    authorCredentials: 'Developer',
    authorImageName: 'woman-phone.png',
  },
];

// markup
const IndexPage = ({ data }) => (
  <Layout>
    <title>DX Website</title>
    <h1>Hello World!</h1>
    <Tag>Hello</Tag>
    <Tag type="link" action="/docs/test-article">
      Link
    </Tag>
    <Tag type="toggle">Toggle</Tag>
    <Blurb>
      <b>TL;DR </b>
      Knowledgeable developers are like royalty that’s hard to please. But
      they’re irreplaceable. Yes, you can substitute employees, but if they’re
      less skilled, you might end up with costly refactoring. If you value the
      experienced team you have, consider working on what’s called the developer
      experience to keep them eager and comfortable.
    </Blurb>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <SearchBar placeholder="Search articles" />
    <ArticlePreviewList
      previewData={previewData}
      previewImageEdges={data.previewImages.edges}
      authorImageEdges={data.authorImages.edges}
    />
    <Pager pages={['a', 'b', 'c', 'd', 'e']} currentPage={2} />
    <ContactParagraph />
  </Layout>
);
export default IndexPage;

// Returns all the images in the directory frontpage
export const imageQuery = graphql`
  query {
    previewImages: allFile(
      filter: {
        extension: { regex: "/jpg|png|jpeg/" }
        relativeDirectory: { eq: "frontpage" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 384, height: 184)
          }
        }
      }
    }
    authorImages: allFile(
      filter: {
        extension: { regex: "/jpg|png|jpeg/" }
        relativeDirectory: { eq: "profilepics" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 40, height: 40)
          }
        }
      }
    }
  }
`;
