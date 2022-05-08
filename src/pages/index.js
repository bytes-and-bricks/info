import React from 'react';
import Layout from '@theme/Layout';
import Features from '@site/src/components/Features';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Data Management for Architects with Microsoft 365">
      <main>
        <Features />
      </main>
    </Layout>
  );
}
