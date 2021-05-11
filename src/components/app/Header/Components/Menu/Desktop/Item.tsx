import { HeaderLinkData } from '@comp/app/Header/data'
import Link from 'next/link'
import * as React from 'react'

interface IDektopNavItemProps {
  data: HeaderLinkData
  onClick?: (e) => void
}

const DektopNavItem: React.FunctionComponent<IDektopNavItemProps> = ({
  data: {
    link: { to, name },
  },
  onClick,
}) => {
  if (onClick)
    return (
      <span className="cursor-pointer " onClick={onClick}>
        {name}
      </span>
    )

  return (
    <Link passHref href={to}>
      <a title={name}> {name} </a>
    </Link>
  )
}

export default DektopNavItem
