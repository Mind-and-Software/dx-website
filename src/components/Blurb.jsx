import React from 'react';
import PropTypes from 'prop-types';

import { blurb } from '../styles/blurb.module.scss';

const Blurb = ({ children }) => {
  const isEmpty = children === '';

  return isEmpty ? (
    ''
  ) : (
    <aside className={blurb} aria-label="Text Blurb">
      {children}
    </aside>
  );
};

Blurb.defaultProps = {
  children: '',
};

Blurb.propTypes = {
  children: PropTypes.node,
};

export default Blurb;
