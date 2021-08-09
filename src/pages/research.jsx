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
  articlesAndPager,
  contentSection,
  column,
  middleColumn,
  hiddenColumn,
  searchArea,
} from '../styles/researchPage.module.scss';

import utils from '../utils';

const ResearchItemsContainer = ({
  researchTopicsEdges,
  researchInstrumentEdges,
  initCurrentPage,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState(['ALL']);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);

  useEffect(() => {
    setCurrentPage(initCurrentPage);
  }, [initCurrentPage]);

  const itemsPerPage = 6;

  const handleSearchValueChange = (event) => setSearchValue(event.target.value);

  const handleTagToggle = (tagValue) => {
    const newSelectedTags = utils.getNewTagArray(tagValue, selectedTags);
    setSelectedTags([...newSelectedTags]);
  };

  const handlePageChange = (nextPageNum) => {
    setCurrentPage(nextPageNum);
    navigate(`/research?page=${nextPageNum || currentPage}`);
  };

  const filteredArticles = utils.filterItems(
    researchTopicsEdges,
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
        tags={[
          {
            name: 'ALL',
          },
          {
            name: 'SYNOPSIS',
            isWide: true,
          },
          {
            name: 'OPEN QUESTION',
            isWide: true,
          },
          {
            name: 'CASE STUDY',
            isWide: true,
          },
        ]}
        handleTagToggle={handleTagToggle}
        handleSearchChange={handleSearchValueChange}
        className={searchArea}
      />
      <div className={contentSection}>
        <div className={articlesAndPager}>
          <div className={researchTopics}>
            <PreviewColumn
              columnPreviewData={firstColumnData}
              header="Research topics"
              className={firstColumnData.length === 0 ? hiddenColumn : column}
            />
            <PreviewColumn
              columnPreviewData={secondColumnData}
              header="Hidden"
              className={
                secondColumnData.length === 0
                  ? `${hiddenColumn} ${middleColumn}`
                  : middleColumn
              }
            />
          </div>
          {currentPageArticles.length === 0 && <p>No articles found</p>}
          <div className={pager}>
            <Pager
              pages={pageArray}
              currentPage={currentPage}
              handleClick={handlePageChange}
            />
          </div>
        </div>
        <PreviewColumn
          columnPreviewData={researchInstrumentEdges.slice(0, 3)}
          header="Research instruments"
        />
      </div>
    </div>
  );
};

const ResearchPage = ({ data, location }) => {
  const params = new URLSearchParams(location.search.slice(1));

  const getCurrentPage = () => Number(params.get('page')) || 1;

  return (
    <Layout>
      <ResearchItemsContainer
        researchTopicsEdges={data.researchTopics.edges}
        researchInstrumentEdges={data.researchInstruments.edges}
        initCurrentPage={getCurrentPage()}
      />
    </Layout>
  );
};

export default ResearchPage;

export const imageQuery = graphql`
  query {
    researchTopics: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "Research topic" } } }
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
    researchInstruments: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "Research instrument" } } }
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
