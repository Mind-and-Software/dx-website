import * as React from 'react';
import PropTypes from 'prop-types';

import ArticlePreview from './ArticlePreview';
import LinkWithArrow from './LinkWithArrow';

import {
  previewColumn,
  columnItems,
  linkArrow,
} from '../styles/previewColumn.module.scss';

const PreviewColumn = ({
  columnPreviewData,
  previewImageEdges,
  authorImageEdges,
  header,
  className,
}) => {
  const renderColumn = () => (
    <ul className={className ? `${columnItems} ${className}` : columnItems}>
      {columnPreviewData.map(
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
            <li key={title}>
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
      )}
    </ul>
  );

  return (
    <div className={previewColumn}>
      {header && <h2>{header.toUpperCase()}</h2>}
      {renderColumn()}
      {header && (
        <div className={linkArrow}>
          <LinkWithArrow type="secondary">
            {`More ${header.toLowerCase()}`}
          </LinkWithArrow>
        </div>
      )}
    </div>
  );
};

PreviewColumn.defaultProps = {
  className: '',
  header: '',
};

PreviewColumn.propTypes = {
  columnPreviewData: PropTypes.arrayOf(PropTypes.object).isRequired,
  previewImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
  authorImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  header: PropTypes.string,
};

export default PreviewColumn;
