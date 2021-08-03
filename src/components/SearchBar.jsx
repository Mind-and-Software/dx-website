import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, handleChange }) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleInputChange = (event) => {
    event.preventDefault();
    setCurrentValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <div className="input-container" aria-label="Search the page" role="search">
      <input
        type="search"
        name="search-bar"
        value={currentValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  placeholder: '',
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
