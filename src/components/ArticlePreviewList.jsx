import * as React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from './ArticlePreview';

import {
  articlePreviewList,
  listItem,
  columnFirst,
  columnSecond,
  columnThird,
} from '../styles/articlePreviewList.module.scss';

const ArticlePreviewList = ({
  previewData,
  previewImageEdges,
  authorImageEdges,
}) => {
  const sortByDate = (object1, object2) => object2.date - object1.date;
  const sortedData = previewData.sort(sortByDate);

  const renderColumn = (columnData) =>
    columnData.map(
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
        description,
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
              description={description}
              readingTime={readingTime}
              previewImage={previewImage}
              authorName={authorName}
              authorCredentials={authorCredentials}
              authorUrl={authorUrl}
              authorImage={authorImage}
            />
          </li>
        );
      }
    );

  const firstColumn = sortedData.slice(0, 3);
  const secondColumn = sortedData.slice(3, 6);
  const thirdColumn = sortedData.slice(6, 9);
  return (
    <ul className={articlePreviewList} aria-label="List of article previews">
      {firstColumn.length > 0 && (
        <ul
          className={columnFirst}
          aria-label="First column of article previews"
        >
          {renderColumn(firstColumn)}
        </ul>
      )}
      {secondColumn.length > 0 && (
        <ul
          className={columnSecond}
          aria-label="Second column of article previews"
        >
          {renderColumn(secondColumn)}
        </ul>
      )}
      {thirdColumn.length > 0 && (
        <ul
          className={columnThird}
          aria-label="Third column of article previews"
        >
          {renderColumn(thirdColumn)}
        </ul>
      )}
    </ul>
  );
};

ArticlePreviewList.propTypes = {
  previewData: PropTypes.arrayOf(PropTypes.object).isRequired,
  previewImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
  authorImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticlePreviewList;
