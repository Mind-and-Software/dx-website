import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import Tag from './Tag';

import { headerSearchArea } from '../styles/headerSearchArea.module.scss';

const HeaderSearchArea = ({ title, description, searchPlaceholder }) => (
  <div className={headerSearchArea}>
    <h1>{title}</h1>
    <span aria-label="Description of the page">{description}</span>
    <SearchBar placeholder={searchPlaceholder} />
    <ul>
      <li>
        <Tag type="toggle">ALL</Tag>
      </li>
      <li>
        <Tag type="toggle">DEVELOP</Tag>
      </li>
      <li>
        <Tag type="toggle">MANAGE</Tag>
      </li>
      <li>
        <Tag type="toggle">RESEARCH</Tag>
      </li>
    </ul>
  </div>
);

HeaderSearchArea.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
};

export default HeaderSearchArea;
