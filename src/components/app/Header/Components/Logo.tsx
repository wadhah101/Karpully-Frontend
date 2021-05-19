import React from 'react';

import Logo from '@public/logo/logo.svg';
import Link from 'next/link';

import { User } from '../../../../graphql/generated-types';

interface IHeaderLogoProps {
  user: Partial<User>;
}

const HeaderLogo: React.FC<IHeaderLogoProps> = ({ user }) => (
  <Link href={user ? '/feed' : '/'} passHref>
    <a title="logo" className="block text-kgreen-700 ">
      <Logo className="fill-current" height="3rem" width="auto" />
    </a>
  </Link>
);

export default HeaderLogo;
