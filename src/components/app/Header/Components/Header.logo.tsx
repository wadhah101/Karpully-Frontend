import Link from 'next/link'
import React from 'react'
// import { gql } from '@apollo/client'

interface IHeaderLogoProps {}

// const gqp = gql``

const HeaderLogo: React.FC<IHeaderLogoProps> = () => {
  return (
    <Link href="/" passHref>
      <a className="block">
        <img alt="site logo" src="/logo/logo.svg" className="h-12 " />
      </a>
    </Link>
  )
}

export default HeaderLogo
