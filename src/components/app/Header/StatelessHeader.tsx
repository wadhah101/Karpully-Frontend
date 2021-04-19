import React from 'react'
import { navLinks } from './data'
import HeaderLogo from './HeaderLogo'
import Link from 'next/link'
import clsx from 'clsx'

interface IStatelessHeaderProps {
  text: { white: boolean }
  body: { transparent: boolean; fixed: boolean }
}

const StatelessHeader: React.FC<IStatelessHeaderProps> = ({
  body: { fixed },
  text: { white },
}) => {
  const navLinksLocal = navLinks.slice(0)
  return (
    <header
      className={clsx(
        'flex flex-col w-screen z-10 items-center top-0 left-0 justify-center h-24 px-8  ',
        fixed ? 'fixed' : 'static'
      )}
    >
      <div className="flex items-center w-full">
        <HeaderLogo />
        <div className="flex-grow" />
        <nav>
          <ul
            className={clsx(
              'grid items-center grid-flow-col-dense gap-6 font-semibold  capitalize ',
              white
                ? 'text-black text-opacity-75'
                : 'text-white text-opacity-80'
            )}
          >
            {navLinksLocal.map((e) => (
              <Link passHref key={e.link.name} href={e.link.to}>
                <a>
                  <li>{e.link.name}</li>
                </a>
              </Link>
            ))}
            <li className="">
              <button className="font-semibold" onClick={() => null}>
                Login
              </button>
            </li>
            <li>
              <button className="grid px-8 py-2.5 text-white bg-opacity-50 rounded bg-gradient-to-r from-kgreen-700 font-semibold place-items-center to-kgreen-300 ">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default StatelessHeader
