import * as React from 'react';

import ArticlePreview from './ArticlePreview';

const ArticlePreviewList = ({
  previewData,
  previewImageEdges,
  authorImageEdges,
}) =>
  previewData.map(
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
      content,
    }) => {
      const previewImage = previewImageEdges.find(
        (edge) => edge.node.base === previewImageName
      );
      const authorImage = authorImageEdges.find(
        (edge) => edge.node.base === authorImageName
      );
      return (
        <ArticlePreview
          key={title}
          title={title}
          tags={tags}
          articleUrl={articleUrl}
          date={date}
          readingTime={readingTime}
          previewImage={previewImage}
          authorName={authorName}
          authorCredentials={authorCredentials}
          authorUrl={authorUrl}
          authorImage={authorImage}
        >
          {content}
        </ArticlePreview>
      );
    }
  );

export default ArticlePreviewList;
