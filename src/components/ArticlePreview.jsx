import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import {
  articlePreview,
  imageLink,
  rowSection,
  authorSection,
  authorImageContainer,
} from '../styles/articlePreview.module.scss';
import Tag from './Tag';
import ImageLink from './ImageLink';

const ArticlePreview = ({
  children,
  previewImageSrc,
  tags,
  title,
  readingTime,
  date,
  author,
  authorCredentials,
  authorImageSrc,
  articleUrl,
  authorUrl,
}) => (
  <div className={articlePreview}>
    {previewImageSrc && (
      <div className={imageLink}>
        <ImageLink
          to={articleUrl}
          src={previewImageSrc}
        />
      </div>
    )}
    <div className={rowSection}>
      <div>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </div>
      {readingTime && <div>{`${readingTime} read`}</div>}
      {date && <div>{`${date.getMonth() + 1}/${date.getFullYear()}`}</div>}
    </div>
    <Link to={articleUrl}>
      <h3>{title}</h3>
    </Link>
    {children}
    {author && (
      <div className={`${rowSection} ${authorSection}`}>
        <div
          className={authorImageContainer}
          style={{ backgroundImage: `url(${authorImageSrc})` }}
        />
        <Link to={authorUrl}>
          <div>{authorCredentials ? `${author},` : author}</div>
        </Link>
        <div>{authorCredentials}</div>
      </div>
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
  authorUrl: '',
  authorImageSrc: '',
  authorCredentials: '',
};

ArticlePreview.propTypes = {
  children: PropTypes.node,
  previewImageSrc: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  readingTime: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  author: PropTypes.string,
  authorUrl: PropTypes.string,
  authorImageSrc: PropTypes.string,
  authorCredentials: PropTypes.string,
  articleUrl: PropTypes.string.isRequired,
};

export default ArticlePreview;
