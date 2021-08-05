import React from 'react';
import PropTypes from 'prop-types';
import ArticlePreview from './ArticlePreview';

import {
  contentItem,
  contentPreviews,
  relatedContent,
} from '../styles/relatedContent.module.scss';

const RelatedContent = ({ contentList, title }) => {
  return (
    <aside className={relatedContent} role="complementary">
      <h2>{title}</h2>
      <ul className={contentPreviews}>
        {contentList &&
          contentList.map((edge) => {
            const content = edge.node.frontmatter;
            const slug = edge.node.fields.slug;
            return (
              <li className={contentItem} key={content.title}>
                <ArticlePreview
                  articleUrl={slug}
                  imageAlt={content.imageAlt}
                  previewImage={content.featuredImage}
                  title={content.title}
                  tags={content.tags}
                  readingTime={content.readingTime}
                  date={content.date}
                  description={content.description}
                  author={content.author}
                  authorImage={content.authorImage}
                  authorCredentials={content.authorCredentials}
                  authorImage={content.authorImage}
                />
              </li>
            );
          })}
      </ul>
    </aside>
  );
};

RelatedContent.defaultProps = {
  title: '',
};

RelatedContent.propTypes = {
  contentList: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

export default RelatedContent;
