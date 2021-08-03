import React from 'react';
import PropTypes from 'prop-types';
import ArticlePreview from './ArticlePreview';

import {
  contentItem,
  contentPreviews,
  relatedContent,
} from '../styles/relatedContent.module.scss';

const previewData = [
  {
    title: 'Your first DX survey',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
  {
    title: 'Your first DX survey 2',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
  {
    title: 'Your first DX survey 3',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right nowwwsadffffffffdsfdsaffffffffffffsdasdasadsdasadsafsfa`,
  },
  {
    title: 'Your first DX survey 4',
    tags: ['Develop', 'Research'],
    articleUrl: '/docs/test-article',
    date: new Date(2020, 5, 30),
    readingTime: '5 min',
    previewImageName: 'workstation.png',
    authorName: 'Test Author',
    authorCredentials: 'Researcher',
    authorImageName: 'linuxoid.png',
    description: `Learn how to design your first Developer Experience survey and start
    measuring your own or your team’s DX right now!`,
  },
];

const RelatedContent = ({ contentList = previewData }) => {
  console.log('hh:', contentList);
  return (
    <div className={relatedContent}>
      <h2>Related content</h2>
      <ul className={contentPreviews}>
        {contentList.slice(0, 3).map((content) => (
          <li className={contentItem} key={content.title}>
            <ArticlePreview
              articleUrl={content.articleUrl}
              description={content.description}
              previewImage={content.previewImage}
              title={content.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

RelatedContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RelatedContent;
