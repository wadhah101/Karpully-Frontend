import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as Home from '../components/pages/Home/exports'
import { User } from '../graphql/generated-types'
import { CoreState } from '../utils/redux/store'

const HomePage: NextPage = () => {
  const router = useRouter()
  const user = useSelector<CoreState, Partial<User>>((state) => state.auth.user)
  useEffect(() => {
    if (user) router.push('/feed')
    return () => null
  }, [router, user])
  return (
    <div>
      <Home.Banner />
      <Home.Features />
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
