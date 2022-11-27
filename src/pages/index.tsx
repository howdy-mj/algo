import React from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      >
      <main>
          <HomepageFeatures />
      </main>
    </Layout>
  );
}
