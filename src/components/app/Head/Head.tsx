import React from 'react'
import useRefreshToken from 'src/utils/apollo/useRefreshToken'
import useQueryDetector from '@utils/app/useQueryDetector'
import Head from 'next/head'
const description = `Here is a precise description of my awesome webpage`

const AppHead: React.FC = () => {
  useRefreshToken()
  useQueryDetector()

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      <title>Karpully</title>
      <meta property="og:title" content="Karpully" key="title" />
      <meta name="description" content={description} />
    </Head>
  )
}

export default AppHead
