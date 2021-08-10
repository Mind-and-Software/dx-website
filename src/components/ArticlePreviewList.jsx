import * as React from 'react';
import PropTypes from 'prop-types';

import PreviewColumn from './PreviewColumn';

import {
  articlePreviewList,
  firstColumn,
  column,
} from '../styles/articlePreviewList.module.scss';

const ArticlePreviewList = ({ previewData, type }) => {
  const firstColumnData = previewData.slice(0, 3);
  const secondColumnData = previewData.slice(3, 6);
  const thirdColumnData = previewData.slice(6, 9);
  return (
    <ul className={articlePreviewList} aria-label="List of article previews">
      {firstColumnData.length > 0 && (
        <PreviewColumn
          columnPreviewData={firstColumnData}
          className={firstColumn}
          pathPrefix={`/${type}`}
        />
      )}
      {secondColumnData.length > 0 && (
        <PreviewColumn
          columnPreviewData={secondColumnData}
          className={column}
          pathPrefix={`/${type}`}
        />
      )}
      {thirdColumnData.length > 0 && (
        <PreviewColumn
          columnPreviewData={thirdColumnData}
          className={column}
          pathPrefix={`/${type}`}
        />
      )}
    </ul>
  );
};

ArticlePreviewList.propTypes = {
  previewData: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired,
};

export default ArticlePreviewList;
