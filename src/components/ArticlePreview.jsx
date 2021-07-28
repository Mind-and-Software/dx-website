import React from 'react';
import PropTypes from 'prop-types';

import {
  articlePreview,
  rowSection,
  authorSection,
  authorImageContainer,
} from '../styles/articlePreview.module.scss';
import Tag from './Tag';

const ArticlePreview = ({
  children,
  previewImageSrc,
  tags,
  title,
  author,
  authorCredentials,
  authorImageSrc,
  readingTime,
  date,
}) => (
  <div className={articlePreview}>
    {previewImageSrc && <img src={previewImageSrc} alt="Article preview" />}
    <div className={rowSection}>
      <div>{tags.map((tag) => <Tag>{tag}</Tag>)}</div>
      <div>{`${readingTime} read`}</div>
      <div>
        {`${date.getMonth() + 1}/${date.getFullYear()}`}
      </div>
    </div>
    <h3>{title}</h3>
    {children}
    <div className={`${rowSection} ${authorSection}`}>
      <div
        className={authorImageContainer}
        style={{ backgroundImage: `url(${authorImageSrc})` }}
      />
      <div>{`${author},`}</div>
      <div>{authorCredentials}</div>
    </div>
  </div>
);

ArticlePreview.defaultProps = {
  children: '',
  previewImageSrc: '',
  tags: [],
  authorImageSrc: '',
  date: new Date(),
};

ArticlePreview.propTypes = {
  children: PropTypes.node,
  previewImageSrc: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorCredentials: PropTypes.string.isRequired,
  authorImageSrc: PropTypes.string,
  readingTime: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default ArticlePreview;
