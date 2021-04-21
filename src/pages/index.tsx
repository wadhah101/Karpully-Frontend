import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import * as Home from '../components/pages/Home/exports'

const HomePage: NextPage = () => {
  return (
    <div>
      <Home.Banner />
      <Home.Features />
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
