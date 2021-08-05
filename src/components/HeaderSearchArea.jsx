import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';

import SearchBar from './SearchBar';
import Tag from './Tag';

import { headerSearchArea, searchSection, searchBarSection } from '../styles/headerSearchArea.module.scss';

const HeaderSearchArea = ({
  title,
  description,
  searchPlaceholder,
  initialSearchValue,
  initialTags,
  baseUrl,
}) => {
  const [ searchValue, setSearchValue ] = useState(initialSearchValue);
  const [ selectedTags, setSelectedTags ] = useState(initialTags);

  const handleSearchChange = (event) => setSearchValue(event.target.value);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    navigate(
      `/${baseUrl}?search=${searchValue}${selectedTags
        .map((tag) => `&${tag}=true`)
        .join('')}`
    );
  };

  const handleTagToggle = (tagValue) => {
    const newSelectedTags = selectedTags;
    const indexOfTag = newSelectedTags.indexOf(tagValue);
    if (indexOfTag > -1) {
      newSelectedTags.splice(indexOfTag, 1);
    } else {
      newSelectedTags.push(tagValue);
    }
    setSelectedTags([...newSelectedTags]);
    handleSubmit()
  };

  const isTagSelected = (tag) => selectedTags.includes(tag) 

  return (
    <div className={headerSearchArea}>
      <h1>{title}</h1>
      <span aria-label="Description of the page">{description}</span>
      <form
        className={searchSection}
        aria-label="Search the page"
        role="search"
        onSubmit={handleSubmit}
      >
        <div className={searchBarSection}>
          <SearchBar
            placeholder={searchPlaceholder}
            handleChange={handleSearchChange}
            currentValue={searchValue}
          />
          <button type="submit">Go</button>
        </div>
        <ul>
          <li>
            <Tag
              type="toggle"
              handleToggle={handleTagToggle}
              isActiveAtStart={isTagSelected('ALL')}
            >
              ALL
            </Tag>
          </li>
          <li>
            <Tag
              type="toggle"
              handleToggle={handleTagToggle}
              isActiveAtStart={isTagSelected('DEVELOP')}
            >
              DEVELOP
            </Tag>
          </li>
          <li>
            <Tag
              type="toggle"
              handleToggle={handleTagToggle}
              isActiveAtStart={isTagSelected('MANAGE')}
            >
              MANAGE
            </Tag>
          </li>
          <li>
            <Tag
              type="toggle"
              handleToggle={handleTagToggle}
              isActiveAtStart={isTagSelected('RESEARCH')}
            >
              RESEARCH
            </Tag>
          </li>
        </ul>
      </form>
    </div>
  );
};

HeaderSearchArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
  initialSearchValue: PropTypes.string.isRequired,
  initialTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  baseUrl: PropTypes.string.isRequired,
};

export default HeaderSearchArea;
