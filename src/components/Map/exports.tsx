import dynamic from 'next/dynamic'
import React from 'react'

const DemoMap = dynamic(() => import('./DemoMap'), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
})

export { DemoMap }
