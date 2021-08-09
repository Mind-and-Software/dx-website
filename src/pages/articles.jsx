/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import ArticlePreviewList from '../components/ArticlePreviewList';
import Pager from '../components/Pager';

import utils from '../utils';

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
    const newSelectedTags = utils.getNewTagArray(tagValue, selectedTags);
    setSelectedTags([...newSelectedTags]);
  };

  const handlePageChange = (nextPageNum) => {
    setCurrentPage(nextPageNum);
    navigate(`/articles?page=${nextPageNum || currentPage}`);
  };

  const filteredArticles = utils.filterItems(
    articleEdges,
    searchValue,
    selectedTags
  );

  const currentPageArticles = utils.getItemsForPage(
    currentPage,
    itemsPerPage,
    filteredArticles,
    handlePageChange,
    false
  );

  // Array of the page numbers required for the pager component
  const pageArray = utils.getPages(filteredArticles, itemsPerPage);

  return (
    <div className={contentPage}>
      <HeaderSearchArea
        title="Articles on Developer Experience"
        description="Thoughts and experiences from experienced practicioners in the field"
        searchPlaceholder="Search Articles"
        searchValue={searchValue}
        selectedTags={selectedTags}
        tags={[
          {
            name: 'ALL',
          },
          {
            name: 'DEVELOP',
          },
          {
            name: 'MANAGE',
          },
          {
            name: 'RESEARCH',
          },
        ]}
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
          pages={pageArray}
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
