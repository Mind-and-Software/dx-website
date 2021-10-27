/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import Pager from '../components/Pager';
import ArticlePreview from '../components/ArticlePreview';
import ArticlePreviewList from '../components/ArticlePreviewList';

import { contentPage, pager } from '../styles/contentPage.module.scss';

import {
  instrumentSection,
  topicsMenuHeader,
  instruments,
  searchArea,
  hidden,
  accordionMenu,
  accordionMenuActive,
  menuLogo,
} from '../styles/researchPage.module.scss';

import utils from '../utils';

const ResearchInstrumentList = ({ instrumentData }) => (
  <ul className={instruments} aria-label="List of research instruments">
    {instrumentData.map((edge) => (
      <li key={edge.node.fields.slug}>
        <ArticlePreview
          title={edge.node.frontmatter.title}
          imageAlt={edge.node.frontmatter.imageAlt}
          previewImage={edge.node.frontmatter.featuredImage}
          articleUrl={edge.node.fields.slug}
        />
      </li>
    ))}
  </ul>
);

const Plus = () => (
  <div className={menuLogo} aria-hidden="true">
    +
  </div>
);
const Minus = () => (
  <div className={menuLogo} aria-hidden="true">
    -
  </div>
);

const AccordionMenuHeader = ({ children, handleClick, isOpen }) => {
  const [focused, setFocused] = useState(false);
  const buttonRef = useRef(null);
  const onClick = () => {
    handleClick();
    if (focused) {
      setFocused(false);
    }
  };

  return (
    <h2>
      <button
        type="button"
        ref={buttonRef}
        onClick={onClick}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={isOpen || focused ? accordionMenuActive : accordionMenu}
        aria-expanded={isOpen}
      >
        {!isOpen ? <Plus /> : <Minus />}
        <span className="list-header">{children}</span>
      </button>
    </h2>
  );
};

const ResearchItemsContainer = ({
  researchTopicsEdges,
  researchInstrumentEdges,
  initCurrentPage,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTags, setSelectedTags] = useState(['ALL']);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [topicsVisible, toggleTopicsVisibility] = useState(false);
  const [instrumentsVisible, toggleInstrumentsVisibility] = useState(false);

  const showTopics = topicsVisible || windowWidth >= 1280;
  const showInstruments = instrumentsVisible || windowWidth >= 1280;

  useEffect(() => {
    setCurrentPage(initCurrentPage);
    if (!window) return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    if (windowWidth > 1280) {
      toggleTopicsVisibility(false);
      toggleInstrumentsVisibility(false);
    }
  }, [initCurrentPage, windowWidth]);

  const topicsPerPage = 9;

  const handleSearchValueChange = (event) => setSearchValue(event.target.value);

  const handleTagToggle = (tagValue) => {
    const newSelectedTags = utils.getNewTagArray(tagValue, selectedTags);
    setSelectedTags([...newSelectedTags]);
  };

  const handlePageChange = (nextPageNum) => {
    setCurrentPage(nextPageNum);
    navigate(`research?page=${nextPageNum || currentPage}`);
  };

  const filteredTopics = utils.filterItems(
    researchTopicsEdges,
    searchValue,
    selectedTags
  );

  const currentPageTopics = utils.getItemsForPage(
    currentPage,
    topicsPerPage,
    filteredTopics,
    handlePageChange,
    false
  );

  // Array of the page numbers required for the pager component
  const pageArray = utils.getPages(filteredTopics.length, topicsPerPage);

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
      <div className={topicsMenuHeader}>
        {windowWidth >= 1280 ? (
          <h2 className="list-header">RESEARCH TOPICS</h2>
        ) : (
          <AccordionMenuHeader
            handleClick={() => toggleTopicsVisibility(!topicsVisible)}
            isOpen={topicsVisible}
          >
            RESEARCH TOPICS
          </AccordionMenuHeader>
        )}
      </div>
      <div className={showTopics ? '' : hidden}>
        {currentPageTopics.length > 0 ? (
          <ArticlePreviewList previewData={currentPageTopics} type="research" />
        ) : (
          <p>No articles found</p>
        )}
        <div className={pager}>
          <Pager
            pages={pageArray}
            currentPage={currentPage}
            handleClick={handlePageChange}
          />
        </div>
      </div>
      <div className={instrumentSection}>
        {windowWidth >= 1280 ? (
          <h2 className="list-header">RESEARCH INSTRUMENTS</h2>
        ) : (
          <AccordionMenuHeader
            handleClick={() => toggleInstrumentsVisibility(!instrumentsVisible)}
            isOpen={instrumentsVisible}
          >
            RESEARCH INSTRUMENTS
          </AccordionMenuHeader>
        )}

        <div className={showInstruments ? '' : hidden}>
          <ResearchInstrumentList instrumentData={researchInstrumentEdges} />
        </div>
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
