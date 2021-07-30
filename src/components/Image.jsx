import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Image = ({ className, imageData, alt }) => {
  const image = getImage(imageData);
  return <GatsbyImage className={className} image={image} alt={alt} />;
};

Image.defaultProps = {
  imageData: 'placeholder.png',
  className: '',
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  imageData: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
};

export default Image;
