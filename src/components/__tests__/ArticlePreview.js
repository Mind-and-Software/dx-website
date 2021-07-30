import React from 'react';
import { render } from '@testing-library/react';
import ArticlePreview, { AuthorSection } from '../ArticlePreview';

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
    expect(container.getByText('12/2020')).toBeInTheDocument();
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

  it('Renders image', () => {
    const container = render(
      <ArticlePreview title="Title" articleUrl="url" previewImageSrc="mock" />
    );
    expect(container.getByAltText('Title')).toBeInTheDocument();
  });

  it('Renders authorSection', () => {
    const container = render(
      <ArticlePreview title="Title" articleUrl="url" author="Author" />
    );
    expect(container.getByText('Author')).toBeInTheDocument();
    expect(container.getByTestId('profilepic')).toBeInTheDocument();
  });
});

describe('AuthorSection component', () => {
  it('Renders correctly without credentials', () => {
    const container = render(
      <AuthorSection
        author="Author"
        url="url"
        credentials=""
        imageSrc="mock"
        vertical={false}
      />
    );
    expect(container.getByText('Author')).toBeInTheDocument();
    expect(container.getByTestId('profilepic')).toBeInTheDocument();
  });

  it('Renders correctly with credentials', () => {
    const container = render(
      <AuthorSection
        author="Author"
        url="url"
        credentials="Researcher"
        imageSrc="mock"
        vertical
      />
    );
    expect(container.getByText('Author,')).toBeInTheDocument();
    expect(container.getByText('Researcher')).toBeInTheDocument();
    expect(container.queryByTestId('profilepic')).toBeNull();
  });
});
