import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Image from './Image';
import { profilePicture } from '../styles/profilePicture.module.scss';

const ProfilePicture = ({ url, imageData }) => (
  <Link to={url} aria-label="Picture of the author of this article">
    <Image className={profilePicture} imageData={imageData} alt="Article preview profilepicture"/>
  </Link>
);

ProfilePicture.defaultProps = {
  url: '/',
};

ProfilePicture.propTypes = {
  url: PropTypes.string,
  imageData: PropTypes.object.isRequired,
};

export default ProfilePicture;
