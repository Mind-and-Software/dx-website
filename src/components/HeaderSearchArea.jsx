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
  className,
}) => {
  const isTagSelected = (tagName) => selectedTags.includes(tagName);

  return (
    <div className={`${headerSearchArea} ${className}`}>
      <h1>{title}</h1>
      <span aria-label="Description of the page">{description}</span>
      <SearchBar
        placeholder={searchPlaceholder}
        handleChange={handleSearchChange}
        currentValue={searchValue}
      />
      <ul>
        {tags.map((tag) => (
          <li key={tag.name}>
            <Tag
              type="toggle"
              handleToggle={handleTagToggle}
              isActive={isTagSelected(tag.name)}
              wide={tag.isWide}
            >
              {tag.name}
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderSearchArea.defaultProps = {
  className: '',
};

HeaderSearchArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleTagToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default HeaderSearchArea;
