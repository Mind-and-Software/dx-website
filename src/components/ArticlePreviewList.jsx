import * as React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from './ArticlePreview';

import {
  articlePreviewList,
  listItem,
} from '../styles/articlePreviewList.module.scss';

const ArticlePreviewList = ({
  previewData,
  previewImageEdges,
  authorImageEdges,
}) => (
  <ul className={articlePreviewList} aria-label="List of article previews">
    {previewData.map(
      ({
        title,
        articleUrl,
        tags,
        date,
        readingTime,
        previewImageName,
        authorName,
        authorCredentials,
        authorUrl,
        authorImageName,
        content,
      }) => {
        const previewImage = previewImageEdges.find(
          (edge) => edge.node.base === previewImageName
        );
        const authorImage = authorImageEdges.find(
          (edge) => edge.node.base === authorImageName
        );
        return (
          <li key={title} className={listItem}>
            <ArticlePreview
              title={title}
              tags={tags}
              articleUrl={articleUrl}
              date={date}
              readingTime={readingTime}
              previewImage={previewImage}
              authorName={authorName}
              authorCredentials={authorCredentials}
              authorUrl={authorUrl}
              authorImage={authorImage}
            >
              {content}
            </ArticlePreview>
          </li>
        );
      }
    )}
  </ul>
);

ArticlePreviewList.propTypes = {
  previewData: PropTypes.arrayOf(PropTypes.object).isRequired,
  previewImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
  authorImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticlePreviewList;
