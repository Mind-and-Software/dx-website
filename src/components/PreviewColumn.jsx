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
          previewImageData,
          imageAlt,
          authorName,
          authorCredentials,
          authorUrl,
          authorImageName,
          description,
        }) => {
          const authorImage = authorImageEdges.find(
            (edge) => edge.node.base === authorName
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
                previewImageData={previewImageData}
                imageAlt={imageAlt}
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
      {header && <h2>{header}</h2>}
      {renderColumn()}
      {header && (
        <div className={linkArrow}>
          <LinkWithArrow to="docs/test-article" type="secondary">
            More <span>{header}</span>
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
  authorImageEdges: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  header: PropTypes.string,
};

export default PreviewColumn;
