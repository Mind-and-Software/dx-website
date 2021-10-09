import mockImage from '../mocks/mockImage';

const testArticleListData = [
  {
    node: {
      fields: {
        slug: 'testslug1',
      },
      frontmatter: {
        title: 'Test Article 1',
      },
    },
  },
  {
    node: {
      fields: {
        slug: 'testslug2',
      },
      frontmatter: {
        author: 'Test Author 2',
        description: 'Test description 2',
        title: 'Test Article 2',
      },
    },
  },
  {
    node: {
      fields: {
        slug: 'testslug3',
      },
      frontmatter: {
        author: 'Test Author 3',
        description: 'Test description 3',
        date: '3 Jul, 21',
        featuredImage: mockImage,
        title: 'Test Article 3',
      },
    },
  },
  {
    node: {
      fields: {
        slug: 'testslug4',
      },
      frontmatter: {
        author: 'Test Author 4',
        description: 'Test description 4',
        title: 'Test Article 4',
      },
    },
  },
];

export default testArticleListData;
