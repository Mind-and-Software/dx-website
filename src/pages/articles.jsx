/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import ArticlePreviewList from '../components/ArticlePreviewList';
import Pager from '../components/Pager';

import {
  articlesPage,
  articleList,
  pager,
} from '../styles/articlesPage.module.scss';

const ArticleListContainer = ({ articleEdges, initCurrentPage }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState(['ALL']);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);

  const handleSearchValueChange = (event) => setSearchValue(event.target.value);

  const handleTagToggle = (tagValue) => {
    const newSelectedTags = selectedTags;
    const indexOfTag = newSelectedTags.indexOf(tagValue);
    // If the toggled tag is found in the selected tags, remove it from the state, otherwise add it to the state
    if (indexOfTag > -1) {
      newSelectedTags.splice(indexOfTag, 1);
    } else {
      newSelectedTags.push(tagValue);
    }
    setSelectedTags([...newSelectedTags]);
  };

  const handlePageChange = (nextPageNum) => {
    setCurrentPage(nextPageNum);
    navigate(`/articles?page=${nextPageNum || currentPage}`);
  };

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

  // Gets articles for the current page, maximum 9 articles per page.
  const getPageArticles = (pageNumber, move) => {
    const start = (pageNumber - 1) * 9;
    const end = start + 9;
    const articles = filteredArticles.slice(start, end);
    /* 
      If we are not at the first page and the page has no articles, try moving to the previous page,
      until we find a page that has articles or reach the first page.
    */
    if (articles.length === 0 && pageNumber !== 1) {
      getPageArticles(pageNumber - 1, true);
    }
    if (move) {
      handlePageChange(pageNumber);
    }
    return articles;
  };

  // Forms an array of the page numbers required for the pager component
  const getPages = () => {
    const pageAmount = Math.ceil(filteredArticles.length / 9);
    if (pageAmount === 0) return [0];
    return Array.from({ length: pageAmount }, (x, i) => i);
  };

  const currentPageArticles = getPageArticles(currentPage, false);

  return (
    <div className={articlesPage}>
      <HeaderSearchArea
        title="Articles on Developer Experience"
        description="Thoughts and experiences from experienced practicioners in the field"
        searchPlaceholder="Search Articles"
        searchValue={searchValue}
        selectedTags={selectedTags}
        tags={['ALL', 'DEVELOP', 'MANAGE', 'RESEARCH']}
        handleTagToggle={handleTagToggle}
        handleSearchChange={handleSearchValueChange}
      />
      <div className={articleList}>
        {currentPageArticles.length > 0 ? (
          <ArticlePreviewList previewData={currentPageArticles} />
        ) : (
          <p>No articles found</p>
        )}
      </div>
      <div className={pager}>
        <Pager
          pages={getPages()}
          currentPage={currentPage}
          handleClick={handlePageChange}
        />
      </div>
    </div>
  );
};

const ArticlesPage = ({ data, location }) => {
  const articleEdges = data.allMarkdownRemark.edges;

  const params = new URLSearchParams(location.search.slice(1));

  const getCurrentPage = () => Number(params.get('page')) || 1;

  return (
    <Layout>
      <ArticleListContainer
        articleEdges={articleEdges}
        initCurrentPage={getCurrentPage()}
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
          frontmatter {
            author
            blurb
            date(formatString: "DD MMM, YY")
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
  }
`;
