import React from 'react';
import PropTypes from 'prop-types';
import ArticlePreview from './ArticlePreview';

import {
  contentItem,
  contentPreviews,
  relatedContent,
} from '../styles/relatedContent.module.scss';

const RelatedContent = ({ contentList }) => (
  <aside className={relatedContent} role="complementary">
    <h2>Related content</h2>
    <ul className={contentPreviews}>
      {contentList &&
        contentList.map((edge) => {
          const content = edge.node.frontmatter;
          const slug = edge.node.fields.slug;
          return (
            <li className={contentItem} key={content.title}>
              <ArticlePreview
                articleUrl={slug}
                type={content.type}
                imageAlt={content.imageAlt}
                previewImage={content.featuredImage}
                title={content.title}
              />
            </li>
          );
        })}
    </ul>
  </aside>
);

RelatedContent.propTypes = {
  contentList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RelatedContent;
