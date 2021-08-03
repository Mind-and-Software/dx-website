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
  descriptionSection,
  typeSection,
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

const Dot = () => <span className={dot}>•</span>;

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
    const parts = date.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return (
      <div aria-label="Release date of the article">{`${day} ${
        monthNames[Number(month) - 1]
      }, ${year}`}</div>
    );
  }
  return '';
};

const renderReadingTime = (readingTime) => {
  if (readingTime) {
    return (
      <div aria-label="Reading time of the article">{`${readingTime} min read`}</div>
    );
  }
  return '';
};

const ArticlePreview = ({
  articleUrl,
  previewImage,
  imageAlt,
  tags,
  title,
  type,
  readingTime,
  date,
  description,
  authorName,
  authorCredentials,
  authorImage,
  authorUrl,
}) => (
  <div className={articlePreview} aria-label="Article preview">
    {previewImage && (
      <div className={imageLink}>
        <ImageLink
          to={articleUrl}
          imageData={previewImage.childImageSharp.gatsbyImageData}
          alt={imageAlt}
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
        <div className={descriptionSection}>{description}</div>
        {type && <div className={typeSection}>{type}</div>}
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
  previewImage: '',
  tags: [],
  type: '',
  readingTime: '',
  date: '',
  description: '',
  authorName: '',
  authorUrl: '/',
  authorImage: '',
  authorCredentials: '',
  imageAlt: '',
};

ArticlePreview.propTypes = {
  articleUrl: PropTypes.string.isRequired,
  previewImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageAlt: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  readingTime: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.node,
  authorName: PropTypes.string,
  authorUrl: PropTypes.string,
  authorImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  authorCredentials: PropTypes.string,
};

export default ArticlePreview;
