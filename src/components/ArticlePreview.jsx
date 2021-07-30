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

export const AuthorSection = ({
  author,
  url,
  credentials,
  imageSrc,
  vertical,
}) => (
  <div className={vertical ? authorSectionVertical : authorSection}>
    {!vertical && <ProfilePicture url={url} imageSrc={imageSrc} />}
    <Link to={url} aria-label={`Link to user profile: ${author}`}>
      {credentials ? `${author},` : author}
    </Link>
    {credentials}
  </div>
);

AuthorSection.propTypes = {
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
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
  previewImageSrc,
  tags,
  title,
  readingTime,
  date,
  author,
  authorCredentials,
  authorImageSrc,
  authorUrl,
  vertical,
}) => (
  <div className={vertical ? articlePreviewVertical : articlePreviewHorizontal}>
    {previewImageSrc && (
      <div className={vertical ? imageLinkVertical : imageLinkHorizontal}>
        <ImageLink
          to={articleUrl}
          src={previewImageSrc}
          alt={title}
          width={vertical ? 200 : 320}
          height={vertical ? 120 : 160}
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
        {author && (
          <AuthorSection
            author={author}
            credentials={authorCredentials}
            url={authorUrl}
            imageSrc={authorImageSrc}
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
  previewImageSrc: '',
  tags: [],
  readingTime: '',
  date: '',
  author: '',
  authorUrl: '/',
  authorImageSrc: 'placeholder-avatar.png',
  authorCredentials: '',
  vertical: false,
};

ArticlePreview.propTypes = {
  children: PropTypes.node,
  articleUrl: PropTypes.string.isRequired,
  previewImageSrc: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  readingTime: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  author: PropTypes.string,
  authorUrl: PropTypes.string,
  authorImageSrc: PropTypes.string,
  authorCredentials: PropTypes.string,
  vertical: PropTypes.bool,
};

export default ArticlePreview;
