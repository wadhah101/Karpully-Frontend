import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import HomeBanner from '../components/pages/Home/HomeBanner'

const Home: NextPage = () => {
  return (
    <div>
      <HomeBanner />
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
