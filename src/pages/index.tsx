import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Button, Input } from 'antd';
import Layout from '../components/Layout';
import Stats from '../components/Home/Stats';
import FeatureHighlights from '../components/Home/FeatureHighlights';
import AboutUS from '../components/Home/AboutUs';


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Welcome to My Gatsby Site</h1>
      <p>This is the homepage content.</p>
      <Stats />
      <FeatureHighlights/>
      <AboutUS/>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
