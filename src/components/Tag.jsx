import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  tag,
  toggleTag,
  toggleTagActive,
  wideTag,
} from '../styles/tag.module.scss';

const Tag = ({ children, type, action, handleToggle, isActive, wide }) => {
  if (type === 'link') {
    return (
      <Link to={action} className={tag} aria-label={`Goto ${children}`}>
        {children}
      </Link>
    );
  }
  if (type === 'toggle') {
    return (
      <button
        type="button"
        className={`${toggleTag} ${isActive ? toggleTagActive : ''} ${
          wide ? wideTag : ''
        }`}
        onClick={() => handleToggle(children)}
        aria-label={`Toggle ${isActive ? 'off' : 'on'} filter for ${children} `}
      >
        {children}
      </button>
    );
  }
  return <span className={tag}>{children}</span>;
};

Tag.defaultProps = {
  action: '',
  type: '',
  handleToggle: null,
  isActive: false,
  wide: false,
};

Tag.propTypes = {
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleToggle: PropTypes.func,
  isActive: PropTypes.bool,
  wide: PropTypes.bool,
};

export default Tag;
