module.exports = {
  siteMetadata: {
    title: 'DX Website',
  },
  pathPrefix: '/dx-website',
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'md-pages',
        path: './src/pages/markdown',
      },
      __key: 'pages',
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@use "${__dirname}/src/styles/globals/variables" as var;
          @use "${__dirname}/src/styles/globals/mixins" as mixin;`,
      },
    },
  ],
};
