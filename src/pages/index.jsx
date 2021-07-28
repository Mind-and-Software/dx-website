import * as React from 'react';

import Layout from '../components/layout';
import Tag from '../components/tag';

// markup
const IndexPage = () => (
  <Layout>
    <title>DX Website</title>
    <h1>Hello World!</h1>
    <div>
      <Tag>Hello</Tag>
      <Tag type="link" action="/docs/test-article">
        Link
      </Tag>
      <Tag type="toggle">Toggle</Tag>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </Layout>
);

export default IndexPage;
