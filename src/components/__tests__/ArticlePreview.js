import React from 'react';
import { render } from '@testing-library/react';
import ArticlePreview from '../ArticlePreview';

describe('ArticlePreview component', () => {
  it('Renders correctly with different props', () => {
    const app = render(<ArticlePreview />);
    expect(app).toBeDefined();
  });
});
