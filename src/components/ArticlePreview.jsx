import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  articlePreviewVertical,
  articlePreviewHorizontal,
  rowSection,
  authorSection,
  authorSectionVertical,
  infoSection,
  titleVertical,
  imageLinkVertical,
  imageLinkHorizontal,
} from '../styles/articlePreview.module.scss';
import Tag from './Tag';
import ImageLink from './ImageLink';
import ProfilePicture from './ProfilePicture';

export const AuthorSection = ({ name, url, credentials, image, vertical }) => (
  <div className={vertical ? authorSectionVertical : authorSection}>
    {!vertical && image && (
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
  vertical: PropTypes.bool.isRequired,
};

const renderTags = (tags) => {
  if (tags.length > 0) {
    return (
      <div>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    );
  }
  return '';
};

const renderDate = (date) => {
  if (date) {
    return <div>{`${date.getMonth() + 1}/${date.getFullYear()}`}</div>;
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
  vertical,
}) => (
  <div className={vertical ? articlePreviewVertical : articlePreviewHorizontal}>
    {previewImage && (
      <div className={vertical ? imageLinkVertical : imageLinkHorizontal}>
        <ImageLink
          to={articleUrl}
          imageData={previewImage.node.childImageSharp.gatsbyImageData}
          alt={title}
        />
      </div>
    )}
    <div className={infoSection}>
      {!vertical && (
        <div className={rowSection}>
          {renderTags(tags)}
          {renderReadingTime(readingTime)}
          {renderDate(date)}
        </div>
      )}
      <div>
        <Link to={articleUrl}>
          <h3 className={vertical ? titleVertical : ''}>{title}</h3>
        </Link>
        {children}
        {authorName && (
          <AuthorSection
            name={authorName}
            credentials={authorCredentials}
            url={authorUrl}
            image={authorImage}
            vertical={vertical}
          />
        )}
      </div>
      {vertical && renderTags(tags)}
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
  vertical: false,
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
  vertical: PropTypes.bool,
};

export default ArticlePreview;
