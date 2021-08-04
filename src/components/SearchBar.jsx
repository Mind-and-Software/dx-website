import React, { useState, useRef } from 'react';
import { navigate } from '@reach/router';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder, handleChange, initialQuery }) => {
  const [currentValue, setCurrentValue] = useState(initialQuery);

  const inputElement = useRef(null);

  const handleInputChange = (event) => {
    setCurrentValue(event.target.value);
    if (handleChange) handleChange(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = inputElement.current.value;
    navigate(`/articles?q=${searchValue}`);
  };

  return (
    <form
      className="input-container"
      aria-label="Search the page"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        ref={inputElement}
        name="search-bar"
        value={currentValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <button type="submit">Go</button>
    </form>
  );
};

SearchBar.defaultProps = {
  placeholder: '',
  handleChange: null,
  initialQuery: '',
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  initialQuery: PropTypes.string,
};

export default SearchBar;
