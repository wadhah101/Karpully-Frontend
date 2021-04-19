import React from 'react'
import { navLinks } from './data'
import HeaderLogo from './HeaderLogo'
import Link from 'next/link'

interface IStatelessHeaderProps {
  text: { white: boolean }
  background: { transparent: boolean }
}

const StatelessHeader: React.FC<IStatelessHeaderProps> = () => {
  const navLinksLocal = navLinks.slice(0)
  return (
    <header className="flex flex-col items-center justify-center h-24 px-16 shadow ">
      <div className="flex items-center w-full">
        <HeaderLogo />
        <div className="flex-grow" />
        <nav>
          <ul className="grid items-center grid-flow-col-dense gap-6 capitalize ">
            {navLinksLocal.map((e) => (
              <Link passHref key={e.link.name} href={e.link.to}>
                <a>
                  <li>{e.link.name}</li>
                </a>
              </Link>
            ))}
            <li> login </li>
            <li className="grid px-8 py-3 bg-opacity-50 rounded-lg place-items-center text-kpink-500 bg-kpink-100 ">
              sign up
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default StatelessHeader
