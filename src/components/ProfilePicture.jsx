import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { profilePicture } from '../styles/profilePicture.module.scss';

const ProfilePicture = ({ url, imageSrc }) => (
  <Link to={url}>
    <div
      className={profilePicture}
      style={{ backgroundImage: `url(${imageSrc})` }}
      data-testid="profilepic"
    />
  </Link>
);

ProfilePicture.defaultProps = {
  url: '/',
  imageSrc: 'images/placeholder-avatar.png',
};

ProfilePicture.propTypes = {
  url: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default ProfilePicture;
