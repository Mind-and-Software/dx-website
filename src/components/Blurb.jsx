import React from 'react';
import PropTypes from 'prop-types';

import { blurb } from '../styles/blurb.module.scss';

const Blurb = ({ children }) => {
  const isEmpty = children === '';

  return isEmpty ? '' : <div className={blurb}>{children}</div>;
};

Blurb.defaultProps = {
  children: '',
};

Blurb.propTypes = {
  children: PropTypes.node,
};

export default Blurb;
