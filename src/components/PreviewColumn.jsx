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
  header,
  className,
  pathPrefix,
}) => {
  const renderColumn = () => (
    <ul className={className ? `${columnItems} ${className}` : columnItems}>
      {columnPreviewData.map((dataObject, index) => {
        let frontmatter;
        if (dataObject.frontmatter) {
          frontmatter = dataObject.frontmatter;
        }
        if (dataObject.node && dataObject.node.frontmatter) {
          frontmatter = dataObject.node.frontmatter;
        }
        return (
          <li key={`${index}+${frontmatter.title}`}>
            <ArticlePreview
              title={frontmatter.title}
              tags={frontmatter.tags}
              articleUrl={`${pathPrefix}/${frontmatter.slug}`}
              date={frontmatter.date}
              description={frontmatter.description}
              readingTime={frontmatter.readingTime}
              previewImage={frontmatter.featuredImage}
              authorName={frontmatter.authorName}
              authorCredentials={frontmatter.authorCredentials}
              authorUrl={frontmatter.authorUrl}
              authorImage={frontmatter.authorImage}
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
          <LinkWithArrow to={pathPrefix} type="secondary">
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
  pathPrefix: '',
};

PreviewColumn.propTypes = {
  columnPreviewData: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  header: PropTypes.string,
  pathPrefix: PropTypes.string,
};

export default PreviewColumn;
