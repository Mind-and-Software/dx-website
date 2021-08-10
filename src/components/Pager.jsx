import React from 'react';
import PropTypes from 'prop-types';

import LinkArrow from '../assets/linkArrow.svg';

import {
  arrowLeft,
  arrowLinkLeft,
  arrowLinkRight,
  arrowRight,
  pager,
  pagerItem,
  pagerItems,
  pagerItemCurrent,
  linkText,
} from '../styles/pager.module.scss';

const Pager = ({ pages, currentPage, handleClick }) => {
  const lastPage = pages.length;

  const previousLink = (
    <button
      onClick={() => handleClick(currentPage - 1)}
      type="button"
      key="prev"
      aria-label="Goto previous page"
      className={arrowLinkLeft}
    >
      <LinkArrow className={arrowLeft} />
      <span className={linkText}>Previous</span>
    </button>
  );

  const nextLink = (
    <button
      onClick={() => handleClick(currentPage + 1)}
      type="button"
      key="next"
      aria-label="Goto next page"
      className={arrowLinkRight}
    >
      <span className={linkText}>Next</span>
      <LinkArrow className={arrowRight} />
    </button>
  );

  return (
    <nav className={pager} role="navigation" aria-label="Pager">
      {currentPage !== 1 && previousLink}
      <div className={pagerItems}>
        {pages.map((page) => {
          const pageNo = pages.indexOf(page) + 1;
          if (pageNo === currentPage) {
            return (
              <button
                onClick={() => handleClick(currentPage)}
                type="button"
                key={pageNo}
                className={pagerItemCurrent}
                aria-label={`Page ${pageNo}, Current page`}
              >
                {pages.indexOf(page) + 1}
              </button>
            );
          }
          return (
            <button
              onClick={() => handleClick(pageNo)}
              type="button"
              key={pageNo}
              className={pagerItem}
              aria-label={`Goto page ${pageNo} `}
            >
              {pages.indexOf(page) + 1}
            </button>
          );
        })}
      </div>
      {currentPage !== lastPage && nextLink}
    </nav>
  );
};

Pager.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pages: PropTypes.arrayOf(PropTypes.node).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Pager;
