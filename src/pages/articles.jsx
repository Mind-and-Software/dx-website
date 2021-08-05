/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';

import Layout from '../components/layout';
import HeaderSearchArea from '../components/HeaderSearchArea';
import ArticlePreviewList from '../components/ArticlePreviewList';
import Pager from '../components/Pager';

import {
  articlesPage,
  articleList,
  pager,
} from '../styles/articlesPage.module.scss';

const ArticleListContainer = ({
  articleEdges,
  authorImageEdges,
  initSearchValue,
  initTags,
  initCurrentPage,
}) => {
  const [searchValue, setSearchValue] = useState(initSearchValue);
  const [selectedTags, setSelectedTags] = useState([...initTags]);
  const [currentPage, setCurrentPage] = useState(initCurrentPage);

  const handleSubmit = (event, nextPageNum) => {
    if (event) event.preventDefault();
    navigate(
      `/articles?page=${
        nextPageNum || currentPage
      }${selectedTags
        .map((tag) => `&${tag}=true`)
        .join('')}`
    );
  };

  const handleSearchValueChange = (event) => setSearchValue(event.target.value);

  const handleTagToggle = (tagValue) => {
    const newSelectedTags = selectedTags;
    const indexOfTag = newSelectedTags.indexOf(tagValue);
    if (indexOfTag > -1) {
      newSelectedTags.splice(indexOfTag, 1);
    } else {
      newSelectedTags.push(tagValue);
    }
    setSelectedTags([...newSelectedTags]);
    navigate(
      `/articles?page=${currentPage}${selectedTags
        .map((tag) => `&${tag}=true`)
        .join('')}`
    );
  };

  const handlePageChange = (nextPageNum) => {
    setCurrentPage(nextPageNum);
    handleSubmit(null, nextPageNum);
  };

  const filterBySearch = (article) =>
    article.node.frontmatter.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());

  const filterByTags = (article) => {
    if (selectedTags.includes('ALL')) {
      return true;
    }
    return article.node.frontmatter.tags.some((tag) =>
      selectedTags.includes(tag.toUpperCase())
    );
  };

  const filteredArticles = articleEdges.filter(
    (article) => filterBySearch(article) && filterByTags(article)
  );

  const getPageArticles = (pageNumber, move) => {
    const start = (pageNumber - 1) * 9;
    const end = start + 9;
    const articles = filteredArticles.slice(start, end);
    if (articles.length === 0 && pageNumber !== 1) {
      getPageArticles(pageNumber - 1, true);
    }
    if (move) {
      handlePageChange(pageNumber);
    }
    return articles;
  };

  // Forms an array of the page numbers required for the pager component
  const getPages = () => {
    const pageAmount = Math.ceil(filteredArticles.length / 9);
    if (pageAmount === 0) return [0];
    return Array.from({ length: pageAmount }, (x, i) => i);
  };

  return (
    <div className={articlesPage}>
      <HeaderSearchArea
        title="Articles on Developer Experience"
        description="Thoughts and experiences from experienced practicioners in the field"
        searchPlaceholder="Search Articles"
        searchValue={searchValue}
        selectedTags={selectedTags}
        handleTagToggle={handleTagToggle}
        handleSearchChange={handleSearchValueChange}
        handleSubmit={handleSubmit}
      />
      <div className={articleList}>
        <ArticlePreviewList
          previewData={getPageArticles(currentPage, false)}
          authorImageEdges={authorImageEdges}
        />
      </div>
      <div className={pager}>
        <Pager
          pages={getPages()}
          currentPage={currentPage}
          handleClick={handlePageChange}
        />
      </div>
    </div>
  );
};

const ArticlesPage = ({ data, location }) => {
  const articleEdges = data.allMarkdownRemark.edges;
  const authorImageEdges = data.authorImages.edges;

  const params = new URLSearchParams(location.search.slice(1));

  const getSearchValue = () => params.get('search') || '';

  const allTags = ['ALL', 'DEVELOP', 'MANAGE', 'RESEARCH'];

  const getSelectedTags = () => {
    const result = [];
    allTags.forEach((tag) => {
      if (params.get(tag)) {
        result.push(tag);
      }
    });
    if (result.length === 0) result.push('ALL')
    return result;
  };

  
  const getCurrentPage = () => Number(params.get('page')) || 1;

  return (
    <Layout>
      <ArticleListContainer
        articleEdges={articleEdges}
        authorImageEdges={authorImageEdges}
        initSearchValue={getSearchValue()}
        initTags={getSelectedTags()}
        initCurrentPage={getCurrentPage()}
      />
    </Layout>
  );
};

export default ArticlesPage;

export const imageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { type: { eq: "Article" } } }
    ) {
      edges {
        node {
          frontmatter {
            author
            blurb
            date
            slug
            tags
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 384, height: 184)
              }
            }
            readingTime
            imageAlt
          }
        }
      }
    }

    authorImages: allFile(
      filter: {
        extension: { regex: "/jpg|png|jpeg/" }
        relativeDirectory: { eq: "profilepics" }
      }
    ) {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 40, height: 40)
          }
        }
      }
    }
  }
`;
