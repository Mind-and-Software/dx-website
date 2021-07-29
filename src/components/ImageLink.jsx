import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ImageLink = ({ to, src }) => (
  <Link to={to}>
    <img src={src} alt="Link" />
  </Link>
);

ImageLink.defaultProps = {
  src: 'images/placeholder.png',
};

ImageLink.propTypes = {
  to: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default ImageLink;
