const path = require('path');
const lunr = require('lunr');
const striptags = require('striptags');
const { GraphQLJSONObject } = require('graphql-type-json');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

const createIndex = async (blogNodes, type, cache) => {
  const cached = await cache.get('IndexLunr');
  if (cached) {
    return cached;
  }

  const documents = [];
  const store = {};

  blogNodes.forEach(async (node) => {
    const { slug } = node.fields;
    const { title } = node.frontmatter;
    const html = await type.getFields().html.resolve(node);

    documents.push({
      slug: node.fields.slug,
      title: node.frontmatter.title,
      content: striptags(html),
    });

    store[slug] = {
      title,
    };
  });


  const index = lunr(() => {
    this.field('title');
    this.field('content');
    documents.forEach((document) => this.add(document));
  });

  const json = { index: index.toJSON(), store };
  await cache.set('IndexLunr', json);
  return json;
};

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const blogNodes = context.nodeModel.getAllNodes({
            type: 'MarkdownRemark',
          });
          const type = info.schema.getType('MarkdownRemark');
          return createIndex(blogNodes, type, cache);
        },
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog.jsx');
  const tagTemplate = path.resolve('src/templates/singleTag.jsx');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;
  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: `${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
