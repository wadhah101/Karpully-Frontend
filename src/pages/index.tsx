import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import HomeBanner from '../components/pages/Home/HomeBanner'
import HomeFeatures from '../components/pages/Home/HomeFeatures'

const Home: NextPage = () => {
  return (
    <div className="">
      <HomeBanner />
      <HomeFeatures />
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

export default Home
