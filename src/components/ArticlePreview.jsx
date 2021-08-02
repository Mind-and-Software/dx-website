import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  articlePreview,
  rowSection,
  authorSection,
  infoSection,
  imageLink,
  dot,
} from '../styles/articlePreview.module.scss';
import Tag from './Tag';
import ImageLink from './ImageLink';
import ProfilePicture from './ProfilePicture';

export const AuthorSection = ({ name, url, credentials, image }) => (
  <div className={authorSection}>
    {image && (
      <ProfilePicture
        url={url}
        imageData={image.node.childImageSharp.gatsbyImageData}
      />
    )}
    <Link to={url} aria-label={`Link to user profile: ${name}`}>
      {credentials ? `${name},` : name}
    </Link>
    {credentials}
  </div>
);

AuthorSection.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  credentials: PropTypes.string.isRequired,
};

const Dot = () => <div className={dot}>•</div>;

const renderTags = (tags) => {
  if (tags.length > 0) {
    return tags.map((tag) => (
      <div key={tag}>
        <Tag>{tag}</Tag>
        <Dot />
      </div>
    ));
  }
  return '';
};

const renderDate = (date) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (date) {
    return (
      <div>{`${date.getDate()} ${
        monthNames[date.getMonth()]
      }, ${date.getFullYear()}`}</div>
    );
  }
  return '';
};

const renderReadingTime = (readingTime) => {
  if (readingTime) {
    return <div>{`${readingTime} read`}</div>;
  }
  return '';
};

const ArticlePreview = ({
  children,
  articleUrl,
  previewImage,
  tags,
  title,
  readingTime,
  date,
  authorName,
  authorCredentials,
  authorImage,
  authorUrl,
}) => (
  <div className={articlePreview}>
    {previewImage && (
      <div className={imageLink}>
        <ImageLink
          to={articleUrl}
          imageData={previewImage.node.childImageSharp.gatsbyImageData}
          alt={title}
        />
      </div>
    )}
    <div className={infoSection}>
      <div className={rowSection}>
        {renderTags(tags)}
        {renderReadingTime(readingTime)}
        {readingTime && date && <Dot />}
        {renderDate(date)}
      </div>
      <div>
        <Link to={articleUrl}>
          <h3>{title}</h3>
        </Link>
        {children}
        {authorName && (
          <AuthorSection
            name={authorName}
            credentials={authorCredentials}
            url={authorUrl}
            image={authorImage}
          />
        )}
      </div>
    </div>
  </div>
);

ArticlePreview.defaultProps = {
  children: '',
  previewImage: '',
  tags: [],
  readingTime: '',
  date: '',
  authorName: '',
  authorUrl: '/',
  authorImage: '',
  authorCredentials: '',
};

ArticlePreview.propTypes = {
  children: PropTypes.node,
  articleUrl: PropTypes.string.isRequired,
  previewImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  readingTime: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  authorName: PropTypes.string,
  authorUrl: PropTypes.string,
  authorImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  authorCredentials: PropTypes.string,
};

export default ArticlePreview;
