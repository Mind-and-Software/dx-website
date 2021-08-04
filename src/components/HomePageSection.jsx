import React from 'react';
import PropTypes from 'prop-types';

import PreviewColumn from '../components/PreviewColumn';
import Lightbulb from '../assets/lightbulb.svg';

import {
  developers,
  managers,
  researchers,
  contentSection,
  contentItem,
  titleIcon,
  titleSection,
} from '../styles/homePageSection.module.scss';

const HomePageSection = ({
  featuredArticles,
  featuredDiscussions,
  featuredTutorials,
  sectionId,
  targetGroup,
  title,
}) => {
  const sectionClasses = {
    develop: developers,
    manage: managers,
    research: researchers,
  };

  return (
    <section className={sectionClasses[targetGroup]}>
      <div className={titleSection}>
        <h2 id={sectionId}>{title}</h2>
        <Lightbulb className={titleIcon} />
      </div>
      <div className={contentSection}>
        <PreviewColumn
          columnPreviewData={featuredTutorials}
          header="Tutorials"
          className={contentItem}
          pathPrefix="tutorials"
        />
        <PreviewColumn
          columnPreviewData={featuredArticles}
          header="Articles"
          className={contentItem}
          pathPrefix="articles"
        />
        <PreviewColumn
          columnPreviewData={featuredTutorials}
          header="Tutorials again"
          className={contentItem}
          pathPrefix="tutorials"
        />
      </div>
    </section>
  );
};

HomePageSection.propTypes = {
  featuredArticles: PropTypes.array.isRequired,
  featuredDiscussions: PropTypes.array.isRequired,
  featuredTutorials: PropTypes.array.isRequired,
  sectionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomePageSection;
