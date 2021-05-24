import * as React from 'react';

import { HeaderLinkData } from '@comp/app/Header/data';
import Link from 'next/link';

interface IDektopNavItemProps {
  data: HeaderLinkData;
  onClick?: (e) => void;
}

const DektopNavItem: React.FunctionComponent<IDektopNavItemProps> = ({
  data: {
    link: { to, name },
  },
  onClick,
}) => {
  if (onClick) {
    return (
      <button
        type="button"
        style={{ fontWeight: 'inherit', textTransform: 'inherit' }}
        className="cursor-pointer "
        onClick={onClick}
      >
        {name}
      </button>
    );
  }

  return (
    <Link passHref href={to}>
      <a title={name}> {name} </a>
    </Link>
  );
};

export default DektopNavItem;
