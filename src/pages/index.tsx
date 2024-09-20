import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Button, Input } from 'antd';
import Layout from '../components/Layout';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Welcome to My Gatsby Site</h1>
      <p>This is the homepage content.</p>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
