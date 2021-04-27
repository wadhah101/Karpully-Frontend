import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import * as Home from '@comp/pages/Home/exports'

const HomePage: NextPage = () => {
  return (
    <div>
      <Home.Banner />
      <div className="mb-20 ">
        <div className="py-24 c-container ">
          <Home.Features />
        </div>
      </div>

      {/* Social proff */}
      {/* FAQ */}
      {/* Reach Us */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  return {
    props: {
      data: null,
    },
  }
}

export default HomePage
