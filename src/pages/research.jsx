/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import Pager from '../components/Pager';
import PreviewColumn from '../components/PreviewColumn';

import { contentPage, pager } from '../styles/contentPage.module.scss';

import {
  researchTopics,
  contentSection,
  column,
  middleColumn,
  hiddenColumn,
} from '../styles/researchPage.module.scss';

const ResearchItemsContainer = ({
  articleEdges,
  researchEdges,
  initCurrentPage,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);

  useEffect(() => {
    setCurrentPage(initCurrentPage);
  }, [initCurrentPage]);

  const itemsPerPage = 6;

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
    navigate(`/research?page=${nextPageNum || currentPage}`);
  };

  const filterBySearch = (article) =>
    article.node.frontmatter.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());

  const filterByTags = (article) => {
    if (selectedTags.length === 0) {
      return true;
    }
    return article.node.frontmatter.tags.some((tag) =>
      selectedTags.includes(tag.toUpperCase())
    );
  };

  const filteredArticles = articleEdges.filter(
    (article) => filterBySearch(article) && filterByTags(article)
  );

  // Gets articles for the current page, maximum 6 articles per page.
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

  const firstColumnData = currentPageArticles.slice(0, 3);
  const secondColumnData = currentPageArticles.slice(3, 6);

  return (
    <div className={contentPage}>
      <HeaderSearchArea
        title="Research in Developer Experience"
        description="Stay up to date on the latest research in Developer Experience"
        searchPlaceholder="Search research topics"
        searchValue={searchValue}
        selectedTags={selectedTags}
        tags={['SYNOPSIS', 'OPEN QUESTION', 'CASE STUDY']}
        wideTags
        handleTagToggle={handleTagToggle}
        handleSearchChange={handleSearchValueChange}
      />
      <div className={contentSection}>
        <div>
            <div className={researchTopics}>
              <PreviewColumn
                columnPreviewData={firstColumnData}
                header="Research topics"
                className={firstColumnData.length === 0 ? hiddenColumn : column}
              />
              <PreviewColumn
                columnPreviewData={secondColumnData}
                header="Hidden"
                className={secondColumnData.length === 0 ? `${hiddenColumn} ${middleColumn}` : middleColumn}
              />
            </div>
            { currentPageArticles.length === 0 && <p>No articles found</p>}
        </div>
        <PreviewColumn
          columnPreviewData={researchEdges.slice(0, 3)}
          header="Research instruments"
        />
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

const ResearchPage = ({ data, location }) => {
  const articleEdges = data.articles.edges;
  const researchEdges = data.research.edges;

  const params = new URLSearchParams(location.search.slice(1));

  const getCurrentPage = () => Number(params.get('page')) || 1;

  return (
    <Layout>
      <ResearchItemsContainer
        articleEdges={articleEdges}
        researchEdges={researchEdges}
        initCurrentPage={getCurrentPage()}
      />
    </Layout>
  );
};

export default ResearchPage;

export const imageQuery = graphql`
  query {
    articles: allMarkdownRemark(
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
    research: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "Research" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 384, height: 184)
              }
            }
            imageAlt
          }
        }
      }
    }
  }
`;
