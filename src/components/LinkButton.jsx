import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  buttonPrimary,
  buttonSecondary,
} from '../styles/linkButton.module.scss';

const LinkButton = ({ children, to, type }) => (
  <Link
    to={to}
    className={type === 'secondary' ? buttonSecondary : buttonPrimary}
  >
    {children}
  </Link>
);

LinkButton.defaultProps = {
  type: 'default',
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default LinkButton;
