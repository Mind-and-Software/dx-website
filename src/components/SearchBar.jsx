import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, handleChange, currentValue }) => (
  <div className="input-container">
    <input
      aria-label="Search the page"
      type="search"
      name="search-bar"
      value={currentValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </div>
);

SearchBar.defaultProps = {
  placeholder: '',
  handleChange: null,
  currentValue: '',
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  currentValue: PropTypes.string,
};

export default SearchBar;
