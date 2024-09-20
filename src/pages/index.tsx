import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { Button, Input } from 'antd';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      hi this is ali
      <Button type="primary" className="bg-green-900 w-[120px]">
        Click Me
      </Button>
      <Input placeholder="Please Input" />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
