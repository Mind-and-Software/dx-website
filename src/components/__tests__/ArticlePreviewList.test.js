import React from 'react';
import { render } from '@testing-library/react';
import ArticlePreviewList from '../ArticlePreviewList';
import testContentData from './testData/testContentData';

describe('ArticlePreviewList component', () => {
  it('Renders all 4 previews in the data', () => {
    const container = render(
      <ArticlePreviewList previewData={testContentData} type="test" />
    );
    expect(container.getAllByRole('listitem')).toHaveLength(4);
  });

  it('Data should be split into two columns of previews', () => {
    const container = render(
      <ArticlePreviewList previewData={testContentData} type="test" />
    );
    expect(container.getAllByTestId('previewColumn')).toHaveLength(2);
  });

  it('Renders correct information in each preview', () => {
    const container = render(
      <ArticlePreviewList previewData={testContentData} type="test" />
    );
    const previews = container.queryAllByRole('listitem');
    expect(previews[0]).toHaveTextContent('Test Article 1');
    expect(previews[1]).toHaveTextContent('Test Article 2');
    expect(previews[1]).toHaveTextContent('Test Author 2');
    expect(previews[1]).toHaveTextContent('Test description 2');
    expect(previews[2]).toHaveTextContent('Test Article 3');
    expect(previews[2]).toHaveTextContent('Test description 3');
    expect(previews[2]).toHaveTextContent('3 Jul, 21');
    expect(previews[3]).toHaveTextContent('Test Article 4');
    expect(previews[3]).toHaveTextContent('Test Author 4');
    expect(previews[3]).toHaveTextContent('Test description 4');
  });
});
