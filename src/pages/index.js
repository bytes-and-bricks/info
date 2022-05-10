import React from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/sections/hero';
import Features from '../sections/features';
import Benefits from '@site/src/sections/benefits';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Data Management for Architects with Microsoft 365">
      <main>
        <Hero />
        <Features />
        <Benefits />
      </main>
    </Layout>
  );
}
