export default {
  childImageSharp: {
    gatsbyImageData: {
      id: 'test',
      backgroundColor: 'transparent',
      layout: 'constrained',
      images: {
        fallback: {
          sizes: '(min-width 383px) 383px, 100vw',
          src: '/mock',
          srcSet: '/mock',
        },
        sources: [
          {
            sizes: '(min-width 383px) 383px, 100vw',
            srcSet: '/mock',
            type: 'image/webp',
          },
        ],
      },
      placeholder: {
        fallback: 'mock',
      },
    },
  },
};
