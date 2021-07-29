import * as React from 'react';

import Blurb from '../components/Blurb';
import Layout from '../components/layout';
import Tag from '../components/Tag';
import ArticlePreview from '../components/ArticlePreview';

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
      <Blurb>
        <b>TL;DR </b>
        Knowledgeable developers are like royalty that’s hard to please. But
        they’re irreplaceable. Yes, you can substitute employees, but if they’re
        less skilled, you might end up with costly refactoring. If you value the
        experienced team you have, consider working on what’s called the
        developer experience to keep them eager and comfortable.
      </Blurb>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
    <ArticlePreview
      date={new Date()}
      readingTime="5 min"
      previewImageSrc="images/placeholder.png"
      title="Your first DX survey"
      author="Test Author"
      authorCredentials="Researcher"
      articleUrl="/docs/test-article"
    >
      Learn how to design your first Developer Experience survey and start
      measuring your own or your team’s DX right now!
    </ArticlePreview>
  </Layout>
);

export default IndexPage;
