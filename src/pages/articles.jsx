/* eslint-disable react/prop-types */
import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import ArticlePreviewList from '../components/ArticlePreviewList';
import LinkWithArrow from '../components/LinkWithArrow';

import { articlesPage, articleList, linkArrow } from '../styles/articlesPage.module.scss';

const previewData = [
  {
    title: 'Your first DX survey',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
  {
    title: 'Your first DX survey 2',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
  {
    title: 'Your first DX survey 3',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right nowwwsadffffffffdsfdsaffffffffffffsdasdasadsdasadsafsfa`,
  },
  {
    title: 'Your first DX survey 4',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
  {
    title: 'Your first DX survey 5',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
  {
    title: 'Why should we care about developer experience (DX)',
    tags: ['Develop'],
    articleUrl: '/docs/test-article',
    date: new Date(),
    readingTime: '5 min',
    previewImageName: 'laptop-code.png',
    authorName: 'Test Author',
    authorCredentials: 'Manager',
  },
  {
    title: 'How developers around the world experience their work',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2018, 5, 21),
    authorName: 'Test Author',
    authorCredentials: 'Developer',
    authorImageName: 'woman-phone.png',
  },
];


const ArticlesPage = ({data}) => (
  <Layout>
    <div className={articlesPage}>
      <HeaderSearchArea
        title="Articles on Developer Experience"
        description="Thoughts and experiences from experienced practicioners in the field"
        searchPlaceholder="Search Articles"
      />
      <div className={articleList}>
        <ArticlePreviewList 
          previewData={previewData}
          previewImageEdges={data.previewImages.edges}
          authorImageEdges={data.authorImages.edges}
        />
      </div>
      <div className={linkArrow}>
        <LinkWithArrow to="/" type="tertiary">Older</LinkWithArrow>
      </div>
    </div>
  </Layout>
);

export default ArticlesPage;

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
