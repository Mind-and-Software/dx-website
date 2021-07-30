import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ImageLink = ({ to, src, alt, width, height }) => (
  <Link style={{ maxWidth: width, height }} to={to}>
    <img
      style={{ maxWidth: width, height }}
      src={src}
      alt={alt}
      aria-label={`Preview picture of article: ${alt}`}
    />
  </Link>
);

ImageLink.defaultProps = {
  src: '../../placeholder.png',
  width: 320,
  height: 160,
};

ImageLink.propTypes = {
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ImageLink;
