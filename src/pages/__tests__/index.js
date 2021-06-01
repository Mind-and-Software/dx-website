import React from 'react';
import { render } from '@testing-library/react';
import IndexPage from '../index';

it('Renders hello world', () => {
  const app = render(<IndexPage />);
  expect(app).toBeDefined();
});
