import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { tag, tagActive } from '../styles/tag.module.scss';

const Tag = ({ children, type, action }) => {
  const [isActive, toggleActive] = useState(false);

  const toggle = () => toggleActive(!isActive);

  if (type === 'link') {
    return (
      <Link to={action} className={tag}>
        {children}
      </Link>
    );
  }
  if (type === 'toggle') {
    return (
      <button
        type="button"
        className={`${tag} ${isActive ? tagActive : ''} `}
        onClick={() => toggle()}
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
};

Tag.propTypes = {
  action: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Tag;
