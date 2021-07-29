import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ImageLink = ({ to, src, width, height }) => (
  <Link to={to} style={{ width, height }}>
    <img src={src} alt="Link" />
  </Link>
);

ImageLink.defaultProps = {
  width: 320,
  height: 160,
  src: 'images/placeholder.png',
};

ImageLink.propTypes = {
  to: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};

export default ImageLink;
