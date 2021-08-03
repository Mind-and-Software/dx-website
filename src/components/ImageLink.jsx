import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Image from './Image';

const ImageLink = ({ to, imageData, alt, className }) => (
  <Link to={to} aria-label={`Preview picture of article: ${alt}`}>
    <Image imageData={imageData} alt={alt} className={className} />
  </Link>
);
ImageLink.defaultProps = {
  imageData: 'placeholder.png',
  className: '',
};

ImageLink.propTypes = {
  to: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageData: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
};

export default ImageLink;
