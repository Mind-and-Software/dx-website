import React from 'react';
import PropTypes from 'prop-types';

import { articlePreview } from '../styles/articlePreview.module.scss';

const ArticlePreview = ({
  previewImageSrc,
  tags,
  title,
  subtitle,
  author,
  authorCredential,
  authorImageSrc,
  date,
}) => <div className={articlePreview}></div>;

ArticlePreview.defaultProps = {
  previewImageSrc: '../assets/placeholder.png',
  tags: [],
  authorImageSrc: '../assets/placeholder.png',
  date: Date.now(),
};

ArticlePreview.propTypes = {
  previewImageSrc: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorCredential: PropTypes.string.isRequired,
  authorImageSrc: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};

export default ArticlePreview;
