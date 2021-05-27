import React from 'react';
import { render } from '@testing-library/react';
import IndexPage from '../index';

it('Renders hello world', () => {
  const app = render(<IndexPage />);
  const hello = app.getByText(/hello world/i);

  expect(hello).toBeDefined();
});
