import React from 'react';
import { render } from '@testing-library/react';
import ArticlePreview, { AuthorSection } from '../ArticlePreview';

describe('ArticlePreview component', () => {
  it('Renders title', () => {
    const container = render(<ArticlePreview title="Title" articleUrl="url" />);
    container.getByText('Title');
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
    container.getByText('Title');
    container.getByText('12/2020');
    container.getByText('9 min read');
  });

  it('Renders tags', () => {
    const container = render(
      <ArticlePreview
        title="Title"
        articleUrl="url"
        tags={['Research', 'Development']}
      />
    );
    container.getByText('Research');
    container.getByText('Development');
  });

  it('Renders image', () => {
    const container = render(
      <ArticlePreview title="Title" articleUrl="url" previewImageSrc="mock" />
    );
    container.getByAltText('Link');
  });

  it('Renders authorSection', () => {
    const container = render(
      <ArticlePreview title="Title" articleUrl="url" author="Author" />
    );
    container.getByText("Author");
    container.getByTestId('profilepic');
  });
});

describe('AuthorSection component', () => {
  it('Renders correctly without credentials', () => {
    const container = render(<AuthorSection author="Author" url="url" credentials="" imageSrc="mock" />);
    container.getByText('Author');
    container.getByTestId('profilepic');
  });

  it('Renders correctly with credentials', () => {
    const container = render(<AuthorSection author="Author" url="url" credentials="Researcher" imageSrc="mock" />);
    container.getByText('Author,');
    container.getByText('Researcher');
    container.getByTestId('profilepic');
  });
});

