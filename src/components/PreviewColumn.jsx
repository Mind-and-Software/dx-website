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
      {columnPreviewData.map((previewEdge) => {
        const content = previewEdge.node.frontmatter;
        const authorImage = authorImageEdges.find(
          (authorEdge) => authorEdge.node.base === content.author
        );
        return (
          <li key={content.title}>
            <ArticlePreview
              title={content.title}
              tags={content.tags}
              articleUrl={content.slug}
              date={content.date}
              description={content.description}
              readingTime={content.readingTime}
              previewImage={content.featuredImage}
              imageAlt={content.imageAlt}
              authorName={content.author}
              authorCredentials={content.authorCredentials}
              authorUrl={content.authorUrl}
              authorImage={authorImage}
            />
          </li>
        );
      })}
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
