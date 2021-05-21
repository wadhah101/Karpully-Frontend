import React from 'react';

import * as Home from '@comp/pages/Home/exports';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage = () => (
  <div>
    <Home.Banner />
    <div className="py-20 md:py-40 c-container">
      <Home.Features />
    </div>

    {/* Social proff */}
    {/* FAQ */}

    <div className="pb-20 md:pb-40 c-container ">
      <Home.Social />
    </div>

    <div className="pb-20 md:pb-40 c-container">
      <Home.FAQ />
    </div>
    {/* Reach Us */}
  </div>
);

export const getStaticProps: GetStaticProps = async (_ctx) => ({
  props: {
    data: null,
  },
});

export default HomePage;
