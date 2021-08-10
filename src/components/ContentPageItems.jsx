import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';

import ArticlePreviewList from './ArticlePreviewList';
import HeaderSearchArea from './HeaderSearchArea';
import Pager from './Pager';

import utils from '../utils';

import {
  contentPage,
  contentSection,
  pager,
} from '../styles/contentPage.module.scss';

const ContentPageItems = ({
  title,
  description,
  type,
  itemEdges,
  initCurrentPage,
}) => {
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
    navigate(`/${type.toLowerCase()}?page=${nextPageNum || currentPage}`);
  };

  const filteredItems = utils.filterItems(itemEdges, searchValue, selectedTags);

  const currentPageArticles = utils.getItemsForPage(
    currentPage,
    itemsPerPage,
    filteredItems,
    handlePageChange,
    false
  );

  // Array of the page numbers required for the pager component
  const pageArray = utils.getPages(filteredItems, itemsPerPage);

  return (
    <div className={contentPage}>
      <HeaderSearchArea
        title={title}
        description={description}
        searchPlaceholder={`Search ${type}`}
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
          <ArticlePreviewList
            previewData={currentPageArticles}
            type={type.toLowerCase()}
          />
        ) : (
          <p>No items found</p>
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

ContentPageItems.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  itemEdges: PropTypes.arrayOf(PropTypes.shape).isRequired,
  initCurrentPage: PropTypes.number.isRequired,
};

export default ContentPageItems;
