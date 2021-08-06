/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import ArticlePreviewList from '../components/ArticlePreviewList';
import Pager from '../components/Pager';

import {
  contentPage,
  contentSection,
  pager,
} from '../styles/contentPage.module.scss';

const ArticleListContainer = ({ articleEdges, initCurrentPage }) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState(['ALL']);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);

  useEffect(() => {
    setCurrentPage(initCurrentPage);
  }, [initCurrentPage]);

  const itemsPerPage = 9;

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
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
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
    const pageAmount = Math.ceil(filteredArticles.length / itemsPerPage);
    if (pageAmount === 0) return [0];
    return Array.from({ length: pageAmount }, (x, i) => i);
  };

  const currentPageArticles = getPageArticles(currentPage, false);

  return (
    <div className={contentPage}>
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
      <div className={contentSection}>
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
  let currentPage = Number(params.get('page')) || 1;

  if (!currentPage) {
    currentPage = 1;
    navigate(`/articles?page=${currentPage}`);
  }

  return (
    <Layout>
      <ArticleListContainer
        articleEdges={articleEdges}
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
