require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'DX Website',
  },
  pathPrefix: '/dx-website',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'md-pages',
        path: './src/pages/markdown',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './images',
      },
      __key: 'images',
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@use "./src/styles/globals/variables" as var;
          @use "./src/styles/globals/mixins" as mixin;`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
