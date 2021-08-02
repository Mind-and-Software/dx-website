import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import LinkArrow from '../assets/linkArrow.svg';

import {
  linkWithArrow,
  linkWithArrowBigger,
  linkText,
  arrow,
} from '../styles/linkWithArrow.module.scss';

const LinkWithArrow = ({ children, to, type }) => (
  <Link
    to={to}
    className={type === 'secondary' ? linkWithArrowBigger : linkWithArrow}
  >
    <div className={linkText}>{children}</div>
    <LinkArrow className={arrow}/>
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
