import React from 'react';
import { render } from '@testing-library/react';
import PreviewColumn from '../components/PreviewColumn';
import testColumnData1 from './testData/testContentData';

describe('PreviewColumn component', () => {
  const testColumnData2 = [
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
  ];

  it('Renders 4 previews', () => {
    const container = render(
      <PreviewColumn columnPreviewData={testColumnData1} />
    );
    expect(container.getAllByRole('listitem')).toHaveLength(4);
  });
  it('Renders 1 preview', () => {
    const container = render(
      <PreviewColumn columnPreviewData={testColumnData2} />
    );
    expect(container.getAllByRole('listitem')).toHaveLength(1);
  });
  it('Renders correct information in each preview', () => {
    const container = render(
      <PreviewColumn columnPreviewData={testColumnData1} />
    );
    const previews = container.queryAllByRole('listitem');
    expect(previews[0]).toHaveTextContent('Test Article 1');
    expect(previews[1]).toHaveTextContent('Test Article 2');
    expect(previews[1]).toHaveTextContent('Test Author 2');
    expect(previews[1]).toHaveTextContent('Test description 2');
    expect(previews[2]).toHaveTextContent('Test Article 3');
    expect(previews[2]).toHaveTextContent('Test description 3');
    expect(previews[2]).toHaveTextContent('3 Jul, 21');
  });
  it('Renders header and bottom link', () => {
    const container = render(
      <PreviewColumn
        columnPreviewData={testColumnData2}
        header="Test column"
        bottomLink="test items"
      />
    );
    expect(container.getByText('Test column')).toBeInTheDocument();
    expect(container.getByText('test items')).toBeInTheDocument();
  });
});
