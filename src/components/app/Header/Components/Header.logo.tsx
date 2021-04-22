import Link from 'next/link'
import React from 'react'
import { User } from '../../../../graphql/generated-types'
// import { gql } from '@apollo/client'

interface IHeaderLogoProps {
  user: Partial<User>
}

const HeaderLogo: React.FC<IHeaderLogoProps> = ({ user }) => {
  return (
    <Link href={user ? '/feed' : '/'} passHref>
      <a className="block">
        <img alt="site logo" src="/logo/logo.svg" className="h-12 " />
      </a>
    </Link>
  )
}

export default HeaderLogo
