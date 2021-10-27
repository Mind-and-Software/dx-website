import React from 'react';
import { render } from '@testing-library/react';
import ContentPageItems from '../components/ContentPageItems';
import testContentData from './testData/testContentData';

describe('ContentPageItems component', () => {
  it('Renders correctly (title, description, number of list items etc)', () => {
    const component = render(
      <ContentPageItems
        title="Test content page"
        description="Test description"
        type="Test"
        itemEdges={testContentData}
        initCurrentPage={1}
      />
    );
    expect(component.container).toHaveTextContent('Test content page');
    expect(component.container).toHaveTextContent('Test description');
    expect(component.container.querySelectorAll('.articlePreview').length).toBe(
      4
    );
  });
});
