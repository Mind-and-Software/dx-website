import * as React from 'react';
import PropTypes from 'prop-types';

import PreviewColumn from './PreviewColumn';

import {
  articlePreviewList,
  column,
} from '../styles/articlePreviewList.module.scss';

const ArticlePreviewList = ({ previewData, authorImageEdges }) => {
  const firstColumn = previewData.slice(0, 3);
  const secondColumn = previewData.slice(3, 6);
  const thirdColumn = previewData.slice(6, 9);
  return (
    <ul className={articlePreviewList} aria-label="List of article previews">
      {firstColumn.length > 0 && (
        <PreviewColumn
          columnPreviewData={firstColumn}
          authorImageEdges={authorImageEdges}
          className={column}
        />
      )}
      {secondColumn.length > 0 && (
        <PreviewColumn
          columnPreviewData={secondColumn}
          authorImageEdges={authorImageEdges}
          className={column}
        />
      )}
      {thirdColumn.length > 0 && (
        <PreviewColumn
          columnPreviewData={thirdColumn}
          authorImageEdges={authorImageEdges}
          className={column}
        />
      )}
    </ul>
  );
};

ArticlePreviewList.propTypes = {
  previewData: PropTypes.arrayOf(PropTypes.object).isRequired,
  authorImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticlePreviewList;
