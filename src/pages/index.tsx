import React from 'react';

import * as Home from '@comp/pages/Home/exports';
import MyDisclosure from '@comp/utils/Disclosure';
import { GetStaticProps, NextPage } from 'next';

const HomePage: NextPage = () => (
  <div>
    <Home.Banner />
    <div className="mb-20 ">
      <div className="py-24 c-container ">
        <Home.Features />
      </div>
    </div>

    {/* Social proff */}
    {/* FAQ */}

    <div className="py-24 c-container">
      <MyDisclosure />
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
