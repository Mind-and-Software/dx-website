import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  linkButton
} from '../styles/linkButton.module.scss';

const LinkButton = ({ children, to, }) => (
  <Link
    to={to}
    className={linkButton}
  >
    <button type="button" className="button">
      {children}
    </button>
  </Link>
);

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkButton;
