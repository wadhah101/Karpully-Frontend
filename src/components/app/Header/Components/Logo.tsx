import Link from 'next/link'
import React from 'react'
import { User } from '../../../../graphql/generated-types'
import Logo from '@public/logo/logo.svg'

interface IHeaderLogoProps {
  user: Partial<User>
}

const HeaderLogo: React.FC<IHeaderLogoProps> = ({ user }) => {
  return (
    <Link href={user ? '/feed' : '/'} passHref>
      <a className="block text-kgreen-700 ">
        <Logo className="fill-current" height="3rem" width="auto" />
      </a>
    </Link>
  )
}

export default HeaderLogo
