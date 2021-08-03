/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';

import Blurb from '../components/Blurb';
import Image from '../components/Image';
import Layout from '../components/layout';
import RelatedContent from '../components/RelatedContent';
import Tag from '../components/Tag';

import {
  article,
  articleContent,
  articleImage,
  meta,
  tagSeparator,
} from '../styles/article.module.scss';

export default function Article({ data }) {
  const { frontmatter, html } = data.post;
  const relatedContent = data.relatedContent.edges;

  return (
    <Layout>
      <article className={article}>
        <div aria-label="Article info" className={meta}>
          <span aria-label="Tags">
            {frontmatter.tags &&
              frontmatter.tags.map((tag) => (
                <span key={tag}>
                  <Tag type="link" action={`/tags/${tag}`}>
                    {tag}
                  </Tag>
                  <span className={tagSeparator}>•</span>
                </span>
              ))}
          </span>
          {frontmatter.readingTime && (
            <span>
              {`${frontmatter.readingTime} min read`}
              <span className={tagSeparator}>•</span>
            </span>
          )}
          <span>{frontmatter.date}</span>
        </div>
        <h1>{frontmatter.title}</h1>
        <p aria-label="author">{frontmatter.author}</p>
        <Image
          className={articleImage}
          imageData={frontmatter.featuredImage}
          alt={frontmatter.imageAlt}
        />
        <Blurb>{frontmatter.blurb}</Blurb>
        <div
          className={articleContent}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <RelatedContent contentList={relatedContent} />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!, $tags: [String!]) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        slug
        title
        author
        blurb
        tags
        readingTime
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        imageAlt
      }
    }
    relatedContent: allMarkdownRemark(
      filter: { frontmatter: { tags: { in: $tags } } }
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            imageAlt
          }
        }
      }
    }
  }
`;
