import React from 'react';
import Layout from '@theme/Layout';
import Features from '@site/src/sections/features';
import Hero from '@site/src/sections/hero';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Data Management for Architects with Microsoft 365">
      <main>
        <Hero />
        <Features />
      </main>
    </Layout>
  );
}
