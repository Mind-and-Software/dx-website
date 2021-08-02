/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Blurb from '../components/Blurb';
import Layout from '../components/layout';
import RelatedArticles from '../components/RelatedArticles';
import Tag from '../components/Tag';

import {
  article,
  articleBlurb,
  articleContent,
  articleImage,
} from '../styles/article.module.scss';

export default function Article({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  const featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid;

  return (
    <Layout>
      <article className={article}>
        <div aria-label="tags">
          {frontmatter.tags &&
            frontmatter.tags.map((tag) => (
              <Tag type="link" action="/" key={tag}>
                {tag}
              </Tag>
            ))}
          {frontmatter.readingTime && (
            <span>{`${frontmatter.readingTime} min read`}</span>
          )}
          <span>{frontmatter.date}</span>
        </div>
        <h1>{frontmatter.title}</h1>
        <p aria-label="author">{frontmatter.author}</p>
        <Img fluid={featuredImgFluid} className={articleImage} />
        <Blurb className={articleBlurb}>{frontmatter.blurb}</Blurb>
        <div
          className={articleContent}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <RelatedArticles />
    </Layout>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
