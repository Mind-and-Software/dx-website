import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

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
} from '../styles/pager.module.scss';

const Pager = ({ pages, currentPage, baseUrl }) => {
  const lastPage = pages.length;

  const previousLink = (
    <Link
      to={`/${baseUrl}/${currentPage - 1}`} // TODO: Fix link later
      key="prev"
      aria-label="Goto previous page"
      className={arrowLinkLeft}
    >
      <LinkArrow className={arrowLeft} />
      Previous
    </Link>
  );

  const nextLink = (
    <Link
      to={`/pages/${currentPage + 1}`} // TODO: Fix link later
      key="next"
      aria-label="Goto next page"
      className={arrowLinkRight}
    >
      Next
      <LinkArrow className={arrowRight} />
    </Link>
  );

  return (
    <nav className={pager} role="navigation" aria-label="Pager">
      {currentPage !== 1 && previousLink}
      <div className={pagerItems}>
        {pages.map((page) => {
          const pageNo = pages.indexOf(page) + 1;
          if (pageNo === currentPage) {
            return (
              <Link
                to="/"
                key={pageNo}
                className={pagerItemCurrent}
                aria-label={`Page ${pageNo}, Current page`}
                aria-selected
              >
                {pages.indexOf(page) + 1}
              </Link>
            );
          }
          return (
            <Link
              to={`/pages/${pageNo}`} // TODO: fix link once we know what the route is
              key={pageNo}
              className={pagerItem}
              aria-label={`Goto page ${pageNo} `}
            >
              {pages.indexOf(page) + 1}
            </Link>
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
};

export default Pager;
