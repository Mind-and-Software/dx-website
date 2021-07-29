import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  articlePreview,
  rowSection,
  authorSection,
} from '../styles/articlePreview.module.scss';
import Tag from './Tag';
import ImageLink from './ImageLink';
import ProfilePicture from './ProfilePicture';

export const AuthorSection = ({ author, url, credentials, imageSrc }) => (
  <div className={authorSection}>
    <ProfilePicture url={url} imageSrc={imageSrc} />
    <Link to={url}>{credentials ? `${author},` : author}</Link>
    {credentials}
  </div>
);

AuthorSection.propTypes = {
  author: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  credentials: PropTypes.string.isRequired,
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
}) => (
  <div className={articlePreview}>
    {previewImageSrc && <ImageLink to={articleUrl} src={previewImageSrc} />}
    <div className={rowSection}>
      {tags.length > 0 && (
        <div>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
      {readingTime && <div>{`${readingTime} read`}</div>}
      {date && <div>{`${date.getMonth() + 1}/${date.getFullYear()}`}</div>}
    </div>
    <Link to={articleUrl}>
      <h3>{title}</h3>
    </Link>
    {children}
    {author && (
      <AuthorSection
        author={author}
        credentials={authorCredentials}
        url={authorUrl}
        imageSrc={authorImageSrc}
      />
    )}
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
  authorImageSrc: 'images/placeholder-avatar.png',
  authorCredentials: '',
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
};

export default ArticlePreview;
