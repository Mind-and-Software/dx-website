import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Tag from './Tag';

import { headerSearchArea } from '../styles/headerSearchArea.module.scss';

const HeaderSearchArea = ({
  title,
  description,
  searchPlaceholder,
  handleSearchChange,
  handleTagToggle,
}) => (
  <div className={headerSearchArea}>
    <h1>{title}</h1>
    <span aria-label="Description of the page">{description}</span>
    <SearchBar
      placeholder={searchPlaceholder}
      handleChange={handleSearchChange}
    />
    <ul>
      <li>
        <Tag type="toggle" handleToggle={handleTagToggle} isActiveAtStart>
          ALL
        </Tag>
      </li>
      <li>
        <Tag type="toggle" handleToggle={handleTagToggle}>
          DEVELOP
        </Tag>
      </li>
      <li>
        <Tag type="toggle" handleToggle={handleTagToggle}>
          MANAGE
        </Tag>
      </li>
      <li>
        <Tag type="toggle" handleToggle={handleTagToggle}>
          RESEARCH
        </Tag>
      </li>
    </ul>
  </div>
);

HeaderSearchArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleTagToggle: PropTypes.func.isRequired,
};

export default HeaderSearchArea;
