/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import ArticlePreviewList from '../components/ArticlePreviewList';
import Pager from '../components/Pager';

import {
  articlesPage,
  articleList,
  linkArrow,
} from '../styles/articlesPage.module.scss';

const ArticlesPage = ({ data, location }) => {
  const articleEdges = data.allMarkdownRemark.edges;
  console.log(data, location);

  const allTags = ['ALL', 'DEVELOP', 'MANAGE', 'RESEARCH'];

  const params = new URLSearchParams(location.search.slice(1));
  const getSearchValue = () => params.get('search') || '';
  const getSelectedTags = () => {
    const result = [];
    allTags.forEach((tag) => {
      if (params.get(tag)) {
        result.push(tag);
      }
    });
    return result;
  };

  const searchValue = getSearchValue()
  const selectedTags = getSelectedTags()

  const filterBySearch = (article) =>
    article.node.frontmatter.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());

  const filterByTags = (article) => {
    if (selectedTags.includes('ALL')) {
      return true;
    }
    return article.node.frontmatter.tags.some((tag) =>
      selectedTags.includes(tag.toUpperCase())
    );
  };

  const filteredArticles = articleEdges.filter(
    (article) => filterBySearch(article) && filterByTags(article)
  );

  // Forms an array of the page numbers required for the pager component
  const getPages = () => {
    const pageAmount = Math.ceil(filteredArticles.length / 9);
    return Array.from({ length: pageAmount }, (x, i) => i);
  };

  return (
    <Layout>
      <div className={articlesPage}>
        <HeaderSearchArea
          title="Articles on Developer Experience"
          description="Thoughts and experiences from experienced practicioners in the field"
          searchPlaceholder="Search Articles"
          initialSearchValue={getSearchValue()}
          initialTags={getSelectedTags()}
          baseUrl="articles"
        />
        <div className={articleList}>
          <ArticlePreviewList
            previewData={filteredArticles}
            authorImageEdges={data.authorImages.edges}
          />
        </div>
        <div className={linkArrow}>
          <Pager pages={getPages()} currentPage={1} />
        </div>
      </div>
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
          frontmatter {
            author
            blurb
            date
            slug
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
