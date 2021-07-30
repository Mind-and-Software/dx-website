import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Image from './Image';

const ImageLink = ({ to, imageData, alt }) => (
  <Link to={to} aria-label={`Preview picture of article: ${alt}`}>
    <Image imageData={imageData} alt={alt} />
  </Link>
);
ImageLink.defaultProps = {
  imageData: 'placeholder.png',
};

ImageLink.propTypes = {
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageData: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default ImageLink;
