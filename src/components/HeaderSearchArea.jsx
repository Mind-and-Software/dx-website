import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Tag from './Tag';

import { headerSearchArea } from '../styles/headerSearchArea.module.scss';

const HeaderSearchArea = ({
  title,
  description,
  searchPlaceholder,
  searchValue,
  tags,
  selectedTags,
  handleTagToggle,
  handleSearchChange,
}) => {
  const isTagSelected = (tag) => selectedTags.includes(tag);

  return (
    <div className={headerSearchArea}>
      <h1>{title}</h1>
      <span aria-label="Description of the page">{description}</span>
      <SearchBar
        placeholder={searchPlaceholder}
        handleChange={handleSearchChange}
        currentValue={searchValue}
      />
      <ul>
        {tags.map((tag) => (
          <li>
            <Tag
              type="toggle"
              handleToggle={handleTagToggle}
              isActiveAtStart={isTagSelected(tag)}
            >
              {tag}
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderSearchArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleTagToggle: PropTypes.func.isRequired,
};

export default HeaderSearchArea;