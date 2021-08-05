import * as React from 'react';
import PropTypes from 'prop-types';

import PreviewColumn from './PreviewColumn';

import {
  articlePreviewList,
  column,
} from '../styles/articlePreviewList.module.scss';

const ArticlePreviewList = ({ previewData }) => {
  const firstColumn = previewData.slice(0, 3);
  const secondColumn = previewData.slice(3, 6);
  const thirdColumn = previewData.slice(6, 9);
  return (
    <ul className={articlePreviewList} aria-label="List of article previews">
      {firstColumn.length > 0 && (
        <PreviewColumn
          columnPreviewData={firstColumn}
          className={column}
          pathPrefix="/articles"
        />
      )}
      {secondColumn.length > 0 && (
        <PreviewColumn
          columnPreviewData={secondColumn}
          className={column}
          pathPrefix="/articles"
        />
      )}
      {thirdColumn.length > 0 && (
        <PreviewColumn
          columnPreviewData={thirdColumn}
          className={column}
          pathPrefix="/articles"
        />
      )}
    </ul>
  );
};

ArticlePreviewList.propTypes = {
  previewData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticlePreviewList;
