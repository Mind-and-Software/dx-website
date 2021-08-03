import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import LinkArrow from '../assets/linkArrow.svg';

import {
  linkWithArrow,
  linkWithArrowSecondary,
  linkWithArrowTertiary,
  linkText,
  linkArrow,
} from '../styles/linkWithArrow.module.scss';

const getClassName = (type) => {
  if (type === 'secondary') {
    return linkWithArrowSecondary;
  }
  if (type === 'tertiary') {
    return linkWithArrowTertiary;
  }
  return linkWithArrow;
};

const LinkWithArrow = ({ children, to, type }) => (
  <Link to={to} className={getClassName(type)}>
    <div className={linkText}>{children}</div>
    <LinkArrow className={linkArrow} />
  </Link>
);

LinkWithArrow.defaultProps = {
  type: 'default',
};

LinkWithArrow.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default LinkWithArrow;
