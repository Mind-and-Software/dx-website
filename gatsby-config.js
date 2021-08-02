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
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-remark',
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
        path: './src/images',
      },
    },
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
