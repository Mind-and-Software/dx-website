import React from 'react';
import { render } from '@testing-library/react';
import ArticlePreview, { AuthorSection } from '../ArticlePreview';

const mockImage = {
  node: {
    base: 'mock-image.png',
    id: 'testid',
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
  },
};

describe('ArticlePreview component', () => {
  it('Renders title', () => {
    const container = render(<ArticlePreview title="Title" articleUrl="url" />);
    expect(container.getByText('Title')).toBeInTheDocument();
  });

  it('Renders date and read time', () => {
    const container = render(
      <ArticlePreview
        title="Title"
        articleUrl="url"
        date={new Date(2020, 11, 31)}
        readingTime="9 min"
      />
    );
    expect(container.getByText('Title')).toBeInTheDocument();
    expect(container.getByText('31 Dec, 2020')).toBeInTheDocument();
    expect(container.getByText('9 min read')).toBeInTheDocument();
  });

  it('Renders tags', () => {
    const container = render(
      <ArticlePreview
        title="Title"
        articleUrl="url"
        tags={['Research', 'Development']}
      />
    );
    expect(container.getByText('Research')).toBeInTheDocument();
    expect(container.getByText('Development')).toBeInTheDocument();
  });

  it('Renders description', () => {
    const container = render(
      <ArticlePreview
        title="Title"
        articleUrl="url"
        description="Example description"
      />
    );
    expect(container.getByText('Example description')).toBeInTheDocument();
  });

  it('Renders image', () => {
    const container = render(
      <ArticlePreview title="Title" articleUrl="url" previewImage={mockImage} />
    );
    expect(container.getByAltText('Title')).toBeInTheDocument();
  });

  it('Renders authorSection', () => {
    const container = render(
      <ArticlePreview title="Title" articleUrl="url" authorName="Author" />
    );
    expect(container.getByText('Author')).toBeInTheDocument();
  });
});

describe('AuthorSection component', () => {
  it('Renders correctly without credentials', () => {
    const container = render(
      <AuthorSection name="Author" url="url" credentials="" image={mockImage} />
    );
    expect(container.getByText('Author')).toBeInTheDocument();
    expect(container.getByTestId('profilepic')).toBeInTheDocument();
  });

  it('Renders correctly without image and credentials', () => {
    const container = render(
      <AuthorSection
        name="Author"
        url="url"
        credentials="Researcher"
        image=""
      />
    );
    expect(container.getByText('Author,')).toBeInTheDocument();
    expect(container.getByText('Researcher')).toBeInTheDocument();
    expect(container.queryByTestId('profilepic')).toBeNull();
  });
});
