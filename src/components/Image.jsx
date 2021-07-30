/* eslint-disable react/prop-types */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const renderImage = ({ image, title }) => (
  <GatsbyImage
    image={image}
    alt={title}
    aria-label={`Preview picture of article: ${title}`}
  />
);

const Image = ({ data }) => {
  const image = getImage(data.edges.node);
  const title = getImage(data.edges.node.base);
  return (
    <StaticQuery
      query={graphql`
        query ImageQuery($base: String, $width: Number, $height: Number) {
          allFile(
            filter: {
              extension: { regex: "/jpg|png|jpeg/" }
              base: { eq: $title }
            }
          ) {
            edges {
              node {
                id
                base
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges
      }}
    />
  );
};

export default Image;
