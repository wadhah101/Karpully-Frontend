import React from 'react'
import Head from 'next/head'
import useRefreshToken from 'src/utils/apollo/useRefreshToken'

const description = `Here is a precise description of my awesome webpage`

const AppHead: React.FC = () => {
  useRefreshToken()

  return (
    <Head>
      <title>Karpully</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="My page title" key="title" />
      <meta name="description" content={description} />
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
    </Head>
  )
}

export default AppHead
