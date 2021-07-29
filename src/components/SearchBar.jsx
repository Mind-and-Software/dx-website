import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ placeholder }) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        name="search-bar"
        value={currentValue}
        onChange={handleChange}
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
};

export default SearchBar;
